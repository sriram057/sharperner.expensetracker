
function savetoLocalStorage(event){
    event.preventDefault();
    const amount=event.target.inputamount.value;
    const info=event.target.description.value;
    const cate=event.target.category.value;

    // localStorage.setItem('amount',amount);
    // localStorage.setItem('info',info);
    // localStorage.setItem('cate',cate);


    const categorySelect = document.getElementById('category-select');
    const amountInput = document.getElementById('amount-input');
    const expensename = document.getElementById('expense-name');
    const addBtn = document.getElementById('add-btn');

   

}


