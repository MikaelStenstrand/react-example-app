var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");

const serverUri = "http://localhost:3000/#";
const appTitle = "React Test App";

var browser = new webdriver.Builder()
 .usingServer()
 .withCapabilities({ browserName: "chrome" })
 .build();

/**
 * Config for Firefox browser (Comment Chrome config when you intent to test in Firefox)
 * @type {webdriver}
 */
/*
var browser = new webdriver.Builder()
 .usingServer()
 .withCapabilities({ browserName: "firefox" })
 .build();
 */

function logTitle() {
 return new Promise((resolve, reject) => {
  browser.getTitle().then(function(title) {
   resolve(title);
  });
 });
}

describe("Home Page", function() {
  it("Should load the home page and get title", function() {
    return new Promise((resolve, reject) => {
      browser
      .get(serverUri)
      .then(logTitle)
      .then(title => {
        assert.strictEqual(title, appTitle);
        resolve();
      })
      .catch(err => reject(err));
    });
  });

  it("Should check whether the visibility button is loaded", function() {
    return new Promise((resolve, reject) => {
      browser
      .findElement({ id: "visibility-button" })
      .then(elem => resolve())
      .catch(err => reject(err));
    });
  });

  it("Should check whether the my-component is loaded", function() {
    return new Promise((resolve, reject) => {
      browser
      .findElement({ className: "my-component" })
      .then(elem => resolve())
      .catch(err => reject(err));
    });
  });


after(function() {
  browser.quit();
 });
});