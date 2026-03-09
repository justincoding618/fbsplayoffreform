const base = "/fbsplayoffreform";

const seasons = [
  { year: "1998-99", path: `${base}/season-archives/bcs-era/1998.html` },
  { year: "1999-2000", path: `${base}/season-archives/bcs-era/1999.html` },
  { year: "2000-01", path: `${base}/season-archives/bcs-era/2000.html` },
  { year: "2001-02", path: `${base}/season-archives/bcs-era/2001.html` },
  { year: "2002-03", path: `${base}/season-archives/bcs-era/2002.html` },
  { year: "2003-04", path: `${base}/season-archives/bcs-era/2003.html` },
  { year: "2004-05", path: `${base}/season-archives/bcs-era/2004.html` },
  { year: "2005-06", path: `${base}/season-archives/bcs-era/2005.html` },
  { year: "2006-07", path: `${base}/season-archives/bcs-era/2006.html` },
  { year: "2007-08", path: `${base}/season-archives/bcs-era/2007.html` },
  { year: "2008-09", path: `${base}/season-archives/bcs-era/2008.html` },
  { year: "2009-10", path: `${base}/season-archives/bcs-era/2009.html` },
  { year: "2010-11", path: `${base}/season-archives/bcs-era/2010.html` },
  { year: "2011-12", path: `${base}/season-archives/bcs-era/2011.html` },
  { year: "2012-13", path: `${base}/season-archives/bcs-era/2012.html` },
  { year: "2013-14", path: `${base}/season-archives/bcs-era/2013.html` },
  { year: "2014-15", path: `${base}/season-archives/4-team-cfp-era/2014.html` },
  { year: "2015-16", path: `${base}/season-archives/4-team-cfp-era/2015.html` },
  { year: "2016-17", path: `${base}/season-archives/4-team-cfp-era/2016.html` },
  { year: "2017-18", path: `${base}/season-archives/4-team-cfp-era/2017.html` },
  { year: "2018-19", path: `${base}/season-archives/4-team-cfp-era/2018.html` },
  { year: "2019-20", path: `${base}/season-archives/4-team-cfp-era/2019.html` },
  { year: "2020-21", path: `${base}/season-archives/4-team-cfp-era/2020.html` },
  { year: "2021-22", path: `${base}/season-archives/4-team-cfp-era/2021.html` },
  { year: "2022-23", path: `${base}/season-archives/4-team-cfp-era/2022.html` },
  { year: "2023-24", path: `${base}/season-archives/4-team-cfp-era/2023.html` },
  {
    year: "2024-25",
    path: `${base}/season-archives/12-team-cfp-era/2024.html`,
  },
  {
    year: "2025-26",
    path: `${base}/season-archives/12-team-cfp-era/2025.html`,
  },
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
    <span class="infobox-nav-title">FBS Playoff Seasons</span>
    <div class="infobox-nav-links">
      ${prev ? `<a href="${prev.path}">« ${prev.year}</a>` : `<span class="nav-disabled"></span>`}
      ${next ? `<a href="${next.path}">${next.year} »</a>` : `<span class="nav-disabled"></span>`}
    </div>
  `;

  const infobox = document.querySelector(".infobox");
  if (infobox) infobox.appendChild(nav);
};

buildSeasonNavInfobox();
