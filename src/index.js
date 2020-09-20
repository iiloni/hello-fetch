import Recipe from './recipe.js';

import get from './utils/get.js';

(async function main() {
	const recipe = new Recipe('https://www.hellofresh.com/recipes/bacon-cream-supreme-spaghetti-5efb3c62a169b168fb03500d');

	await recipe.fetchDom();

	console.log(recipe.name);
	console.log(recipe.description);
	console.log(recipe.formatted_instructions);
	console.log(recipe.ingredients);
})();
