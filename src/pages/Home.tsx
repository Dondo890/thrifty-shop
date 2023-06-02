import { For } from "solid-js"
import Card from "../components/Card"

const items = [
  {
    "productName": "Damit ni Zachary",
    "description": "Simpleng damit",
    "price": 100
  },
  {
    "productName": "Sapatos ni Zachary",
    "description": "Gangsta shoes",
    "price": 500
  },
  {
    "productName": "Piplup",
    "description": "Pokemon to lods",
    "price": 1000
  },
  {
    "productName": "Gameboy",
    "description": "Gameboy duuh",
    "price": 1299
  },
  {
    "productName": "PS5",
    "description": "Playstation 5 kase PS5",
    "price": 30999
  },
]

function Home() {
  return (
    <div class="grid grid-cols-3 gap-4 mt-3">
      <For each={items}>
        {
          (item) => (
            <Card data={item} />
          )
        }
      </For>
    </div>
  )
}

export default Home