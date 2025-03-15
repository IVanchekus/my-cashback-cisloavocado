<template>
  <IonModal
    :is-open="isOpen"
    @did-dismiss="emit('update:isOpen', false)"
    :initial-breakpoint="0.50"
    :breakpoints="[0, 0.5, 1]"
    handle-behavior="cycle"
  >
    <div style="height: 100%;">
      <IonContent>
        <IonList class="p-4">
          <IonItem v-for="category in store.categories" :key="category.id" class="ion-margin-vertical" @click="toggleCategory(category.id)">
            <IonLabel class="ion-text-wrap">
              <h2>{{ category.name }}</h2>
            </IonLabel>
            <IonCheckbox 
              :checked="store.banks.find(b => b.id === props.bankId)?.selectedCategories.includes(category.id)"
              slot="end"
            />
          </IonItem>
        </IonList>
        <div class="flex justify-end p-4">
          <IonButton color="danger" @click="emit('update:isOpen', false)">Закрыть</IonButton>
        </div>
      </IonContent>
    </div>
  </IonModal>
</template>

<script setup lang="ts">
import { useCashbackStore } from '../../store/cashback';
import { defineProps, defineEmits } from 'vue';
import { 
  IonContent, IonList, IonItem, 
  IonLabel, IonButton, IonCheckbox, IonModal
} from '@ionic/vue';
import type { IProps } from './categorySelectionModal.types';

const props = defineProps<IProps>();
const emit = defineEmits(['update:isOpen']);
const store = useCashbackStore();

const toggleCategory = (categoryId: string) => {
  store.toggleBankInCategory(categoryId, props.bankId);
};
</script>
