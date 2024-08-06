let calculation= localStorage.getItem('value')||'';
display();
function updateCalculation(value) {
    calculation += value;
    display();
   
    localStorage.setItem('value',calculation);
}
function display(){
    document.querySelector('.js-msg').innerHTML=calculation;
}