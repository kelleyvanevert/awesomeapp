import React from "react";
import "./App.css";

import Toolbar from "./components/Toolbar";
import ArticleCard from "./components/ArticleCard";

/**
 *
 * primitive data types:
 * - true, false
 * - "hello", 'hello', `hello mr ${name}`
 * - 42, -1, 3.14
 * - null, undefined
 *
 * compound data types:
 * - arrays [1, 2, 3, {}] <- very powerful
 * - objects { name: "T-Rex", height: 10, scary: true, eats: [] }
 *
 * JSX
 *
 * functions
 * function sayHello() {}
 * const sayHello = () => {};
 *
 */

function App() {
  const articles = [
    {
      title: "Components and props",
      rubrik: "react",
      tags: ["react", "props", "beginner", "tutorial"],
      text:
        "Now let's start playing around with the main building block of React applications: the component. React components are the reusable blocks of UI that you'll use to create ever larger and more complex user interfaces from."
    },
    {
      title: "Thinking in components",
      rubrik: "component-based design",
      tags: [],
      text: "bla bla"
    }
  ];

  return (
    <div>
      <Toolbar />
      <main>
        <h1>Some awesome app</h1>
        <p>{<span>hello</span>}</p>

        {articles.map(article => {
          return (
            <ArticleCard
              title={article.title}
              tags={article.tags}
              text={article.text}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
