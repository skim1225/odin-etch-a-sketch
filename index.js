"use strict";
(function() {
  window.addEventListener("load", init);
  
  function init() {
    populateContainer();
  }

  function populateContainer() {
    let container = id('container');
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let newDiv = gen('div');
            newDiv.addEventListener('mouseover', e => e.target.classList.add('colored'));
            container.appendChild(newDiv);
        }
    }
  }

  /**
   * Helper function to get element by id
   * @param {str} id - The id of the element to retrieve
   * @return {HTMLElement} element - DOM object associated with the given ID
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Helper function to get elements by selector
   * @param {str} selector - The selector for the elements to retrieve
   * @return {HTMLElement} element - first DOM object associated with
   * the given selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Helper function to get elements by selector
   * @param {str} selector - The selector for the elements to retrieve
   * @return {NodeList} - Static nodelist of DOM elements associated with
   * the given selector
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Helper function to generate new document elements
   * @param {str} tagName - The tag name of the element to create
   * @return {HTMLElement} element - DOM objects associated with given tag name
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();
