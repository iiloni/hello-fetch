import Recipe from './recipe.js';
console.log(Recipe)

const url = "https://www.hellofresh.com/recipes/herbs-de-provence-chicken-59033005c9fd0807303c0522"
const recipe = new Recipe(url)
await recipe.fetchDom()

console.log(recipe)