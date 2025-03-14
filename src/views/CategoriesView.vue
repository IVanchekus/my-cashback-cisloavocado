<script setup lang="ts">
import { useCashbackStore } from '../store/cashback';
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonModal } from '@ionic/vue';
import BankSelectionModal from '../components/BankSelectionModal.vue';

const store = useCashbackStore();
const selectedCategory = ref<string | null>(null);
const isModalOpen = ref(false);

const openModal = (categoryId: string) => {
  selectedCategory.value = categoryId;
  isModalOpen.value = true;
};
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Категории кешбэка</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonList class="p-4">
        <IonItem v-for="category in store.categories" :key="category.id" class="ion-margin-vertical">
          <IonLabel class="ion-text-wrap">
            <h2>{{ category.name }}</h2>
            <p class="text-sm text-gray-600">
              Выбранные банки: 
              <span v-for="bankId in category.selectedBanks" :key="bankId">
                {{ store.banks.find(b => b.id === bankId)?.name }}
              </span>
            </p>
          </IonLabel>
          <IonButton slot="end" color="primary" @click="openModal(category.id)">
            +
          </IonButton>
        </IonItem>
      </IonList>

      <IonModal :is-open="isModalOpen" @did-dismiss="isModalOpen = false">
        <BankSelectionModal v-model:is-open="isModalOpen" :category-id="selectedCategory!" />
      </IonModal>
    </IonContent>
  </IonPage>
</template>

