import React from "react";

import Button from "./Button";
import Tag from "./Tag";

import "./ArticleCard.css";

function ArticleCard(props) {
  console.log(props.rubrik);

  return (
    <div className="ArticleCard">
      <h2>{props.title}</h2>
      <p>
        {props.tags.map(tag => {
          return <Tag tag={tag} />;
        })}
      </p>
      <p>{props.text}</p>
      <p>{props.rubrik}</p>
      <p>
        <Button text="Read more >" />
      </p>
    </div>
  );
}

export default ArticleCard;
