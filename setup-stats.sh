#!/bin/bash

# Variables
steam_summaryUrl="https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$STEAM_API_KEY&steamids=$STEAM_ID"
steam_levelUrl="http://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=$STEAM_API_KEY&steamid=$STEAM_ID"
steam_gamesUrl="http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=$STEAM_API_KEY&steamid=$STEAM_ID&format=json&include_appinfo=true&include_played_free_games=true"

discord_userUrl="https://discord.com/api/v10/users/$DISCORD_ID"
github_userUrl="https://api.github.com/user"

outputFolder="src/assets/steam"
file="stats.json"

# Create output directories if they don't exist
mkdir -p "$outputFolder"

# Get player stats
echo "Fetching stats for Steam ID: $STEAM_ID"
response=$(curl -s "$steam_summaryUrl")
steam_stats=$(echo "$response" | jq '.response.players[0]')

echo "Fetching player level for Steam ID: $STEAM_ID"
response=$(curl -s "$steam_levelUrl")
player_level=$(echo "$response" | jq '.response.player_level')
steam_stats=$(echo "$steam_stats" | jq --argjson level "$player_level" '. + {player_level: $level}')

echo "Fetching owned games for Steam ID: $STEAM_ID"
response=$(curl -s "$steam_gamesUrl")
games=$(echo "$response" | jq '.response.games')
game_count=$(echo "$response" | jq '.response.game_count')

# Filter out private games from STEAM_PRIVATE_GAMES (comma-separated IDs)
if [ -n "$STEAM_PRIVATE_GAMES" ]; then
  echo "Filtering out private games: $STEAM_PRIVATE_GAMES"
  exclude_ids=$(echo "$STEAM_PRIVATE_GAMES" | tr ',' '\n' | jq -R . | jq -s .)
  games=$(echo "$games" | jq --argjson exclude "$exclude_ids" '[.[] | select((.appid | tostring) as $id | ($exclude | index($id) | not))]')
  game_count=$(echo "$games" | jq 'length')
fi

steam_stats=$(echo "$steam_stats" | jq --argjson games "$games" --argjson count "$game_count" '. + {games: $games, game_count: $count}')

# Discord stats
echo "Fetching stats for Discord ID: $DISCORD_ID"
response=$(curl -s -H "Authorization: Bot $DISCORD_BOT_KEY" "$discord_userUrl")
discord_stats=$(echo "$response" | jq '.')

# Github stats
echo "Fetching stats for GitHub user"
response=$(curl -s -H "Authorization: Token $GIT_API_KEY" -H 'X-GitHub-Api-Version: 2022-11-28' "$github_userUrl")
github_stats=$(echo "$response" | jq '.')

# Wrap stats inside a "steam" property
finalStats=$(jq -n --argjson steam "$steam_stats" --argjson discord "$discord_stats" --argjson github "$github_stats" '{steam: $steam, discord: $discord, github: $github}')

# Save to file
path="$outputFolder/$file"
echo "$finalStats" >"$path"
