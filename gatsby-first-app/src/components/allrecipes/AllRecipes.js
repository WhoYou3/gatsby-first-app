import React from "react";
import TagsList from "../tagslist/TagsList";
import RecipesList from "../recipeslist/recipesList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query {
    allContentfulRecipe(sort: { title: ASC }) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);

  const recipes = data.allContentfulRecipe.nodes;

  return (
    <section className="recipes-container">
      <h4>all recipes</h4>
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
