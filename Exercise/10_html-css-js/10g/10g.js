function toggleButton(selector){
    const Button=document.querySelector(selector);
    turnoffPreviousButton();
    if(!Button.classList.contains('is-toggled')){
        Button.classList.add('is-toggled');
    }
    else{
        Button.classList.remove('is-toggled');
    }
}
function turnoffPreviousButton(){
    const previousButton=document.querySelector('.is-toggled');
    if(previousButton){
        previousButton.classList.remove('is-toggled');
    }
}
