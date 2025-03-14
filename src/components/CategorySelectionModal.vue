<script setup lang="ts">
import { useCashbackStore } from '../store/cashback';
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ bankId: string; isOpen: boolean }>();
const emit = defineEmits(['update:isOpen']);
const store = useCashbackStore();

const toggleCategory = (categoryId: string) => {
  store.toggleBankInCategory(categoryId, props.bankId);
};
</script>

<template>
  <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded shadow-lg w-80">
      <h2 class="text-lg font-bold mb-2">Выберите категории</h2>
      <div v-for="category in store.categories" :key="category.id" class="flex items-center justify-between p-2 border-b">
        <span>{{ category.name }}</span>
        <input 
          type="checkbox" 
          :checked="store.banks.find(b => b.id === props.bankId)?.selectedCategories.includes(category.id)" 
          @change="toggleCategory(category.id)" 
        />
      </div>
      <button @click="emit('update:isOpen', false)" class="mt-4 bg-red-500 text-white px-4 py-2 rounded">Закрыть</button>
    </div>
  </div>
</template>
