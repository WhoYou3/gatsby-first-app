import React from "react";
import { Layout } from "../components/index";
import { StaticImage } from "gatsby-plugin-image";
import photo from "../assets/images/main.jpeg";
import FetchData from "../examples/FetchData";
import AllRecipes from "../components/allrecipes/AllRecipes";
import SEO from "../components/SEO/SEO";

const Home = () => {
  return (
    <Layout>
      <SEO title="home" />
      <FetchData />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simply Recipes</h1>
              <h4>No Fluff, Just Recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Home;
