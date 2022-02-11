"use strict";(self.webpackChunkd_hondt_calculator_online=self.webpackChunkd_hondt_calculator_online||[]).push([[218],{3244:(e,t,n)=>{n.d(t,{E:()=>r});var r=function(e){return"hsl(".concat(110*e%360,", 75%, 60%)")}},2218:(e,t,n)=>{n.r(t),n.d(t,{Results:()=>k,default:()=>P});var r={};n.r(r);var s=n(5893),a=n(7294),i=n(7007),o=n(2486),c=n(3328),l=n(1449),u=n(5376),d=n(3244),f={weight:"bold",color:r.neutral,size:16};function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){var t=e.parties,n={plugins:{title:{text:"Seats per party",display:!0,font:f},datalabels:{color:r.neutral,font:b({},f)}},responsive:!0,maintainAspectRatio:!0,aspectRatio:1,x:{ticks:{font:b({},f)}}},a={labels:t.map((function(e){return e.name})),datasets:[{label:"Seats",data:t.map((function(e){return e.seats})),backgroundColor:t.map((function(e){return(0,d.E)(e.index)}))}]};return(0,s.jsx)(u.$Q,{options:n,data:a})},m=function(e){return parseFloat(Math.abs(e).toFixed(2))},v=function(e){return 0===e?"No seats gained/lost":"".concat(m(e)," seats ").concat(e>0?"gained":"lost")},j={plugins:{title:{text:"Difference from ideal number of seats",display:!0,font:{weight:"bold",size:16}},datalabels:{color:r.neutral,formatter:v,font:f}},responsive:!0,maintainAspectRatio:!0,aspectRatio:1,indexAxis:"y",scales:{y:{ticks:{font:f}},x:{suggestedMin:-.5,suggestedMax:.5}}},x=function(e){var t=e.parties,n={labels:t.map((function(e){return e.name})),datasets:[{label:"Seats gained or lost due to inaccuracy of D'Hondt method",data:t.map((function(e){return e.difference})),backgroundColor:t.map((function(e){return e.difference>0?r.plus:r.minus}))}]};return(0,s.jsx)(u.$Q,{options:j,data:n})};c.kL.register(c.uw,c.f$,c.ZL,c.Dx,c.u,l.Z);var y=function(e,t){return Math.abs(t.difference)-Math.abs(e.difference)},w=function(e){var t,n=e.parties.sort(y)[0];return(0,s.jsxs)("div",{className:"_2J6EJ",children:[(0,s.jsx)("header",{children:"Seems low?"}),(0,s.jsxs)("div",{class:"fWkrf",children:[(0,s.jsxs)("p",{children:["Remember, this simulator only shows resuls for a ",(0,s.jsx)("em",{children:"single voting district"}),". In a real-world election, typically there will be multiple districts, allowing such discrepancies to accumulate."]}),(0,s.jsxs)("p",{children:["As an example, in the above simulation for a single district, party ",n.name," ",(0,s.jsx)("strong",{children:(t=n.difference,0===t?"gained/lost no seats":"".concat(t>0?"gained":"lost"," ").concat(m(t)," seats"))}),"."]}),(0,s.jsxs)("p",{children:["In a country with 40 voting districts, this would translate to ",(0,s.jsx)("strong",{children:v(Math.round(40*n.difference))})," nationwide."]})]})]})};const O="_2QRSt";var k=function(){var e,t;e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.calculator.resultsValid})),(0,a.useLayoutEffect)((function(){t||e(o.I.updateResults())}),[t,e]);var n=(0,i.v9)((function(e){return e.calculator.results})),r=Object.values(n).sort((function(e,t){return t.votes-e.votes})),c=(0,i.v9)((function(e){return e}));return console.log("state"),console.log(c),(0,s.jsxs)("div",{className:"_2biC3",children:[(0,s.jsx)("div",{className:O,children:(0,s.jsx)(g,{parties:r})}),(0,s.jsx)("div",{className:O,children:(0,s.jsx)(x,{parties:r})}),(0,s.jsx)("div",{className:"Wgzpz",children:(0,s.jsx)(w,{parties:r})})]})};const P=k}}]);
//# sourceMappingURL=218.js.map