import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const RecipesList = ({ recipes = [] }) => {
  const recipesList = recipes.map((recipe) => {
    const { id, title, image, prepTime, cookTime } = recipe;

    return <Link to={`/${title}`}>{title}</Link>;
  });

  return <div className="recipes-list">dsssssssssss</div>;
};

export default RecipesList;
