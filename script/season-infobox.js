const base = "https://justincoding618.github.io/fbsplayoffreform/";

const seasons = [
  { year: 1998, path: `${base}/season-archives/bcs-era/1998.html` },
  { year: 1999, path: `${base}/season-archives/bcs-era/1999.html` },
  { year: 2000, path: `${base}/season-archives/bcs-era/2000.html` },
  { year: 2001, path: `${base}/season-archives/bcs-era/2001.html` },
  { year: 2002, path: `${base}/season-archives/bcs-era/2002.html` },
  { year: 2003, path: `${base}/season-archives/bcs-era/2003.html` },
  { year: 2004, path: `${base}/season-archives/bcs-era/2004.html` },
  { year: 2005, path: `${base}/season-archives/bcs-era/2005.html` },
  { year: 2006, path: `${base}/season-archives/bcs-era/2006.html` },
  { year: 2007, path: `${base}/season-archives/bcs-era/2007.html` },
  { year: 2008, path: `${base}/season-archives/bcs-era/2008.html` },
  { year: 2009, path: `${base}/season-archives/bcs-era/2009.html` },
  { year: 2010, path: `${base}/season-archives/bcs-era/2010.html` },
  { year: 2011, path: `${base}/season-archives/bcs-era/2011.html` },
  { year: 2012, path: `${base}/season-archives/bcs-era/2012.html` },
  { year: 2013, path: `${base}/season-archives/bcs-era/2013.html` },
  { year: 2014, path: `${base}/season-archives/4-team-cfp-era/2014.html` },
  { year: 2015, path: `${base}/season-archives/4-team-cfp-era/2015.html` },
  { year: 2016, path: `${base}/season-archives/4-team-cfp-era/2016.html` },
  { year: 2017, path: `${base}/season-archives/4-team-cfp-era/2017.html` },
  { year: 2018, path: `${base}/season-archives/4-team-cfp-era/2018.html` },
  { year: 2019, path: `${base}/season-archives/4-team-cfp-era/2019.html` },
  { year: 2020, path: `${base}/season-archives/4-team-cfp-era/2020.html` },
  { year: 2021, path: `${base}/season-archives/4-team-cfp-era/2021.html` },
  { year: 2022, path: `${base}/season-archives/4-team-cfp-era/2022.html` },
  { year: 2023, path: `${base}/season-archives/4-team-cfp-era/2023.html` },
  { year: 2024, path: `${base}/season-archives/12-team-cfp-era/2024.html` },
  { year: 2025, path: `${base}/season-archives/12-team-cfp-era/2025.html` },
];

const buildSeasonNavInfobox = function () {
  const currentPath = window.location.pathname;
  const idx = seasons.findIndex((s) => currentPath.includes(s.path));
  if (idx === -1) return;

  const prev = idx > 0 ? seasons[idx - 1] : null;
  const curr = seasons[idx];
  const next = idx < seasons.length - 1 ? seasons[idx + 1] : null;

  const nav = document.createElement("div");
  nav.className = "infobox-nav";
  nav.innerHTML = `
    <span class="infobox-nav-title">FBS Season Archives</span>
    <div class="infobox-nav-links">
      ${prev ? `<a href="${prev.path}">« ${prev.year}</a>` : `<span class="nav-disabled"></span>`}
      ${next ? `<a href="${next.path}">${next.year} »</a>` : `<span class="nav-disabled"></span>`}
    </div>
  `;

  const infobox = document.querySelector(".infobox");
  if (infobox) infobox.appendChild(nav);
};

buildSeasonNavInfobox();
