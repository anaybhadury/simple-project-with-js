const counterContent = document.getElementById('counter');
const plusBtn = document.getElementById('plusBtn');
const minusBtn = document.getElementById('minusBtn');

let counter = 0;

const updateCounter = function(value){
    counter = counter + value;
    counterContent.innerText = counter;

    if(counter >= 10){
        plusBtn.setAttribute('disabled', true);
    }
    else{
        plusBtn.removeAttribute('disabled', false);
    }

    // minus counter
    if(counter <= 0){
        minusBtn.setAttribute('disabled', true);
    }
    else{
        minusBtn.removeAttribute('disabled', false);
    }
}

plusBtn.addEventListener('click', function(){
    updateCounter(1);
});
minusBtn.addEventListener('click', function(){
    updateCounter(-1);
});



























// const counterElement = document.getElementById('counter');
// const plusButton = document.getElementById('plusBtn');
// const minusButton = document.getElementById('minusBtn');

// let counter = 0;


// const updateCounter = (value) => {
//     counter = counter + value;
//     counterElement.innerText = counter;

//     if(counter >= 10){
//         plusButton.setAttribute('disabled', true);
//     }
//     else{
//         plusButton.removeAttribute('disabled', false);
//     }

//     // minus counter start
//     if(counter <= 0){
//         minusButton.setAttribute('disabled', true);
//     }
//     else{
//         minusButton.removeAttribute('disabled', false);
//     }
// }

// plusButton.addEventListener('click', () => {
//     updateCounter(1);
// });
// minusButton.addEventListener('click', () => {
//     updateCounter(-1);
// });