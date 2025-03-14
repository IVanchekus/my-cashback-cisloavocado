<!-- views/BanksView.vue -->
<script setup lang="ts">
import { useCashbackStore } from '../store/cashback';
import { ref } from 'vue';
import { IonButton, IonCard, IonCardContent, IonLabel, IonContent,IonPage } from '@ionic/vue';
import CategorySelectionModal from '../components/CategorySelectionModal.vue';

const store = useCashbackStore();
const selectedBank = ref<string | null>(null);
const isModalOpen = ref(false);

const openModal = (bankId: string) => {
  selectedBank.value = bankId;
  isModalOpen.value = true;
};
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h1 class="text-xl font-bold">Банки</h1>
      <div v-for="bank in store.banks.filter(b => b.selectedCategories.length)" :key="bank.id">
        <ion-card class="ion-margin-vertical">
          <ion-card-content>
            <div class="flex justify-between items-center">
              <ion-label class="ion-text-wrap">{{ bank.name }}</ion-label>
              <ion-button @click="openModal(bank.id)" color="primary" size="small">
                +
              </ion-button>
            </div>
            <div class="text-sm text-gray-600 mt-2">
              <strong>Выбранные категории:</strong>
              <div v-for="categoryId in bank.selectedCategories" :key="categoryId">
                <span>{{ store.categories.find(c => c.id === categoryId)?.name }}</span>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </div>

      <CategorySelectionModal v-if="isModalOpen" v-model:is-open="isModalOpen" :bank-id="selectedBank!" />
    </ion-content>
  </ion-page>
</template>
