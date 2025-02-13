<script setup lang="ts">
import stats from "@/assets/steam/stats.json";
import steamLogo from "@/assets/steam/logo.png";

import githubLogo from "@/assets/github/logo.png";
import discordLogo from "@/assets/discord/logo.png";

const steamStats = stats.steam;
const githubStats = stats.github;
const githubURL = `https://github.com/${githubStats.login}`;
const discordStats = stats.discord;
const discordURL = `https://discord.com/users/${discordStats.id}`;
const discordAvatar = `https://cdn.discordapp.com/avatars/${discordStats.id}/${discordStats.avatar}`;

const steamGames = steamStats.games
  .filter(
    (game) => game.playtime_forever > 0 && game.name != "Wallpaper Engine"
  )
  .sort((a, b) => b.playtime_forever - a.playtime_forever)
  .slice(0, 20);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <div class="social custom steam">
              <img class="profile" :src="steamStats.avatarfull" />

              <div class="content">
                <h2 color="white">
                  <a :href="steamStats.profileurl" target="_blank">
                    {{ steamStats.personaname }}
                  </a>
                </h2>
                <div class="round">
                  <p>{{ steamStats.player_level }}</p>
                </div>
                <p>{{ steamStats.game_count }} jeux</p>
                <div class="steam-game">
                  <a
                    v-for="(game, g) in steamGames"
                    :key="g"
                    :href="`https://store.steampowered.com/app/${game.appid}`"
                    target="_blank"
                    :title="game.name"
                  >
                    <img
                      :src="`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`"
                    />
                  </a>
                </div>

                <img class="logo" :src="steamLogo" />
              </div>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="social custom github">
              <img class="profile" :src="githubStats.avatar_url" />

              <div class="content">
                <h2 color="white">
                  <a :href="githubURL" target="_blank">
                    {{ githubStats.login }}
                  </a>
                </h2>
                <p>{{ githubStats.name }}</p>

                <img class="logo" :src="githubLogo" />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <div class="social embeded">
          <iframe
            src="https://www.instagram.com/turkdenis/embed"
            frameborder="0"
          ></iframe>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="12">
            <div class="social custom discord">
              <img class="profile" :src="discordAvatar" />

              <div class="content">
                <h2 color="white">
                  <a :href="discordURL" target="_blank">
                    {{ discordStats.username }}
                  </a>
                </h2>
                <p>{{ discordStats.global_name }}</p>

                <img class="logo" :src="discordLogo" />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.steam {
  background-color: #171a21;
}
.discord {
  background-color: #1e1f22;
}
.github {
  background-color: rgb(1, 4, 9);
}

.steam *,
.discord *,
.github * {
  color: white;
}

.steam-game {
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: wrap;
  height: 32px;
}
.steam-game img {
  height: 32px;
  width: 32px;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.2s;
}

.custom {
  height: 175px;
  display: flex;
  flex-direction: row;
}

.round {
  border-radius: 100%;
  border-color: white;
  border-style: solid;
  height: 30px;
  width: 30px;
  display: flex;
  justify-items: center;
}
.round p {
  margin: auto;
}

.social {
  border-radius: 8px;
  align-items: start;
}

.content {
  margin: 0px 10px;
  height: 100%;
  flex-grow: 1;
  position: relative;
}

.logo {
  max-width: 100px;
  max-height: 25px;
  object-fit: contain;
  position: absolute;
  display: block;
  top: 6px;
  right: 6px;
}

.profile {
  margin: 10px;
  border-radius: 8px;
  height: calc(100% - 2 * 10px);
}

.embeded,
.embeded iframe {
  width: 100%;
  height: 100%;
}
.embeded iframe {
  border-radius: 8px;
}
</style>
