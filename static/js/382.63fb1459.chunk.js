"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[382],{349:(e,t,s)=>{s.d(t,{A:()=>n});const n=function(e){return e?e.toLowerCase().replace("qu\u1ef9","quy").replace(/\s+/g,"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]/g,""):""}},646:()=>{},991:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(5304);const i={createPost:e=>n.A.post("/posts/create-post",e),getPostDetail:e=>{const t=`/posts/${e}`;return n.A.get(t)},toggleLike:e=>{const t=`/posts/${e}/toggle-like`;return n.A.post(t)},getAllPosts:()=>n.A.get("/posts"),updatePost:(e,t)=>{const s=`/posts/${e}/update`;return n.A.post(s,t)},deletePost:e=>{console.log(e);const t=`/posts/${e}/delete`;return n.A.delete(t)}}},1302:(e,t,s)=>{s.d(t,{T:()=>n});const n=e=>"medical"===e?"Y t\u1ebf":"education"===e?"Gi\xe1o d\u1ee5c":"technology"===e?"C\xf4ng ngh\u1ec7":"children"===e?"Tr\u1ebb em":"environment"===e?"M\xf4i tr\u01b0\u1eddng":"money"===e?"Ti\u1ec1n":"clothes"===e?"Qu\u1ea7n \xe1o":"book"===e?"S\xe1ch":void 0},2239:(e,t,s)=>{s.d(t,{A:()=>x});var n=s(5043),i=s(3003),r=s(8258),a=s(8155),o=s(3709),l=s(3910),c=s(7929),d=s(349),h=s(579);const x=e=>{var t,s,x,m,j,p,u,g,v;let{post:y,deletePost:N}=e;const f=(0,o.zy)().pathname,{idUser:b,role:w}=(0,i.d4)((e=>e.user));console.log(y&&y);const[S,A]=(0,n.useState)("Donation");(0,n.useEffect)((()=>{document.title=S}),[S]);const k=e=>{A(e)};return(0,h.jsxs)(r.A,{className:"h-100 mt-0 border-success post-box",children:[(0,h.jsx)(r.A.Img,{variant:"top",src:`http://localhost:8080/${y.images[0]}`,alt:y.title,style:{height:"200px",objectFit:"cover"}}),(0,h.jsxs)(r.A.Body,{children:[(0,h.jsx)(r.A.Title,{className:"post-box-title text-start text-success mx-0",children:(0,h.jsx)(o.N_,{onClick:()=>k(y.title||"B\xe0i vi\u1ebft"),to:`/posts/${y._id}`,style:{textDecoration:"none"},className:"text-success",children:y.title})}),(0,h.jsx)(r.A.Text,{className:"post-box-content text-start",children:y.content}),(0,h.jsx)("div",{className:"row align-items-center mb-0",children:(0,h.jsx)("div",{className:"text-start",children:(0,h.jsxs)(o.N_,{to:""+(b.toString()===(null===(t=y.authorId)||void 0===t?void 0:t._id.toString())?"/personal-page":"partner"===(null===(s=y.authorId)||void 0===s?void 0:s.role)?`/quy/${(0,d.A)(null===(x=y.authorId)||void 0===x?void 0:x.organizationName)}`:`/taikhoan/${null===(m=y.authorId)||void 0===m?void 0:m.username}`),state:{personalPageId:null===(j=y.authorId)||void 0===j?void 0:j._id},children:[(0,h.jsx)("div",{className:"avatar",children:(0,h.jsx)("img",{src:`http://localhost:8080/${null===(p=y.authorId)||void 0===p?void 0:p.avatar}`,alt:"",style:{borderRadius:"50%",height:"30px"}})}),(0,h.jsx)("div",{className:"post-orgName ",children:"partner"===(null===(u=y.authorId)||void 0===u?void 0:u.role)?null===(g=y.authorId)||void 0===g?void 0:g.organizationName:null===(v=y.authorId)||void 0===v?void 0:v.username})]})})}),(0,h.jsxs)("div",{className:"text-muted col-sm-5 ms-5  ",children:[(0,h.jsx)(l.g,{icon:c.l6G,className:"me-1"}),(0,h.jsx)("small",{children:new Date(y.createdAt).toLocaleDateString()})]}),"/home"!==f&&"/posts"!==f&&(0,h.jsxs)("div",{className:"mt-3",children:[b.toString()===y.authorId._id.toString()&&(0,h.jsx)(o.N_,{onClick:()=>k(y.title||"B\xe0i vi\u1ebft"),to:`${"admin 1"===w||"admin 2"===w?"/admin":"partner"===w?"/partner":""}/posts/${y._id}/edit`,className:"btn btn-success",style:{fontSize:"10px"},children:"S\u1eeda"}),w&&("admin 1"===w||"admin 2"===w||b.toString()===y.authorId._id.toString())&&(0,h.jsx)(a.A,{className:"btn btn-danger",style:{fontSize:"10px",marginLeft:"10px"},onClick:()=>N(y._id),children:"Xo\xe1"})]})]}),(0,h.jsx)(o.N_,{onClick:()=>k(y.title||"B\xe0i vi\u1ebft"),to:`/posts/${y._id}`,className:"btn btn-white border-success read-button col-sm-7",style:{fontSize:"10px"},children:"\u0110\u1ecdc ti\u1ebfp"})]})}},4177:(e,t,s)=>{s.d(t,{A:()=>x});var n=s(5043),i=s(8258),r=s(4196),a=s(8155),o=s(3709),l=s(6411),c=s(1302),d=s(349),h=s(579);const x=n.memo((e=>{var t,s,x,m,j,p;let{title:u,detail:g,type:v,users:y,onOpen:N,actionHandler:f,className:b,senior:w,role:S}=e;const[A,k]=(0,n.useState)([]);console.log(S);(0,n.useEffect)((()=>{k([])}),[g]);const[D,T]=(0,n.useState)("Donation");(0,n.useEffect)((()=>{document.title=D}),[D]);const C=e=>{T(e)};return(0,h.jsxs)(i.A,{className:`${b} `,children:[(0,h.jsxs)(i.A.Body,{className:"px-0 py-0",children:["personal-donation"!==v&&(0,h.jsx)("h5",{className:"mb-2 text-muted py-2",children:u}),(0,h.jsxs)("div",{className:"table-responsive",children:[(0,h.jsxs)(r.A,{className:"mb-0 hover borderless ",children:[(0,h.jsx)("thead",{className:"table-success text-white text-center",children:(0,h.jsxs)("tr",{style:{textAlign:"left"},children:["dashboard-donation"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("th",{children:"Tr\u1ea1ng th\xe1i "}),(0,h.jsx)("th",{children:"D\u1ef1 \xe1n "}),(0,h.jsx)("th",{children:"Ng\xe0y"}),(0,h.jsx)("th",{children:"H\xecnh th\u1ee9c"}),(0,h.jsx)("th",{children:"\u0110\u0103ng k\xfd"}),(0,h.jsx)("th",{children:"\u0110\xe3 nh\u1eadn"})]}),"donation"===v&&(0,h.jsxs)(h.Fragment,{children:["partner"===S&&(0,h.jsx)("th",{children:(0,h.jsx)("input",{type:"checkbox",checked:A.length===(null===g||void 0===g?void 0:g.filter((e=>"pending"===e.status)).length)&&g.filter((e=>"pending"===e.status)).length>0,onChange:e=>{if(e.target.checked){const e=g.filter((e=>"pending"===e.status)).map((e=>e._id));k(e)}else k([])}})}),(0,h.jsx)("th",{children:"D\u1ef1 \xe1n "}),(0,h.jsx)("th",{children:"Ng\xe0y"}),(0,h.jsx)("th",{children:"M\xe3 quy\xean g\xf3p"}),(0,h.jsx)("th",{children:"T\xean"}),(0,h.jsx)("th",{children:"Email"}),(0,h.jsx)("th",{children:"H\xecnh th\u1ee9c"}),(0,h.jsx)("th",{children:"\u0110\u0103ng k\xfd"}),(0,h.jsx)("th",{children:"\u0110\xe3 nh\u1eadn"}),(0,h.jsx)("th",{children:"Tr\u1ea1ng th\xe1i "}),"partner"===S&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("th",{children:[" ",(0,h.jsx)("div",{style:{width:"100px"},children:"V\u1eadn chuy\u1ec3n"})," "]}),(0,h.jsx)("th",{children:"\u0110\xednh ch\xednh "})]}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{style:{width:"auto"},children:(0,h.jsx)("strong",{children:"L\xfd do t\u1eeb ch\u1ed1i"})})})]}),"users"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("th",{children:[w&&"partner"===w?"T\xean t\u1ed5 ch\u1ee9c":"T\xean ng\u01b0\u1eddi d\xf9ng"," "]}),(0,h.jsx)("th",{children:"Email "}),(0,h.jsx)("th",{children:"Tr\u1ea1ng th\xe1i "}),(0,h.jsx)("th",{children:"Ho\u1ea1t \u0111\u1ed9ng "})]}),!v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("th",{children:"STT"}),(0,h.jsx)("th",{children:"TI\xcaU \u0110\u1ec0"}),(0,h.jsx)("th",{children:"PH\xc2N M\u1ee4C"}),(0,h.jsx)("th",{children:"TR\u1ea0NG TH\xc1I "})]}),"expired"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("th",{children:"STT"}),(0,h.jsx)("th",{children:"TI\xcaU \u0110\u1ec0"}),(0,h.jsx)("th",{children:"NG\xc0Y"})]}),"personal-donation"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("th",{children:"Th\u1eddi gian "}),(0,h.jsx)("th",{children:" D\u1ef1 \xe1n"}),(0,h.jsx)("th",{children:"H\xecnh th\u1ee9c"}),(0,h.jsx)("th",{children:"\u1ee6ng h\u1ed9"}),(0,h.jsx)("th",{children:"Tr\u1ea1ng th\xe1i "}),(0,h.jsx)("th",{children:"Ghi ch\xfa "})]}),"total-donation"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("th",{}),(0,h.jsx)("th",{children:" Ti\u1ec1n"}),(0,h.jsx)("th",{children:"Qu\u1ea7n \xe1o"}),(0,h.jsx)("th",{children:"S\xe1ch"})]}),"project-donation"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("th",{children:" Ng\u01b0\u1eddi \u1ee7ng h\u1ed9 "}),(0,h.jsx)("th",{children:" H\xecnh th\u1ee9c "}),(0,h.jsx)("th",{children:" Gi\xe1 tr\u1ecb "}),(0,h.jsx)("th",{children:"Th\u1eddi gian "})]})]})}),(0,h.jsxs)("tbody",{className:""+("project-donation"===v?"project-donation text-start":"text-start"),style:{textAlign:"left"},children:["total-donation"!==v&&g&&g.map(((e,t)=>(0,h.jsxs)("tr",{className:(t%2!==0?"table-secondary":"")+" align-middle",children:["donation"===v&&(0,h.jsxs)(h.Fragment,{children:["partner"===S&&(0,h.jsx)("td",{children:(0,h.jsx)("input",{type:"checkbox",checked:A.includes(e._id),onChange:()=>{return t=e._id,void k((e=>e.includes(t)?e.filter((e=>e!==t)):[...e,t]));var t},disabled:"pending"!==e.status})}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{style:{width:"200px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.projectId.title})}),(0,h.jsxs)("td",{children:[" ",(0,h.jsx)("div",{className:"text-muted",style:{minWidth:"200px"},children:new Date(e.createdAt).toLocaleString()})]}),(0,h.jsx)("td",{className:"donation-code",children:(0,h.jsx)("div",{children:e.transactionCode})}),(0,h.jsx)("td",{style:{minWidth:"180px"},children:e.donorName}),(0,h.jsx)("td",{children:e.email}),(0,h.jsx)("td",{style:{minWidth:"120px"},children:"money"===e.typeOfDonation?"Ti\u1ec1n":"clothes"===e.typeOfDonation?"Qu\u1ea7n \xe1o":"S\xe1ch"}),(0,h.jsx)("td",{style:{minWidth:"150px"},children:"money"===e.typeOfDonation?(0,l.s)(String(e.registered)):e.registered}),(0,h.jsx)("td",{style:{minWidth:"150px"},children:"money"===e.typeOfDonation?(0,l.s)(String(e.raised)):e.raised}),(0,h.jsx)("td",{className:""+("pending"===e.status?"text-danger":"confirm"===e.status?"text-success":"gray"),style:{minWidth:"100px"},children:"pending"===e.status?"Ch\u1edd duy\u1ec7t":"confirm"===e.status?"\u0110\xe3 nh\u1eadn":"T\u1eeb ch\u1ed1i"}),"partner"===S&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("td",{children:"post"===e.registeredTransport?"B\u01b0u \u0111i\u1ec7n":"house"===e.registeredTransport?"\u0110\u0103ng k\xfd t\u1ea1i nh\xe0":""}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{style:{width:"150px"},children:(0,h.jsx)(a.A,{type:"button",className:" correct-button  bg-primary border-0 text-white rounded",onClick:()=>{f("correct",[e._id],e.registered,e.typeOfDonation)},disabled:"pending"!==e.status,children:"\u0110\xednh ch\xednh"})})})]}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{style:{width:"200px"},children:"reject"===e.status&&e.reasonForRejection})})]}),"dashboard-donation"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("td",{className:" "+("pending"===e.status?"text-danger":"confirm"===e.status?"text-success":"text-secondary"),children:["pending"===e.status?"Ch\u1edd duy\u1ec7t":"confirm"===e.status?"\u0110\xe3 nh\u1eadn":"T\u1eeb ch\u1ed1i"," "]}),(0,h.jsxs)("td",{children:[(0,h.jsx)("div",{style:{width:"150px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.projectId.title})," "]}),(0,h.jsx)("td",{children:new Date(e.createdAt).toLocaleString()}),(0,h.jsx)("td",{children:(0,c.T)(null===e||void 0===e?void 0:e.typeOfDonation)}),(0,h.jsx)("td",{children:"money"===(null===e||void 0===e?void 0:e.typeOfDonation)?(0,l.s)(e.registered):e.registered}),(0,h.jsx)("td",{children:"money"===(null===e||void 0===e?void 0:e.typeOfDonation)?(0,l.s)(e.raised):e.raised})]}),"users"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("td",{children:(0,h.jsx)("div",{style:{width:`${"partner"!==w&&"100px"}`},children:(0,h.jsx)(o.N_,{onClick:()=>C(e.username||e.organizationName||"Donation"),to:`${"partner"===w?"/quy":"client"===w?"/taikhoan":"/admin"}/${(0,d.A)("partner"===w?e.organizationName:"client"===w?e.username:"profile")}\n                          `,state:{personalPageId:e._id,profileId:e._id},style:{color:"black",textDecoration:"none"},children:w&&"partner"===w?e.organizationName:e.username})})}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{children:e.email})}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{children:e.status})}),(0,h.jsx)("td",{children:(0,h.jsxs)("div",{className:"d-flex gap-2 justify-content-start",children:[(0,h.jsx)("button",{className:"btn btn-success",children:(0,h.jsx)(o.N_,{to:`/admin/user-management/${e._id}`,style:{textDecoration:"none",color:"white"},state:{profileId:e._id},children:"S\u1eeda"})}),"partner"!==(null===e||void 0===e?void 0:e.role)&&(0,h.jsx)("button",{className:"btn btn-danger",onClick:()=>N(e._id),children:"Xo\xe1"})]})})]}),!v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("td",{children:t+1}),(0,h.jsx)("td",{style:{width:"200px"},children:(0,h.jsx)("div",{style:{width:"100px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.title})}),(0,h.jsx)("td",{children:e.category}),(0,h.jsx)("td",{children:(0,h.jsxs)("span",{className:"d-flex align-items-center justify-content-center gap-2",children:[(0,h.jsx)("i",{className:"fas fa-circle text-danger f-10 m-r-5"}),e.status]})})]}),"expired"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("td",{className:"text-center",style:{width:"15%"},children:t+1}),(0,h.jsx)("td",{children:e.title}),(0,h.jsx)("td",{className:"w-25",children:e.deadline})]}),"personal-donation"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("td",{style:{fontSize:"12px"},children:new Date(e.createdAt).toLocaleString()}),(0,h.jsx)("td",{className:"w-25",children:(0,h.jsx)("div",{style:{whiteSpace:"nowrap",width:"250px",overflow:"hidden",textOverflow:"ellipsis"},children:(0,h.jsxs)(o.N_,{onClick:()=>C(e.projectId.title||"Donation"),to:`/projects/${e.projectId._id}`,style:{textDecoration:"none",color:"black"},children:[" ",e.projectId.title]})})}),(0,h.jsx)("td",{style:{width:"120px",textAlign:"center"},children:"money"===e.typeOfDonation?"Ti\u1ec1n":"clothes"===e.typeOfDonation?"Qu\u1ea7n \xe1o":"S\xe1ch"}),(0,h.jsx)("td",{style:{width:"150px"},children:"pending"===e.status||"reject"===e.status?"money"===e.typeOfDonation?(0,l.s)(String(e.registered)):e.registered:"money"===e.typeOfDonation?(0,l.s)(String(e.raised)):e.raised}),(0,h.jsx)("td",{style:{width:"150px",textAlign:"center"},children:"confirm"===e.status?"X\xe1c nh\u1eadn":"pending"===e.status?"Ch\u1edd duy\u1ec7t":"T\u1eeb ch\u1ed1i"}),(0,h.jsx)("td",{style:{width:"200px"},children:"reject"===e.status&&e.reasonForRejection})]}),"project-donation"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("td",{children:e.anonymous?"\u1ea8n danh":e.donorName}),(0,h.jsx)("td",{children:(0,c.T)(e.typeOfDonation)}),(0,h.jsx)("td",{children:"money"===e.typeOfDonation?`${(0,l.s)(String(e.raised))}\u0111`:`${e.raised}${"clothes"===e.typeOfDonation?"chi\u1ebfc":"cu\u1ed1n"}`}),(0,h.jsx)("td",{children:new Date(e.createdAt).toLocaleString()})]})]},e._id))),g&&"total-donation"===v&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("tr",{children:[(0,h.jsxs)("td",{style:{width:"100px"},children:["Th\xe1ng ",(new Date).getMonth()+1]}),(0,h.jsxs)("td",{style:{width:"150px"},children:[(0,l.s)(String((null===g||void 0===g||null===(t=g.byMonth)||void 0===t?void 0:t.money)||0)),"\u0111"]}),(0,h.jsxs)("td",{style:{width:"150px"},children:[(null===g||void 0===g||null===(s=g.byMonth)||void 0===s?void 0:s.clothes)||0," chi\u1ebfc"]}),(0,h.jsxs)("td",{style:{width:"150px"},children:[" ",(null===g||void 0===g||null===(x=g.byMonth)||void 0===x?void 0:x.books)||0," cu\u1ed1n"]})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"T\u1ed5ng "}),(0,h.jsxs)("td",{children:[(0,l.s)(String((null===g||void 0===g||null===(m=g.amount)||void 0===m?void 0:m.money)||0)),"\u0111"]}),(0,h.jsxs)("td",{children:[(null===g||void 0===g||null===(j=g.amount)||void 0===j?void 0:j.clothes)||0," chi\u1ebfc"]}),(0,h.jsxs)("td",{children:[(null===g||void 0===g||null===(p=g.amount)||void 0===p?void 0:p.books)||0," cu\u1ed1n"]})]})]})]})]}),(!g||0===g.length)&&(0,h.jsx)("p",{style:{textAlign:"center",fontSize:"15px"},children:"Kh\xf4ng c\xf3 th\xf4ng tin n\xe0o \u0111\u01b0\u1ee3c t\xecm th\u1ea5y."})]})]}),"donation"===v&&"partner"===S&&(0,h.jsxs)("div",{className:"d-flex gap-2 mx-3 my-3 justify-content-start align-items-center",children:[(0,h.jsxs)("div",{children:["\u0110\xe3 ch\u1ecdn (",A.length,")"]}),(0,h.jsx)("button",{className:"btn btn-success rounded-pill",disabled:0===A.length,onClick:()=>{f("confirm",A)},children:"X\xe1c nh\u1eadn"}),(0,h.jsx)("button",{className:"btn btn-danger rounded-pill",disabled:0===A.length,onClick:()=>{f("reject",A)},children:"T\u1eeb ch\u1ed1i"})]})]})}))},4708:(e,t,s)=>{s.d(t,{A:()=>o});s(5043);var n=s(1072),i=s(8602),r=s(2239),a=s(579);const o=e=>{let{posts:t,clickHandler:s}=e;return(0,a.jsx)(n.A,{className:"mx-3 justify-content-start",children:t.map((e=>(0,a.jsx)(i.A,{lg:4,md:6,xs:12,className:"mb-3",children:(0,a.jsx)(r.A,{post:e,deletePost:s})},e._id)))})}},5881:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(579);const i=e=>{let{children:t,isOpen:s,onClose:i,name:r}=e;if(!s)return null;return(0,n.jsx)("div",{className:"modal-overlay",onClick:e=>{e.target.classList.contains("modal-overlay")&&i()},children:(0,n.jsx)("div",{className:"modal-content",onClick:e=>e.stopPropagation(),children:t})})}},6086:(e,t,s)=>{s.d(t,{A:()=>j});var n=s(5043),i=s(3003),r=s(6411),a=s(1302);function o(e){const t=new Date(e).getTime()-(new Date).getTime();if(t<0)return"The target date is in the past.";return Math.floor(t/864e5)}var l=s(3709),c=s(8155),d=s(3910),h=s(7929),x=s(349),m=s(579);const j=e=>{let{project:t}=e;const{idUser:s,role:j}=(0,i.d4)((e=>e.user)),p=t.goals[0];console.log(p.form,(0,r.s)(p.goal));const[u,g]=(0,n.useState)("Donation");(0,n.useEffect)((()=>{document.title=u}),[u]);const v=e=>{g(e)};return(0,m.jsxs)("div",{className:"project-column p-0 postion-relative",children:[(0,m.jsx)(l.N_,{onClick:()=>v(t.title||"Donation"),to:`/projects/${t._id}`,children:(0,m.jsx)("img",{src:`http://localhost:8080/${t.images[0]}`,alt:t.title})}),(0,m.jsx)("div",{className:"project-category",children:(0,m.jsx)("span",{children:(0,a.T)(t.category)})}),(0,m.jsx)("div",{className:"project-title",children:(0,m.jsx)(l.N_,{onClick:()=>v(t.title||"Donation"),to:`/projects/${t._id}`,children:t.title})}),(0,m.jsx)("div",{className:"funding-goals p-2 pe-0  w-100",children:(0,m.jsxs)("div",{className:"goal-project row  align-items-center mb-1",children:[(0,m.jsxs)("div",{className:"goal-form col-3",children:[(0,m.jsx)("span",{className:"goal-type",children:"money"===p.form?"Ti\u1ec1n":"clothes"===p.form?"Qu\u1ea7n \xe1o":"S\xe1ch"})," "]}),(0,m.jsxs)("div",{className:"goal-progress col-9",children:[(0,m.jsxs)("span",{className:"percentage text-danger",children:[(p.raised/p.goal*100).toFixed(2),"%"]}),(0,m.jsx)("div",{className:"progress-bar",children:(0,m.jsx)("div",{className:"progress",style:{width:`${(p.raised/p.goal*100).toFixed(2)}%`}})}),(0,m.jsxs)("div",{className:"row justify-content-between mb-0 ",children:[(0,m.jsxs)("span",{className:"col-6 raised text-start",children:["money"===p.form?(0,r.s)(p.raised):p.raised," ","money"===p.form?"\u0111":"clothes"===p.form?"chi\u1ebfc":"cu\u1ed1n"]})," ",(0,m.jsxs)("span",{className:" col-6  goal-amount text-end",children:["money"===p.form?(0,r.s)(p.goal):p.goal," ","money"===p.form?"\u0111":"clothes"===p.form?"chi\u1ebfc":"cu\u1ed1n"]})]})]})]},p._id)}),(0,m.jsxs)("div",{className:"organization ",children:[(0,m.jsx)("div",{className:"org-avatar",children:(0,m.jsxs)(l.N_,{onClick:()=>v(t.organizationId.organizationName||"Trang c\xe1 nh\xe2n"),to:""+(t.organizationId._id.toString()===s.toString()?"/partner/personal-page":`/quy/${(0,x.A)(t.organizationId.organizationName)}`),state:{personalPageId:t.organizationId._id},children:[(0,m.jsx)("div",{className:"avatar",children:(0,m.jsx)("img",{src:`http://localhost:8080/${t.organizationId.avatar}`,alt:""})}),(0,m.jsx)("div",{className:"orgName",children:t.organizationId.organizationName})]})}),(0,m.jsxs)("div",{className:"col-sm-5 deadline text-start",children:[(0,m.jsx)(d.g,{icon:h.l6G,className:"text-success "})," ","C\xf2n ",o(t.deadline)," ng\xe0y"]})]}),("admin 1"===j||"admin 2"===j||t.organizationId._id.toString()===s.toString())&&(0,m.jsx)(c.A,{className:"btn-success text-white position-absolute",style:{top:"0",left:"0"},children:(0,m.jsx)(l.N_,{onClick:()=>v(t.title||"Donation"),to:`${"admin 1"===j||"admin 2"===j?"/admin":"/partner"}/projects/edit/${t._id}`,className:"text-white",style:{textDecoration:"none"},children:"Edit"})})]})}},6411:(e,t,s)=>{s.d(t,{s:()=>n});const n=e=>{e=e.toString().replace(/\./g,"");return new Intl.NumberFormat("it-IT",{style:"currency",currency:"VND"}).format(e).replace("VND","").trim()}},7198:(e,t,s)=>{s.d(t,{A:()=>i});s(5043),s(646);var n=s(579);const i=e=>{let{label:t,type:s,id:i,name:r,required:a,options:o,className:l,sharedName:c,value:d,disabled:h,onChange:x,rows:m,multiple:j,placeholder:p,min:u}=e;return console.log(a,r),(0,n.jsxs)("div",{className:`form-group ${c}`,children:[t&&"checkbox"!==s?(0,n.jsxs)("label",{htmlFor:i,children:[t,a?(0,n.jsx)("sup",{className:"text-danger",children:"*"}):""]}):null,"textarea"===s?(0,n.jsx)("textarea",{className:`form-control ${l}`,id:i,name:r,rows:m,value:d,onChange:x,placeholder:p,required:a}):"select"===s?(0,n.jsx)("select",{id:i,name:r,required:a,className:`form-control ${l}`,value:d,onChange:x,children:o.map(((e,t)=>(0,n.jsx)("option",{value:e.value,children:e.label},e.id?e.id:e.value||t)))}):"file"===s?(0,n.jsx)("input",{type:"file",id:i,name:r,multiple:j,required:a}):"text"===s||"number"===s||"date"===s||"email"===s||"password"===s?(0,n.jsx)("input",{className:`form-control ${l}`,type:s,id:i,name:r,value:d,onChange:x,min:u,disabled:h,placeholder:p,required:a}):"checkbox"===s?(0,n.jsxs)("div",{className:"checkbox-container",children:[(0,n.jsx)("input",{type:s,name:r,id:i,value:d,disabled:h}),(0,n.jsxs)("label",{htmlFor:i,children:[t,a?(0,n.jsx)("sup",{className:"text-danger",children:"*"}):""]})]}):null]})}},8382:(e,t,s)=>{s.r(t),s.d(t,{default:()=>S});var n=s(5043),i=s(3003),r=s(3709),a=s(1072),o=s(8602),l=s(5881),c=s(9912),d=s(8802),h=s(991),x=s(3036),m=s(8155),j=s(579);const p=e=>{let{show:t,onClose:s,onUpload:n,type:i}=e;return(0,j.jsxs)(x.A,{show:t,onHide:s,children:[(0,j.jsx)(x.A.Header,{closeButton:!0,children:(0,j.jsxs)(x.A.Title,{children:["C\u1eadp nh\u1eadt ","avatar"===i?"Avatar":"Background"]})}),(0,j.jsx)(x.A.Body,{children:(0,j.jsxs)("form",{onSubmit:n,encType:"multipart/form-data",children:[(0,j.jsxs)("div",{children:[" ",(0,j.jsx)("input",{type:"file",id:"image",name:i,accept:"image/*"})]}),(0,j.jsxs)(m.A,{type:"submit",className:"btn-success mt-4",children:["T\u1ea3i \u1ea3nh"," "]})]})})]})};var u=s(6411);const g=e=>{let{title:t,value:s}=e;return(0,j.jsxs)("div",{className:"stat-card ",children:[(0,j.jsx)("h6",{children:t}),(0,j.jsx)("div",{className:""+("\u1ee6ng h\u1ed9"===t?"donate":""),children:"\u1ee6ng h\u1ed9"===t?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"donate-part ",children:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("span",{className:"border-bottom border-success",children:"Ti\u1ec1n "}),(0,j.jsxs)("span",{children:[" ",(0,u.s)(String(s.moneyDonations)),"\u0111"]})]})}),(0,j.jsxs)("div",{className:"donate-part ",children:[(0,j.jsx)("span",{className:"border-bottom border-success",children:"Qu\u1ea7n \xe1o "}),(0,j.jsxs)("span",{children:[s.clothesDonations," chi\u1ebfc"]})]}),(0,j.jsxs)("div",{className:"donate-part",children:[(0,j.jsx)("span",{className:"border-bottom border-success",children:" S\xe1ch "}),(0,j.jsxs)("span",{children:[s.bookDonations," cu\u1ed1n"]})]})]}):(0,j.jsx)("span",{children:s})})]})};var v=s(8420),y=s(4708),N=s(4177),f=s(1145),b=s(3910),w=s(7929);const S=()=>{var e,t;const s=(0,i.wA)(),x=(0,r.Zp)();let m=(0,r.zy)();m.pathname;const u=null===(e=m.state)||void 0===e?void 0:e.personalPageId,[S,A]=(0,n.useState)({}),{idUser:k,role:D}=(0,i.d4)((e=>e.user)),[T,C]=(0,n.useState)({}),[I,_]=(0,n.useState)([]),[F,$]=(0,n.useState)(!1),[z,O]=(0,n.useState)(""),[P,B]=(0,n.useState)("active"),[H,q]=(0,n.useState)([]),[G,L]=(0,n.useState)([]),[U,R]=(0,n.useState)(!1),[E,M]=(0,n.useState)("");async function Q(e){const t=await d.A.getProfile(e);if(t&&!0===t.success)return console.log(t.data),C(t.data);!t||500!==t.status&&404!==t.status||x("/error-page",{state:{status:t.status,errors:t.errors}})}console.log(S);const K=async e=>{const t=await d.A.getStats(e);t&&!0===t.success?A(t.stats):!t||500!==t.status&&404!==t.status||x("/error-page",{state:{status:t.status,errors:t.errors}})},W=async e=>{const t=await d.A.getDonationActivities(e);t&&!0===t.success?_(t.donationActivities):!t||500!==t.status&&404!==t.status||x("/error-page",{state:{status:t.status,errors:t.errors}})};async function X(e,t){const s=`?status=${t}`;console.log("hei");const n=await d.A.getProjectsById(e,s);n&&!0===n.success?(console.log(n.projects,k),q(n.projects)):!n||500!==n.status&&404!==n.status||x("/error-page",{state:{status:n.status,errors:n.errors}})}async function Y(e){const t=await d.A.getPostsById(e);t&&!0===t.success?L(t.posts):!t||500!==t.status&&404!==t.status||x("/error-page",{state:{status:t.status,errors:t.errors}})}(0,n.useEffect)((()=>{u&&k&&u.toString()===k.toString()?(Q(k),K(k),Y(k),W(k)):(Q(u),K(u),Y(u),W(u))}),[k,u]),(0,n.useEffect)((()=>{u&&k&&u.toString()===k.toString()?(console.log("idUser"),X(k,P)):(console.log("personalpage"),X(u,P))}),[k,u,P]);const V=()=>{M(""),R(!1)};return(0,j.jsxs)("div",{className:"profile-page position-relative",children:[(0,j.jsxs)("div",{className:"profile-header",style:{backgroundImage:`url("http://localhost:8080/${null===T||void 0===T?void 0:T.background}")`,backgroundSize:"cover",backgroundPosition:"center"},onClick:()=>{if(!u||u.toString()!==k.toString())return null;O("background"),$(!0)},children:[(0,j.jsx)("div",{className:"profile-avatar",onClick:e=>{if(!u||u.toString()!==k.toString())return null;e.stopPropagation(),O("avatar"),$(!0)},children:(0,j.jsx)("img",{src:`http://localhost:8080/${null===T||void 0===T?void 0:T.avatar}`,alt:"Avatar",style:{objectFit:"contain"}})}),(0,j.jsx)("div",{className:"text-success ",style:{position:"absolute",bottom:"-35%",left:"50%",transform:"translateX(-50%)",fontWeight:"bold",fontSize:"25px"},children:"partner"===T.role?T.organizationName:T.username})]}),T&&"partner"===T.role&&(0,j.jsxs)(a.A,{className:" row justify-content-between text-success mx-5 text-start",style:{marginTop:"150px"},children:[(0,j.jsxs)(o.A,{md:6,xs:12,children:[(0,j.jsx)("h6",{children:"Gi\u1edbi thi\u1ec7u v\u1ec1 t\u1ed5 ch\u1ee9c:"}),T&&T.summary&&(0,j.jsx)("div",{children:(0,j.jsx)("div",{style:{margin:"10px auto",textAlign:"justify",lineHeight:"1.7"},children:(0,j.jsx)("q",{children:(0,j.jsx)("i",{children:T.summary})})})})]}),(0,j.jsxs)(o.A,{md:5,xs:12,children:[(0,j.jsx)("h6",{children:"Li\xean h\u1ec7:"}),(0,j.jsx)("div",{className:"pe-0",children:(0,j.jsxs)("p",{className:"mb-1 font-weight-normal",children:[(0,j.jsx)(b.g,{icon:w.y_8,className:"text-success me-2",style:{fontSize:"17px"}}),T.email]})}),(0,j.jsx)("div",{className:"pe-0",children:(0,j.jsxs)("p",{className:"mb-1 font-weight-normal",children:[" ",(0,j.jsx)(b.g,{icon:w.zxS,className:"text-success me-2",style:{fontSize:"17px"}}),T.website]})}),(0,j.jsx)("div",{className:"pe-0",children:(0,j.jsxs)("div",{className:"mb-1 font-weight-normal",children:[" ",(0,j.jsx)(b.g,{icon:w.gKm,className:"text-success me-2",style:{fontSize:"17px"}}),T.addressDetail,", ",T.ward,",",T.district,",",T.province,"."]})}),(0,j.jsx)("div",{className:"pe-0",children:(0,j.jsxs)("p",{className:"mb-1 ",children:[(0,j.jsx)(b.g,{icon:w.hX0,className:"text-success me-2",style:{fontSize:"17px"}}),T.phone]})})]})]}),T&&"partner"!==T.role&&(0,j.jsx)("div",{style:{height:"100px"}}),S&&(0,j.jsxs)("div",{className:"stats-grid  bg-white mx-3 border border-success",children:["client"===S.role&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g,{title:"D\u1ef1 \xe1n \u0111\xe3 quy\xean g\xf3p",value:S.projectsSupportedCount}),(0,j.jsx)(g,{title:"B\xe0i vi\u1ebft",value:S.postsCount}),(0,j.jsx)(g,{title:"\u1ee6ng h\u1ed9",value:S})]}),"partner"===S.role&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(g,{title:"D\u1ef1 \xe1n",value:S.projectsCount}),(0,j.jsx)(g,{title:"B\xe0i vi\u1ebft",value:S.postsCount}),(0,j.jsx)(g,{title:"S\u1ed1 l\u01b0\u1ee3t \u1ee7ng h\u1ed9",value:S.totalSupports}),(0,j.jsx)(g,{title:"\u1ee6ng h\u1ed9",value:S})]})]}),(0,j.jsxs)("div",{className:"project-part",style:{borderBottom:"none"},children:[" ",(0,j.jsxs)("div",{className:" row mx-0 justify-content-center",style:{marginTop:"50px"},children:["partner"===S.role&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h5",{className:"col-sm-6 pt-3  project-active "+("active"===P?"bg-success text-white":""),onClick:()=>B("active"),children:"D\u1ef0 \xc1N \u0110ANG K\xcaU G\u1eccI"}),(0,j.jsx)("h5",{className:"col-sm-6 pt-3 project-inactive "+("inactive"===P?"bg-success text-white":""),onClick:()=>B("inactive"),children:"D\u1ef0 \xc1N \u0110\xc3 K\u1ebeT TH\xdaC"})]}),"client"===S.role&&(0,j.jsx)("h5",{className:"bg-success text-white py-2",style:{borderTopRightRadius:"20px",borderTopLeftRadius:"20px"},children:"D\u1ef0 \xc1N \u0110\xc3 THAM GIA"})]}),(0,j.jsxs)("div",{children:[0===H.length&&(0,j.jsx)("h5",{children:"Kh\xf4ng c\xf3 d\u1ef1 \xe1n n\xe0o!"}),H.length>0&&(0,j.jsx)(v.A,{projects:H})]})]}),("partner"===S.role||"client"===S.role)&&(0,j.jsxs)("div",{className:"post-part",children:[(0,j.jsx)("h5",{className:"text-center py-2 text-white bg-success",children:" B\xc0I VI\u1ebeT "}),0===G.length&&(0,j.jsx)("h5",{children:"Kh\xf4ng c\xf3 vi\u1ebft n\xe0o!"}),G.length>0&&(0,j.jsx)(y.A,{posts:G,clickHandler:e=>{M(e),R(!0)}})]}),"client"===S.role&&((null===k||void 0===k?void 0:k.toString())===(null===T||void 0===T||null===(t=T._id)||void 0===t?void 0:t.toString())||"admin 1"===D||"admin 2"===D)&&(0,j.jsxs)("div",{className:"donation-part",style:{maxHeight:"500px",overflowY:"scroll"},children:[(0,j.jsxs)("h5",{className:"text-center py-2 text-white bg-success",children:["HO\u1ea0T \u0110\u1ed8NG QUY\xcaN G\xd3P"," "]}),0===I.length&&(0,j.jsx)("h5",{children:"Kh\xf4ng c\xf3 ho\u1ea1t \u0111\u1ed9ng quy\xean g\xf3p n\xe0o!"}),I.length>0&&(0,j.jsx)(N.A,{className:"personal-donation-table",detail:I,type:"personal-donation"})]}),(0,j.jsx)(p,{show:F,onClose:()=>$(!1),onUpload:async e=>{e.preventDefault(),console.log("start");const t=new FormData(e.target);console.log("data",k);const n=`?type=${z}`,i=await d.A.patchImage(k,t,n);i&&!0===i.success?(Q(k),"avatar"===z&&s((0,f.xG)({avatar:i.image})),"background"===z&&s((0,f.Y1)({background:i.image}))):!i||500!==i.status&&404!==i.status||x("/error-page",{state:{status:i.status,errors:i.errors}})},type:z}),(0,j.jsx)(a.A,{children:(0,j.jsx)(l.A,{isOpen:U,onClose:V,children:(0,j.jsx)(c.A,{content:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n xo\xe1 b\xe0i vi\u1ebft n\xe0y?",onClose:V,deleteUser:async()=>{if(E){console.log("hey postId");const e=await h.A.deletePost(E);e&&!0===e.success?(console.log("this is true"),window.alert(e.message),u&&k&&u.toString()===k.toString()?Y(k):Y(u)):!e||500!==e.status&&404!==e.status||x("/error-page",{state:{status:e.status,errors:e.errors}})}}})})})]})}},8420:(e,t,s)=>{s.d(t,{A:()=>r});s(5043);var n=s(6086),i=s(579);const r=function(e){let{projects:t}=e;return(0,i.jsx)("div",{className:"personal-project-list row",children:t.map((e=>(0,i.jsx)("div",{className:"col-xl-4 col-lg-5  col-md-6 col-12",children:(0,i.jsx)(n.A,{project:e})},e._id)))})}},9912:(e,t,s)=>{s.d(t,{A:()=>o});s(5043);var n=s(7198),i=s(8155),r=s(6411),a=s(579);const o=e=>{let{action:t,registered:s,typeOfDona:o,selectedIDs:l,onClose:c,onBulkConfirm:d,onBulkReject:h,onCorrect:x,content:m,deleteUser:j}=e;console.log(s,o);return(0,a.jsxs)("div",{className:"donation-form text-start",children:[(0,a.jsx)("div",{className:"text-end",onClick:c,children:(0,a.jsx)("span",{className:"text-danger",children:" X "})}),(0,a.jsxs)("form",{method:"POST",onSubmit:e=>{if(e.preventDefault(),"confirm"===t)console.log(l,t),d(l,t);else if("reject"===t){const s=new FormData(e.target).get("reasonForRejection");console.log(l,t),h(l,t,s)}else if("correct"===t){const s=new FormData(e.target).get(o);x(l,t,s)}else m&&(console.log("ehy"),j());c()},children:[m&&(0,a.jsx)("p",{children:m}),"reject"===t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"L\xfd do t\u1eeb ch\u1ed1i Quy\xean g\xf3p: "}),(0,a.jsx)(n.A,{type:"text",label:"",id:"reason",name:"reasonForRejection",sharedName:"my-1",className:"form-control",required:!0})]}),"confirm"===t&&(0,a.jsx)("p",{children:'B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn "\u0110\xe3 nh\u1eadn" c\xe1c ph\u1ea7n Quy\xean g\xf3p n\xe0y kh\xf4ng? '}),"correct"===t&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{className:"text-success text-center",children:"\u0110\xednh ch\xednh"}),(0,a.jsxs)("p",{children:["Theo th\xf4ng tin, b\u1ea1n \u0111\xe3 \u0111\u0103ng k\xfd \u1ee7ng h\u1ed9"," ",o&&("money"===o?"ti\u1ec1n":"clothes"===o?"qu\u1ea7n \xe1o":"s\xe1ch")," ","v\u1edbi gi\xe1 tr\u1ecb l\xe0"," ",o&&"money"===o?(0,r.s)(String(s)):s," ",o&&("money"===o?"\u0111\u1ed3ng":"clothes"===o?"chi\u1ebfc":"cu\u1ed1n"),"."]}),(0,a.jsxs)("p",{children:["Sau khi trao \u0111\u1ed5i v\xe0 x\xe1c nh\u1eadn th\xf4ng tin v\u1edbi ng\u01b0\u1eddi \u1ee7ng h\u1ed9, ch\xfang t\xf4i \u0111\xednh ch\xednh"," ",o&&("money"===o?"s\u1ed1 ti\u1ec1n":"clothes"===o?"s\u1ed1 l\u01b0\u1ee3ng qu\u1ea7n \xe1o":"s\u1ed1 l\u01b0\u1ee3ng s\xe1ch")," ","m\xe0 ch\xfang t\xf4i \u0111\xe3 nh\u1eadn \u0111\u01b0\u1ee3c l\xe0:"," ",(0,a.jsx)("input",{type:"number",name:o&&o})]})]}),(0,a.jsxs)("div",{className:"mt-3 text-center",children:[(0,a.jsxs)(i.A,{type:"button",className:"btn btn-danger",onClick:c,children:["Hu\u1ef7 b\u1ecf"," "]})," ",(0,a.jsx)(i.A,{type:"submit",className:"btn btn-success",children:"confirm"===t?"\u0110\xe3 nh\u1eadn":"reject"===t?"T\u1eeb ch\u1ed1i":m?"Ch\u1eafc ch\u1eafn":"\u0110\xednh ch\xednh"})]})]})]})}}}]);
//# sourceMappingURL=382.63fb1459.chunk.js.map