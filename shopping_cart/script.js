var imageOfProduct = document.getElementById("imageOfProduct");
var nameOfProduct = document.getElementById("nameOfProduct");
var priceOfProduct = document.getElementById("priceOfProduct");
var numberOfProduct = document.getElementById("numberOfProduct");
var normalDelevery = document.getElementById("normalDelevery");
var dawnDelevery = document.getElementById("dawnDelevery");
var modal = document.querySelector('#myModal');
var modalContent = document.querySelector('#modalContent');
var body_normalDelivery = document.getElementById('list_normalDelivery');
var body_dawnDelivery = document.getElementById('list_dawnDelivery');

var add_btn_toCart = document.getElementById('add_btn_toCart');
add_btn_toCart.addEventListener('click', canAdd_toCart);

var openModal = document.getElementById('btn_cart');
openModal.addEventListener('click', showModal);

var closeModal = document.getElementById('cancel_btn_shopping');
closeModal.addEventListener('click', hideModal);


var sel_all_btn_normalDelivery = document.getElementById('sel_all_btn_normalDelivery');
sel_all_btn_normalDelivery.addEventListener('click', sel_all_normalDelivery);
var sel_all_btn_dawnDelivery = document.getElementById('sel_all_btn_dawnDelivery');
sel_all_btn_dawnDelivery.addEventListener('click', sel_all_dawnDelivery);
var del_normalDelivery = document.getElementById('del_normalDelivery');
del_normalDelivery.addEventListener('click', del_btn_normalDelivery);
var del_dawnDelivery = document.getElementById('del_dawnDelivery');
del_dawnDelivery.addEventListener('click', del_btn_dawnDelivery);
var move_btn_toDawnDelivery = document.getElementById('move_btn_toDawnDelivery');
move_btn_toDawnDelivery.addEventListener('click', move_toDawnDelivery);
var move_btn_toNormalDelivery = document.getElementById('move_btn_toNormalDelivery');
move_btn_toNormalDelivery.addEventListener('click', move_toNormalDelivery);
var search_btn = document.getElementById('search_btn');
search_btn.addEventListener('click', searchProduct);
var change_btn = document.getElementById('change_btn');
change_btn.addEventListener('click', changeColorToOriginal);

function showModal(){
  modal.style.display = "block";
}
function hideModal(){
  modal.style.display = "none";
}

function checkFileType(obj){
  var pathPoint = obj.value.lastIndexOf('.');
  var filePoint = obj.value.substring(pathPoint+1,obj.length);
  var fileType = filePoint.toLowerCase();
  if(fileType=='jpg' || fileType=='png' || fileType=='jpeg'){
    return true;
  }
  else if(fileType===""){
    alert("상품 이미지를 추가하시오.");
  }
  else{
    alert("이미지 파일이 아닙니다. 'jpg', 'jpeg' 또는 'png'을 확장자로 가진 파일을 추가하시오.");
  }
}

function checkName(obj){
  var character = /^[a-zA-Zㄱ-힣\s]+$/
  if(obj.value === ""){
    alert('상품 이름을 입력하시오.');
  }
  else if(character.test(obj.value)){
    return true;
  }
  else{
    alert('문자로 된 상품 이름을 입력하시오.');
  }
  return false;
}

function checkPrice(obj){
  var number = /^[0-9]+$/;
  if(obj.value === ""){
    alert('상품 가격을 입력하시오.');
  }
  else if(number.test(obj.value)){
    if((obj.value) < 1000) {
      alert('상품 가격을 1000원 이상으로 입력하시오.')
    }
    else return true;
  }
  else{
    alert('상품 가격에 숫자를 입력하시오.');
  }
  return false;
}

function checkNumber(obj){
  var number = /^[0-9]+$/;
  if(obj.value === ""){
    alert('상품 개수를 입력하시오.');
  }
  else if(number.test(obj.value)){
    if((obj.value) > 50 || (obj.value) < 1) {
      alert('최대 50개 이하로 선택하시오.');
    }
    else return true;
  }
  else{
    alert('상품 개수에 숫자를 입력하시오.');
  }
  return false;
}

function checkMethodOfDelivery(){
  if(!normalDelevery.checked && !dawnDelevery.checked){
    alert('배송 방법을 선택하시오.');
    return false;
  }
  else if(normalDelevery.checked){
    return 1;
  }
  else{
    return 2;
  }
}

