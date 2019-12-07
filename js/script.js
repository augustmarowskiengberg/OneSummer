const slideArray = $('.slide');
const slideWidth = $('.my-slider-mask').width();
const navDot = '<div class="my-slider-dot"/>';
const slideNav = $('.my-slider-nav');
const prevBtn = $('.my-slider-arrow-right');
const nextBtn = $('.my-slider-arrow-left');

var itemWidth = slideArray.width();
var currentX = 0;
var pageIndex = 0;
var pageCount = parseInt(slideArray.length / parseInt(slideWidth / itemWidth)) - 1;
var dotArray;
var navOpen = false;

function updateNav() {
  slideNav.empty();
  for (var i = 0; i < pageCount + 1; i++) {
    slideNav.append(navDot);
  }
  dotArray = $('.my-slider-dot');

  for (var i = 0; i < dotArray.length; i++) {
    if (dotArray[i].classList.contains('my-active')) {
      dotArray[i].classList.remove('my-active');
    }
  };
  dotArray[pageIndex].classList.add('my-active');

  if (pageIndex - 1 < 0) {
    nextBtn.toggle();
  } else {
    nextBtn.css('display', '');
  };
  if (pageIndex + 1 > pageCount) {
    prevBtn.toggle();
  } else {
    prevBtn.css('display', '');
  };
}

function shiftSlideR() {
  if (pageIndex + 1 > pageCount) return;
  slideArray.css("transition", "transform 500ms ease 0s");
  currentX = currentX - slideWidth;
  pageIndex = pageIndex + 1;
  console.log("Page: " + pageIndex + " Of: " + pageCount)
  slideArray.css('transform', 'translateX(' + (currentX) + 'px)');

  updateNav();
}

function shiftSlideL() {
  if (pageIndex - 1 < 0) return;
  slideArray.css("transition", "transform 500ms ease 0s");
  currentX = currentX + slideWidth;
  pageIndex = pageIndex - 1;
  console.log("Page: " + pageIndex + " Of: " + pageCount)
  slideArray.css('transform', 'translateX(' + (currentX) + 'px)');
  updateNav();
}

function toggleNavAlpha() {
  if (($(this).scrollTop() > 0) | (navOpen)) {
    if (!$('.navbar').hasClass('nav-fill')) {
      $('.navbar').addClass('nav-fill');
    }
  } else {
    if ($('.navbar').hasClass('nav-fill')) {
      $('.navbar').removeClass('nav-fill');
    }
  }
}


$(".menu-button").click(function () {
  "none" == $(".my-nav-menu").css("display") ? $(".my-nav-menu").css("display", "block") : "block" == $(".my-nav-menu").css("display") && $(".my-nav-menu").css("display", "none"), $(".menu-button").toggleClass("my--open"), navOpen = !navOpen, toggleNavAlpha();
})

$(window).on('scroll', function () {
  toggleNavAlpha();
});



// .nav-fill {
//   background-color: #1a002a !important;
// }