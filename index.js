(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const s=()=>{new Accordion(".accordion-container",{openOnInit:[0],collapse:!1})},c=()=>{AOS.init({duration:800})},l=()=>{new Glider(document.querySelector(".glider"),{slidesToShow:2,slidesToScroll:2,draggable:!0,dots:".dots",scrollLock:!0,arrows:{prev:".glider-prev",next:".glider-next"}})};l();s();c();
//# sourceMappingURL=index.js.map
