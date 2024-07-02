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

// document.getElementById("chatdetail").addEventListener("click", function () {
//   var chatPopup = document.getElementsByClassName("chat-details")[0];
//   chatPopup.classList.toggle("chat-show");
// });

// document.addEventListener("click", function (event) {
//   var chatPopup = document.getElementsByClassName("chat-details")[0];
//   var isClickInside =
//     chatPopup.contains(event.target) ||
//     document.getElementById("chatdetail").contains(event.target);
//   if (!isClickInside) {
//     chatPopup.classList.remove("chat-show");
//   }
// });

// heart
document.querySelectorAll(".social-heart").forEach(function (element) {
  element.addEventListener("click", function () {
    const heartIcon = this.querySelector("i");
    if (heartIcon.classList.contains("fa-regular")) {
      heartIcon.classList.remove("fa-regular");
      heartIcon.classList.add("fa-solid");
    } else {
      heartIcon.classList.remove("fa-solid");
      heartIcon.classList.add("fa-regular");
    }
  });
});

// heart
// Function to handle showing and hiding the modal based on screen width
function handleModal() {
  var modalElement = document.getElementById("exampleModalFullscreen");
  var modal =
    bootstrap.Modal.getInstance(modalElement) ||
    new bootstrap.Modal(modalElement);

  if (window.innerWidth < 992) {
    modal.show();
  } else {
    modal.hide();
  }
}

// Event listener for the mobile-search button click
document
  .getElementById("mobile-search")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (window.innerWidth < 992) {
      var modal = new bootstrap.Modal(
        document.getElementById("exampleModalFullscreen")
      );
      modal.show();
    }
  });

// Event listener for window resize
window.addEventListener("resize", function () {
  var modalElement = document.getElementById("exampleModalFullscreen");
  var modal = bootstrap.Modal.getInstance(modalElement);

  if (modal && window.innerWidth >= 992) {
    modal.hide();
  }
});

// Optional: Check screen size on initial load and hide modal if necessary
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 992) {
    var modalElement = document.getElementById("exampleModalFullscreen");
    var modal =
      bootstrap.Modal.getInstance(modalElement) ||
      new bootstrap.Modal(modalElement);
    modal.hide();
  }
});

// copy
function copyToClipboard(text) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

document.querySelectorAll(".note-clip").forEach(function (noteClip) {
  noteClip.addEventListener("click", function (event) {
    event.preventDefault();
    const closestImg = noteClip.closest(".mItem").querySelector("img");
    if (closestImg) {
      copyToClipboard(closestImg.src);
      // alert("Image source copied to clipboard: " + closestImg.src);
    }
  });
});
// copy
