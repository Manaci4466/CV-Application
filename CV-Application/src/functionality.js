function clear(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach(el => {
        el.value = '';
    })
}   
export {clear}