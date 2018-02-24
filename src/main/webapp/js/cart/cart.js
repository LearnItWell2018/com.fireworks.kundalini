/*function init() {
	 alert("Added in Cart");
}*/
function removeFromCart() {
 alert("item removed from cart.");
}
function likeItem() {
 alert("Thanks for liking");
}
function incrementItem() {
 alert("Item count incresed.");
}
function decrementItem() {
 alert("Item count reduced.");
}
var itemList = {
 "itemTypeList" : [ {
  "item_name" : "dsd",
  "item_price" : "60",
  "item_stock" : "sds"
 }, {
  "item_name" : "gdg",
  "item_price" : "70",
  "item_stock" : "ds"
 }, {
  "item_name" : "sdsData",
  "item_price" : "80",
  "item_stock" : "   dd       "
 }, {
  "item_name" : "Stoc final",
  "item_price" : "90",
  "item_stock" : "litri     "
 }, {
  "item_name" : "Consum GPL",
  "item_price" : "100",
  "item_stock" : "litri     "
 }, {
  "item_name" : "sdg",
  "item_price" : "20",
  "item_stock" : "gfgd"
 }, {
  "item_name" : "dfgd",
  "item_price" : "10",
  "item_stock" : "liggtggggri     "
 }, {
  "item_name" : "fgd",
  "item_price" : "40",
  "item_stock" : "kwfgf       "
 }, {
  "item_name" : "dfg",
  "item_price" : "55",
  "item_stock" : "dg"
 }, {
  "item_name" : "gd",
  "item_price" : "68",
  "item_stock" : "dfg"
 }

 ]
};
var init = function() {
 for (var i = 0; i < itemList.itemTypeList.length; i++) {
  var item = itemList.itemTypeList[i];
  console.log(item.item_name);
  addTypeItem(document.getElementById("item_List"), item.item_price);
 }
 /*var myJSON = JSON.stringify(itemList);
 console.log(myJSON);*/
};

function addTypeItem(element, priceTag) {
 var nodeDiv = document.createElement("div");
 var nodeButton = document.createElement("button");
 var nodePrice = document.createElement("i");
 var nodeCart = document.createElement("i");
 var image = document.createElement("img");
 var textnode = document.createTextNode("This is a paragraph.");
 var textPrice = document.createTextNode(priceTag);
 /*var attDiv = document.createAttribute("class");
 attDiv.value = "rcorners";*/
 var itemDiv = document.createAttribute("class");
 itemDiv.value = "item";
 itemDiv.id = "item_List";
 itemDiv.appendChild(nodeDiv);
 
 var itemDelDiv = document.createAttribute("class");
 itemDelDiv.value = "fa fa-cart-arrow-down";
 itemDelDiv.type = "button";
 itemDelDiv.name= "btn";
 
 var itemPrice = document.createAttribute("class");
 itemPrice.value = "fa fa-inr";
 
 var itemDescription = document.createAttribute("class");
 itemDescription.value = "description";
 
 var itemQuantity = document.createAttribute("class");
 itemQuantity.value = "quantity";
 
 var minusFromCart = document.createAttribute("class");
 minusFromCart.value = "fa fa-minus";
 
 /*var removeFromCart = document.createAttribute("class");
 removeFromCart.value = "fa fa-cart-arrow-down";*/
 
 var removeOnClick = document.createAttribute("onclick");
 removeOnClick.value = "removeFromCart()";
 
 var incrementOnClick = document.createAttribute("onclick");
 incrementOnClick.value = "incrementItem()";
 
 var decrementOnClick = document.createAttribute("onclick");
 decrementOnClick.value = "decrementItem()";
 
 var likeOnClick = document.createAttribute("onclick");
 likeOnClick.value = "likeItem()";
 
 var itemImageSource = document.createAttribute("src");
 itemImageSource.value = "../img/items/butterfly.PNG";
 
 var itemImageSize = document.createAttribute("class");
 itemImageSize.value = "image";
 
 nodeDiv.setAttributeNode(itemDiv);
 nodeButton.setAttributeNode(itemDelDiv);
 /*image.setAttributeNode(attImageSource);
 image.setAttributeNode(attImageSize);
 nodeButton.setAttributeNode(attCart);
 nodeButton.setAttributeNode(attOnClick);
 nodeDiv.setAttributeNode(attDiv);
 nodePrice.setAttributeNode(attPrice);
 nodePrice.appendChild(textPrice);
 nodeDiv.appendChild(image);
 nodeDiv.appendChild(textnode);
 nodeDiv.appendChild(nodePrice);
 nodeDiv.appendChild(nodeButton);
 element.appendChild(nodeDiv);*/
}