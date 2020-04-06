// ignoring the Dom taxation is an issue, solution 3 
// peforms the same basic function but with a different
// method that would also be useful for working with 
// objects that takes in keys in place of index

$.each(iceCreamFlavors, function(index, flavor){
    $('.ice-cream-list').append(`<li class="ice-cream-flavor">${flavor}</li>`)
})