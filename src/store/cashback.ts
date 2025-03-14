import { defineStore } from 'pinia';

export interface Bank {
  id: string;
  name: string;
  selectedCategories: string[]; // ID выбранных категорий
}

export interface Category {
  id: string;
  name: string;
  selectedBanks: string[]; // ID банков, у которых активен кешбэк
}

export const useCashbackStore = defineStore('cashback', {
  state: () => ({
    categories: [
      { id: 'food', name: 'Рестораны и кафе', selectedBanks: ['tinkoff', 'sber'] },
      { id: 'fuel', name: 'АЗС', selectedBanks: ['alpha', 'raiffeisen'] },
      { id: 'market', name: 'Супермаркеты', selectedBanks: ['sber'] },
      { id: 'travel', name: 'Путешествия', selectedBanks: ['tinkoff'] },
    ] as Category[],
    
    banks: [
      { id: 'tinkoff', name: 'Тинькофф', selectedCategories: ['food', 'travel'] },
      { id: 'sber', name: 'Сбербанк', selectedCategories: ['food', 'market'] },
      { id: 'alpha', name: 'Альфа-Банк', selectedCategories: ['fuel'] },
      { id: 'raiffeisen', name: 'Райффайзен', selectedCategories: ['fuel'] },
    ] as Bank[],
  }),
  actions: {
    toggleBankInCategory(categoryId: string, bankId: string) {
      const category = this.categories.find(c => c.id === categoryId);
      if (!category) return;

      const index = category.selectedBanks.indexOf(bankId);
      if (index === -1) {
        category.selectedBanks.push(bankId);
      } else {
        category.selectedBanks.splice(index, 1);
      }

      const bank = this.banks.find(b => b.id === bankId);
      if (bank) {
        const bankIndex = bank.selectedCategories.indexOf(categoryId);
        if (bankIndex === -1) {
          bank.selectedCategories.push(categoryId);
        } else {
          bank.selectedCategories.splice(bankIndex, 1);
        }
      }
    }
  },
});
