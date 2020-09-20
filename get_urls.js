// copy/paste this to automatically fetch all of the recommended links
setInterval(function() {
    document.querySelectorAll('span[data-translation-id="recipe-archive.pagination.more-recipes"')[0].click();
}, 5000);

// once complete, copy/paste this to get the entire list of urls
const links = document.querySelectorAll('a[href^="/recipes/"].dsbi');
const urls = [];
for(const link of links)
{
     urls.push(link.href);   
}
console.log(urls);
