<template>
  <v-app-bar :elevation="2" app rounded>
    <v-toolbar-title>{{ profile.name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-for="route in routes">
      <v-btn :to="route.path">{{ route.name }}</v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { routes } from "@/router";
import { profile } from "../models/profile";
</script>

<style>
/* Add your custom styles here */
</style>
