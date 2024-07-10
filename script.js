function handleSearch(event) {
  event.preventDefault(); // Prevent the default form submission
  const searchInput = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();

  if (searchInput === "home") {
    window.location.href = "index.html";
  } else if (searchInput === "about") {
    window.location.href = "about.html";
  } else if (searchInput === "contact") {
    window.location.href = "contact.html";
  } else {
    alert("Page not found"); // Handle invalid search terms
  }
}

////////////////////////////////////////////////////////////

// document
//   .getElementById("message-section")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     let params = {
//       to_name: "Rahul Yadav", // Replace with actual recipient name
//       from_name: document.getElementById("name").value,
//       email_id: document.getElementById("email").value,
//       service: document.getElementById("services").value,
//       phone_number: document.getElementById('phone').value,
//       message: document.getElementById("message").value,
//     };

//     emailjs.send("service_jaztsda", "template_ou0e6jd", params).then(
//       function (response) {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("Your message has been sent!");
//         document.getElementById("message-section").reset(); // Reset the form
//         setTimeout(function () {
//           location.reload(); // Refresh the page after a short delay
//         }, 500); // Adjust the delay time as needed
//       },
//       function (error) {
//         console.log("FAILED...", error);
//         alert("Failed to send your message.");
//       }
//     );
//   });
