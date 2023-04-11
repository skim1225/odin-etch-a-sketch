"use strict";
(function() {
  window.addEventListener("load", init);
  
  function init() {
    qs('button').addEventListener('click', promptUser);
  }

  function promptUser() {
    let size = prompt("Enter a size for the grid (must be less than 100): ")
    populateContainer(size);
  }

  function populateContainer(size) {
    let container = id('container');
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let newDiv = gen('div');
            newDiv.addEventListener('mouseover', e => e.target.classList.add('colored'));
            newDiv.style.height = 960/size - 2 + "px";
            newDiv.style.width = 960/size - 2 + "px";
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
