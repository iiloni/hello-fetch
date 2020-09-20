import FS from 'fs';

import urls from '../urls.json';

import Recipe from './recipe.js';

(async function main() {
	const recipes = [];

	for(const url of urls)
	{
		const recipe = new Recipe(url);
		await recipe.fetchDom();

		recipes.push({
			name: recipe.name,
			description: recipe.description,
			instructions: recipe.formatted_instructions,
			ingredients: recipe.ingredients,
		});

		console.log(`Downloaded (${ recipes.length } / ${ urls.length })`);
	}

	FS.writeFileSync('/home/joseph/recipes.json', JSON.stringify(recipes));
})();
