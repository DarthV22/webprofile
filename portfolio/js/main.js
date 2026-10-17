"use strict";

function updateNavigation() {
  const current = new URL(window.location.href);
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const target = new URL(link.href);
    const currentPage = current.pathname.replace(/\/$/, "/index.html");
    if (target.pathname === currentPage) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

updateNavigation();
