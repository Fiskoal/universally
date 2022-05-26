import { CartAction, CartActionTypes } from "../actions/cart.actions";
import { Item } from "../models/item.model";

const initialState: Array<Item> = [
  {
    id: 1,
    name: "The Sun",
    type: "Star",
    image: "https://solarsystem.nasa.gov/internal_resources/5513/",
    description: "...is a deadly laser",
    price: 150000000,
    priceString: "$150,000,000"
  }
];

export function CartReducer(state: Array<Item> = initialState, action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return [...state, action.payload]
    default:
      return state;
  }
}