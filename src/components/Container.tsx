import type {Component, JSX} from 'solid-js'



function Container<Component>({children}: {children: JSX.Element}) {
  return (
    <div class="mx-40">
      { children }
    </div>
  )
}

export default Container