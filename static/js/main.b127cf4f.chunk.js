(this.webpackJsonpxo=this.webpackJsonpxo||[]).push([[0],{19:function(e,l,c){e.exports=c(30)},24:function(e,l,c){},30:function(e,l,c){"use strict";c.r(l);var t=c(0),n=c.n(t),a=c(17),i=c.n(a),o=(c(24),c(11)),r=c(1),s=c(8),u=c(7),m=c(5);var d=function(){var e=Object(t.useState)("x"),l=Object(m.a)(e,2),c=l[0],a=l[1],i=Object(t.useState)({cell1:"",cell2:"",cell3:"",cell4:"",cell5:"",cell6:"",cell7:"",cell8:"",cell9:""}),o=Object(m.a)(i,2),r=o[0],d=o[1],f=Object(t.useState)({display:"none"}),v=Object(m.a)(f,2),b=v[0],E=v[1],j=Object(t.useState)(""),O=Object(m.a)(j,2),y=O[0],p=O[1],k=[[r.cell1,r.cell2,r.cell3],[r.cell4,r.cell5,r.cell6],[r.cell7,r.cell8,r.cell9],[r.cell1,r.cell4,r.cell7],[r.cell2,r.cell5,r.cell8],[r.cell3,r.cell6,r.cell9],[r.cell1,r.cell5,r.cell9],[r.cell3,r.cell5,r.cell7]],h=function(e){r[e]||(d(Object(u.a)(Object(u.a)({},r),{},Object(s.a)({},e,c))),a("o"===c?"x":"o"))};return Object(t.useEffect)((function(){var e;switch(c){case"x":e="o";break;case"o":e="x"}k.some((function(l){return l.every((function(l){return l.includes(e)}))}))?(p(e+" wins!"),E({display:"flex"})):Object.values(r).every((function(e){return"x"===e||"o"===e}))&&(p("It's a draw!"),E({display:"flex"}))}),[r]),n.a.createElement("div",null,n.a.createElement("div",{className:"grid "+c},n.a.createElement("div",{className:"cell "+r.cell1,onClick:function(){h("cell1")}}),n.a.createElement("div",{className:"cell "+r.cell2,onClick:function(){h("cell2")}}),n.a.createElement("div",{className:"cell "+r.cell3,onClick:function(){h("cell3")}}),n.a.createElement("div",{className:"cell "+r.cell4,onClick:function(){h("cell4")}}),n.a.createElement("div",{className:"cell "+r.cell5,onClick:function(){h("cell5")}}),n.a.createElement("div",{className:"cell "+r.cell6,onClick:function(){h("cell6")}}),n.a.createElement("div",{className:"cell "+r.cell7,onClick:function(){h("cell7")}}),n.a.createElement("div",{className:"cell "+r.cell8,onClick:function(){h("cell8")}}),n.a.createElement("div",{className:"cell "+r.cell9,onClick:function(){h("cell9")}})),n.a.createElement("div",{className:"winning-msg",style:b},n.a.createElement("div",null," ",y," "),n.a.createElement("button",{className:"restart",onClick:function(){window.location.reload(!1)}},"Restart")))};function f(){var e=Object(t.useState)(!0),l=Object(m.a)(e,2),c=l[0],a=l[1],i=Object(t.useState)("x"),o=Object(m.a)(i,2),r=o[0],d=o[1],f=Object(t.useState)("o"),v=Object(m.a)(f,2),b=v[0],E=v[1],j=Object(t.useState)({display:"none"}),O=Object(m.a)(j,2),y=O[0],p=O[1],k=Object(t.useState)(""),h=Object(m.a)(k,2),x=h[0],w=h[1],g=Object(t.useState)({cell1:"",cell2:"",cell3:"",cell4:"",cell5:"",cell6:"",cell7:"",cell8:"",cell9:""}),C=Object(m.a)(g,2),N=C[0],S=C[1],I=[["cell1","cell2","cell3"],["cell4","cell5","cell6"],["cell7","cell8","cell9"],["cell1","cell4","cell7"],["cell2","cell5","cell8"],["cell3","cell6","cell9"],["cell1","cell5","cell9"],["cell3","cell5","cell7"]];Object(t.useEffect)((function(){c?(d("x"),E("o")):(d("o"),E("x"))}),[c]);var W,B,D,J,P,R=function(e){N[e]||S(Object(u.a)(Object(u.a)({},N),{},Object(s.a)({},e,r)))},z=0,F=0;Object(t.useEffect)((function(){switch(F=Object.values(N).filter((function(e){return e===b})).length,z=Object.values(N).filter((function(e){return e===r})).length,c){case!0:P=z>F;break;case!1:P=z===F}var e=I.find((function(e){return["xxx","ooo"].includes(N[e[0]]+N[e[1]]+N[e[2]])}));if(e)switch(N[e[0]]){case r:w("you win!"),p({display:"flex"});break;case b:w("you lose!"),p({display:"flex"})}else Object.values(N).every((function(e){return"x"===e||"o"===e}))?(w("It's a draw!"),p({display:"flex"})):P&&((D=I.find((function(e){return N[e[0]]+N[e[1]]+N[e[2]]===b+b})))||(D=I.find((function(e){return N[e[0]]+N[e[1]]+N[e[2]]===r+r}))),D&&(W=D.find((function(e){return!N[e]}))),J=["cell1","cell9","cell3","cell7","cell5","cell2","cell6","cell8","cell4"],c&&["","o"].includes(N.cell5)&&(J=["cell5","cell2","cell6","cell8","cell4"].concat(J)),B=J.find((function(e){return!N[e]})),W?S(Object(u.a)(Object(u.a)({},N),{},Object(s.a)({},W,b))):B&&S(Object(u.a)(Object(u.a)({},N),{},Object(s.a)({},B,b))))}),[N,b]);return n.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},n.a.createElement("div",{style:{width:"250px",display:"flex",justifyContent:"space-between"}},n.a.createElement("div",null,n.a.createElement("input",{type:"radio",name:"play-turn",checked:c,onChange:function(e){a(e.target.checked)}}),n.a.createElement("label",null,"1st to play")),n.a.createElement("div",null,n.a.createElement("input",{type:"radio",name:"play-turn",checked:!c,onChange:function(e){a(!e.target.checked)}}),n.a.createElement("label",null,"2nd to play"))),n.a.createElement("div",{className:c?"grid x":"grid o"},n.a.createElement("div",{className:"cell "+N.cell1,onClick:function(){R("cell1")}}),n.a.createElement("div",{className:"cell "+N.cell2,onClick:function(){R("cell2")}}),n.a.createElement("div",{className:"cell "+N.cell3,onClick:function(){R("cell3")}}),n.a.createElement("div",{className:"cell "+N.cell4,onClick:function(){R("cell4")}}),n.a.createElement("div",{className:"cell "+N.cell5,onClick:function(){R("cell5")}}),n.a.createElement("div",{className:"cell "+N.cell6,onClick:function(){R("cell6")}}),n.a.createElement("div",{className:"cell "+N.cell7,onClick:function(){R("cell7")}}),n.a.createElement("div",{className:"cell "+N.cell8,onClick:function(){R("cell8")}}),n.a.createElement("div",{className:"cell "+N.cell9,onClick:function(){R("cell9")}})),n.a.createElement("div",{className:"winning-msg",style:y},n.a.createElement("div",null," ",x," "),n.a.createElement("button",{className:"restart",onClick:function(){window.location.reload(!1)}},"Restart")))}var v={fontSize:"3rem",fontFamily:"monospace",textDecoration:"none",fontWeight:"bold",color:"#000"},b=function(){return n.a.createElement("div",null,n.a.createElement(o.a,null,n.a.createElement("div",{style:{width:"100vw",height:"12vh",display:"flex",justifyContent:"space-around",alignItems:"center"}},n.a.createElement(o.b,{style:v,activeStyle:{color:"gray"},to:"/pvp"},"PvP"),n.a.createElement(o.b,{style:v,activeStyle:{color:"gray"},to:"/solo"},"Solo")),n.a.createElement(r.c,null,n.a.createElement(r.a,{path:"/pvp",component:d}),n.a.createElement(r.a,{path:"/solo",component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b127cf4f.chunk.js.map