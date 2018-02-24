var menu = document.querySelector('.nav__list');
var burger = document.querySelector('.burger');
var doc = $(document);
var l = $('.scrolly');
var panel = $('.panel');
var vh = $(window).height();
var itemList = {
		"itemTypeList": [
		    {
		        "item_name": "dsd",
		        "item_price": "60",
		        "item_stock": "sds"
		    },
		    {
		        "item_name": "gdg",
		        "item_price": "70",
		        "item_stock": "ds"
		    },
		    {
		        "item_name": "sdsData",
		        "item_price": "80",
		        "item_stock": "   dd       "
		    },
		    {
		        "item_name": "Stoc final",
		        "item_price": "90",
		        "item_stock": "litri     "
		    },
		    {
		        "item_name": "Consum GPL",
		        "item_price": "100",
		        "item_stock": "litri     "
		    },
		    {
		        "item_name": "sdg",
		        "item_price": "20",
		        "item_stock": "gfgd"
		    },
		    {
		        "item_name": "dfgd",
		        "item_price": "10",
		        "item_stock": "liggtggggri     "
		    },
		    {
		        "item_name": "fgd",
		        "item_price": "40",
		        "item_stock": "kwfgf       "
		    },
		    {
		        "item_name": "dfg",
		        "item_price": "55",
		        "item_stock": "dg"
		    },
		    {
		        "item_name": "gd",
		        "item_price": "68",
		        "item_stock": "dfg"
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
  addTypeItem (document.getElementById("lightning"), 10);
  addTypeItem (document.getElementById("music"), 15);
  addTypeItem (document.getElementById("planes"), 40);
  
  for (var i = 0; i < itemList.itemTypeList.length; i++) {
	    var item = itemList.itemTypeList[i];
	    console.log(item.item_name);
	    addTypeItem (document.getElementById("camera"), item.item_price);
  }
  var myJSON = JSON.stringify(itemList);
  console.log(myJSON);
  
  burger.addEventListener('click', openMenu, false);
  window.addEventListener('scroll', scrollFx, false);
  window.addEventListener('load', scrollFx, false);
  $('a[href^="#"]').on('click',scrolly);
};

function addTypeItem (element, priceTag) {
	  var nodeDiv = document.createElement("div");
	  var nodeButton = document.createElement("button");
	  var nodePrice = document.createElement("i");
	  var nodeCart = document.createElement("i");
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
	  attOnClick.value = "addToCart()";
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

function addToCart() {
	setCookie("kundalini", "content", 1);
	alert("kundalini is set");
	alert(getCookie("kundalini"));
}

/*function addOrRemoveFromJSONCartList (jsonCartList, addOrRemove) {}
		var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';
		
		var obj = JSON.parse(jsonStr);
		obj['theTeam'].push({"teamId":"4","status":"pending"});
		jsonStr = JSON.stringify(obj);
		https://stackoverflow.com/questions/18884840/adding-a-new-array-element-to-a-json-object
}
*/

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

function checkCookie() {
    var user=getCookie("kundalini");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        setCookie("kundalini", "content", 1);
    }
}

doc.on('ready', init);