document.addEventListener("DOMContentLoaded", function () {
  const ekspedisiForm = document.getElementById("ekspedisiForm");
  const daftarEkspedisi = document.getElementById("daftarEkspedisi");
  const addEkspedisi = document.getElementById("addEkspedisi");
  const clearEkspedisiButton = document.getElementById("clearEkspedisi");

  addEkspedisi.addEventListener("click", function () {
      const ReceiversName = document.getElementById("ReceiversName").value;
      const TrackingNumber = document.getElementById("TrackingNumber").value;
      const PhoneNumber = document.getElementById("PhoneNumber").value;
      const PackageWeight = document.getElementById("PackageWeight").value;
      const ServiceOption = document.getElementById("ServiceOption").value;

      if (ReceiversName && TrackingNumber && PhoneNumber && PackageWeight && ServiceOption) {
          const ekspedisiItem = document.createElement("div");
          ekspedisiItem.innerHTML = `<p>Receivers Name: ${ReceiversName} <br /> 
          Tracking Number: ${TrackingNumber} <br />
          Phone Number: ${PhoneNumber} <br />
          Package Weight: ${PackageWeight} <br />
          Service Option: ${ServiceOption} <br />
          </p>
          <h1>Success</h1>`;
          // <button class="hapusEkspedisi">Remove</button>
          daftarEkspedisi.appendChild(ekspedisiItem);

          // const hapusButtons = document.querySelectorAll(".hapusEkspedisi");
          // hapusButtons.forEach(function (button) {
          //     button.addEventListener("click", function () {
          //         this.parentElement.remove();
          //     });
          // });

          // Reset input fields
          ekspedisiForm.reset();
      }
  });

  clearEkspedisiButton.addEventListener("click", function () {
      // Hapus semua elemen anak di dalam daftarEkspedisi
      while (daftarEkspedisi.firstChild) {
          daftarEkspedisi.removeChild(daftarEkspedisi.firstChild);
      }
  });
});
