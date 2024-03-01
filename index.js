
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
    childElem.textContent=obj.amount + ' - ' +obj.info + ' - ' +obj.cate
    parentElem.appendChild(childElem)
}
    const categorySelect = document.getElementById('category-select');
    const amountInput = document.getElementById('amount-input');
    const expensename = document.getElementById('expense-name');
    const addBtn = document.getElementById('add-btn');

   




