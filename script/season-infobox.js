//the base variable is dependent on app.js being implemented first before implementing other js files through script html tags

const seasons = [
  {
    year: "1978-79",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1970s/1978-79.html`,
  },
  {
    year: "1979-80",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1970s/1979-80.html`,
  },
  {
    year: "1980-81",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1980s/1980-81.html`,
  },
  {
    year: "1981-82",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1980s/1981-82.html`,
  },
  {
    year: "1982-83",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1980s/1982-83.html`,
  },
  {
    year: "1983-84",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1980s/1983-84.html`,
  },
  {
    year: "1984-85",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1980s/1984-85.html`,
  },
  {
    year: "1985-86",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1980s/1985-86.html`,
  },
  {
    year: "1986-87",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1980s/1986-87.html`,
  },
  {
    year: "1987-88",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1980s/1987-88.html`,
  },
  {
    year: "1988-89",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1980s/1988-89.html`,
  },
  {
    year: "1989-90",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1980s/1989-90.html`,
  },
  {
    year: "1990-91",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1990s/1990-91.html`,
  },
  {
    year: "1991-92",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1990s/1991-92.html`,
  },
  {
    year: "1992-93",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1990s/1992-93.html`,
  },
  {
    year: "1993-94",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1990s/1993-94.html`,
  },
  {
    year: "1994-95",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1990s/1994-95.html`,
  },
  {
    year: "1995-96",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1990s/1995-96.html`,
  },
  {
    year: "1996-97",
    navTitle: "Division I-A Playoffs",
    path: `${base}//season-archives/1990s/1996-97.html`,
  },
  {
    year: "1997-98",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1990s/1997-98.html`,
  },
  {
    year: "1998-99",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1990s/1998-99.html`,
  },
  {
    year: "1999-2000",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/1990s/1999-2000.html`,
  },
  {
    year: "2000-01",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/2000s/2000-01.html`,
  },
  {
    year: "2001-02",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/2000s/2001-02.html`,
  },
  {
    year: "2002-03",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/2000s/2002-03.html`,
  },
  {
    year: "2003-04",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/2000s/2003-04.html`,
  },
  {
    year: "2004-05",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/2000s/2004-05.html`,
  },
  {
    year: "2005-06",
    navTitle: "Division I-A Playoffs",
    path: `${base}/season-archives/2000s/2005-06.html`,
  },
  {
    year: "2006-07",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2000s/2006-07.html`,
  },
  {
    year: "2007-08",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2000s/2007-08.html`,
  },
  {
    year: "2008-09",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2000s/2008-09.html`,
  },
  {
    year: "2009-10",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2000s/2009-10.html`,
  },
  {
    year: "2010-11",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2010s/2010-11.html`,
  },
  {
    year: "2011-12",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2010s/2011-12.html`,
  },
  {
    year: "2012-13",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2010s/2012-13.html`,
  },
  {
    year: "2013-14",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2010s/2013-14.html`,
  },
  {
    year: "2014-15",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2010s/2014-15.html`,
  },
  {
    year: "2015-16",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2010s/2015-16.html`,
  },
  {
    year: "2016-17",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2010s/2016-17.html`,
  },
  {
    year: "2017-18",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2010s/2017-18.html`,
  },
  {
    year: "2018-19",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2010s/2018-19.html`,
  },
  {
    year: "2019-20",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2010s/2019-20.html`,
  },
  {
    year: "2020-21",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2020s/2020-21.html`,
  },
  {
    year: "2021-22",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2020s/2021-22.html`,
  },
  {
    year: "2022-23",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2020s/2022-23.html`,
  },
  {
    year: "2023-24",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2020s/2023-24.html`,
  },
  {
    year: "2024-25",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2020s/2024-25.html`,
  },
  {
    year: "2025-26",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2020s/2025-26.html`,
  },
  {
    year: "2026-27",
    navTitle: "Division I FBS Playoffs",
    path: `${base}/season-archives/2020s/2026-27.html`,
  },
];

function buildSeasonNavInfobox() {
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
}

buildSeasonNavInfobox();
