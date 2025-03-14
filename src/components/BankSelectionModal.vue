<script setup lang="ts">
import { useCashbackStore } from '../store/cashback';
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ categoryId: string; isOpen: boolean }>();
const emit = defineEmits(['update:isOpen']);
const store = useCashbackStore();

const toggleBank = (bankId: string) => {
  store.toggleBankInCategory(props.categoryId, bankId);
};
</script>

<template>
  <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded shadow-lg w-80">
      <h2 class="text-lg font-bold mb-2">Выберите банки</h2>
      <div v-for="bank in store.banks" :key="bank.id" class="flex items-center justify-between p-2 border-b">
        <span>{{ bank.name }}</span>
        <input type="checkbox" :checked="store.categories.find(c => c.id === props.categoryId)?.selectedBanks.includes(bank.id)" @change="toggleBank(bank.id)" />
      </div>
      <button @click="emit('update:isOpen', false)" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">Закрыть</button>
    </div>
  </div>
</template>
