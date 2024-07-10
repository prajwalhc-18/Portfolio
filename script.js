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

