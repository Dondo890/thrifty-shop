import { For } from "solid-js"
import { useCartContext } from "../context/CartContext";


function Cart() {

  const {items}: any = useCartContext();

  const total = () => {
    return items.reduce((acc:number, curr: any) => {
      return acc + (curr.price * curr.quantity);
    }, 0)
  }

  return (
    <div class=" flex justify-center items-center mt-11">
      <div class=" border-2 border-blue-100 p-4 grid place-items-center">
        Carts
        <For each={items}>
          {
            (item) => (
              <p>{`${item.productName}(${item.quantity}): ${item.price}`}</p>
            )
          }
        </For>
        <p>Total: &#8369;{total()}</p>
      </div>
    </div>
  )
}

export default Cart