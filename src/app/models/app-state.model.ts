import { Item } from "./item.model";

export interface AppState {
  readonly cart: Array<Item>
};