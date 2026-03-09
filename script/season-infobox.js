const base = "/fbsplayoffreform";

const seasons = [
  {
    year: "1998-99",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/bcs-era/1998-99.html`,
  },
  {
    year: "1999-2000",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/bcs-era/1999-2000.html`,
  },
  {
    year: "2000-01",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/bcs-era/2000-01.html`,
  },
  {
    year: "2001-02",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/bcs-era/2001-02.html`,
  },
  {
    year: "2002-03",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/bcs-era/2002-03.html`,
  },
  {
    year: "2003-04",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/bcs-era/2003-04.html`,
  },
  {
    year: "2004-05",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/bcs-era/2004-05.html`,
  },
  {
    year: "2005-06",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/bcs-era/2005-06.html`,
  },
  {
    year: "2006-07",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/bcs-era/2006-07.html`,
  },
  {
    year: "2007-08",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/bcs-era/2007-08.html`,
  },
  {
    year: "2008-09",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/bcs-era/2008-09.html`,
  },
  {
    year: "2009-10",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/bcs-era/2009-10.html`,
  },
  {
    year: "2010-11",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/bcs-era/2010-11.html`,
  },
  {
    year: "2011-12",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/bcs-era/2011-12.html`,
  },
  {
    year: "2012-13",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/bcs-era/2012-13.html`,
  },
  {
    year: "2013-14",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/bcs-era/2013-14.html`,
  },
  {
    year: "2014-15",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/4-team-cfp-era/2014-15.html`,
  },
  {
    year: "2015-16",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/4-team-cfp-era/2015-16.html`,
  },
  {
    year: "2016-17",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/4-team-cfp-era/2016-17.html`,
  },
  {
    year: "2017-18",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/4-team-cfp-era/2017-18.html`,
  },
  {
    year: "2018-19",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/4-team-cfp-era/2018-19.html`,
  },
  {
    year: "2019-20",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/4-team-cfp-era/2019-20.html`,
  },
  {
    year: "2020-21",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/4-team-cfp-era/2020-21.html`,
  },
  {
    year: "2021-22",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/4-team-cfp-era/2021-22.html`,
  },
  {
    year: "2022-23",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/4-team-cfp-era/2022-23.html`,
  },
  {
    year: "2023-24",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/4-team-cfp-era/2023-24.html`,
  },
  {
    year: "2024-25",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/12-team-cfp-era/2024-25.html`,
  },
  {
    year: "2025-26",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/12-team-cfp-era/2025-26.html`,
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
    <span class="infobox-nav-title">${curr.navTitle}</span>
    <div class="infobox-nav-links">
      ${prev ? `<a href="${prev.path}">« ${prev.year}</a>` : `<span class="nav-disabled"></span>`}
      ${next ? `<a href="${next.path}">${next.year} »</a>` : `<span class="nav-disabled"></span>`}
    </div>
  `;

  const infobox = document.querySelector(".infobox");
  if (infobox) infobox.appendChild(nav);
};

buildSeasonNavInfobox();
