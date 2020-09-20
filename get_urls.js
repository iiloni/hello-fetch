// copy/paste this entire script into hello-fresh console
const body = document.body;
const button = document.querySelectorAll('span[data-translation-id="recipe-archive.pagination.more-recipes"')[0];

var last_scroll = 0;
var urls = [];

const interval_id = setInterval(function() {
    if(last_scroll == body.scrollHeight) // if nothing added to the page
    {
        clearInterval(interval_id); // stops the button clicking

        // a list of links will be queried
        const links = document.querySelectorAll('a[href^="/recipes/"].dsbi');
        
        // and those links will be parsed for the hrefs
        for(const link of links)
        {
             urls.push(link.href);   
        }
        
        // reports completion and full list of urls
        console.log('Completed!');
        console.log(urls);
    }
    else // there are still more items to see
    {
        last_scroll = body.scrollHeight;
        button.click(); // clicks the button
        console.log('Clicking...');
    }   
}, 4000);
