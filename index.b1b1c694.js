var e=function(t,n,r){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,d=t.querySelectorAll("tr");if(l>=d.length)return null;var o=d[l],c=0===l?document.createElement("th"):document.createElement("td");c.textContent=o.children[n].textContent,r>=o.children.length?o.appendChild(c):o.insertBefore(c,o.children[r]),e(t,n,r,l+1)};document.addEventListener("DOMContentLoaded",function(){e(document.querySelector("table"),1,4)});
//# sourceMappingURL=index.b1b1c694.js.map