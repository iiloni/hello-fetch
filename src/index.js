import FS from 'fs';

import urls from '../urls.json' assert { type: 'json'};

import Recipe from './recipe.js';

(async function main() {
	var recipes = []
	try {
		// console.log(FS.readFileSync('./recipes-images.json', 'utf8'))
		recipes = JSON.parse(FS.readFileSync('./recipes-images.json', 'utf8'))
	} catch (err) { throw err}

	for (var i = Math.max(recipes.length - 1, 0); i < urls.length; i++)
	{
		const recipe = new Recipe(urls[i]);
		await recipe.fetchDom();

		recipes.push({
			name: recipe.name,
			image: recipe.image,
			description: recipe.description,
			instructions: recipe.formatted_instructions,
			ingredients: recipe.ingredients,
		});

		console.log(`Downloaded (${ recipes.length } / ${ urls.length })`);
		FS.writeFileSync('./recipes-images.json', JSON.stringify(recipes), 'utf8');
	}
})();
