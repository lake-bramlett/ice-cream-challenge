// fourth solution uses vanilla javascript to 
// itterate over the data set, create a new <li>
// element for each, and manually insert its class
// attribute and inner text as it appends it to the 
// <ul> in the DOM


for (let i = 0; i < iceCreamFlavors.length; i++) {
    let listItem = document.createElement("li");
    let flavor = document.createTextNode(iceCreamFlavors[i]);
    listItem.setAttribute('class', 'ice-cream-flavor');
    listItem.appendChild(flavor);
    document.getElementsByClassName('ice-cream-list')[0].appendChild(listItem);
}