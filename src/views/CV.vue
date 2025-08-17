<script setup lang="ts">
import { profile } from "../models/profile";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPrint, faLink } from "@fortawesome/free-solid-svg-icons";

function print() {
  window.print();
}
</script>

<template>
  <v-container>
    <v-row :justify="'center'" class="print-btn mb-3">
      <v-btn @click="print">
        <FontAwesomeIcon :icon="faPrint" />
        &nbsp;
        <span>imprimer</span>
      </v-btn>
    </v-row>

    <div class="paper">
      <div class="large-side">
        <div class="name section">
          <p>
            {{ profile.name }}
          </p>
        </div>
        <div class="section">
          <h4>PROFIL PROFESSIONNEL</h4>
          <hr />
          <p class="description">
            {{ profile.description }}
          </p>
        </div>
        <div class="section">
          <h4>PARCOURS PROFESSIONNEL</h4>
          <hr />
          <template v-for="(job, j) in profile.jobs" v-bind:key="j">
            <div v-if="job.show" class="list-container">
              <p>
                <span class="list-title">{{ job.title }}</span>
                ,
                <span> {{ job.begin }} - {{ job.end }} </span>
              </p>
              <p class="job-description">
                <a target="_blank" :href="job.link"> {{ job.buisness }} </a>,
                {{ job.city }} - {{ job.type }}
              </p>
              <ul class="list">
                <template v-for="(task, t) in job.tasks" v-bind:key="t">
                  <li>{{ task }}</li>
                </template>
              </ul>
            </div>
          </template>
        </div>
        <div class="schools section">
          <h4>FORMATIONS</h4>
          <hr />
          <template v-for="(school, s) in profile.schools" v-bind:key="s">
            <div v-if="school.show" class="list-container">
              <p>
                <span class="list-title">{{ school.title }}</span>
                ,
                <span> {{ school.begin }} - {{ school.end }} </span>
              </p>
              <p class="school-description">
                <a target="_blank" :href="school.link"> {{ school.name }} </a>,
                {{ school.city }}
              </p>
              <ul class="list">
                <template v-for="(task, t) in school.tasks" v-bind:key="t">
                  <li>
                    {{ task.title }}
                    <a v-if="task.link" target="_blank" :href="task.link">
                      <FontAwesomeIcon :icon="faLink"
                    /></a>
                  </li>
                </template>
              </ul>
            </div>
          </template>
        </div>
      </div>
      <div class="small-side">
        <div class="section">
          <template v-for="(contact, c) in profile.contacts" v-bind:key="c">
            <a class="contact" :href="contact.link">
              <FontAwesomeIcon :icon="contact.icon" />
              &nbsp;
              <span class="contact-text">{{ contact.text }}</span>
            </a>
          </template>
        </div>
        <div class="section">
          <h4>COMPÉTENCES</h4>
          <hr />
          <div class="list-container">
            <ul class="list">
              <template
                v-for="(skill, s) in profile.personalSkills"
                v-bind:key="s"
              >
                <li>{{ skill }}</li>
              </template>
            </ul>
          </div>
        </div>
        <div class="section">
          <h4>COMPÉTENCES INFORMATIQUE</h4>
          <hr />
          <template
            v-for="(skillGroup, sg) in profile.skillGroups"
            v-bind:key="sg"
          >
            <div class="list-container">
              <p class="list-title">{{ skillGroup.name }}</p>
              <ul class="list">
                <template
                  v-for="(skill, s) in skillGroup.skills"
                  v-bind:key="s"
                >
                  <li>{{ skill }}</li>
                </template>
              </ul>
            </div>
          </template>
        </div>
        <div class="section">
          <h4>CENTRES D'INTÉRÊT</h4>
          <hr />
          <div class="list-container">
            <ul class="list">
              <template
                v-for="(interest, i) in profile.interests"
                v-bind:key="i"
              >
                <li>{{ interest }}</li>
              </template>
            </ul>
          </div>
        </div>
        <div class="section">
          <h4>LANGUES</h4>
          <hr />
          <div class="list-container">
            <ul class="list">
              <template
                v-for="(language, l) in profile.languages"
                v-bind:key="l"
              >
                <li>{{ language }}</li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
@media print {
  .paper {
    height: 11in;
    margin: 0;
    padding: 0;
  }

  .small-side {
    width: 2.8in;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .large-side {
    width: 5in;
  }

  .print-btn {
    display: none;
  }

  .v-container {
    padding: 0;
    margin: 0;
  }
}

.paper {
  width: 8.5in;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: auto !important;
  margin-right: auto !important;
  padding: 0px 0px 0px 0px;
  font-size: 12px;
}

/* sides */
.small-side,
.large-side {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.paper hr {
  height: 2px;
  border: 0;
  margin: 6;
}

.paper h4 {
  font-size: 15px !important;
  margin: 0;
}

.small-side {
  background-color: #275879 !important;
  min-width: 2.8in;
  max-width: 50%;
  padding: 0.7cm 1cm 0.7cm 0.7cm;
}

.small-side * {
  color: white;
}

.small-side hr {
  background-color: white;
}

.large-side {
  padding: 0.7cm 0.7cm 0.7cm 1cm;
}

.large-side * {
  color: #275879;
}

.large-side hr {
  background-color: #275879;
}

.name {
  font-size: 64px;
  font-weight: 700;
  line-height: 50px;
  margin-bottom: 0.5cm;
}

.description,
.list-container {
  margin-top: 0.25cm;
}

.list-title {
  font-weight: 600;
}

.contact {
  display: flex;
  text-decoration: none;
}

.contact-text {
  text-decoration: underline;
}

.list {
  padding-inline-start: 40px;
}

.section {
  margin-top: 0.4cm;
}
</style>
