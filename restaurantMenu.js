let butterMilkPancakesPrice  = 0;
let dinerDoublePrice = 0;


document.getElementById('buttermilk-pancakes').addEventListener('click', () => {
    
    
    butterMilkPancakesPrice +=  15.99;
    
    let totalizarButterMilkPancakes = document.getElementById('totalizar-buttermilk-pancakes');

    totalizarButterMilkPancakes.innerHTML = `&#127828; Buttermilk Pancakes: <strong>${butterMilkPancakesPrice.toFixed(2)} R$ </strong> `

    
    

    

 
})

document.querySelector('#diner-double').addEventListener('click', () => {
   
    dinerDoublePrice += 13.99;

    let totalizarDinnerDouble = document.getElementById('totalizar-dinner-double');
    totalizarDinnerDouble.innerHTML = `&#127828; Diner Double: <strong> ${dinerDoublePrice.toFixed(2)} R$ </strong>`

    

    


});


document.querySelector('.finally').addEventListener('click', () => {
    
     total = butterMilkPancakesPrice + dinerDoublePrice;
    
    document.querySelector('.total').innerHTML = `&#128183; Total: <strong>${total.toFixed(2)} R$ </strong>`
})


document.querySelector('.clear').addEventListener('click', () => {

    butterMilkPancakesPrice = 0;
    document.querySelector('#totalizar-buttermilk-pancakes').innerHTML = `Buttermilk Pancakes: <strong>${butterMilkPancakesPrice} </strong> `

    dinerDoublePrice = 0;
    document.querySelector('#totalizar-dinner-double').innerHTML = `Diner Double: <strong> ${dinerDoublePrice} </strong>`

    total = ' ';
    document.querySelector('.total').innerHTML = ` <strong>${total}</strong>`


})