import { Given } from "@badeball/cypress-cucumber-preprocessor";
import url from "../../fixtures/url.json"

  Given("I am in {string} page", (pageName) => {
    cy.visit(`/${url[pageName.toLowerCase()]}`);
  });