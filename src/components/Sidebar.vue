<script setup lang="ts">
import { IonTabBar, IonTabButton, IonLabel } from '@ionic/vue';
</script>

<template>
  <IonTabBar slot="bottom" color="dark">
    <IonTabButton tab="home">
      <IonLabel>
        <router-link to="/" class="px-4">Главная</router-link>
      </IonLabel>
    </IonTabButton>
    <IonTabButton tab="banks">
      <IonLabel>
        <router-link to="/banks" class="px-4">Банки</router-link>
      </IonLabel>
    </IonTabButton>
  </IonTabBar>
</template>
