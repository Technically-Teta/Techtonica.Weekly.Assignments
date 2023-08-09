function validateEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}


document.getElementById("email-form").addEventListener("submit", event =>{
const pTag= document.getElementById("message");
event.preventDefault();
const  email = document.getElementById("email-input").value;

if(validateEmail(email)){
  pTag.textContent = "Thanks for your email,Have a nice day!";
  console.log("Thanks for your email! Have a nice day!");
}
 else{
   pTag.textContent = "No! Enter a valid email";
   console.log("No! Enter a valid email")
 }                                                                           
})

// the slider
$(document).ready(function() {
  $(".testimonial-carousel").slick({
	infinite: !0,
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: !1,
	arrows:true,
	prevArrow: $(".testimonial-carousel-controls .prev"),
	nextArrow: $(".testimonial-carousel-controls .next"),
	responsive: [{
	  breakpoint: 1200,
	  settings: {
	    slidesToShow: 3
	  }
	}, {
	  breakpoint: 992,
	  settings: {
	    slidesToShow: 2
	  }
	}, {
	  breakpoint: 600,
	  settings: {
	    slidesToShow: 1
	  }
	}]
  });
});

document.querySelector("#entry > div.reader-nav-root.reader2-font-base.isCollapsed > div.reader-nav-page > div > div.pencraft.frontend-pencraft-Box-module__reset--VfQY8.frontend-pencraft-Box-module__display-flex--ZqeZt.frontend-pencraft-Box-module__flex-direction-column--Rq7pk > div.pencraft.frontend-pencraft-Box-module__reset--VfQY8.frontend-pencraft-Box-module__display-flex--ZqeZt.frontend-pencraft-Box-module__flex-direction-column--Rq7pk.frontend-pencraft-Box-module__flex-gap-20--WPlD2.frontend-pencraft-Box-module__padding-x-20--v_X8l.frontend-pencraft-Box-module__padding-y-32--tBjpu.frontend-pencraft-Box-module__flex-gap-mobile-16--oMFvQ.frontend-pencraft-Box-module__padding-x-mobile-16--qz0qN.frontend-pencraft-Box-module__padding-y-mobile-16--dydMQ > div.pencraft.frontend-pencraft-Box-module__reset--VfQY8.frontend-pencraft-Box-module__display-flex--ZqeZt.frontend-pencraft-Box-module__flex-direction-column--Rq7pk.frontend-pencraft-Box-module__flex-gap-20--WPlD2 > div.pencraft.frontend-pencraft-Box-module__reset--VfQY8.frontend-pencraft-Box-module__display-flex--ZqeZt.frontend-pencraft-Box-module__flex-wrap-wrap--U7KAu.frontend-pencraft-Box-module__flex-justify-start--_8fEd.frontend-pencraft-Box-module__flex-gap-12--rODKq")


function displayText() {
  let text = document.getElementById("textField");
  text.style.display = "block";
}




