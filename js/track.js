const baseURL = 'https://be-semarang-23-production.up.railway.app/api/users';


document.addEventListener("DOMContentLoaded", function () {
  const formTrack = document.getElementById("formTrack");
  const daftarEkspedisi = document.getElementById("daftarEkspedisi");

  const output = document.getElementById("output");

  formTrack.addEventListener("click", async () => {
    const ReceiversName = document.getElementById("ReceiversName").value;
    const TrackingNumber = document.getElementById("TrackingNumber").value;
    const PhoneNumber = document.getElementById("PhoneNumber").value;
    const PackageWeight = document.getElementById("PackageWeight").value;
    const ServiceOption = document.getElementById("ServiceOption").value;

    if (ReceiversName && TrackingNumber && PhoneNumber && PackageWeight && ServiceOption) {
    try {
      const requestData = {
        ReceiversName: ReceiversName,
        TrackingNumber: TrackingNumber,
        PhoneNumber: PhoneNumber,
        PackageWeight: PackageWeight,
        ServiceOption: ServiceOption
      };
      
      //take datanya
      const response = await fetch(baseURL + '/' + ReceiversName, {
        method: "GET",
      });

      if (response.ok) {
        const result = await response.json();
        output.innerHTML = JSON.stringify(requestData);

        // Tampilkan informasi ekspedisi yang berhasil diambil dari server
        const ekspedisiItem = document.createElement("div");
        ekspedisiItem.innerHTML = `<p>Receivers Name: ${result.ReceiversName} <br /> 
          Tracking Number: ${result.TrackingNumber} <br />
          Phone Number: ${result.PhoneNumber} <br />
          Package Weight: ${result.PackageWeight} <br />
          Service Option: ${result.ServiceOption} <br />
        </p>
        <h1>Success</h1>`;
        daftarEkspedisi.appendChild(ekspedisiItem);

        // Hapus semua elemen anak di dalam daftarEkspedisi sebelum menambahkan yang baru
        while (daftarEkspedisi.firstChild) {
          daftarEkspedisi.removeChild(daftarEkspedisi.firstChild);
        }

        // Tambahkan informasi ekspedisi ke dalam daftar ekspedisi
        daftarEkspedisi.appendChild(ekspedisiItem);
      } else {
        console.error("Failed to retrieve data");
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  }
  });
});
