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
        <h1>{{ store.banks.find(b => b.id == bankId)?.name }}</h1>
        <IonList>
          <IonItem v-for="category in store.categories" :key="category.id" class="ion-margin-vertical" @click="toggleCategory(category.id)">
            <IonCheckbox 
              :checked="store.banks.find(b => b.id === props.bankId)?.selectedCategories.includes(category.id)"
            >{{ category.name }}</IonCheckbox>
          </IonItem>
        </IonList>
      </IonContent>
    </div>
  </IonModal>
</template>

<script setup lang="ts">
import { useCashbackStore } from '../../store/cashback';
import { defineProps, defineEmits } from 'vue';
import { 
  IonContent, IonList, IonItem, IonCheckbox, IonModal
} from '@ionic/vue';
import type { IProps } from './categorySelectionModal.types';

const props = defineProps<IProps>();
const emit = defineEmits(['update:isOpen']);
const store = useCashbackStore();

const toggleCategory = (categoryId: string) => {
  store.toggleBankInCategory(categoryId, props.bankId);
};
</script>
