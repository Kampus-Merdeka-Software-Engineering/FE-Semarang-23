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

const formTrack = document.getElementById("formTrack");

function resetAllFormInputValue() {
  document.getElementById("No_receipt").value = ""; 
}

formTrack.addEventListener("submit", (e) => {
  // Untuk mencegah agar browser tidak refresh ketika form disubmit
  e.preventDefault();

  // Tampilkan Toast Notification
  notyf.success('Please wait a moment...');

  // Reset value dari input form setelah berhasil
  resetAllFormInputValue();
})
