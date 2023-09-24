const notyf = new Notyf({
  duration: 3500,
  types: [
    {
      type: "success",
      background: "#18A0FB",
      dismissible: true,
    }
  ]
});

const formContact = document.getElementById("formContact");

function resetAllFormInputValue() {
  document.getElementById("fullname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("sendMessage").value = "";
}

formContact.addEventListener("submit", (e) => {
  // Untuk mencegah agar browser tidak refresh ketika form disubmit
  e.preventDefault();

  // Tampilkan Toast Notification
  notyf.success('Your message has been sent');

  // Reset value dari input form setelah berhasil
  resetAllFormInputValue();
})
