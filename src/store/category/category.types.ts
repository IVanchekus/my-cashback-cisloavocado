import type { Bank } from "../bank/bank.types";

export type Category = {
  id: number;
  name: string;
  open: boolean;
  banks: Bank[];
}