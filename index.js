let radioGroup = document.querySelector('#radio-group');
let cube = document.querySelector('.cube');
let currClass = '';

radioGroup.addEventListener("change", function() {
    let checkedRadio = radioGroup.querySelector(':checked');
    let showClass = `show-${checkedRadio.value}`;
    currFace = showClass;
    
    
    cube.classList.add(showClass);
    currClass = showClass;
});