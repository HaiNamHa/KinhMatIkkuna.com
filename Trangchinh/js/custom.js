(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();


})()

//Tìm kiếm sản phẩm
function searchProduct() {
	// Lấy giá trị nhập vào ô tìm kiếm
	var productName = document.getElementById("search-input").value;

	// Kiểm tra xem tên sản phẩm có được nhập không
	if (productName.trim() !== "") {
		// Xác định trang cần chuyển hướng dựa trên tên sản phẩm
		var pageToRedirect = getPageToRedirect(productName);

		if (pageToRedirect) {
			// Chuyển hướng đến trang được xác định
			window.location.href = pageToRedirect;
		} else {
			// Hiển thị thông báo không có sản phẩm này
			alert("Hiện cửa hàng không có sản phẩm này");
		}
	}
}

function getPageToRedirect(productName) {
	// Ánh xạ giữa tên sản phẩm và các trang tương ứng
	var productPages = {
		"Kính áp tròng":"/TrangChuyenMucGK/TrangChuyenMucGK.html",
		"Kính râm":"/TrangChuyenMucGK/TrangChuyenMucGK.html",
		"Gọng kính":"/TrangChuyenMucGK/TrangChuyenMucGK.html",
		"Tròng kính":"/TrangChuyenMucGK/TrangChuyenMucGK.html",
		"Kính áp tròng Cosplay Crazy Red": "/TrangChuyenMucGK/TrangChuyenMucGK.html",
		"Kính áp tròng trong suốt có độ cận": "/TrangChuyenMucGK/TrangChuyenMucGK.html",
		"TRÒNG KÍNH PHÁP ESSILOR PREVENCIA CRIZAL.ROCK CHIẾT SUẤT 1.56": "/TrongKinhPhap.html",
		"GK1":"/chitietsp/ana2.html",
		// Thêm các ánh xạ khác nếu cần
	};

	// Trả về đường dẫn trang tương ứng hoặc null nếu không tìm thấy
	return productPages[productName] || null;
}

//Tìm kiếm sản phẩm




/*slide show */
let slideIndex1 = 0;
showSlides1();
function showSlides1() {
  let j;
  let slides1 = document.getElementsByClassName("mySlides1");
  let dots = document.getElementsByClassName("dot");
  for (j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";  
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}    
  for (j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active1", "");
  }
  slides1[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active1";
  setTimeout(showSlides1, 5000); // Change image every 2 seconds
}
/*slide show */


/*Tab*/
function HOTTREND(evt, theloai) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(theloai).style.display = "block";
	evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  /*Tab*/

 /*Phần khách hàng thân thiết */
  var swiper = new Swiper(".swiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
	  rotate: 0,
	  stretch: 0,
	  depth: 100,
	  modifier: 2,
	  slideShadows: true
	},
	spaceBetween: 60,
	loop: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true
	},
	autoplay: {
	  delay: 3000, 
	  disableOnInteraction: false 
	}
  });
  /*Phần khách hàng thân thiết */

