import React from "react";
import "./App.css";

import Toolbar from "./components/Toolbar";
import ArticleCard from "./components/ArticleCard";

// component = function that returns JSX

/**
 *
 * function component definition
 *
 * function MyComponent (props) {
 *   return <div>{props.title}</div>;
 * }
 *
 *
 * component instance
 *
 * <MyComponent title="Hello there" />
 *
 */

function App() {
  return (
    <div>
      <Toolbar />
      <main>
        <h1>Some awesome app</h1>

        <ArticleCard
          title="Components and props"
          rubrik="react"
          text="Now let's start playing around with the main building block of React applications: the component. React components are the reusable blocks of UI that you'll use to create ever larger and more complex user interfaces from."
        />
        <ArticleCard
          title="Thinking in components"
          rubrik="component-based design"
          text="In this chapter, we're going to break down a large UI into smaller bits: components. Breaking down a UI into reusable bits is one of the main techniques that React developers use to structure large applications: composition."
        />
        <ArticleCard
          title="Components are awesome"
          rubrik="repetition"
          text="Because they allow you to reuse blocks of HTML structure"
        />
      </main>
    </div>
  );
}

export default App;
