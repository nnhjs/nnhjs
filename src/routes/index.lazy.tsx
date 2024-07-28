import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <h3>Welcome Home!</h3>
      <main>
        <ul>
          <li>
            <a href="https://x.com/nnhungjs">x</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nnhungjs/">linkedin</a>
          </li>
          <li>
            <a href="https://github.com/nnhjs">github</a>
          </li>
          <li>
            <a href="https://cv.nghiahung.dev/">cv</a>
          </li>
          <li>
            <a href="https://wedding.nghiahung.dev/">wedding</a>
          </li>
        </ul>
      </main>
    </>
  )
}
