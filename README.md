# Nested Components

## Objectives:

1. Understand component interaction in React.
2. Learn how components can reference other components.
3. Recognize the ability to pass information between components.
4. Comprehend how components can return other components.
5. Explore the concept of breaking down a component into smaller extracted components.

## Preparation:

- Fork and clone this repository.
- Create a new branch called `training` for your work.
- Install the necessary dependencies using `npm install`.
- start the server by running `npm start`.

## Components Interact

In a React application, there can be numerous components, ranging from a few to several hundreds.

Although individual components may seem small and unremarkable, when they come together, they create vast and intricately interconnected systems of information.

To put it simply, React apps are composed of components, but what truly sets React apart is the manner in which these components interact.

Take a close look at this webpage:

![nested components](https://www.thesavvyfew.com/sites/default/files/inline-images/react-ui-components_0.png)

## Returning Another Component

In React, each component is responsible for a specific part of the user interface. As an application becomes more complex, components need to interact with each other to support the required features.

Previously, we explored components that return JSX elements, like:

```jsx
// ItemBox.js

function PurchaseButton() {
  return (
    <button
      onClick={() => {
        alert("Purchase Complete");
      }}
    >
      Purchase
    </button>
  );
}
```

In this example, the React component doesn't interact with other components. However, components can interact by passing information or even returning other components.

```jsx
// ItemBox.js

function PurchaseButton() {
  return (
    <button
      onClick={() => {
        alert("Purchase Complete");
      }}
    >
      Purchase
    </button>
  );
}

function ItemBox() {
  return (
    <div>
      <h1>50% Sale</h1>
      <h2>Item: Small Shirt</h2>
      <PurchaseButton />
    </div>
  );
}
```

In the above example, the `ItemBox` component returns an instance of `PurchaseButton`. This demonstrates how a component can reference other components.

### Expirement
Take a look at [`Profile.js`](./src/components/Profile.js) and observe how the `Picture` component is referenced inside the `Profile` component. The `Picture` component handles a specific part of the `Profile`.

In the end, only the `Profile` component is exported to be rendered.

## Applying a Component in a Render Function

You might have noticed that you've encountered this behavior before!

In previous lessons, when we defined components and exported them, we usually exported them into our top-level file, such as `App.js`. Inside `App.js`, we imported components and returned them within our `App` component, which is then exported for rendering!

```jsx
import Button from "./Button";

function App() {
  return <Button />;
}

export default App;
```

Does it look familiar? This capability allows us to break down components into smaller functions and connect them together to create more complex components!

We can consider the `Button` component as a child of the parent `App` component. By breaking down a component into smaller extracted components, we can reuse those individual parts whenever needed.


### Exercise:

 Complete the `<App />` component in [`App.js`](./src/App.js) by having it return a `<NavBar />` component above the `<Profile />` element.
 Don't forget to import the necessary component (`NavBar`) at the beginning of the file.



