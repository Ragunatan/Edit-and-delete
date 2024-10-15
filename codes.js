function add(){

    let addfruit = document.querySelector('.input').value; // Getting value from the user
    let list = document.createElement('li')
   
    list.textContent = addfruit
    list.className = 'listOne'
    list.innerHTML =addfruit +' <button class="Delete" onclick="toDelete()">X</button>' //simply using innerHTML to add button into a li;

    let olist = document.querySelector('.listClass') // selecting the UL for inserting new items
    olist.appendChild(list)
    
}


