import { createFileRoute, Link } from '@tanstack/react-router'
import styled from 'styled-components'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>
      <Link to="/about">About</Link>
    </>
  ),
})

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  font-family: monospace;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`
