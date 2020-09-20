// copy/paste this entire script into hello-fresh console
const body = document.body;
const button = document.querySelectorAll('span[data-translation-id="recipe-archive.pagination.more-recipes"')[0];

var last_scroll = 0;

const interval_id = setInterval(function() {
    if(last_scroll == body.scrollHeight) // if nothing added to the page
    {
        clearInterval(interval_id); // stops the button clicking
        
        // reports completion
        console.log('Completed!');
    }
    else // there are still more items to see
    {
        last_scroll = body.scrollHeight;
        button.click(); // clicks the button
        console.log('Clicking...');
    }   
}, 2500);

// once the script reports completion, download the HTML and use JSDOM to parse it
