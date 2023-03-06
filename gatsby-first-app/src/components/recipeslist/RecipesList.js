import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const RecipesList = ({ recipes = [] }) => {
  const recipesList = recipes.map((recipe) => {
    const { id, title, image, prepTime, cookTime } = recipe;
    const pathToImage = getImage(image);

    return (
      <Link key={id} className="recipe" to={`/${title}`}>
        <GatsbyImage
          image={pathToImage}
          className="recipe-img"
          alt="recipe-image"
        />
        <h5>{title}</h5>
        <p>
          Prep: {prepTime} | Cook: {cookTime}
        </p>
      </Link>
    );
  });

  return <div className="recipes-list">{recipesList}</div>;
};

export default RecipesList;
