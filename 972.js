"use strict";(self.webpackChunkd_hondt_calculator_online=self.webpackChunkd_hondt_calculator_online||[]).push([[972],{972:(e,r,t)=>{t.r(r),t.d(r,{Calculator:()=>x,default:()=>g});var n=t(893),a=t(7),c=t(676),s=t(244);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var u=function(e){var r=e.color,t=void 0===r?0:r,a=e.children,c=(e.className,e.style,function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["color","children","className","style"]));return(0,n.jsx)("fieldset",o(o({className:"_3xWO8",style:{borderColor:(0,s.E)(t)}},c),{},{children:a}))},d=t(118),f=function(e){var r=e.split("-").join(" ");return r.charAt(0).toUpperCase()+r.slice(1)};const b={plus:"#27ab83",minus:"#e12d39",neutral:"#1f2933",label:"Tfyqn",checkbox:"_94dG_",labelText:"_1XER2",input:"_2rW2w",error:"_1LMCk","has-error":"_2L7sm",hasError:"_2L7sm"};function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){j(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var m=function(e){var r=e.name,t=e.type,a=e.value,c=e.error,s=(e.className,e.style,function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["name","type","value","error","className","style"])),l="number"===t?function(e){return Number.isInteger(e)?e:""}(a):a;return(0,n.jsxs)("label",{className:(0,d.c)(b.label,b[t],c&&b.hasError),children:[(0,n.jsxs)("div",{className:b.labelText,children:[(0,n.jsx)("div",{children:f(r)}),c&&(0,n.jsx)("div",{className:b.error,children:c})]}),(0,n.jsx)("input",v({name:r,type:t,className:b.input,value:l},s))]})};var h=function(){var e=(0,a.I0)(),r=(0,a.v9)((function(e){return e.calculator.seats})),t=(0,a.v9)((function(e){return e.calculator.treshold})),s=(0,a.v9)((function(e){return e.calculator.seatsError})),l=(0,a.v9)((function(e){return e.calculator.tresholdError}));return(0,n.jsxs)("div",{role:"group","aria-labelledby":"main-settings-label",className:"_1acUv",children:[(0,n.jsx)("div",{className:"_2Nr42",id:"main-settings-label",children:"Main settings"}),(0,n.jsxs)("div",{className:"MyEIp",children:[(0,n.jsx)(m,{name:"seats",type:"number",value:r,error:s,onChange:function(r){e(c.I.setSeats(parseInt(r.target.value,10)))}}),(0,n.jsx)(m,{name:"treshold",type:"number",value:t,error:l,onChange:function(r){e(c.I.setTreshold(parseInt(r.target.value,10)))}})]})]})};const y="_3iJJ0";var O=function(e){var r=e.party,t=(0,a.I0)();return(0,n.jsx)(u,{color:r.index,children:(0,n.jsxs)("div",{className:"_2Xcaa",children:[(0,n.jsx)("div",{className:y,children:(0,n.jsx)(m,{name:"name",value:r.name,onChange:function(e){t(c.I.setName(r.index,e.target.value))},error:r.nameError})}),(0,n.jsx)("div",{className:"vroSu",children:(0,n.jsx)("button",{type:"button",className:"_3EAQ_",onClick:function(){t(c.I.removeParty(r.index))},"aria-label":"delete party",children:(0,n.jsx)("div",{className:"_16Tha"})})}),(0,n.jsx)("div",{className:y,children:(0,n.jsx)(m,{name:"votes",type:"number",value:r.votes,onChange:function(e){t(c.I.setVotes(r.index,parseInt(e.target.value,10)))},error:r.votesError})}),(0,n.jsx)("div",{className:y,children:(0,n.jsx)(m,{name:"ignores-treshold",type:"checkbox",checked:r.ignoresTreshold,onChange:function(e){t(c.I.setIgnoresTreshold(r.index,e.target.checked))}})})]})})};var x=function(){var e=(0,a.I0)(),r=(0,a.v9)((function(e){return e.calculator.parties})),t=(0,a.v9)((function(e){return e.calculator.nextIndex}));return(0,n.jsxs)("form",{className:"_11OpB",children:[(0,n.jsx)("div",{className:"_1dO6e",children:(0,n.jsx)(h,{})}),(0,n.jsxs)("div",{className:"_1iSid",children:[Object.values(r).map((function(e){return(0,n.jsx)(O,{party:e},e.index)})),(0,n.jsx)(u,{color:t,children:(0,n.jsx)("button",{type:"button",className:"_2FxFR",onClick:function(){e(c.I.addParty())},children:"New party"})})]})]})};const g=x},244:(e,r,t)=>{t.d(r,{E:()=>n});var n=function(e){return"hsl(".concat(110*e%360,", 75%, 60%)")}}}]);
//# sourceMappingURL=972.js.map