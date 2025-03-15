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
          <IonItem v-for="bank in store.banks" :key="bank.id" class="ion-margin-vertical" @click="toggleBank(bank.id)" >
            <IonLabel class="ion-text-wrap">
              <h2>{{ bank.name }}</h2>
            </IonLabel>
            <IonCheckbox
              :checked="store.categories.find(c => c.id === props.categoryId)?.selectedBanks.includes(bank.id)"
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
import { defineProps, defineEmits, ref } from 'vue';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, 
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