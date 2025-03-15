<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Банки</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList class="p-4">
        <IonItem v-for="bank in store.banks.filter(b => b.selectedCategories.length)" :key="bank.id" class="ion-margin-vertical">
          <IonLabel class="ion-text-wrap">
            <h2>{{ bank.name }}</h2>
            <p v-for="categoryId in bank.selectedCategories" :key="categoryId" class="text-sm text-gray-600">
              {{ store.categories.find(c => c.id === categoryId)?.name }}
            </p>
          </IonLabel>
          <IonButton slot="end" color="primary" @click="openModal(bank.id)">
            +
          </IonButton>
        </IonItem>
      </IonList>

      <CategorySelectionModal v-model:is-open="isModalOpen" :bank-id="selectedBank!" />
    </IonContent>
  </IonPage>
</template>

<script setup lang="ts">
import { useCashbackStore } from '../store/cashback';
import { ref } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, 
  IonLabel, IonButton
} from '@ionic/vue';
import CategorySelectionModal from '../components/CategorySelectionModal/CategorySelectionModal.vue';

const store = useCashbackStore();
const selectedBank = ref<string | null>(null);
const isModalOpen = ref(false);

const openModal = (bankId: string) => {
  selectedBank.value = bankId;
  isModalOpen.value = true;
};
</script>