import jsdom from 'jsdom';
const { JSDOM } = jsdom;

import get from './utils/get.js';

export default class Recipe
{
	constructor(recipe_url)
	{
		this.url = recipe_url;
		this.dom = undefined;
		this.schema = undefined;

		this.name = null;
		this.description = null;
		this.instructions = null;
		this.ingredients = null;
	}

	async fetchDom()
	{
		const text = await get(this.url);

		this.dom = await new JSDOM(text, {
			includeNodeLocations: true,
		});

		const document = this.dom.window.document;

		this.schema = JSON.parse(this.dom.window.document.getElementById('schema-org').innerHTML);

		this.name = this.schema.name;
		this.image = this.schema.image;
		this.description = this.schema.description;
		this.ingredients = this.schema.recipeIngredient;

		this.instructions = this.schema.recipeInstructions;
		let steps = this.dom.window.document.querySelectorAll('[data-test-id="instruction-step"]')
		steps.forEach((s, idx) => {
			this.instructions[idx].image = s.children[0].children[0].src
		})
	}

	get loaded()
	{
		return this.dom != null && this.schema != null;
	}

	get formatted_instructions()
	{
		const formatted = [];
		if (!this.instructions) { return null }

		for(const instruction of this.instructions)
		{
			formatted.push({
				text: instruction.text,
				image: instruction.image,
			});
		}
		return formatted;
	}
}
