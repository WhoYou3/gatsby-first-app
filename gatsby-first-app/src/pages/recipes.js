import React from "react";
import { Layout } from "../components/index";
import AllRecipes from "../components/allrecipes/AllRecipes";
const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipes;
