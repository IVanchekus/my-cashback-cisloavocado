<script setup lang="ts">
import { IonTabBar, IonTabButton, IonLabel, IonTabs, IonRouterOutlet } from '@ionic/vue';
</script>

<template>
  <IonTabs>
    <IonRouterOutlet></IonRouterOutlet>
    <IonTabBar slot="bottom" color="dark">
      <IonTabButton tab="categories" href="/categories">
        <IonLabel>Категории</IonLabel>
      </IonTabButton>
      <IonTabButton tab="banks" href="/banks">
        <IonLabel>Банки</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
</template>
