 function addPurshare(product) {
    let carzina = JSON.parse(localStorage.getItem('carzina_array'));
    carzina.push(product);
    localStorage.setItem('carzina_array', JSON.stringify(carzina.toString));
 }

 window.addEventListener('carzina',event=>{

})

function getLenghtOfProductList() {
   return localStorage.getItem("lenghtOfProductList");
}

function setLenghtOfProductLust(len) {
   const lenOutput =  localStorage.getItem("lenghtOfProductList") + len;
   localStorage.setItem("lenghtOfProductList",lenOutput.toString);
}