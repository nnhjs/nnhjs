import { ReactElement } from 'react'
import { render, queries, within, RenderOptions } from '@testing-library/react'
import * as customQueries from './custom-queries'

const allQueries = {
  ...queries,
  ...customQueries,
}

const customScreen = within(document.body, allQueries)
const customWithin = (element: HTMLElement) => within(element, allQueries)

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <div data-testid="all-the-providers">{children}</div>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper' | 'queries'>,
) => render(ui, { wrapper: AllTheProviders, queries: allQueries, ...options })

export * from '@testing-library/react'
export {
  customScreen as screen,
  customWithin as within,
  customRender as render,
}
