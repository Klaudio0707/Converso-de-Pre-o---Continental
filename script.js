const buttonSubmit = document.querySelector("#button");



buttonSubmit.addEventListener("click", function(event) {
    event.preventDefault();
    let pis = (document.getElementById("pis_cofins").value);
    let icms = (document.getElementById("icms").value);
    let precoNet = (document.getElementById("preco_net").value);
    let taxaUsd = (document.getElementById("taxa_usd").value);
  /*let Imposto_total = document.getElementById("valor_imposto");

 /*   
 const value = icms.value;
 const pis_value = pis.value;
 const precoNet_Value = precoNet.value;
 const taxaUsd_Value = taxaUsd.value 
*/

//console.log(value,pis_value,precoNet_Value, taxaUsd_Value);//
const porcent = 100;

const impostoTotal = parseFloat(icms)+parseFloat(pis);/* somando icms + pis e cofins*/
const liquido = parseFloat(porcent)-parseFloat(impostoTotal); // imposto total - 100%//
const precoInput = parseFloat(precoNet)/parseFloat(liquido)*parseFloat(porcent); //recebe o preço net e divide pelo liqudo//
const precoArredondado = (precoInput.toFixed(4)); //precisei utiliar o toFixed para diminuir as casas decimais//
const converDolar = precoArredondado * taxaUsd;
const dolarArredondado = (converDolar.toFixed(4));


//console.log(impostoTotal,liquido,precoArredondado,converDolar);
document.querySelector(".valor_imposto").innerHTML = `<strong>Imposto Total:</strong> ${impostoTotal}%`;
document.querySelector(".valor_liquido").innerHTML = `<strong>Valor Líquido:</strong> ${liquido}%`;
document.querySelector(".valor_bruto").innerHTML = `<strong>Valor Bruto:</strong> ${precoArredondado}`;
document.querySelector(".valor_brutoReal").innerHTML = ` <strong>Valor Bruto Real: </strong> R$ ${dolarArredondado}`;
})
