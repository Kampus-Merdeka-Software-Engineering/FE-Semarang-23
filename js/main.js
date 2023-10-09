const baseURL = 'https://be-semarang-23-production.up.railway.app/users'; // diganti sesuai dengan URL server 

document.addEventListener("DOMContentLoaded", function () {
  const ekspedisiForm = document.getElementById("ekspedisiForm");
  const daftarEkspedisi = document.getElementById("daftarEkspedisi");
  const addEkspedisi = document.getElementById("addEkspedisi");
  const clearEkspedisiButton = document.getElementById("clearEkspedisi");

  addEkspedisi.addEventListener("click", async () => {
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

          try {
            const response = await fetch(baseURL + '/' , {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ReceiversName, TrackingNumber, PhoneNumber, PackageWeight, ServiceOption}),
            });
      
            if (response.ok) {
              console.log("Added ekspedisi item successfully");
            } else {
              console.error("Failed to add ekspedisi item");
            }
          } catch (error) {
            console.error("Error adding ekspedisi item:", error);
          }

          const response = await fetch(baseURL + '/' + ReceiversName, TrackingNumber, PhoneNumber, PackageWeight, ServiceOption, {
            method: "GET",
          });
            const result = await response.json();
            output.innerHTML = JSON.stringify(result);

          try {
            const response = await fetch(baseURL, {
              method: "GET",
          });
            
            if (response.ok) {
              const result = await response.json();
              console.log("GET Request Result:", result);
            } else {
              console.error("Failed to fetch data");
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
          
          try {
            const response = await fetch(baseURL, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ReceiversName, TrackingNumber, PhoneNumber, PackageWeight, ServiceOption }),
            });
            if (response.ok) {
              console.log("Updated ekspedisi item successfully");
            } else {
              console.error("Failed to update ekspedisi item");
            }  
          } catch (error) {
            console.error("Error updating ekspedisi item:", error);
          }

          try {
            const response = await fetch(baseURL, {
              method: "DELETE",
            });
          
            if (response.ok) {
              console.log("Deleted ekspedisi item successfully");
            } else {
              console.error("Failed to delete ekspedisi item");
            }
          } catch (error) {
            console.error("Error deleting ekspedisi item:", error);
          }

          

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
