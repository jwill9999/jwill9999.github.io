/* Scroll functions for smooth scrolling
and link spy auto link activator */

$(document).ready(function() {
  var scrollLink = $(".scroll");
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1000
    );
  });

  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this)
          .parent()
          .addClass("active");
        $(this)
          .parent()
          .siblings()
          .removeClass("active");
      }
    });
  });
});

/* Javascript for image labels on projects when hovering
with fade in out  */
$(document).ready(function() {
  let image = document.querySelectorAll("img.img-fluid.pt-3.placeholders");

  image.forEach(img => {
    img.addEventListener("mouseover", img => {
      console.log("hovering in");
      let element = img.path["0"].nextElementSibling;
      $(element).fadeIn(500, () => {
        console.log("function ran");
      });
    });
    img.addEventListener("mouseout", img => {
      console.log("hovering out");
      let element = img.path["0"].nextElementSibling;
      $(element).fadeOut(500, () => {
        console.log("function ran");
      });
    });
  });
});

/* Javascript to fade bouncing arrows out on scroll from top */
$(window).scroll(function() {
  $(".arrow").css("opacity", 1 - $(window).scrollTop() / 550);
  //250 is fade pixels
});

/* Javascript date function to insert date year in footer */
let d = new Date();
document.getElementById("date").innerHTML = d.getFullYear();

$("#project6").on("show.bs.modal", function(e) {
  console.log("running");
  $.ajax({
    url: "https://github.com/jwill9999/resume-example",

    success: function(response) {
      $(this)
        .find(".modal-body")
        .load(response);
    }
  });
});
