var menu = document.querySelector('.nav__list');
var burger = document.querySelector('.burger');
var doc = $(document);
var l = $('.scrolly');
var panel = $('.panel');
var vh = $(window).height();
var itemListMenu1 = {"itemName" : "POTS",
		"itemTypeList": [
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			}

		    ]
		};

var itemListMenu2 = {"itemName" : "SPARKELS",
		"itemTypeList": [
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			}

		    ]
		};

var itemListMenu3 = {"itemName" : "CRACKERS",
		"itemTypeList": [
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			}

		    ]
		};

var itemListMenu4 = {"itemName" : "SHELLS",
		"itemTypeList": [
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			},
			{
				"product_id" : "POTS-001",
				"brand" : "SIVKASHI",
				"item_name": "Red POTS",
				"item_price": "sds",
				"item_stock": "sds"
			}

		    ]
		};

var openMenu = function() {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('nav__list--active');
};

// reveal content of first panel by default
panel.eq(0).find('.panel__content').addClass('panel__content--active');

var scrollFx = function() {
  var ds = doc.scrollTop();
  var of = vh / 4;
  
  // if the panel is in the viewport, reveal the content, if not, hide it.
  for (var i = 0; i < panel.length; i++) {
    if (panel.eq(i).offset().top < ds+of) {
     panel
       .eq(i)
       .find('.panel__content')
       .addClass('panel__content--active');
    } else {
      panel
        .eq(i)
        .find('.panel__content')
        .removeClass('panel__content--active')
    }
  }
};

var scrolly = function(e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);

  $('html, body').stop().animate({
      'scrollTop': $target.offset().top
  }, 300, 'swing', function () {
      window.location.hash = target;
  });
}

var init = function() {
  
  for (var i = 0; i < itemListMenu1.itemTypeList.length; i++) {
	    var item = itemListMenu1.itemTypeList[i];
	    console.log(item.item_name);
	    addTypeItem (document.getElementById("camera"), item.product_id, item.item_price);
  }
  for (var i = 0; i < itemListMenu2.itemTypeList.length; i++) {
	    var item = itemListMenu2.itemTypeList[i];
	    console.log(item.item_name);
	    addTypeItem (document.getElementById("lightning"), item.product_id, item.item_price);
  }
  for (var i = 0; i < itemListMenu3.itemTypeList.length; i++) {
	    var item = itemListMenu3.itemTypeList[i];
	    console.log(item.item_name);
	    addTypeItem (document.getElementById("music"), item.product_id, item.item_price);
  }
  for (var i = 0; i < itemListMenu4.itemTypeList.length; i++) {
	    var item = itemListMenu4.itemTypeList[i];
	    console.log(item.item_name);
	    addTypeItem (document.getElementById("planes"), item.product_id, item.item_price);
  }
  /*var myJSON = JSON.stringify(itemListMenu1);
  console.log(myJSON);*/
  
  burger.addEventListener('click', openMenu, false);
  window.addEventListener('scroll', scrollFx, false);
  window.addEventListener('load', scrollFx, false);
  $('a[href^="#"]').on('click',scrolly);
};

function addTypeItem (element, productId, priceTag) {
	  var nodeDiv = document.createElement("div");
	  var nodeButton = document.createElement("button");
	  var nodePrice = document.createElement("i");
	  var image = document.createElement("img");
	  var textnode = document.createTextNode("This is a paragraph.");
	  var textPrice = document.createTextNode(priceTag);
	  var attDiv = document.createAttribute("class");
	  attDiv.value = "rcorners";
	  var attPrice = document.createAttribute("class");
	  attPrice.value = "fa fa-inr";
	  var attCart = document.createAttribute("class");
	  attCart.value = "fa fa-shopping-cart";
	  var attOnClick = document.createAttribute("onclick");
	  attOnClick.value = "addToCart('" + productId + "')";
	  var attImageSource = document.createAttribute("src");
	  attImageSource.value = "/kundalini/img/items/butterfly.PNG";
	  var attImageSize = document.createAttribute("class");
	  attImageSize.value = "image";
	  image.setAttributeNode(attImageSource);
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
	  element.appendChild(nodeDiv);
}

function addToCart(productId) {
	var user=getCookie("kundalini_cart_list");
    if (user != "") {
    	var obj = JSON.parse(user);
    	var newItem = '{"productId": "' + productId + '"}';
		obj['Cart'].push(JSON.parse(newItem));
		setCookie("kundalini_cart_list", JSON.stringify(obj), 1);
    } else {
    	var jsonStr = '{"Cart":[{"productId": "' + productId +'"}]}';
    	setCookie("kundalini_cart_list", jsonStr, 1);
    }
    
    alert(user);

}


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

doc.on('ready', init);