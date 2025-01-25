#!/bin/bash

# Variables
summaryUrl="https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$STEAM_API_KEY&steamids=$STEAM_ID"
levelUrl="http://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=$STEAM_API_KEY&steamid=$STEAM_ID"
gamesUrl="http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=$STEAM_API_KEY&steamid=$STEAM_ID&format=json&include_appinfo=true"
outputFolder="src/assets/steam"
file="stats.json"

# Create output directories if they don't exist
if [ ! -d "$outputFolder" ]; then
    mkdir -p "$outputFolder"
fi

# Get player stats
response=$(curl -s "$summaryUrl")
stats=$(echo "$response" | jq '.response.players[0]')

response=$(curl -s "$levelUrl")
player_level=$(echo "$response" | jq '.response.player_level')
stats=$(echo "$stats" | jq --argjson level "$player_level" '. + {player_level: $level}')

response=$(curl -s "$gamesUrl")
games=$(echo "$response" | jq '.response.games')
game_count=$(echo "$response" | jq '.response.game_count')
stats=$(echo "$stats" | jq --argjson games "$games" --argjson count "$game_count" '. + {games: $games, game_count: $count}')

# Save to file
path="$outputFolder/$file"
echo "$stats" >"$path"
