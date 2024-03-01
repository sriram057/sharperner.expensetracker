
function savetoLocalStorage(event){
    event.preventDefault();
    const amount=event.target.inputamount.value;
    const info=event.target.description.value;
    const cate=event.target.category.value;

    // localStorage.setItem('amount',amount);
    // localStorage.setItem('info',info);
    // localStorage.setItem('cate',cate);

    var obj={
        amount,
        info,
        cate
    }
    localStorage.setItem(obj.cate,JSON.stringify(obj))
    showUseronScreen(obj)
}
function showUseronScreen(obj){
    const parentElem = document.getElementById('listofitems')
    const childElem= document.createElement('li')
    childElem.textContent=obj.amount + ' - ' +obj.info + ' - ' +obj.cate+ ' '
    parentElem.appendChild(childElem)

    const deleteButton = document.createElement('input');
    deleteButton.type="button"
    deleteButton.value='Delete'
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.cate)
        parentElem.removeChild(childElem)
    }
    childElem.appendChild(deleteButton)
    parentElem.appendChild(childElem)

    const editButton = document.createElement('input');
    editButton.type="button"
    editButton.value='Edit'
    editButton.onclick = () => {
        localStorage.removeItem(obj.cate)
        parentElem.removeChild(childElem)
        document.getElementById('amount-input').value = obj.amount
        document.getElementById('expense-name').value = obj.info
        document.getElementById('category-select').value =obj.cate
    }
    childElem.appendChild(deleteButton)
    childElem.appendChild(editButton)
    parentElem.appendChild(childElem)

}
   


