let radioGroup = document.querySelector('#radio-group');
let cube = document.querySelector('.cube');
let currClass = '';

function changeFunction() {
    let checkedRadio = radioGroup.querySelector(':checked');
    let showClass = `show-${checkedRadio.value}`;
    
    if(currClass) {
        cube.classList.remove(currClass)
     }
    
    cube.classList.add(showClass);
    currClass = showClass;
}

radioGroup.addEventListener("change", changeFunction);