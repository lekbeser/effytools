(function(h,i,b){var d=null,g=false,c=true,e="syserr",f="kbes_hidden",a="kbes_disabled";if(typeof h.EFT_PC_ADD=="undefined"){EFT_PC_ADD=(function(m){var k="http://www.effytools.com/pocket",o=null,n="";function l(u,t){try{n=u.getSelection?(u.getSelection()?u.getSelection().toString():""):(t=t||u.document).selection?t.selection.createRange().text:""}catch(s){}if(!n){for(var r=0,q=u.frames,p=q.length;r<p;r++){l(q[r]);if(n){break}}}}function j(r){var p,q;if(o&&(p=o.contentWindow)&&(q=p.postMessage)){q({txt:n+" (c) ["+location.href+"]"},"*");alert((r?"Добавлено":"Added")+":\n["+n+"]");n=""}else{alert(r?"Не поддерживается.":"Not supported.")}}return function(p){p=(p==="ru")?1:0;l(h,m);if(n){if(!o){o=m.createElement("iframe");o.name=parseInt(Math.random()*99999);o.src=k;o.style.width=o.style.height="1px";o.style.display="none";o.onload=function(){j(p)};m.body.appendChild(o)}else{j(p)}}else{alert(p?"Не найдено.":"Not found.")}}}(i))}})(window,document);