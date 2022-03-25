import * as React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "@fontsource/quicksand/400.css"
import "@fontsource/quicksand/700.css"
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { useDarkMode } from "./ThemeSwitcher";
deckDeckGoHighlightElement();

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  const [theme] = useDarkMode();
  // Burger Menu 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleBurger = () => setIsMenuOpen(p => !p);

  return (
    <div>
      <Helmet>
        <html lang="en" className={theme === 'light-theme' ? 'light-theme' : 'dark-theme'} />
        {/* <html lang="en" className="dark-theme" /> */}
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}media/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}media/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}media/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}media/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}media/og-image.jpg`}
        />
      </Helmet>
      <div className="wrapper">
        <Navbar open={isMenuOpen} toggle={toggleBurger} />
        <div className="container">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
