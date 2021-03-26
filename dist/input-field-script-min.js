// input-field Web Component. Responsive input field with label and validation
// https://github.com/ahabra/input-field
// Copyright 2021 (C) Abdul Habra. Version 1.1.0.
// Apache License Version 2.0


var InputField=(()=>{var le=Object.defineProperty;var ae=(e,t)=>{for(var n in t)le(e,n,{get:t[n],enumerable:!0})};var Lt={};ae(Lt,{define:()=>oe});var ce=Object.defineProperty,g=(e,t)=>{for(var n in t)ce(e,n,{get:t[n],enumerable:!0})},a={};g(a,{add:()=>he,all:()=>O,classPresentIf:()=>ve,createElement:()=>pe,createElements:()=>H,first:()=>de,getAttributes:()=>me,id:()=>fe,removeElements:()=>be,setContent:()=>ge,tag:()=>N});var f={};g(f,{equals:()=>W,forEachEntry:()=>L,has:()=>we,isDate:()=>E,isFunction:()=>k,isInteger:()=>xe,isNil:()=>ye,isNumber:()=>R,isRegExp:()=>q,isString:()=>b});function ye(e){return e==null}function b(e){return p(e,"String")}function k(e){return p(e,"Function")}function E(e){return p(e,"Date")}function R(e){return p(e,"Number")?Number.isNaN(e)?!1:Number.isFinite(e):!b(e)||(e=e.trim(),e==="")?!1:!isNaN(e)}function xe(e){return R(e)?Number.isInteger(Number.parseFloat(e)):!1}function q(e){return p(e,"RegExp")}function p(e,t){return Object.prototype.toString.call(e)===`[object ${t}]`}function L(e,t){if(!(!e||!t)){if(Array.isArray(e)){e.forEach((n,r)=>{t(r,n)});return}Object.entries(e).forEach(n=>t(n[0],n[1]))}}function we(e,t){return!e||!t?!1:Object.prototype.hasOwnProperty.call(e,t)}function W(e,t){return e===t?!0:e===void 0||t===void 0?!1:Ee(e,t)}function Ee(e,t){return M(e)||M(t)?e===t:Le(e,t)}var Te=new Set(["boolean","number","bigint","string","symbol"]);function M(e){return Te.has(typeof e)}function Le(e,t){return Se(e,t)?Ce(e,t)?!0:$e(e,t):!1}function Se(e,t){return I(e)===I(t)}function I(e){return Object.prototype.toString.call(e)}function Ce(e,t){return E(e)&&E(t)?e.getTime()===t.getTime():!1}function $e(e,t){let n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(r=>W(e[r],t[r]))}function fe(e,t=document){return T(t)&&(t=t.shadowRoot),t.getElementById(e)}function O(e,t=document){return T(t)&&(t=t.shadowRoot),Array.from(t.querySelectorAll(e))}function de(e,t=document){if(T(t)&&(t=t.shadowRoot),!e.includes("/"))return t.querySelector(e);let n=e.split("/").map(r=>r.trim()).filter(r=>r.length>0);for(let r of n)if(t=Ae(r,t),t===null)break;return t}function Ae(e,t){return e==="shadowRoot"||e==="shadow-root"?t.shadowRoot:t.querySelector(e)}function T(e){return e&&e.shadowRoot&&e.tagName.includes("-")}function me(e){let t={},n=e.attributes;if(!n||n.length===0)return t;for(let r=0;r<n.length;r++){let i=n[r];t[i.name]=i.value}return t}function H(e=""){if(e=e.trim(),!e)return[];let t=document.createElement("template");return t.innerHTML=e,Array.from(t.content.childNodes)}function pe(e,t={},n=""){let r=N(e,t,n),i=H(r);return i.length===0?null:i[0]}function N(e,t={},n=""){if(!e)return"";let r=Oe(t);return`<${e}${r}>${n}</${e}>`}function Oe(e){let t=[];return L(e,(r,i)=>{t.push(`${r}="${i}"`)}),(t.length>0?" ":"")+t.join(" ")}var He=new Set(["beforebegin","afterbegin","beforeend","afterend"]);function he(e,t,n="beforeend"){return n=n.toLowerCase(),He.has(n)?(b(t)?e.insertAdjacentHTML(n,t):Ne(e,t,n),!0):!1}function Ne(e,t,n){Array.isArray(t)?t.forEach(r=>e.insertAdjacentElement(n,r)):e.insertAdjacentElement(n,t)}function ge(e,...t){e.innerHTML="",e.append(...t)}function be(e,t=document){O(e,t).forEach(r=>{r.parentNode.removeChild(r)})}function ve(e,t,n){if(!e)return;let r=n?"add":"remove";e.classList[r](t)}var u={};g(u,{endsWith:()=>V,indexOf:()=>S,indexOfFirstMatch:()=>ke,indexOfLastMatch:()=>Re,isEmpty:()=>F,removePrefix:()=>D,removeSuffix:()=>U,removeSurrounding:()=>qe,replaceAll:()=>B,replaceTemplate:()=>Ie,startsWith:()=>P,substringAfter:()=>We,substringBefore:()=>Me,trim:()=>C});function S(e,t,n=0,r=!1){return e?r?e.toLowerCase().indexOf(t.toLowerCase(),n):e.indexOf(t,n):-1}function ke(e,t){return!t||!e?-1:e.split("").findIndex(t)}function Re(e,t){if(!t||!e)return-1;let n=e.split("");for(let r=n.length;r>=0;--r)if(t(n[r],r))return r;return-1}function P(e="",t=void 0,n=!1){if(n){let r=e.substring(0,t.length).toLowerCase();return t.toLowerCase()===r}return e.startsWith(t)}function V(e,t,n=!1){return n?e.toLowerCase().endsWith(t.toLowerCase()):e.endsWith(t)}function D(e,t,n=!1){return P(e,t,n)&&(e=e.substring(t.length)),e}function U(e,t,n=!1){return V(e,t,n)&&(e=e.substring(0,e.length-t.length)),e}function qe(e,t,n,r=!1){return U(D(e,t,r),n,r)}function We(e,t,n=!1){if(!t)return e;let r=S(e,t,0,n);return r<0?"":e.substring(r+t.length)}function Me(e,t,n=!1){if(!t)return"";let r=S(e,t,0,n);return r<0?e:e.substring(0,r)}function C(e){return F(e)?"":(b(e)||(e=String(e)),e.trim(e))}function F(e){return e==null||e===""}function B(e,t,n){if(k(String.prototype.replaceAll))return e.replaceAll(t,n);if(q(t))return e.replace(t,n);let r=new RegExp(t,"g");return e.replace(r,n)}function Ie(e="",t={},n="${",r="}"){return L(t,(i,s)=>{s!==void 0&&(i=n+i+r,e=B(e,i,s))}),e}var Pe={};g(Pe,{compareLines:()=>Ve});function Ve(e,t,{trim:n=!0,skipEmpty:r=!0,caseSensitive:i=!0}={trim:!0,skipEmpty:!0,caseSensitive:!0}){if(e=z(e,{trim:n,skipEmpty:r}),t=z(t,{trim:n,skipEmpty:r}),e.length!==t.length)return`t1 has ${e.length} lines(s) while t2 has ${t.length} line(s).`;for(let s=0;s<e.length;s++){let o=De(e[s],t[s],s,i);if(o.length>0)return o}return""}function De(e,t,n,r){let i=r?e:e.toLowerCase(),s=r?t:t.toLowerCase();return i!==s?`Line #${n+1} mismatch.
${e}
${t}`:""}function z(e,{trim:t,skipEmpty:n}){return t&&(e=C(e)),e=e.split(`
`),t&&(e=e.map(r=>C(r))),n&&(e=e.filter(r=>!!r)),e}function $({obj:e,prop:t,sel:n,attr:r,root:i,onChange:s}){Fe(t),e=e||{};let o=e.hasOwnProperty(t)?e[t]:void 0;i=i||document;let c={};return Object.defineProperty(e,t,{get:()=>J({prop:t,sel:n,attr:r,root:i,objNotBound:c}),set:ue=>Ue({prop:t,value:ue,root:i,sel:n,attr:r,objNotBound:c,onChange:s}),configurable:!0,enumerable:!0}),o!==void 0&&(console.info(`Property '${t}' already exists in object. Will override previous definition but retain old value of ${o}.`),e[t]=o),e}var v=e=>e.type==="checkbox",y=e=>e.type==="radio",G=e=>e.tagName.toLowerCase()==="select",_=e=>"value"in e,K=e=>new Set(Array.isArray(e)?e:[e]);function Ue({prop:e,value:t,root:n,sel:r,attr:i,objNotBound:s,onChange:o}){if(Be({prop:e,value:t,root:n,sel:r,attr:i,objNotBound:s,onChange:o}),r){ze(n,r,t,i);return}s[e]=t}function Be({prop:e,value:t,root:n,sel:r,attr:i,objNotBound:s,onChange:o}){if(!o)return;let c=J({prop:e,root:n,sel:r,attr:i,objNotBound:s});c!==t&&o(c,t)}function J({prop:e,root:t,sel:n,attr:r,objNotBound:i}){return n?Je(t,n,r):i[e]}function Je(e,t,n){let r=Q(e,t);if(r.length===0)return null;let i=r[0];if(n)return i.getAttribute(n);if(!_(i))return i.innerHTML;if(v(i))return r.filter(s=>v(s)&&s.checked).map(s=>s.value==="on"?s.name:s.value);if(G(i))return[...i.querySelectorAll("option")].filter(o=>o.selected).map(o=>o.value);if(!(y(i)&&(i=r.filter(y).find(s=>s.checked),!i)))return i.value}function ze(e,t,n,r){let i=Q(e,t);if(i.length===0)return;let s=i[0];if(v(s)){let o=K(n);i.filter(v).forEach(c=>c.checked=o.has(c.value)||o.has(c.name));return}if(G(s)){let o=K(n);s.querySelectorAll("option").forEach(c=>c.selected=o.has(c.value));return}if(y(s)){i.filter(y).forEach(o=>o.checked=o.value===n);return}i.forEach(o=>Ge(o,n,r))}function Ge(e,t,n){n?e.setAttribute(n,t):_(e)?e.value=t:e.innerHTML=t}function Q(e,t){let n=e.querySelectorAll(t);return n.length===0&&console.warn(`No elements found matching selector ${t}`),[...n]}function Fe(e){if(typeof e!="string"||e.length===0)throw"'prop' argument must be a String defining the name a property."}function X({nameWithDash:e,html:t,css:n,display:r,propertyList:i,actionList:s,eventHandlerList:o}){if(customElements.get(e))return!1;let c=class extends HTMLElement{constructor(){super();Xe(this,t,n,r),this.properties=_e(this,i),this.actions=Ke(this,s),Qe(this,o)}};return customElements.define(e,c),!0}function _e(e,t){let n={};return Ze(t)&&t.forEach(r=>Ye(n,r,e)),n}function Ye(e,t,n){let r=je(t,n);$({obj:e,prop:t.name,sel:t.sel,attr:t.attr,root:n.shadowRoot,onChange:r}),t.value!==void 0&&(e[t.name]=t.value)}function je(e,t){if(!!e.onChange)return(n,r)=>e.onChange(t,n,r)}function Ze(e){if(!e)return!1;if(!Array.isArray(e))throw"propertyList must be an array of {name, value, [sel], [attr]} objects";return!0}function Ke(e,t){let n={};return t&&t.forEach(r=>{r.name&&r.action&&(n[r.name]=r.action.bind(e))}),n}function Qe(e,t){if(!!t){if(!Array.isArray(t))throw"eventHandlerList must be an array of {sel, eventName, listener} objects";t.forEach(n=>{a.all(n.sel,e.shadowRoot).forEach(i=>{i.addEventListener(n.eventName,s=>{n.listener(s,e)})})})}}function Xe(e,t,n,r){t=et(e,t);let i=e.attachShadow({mode:"open"}),s=a.createElements(tt(n,r)+t);i.append(...s)}function et(e,t){return f.isFunction(t)?t(e):t}function tt(e,t){return rt(t)+nt(e)}function nt(e){return e=u.trim(e),e.length===0?"":(u.startsWith(e,"<style>",!1)||(e=a.tag("style",{},e)),e)}function rt(e){return e=u.trim(e),e.length===0?"":`
  <style>
    :host { display: ${e};}
    :host([hidden]) {display: none;}
  </style>
  `}var h=class{constructor(t){this.rules=[],this.add(...t)}add(...t){return t=t.filter(n=>!st(this.rules,n.name)),t.length===0?!1:(this.rules.push(...t),t)}validate(t,n){this.rules.forEach(r=>{let i=r.isValid(t);n(i,r.name)})}toHtml(){return this.rules.map(t=>t.toHtml()).join("")}static createFromAttributes(t){let n=[];return it(n,t),f.forEachEntry(t,(r,i)=>{if(!u.isEmpty(i)&&f.has(l,r)){let s=t[r+"-message"],o=l[r](i,s);n.push(o)}}),new h(n)}};function it(e,t){switch(t.type){case"email":return e.push(l.email(t["email-message"]));case"number":return e.push(l.isNumber(t["number-message"]));case"integer":return e.push(l.isInteger(t["integer-message"]));case"set":return e.push(l.set(t.options,t["set-message"]))}}function st(e,t){return!!e.find(r=>r.name===t)}var l=class{constructor(t="",n,r){this.name=t.replace(/[ \\.]/g,"-").toLowerCase(),this.message=n,this.validator=r}isValid(t){return this.validator(String(t))}toHtml(){return u.isEmpty(this.message)?"":`<li class="validation-${this.name}">${this.message}</li>
`}static createRule(t,n,r,i){return n=u.replaceAll(n,"%v",i),new l(t,n,r)}static email(t="Must be a valid email address"){let n=r=>/\S+@\S+\.\S+/.test(r);return new l("email",t,n)}static required(t,n="Required Field"){let r=i=>!!i;return new l("required",n,r)}static minlength(t,n="Minimum Length is %v"){let r=i=>(i?i.length:0)>=t;return l.createRule("minlength",n,r,t)}static pattern(t,n="Must satisfy the pattern %v"){let r=i=>new RegExp(t).test(i);return l.createRule("pattern",n,r,t)}static min(t,n="Minimum value of %v"){t=Number(t)||0;let r=i=>(i=Number(i)||0,i>=t);return l.createRule("minValue",n,r,t)}static max(t,n="Maximum value of %v"){t=Number(t)||0;let r=i=>(i=Number(i)||0,i<=t);return l.createRule("max",n,r,t)}static isNumber(t="Must be a valid number"){let n=r=>f.isNumber(r);return new l("isNumber",t,n)}static isInteger(t="Must be a valid whole number"){let n=r=>f.isInteger(r);return new l("isInteger",t,n)}static set(t,n="Value must be one of [%v]"){let r=new Set(t.split(",").map(s=>s.trim().toLowerCase())),i=s=>s===""||r.has(s.toLowerCase());return l.createRule("set",n,i,t)}};var Y=`\${cssFile}

<div class="input-field">
  <label class="label">
    <span class="superlabel \${required} \${tooltip}">
      \${label} \${tooltipIcon}
      <span class="tooltip-text">\${tooltipText}</span>
    </span>
    <span class="sublabel">\${sublabel}</span>
  </label>

  \${input}

  <footer>
    <ul class="rules" style="display:\${showrules};">\${rules}</ul>
  </footer>
</div>
`;var ot=`
 <input type="{type}" class="input" value="{value}"
  {required} {minlength} {maxlength} {pattern}>
`,x="required";function Z(e){let t={type:ut(e),required:w(e,x),minlength:w(e,"minlength"),maxlength:w(e,"maxlength"),pattern:w(e,"pattern"),value:e.value||""};return u.replaceTemplate(ot,t,"{")}function ut(e){let t=u.trim(e.type).toLowerCase();return t?t==="integer"?"number":t:"text"}function w(e,t){let n=e[t];return n?t===x&&n===x?x:`${t}="${n}"`:""}function d(e,t,...n){return!lt(e)||(e=JSON.parse(e),!at(e,t,...n))?!1:e}function lt(e){return!f.isString(e)||u.isEmpty(e)?!1:(e=e.trim(),e.length!==0)}function at(e,t,...n){if(!Array.isArray(e.options)||e.options.length===0)return!1;let r=n.find(i=>!f.has(e,i));if(r)throw`${t} definition requires ${r} attribute`;return!0}function m(e,{label:t,value:n}){if(t===void 0&&n===void 0)throw`${e} definition requires at least a label or value`}var ct=`
<label class="radio">
  <input type="radio" name="{name}" {id} value="{value}"{checked}>
  <span class="radio-label">{label}</span>
</label>
`;function j(e){return e?ft(e.innerHTML):""}function ft(e){return e=d(e,"Radio","name"),e?`
<div class="radio-buttons">
${dt(e)}
</div>
`:""}function dt(e){let t=e.name,n=e.flow==="vertical"?`<br>
`:`
`;return e.options.map(r=>mt(t,r)).join(n)}function mt(e,t){m("Radio",t);let n={name:e,checked:t.checked?" checked":"",id:t.id?`id="${t.id}"`:"",value:t.value||t.label,label:t.label||t.value};return u.replaceTemplate(ct.trim(),n,"{")}var pt=`
<label class="checkbox">
  <input type="checkbox" {name} {id} value="{value}"{checked}>
  <span class="checkbox-label">{label}</span>
</label>
`;function ee(e){return e?ht(e.innerHTML):""}function ht(e){return e=d(e,"Checkbox"),e?`
<div class="checkbox-buttons">
${gt(e)}
</div>
`:""}function gt(e){let t=e.flow==="vertical"?`<br>
`:`
`;return e.options.map(n=>bt(n)).join(t)}function bt(e){m("Checkbox",e);let t={name:e.name?`name="${e.name}"`:"",checked:e.checked?" checked":"",id:e.id?`id="${e.id}"`:"",value:e.value||e.label,label:e.label||e.value};return u.replaceTemplate(pt.trim(),t,"{")}var A={select:'<select{name}{id}{size}{multiple} class="{widgetType}{multiple}">{options}</select>',group:'<optgroup label="{label}">{options}</optgroup>',option:"<option{disabled}{selected}{value}>{label}</option>"};function te(e){return e?vt(e.innerHTML):""}function vt(e){if(e=d(e,"Listbox"),!e)return"";let t={name:e.name?` name="${e.name}"`:"",id:e.id?` id="${e.id}"`:"",size:e.size?` size="${e.size}"`:"",widgetType:yt(e),multiple:e.multiple?" multiple":"",options:ne(e.options)};return u.replaceTemplate(A.select,t,"{")}function yt({multiple:e,size:t}){return e||t>1?"listbox":"combobox"}function xt(e){let t={label:e.label,options:ne(e.options)};return u.replaceTemplate(A.group,t,"{")}function ne(e){return Array.isArray(e)?e.map(n=>n.options?xt(n):wt(n)).join(`
`):""}function wt(e){m("Listbox",e);let t=e.value||e.label,n={disabled:e.disabled?" disabled":"",selected:e.selected?" selected":"",label:e.label||e.value,value:` value="${t}"`};return u.replaceTemplate(A.option,n,"{")}function re(e,t){e.preventDefault();let n=a.first("select",t),r=n.scrollTop;Et(e.target),t.actions._runValueChangeListeners(e.target.value),setTimeout(()=>{n.scrollTop=r})}function Et(e){e.selected=!e.selected,e.parentElement.focus()}function ie(e,t){let n=e.tooltip;n?(t.tooltip="tooltip",t.tooltipIcon='<span class="circle">?</span>',t.tooltipText=n):(t.tooltip="",t.tooltipIcon="",t.tooltipText="")}function oe(e=""){X({nameWithDash:"input-field",html:t=>{let n=Tt(t);return t.validationRules=h.createFromAttributes(n),t.valueChangeListeners=[],St(t,n,e)},propertyList:[{name:"value",sel:"input, select",onChange:(t,n,r)=>{se(t,r),t.actions._runValueChangeListeners(r)}}],eventHandlerList:[{sel:"input, select",eventName:"input",listener:(t,n)=>{let r=t.target.value;se(n,r),n.actions._runValueChangeListeners(r)}},{sel:"label .tooltip",eventName:"click",listener:(t,n)=>{a.first("label .tooltip-text",n).classList.toggle("show")}},{sel:"select.listbox.multiple option",eventName:"mousedown",listener:(t,n)=>re(t,n)}],actionList:[{name:"addRule",action:function(t,n,r){let i=new l(t,n,r);!this.validationRules.add(i)||Ct(this,i)}},{name:"addValueChangeListener",action:function(t){this.valueChangeListeners.push(t)}},{name:"_runValueChangeListeners",action:function(t){let n=this;n.valueChangeListeners.forEach(r=>{r(n,t)})}}]})}function Tt(e){let t=a.getAttributes(e),n={};f.forEachEntry(t,(i,s)=>{n[i.toLowerCase()]=s});let r=u.trim(n.showrules).toLowerCase();return n.showrules=r===""||r==="true",n}function St(e,t,n){let i={input:$t(e,t),cssFile:At(n),label:t.label,sublabel:Ot(t),required:Ht(t,"required"),showrules:t.showrules?"":"none",rules:e.validationRules.toHtml()};return ie(t,i),u.replaceTemplate(Y,i)}function $t(e,t){let n=Nt(t);return n==="radio"?j(e):n==="checkbox"?ee(e):n==="listbox"?te(e):Z(t)}function Nt(e){let t=u.trim(e.type).toLowerCase();return t?t==="integer"?"number":t:"text"}function At(e){return u.isEmpty(e)?"":`<link rel="stylesheet" type="text/css" href="${e}">`}function Ot(e){let t=e.sublabel;return t?`<br>${t}`:""}function Ht(e,t){let n=e[t];return n?n==="required"?n:` ${t}="${n}"`:""}function se(e,t){let n=a.first("footer ul.rules",e),r=!0;e.validationRules.validate(t,(s,o)=>{let c=a.first(`li.validation-${o}`,n);a.classPresentIf(c,"bad",!s),r=r&&s});let i=a.first("input",e);a.classPresentIf(i,"bad",!r)}function Ct(e,t){let n=a.first("footer ul.rules",e);a.add(n,t.toHtml())}return Lt;})();
//# sourceMappingURL=input-field-script-min.js.map
