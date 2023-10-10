const baseURL = 'https://be-semarang-23-production.up.railway.app/api/users';


document.addEventListener("DOMContentLoaded", function () {
  const formTrack = document.getElementById("formTrack");
  const daftarfromtracker = document.getElementById("daftarfromtracker");

  // const output = document.getElementById("output");

  formTrack.addEventListener("click", async () => {
    const ReceiversName = document.getElementById("ReceiversName").value;

    try {
      const response = await fetch(baseURL + '/' + ReceiversName, {
        method: "GET",
      });

      if (response.ok) {
        const result = await response.json();
        daftarfromtracker.innerHTML = `<p>Receivers Name: ${result.ReceiversName}, <br /> 
              Tracking Number: ${result.TrackingNumber}, <br />
              Phone Number: ${result.PhoneNumber}, <br />
              Package Weight: ${result.PackageWeight}, <br />
              Service Option: ${result.ServiceOption} <br />
          </p>
          <h1>Success</h1>`;
        daftarfromtracker.appendChild(formTrack);
        
      } else {
        console.error("Failed to retrieve data");
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  
  });
});


      // if (response.ok) {
      //   const result = await response.json();
      //   daftarfromtracker.innerHTML = JSON.stringify(result);

                  
        

        // Tampilkan informasi ekspedisi yang berhasil diambil dari server
        // const ekspedisiItem = document.createElement("div");
        // ekspedisiItem.innerHTML = `<p>Receivers Name: ${result.ReceiversName}, <br /> 
        //   Tracking Number: ${result.TrackingNumber}, <br />
        //   Phone Number: ${result.PhoneNumber}, <br />
        //   Package Weight: ${result.PackageWeight}, <br />
        //   Service Option: ${result.ServiceOption} <br />
        // </p>
        // <h1>Success</h1>`;
        // daftarfromtracker.appendChild(ekspedisiItem);
      

        // Hapus semua elemen anak di dalam daftarfromtracker sebelum menambahkan yang baru
        // while (daftarfromtracker.firstChild) {
        //   daftarfromtracker.removeChild(daftarfromtracker.firstChild);
        // }

      
