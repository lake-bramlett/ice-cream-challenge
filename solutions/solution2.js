// taking into account the multiple appends in
// solution 1, this solution solves overly taxing 
// the DOM by batching all the changes and appending
// them once to the list

let batch = ''

for (let i = 0; i < iceCreamFlavors.length; i++) {
    batch += `<li class="ice-cream-flavor">${iceCreamFlavors[i]}</li>`
}

$('.ice-cream-list').append(batch)