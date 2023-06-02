import { A } from "@solidjs/router"
import Banner from "../assets/banner.jpg"
import { CartContext, DataType, useCartContext } from "../context/CartContext"
import { createEffect, useContext } from "solid-js";

function Navbar() {

  const {items}: any = useCartContext();

  const total = () => {
    return items.reduce((acc:any, current:any) => {
      return acc + current.quantity
    }, 0)
  }

  return (
    <>
      <div class="grid mt-10">
        <div class="flex gap-4 mb-3">
          <button class="text-blue-500 hover:text-blue-800">
            <A href="/" end activeClass="font-bold" inactiveClass="font-normal">Home</A>
          </button>
          <button class="text-blue-500 hover:text-blue-800">
            <A href="/cart" activeClass="font-bold" inactiveClass="font-normal">Cart {total()}</A>
          </button>
        </div>
        <img src={Banner} alt="Banner" class="w-full h-52" />
      </div>
    </>
  )
}

export default Navbar