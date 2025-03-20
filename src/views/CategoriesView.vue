<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Категории кешбэка</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem v-for="category in store.categories" :key="category.id" class="ion-margin-vertical">
          <IonLabel class="ion-text-wrap">
            <h2>{{ category.name }}</h2>
            <p v-for="bankId in category.selectedBanks" :key="bankId" class="text-sm text-gray-600">
              {{ store.banks.find(b => b.id === bankId)?.name }}
            </p>
          </IonLabel>
          <IonButton slot="end" color="primary" @click="openModal(category.id)">
            +
          </IonButton>
        </IonItem>
      </IonList>

      <BankSelectionModal v-if="isModalOpen" v-model:is-open="isModalOpen" :category-id="selectedCategory!" />
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { useCashbackStore } from '../store/cashback';
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/vue';
import BankSelectionModal from '../components/BankSelectionModal/BankSelectionModal.vue';

const store = useCashbackStore();
const selectedCategory = ref<string | null>(null);
const isModalOpen = ref(false);

const openModal = (categoryId: string) => {
  selectedCategory.value = categoryId;
  isModalOpen.value = true;
};
</script>