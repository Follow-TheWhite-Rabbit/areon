const input = document.getElementById("price-input");
const span = document.createElement("span");
const vraper = document.getElementById("vraper");
input.addEventListener("focusin", function(e) {
    input.style.border = '2px solid green';
    input.style.outlineColor = 'green';
})
input.addEventListener("focusout", function(e) {
    input.style.border = '1px solid';
    console.log(e.target.value);
    const valuePrise = `Текущая цена: ${e.target.value}`;
    const insertedElement = vraper.insertBefore(span, input);
    insertedElement.innerText = valuePrise;
})

// console.log(input);