function getHyi() {
    return "/t/t[]/n/--------/n\--------/t/t[]"
}

function draf_table_footer(mas, div_class){
    let div_for_input = document.querySelector(`div.${div_class}`);
    for ( i = 0 ; i<mas.length;i++) { 
        let obj = document.createElement("a");
        obj.getAttribute("class ","flex_item");
        obj.textContent = mas_categ[i];
        div_for_input.appendChild(obj);
    }
    console.log(mas.length)
}

