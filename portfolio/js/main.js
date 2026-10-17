"use strict";

function updateNavigation() {
  const current = new URL(window.location.href);
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const target = new URL(link.href);
    const currentPage = current.pathname.replace(/\/$/, "/index.html");
    const samePage = target.pathname === currentPage;
    const sameSection = target.hash && target.hash === current.hash;
    if (samePage && (!target.hash || sameSection)) {
      link.setAttribute("aria-current", target.hash ? "location" : "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

updateNavigation();
window.addEventListener("hashchange", updateNavigation);
