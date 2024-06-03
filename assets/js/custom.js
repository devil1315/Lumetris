const currentYear = new Date().getFullYear();
document.getElementById("year").innerText = currentYear;

// $(function () {
//   var loader = $("#loader-wrapper");
//   setTimeout(function () {
//     loader.fadeOut();
//   }, 2000);
//   $(window).on("beforeunload", function () {
//     loader.fadeIn();
//   });
// });
// loader //
$(function () {
  var loader = $("#loader-wrapper");

  function showLoader() {
    loader.fadeIn();
    $("body").addClass("overflow-hidden");
  }

  function hideLoader() {
    loader.fadeOut();
    $("body").removeClass("overflow-hidden");
  }

  showLoader();

  setTimeout(function () {
    hideLoader();
  }, 2000);

  $(window).on("beforeunload", function () {
    showLoader();
  });
});
// loader //

document.querySelectorAll("a").forEach(function (anchor) {
  anchor.addEventListener("click", function (event) {
    if (this.getAttribute("href") === "#") {
      event.preventDefault();
    }
  });
});
