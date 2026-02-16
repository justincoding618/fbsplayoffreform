function drawBracketLines() {
  const bracket = document.querySelector(".bracket");
  if (!bracket) return;

  const old = bracket.querySelector("svg.bracket-svg");
  if (old) old.remove();

  const bRect = bracket.getBoundingClientRect();
  const rounds = bracket.querySelectorAll(".round");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("bracket-svg");
  svg.style.cssText = `
    position:absolute; top:0; left:0;
    width:100%; height:100%;
    pointer-events:none; overflow:visible; z-index:10;
  `;

  function line(x1, y1, x2, y2) {
    const l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", x1.toFixed(1));
    l.setAttribute("y1", y1.toFixed(1));
    l.setAttribute("x2", x2.toFixed(1));
    l.setAttribute("y2", y2.toFixed(1));
    l.setAttribute("stroke", "#000");
    l.setAttribute("stroke-width", "1.5");
    return l;
  }

  rounds.forEach((round, ri) => {
    if (ri === rounds.length - 1) return;

    const matches = round.querySelectorAll(".match");
    const nextMatches = rounds[ri + 1].querySelectorAll(".match");

    for (let i = 0; i < matches.length; i += 2) {
      const topMatch = matches[i];
      const bottomMatch = matches[i + 1];
      const targetMatch = nextMatches[i / 2];
      if (!topMatch || !bottomMatch || !targetMatch) continue;

      const tR = topMatch.getBoundingClientRect();
      const bR = bottomMatch.getBoundingClientRect();
      const dR = targetMatch.getBoundingClientRect();

      // Y centers relative to bracket top
      const topMidY = tR.top + tR.height / 2 - bRect.top;
      const bottomMidY = bR.top + bR.height / 2 - bRect.top;
      const targetMidY = dR.top + dR.height / 2 - bRect.top; // actual measured center

      // X coords relative to bracket left
      const fromX = tR.right - bRect.left; // right edge of source boxes
      const toX = dR.left - bRect.left; // left edge of target box
      const joinX = fromX + 16; // vertical bar sits 16px right of source

      // Stub right from top match → vertical bar
      svg.appendChild(line(fromX, topMidY, joinX, topMidY));
      // Stub right from bottom match → vertical bar
      svg.appendChild(line(fromX, bottomMidY, joinX, bottomMidY));
      // Vertical bar
      svg.appendChild(line(joinX, topMidY, joinX, bottomMidY));
      // Exit line: from vertical bar at the TARGET's actual center → target left edge
      svg.appendChild(line(joinX, targetMidY, toX, targetMidY));
    }
  });

  bracket.appendChild(svg);
}

requestAnimationFrame(() => requestAnimationFrame(drawBracketLines));
window.addEventListener("resize", () => {
  clearTimeout(window._bt);
  window._bt = setTimeout(drawBracketLines, 100);
});
