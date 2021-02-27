// // Changes the background color of navbar once you scroll
// $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".navbar");
//       $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//     });
//   });

//    var myIndex = 0;
//   carousel();
//   function carousel() {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}
//     x[myIndex-1].style.display = "block";
//     setTimeout(carousel, 3000);
//   }

// taking away link extensions
$("").click(function(e) {
  e.preventDefault();
  var section = $(this).attr("href");
  $("html, body").animate({
      scrollTop: $(section).offset().top
  });
});

// Changes the background color of navbar once you scroll
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


/*
* Expand experience functions
* When you press the + button on the experience boxes, these functions make it expand to show the description
*/
//
function expandtribune() {
  const tribune = document.getElementById("tribune");
  const tribDesc = document.getElementById("tribune-desc");

  // if the button is a +, expand
  if (tribune.innerHTML == "[ + ]") {
      tribune.innerHTML = "[ - ]";
      tribDesc.style.display = "block";
  }
  // if the button is a -, collapse
  else {
      tribune.innerHTML = "[ + ]";
      tribDesc.style.display = "none";

  }
  
}

function expandtwo() {
  const two = document.getElementById("two");
  const twoDesc = document.getElementById("two-desc");

  // if the button is a +, expand
  if (two.innerHTML == "[ + ]") {
      two.innerHTML = "[ - ]";
      twoDesc.style.display = "block";
  }
  // if the button is a -, collapse
  else {
      two.innerHTML = "[ + ]";
      twoDesc.style.display = "none";


  }
  
}

function expandthree() {
  const three = document.getElementById("three");
  const threeDesc = document.getElementById("three-desc");

  // if the button is a +, expand
  if (three.innerHTML == "[ + ]") {
      three.innerHTML = "[ - ]";
      threeDesc.style.display = "block";
  }
  // if the button is a -, collapse
  else {
      three.innerHTML = "[ + ]";
      threeDesc.style.display = "none";


  }
  
}

function expandfour() {
  const four = document.getElementById("four");
  const fourDesc = document.getElementById("four-desc");

  // if the button is a +, expand
  if (four.innerHTML == "[ + ]") {
      four.innerHTML = "[ - ]";
      fourDesc.style.display = "block";
  }
  // if the button is a -, collapse
  else {
      four.innerHTML = "[ + ]";
      fourDesc.style.display = "none";


  }
  
}
