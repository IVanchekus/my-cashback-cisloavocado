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
        <h1>{{ store.categories.find(c => c.id === props.categoryId)?.name }}</h1>
        <IonList>
          <IonItem v-for="bank in store.banks" :key="bank.id" class="ion-margin-vertical" @click="toggleBank(bank.id)" >
            <IonCheckbox
              :checked="store.categories.find(c => c.id === props.categoryId)?.selectedBanks.includes(bank.id)"
            >{{ bank.name }}</IonCheckbox>
          </IonItem>
        </IonList>
        <div>
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
import type { IProps } from './bankSelectionModal.types';

const props = defineProps<IProps>();

const emit = defineEmits(['update:isOpen']);
const store = useCashbackStore();

const toggleBank = (bankId: string) => {
  store.toggleBankInCategory(props.categoryId, bankId);
};
</script>