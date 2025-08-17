<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <v-app>
    <NavBar />
    <v-divider :thickness="20" />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>
@page {
  size: letter portrait;
  margin: 0px 0px;
}

@media print {
  main {
    padding-top: 0 !important;
  }

  header + hr,
  header {
    display: none !important;
  }
}

body {
  font-family: "Prompt", "Noto Sans", sans-serif;
}
</style>
