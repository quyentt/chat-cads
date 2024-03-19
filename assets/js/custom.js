$(document).ready(function () {
  const chatContent = document.querySelector(".chat-plugin-content");
  const btnCloseChatForm = document.querySelector(".chat-plugin-close");
  const btnToggleChatForm = document.querySelector(".chat-plugin_icons");
  btnToggleChatForm.addEventListener("click", () => {
    chatContent.classList.toggle("chatshow");
    btnToggleChatForm.classList.toggle("chatshow");
  });
  btnCloseChatForm.addEventListener("click", () => {
    chatContent.classList.remove("chatshow");
    btnToggleChatForm.classList.toggle("chatshow");
  });
});