function addToNormalDelivery(){
  var tr = document.createElement('tr');
  var input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('class', 'chk_btn_normalDelivery');
  input.addEventListener('click', sel_btn_normalDelivery);
  input.addEventListener('click', totalPriceCal_normalDelivery);
  input.setAttribute('checked', true);


  var td1 = document.createElement('td');
  td1.appendChild(input);
  tr.appendChild(td1);

  var td2 = document.createElement('td');
  td2.innerHTML = "<img class=\"productImg\" src =\"" + imageOfProduct.files[0].name + "\">";
  tr.appendChild(td2);

  var td3 = document.createElement('td');
  td3.setAttribute('class', 'productName');
  td3.innerHTML = nameOfProduct.value;
  tr.appendChild(td3);

  var td4 = document.createElement('td');
  td4.setAttribute('class', 'productPrice');
  td4.innerHTML = priceOfProduct.value;
  tr.appendChild(td4);

  var td5 = document.createElement('td');
  td5.innerHTML = numberOfProduct.value;
  tr.appendChild(td5);

  var td6 = document.createElement('td');
  td6.innerHTML = priceOfProduct.value * numberOfProduct.value;
  tr.appendChild(td6);


  document.getElementById('list_normalDelivery').appendChild(tr);
  imageOfProduct.value = "";
  nameOfProduct.value = "";
  priceOfProduct.value = "";
  numberOfProduct.value = "";
  normalDelevery.checked = false;
  dawnDelevery.checked = false;

  sel_btn_normalDelivery();
  totalPriceCal_normalDelivery();
}

function addToDawnDelivery(){
  var tr = document.createElement('tr');
  var input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('class', 'chk_btn_dawnDelivery');
  input.addEventListener('click', sel_btn_dawnDelivery);
  input.addEventListener('click', totalPriceCal_dawnDelivery);
  input.setAttribute('checked', true);

  var td1 = document.createElement('td');
  td1.appendChild(input);
  tr.appendChild(td1);

  var td2 = document.createElement('td');
  td2.innerHTML = "<img class=\"productImg\" src =\"" + imageOfProduct.files[0].name + "\">";
  tr.appendChild(td2);

  var td3 = document.createElement('td');
  td3.setAttribute('class', 'productName');
  td3.innerHTML = nameOfProduct.value;
  tr.appendChild(td3);

  var td4 = document.createElement('td');
  td4.setAttribute('class', 'productPrice');
  td4.innerHTML = priceOfProduct.value;
  tr.appendChild(td4);

  var td5 = document.createElement('td');
  td5.innerHTML = numberOfProduct.value;
  tr.appendChild(td5);

  var td6 = document.createElement('td');
  td6.innerHTML = priceOfProduct.value * numberOfProduct.value;
  tr.appendChild(td6);

  document.getElementById('list_dawnDelivery').appendChild(tr);
  imageOfProduct.value = "";
  nameOfProduct.value = "";
  priceOfProduct.value = "";
  numberOfProduct.value = "";
  normalDelevery.checked = false;
  dawnDelevery.checked = false;

  sel_btn_dawnDelivery();
  totalPriceCal_dawnDelivery();
}

function sel_btn_normalDelivery(){
  var chk_btn = document.querySelectorAll('#list_normalDelivery .chk_btn_normalDelivery');
  var flag = 0;
  for(var list of chk_btn){
    if(list.checked) flag++;
  }
  if(flag === chk_btn.length && chk_btn.length != 0) sel_all_btn_normalDelivery.checked = true;
  else{
    /*if(sel_all_btn_normalDelivery.checked)*/ sel_all_btn_normalDelivery.checked = false;
  }
  totalPriceCal_normalDelivery();
}

function sel_btn_dawnDelivery(){
  var chk_btn = document.querySelectorAll('#list_dawnDelivery .chk_btn_dawnDelivery');
  var flag = 0;
  for(var list of chk_btn){
    if(list.checked) flag++;
  }
  if(flag === chk_btn.length && chk_btn.length != 0) sel_all_btn_dawnDelivery.checked = true;
  else{
    /*if(sel_all_btn_dawnDelivery.checked)*/ sel_all_btn_dawnDelivery.checked = false;
  }
  totalPriceCal_dawnDelivery();
}

function sel_all_normalDelivery(){
  var chk_btn = document.querySelectorAll('#list_normalDelivery .chk_btn_normalDelivery');
  for(var list of chk_btn){
    if(this.checked) list.checked = true;
    else list.checked = false;
  }
  totalPriceCal_normalDelivery();
}

function sel_all_dawnDelivery(){
  var chk_btn = document.querySelectorAll('#list_dawnDelivery .chk_btn_dawnDelivery');
  for(var list of chk_btn){
    if(this.checked) list.checked = true;
    else list.checked = false;
  }
  totalPriceCal_dawnDelivery();
}

function canAdd_toCart(){
  var a = checkFileType(imageOfProduct);
  var b = checkName(nameOfProduct);
  var c = checkPrice(priceOfProduct);
  var d = checkNumber(numberOfProduct);
  var e = checkMethodOfDelivery();
  if(a && b && c && d){
    if(e === 1){
      addToNormalDelivery();
    }
    else if(e === 2){
      addToDawnDelivery();
    }
  }
}

function del_btn_normalDelivery(){
  var chk_box = document.querySelectorAll('#list_normalDelivery .chk_btn_normalDelivery');
  for(var list of chk_box){
    if(list.checked) body_normalDelivery.removeChild(list.parentNode.parentNode);
  }
  sel_all_btn_normalDelivery.checked = false;
  totalPriceCal_normalDelivery();
}

