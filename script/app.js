// Define all the functions first
const loadTable = function (htmlFile, elementName) {
  fetch(htmlFile)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load nav: ${response.status}`);
      }
      return response.text();
    })
    .then((HTML) => {
      const Element = document.getElementById(elementName);
      if (Element) {
        Element.innerHTML = HTML;
      }
    })
    .catch((error) => {
      console.error("Error loading table:", error);
    });
};

const loadHeadFeature = function (rel, File, type = "") {
  const link = document.createElement("link");
  link.rel = rel;
  link.href = File;
  link.type = type;
  document.head.appendChild(link);
};

const showSideBar = function () {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
};
const hideSideBar = function () {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
};

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}

const base = "/fbsplayoffreform";

$(function () {
  $("#navbar-placeholder").load(`${base}/reusable/navbar.html`);
});

$(function () {
  $("#season-nav").load(`${base}/reusable/season-navbar.html`);
});

loadTable(`${base}/reusable/newyearsixtable.html", "ny6table`);
loadTable(`${base}/reusable/homefield.html`, "homefield");
loadTable(
  `${base}/reusable/homefieldquarterfinal.html`,
  "homefieldquarterfinal",
);
loadTable(`${base}/reusable/playoff-field-table.html`, "season-table");

loadHeadFeature("preconnect", "https://fonts.googleapis.com");
loadHeadFeature("preconnect", "https://fonts.gstatic.com");
loadHeadFeature(
  "stylesheet",
  "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap",
);
loadHeadFeature("stylesheet", `${base}/css/style.css`);
loadHeadFeature(
  "stylesheet",
  "https://cdn.datatables.net/v/dt/dt-3.1.5/datatables.min.css",
);
loadHeadFeature(
  "stylesheet",
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
);
loadHeadFeature("stylesheet", `${base}/css/season-infobox.css`);
loadHeadFeature("stylesheet", `${base}/css/bracket.css`);
loadHeadFeature(
  "icon",
  "https://images.icon-icons.com/1465/PNG/512/669americanfootball_100217.png",
  "x/image",
);
