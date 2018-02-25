/*function init() {
	 alert("Cart initilized");
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
function init() {
 for (var i = 0; i < itemList.itemTypeList.length; i++) {
  var item = itemList.itemTypeList[i];
  console.log(item.item_name);
  addTypeItem(document.getElementById("cart_list"), item.item_price);
 }
};

function addTypeItem(element, priceTag) {
 var nodeDivLevel1 = document.createElement("div");
 var nodeDivLevel21 = document.createElement("div");
 var nodeDivLevel22 = document.createElement("div");
 var nodeDivLevel31 = document.createElement("div");
 var nodeDivLevel13 = document.createElement("span");
 var nodeDivLevel41 = document.createElement("div");
 var nodeDivLevel51 = document.createElement("div");
 var removeCartButton = document.createElement("button");
 var plusCartButton = document.createElement("button");
 var minusCartButton = document.createElement("button");
 var nodePrice = document.createElement("i");
 var quantityInput = document.createElement("input");
// var nodeCart = document.createElement("i");
 var image = document.createElement("img");
 var textDescriptionnode = document.createTextNode("This is a paragraph.");
 var textPricenode = document.createTextNode(priceTag);
 var attDiv = document.createAttribute("class");
 attDiv.value = "rcorners";
 var attItemDiv = document.createAttribute("class");
 attItemDiv.value = "item";
 nodeDivLevel1.setAttributeNode(attItemDiv);
 
 var attRemoveCartButton = document.createAttribute("class");
 attRemoveCartButton.value = "fa fa-cart-arrow-down";
 removeCartButton.setAttributeNode(attRemoveCartButton);
 
// var itemPrice = document.createAttribute("class");
// itemPrice.value = "fa fa-inr";
 
// var itemDescription = document.createAttribute("class");
// itemDescription.value = "description";
 
 var itemQuantity = document.createAttribute("class");
 itemQuantity.value = "quantity";
 
// var minusFromCart = document.createAttribute("class");
// minusFromCart.value = "fa fa-minus";
 
 var removeFromCart = document.createAttribute("class");
 removeFromCart.value = "fa fa-cart-arrow-down";
 
// var removeOnClick = document.createAttribute("onclick");
// removeOnClick.value = "removeFromCart()";
 
// var incrementOnClick = document.createAttribute("onclick");
// incrementOnClick.value = "incrementItem()";
 
// var decrementOnClick = document.createAttribute("onclick");
// decrementOnClick.value = "decrementItem()";
 
// var likeOnClick = document.createAttribute("onclick");
// likeOnClick.value = "likeItem()";
 
 var itemImageSource = document.createAttribute("src");
 itemImageSource.value = "/kundalini/img/items/butterfly.PNG";
 image.setAttributeNode(itemImageSource);
 
 var attItemImage = document.createAttribute("class");
 attItemImage.value = "image";
 nodeDivLevel22.setAttributeNode(attItemImage);
 
 var attDescription = document.createAttribute("class");
 attDescription.value = "description";
 nodeDivLevel31.setAttributeNode(attDescription);
 nodeDivLevel13.appendChild(textDescriptionnode);

 var attItemQuantity = document.createAttribute("class");
 attItemQuantity.value = "quantity";
 nodeDivLevel41.setAttributeNode(attItemQuantity);
 
 var attPlusCartButton = document.createAttribute("class");
 attPlusCartButton.value = "fa fa-plus";
 plusCartButton.setAttributeNode(attPlusCartButton);
 
 var attMinusCartButton = document.createAttribute("class");
 attMinusCartButton.value = "fa fa-minus";
 minusCartButton.setAttributeNode(attMinusCartButton);
 
 var attquantityInput = document.createAttribute("type");
 attquantityInput.value = "text";
 attquantityInputValue = document.createAttribute("value");
 attquantityInputValue.value = "1";
 quantityInput.setAttributeNode(attquantityInput);
 quantityInput.setAttributeNode(attquantityInputValue);
 
 var attnodePrice = document.createAttribute("class");
 attnodePrice.value = "fa fa-inr";
 nodePrice.setAttributeNode(attnodePrice);
 nodePrice.appendChild(textPricenode);
 
 nodeDivLevel41.appendChild(plusCartButton);//plus button in quantity
 nodeDivLevel41.appendChild(quantityInput);//Item count in quantity
 nodeDivLevel41.appendChild(minusCartButton);//minus button in quantity
 nodeDivLevel51.appendChild(nodePrice);//inr icon added in div 5.
 nodeDivLevel31.appendChild(nodeDivLevel13);//span in third div first of 3rd.
 nodeDivLevel22.appendChild(image);
 nodeDivLevel21.appendChild(removeCartButton);//Button in nodeDivLevel1
 nodeDivLevel1.appendChild(nodeDivLevel21);//Div in Div with class item 
 nodeDivLevel1.appendChild(nodeDivLevel22);//image set in main div
 nodeDivLevel1.appendChild(nodeDivLevel31);//Description tag added in main div
 nodeDivLevel1.appendChild(nodeDivLevel41);//Quantity node added in main div
 nodeDivLevel1.appendChild(nodeDivLevel51);//div 5 added in main div
 element.appendChild(nodeDivLevel1);//Main Div with class item 
}