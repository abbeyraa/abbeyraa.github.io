async function loadLayout() {
  const headerEl = document.querySelector("header");
  if (headerEl) {
    const headerHTML = await fetch("/layout/header.html").then((r) => r.text());
    headerEl.innerHTML = headerHTML;
  }

  const footerEl = document.querySelector("footer");
  if (footerEl) {
    const footerHTML = await fetch("/layout/footer.html").then((r) => r.text());
    footerEl.innerHTML = footerHTML;
  }
}

loadLayout();
