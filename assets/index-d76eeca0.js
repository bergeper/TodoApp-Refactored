(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();class u{constructor(t,o){this.task=t,this.completed=o,this.task=t,this.completed=o}}let l=[];function m(){return l=JSON.parse(localStorage.getItem("Todos")??"[]"),l.map(t=>new u(t.task,t.completed))}function f(e,t,o,c){t.checked?(o[c].completed=!0,e.classList.add("card__task--done"),console.log(o)):(o[c].completed=!1,e.classList.remove("class","card__task--done"),console.log(o)),localStorage.setItem("Todos",JSON.stringify(o))}function h(e,t){e.splice(t,1),localStorage.setItem("Todos",JSON.stringify(e)),i(e)}function g(e){e.sort((t,o)=>t.completed>o.completed?1:-1),i(e)}const d=document.getElementById("todoListDisplay");function i(e){const t=document.createElement("button");t.classList.add("sort__btn"),t.innerHTML="Sort it up!",d.innerHTML="";for(let o=0;o<e.length;o++){const c=document.createElement("div");c.classList.add("card__task");const s=document.createElement("p");s.classList.add("card__task--name");const n=document.createElement("span");n.classList.add("card__task--remove");const r=document.createElement("input");r.classList.add("card__task--check"),r.type="checkbox",r.checked=e[o].completed,r.addEventListener("change",()=>{f(c,r,e,o)}),n.addEventListener("click",()=>{h(e,o)}),r.checked?c.classList.add("card__task--done"):c.classList.remove("class","card__task--done"),n.innerHTML='<i class="bi bi-x-square-fill"></i>',s.innerText=e[o].task,c.appendChild(r),c.appendChild(s),c.appendChild(n),d.appendChild(c)}t.addEventListener("click",()=>{g(e)}),d.appendChild(t)}let a=[];a=m();function k(){const e=document.getElementById("task");document.getElementById("addTask").addEventListener("click",o=>{o.preventDefault(),L(e.value),e.value=""})}function L(e){const t=new u(e,!1);e===""?alert("You need to write something"):(a.push(t),localStorage.setItem("Todos",JSON.stringify(a)),i(a))}let p=[];p=m();function T(){k(),i(p)}T();