import React from "react";
import { Layout } from "../components/index";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke texidermy</h2>
            <p>
              Texideermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of then bnah mi biodiesel chia.
            </p>

            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              Contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
