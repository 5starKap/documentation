(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),i=n("aOgs"),r=n("q1tI"),l=n.n(r),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),d=n("ReZb"),u=n("GCVy"),p=n("+6vE");var b=function(e){var t=e.children;return l.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return l.a.createElement("strong",null,t)},g=n("gnlW"),h=n("mwnC"),y=n("/Rw0"),E=n("dVM4"),v=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function O(e){var t=e.items,n=e.depth;return l.a.createElement(v,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(O,{items:e.items,depth:n+1}):null)})))}O.defaultProps={depth:0};var w=O,x=n("MfeC");function k(e){var t=x.a.getPath(e.location.pathname),n=x.a.getVariantAndPage(e.root,t);if(!n)return null;var a=x.a.getVariantsForPage(e.root,n.page),i=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),i.push(l.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(o.i,{overlay:e.overlay},l.a.createElement(o.i.Button,null,r.variant.title),l.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},i)))}k.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var _=k,j=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),N=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),H=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,v=r.title,O=r.description,k=r.status,z=r.source,G=r.additionalContributors,M=void 0===G?[]:G,D=x.a.getVariantRoot(a.pathname);return l.a.createElement(c.a,{components:{Index:d.a,Note:u.a,Prompt:b,PromptReply:f,Screenshot:g.a}},l.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(m.a,{title:v,description:O}),l.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),l.a.createElement(j,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(o.e,{display:["none",null,null,"block"]},l.a.createElement(h.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),l.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(I,null,l.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(o.e,null,l.a.createElement(o.e,null,l.a.createElement(o.m,{as:"h1"},v),O))),null!=D?l.a.createElement(S,null,l.a.createElement(_,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:D,location:a})):null),n.tableOfContents.items?l.a.createElement(N,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},l.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(w,{items:n.tableOfContents.items})):null,l.a.createElement(H,null,k||z?l.a.createElement(o.k,{mb:3,alignItems:"center"},k?l.a.createElement(E.a,{status:k}):null,l.a.createElement(o.e,{mx:"auto"}),z?l.a.createElement(y.a,{href:z}):null):null,n.tableOfContents.items?l.a.createElement(o.e,{display:["block",null,"none"],mb:3},l.a.createElement(o.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(o.r,{icon:i.b,mr:2}):l.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),l.a.createElement(o.e,{pt:1},l.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(p.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},rGl6:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return p}));var a,o=n("zLVn"),i=n("q1tI"),r=n("7ljp"),l=n("O6H6"),c=n("4LHR"),m={},s=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),d={_frontmatter:m},u=l.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(u,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:"),' Demoting an admin does not deactivate them. To deactivate a user, follow the steps in "',Object(r.b)("a",{parentName:"p",href:"viewing-deactivating-and-reactivating-users#deactivating-users"},"Viewing, deactivating, and reactivating users"))),Object(r.b)("p",null,"If an admin on your npm Enterprise instance no longer needs to take admin actions on the instance (e.g. configuring SSO, activating and deactivating users, or inviting users to the instance), as an Enterprise instance admin, you can demote the admin to a non-admin user."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"If you haven't already, add the user to your instance, either by having them sign in with your SSO provider, or by inviting them to create a username and password on the instance."),Object(r.b)("li",{parentName:"ol"},Object(r.b)(i.Fragment,null,"Have an Enterprise admin ",c.a["contact-enterprise-support"].text," with the name of the admin to be demoted to a non-admin user."))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-enterprise-user-management-demoting-an-admin-to-a-non-admin-user-mdx-3992855796ed2716737c.js.map