1. Step 1: Break the UI into a component hierarchy.
Design(UI) => Component Hierarchy 
2. Step 2: Build a static version in React.
Component Hierarchy => Build Static Component, we can you props and const
3. Find the minimal but complete representation of UI state.
Change props and const to props and state in local component
4. Identify where your state should live.
Identify position of state should live
5. Add inverse data flow.
By a side state, we also need to pass inverse data flow ex: setState