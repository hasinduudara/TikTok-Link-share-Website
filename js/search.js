document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const linkContainers = document.querySelectorAll(".link-container");

  // Handle the search form submission
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    filterLinks(searchInput.value);
  });

  // Also filter as user types (optional)
  searchInput.addEventListener("input", function () {
    filterLinks(this.value);
  });

  // Function to filter links based on search text
  function filterLinks(searchText) {
    searchText = searchText.toLowerCase();

    // Show/hide link containers based on search text
    linkContainers.forEach(function (container) {
      const linkTitle = container
        .querySelector(".link-title")
        .textContent.toLowerCase();

      if (linkTitle.includes(searchText)) {
        container.style.display = "";
      } else {
        container.style.display = "none";
      }
    });

    // Show a message if no results found
    const visibleLinks = document.querySelectorAll(
      '.link-container:not([style*="display: none"])'
    );
    const noResultsMsg = document.getElementById("noResultsMessage");

    if (visibleLinks.length === 0 && searchText !== "") {
      // Create the message if it doesn't exist
      if (!noResultsMsg) {
        const message = document.createElement("div");
        message.id = "noResultsMessage";
        message.className = "alert alert-info mt-3";
        message.textContent = "No links found matching your search.";
        document.querySelector("#link").appendChild(message);
      } else {
        noResultsMsg.style.display = "";
      }
    } else if (noResultsMsg) {
      noResultsMsg.style.display = "none";
    }
  }
});
