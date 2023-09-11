document.addEventListener("click", function (event) {
    const dropdown = document.querySelector(".dropdown");
    if (event.target !== dropdown && !dropdown.contains(event.target)) {
      const dropdownContent = document.querySelector(".dropdown-content");
      dropdownContent.style.display = "none";
    }
  });
  