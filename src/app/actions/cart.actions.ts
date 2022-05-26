import { Action } from "@ngrx/store";
import { Item } from "../models/item.model";

export enum CartActionTypes {
  ADD_ITEM = '[CART] Add Item',
};

export class AddItemAction implements Action {
  readonly type = CartActionTypes.ADD_ITEM;

  constructor(public payload: Item) {
    console.log('adding item')
  };
};

export type CartAction = AddItemAction;