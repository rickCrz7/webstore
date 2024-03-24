import{_ as k}from"./H-2029efec.js";import{_ as M}from"./HXM4~3-c406992c.js";import{_ as w}from"./HBOSE~3-c51640e7.js";import{d as $,u as S,r as p,e as q,f as n,c as d,a as t,g as U,t as a,h as _,o as c,b as j}from"./index-51419c3f.js";import{u as X}from"./store-dc9ff6ce.js";const Q={key:0,class:"container mx-auto max-w-prose p-2 min-h-screen flex items-center justify-center"},Y=t("span",{class:"font-bold text-3xl"},"Cart is empty",-1),T=t("i",{class:"i-mdi:chevron-right text-4xl mb-1"},null,-1),E={key:1,class:"container mx-auto relative px-6 pt-8 sm:px-16 sm:pt-10 lg:px-32 lg:pt-12"},V=t("h1",{class:"text-4xl font-bold mb-4 px-3"},"Checkout",-1),B={class:"items-container"},I={class:"item-box"},N={key:0,class:"grid grid-cols-1 gap-8 mb-5"},H={class:"flex"},P=t("div",{class:"w-1/3"},[t("img",{src:k,alt:"vintage bag"})],-1),D={class:"flex flex-col justify-between w-2/3 pl-6"},F=t("i",{class:"i-mdi:close-circle"},null,-1),K=[F],W=t("div",null,[t("h4",null,"Sennheiser Momentum 4 Wireless"),t("p",{class:"whitespace-no-wrap"},[t("span",{class:"text-lg text-orange-400 font-semibold"},"$299.99")])],-1),A={class:"item-count"},G=t("i",{class:"i-mdi:minus"},null,-1),J=[G],R={class:"mx-6 font-bold text-xl"},z=t("i",{class:"i-mdi:plus"},null,-1),L=[z],O={key:1,class:"grid grid-cols-1 gap-8 mb-5"},Z={class:"flex"},tt=t("div",{class:"w-1/3"},[t("img",{src:M,alt:"vintage bag"})],-1),et={class:"flex flex-col justify-between w-2/3 pl-6"},st=t("i",{class:"i-mdi:close-circle"},null,-1),ot=[st],it=t("div",null,[t("h4",null,"Sony WH-1000XM4"),t("p",{class:"whitespace-no-wrap"},[t("span",{class:"text-lg text-orange-400 font-semibold"},"$349.99")])],-1),lt={class:"item-count"},nt=t("i",{class:"i-mdi:minus"},null,-1),dt=[nt],at={class:"mx-6 font-bold text-xl"},ct=t("i",{class:"i-mdi:plus"},null,-1),rt=[ct],ut={key:2,class:"grid grid-cols-1 gap-8"},mt={class:"flex"},pt=t("div",{class:"w-1/3"},[t("img",{src:w,alt:"vintage bag"})],-1),_t={class:"flex flex-col justify-between w-2/3 pl-6"},vt=t("i",{class:"i-mdi:close-circle"},null,-1),ht=[vt],xt=t("div",null,[t("h4",null,"Bose QuietComfort Ultra"),t("p",{class:"whitespace-no-wrap"},[t("span",{class:"text-lg text-orange-400 font-semibold"},"$429.99")])],-1),ft={class:"item-count"},bt=t("i",{class:"i-mdi:minus"},null,-1),gt=[bt],yt={class:"mx-6 font-bold text-xl"},Ct=t("i",{class:"i-mdi:plus"},null,-1),kt=[Ct],Mt={class:"item-total"},wt=t("span",{class:"text-2xl"},"Subtotal",-1),$t={class:"text-lg"},St=t("div",null,[t("span",{class:"text-2xl"},"Shipping"),t("span",{class:"text-lg"},"$9.99")],-1),qt=t("span",{class:"text-2xl"},"Total",-1),Ut={class:"text-lg"},jt={class:"form-container"},Xt=j('<h3 class="text-lg font-bold mb-3">Contact information</h3><div class="relative mb-4"><label for="email"> Email </label><input id="email" type="email" placeholder="Enter your email..." required></div><div class="relative mb-10"><label for="email"> Phone </label><input id="phone" type="number" placeholder="Enter your phone..." required></div><h3 class="text-lg font-bold mt-2 mb-3"> Shipping address </h3><div class="relative mb-4"><label for="name"> Full name </label><input id="name" type="text" placeholder="John Doe" required></div><div class="relative mb-4"><label for="address"> Address </label><input id="address" type="text" placeholder="Your address..." required></div><div class="relative mb-4"><label for="city"> City </label><input id="city" type="text" placeholder="Your city..." required></div><div class="flex mb-10"><div class="relative flex-1"><label for="country">Country</label><select id="country" required><option selected disabled> Choose country... </option><option>United States</option><option>Canada</option><option>Mexico</option><option>United Kingdom</option></select></div><div class="relative ml-6 flex-1"><label for="postal-code">Postal Code</label><input id="postal-code" type="text" placeholder="Your postal code..." required></div></div><h3 class="text-lg font-bold mt-2 mb-3"> Payment information </h3><div><input id="card" type="text" placeholder="Card number..." required><div class="flex mb-4 gap-2 mt-4"><div><input id="expiry" type="text" placeholder="MM/YY" required></div><div><input id="cvc" type="text" placeholder="CVC" required></div></div></div><div class="mt-8"><button id="submitted" type="submit">Continue</button></div>',11),Qt=[Xt],Nt=$({__name:"Checkout",setup(Yt){const o=X(),v=S(),x=p(299.99),f=p(349.99),b=p(429.99),h=i=>{let s=0;return i.forEach(e=>{e.id==="M4"?s+=x.value*e.count:e.id==="XM4"?s+=f.value*e.count:s+=b.value*e.count}),s},r=i=>{var s;return(s=o.items.find(e=>e.id===i))==null?void 0:s.count},l=(i,s)=>{if(s==="add"){const e=o.items.find(m=>m.id===i);e&&e.count++}else{const e=o.items.find(m=>m.id===i);e&&e.count>1&&e.count--}},g=()=>{v.push({name:"ThankYou"}),C()},y=()=>{v.push({name:"Home"})},u=i=>{o.removeItem(i)},C=()=>{o.clearCart()};return q(()=>{console.log(o.items)}),(i,s)=>n(o).items.length===0?(c(),d("div",Q,[t("div",{class:"bg-blueGray py-62 px-26 rounded-3xl"},[Y,t("div",{class:"flex justify-center mt-12"},[t("button",{class:"learn-more",onClick:y},[U(" Keep Shopping "),T])])])])):(c(),d("div",E,[V,t("div",B,[t("div",I,[n(o).items.some(e=>e.id==="M4")?(c(),d("div",N,[t("div",H,[P,t("div",D,[t("span",{class:"flex justify-end text-2xl text-red cursor-pointer hover:text-red-500",onClick:s[0]||(s[0]=e=>u("M4"))},K),W,t("div",A,[t("button",{onClick:s[1]||(s[1]=e=>l("M4","minus"))},J),t("span",R,a(r("M4")),1),t("button",{onClick:s[2]||(s[2]=e=>l("M4","add"))},L)])])])])):_("",!0),n(o).items.some(e=>e.id==="XM4")?(c(),d("div",O,[t("div",Z,[tt,t("div",et,[t("span",{class:"flex justify-end text-2xl text-red cursor-pointer hover:text-red-500",onClick:s[3]||(s[3]=e=>u("XM4"))},ot),it,t("div",lt,[t("button",{onClick:s[4]||(s[4]=e=>l("XM4","minus"))},dt),t("span",at,a(r("XM4")),1),t("button",{onClick:s[5]||(s[5]=e=>l("XM4","add"))},rt)])])])])):_("",!0),n(o).items.some(e=>e.id==="QCU")?(c(),d("div",ut,[t("div",mt,[pt,t("div",_t,[t("span",{class:"flex justify-end text-2xl text-red cursor-pointer hover:text-red-500",onClick:s[6]||(s[6]=e=>u("QCU"))},ht),xt,t("div",ft,[t("button",{onClick:s[7]||(s[7]=e=>l("QCU","minus"))},gt),t("span",yt,a(r("QCU")),1),t("button",{onClick:s[8]||(s[8]=e=>l("QCU","add"))},kt)])])])])):_("",!0),t("div",Mt,[t("div",null,[wt,t("span",$t,a("$"+h(n(o).items)),1)]),St,t("div",null,[qt,t("span",Ut,a("$"+(h(n(o).items)+9.99)),1)])])]),t("div",jt,[t("form",{name:"checkoutForm",onsubmit:"return validate()",onSubmit:g},Qt,32)])])]))}});export{Nt as default};
