document.addEventListener("keydown", (e) => {
  if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey) {
    const el = document.querySelector("input.md-search__input");
    if (el) { e.preventDefault(); el.focus(); }
  }
});
