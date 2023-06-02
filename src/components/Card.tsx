import { useCartContext } from "../context/CartContext";

interface CardProps {
  productName: string;
  price: number,
  description: string
}

function Card({data}: {data: CardProps}) {
  // @ts-ignore
  const { items, setItems } = useCartContext();

  function addItem() {
    const exists = items.find((item: any) => item.productName === data.productName);

    if(exists){
      setItems((item:any) => item.productName === data.productName, "quantity", (q:number) => q+1)
    }else{
      setItems([...items, {productName: data.productName, quantity: 1, price: data.price}])
    }
  }

  return (
    <>
      <div class="flex border-2 border-slate-200 p-5 h-full w-auto">
        <img class="h-44 w-2/4" src="https://pngimg.com/uploads/pokemon/pokemon_PNG86.png" alt="Card" />
        <div class="p-2 flex flex-col">
          <div class="flex-1">
            <div class="w-[0 auto] font-bold">
              {data.productName}
            </div>
            <div>
              {data.description}
            </div>
          </div>
          <div class="grid gap-3">
            <span>Price: {data.price}</span>
            <button onClick={() => addItem()} class="border-red-200 border-2 p-2">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card