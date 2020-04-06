// solution one itterates over the array and for 
// each item appends a list item to the unordered 
// list with using template literal in conjunction
// with the loop's itterable variable. Easy and quick
// but also taxing on the DOM for larger data sets

for (let i = 0; i < iceCreamFlavors.length; i++) {
    $('.ice-cream-list').append(`<li class="ice-cream-flavor">${iceCreamFlavors[i]}</li>`)
}