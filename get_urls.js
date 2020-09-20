// copy/paste this entire script into hello-fresh console
const body = document.body;
const button = document.querySelectorAll('span[data-translation-id="recipe-archive.pagination.more-recipes"')[0];

var last_scroll = 0;
var urls = new Set();

const interval_id = setInterval(function() {
    if(last_scroll == body.scrollHeight) // if nothing added to the page
    {
        clearInterval(interval_id); // stops the button clicking

        // reports completion
        console.log('Completed!');

		var new_array = Array.from(urls);
		var json = JSON.stringify(new_array);
		json = [ json ];
		var blob1 = new Blob(json, { type: "text/plain;charset=utf-8" });
		var url = window.URL || window.webkitURL;
        link = url.createObjectURL(blob1);
        var a = document.createElement("a");
        a.download = "urls.txt";
        a.href = link;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    else // there are still more items to see
    {
        last_scroll = body.scrollHeight;
        button.click(); // clicks the button
        console.log(`Clicking... ${ urls.size }`);
		window.scrollTo(0, button.offsetTop - 300);

		const links = document.querySelectorAll('a[href^="/recipes/"]');

		for(const link of links)
		{
			urls.add(link.href);
		}
    }
}, 4000);

// once the script reports completion, download the HTML and use JSDOM to parse it
