document.querySelector(".toggle-btn").addEventListener("click", function () {
  const table = document.querySelector(".infobox-table");
  const isHidden = table.style.display === "none";

  // Toggle visibility
  table.style.display = isHidden ? "table" : "none";

  // Update button text based on the state
  this.textContent = isHidden ? "Hide Info" : "Show Info";
});
