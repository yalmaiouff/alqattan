// -----------------------------------------------------------------------
// English / Arabic language switcher
// -----------------------------------------------------------------------
// Every translatable piece of text on the page carries a data-en / data-ar
// pair. setLang() swaps the visible text, flips the page direction for
// Arabic, highlights the active button in the top-right switcher, and
// remembers the choice for next time.
//
// On first visit (no saved choice yet) the page defaults to whatever
// language the visitor's device/browser is set to - Arabic devices open
// in Arabic, everything else opens in English.
// -----------------------------------------------------------------------

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", () => {
  window.scrollTo(0, 0);
});
function setLang(lang) {
  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = lang === "ar" ? el.dataset.ar : el.dataset.en;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === lang);
  });

  localStorage.setItem("unibev-lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("unibev-lang");

  if (saved) {
    setLang(saved);
  } else {
    const deviceLang = (navigator.language || "en").toLowerCase();
    setLang(deviceLang.startsWith("ar") ? "ar" : "en");
  }
});
