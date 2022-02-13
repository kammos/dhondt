"use strict";(self.webpackChunkd_hondt_calculator_online=self.webpackChunkd_hondt_calculator_online||[]).push([[930],{388:(e,t,r)=>{r.d(t,{Eu:()=>n,zu:()=>a.z,LS:()=>a.L,Qs:()=>s,Me:()=>l});var n=function(e){return"hsl(".concat(110*e%360,", 75%, 60%)")},a=r(439),s=function(e){var t=e.split("-").join(" ");return t.charAt(0).toUpperCase()+t.slice(1)},i=r(294);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=0,l=function(e){return(t=(0,i.useState)((function(){return"".concat(e,"-").concat(c++)})),r=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return r}}(t,r)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];var t,r}},439:(e,t,r)=>{r.d(t,{z:()=>a,L:()=>s});var n=function(e){return parseFloat(Math.abs(e).toFixed(2))},a=function(e){return 0===e?"No seats gained/lost":"".concat(n(e)," seats ").concat(e>0?"gained":"lost")},s=function(e){return 0===e?"gained/lost no seats":"".concat(e>0?"gained":"lost"," ").concat(n(e)," seats")}},480:(e,t,r)=>{r.d(t,{M:()=>o});var n=r(893);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=function(e){var t=e.children,r=(e.className,e.style,function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,["children","className","style"]));return(0,n.jsx)("div",s(s({className:"_2pftE"},r),{},{children:t}))}},930:(e,t,r)=>{r.r(t),r.d(t,{Results:()=>D,default:()=>M});var n={};r.r(n);var a=r(893),s=r(294),i=r(7),o=r(676),c=r(328),l=r(449),u=r(376),d=r(388),f={weight:"bold",color:n.neutral,size:16};function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b={plugins:{title:{text:"Seats per party",display:!0,font:f},datalabels:{color:n.neutral,font:h({},f)}},responsive:!0,maintainAspectRatio:!0,aspectRatio:1,x:{ticks:{font:h({},f)}}},j=function(e){var t=e.parties,r={labels:t.map((function(e){return e.name})),datasets:[{label:"Seats",data:t.map((function(e){return e.seats})),backgroundColor:t.map((function(e){return(0,d.Eu)(e.index)}))}]},n=(0,a.jsx)(a.Fragment,{children:t.map((function(e){return(0,a.jsxs)("p",{children:[e.name," - ",e.votes," votes;"]},e.index)}))});return(0,a.jsx)(u.$Q,{options:b,data:r,fallbackContent:n})},m=r(439),v={plugins:{title:{text:"Difference from ideal number of seats",display:!0,font:{weight:"bold",size:16}},datalabels:{color:n.neutral,formatter:m.z,font:f}},responsive:!0,maintainAspectRatio:!0,aspectRatio:1,indexAxis:"y",scales:{y:{ticks:{font:f}},x:{suggestedMin:-.5,suggestedMax:.5}}},g=function(e){var t=e.parties,r={labels:t.map((function(e){return e.name})),datasets:[{label:"Seats gained or lost due to inaccuracy of D'Hondt method",data:t.map((function(e){return e.difference})),backgroundColor:t.map((function(e){return e.difference>0?n.plus:n.minus}))}]},s=(0,a.jsx)(a.Fragment,{children:t.map((function(e){return(0,a.jsxs)("p",{children:[e.name," - ",(0,m.z)(e.difference),";"]},e.index)}))});return(0,a.jsx)(u.$Q,{options:v,data:r,fallbackContent:s})};c.kL.register(c.uw,c.f$,c.ZL,c.Dx,c.u,l.Z);var x=r(155),O=r(480);var w=function(e,t){return Math.abs(t.difference)-Math.abs(e.difference)},S=function(e){var t=e.parties;if(!e.isDataValid)return(0,a.jsxs)(O.M,{children:[(0,a.jsx)("h2",{className:"rnYHx",children:"The data you entered is invalid"}),(0,a.jsx)("div",{children:(0,a.jsxs)("p",{children:["It seems that some of the data you entered is invalid. Please go back to the ",(0,a.jsx)(x.rU,{href:"/setyp",children:"Enter data"})," tab and correct all fields marked in red."]})})]});if(0===t.length)return(0,a.jsxs)(O.M,{children:[(0,a.jsx)("h2",{children:"It seems that you didn't enter any parties"}),(0,a.jsx)("div",{children:(0,a.jsxs)("p",{children:["To see election results, please go back to the ",(0,a.jsx)(x.rU,{href:"/setyp",children:"Enter data"})," tab and fill in at least one party."]})})]});var r=t.sort(w)[0];return 0===r.difference?(0,a.jsxs)(O.M,{children:[(0,a.jsx)("h2",{children:"Wow, no party lost or gained any seats!"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:"Sadly, this is a rare occurence with the D'Hondt method."}),(0,a.jsx)("p",{children:"Try changing number votes received by each party even just a little."})]})]}):(0,a.jsxs)(O.M,{children:[(0,a.jsx)("h2",{children:"Seems low?"}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{children:["Remember, this simulator only shows resuls for a ",(0,a.jsx)("em",{children:"single voting district"}),". In a real-world election, typically there will be multiple districts, allowing such discrepancies to accumulate."]}),(0,a.jsxs)("p",{children:["As an example, in the above simulation for a single district, party ",r.name," ",(0,a.jsx)("strong",{children:(0,d.LS)(r.difference)}),"."]}),(0,a.jsxs)("p",{children:["In a country with 40 voting districts, this would translate to ",(0,a.jsx)("strong",{children:(0,d.zu)(Math.round(40*r.difference))})," nationwide."]})]})]})},P=function(e){return null==e.nameError&&null==e.votesError};const k="_2QRSt";var E=r(502),D=function(){var e,t;e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.calculator.resultsValid})),(0,s.useLayoutEffect)((function(){t||e(o.I.updateResults())}),[t,e]);var r=(0,i.v9)((function(e){return e.calculator.results})),n=Object.values(r).sort((function(e,t){return t.votes-e.votes})),c=0!==n.length,l=function(){var e=(0,i.v9)((function(e){return e.calculator}));return null==e.tresholdError&&null==e.seatsError&&Object.values(e.parties).every(P)}();return(0,a.jsxs)("div",{className:"_2biC3",children:[(0,a.jsx)("h1",{className:E.Z.srOnly,children:"Results"}),l&&c&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:k,children:[(0,a.jsx)("h2",{className:E.Z.srOnly,children:"Seats per party"}),(0,a.jsx)(j,{parties:n})]}),(0,a.jsxs)("div",{className:k,children:[(0,a.jsx)("h2",{className:E.Z.srOnly,children:"Seats gained or lost by each party due to inaccuracy of D'Hondt method"}),(0,a.jsx)(g,{parties:n})]})]}),(0,a.jsx)("div",{className:"Wgzpz",children:(0,a.jsx)(S,{parties:n,isDataValid:l})})]})};const M=D},502:(e,t,r)=>{r.d(t,{Z:()=>n});const n={"sr-only":"_1YzBl",srOnly:"_1YzBl"}}}]);
//# sourceMappingURL=930.js.map