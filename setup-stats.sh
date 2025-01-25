$summaryUrl = "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=$env:STEAM_API_KEY&steamids=$env:STEAM_ID"
$levelUrl = "http://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=$env:STEAM_API_KEY&steamid=$env:STEAM_ID"
$gamesUrl = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=$env:STEAM_API_KEY&steamid=$env:STEAM_ID&format=json&include_appinfo=true"
$outputFolder = "src/assets/steam"
$file = "stats.json"

# Create output directories if they don't exist
if (-Not (Test-Path $outputFolder)) {
    New-Item -ItemType Directory -Path $outputFolder
}

# Get player stats
$response = Invoke-WebRequest -Uri $summaryUrl
$content = ConvertFrom-JSON $response.Content
$stats = $content.response.players[0]

$response = Invoke-WebRequest -Uri $levelUrl
$content = ConvertFrom-JSON $response.Content
$stats | Add-Member -MemberType NoteProperty -Name 'player_level' -Value $content.response.player_level

$response = Invoke-WebRequest -Uri $gamesUrl
$content = ConvertFrom-JSON $response.Content
$stats | Add-Member -MemberType NoteProperty -Name 'games' -Value $content.response.games
$stats | Add-Member -MemberType NoteProperty -Name 'game_count' -Value $content.response.game_count
# Convert to JSON and save to file
$json = ConvertTo-Json $stats
$path = Join-Path $outputFolder $file
Set-Content -Path $path -Value $json