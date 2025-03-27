"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[177],{295:()=>{},991:(t,e,s)=>{s.d(e,{A:()=>n});var l=s(5304);const n={createPost:t=>l.A.post("/posts/create-post",t),getPostDetail:t=>{const e=`/posts/${t}`;return l.A.get(e)},toggleLike:t=>{const e=`/posts/${t}/toggle-like`;return l.A.post(e)},getAllPosts:()=>l.A.get("/posts"),updatePost:(t,e)=>{const s=`/posts/${t}/update`;return l.A.post(s,e)},deletePost:t=>{console.log(t);const e=`/posts/${t}/delete`;return l.A.delete(e)}}},4913:(t,e,s)=>{s.r(e),s.d(e,{default:()=>k});var l=s(5043),n=s(3519),o=s(1072),i=s(8602),a=s(8139),r=s.n(a),c=s(5173),d=s.n(c),u=s(7852),h=s(579);d().string,d().bool,d().bool,d().bool,d().bool;const m=l.forwardRef(((t,e)=>{let{bsPrefix:s,className:l,fluid:n=!1,rounded:o=!1,roundedCircle:i=!1,thumbnail:a=!1,...c}=t;return s=(0,u.oU)(s,"img"),(0,h.jsx)("img",{ref:e,...c,className:r()(l,n&&`${s}-fluid`,o&&"rounded",i&&"rounded-circle",a&&`${s}-thumbnail`)})}));m.displayName="Image";const g=m;var p=s(3036),x=s(9652),v=s(3709),f=s(3003),j=s(991),A=s(1148),b=s(3910),N=s(7929),y=s(4234);s(295);const k=function(){var t,e,s,a,r,c;const d=(0,v.Zp)(),{contentId:u}=(0,v.g)(),m=(0,f.d4)((t=>t.user.idUser)),[k,I]=(0,l.useState)(!1),[w,S]=(0,l.useState)(null),[$,C]=(0,l.useState)([]),[L,P]=(0,l.useState)(0),[D,z]=(0,l.useState)([]);(0,l.useEffect)((()=>{u&&(console.log(u),async function(t){const e=await j.A.getPostDetail(t);e&&!0===e.success?(console.log("post",e.post),S(e.post),C(e.recentPosts),z(e.post.favorites)):!e||500!==e.status&&404!==e.status||d("/error-page",{state:{status:e.status,errors:e.errors}})}(u))}),[u]);const[T,_]=(0,l.useState)("Donation");return(0,l.useEffect)((()=>{document.title=T}),[T]),(0,h.jsx)(x.A,{formName:"post-page-detail",children:(0,h.jsxs)(n.A,{style:{marginTop:"50px"},children:[(0,h.jsxs)(o.A,{children:[(0,h.jsxs)(i.A,{md:8,children:[(0,h.jsxs)("div",{className:" mb-0",style:{textAlign:"left"},children:[(0,h.jsx)("div",{style:{display:"inline-block",width:"30px",height:"30px",marginRight:"10px"},children:(0,h.jsx)(A.A,{avatar:w&&w.authorId.avatar,username:"partner"===(null===w||void 0===w||null===(t=w.authorId)||void 0===t?void 0:t.role)?null===w||void 0===w||null===(e=w.authorId)||void 0===e?void 0:e.organizationName:null===w||void 0===w||null===(s=w.authorId)||void 0===s?void 0:s.username,href:"#"})}),(0,h.jsxs)("div",{style:{display:"inline-block",textAlign:"left",fontSize:"20px",fontWeight:"bold"},children:[" ","partner"===(null===w||void 0===w||null===(a=w.authorId)||void 0===a?void 0:a.role)?null===w||void 0===w||null===(r=w.authorId)||void 0===r?void 0:r.organizationName:null===w||void 0===w||null===(c=w.authorId)||void 0===c?void 0:c.username]})]}),(0,h.jsx)("div",{className:"post-date small",style:{textAlign:"left",marginLeft:"40px",color:"gray"},children:w&&new Date(w.createdAt).toLocaleString()}),(0,h.jsx)("h5",{className:"post-title",style:{textAlign:"center",marginLeft:"60px",marginTop:"20px"},children:w&&w.title}),(0,h.jsx)("div",{className:"post-content",style:{textAlign:"justify",marginLeft:"50px",marginRight:"50px"},children:w&&w.content.split("\n").map(((t,e)=>(0,h.jsxs)("p",{children:[" ",t]},e)))}),(0,h.jsx)("div",{className:"post-media",children:w&&w.images.map(((t,e)=>(0,h.jsx)(g,{src:`http://localhost:8080/${t}`,onClick:()=>(t=>{P(t),I(!0)})(e),fluid:!0,style:{width:"45%",margin:"5px"}},e)))}),m&&(0,h.jsx)("div",{className:"like-button mt-5",style:{textAlign:"left",marginLeft:"50px"},children:(0,h.jsxs)("button",{type:"button",className:"btn btn-default btn-xs me-1",onClick:async function(){console.log("click like");const t=[...D],e=t.indexOf(m);-1===e?t.push(m):t.splice(e,1),z(t);const s=await j.A.toggleLike(u);!s||500!==s.status&&404!==s.status||d("/error-page",{state:{status:s.status,errors:s.errors}})},children:[(0,h.jsx)(b.g,{icon:N.Wcv,className:"me-2 "+(D.includes(m)?"text-primary":"")}),"Like"," ",(0,h.jsxs)("span",{className:"pull-right text-muted ms-2",children:[D.length," like",D.length>1?"s":""]})]})})]}),(0,h.jsxs)(i.A,{md:4,className:"bg-success align-self-start rounded mt-5",style:{textAlign:"left",height:"auto"},children:[(0,h.jsx)("h5",{style:{textAlign:"center",marginTop:"10px",color:"white"},children:"B\xe0i vi\u1ebft g\u1ea7n \u0111\xe2y"}),$&&0===$.length&&(0,h.jsx)("p",{className:"text-center",children:"Kh\xf4ng c\xf3 b\xe0i vi\u1ebft."}),$&&$.length>0&&$.map(((t,e)=>{var s,l,n;return(0,h.jsxs)("div",{className:"row align-items-center each-post mx-1 ",children:[(0,h.jsx)("div",{className:"recent-post px-0 col-sm-3",children:(0,h.jsx)(g,{src:`http://localhost:8080/${t.images[0]}`,fluid:!0})},t._id),(0,h.jsxs)("div",{className:"col-sm-9",children:[(0,h.jsx)("h6",{className:"text-success",children:(0,h.jsx)(v.N_,{onClick:()=>{return e=t.title||"Donation",void _(e);var e},to:`/posts/${t._id}`,style:{textDecoration:"none"},children:t.title})}),(0,h.jsxs)("p",{style:{fontSize:"13px"},children:["T\xe1c gi\u1ea3:"," ","partner"===(null===t||void 0===t||null===(s=t.authorId)||void 0===s?void 0:s.role)?null===t||void 0===t||null===(l=t.authorId)||void 0===l?void 0:l.organizationName:null===t||void 0===t||null===(n=t.authorId)||void 0===n?void 0:n.username]})]})]})}))]})]}),m&&(0,h.jsx)(o.A,{children:(0,h.jsx)(i.A,{md:8,xs:12,children:(0,h.jsx)(y.A,{type:"post"})})}),(0,h.jsx)(p.A,{show:k,onHide:()=>I(!1),children:(0,h.jsx)(p.A.Body,{children:w&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g,{src:`http://localhost:8080/${w.images[L]}`,fluid:!0}),(0,h.jsxs)("div",{className:"modal-controls text-center mt-3",children:[(0,h.jsx)("button",{className:"btn btn-success me-3",onClick:()=>P((t=>(t-1+w.images.length)%w.images.length)),children:"Tr\u01b0\u1edbc"}),(0,h.jsx)("button",{className:"btn btn-success",onClick:()=>P((t=>(t+1)%w.images.length)),children:"Sau"})]})]})})})]})})}}}]);
//# sourceMappingURL=177.811f37da.chunk.js.map