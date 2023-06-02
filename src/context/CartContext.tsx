import { SetStoreFunction, createStore } from 'solid-js/store'
import { JSXElement, createContext, useContext } from "solid-js";

//type DataType = {productName?: string, quantity?: number};

export interface DataType {
  productName?: string;
  quantity?: number;
  price?: number;
}

export const CartContext = createContext();

export function CartContextProvider(props: any){
  const [items, setItems] = createStore<DataType[]>([]);

  return(
    <CartContext.Provider value={{items, setItems}}>
      {props?.children}
    </CartContext.Provider>
  )

}

export function useCartContext() {
  return useContext(CartContext);
}
