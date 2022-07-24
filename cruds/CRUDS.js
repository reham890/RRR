let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')
   



function gettotal() {
    if (price.value != '') {
           let result =
                  parseInt(price.value)+          
                  parseInt(taxes.value) +
                  parseInt(ads.value) -
                  parseInt(discount.value);
           total.innerHTML = result; 
 //          total.textContent = result;  او ممكن 
       }
}


  let datapro;
if( localStorage.prduct!= null){
  datapro=JSON.parse(localStorage.prduct)
}else{
          datapro=[];
}

submit.onclick =function (){
      let newpro={
    title:title.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value
    }
    datapro.push(newpro) 
    localStorage.setItem('product', JSON.stringify(datapro))       
    console.log(datapro) 
    clearinputs()
   showdata()               
}



function clearinputs(){
  title.value=""
  price.value=""
  taxes.value=""
  ads.value=""
  discount.value=""
 title.innerHTML=""
 count.value=""
 category.value=""
}
  



function showdata(){
       let table ="" ;
        for(let i=0;   i<datapro.lengh ; i++)
      {
        table+=`
        <tr>
        <td>${[i]}</td>
        <td>${[datapro[i].title]}</td>
        <td>${[datapro[i].price]}</td>
        <td>${[datapro[i].taxes]}</td>
        <td>${[datapro[i].ads]}</td>
        <td>${[datapro[i].discount]}</td>
        <td>${[datapro[i].category]}</td>
        <td> <button id="update"> update<button></td>
        <td> <button id="delete"> delete<button></td>
        </tr>
      `
      }    
      }







