function reinitializeslick()
{
  if ($("#hfWhatonCount").val() == "0") {
    setTimeout(() => {    $(".whatsOn").slick({
          dots: false,
          arrow: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                  }
              },
              {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
          ]
      });
    }, 1000);
  }
  else {
    setTimeout(() => {   $(".whatsOn1").slick({
          dots: false,
          arrow: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: true
                  }
              },
              {
                  breakpoint: 600,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
          ]
      });
    }, 1000);
  }




  // Partner

  setTimeout(() => { 
  $(".our-partner").slick({
      dots: false,
      arrow: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });

}, 1000);


}


  

function animatecomponent()
{
    
  new WOW().init();
  reinitializeslick();

}