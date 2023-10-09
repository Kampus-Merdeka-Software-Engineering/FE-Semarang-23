const baseURL = 'https://be-semarang-23-production.up.railway.app/api/users';

document.addEventListener("DOMContentLoaded", function () {
  const formTrack = document.getElementById("formTrack");
  const output = document.getElementById("output");
  const daftarEkspedisi = document.getElementById("daftarEkspedisi"); // Tambahkan elemen daftar ekspedisi di sini

  formTrack.addEventListener("click", async () => {
    const TrackingNumber = document.getElementById("TrackingNumber").value;

    try {
      const response = await fetch(baseURL + '/' + TrackingNumber, {
        method: "GET",
      });

      if (response.ok) {
        const result = await response.json();
        output.innerHTML = JSON.stringify(result);

        // Tampilkan informasi ekspedisi yang berhasil diambil dari server
        const ekspedisiItem = document.createElement("div");
        ekspedisiItem.innerHTML = `<p>Receivers Name: ${result.ReceiversName} <br /> 
          Tracking Number: ${result.TrackingNumber} <br />
          Phone Number: ${result.PhoneNumber} <br />
          Package Weight: ${result.PackageWeight} <br />
          Service Option: ${result.ServiceOption} <br />
        </p>
        <h1>Success</h1>`;
        
        // Tambahkan informasi ekspedisi ke dalam daftar ekspedisi
        daftarEkspedisi.appendChild(ekspedisiItem);


      } else {
        console.error("Failed to retrieve data");
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  });
});
