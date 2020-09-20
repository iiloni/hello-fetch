# hello-fetch
Web scraper for hello fresh

## Approach
Hello Fresh's API requires specific authorization headers in order to use it. Therefore, we must find a less technical way of fetching recipe data.

### 1. Use the Hello Fresh Most Popular Recipes page to index all of the recipe's urls.
I wrote a copy-pastable script (get_urls.js) that could be put into the developer console. It continues to press the "Load More" Button, which loads 8 recipe cards. After no more cards show up on a button press, we collect all of the URLs and download it as a JSON file.

### 2. Download each Recipe from each URL
With each Recipe Page URL, I found an excerpt of JSON inside the HTML that provided all of the details for recipes. Using the command: `npm start`, I executed my script (src/index.js) to hit all of the URLs I just got and JSDOM all of the JSON data.

## Results
The full JSON of URLs is inside `urls.json`. The full JSON of Recipes is inside `recipes.json`.