function del_btn_dawnDelivery(){
  var chk_box = document.querySelectorAll('#list_dawnDelivery .chk_btn_dawnDelivery');
  for(var list of chk_box){
    if(list.checked) body_dawnDelivery.removeChild(list.parentNode.parentNode);
  }
  sel_all_btn_dawnDelivery.checked = false;
  totalPriceCal_dawnDelivery();
}

function move_toDawnDelivery(){
  var chk_box = document.querySelectorAll('#list_normalDelivery .chk_btn_normalDelivery');
  for(var list of chk_box){
    if(list.checked){
      list.checked = false;
      var tr = list.parentNode.parentNode;
      body_dawnDelivery.appendChild(tr);
      list.setAttribute('class', 'chk_btn_dawnDelivery');
      list.removeEventListener('click', sel_btn_normalDelivery);
      list.addEventListener('click', sel_btn_dawnDelivery);
    }
  }
  sel_btn_normalDelivery();
  sel_btn_dawnDelivery();
}

function move_toNormalDelivery(){
  var chk_box = document.querySelectorAll('#list_dawnDelivery .chk_btn_dawnDelivery');
  for(var list of chk_box){
    if(list.checked){
      list.checked = false;
      var tr = list.parentNode.parentNode;
      body_normalDelivery.appendChild(tr);
      list.setAttribute('class', 'chk_btn_normalDelivery');
      list.removeEventListener('click', sel_btn_dawnDelivery);
      list.addEventListener('click', sel_btn_normalDelivery);
    }
  }
  sel_btn_normalDelivery();
  sel_btn_dawnDelivery();
}

function totalPriceCal_normalDelivery(){
  var totalPrice_normalDelivery = document.getElementById('totalPrice_normalDelivery');
  var price_normalDelivery = 0;
  var chk_box = document.querySelectorAll('#list_normalDelivery .chk_btn_normalDelivery');
  for(var list of chk_box){
    if(list.checked){
      price_normalDelivery += Number(list.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML);
    }
  }
  totalPrice_normalDelivery.innerHTML = price_normalDelivery;
}

function totalPriceCal_dawnDelivery(){
  var totalPrice_dawnDelivery = document.getElementById('totalPrice_dawnDelivery');
  var price_dawnDelivery = 0;
  var chk_box = document.querySelectorAll('#list_dawnDelivery .chk_btn_dawnDelivery');
  for(var list of chk_box){
    if(list.checked){
      price_dawnDelivery += Number(list.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML);
    }
  }
  totalPrice_dawnDelivery.innerHTML = price_dawnDelivery;
}

function searchProduct(){
  //changeColorToOriginal();
  var productNameList = document.querySelectorAll('.productName');
  var productPriceList = document.querySelectorAll('.productPrice');
  var input_productName = document.getElementById('input_productName');
  var input_productPrice1 = document.getElementById('input_productPrice1');
  var input_productPrice2 = document.getElementById('input_productPrice2');

  for(var i=0; i<productNameList.length; i++){
    var price = Number(productPriceList[i].innerHTML);
    var name = productNameList[i];
    var tr = name.previousSibling.previousSibling.parentNode;
    var inputName = input_productName.value;
    var inputPrice1 = Number(input_productPrice1.value);
    var inputPrice2 = Number(input_productPrice2.value);
    if(inputName != '' && inputPrice1 != '' && inputPrice2 != ''){
      if(name.innerHTML.includes(inputName) && price>=inputPrice1 && price<=inputPrice2){
        tr.setAttribute('class', 'searched');
      }
    }
    else if(inputName != '' && inputPrice1 == '' && inputPrice2 == ''){ //이름만
      if(name.innerHTML.includes(inputName)){
        tr.setAttribute('class', 'searched');
      }
    }
    else if(inputName == '' && inputPrice1 != '' && inputPrice2 == ''){ //최소값만
      if(price>=inputPrice1){
        tr.setAttribute('class', 'searched');
      }
    }
    else if(inputName == '' && inputPrice1 == '' && inputPrice2 != ''){ //최대값
      if(price<=inputPrice2){
        tr.setAttribute('class', 'searched');
      }
    }
    else if(inputName == '' && inputPrice1 != '' && inputPrice2 != ''){ //최소랑 최대만
      if(price>=inputPrice1 && price<=inputPrice2){
        tr.setAttribute('class', 'searched');
      }
    }
    else if(inputName != '' && inputPrice1 == '' && inputPrice2 != ''){ //이름이랑 최대만
      if(name.innerHTML.includes(inputName) && price<=inputPrice2){
        tr.setAttribute('class', 'searched');
      }
    }
    else if(inputName != '' && inputPrice1 != '' && inputPrice2 == ''){ //이름이랑 최소만
      if(name.innerHTML.includes(inputName) && price>=inputPrice1){
        tr.setAttribute('class', 'searched');
      }
    }
  }
}

function changeColorToOriginal(){
  var searched = document.querySelectorAll('.searched');
  for(var list of searched){
    list.removeAttribute('class');
  }
}
