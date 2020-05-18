function toggleBtn() {
  document.getElementById("sidebar").classList.toggle("active");
}

// Operasi slide
var $slider = $(".slider");
var $slideImages = $slider.find(".slideImages");
var $images = $slideImages.find(".image");
var currSlide = 1;

setInterval(function() {
  //kita  animasikan pembungkus image untuk geser ke kiri, sehingga image yang berada di kanannya
  //akan kegeser
  $slideImages.animate(
    {
      "margin-left": "-=400px"
    },
    1000,
    function() {
      currSlide++;
      if (currSlide === $images.length) {
        //jika currSlide nya udah di paling akhir, maka kita ubah margin left pembungkus imagenya
        //menjadi 0 lagi supaya gambar pertama yang muncul
        currSlide = 1;
        $slideImages.css("margin-left", 0);
      }
    }
  );
}, 3000);
