(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("[data-menu-open]"),t=document.querySelector(".close-menu"),n=document.querySelector(".menu");function r(){n.classList.add("is-open"),document.body.classList.add("no-scroll")}function e(){n.classList.remove("is-open"),document.body.classList.remove("no-scroll")}s.addEventListener("click",r),t.addEventListener("click",e),document.querySelectorAll(".nav-mob-menu a").forEach(o=>{o.addEventListener("click",e)})});
//# sourceMappingURL=commonHelpers.js.map