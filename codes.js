
function add(){

    let addfruit = document.querySelector('.input').value; // Getting value from the user
    let list = document.createElement('li')
   
    list.textContent = addfruit
    list.className = 'listOne'
    list.innerHTML =addfruit +' <button class="Delete" onclick="toDelete(event)">X</button>' //simply using innerHTML to add button into a li;

    // creating edit button
    list.innerHTML += '<button class="Edit" onclick="Edit(event)">Edit</button>' //adding EDit button to the list

    let olist = document.querySelector('.listClass') // selecting the UL for inserting new items
    olist.appendChild(list)
    
}


function toDelete(event){
    let fruitToDelete = event.target.parentElement;
    fruitToDelete.remove();
}
