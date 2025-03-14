<script setup lang="ts">
import {  IonContent, IonPage } from '@ionic/vue';
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <IonPage>
    <IonContent><RouterView></RouterView></IonContent>
    <Sidebar></Sidebar>
  </IonPage>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
