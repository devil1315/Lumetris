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

// chat Notification
document.addEventListener("DOMContentLoaded", (event) => {
  let chatClicked = document.querySelector("#chat");
  let chatClose = document.querySelector("#chat-close");
  let notificationClicked = document.querySelector("#notification");
  let notificationClose = document.querySelector("#popup-close");
  let chatScroll = document.querySelector("#chat-scroll");
  let chatDetailPopup = document.querySelector(".chat-details");
  let backArrow = document.querySelector(".heading-chat img"); // Adjust this selector to match your back arrow element

  chatClicked.addEventListener("click", function () {
    let chatPopup = document.querySelector("#chat-popup");
    let notificationPopup = document.querySelector("#notification-popup");
    if (notificationPopup.classList.contains("popup-show")) {
      notificationPopup.classList.remove("popup-show");
    }
    chatPopup.classList.toggle("chat-show");
  });

  chatClose.addEventListener("click", function () {
    let chatPopup = document.querySelector("#chat-popup");
    chatPopup.classList.remove("chat-show");
  });

  notificationClicked.addEventListener("click", function () {
    let notificationPopup = document.querySelector("#notification-popup");
    let chatPopup = document.querySelector("#chat-popup");
    if (chatPopup.classList.contains("chat-show")) {
      chatPopup.classList.remove("chat-show");
    }
    notificationPopup.classList.toggle("popup-show");
  });

  notificationClose.addEventListener("click", function () {
    let notificationPopup = document.querySelector("#notification-popup");
    notificationPopup.classList.remove("popup-show");
  });

  chatScroll.addEventListener("click", function (event) {
    let chatPopup = document.querySelector("#chat-popup");
    if (event.target.closest("li")) {
      chatPopup.classList.remove("chat-show");
      chatDetailPopup.classList.add("chat-show");
    }
  });

  backArrow.addEventListener("click", function () {
    chatDetailPopup.classList.remove("chat-show");
    let chatPopup = document.querySelector("#chat-popup");
    chatPopup.classList.add("chat-show");
  });
});

// let chatClicked = document.querySelector('#chat');
//         let chatClose = document.querySelector('#chat-close');
//         let notificationClicked = document.querySelector('#notification');
//         let notificationClose = document.querySelector('#popup-close');

//         chatClicked.addEventListener('click', function () {
//             let chatPopup = document.querySelector('#chat-popup');
//             let notificationPopup = document.querySelector('#notification-popup');
//             if (notificationPopup.classList.contains('popup-show')) {
//                 notificationPopup.classList.remove('popup-show');
//             }
//             chatPopup.classList.toggle('chat-show');
//         });

//         chatClose.addEventListener('click', function () {
//             let chatPopup = document.querySelector('#chat-popup');
//             chatPopup.classList.remove('chat-show');
//         });

//         notificationClicked.addEventListener('click', function () {
//             let notificationPopup = document.querySelector('#notification-popup');
//             let chatPopup = document.querySelector('#chat-popup');
//             if (chatPopup.classList.contains('chat-show')) {
//                 chatPopup.classList.remove('chat-show');
//             }
//             notificationPopup.classList.toggle('popup-show');
//         });

//         notificationClose.addEventListener('click', function () {
//             let notificationPopup = document.querySelector('#notification-popup');
//             notificationPopup.classList.remove('popup-show');
//         });
// chat Notification
