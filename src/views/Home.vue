<script setup lang="ts">
import { projects } from "@/models/projects";
</script>

<template>
  <v-container>
    <h1>Projets</h1>
    <p>Voici quelques projets que j'ai réalisé (page en construction)</p>
    <v-row>
      <v-col cols="12" md="6" v-for="(project, p) in projects" :key="p">
        <div class="social custom">
          <div class="content">
            <h2 color="white">
              <a :href="project.link" target="_blank">
                {{ project.name }}
              </a>
            </h2>
            <h3>Description:</h3>
            <p class="list">{{ project.description }}</p>
            <h3 v-if="project.contribution">Contribution:</h3>
            <ul v-if="project.contribution" class="list">
              <li v-for="(contribution, c) in project.contribution" :key="c">
                {{ contribution }}
              </li>
            </ul>
            <h3>Technologies:</h3>
            <p class="list">{{ project.technologies.join(", ") }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.social {
  border-radius: 8px;
  align-items: start;
  margin-top: 20px;
}

.content {
  margin: 0px 10px;
  height: 100%;
  flex-grow: 1;
  position: relative;
}

.custom {
  display: flex;
  flex-direction: row;
}

.custom a {
  color: black;
}

.list {
  list-style-type: "- ";
  padding-left: 20px;
}

h3 {
  font-size: 1rem;
  font-weight: 500;
}
</style>
