"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[914],{295:()=>{},307:()=>{},1751:(e,a,n)=>{n.d(a,{Ep:()=>r,kN:()=>t,v:()=>s});const t=async(e,a,n)=>{console.log("this is fetchProvinces");const t=await e();!0===t.success&&(t.data.unshift({id:String(Math.random()),value:"",label:a}),n(t.data))},s=async(e,a,n,t)=>{const s=await e(a);!0===s.success&&(s.data.unshift({id:String(Math.random()),value:"",label:n}),t(s.data))},r=async(e,a,n,t,r,l,i)=>{const o=e.target.value;if(o!==n){t(o);try{s(r,l,a,i)}catch(c){console.error(c)}}}},2057:(e,a,n)=>{n.d(a,{A:()=>s});var t=n(5304);const s={getProvinces:()=>t.A.get("/users/provinces"),postDistricts:e=>t.A.post("/users/districts",e),postWards:e=>t.A.post("/users/wards",e)}},3441:(e,a,n)=>{n.r(a),n.d(a,{default:()=>u});var t=n(5043),s=n(3003),r=n(3709),l=n(2057),i=n(8802),o=n(7198),c=n(9652),d=n(1751),m=(n(646),n(579));const u=()=>{var e;const a=(0,r.Zp)(),n=(0,r.zy)(),u=null===(e=n.state)||void 0===e?void 0:e.profileId;console.log("profileForm",n);const h=(0,s.d4)((e=>e.user.idUser)),p=(0,s.d4)((e=>e.user.role)),[g,x]=(0,t.useState)(""),[v,j]=(0,t.useState)(""),[N,f]=(0,t.useState)(""),[b,y]=(0,t.useState)(""),[k,w]=(0,t.useState)(""),[A,S]=(0,t.useState)(""),[C,T]=(0,t.useState)(""),[D,q]=(0,t.useState)(""),[Q,P]=(0,t.useState)(""),[z,F]=(0,t.useState)(""),[M,I]=(0,t.useState)([{id:String(Math.random()),value:"",label:"T\u1ec9nh, Th\xe0nh ph\u1ed1"}]),[H,$]=(0,t.useState)(""),[E,R]=(0,t.useState)([{id:String(Math.random()),value:"",label:"Qu\u1eadn, Huy\u1ec7n"}]),[B,L]=(0,t.useState)(""),[U,W]=(0,t.useState)([{id:String(Math.random()),value:"",label:"X\xe3, Ph\u01b0\u1eddng"}]),[X,_]=(0,t.useState)(""),[G,K]=(0,t.useState)("S\u1ed1 nh\xe0 v\xe0 t\xean \u0111\u01b0\u1eddng"),[O,V]=(0,t.useState)(""),[Z,J]=(0,t.useState)(""),[Y,ee]=(0,t.useState)(""),[ae,ne]=(0,t.useState)("");(0,t.useEffect)((()=>{async function e(e){const n=await i.A.getProfile(e);if(n&&n.data){const e=n.data;if(console.log(e),F(""),j(e.username||""),x(e.email||""),f(e.fullname||""),y(e.gender||""),w(e.phone||""),T(e.summary||""),S(e.organizationName||""),K(e.addressDetail||""),V(e.website||""),q(e.role||""),P(e.status||""),J(e.linkQR||""),ee(e.avatar||""),ne(e.background||""),await(0,d.kN)(l.A.getProvinces,"T\u1ec9nh, Th\xe0nh ph\u1ed1",I),!e.province)return;console.log("info.province"),$(e.province),await(0,d.v)(l.A.postDistricts,{value:e.province},"Qu\u1eadn, Huy\u1ec7n",R),e.district&&(console.log("info.district"),L(e.district),await(0,d.v)(l.A.postWards,{provinceName:e.province,districtName:e.district},"Ph\u01b0\u1eddng, X\xe3",W),e.ward&&_(e.ward))}else!n||500!==n.status&&404!==n.status||a("/error-page",{state:{status:n.status,errors:n.errors}})}h&&u&&h.toString()!==u.toString()?(console.log("profileId",u),e(u)):(console.log(h,u),e(h))}),[]),console.log(p,D);return(0,m.jsx)(c.A,{formName:"layout-form",formTitle:"TH\xd4NG TIN C\xc1 NH\xc2N",children:(0,m.jsx)("form",{method:"POST",onSubmit:async e=>{e.preventDefault(),F(""),console.log("l\u1ea5y \u0111ata");const n=new FormData(e.target),t=await i.A.postUpdatePersonalInfo(h,n);t&&!0===t.success?window.alert("B\u1ea1n \u0111\xe3 c\u1eadp nh\u1eadt th\xe0nh c\xf4ng!"):t&&!1===t.success?F(t.message):!t||500!==t.status&&404!==t.status||a("/error-page",{state:{status:t.status,errors:t.errors}})},encType:"multipart/form-data",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-sm-6 pt-3 column-1",children:["partner"!==D&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.A,{label:"T\xean ng\u01b0\u1eddi d\xf9ng",type:"text",id:"username",name:"username",className:"form-control",value:v,onChange:e=>j(e.target.value),required:!0}),z&&(0,m.jsx)("p",{className:"text-danger",children:(0,m.jsx)("small",{children:z})})]}),"partner"===D&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.A,{label:"T\xean t\u1ed5 ch\u1ee9c",type:"text",id:"organizationName",name:"organizationName",className:"form-control",value:A,onChange:e=>S(e.target.value),required:!0}),z&&(0,m.jsx)("p",{className:"text-danger",children:(0,m.jsx)("small",{children:z})})]}),(0,m.jsx)(o.A,{label:"Email",type:"email",id:"email",name:"email",className:"form-control",value:g,onChange:e=>x(e.target.value),disabled:"client"===p||"partner"===p,required:!0}),("client"===D||"admin 2"===D||"admin 1"===D)&&(0,m.jsx)(o.A,{label:"H\u1ecd v\xe0 t\xean",type:"text",id:"fullname",name:"fullname",className:"form-control",value:N,onChange:e=>f(e.target.value),required:!0}),(0,m.jsx)(o.A,{label:"\u0110i\u1ec7n tho\u1ea1i",type:"text",id:"phone",name:"phone",className:"form-control",value:k,onChange:e=>w(e.target.value),required:!0})," ","partner"===D&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.A,{type:"text",label:"\u0110\u01b0\u1eddng d\u1eabn website c\u1ee7a t\u1ed5 ch\u1ee9c:",id:"website",name:"website",value:O,onChange:e=>V(e.target.value),placeholder:"\u0110\u01b0\u1eddng d\u1eabn \u0111\u1ebfn trang web c\u1ee7a t\u1ed5 ch\u1ee9c",required:!0}),(0,m.jsx)(o.A,{value:C,label:"T\xf3m t\u1eaft v\u1ec1 t\u1ed5 ch\u1ee9c",type:"textarea",id:"summary",name:"summary",className:"form-control",rows:"6",onChange:e=>T(e.target.value),required:!0})]})]}),(0,m.jsxs)("div",{className:"col-sm-6 pt-3 column-2",children:[(0,m.jsxs)("h6",{className:"pb-2",children:["\u0110\u1ecba ch\u1ec9: ",(0,m.jsx)("sup",{className:"text-danger",children:"*"})]}),(0,m.jsx)(o.A,{value:H,type:"select",id:"province",name:"province",className:"form-control",sharedName:"provinces",onChange:e=>{(0,d.Ep)(e,"Qu\u1eadn, Huy\u1ec7n",H,$,l.A.postDistricts,{value:e.target.value},R),console.log("districts",E)},options:M}),(0,m.jsx)(o.A,{value:B,type:"select",id:"district",name:"district",className:"form-control",sharedName:"provinces",onChange:e=>{const a={provinceName:H,districtName:e.target.value};(0,d.Ep)(e,"Ph\u01b0\u1eddng, X\xe3",B,L,l.A.postWards,a,W)},options:E}),(0,m.jsx)(o.A,{value:X,type:"select",id:"ward",name:"ward",className:"form-control",sharedName:"provinces",onChange:e=>_(e.target.value),options:U}),(0,m.jsx)(o.A,{type:"text",id:"addressDetail",name:"addressDetail",className:"form-control",sharedName:"provinces",value:G,onChange:e=>K(e.target.value),placeholder:"S\u1ed1 nh\xe0 v\xe0 t\xean \u0111\u01b0\u1eddng",required:!0}),("admin"===D||"client"===D)&&(0,m.jsx)(o.A,{value:b,label:"Gi\u1edbi t\xednh",type:"select",id:"gender",name:"gender",className:"form-control",sharedName:"category gender",onChange:e=>y(e.target.value),options:[{value:"",label:"Ch\u1ecdn"},{value:"Female",label:"N\u1eef"},{value:"Male",label:"Nam"},{value:"Other",label:"Kh\xe1c"}]}),("admin 1"===p||"admin 2"===p)&&"partner"===D&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(o.A,{label:"M\xe3 QR ng\xe2n h\xe0ng:",type:"file",id:"linkQR",name:"linkQR",sharedName:"line linkQR",required:!Z})}),(0,m.jsx)(o.A,{label:"H\xecnh \u0111\u1ea1i di\u1ec7n:",type:"file",id:"avatar",name:"avatar",sharedName:"line",required:!Y}),(0,m.jsx)(o.A,{label:"H\xecnh n\u1ec1n:",type:"file",id:"background",name:"background",sharedName:"line",required:!ae}),("admin 1"===p||"admin 2"===p)&&(0,m.jsx)(o.A,{value:Q,label:"Tr\u1ea1ng th\xe1i",type:"select",id:"status",name:"status",className:"form-control",sharedName:"category status",onChange:e=>P(e.target.value),options:[{value:"ho\u1ea1t \u0111\u1ed9ng",label:"Ho\u1ea1t \u0111\u1ed9ng"},{value:"d\u1eebng ho\u1ea1t \u0111\u1ed9ng",label:"D\u1eebng ho\u1ea1t \u0111\u1ed9ng"}]}),(0,m.jsx)("input",{type:"hidden",name:"userId",value:u&&u.toString()!==h.toString()?u:h})]}),(0,m.jsx)("p",{children:(0,m.jsxs)("small",{children:[(0,m.jsx)("span",{children:"L\u01b0u \xfd:"})," M\u1ee5c (",(0,m.jsx)("span",{className:"text-danger",children:"*"}),"): kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng."]})}),(0,m.jsx)("div",{className:"container-button",children:(0,m.jsx)("button",{type:"submit",className:"btn btn-success text-center",children:"C\u1eadp nh\u1eadt"})})]})})})}},3854:(e,a,n)=>{n.d(a,{A:()=>m});var t=n(5043),s=n(7198),r=n(9652),l=n(991),i=n(8155),o=n(3003),c=n(3709),d=(n(295),n(579));const m=function(){const e=(0,c.Zp)(),a=(0,o.d4)((e=>e.user.idUser)),{role:n}=(0,o.d4)((e=>e.user)),{postId:m}=(0,c.g)(),[u,h]=(0,t.useState)(""),[p,g]=(0,t.useState)("");return(0,t.useEffect)((()=>{m&&async function(a){const n=await l.A.getPostDetail(a);if(n&&!0===n.success){const e=n.post;h(e.title||""),g(e.content||"")}else!n||500!==n.status&&404!==n.status||e("/error-page",{state:{status:n.status,errors:n.errors}})}(m)}),[]),(0,d.jsxs)(r.A,{style:{marginTop:"100px"},formName:"py-3 px-4 post-form",children:[(0,d.jsx)("div",{className:"post-form-header",children:(0,d.jsx)("h2",{className:"text-success",children:"\u0110\u0103ng B\xe0i"})}),(0,d.jsxs)("form",{onSubmit:async t=>{t.preventDefault();const s=new FormData(t.target);let r;r=m?await l.A.updatePost(m,s):await l.A.createPost(s),r&&!0===r.success?(window.alert(m?"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng":"\u0110\u0103ng b\xe0i th\xe0nh c\xf4ng"),e("partner"===n?"/partner/personal-page":"/personal-page",{state:{personalPageId:a}})):r&&403===r.status?window.alert(r.errors):!r||500!==r.status&&404!==r.status||e("/error-page",{state:{status:r.status,errors:r.errors}})},className:"form",encType:"multipart/form-data",children:[(0,d.jsx)(s.A,{label:"Ti\xeau \u0111\u1ec1",type:"text",id:"title",name:"title",required:!0,value:u,onChange:e=>h(e.target.value),placeholder:"Nh\u1eadp ti\xeau \u0111\u1ec1",className:"form-control"}),(0,d.jsx)(s.A,{label:"N\u1ed9i dung",type:"textarea",id:"content",name:"content",required:!0,rows:5,value:p,onChange:e=>g(e.target.value),placeholder:"Nh\u1eadp n\u1ed9i dung",className:"form-control"}),(0,d.jsx)(s.A,{label:"T\u1ea3i \u1ea3nh",type:"file",id:"images",name:"images",multiple:!0,sharedName:"file-input"}),(0,d.jsx)("input",{type:"hidden",name:"userId",value:a}),(0,d.jsx)("div",{style:{textAlign:"center"},children:(0,d.jsx)(i.A,{type:"submit",className:"btn btn-success",children:m?"C\u1eadp nh\u1eadt":"\u0110\u0103ng b\xe0i"})})]})]})}},4377:(e,a,n)=>{n.d(a,{A:()=>d});var t=n(5043),s=n(3709),r=n(3910),l=n(7929),i=n(579);const o=t.memo((e=>{const a=(0,s.zy)(),n="/admin/create-account/admin"===a.pathname||"/admin/create-account/partner"===a.pathname;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("button",{className:`btn dropdown-toggle ${e.className}`,type:"button",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",style:{color:""+(n?"rgb(12, 69, 12)":"White")},children:[(0,i.jsx)(r.g,{icon:l.QLR,className:"me-2"}),(0,i.jsx)("span",{children:" T\u1ea1o t\xe0i kho\u1ea3n"})]}),(0,i.jsxs)("div",{className:"dropdown-menu ms-2",id:"dropdown","aria-labelledby":"dropdownMenuButton",style:{backgroundColor:"transparent",zIndex:"2000"},children:["admin 1"===e.role&&(0,i.jsx)(s.N_,{className:"dropdown-item",to:"/admin/create-account/admin",onClick:()=>e.handleTitle("T\u1ea1o t\xe0i kho\u1ea3n | Donaiton"),children:(0,i.jsx)("span",{children:"Admin"})}),(0,i.jsx)(s.N_,{className:"dropdown-item",to:"/admin/create-account/partner",onClick:()=>e.handleTitle("T\u1ea1o t\xe0i kho\u1ea3n | Donaiton"),children:(0,i.jsx)("span",{children:"\u0110\u1ed1i t\xe1c"})})]})]})}));var c=n(3003);const d=function(){const e=(0,s.zy)(),a="/admin/create-account/admin"===e.pathname||"/admin/create-account/partner"===e.pathname;console.log(e,a);const{idUser:n,role:d}=(0,c.d4)((e=>e.user)),m="client"===d?"":"admin 1"===d||"admin 2"===d?"/admin":"/partner",[u,h]=(0,t.useState)(!1),[p,g]=(0,t.useState)("Donation");(0,t.useEffect)((()=>{document.title=p}),[p]);const x=e=>{g(e)};return(0,i.jsxs)("div",{className:"sidebar rounded text-start position-fixed "+(u?"expanded bg-success text-white":"text-white"),children:[(0,i.jsxs)("ul",{className:"nav flex-column",children:[("admin 1"===d||"admin 2"===d)&&(0,i.jsx)("li",{className:"nav-item ",onClick:()=>x("Dashboard | Donation"),children:(0,i.jsxs)(s.k2,{className:"nav-link ",to:"/admin/dashboard",children:[(0,i.jsx)(r.g,{icon:l.muz,className:"me-2"}),(0,i.jsx)("span",{children:"Dashboard"})]})}),("partner"===d||"client"===d)&&(0,i.jsx)("li",{className:"nav-item ",onClick:()=>x("Trang c\xe1 nh\xe2n | Donation"),children:(0,i.jsxs)(s.k2,{className:"nav-link ",to:`${m}/personal-page`,state:{personalPageId:n},children:[(0,i.jsx)(r.g,{icon:l.muz,className:"me-2"}),(0,i.jsx)("span",{children:"Trang c\xe1 nh\xe2n"})]})}),(0,i.jsx)("li",{className:"nav-item",onClick:()=>x("Th\xf4ng tin c\xe1 nh\xe2n | Donation"),children:(0,i.jsxs)(s.k2,{className:"nav-link",to:`${m}/profile`,children:[(0,i.jsx)(r.g,{icon:l.X46,className:"me-2"}),(0,i.jsx)("span",{children:"Th\xf4ng tin c\xe1 nh\xe2n"})]})}),("client"===d||"partner"===d)&&(0,i.jsx)("li",{className:"nav-item",onClick:()=>x("\u0110\u0103ng b\xe0i | Donation"),children:(0,i.jsxs)(s.k2,{className:"nav-link ",to:`${m}/create-post`,children:[(0,i.jsx)(r.g,{icon:l.LFz,className:"me-2"}),(0,i.jsx)("span",{children:"\u0110\u0103ng b\xe0i"})]})}),("admin 1"===d||"admin 2"===d)&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("li",{className:"nav-item ",onClick:()=>x("Qu\u1ea3n l\xfd ng\u01b0\u1eddi d\xf9ng | Donation"),children:(0,i.jsxs)(s.k2,{className:"nav-link ",to:`${m}/user-management/client`,children:[(0,i.jsx)(r.g,{icon:l.muz,className:"me-2"}),(0,i.jsx)("span",{children:"Qu\u1ea3n l\xfd ng\u01b0\u1eddi d\xf9ng"})]})}),(0,i.jsx)("li",{className:"nav-item ",onClick:()=>x("Qu\u1ea3n l\xfd c\u1ea5p cao | Donation"),children:(0,i.jsxs)(s.k2,{className:"nav-link",to:`${m}/user-management/senior`,children:[(0,i.jsx)(r.g,{icon:l.vlp,className:"me-2"}),(0,i.jsx)("span",{children:"Qu\u1ea3n l\xfd c\u1ea5p cao"})]})})]}),"partner"===d&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("li",{className:"nav-item",onClick:()=>x("Vi\u1ebft d\u1ef1 \xe1n | Donation"),children:(0,i.jsxs)(s.k2,{className:"nav-link ",to:`${m}/project-form`,style:{cursor:"pointer"},children:[(0,i.jsx)(r.g,{icon:l.Lhe,className:"me-2"}),(0,i.jsx)("span",{children:"Vi\u1ebft d\u1ef1 \xe1n"})]})})}),("partner"===d||"admin 1"===d||"admin 2"===d)&&(0,i.jsx)("li",{className:"nav-item",onClick:()=>x("Qu\u1ea3n l\xfd quy\xean g\xf3p | Donation"),children:(0,i.jsxs)(s.k2,{className:"nav-link ",to:`${m}/donation-management`,children:[(0,i.jsx)(r.g,{icon:l.qcK,className:"me-2"}),(0,i.jsx)("span",{children:"Qu\u1ea3n l\xfd quy\xean g\xf3p"})]})}),("admin 1"===d||"admin 2"===d)&&(0,i.jsx)("li",{className:"nav-item  "+(a?"active text-success":""),children:(0,i.jsx)(o,{role:d,className:"nav-link",handleTitle:x})})]}),(0,i.jsx)("button",{className:"sidebar-toggle-button",onClick:()=>h(!u),children:u?"<":">"})]})}},9652:(e,a,n)=>{n.d(a,{A:()=>s});n(307);var t=n(579);const s=e=>{let{children:a,formName:n,formTitle:s,errorMessage:r}=e;return(0,t.jsxs)("div",{className:`container-md  card ${n}`,children:[(0,t.jsx)("h5",{children:s}),r&&(0,t.jsxs)("p",{style:{color:"red",fontSize:"12px"},children:["*",r]}),a]})}}}]);
//# sourceMappingURL=914.710f1bed.chunk.js.map