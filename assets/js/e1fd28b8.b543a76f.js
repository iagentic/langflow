"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[6051],{7533:(e,n,o)=>{o.d(n,{A:()=>i});var s=o(6540),t=o(1122),r=o(6025),l=o(4848);const i=e=>{let{alt:n,sources:o,style:i}=e;const[c,a]=(0,s.useState)(!1),d=e=>{"Escape"===e.key&&a(!1)};(0,s.useEffect)((()=>(c?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[c]);return(0,l.jsx)("div",{className:"zoomable-image "+(c?"fullscreen":""),onClick:()=>{a(!c)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...i},children:(0,l.jsx)(t.A,{className:"zoomable-image-inner",alt:n,sources:{light:(0,r.Ay)(o.light),dark:(0,r.Ay)(o.dark)}})})}},7844:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>j,contentTitle:()=>h,default:()=>x,frontMatter:()=>d,metadata:()=>p,toc:()=>g});o(6540);var s=o(4848),t=o(8453),r=(o(1122),o(6025)),l=o(7533),i=o(3554),c=o.n(i),a=o(7293);const d={},h="Collections and Projects",p={id:"administration/collections-projects",title:"Collections and Projects",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/administration/collections-projects.mdx",sourceDirName:"administration",slug:"/administration/collections-projects",permalink:"/administration/collections-projects",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Logs",permalink:"/administration/logs"},next:{title:"Settings",permalink:"/administration/settings"}},j={},g=[{value:"Collections",id:"collections",level:2},{value:"Project",id:"project",level:2},{value:"Project options menu",id:"project-options-menu",level:2},{value:"Project folders",id:"project-folders",level:2}];function u(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",strong:"strong",h2:"h2",img:"img",code:"code",a:"a"},(0,t.RP)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"collections-and-projects",children:"Collections and Projects"}),"\n",(0,s.jsx)(a.A,{type:"warning",title:"warning",children:(0,s.jsx)(n.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,s.jsx)(n.p,{children:"My Collection\xa0is a space in Langflow where users can manage, organize, and access their flows and components.\nFlows and components are displayed as individual cards that provide relevant information."}),"\n",(0,s.jsx)(l.A,{alt:"Docusaurus themed image",sources:{light:(0,r.Ay)("img/my-collection.png"),dark:(0,r.Ay)("img/my-collection.png")},style:{width:"30%",margin:"20px auto"}}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Folders"}),': Users can organize their projects into folders. Default folders include "My Projects" and the ability to create new folders. Hover over a folder to access options to download or delete it.']}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Search Bar"})," Enables users to quickly search through their flows and components."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Select All"}),": This feature allows users to select all projects displayed on the page for batch actions like moving, deleting, or exporting."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Click on a flow card to open it in Langflow Workspace or use the\xa0",(0,s.jsx)(n.strong,{children:"Playground Button"}),"\xa0for direct access to execute and interact with the flow\u2019s chatbot interface."]}),"\n",(0,s.jsx)(n.h2,{id:"collections",children:"Collections"}),"\n",(0,s.jsxs)(n.p,{children:["Components created or imported by the user are also displayed in ",(0,s.jsx)(n.strong,{children:"My Collection"})," and can be directly removed from here."]}),"\n",(0,s.jsx)(n.p,{children:"A collection is a snapshot of flows available in a database."}),"\n",(0,s.jsx)(n.p,{children:"Collections can be downloaded to local storage and uploaded for future use."}),"\n",(0,s.jsx)("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"center"},children:(0,s.jsx)(c(),{playing:!0,controls:!0,url:"/videos/langflow_collection.mp4"})}),"\n",(0,s.jsx)(n.h2,{id:"project",children:"Project"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.strong,{children:"Project"})," can be a flow or a component. To view your saved projects, select ",(0,s.jsx)(n.strong,{children:"My Collection"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Your ",(0,s.jsx)(n.strong,{children:"Projects"})," are displayed."]}),"\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.img,{src:o(4757).A+"",loading:"lazy",alt:"Playground icon",width:"24",height:"24"})," Playground"]})," button to run a flow from the ",(0,s.jsx)(n.strong,{children:"My Collection"})," screen."]}),"\n",(0,s.jsxs)(n.p,{children:["In the top left corner of the screen are options for ",(0,s.jsx)(n.strong,{children:"Download Collection"}),", ",(0,s.jsx)(n.strong,{children:"Upload Collection"}),", and ",(0,s.jsx)(n.strong,{children:"New Project"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"Download Collection"})," to save your project to your local machine. This downloads all flows and components as a ",(0,s.jsx)(n.code,{children:".json"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"Upload Collection"})," to upload a flow or component ",(0,s.jsx)(n.code,{children:".json"})," file from your local machine."]}),"\n",(0,s.jsxs)(n.p,{children:["Select ",(0,s.jsx)(n.strong,{children:"New Project"})," to create a new project. In addition to a blank workspace, ",(0,s.jsx)(n.a,{href:"../starter-projects/basic-prompting",children:"starter projects"})," are also available."]}),"\n",(0,s.jsx)(n.h2,{id:"project-options-menu",children:"Project options menu"}),"\n",(0,s.jsx)(n.p,{children:"To see options for your project, in the upper left corner of the workspace, select the dropdown menu."}),"\n",(0,s.jsx)(l.A,{alt:"Docusaurus themed image",sources:{light:(0,r.Ay)("img/project-options-menu-light.png"),dark:(0,r.Ay)("img/project-options-menu-dark.png")},style:{width:"30%",margin:"20px auto"}}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"New"})," - Start a new project."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Duplicate"})," - Duplicate the current flow as a new project."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Settings"})," - Modify the project's ",(0,s.jsx)(n.strong,{children:"Name"})," or ",(0,s.jsx)(n.strong,{children:"Description"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Import"})," - Upload a flow ",(0,s.jsx)(n.code,{children:".json"})," file from your local machine."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Export"})," - Download your current project to your local machine as a ",(0,s.jsx)(n.code,{children:".json"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Undo"})," or ",(0,s.jsx)(n.strong,{children:"Redo"})," - Undo or redo your last action."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-folders",children:"Project folders"}),"\n",(0,s.jsxs)(n.p,{children:["Multiple projects can be stored in ",(0,s.jsx)(n.strong,{children:"folders"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Folders allow you to categorize flows and components into manageable groups. This makes it easier to find and access specific projects quickly."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"My Projects"})," is a default folder where all new projects and components are initially stored unless specified otherwise. Users can create custom folders to better organize their work according to specific needs."]}),"\n",(0,s.jsx)(n.p,{children:"Hovering over a folder in Langflow provides options to either remove or download the entire folder, allowing you to keep an offline copy or migrate projects between environments"}),"\n",(0,s.jsxs)(n.p,{children:["Create new folders with the ",(0,s.jsx)(n.strong,{children:"New folder"})," button. One folder can store multiple projects (as the default My Projects folder does)."]}),"\n",(0,s.jsx)(n.p,{children:"You can download folders of projects as a single JSON file, and upload files and flows to your folder."}),"\n",(0,s.jsxs)(n.p,{children:["Click the ",(0,s.jsx)(n.strong,{children:"Trash"})," icon to delete a folder."]})]})}const x=function(e={}){const{wrapper:n}=Object.assign({},(0,t.RP)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},4757:(e,n,o)=>{o.d(n,{A:()=>s});const s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYm90LW1lc3NhZ2Utc3F1YXJlIj4KICA8cGF0aCBkPSJNMTIgNlYySDgiIC8+CiAgPHBhdGggZD0ibTggMTgtNCA0VjhhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMloiIC8+CiAgPHBhdGggZD0iTTIgMTJoMiIgLz4KICA8cGF0aCBkPSJNOSAxMXYyIiAvPgogIDxwYXRoIGQ9Ik0xNSAxMXYyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgo8L3N2Zz4g"},8453:(e,n,o)=>{o.d(n,{RP:()=>r,xA:()=>i});var s=o(6540);const t=s.createContext({});function r(e){const n=s.useContext(t);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:o}){let i;return i=o?"function"==typeof e?e({}):e||l:r(e),s.createElement(t.Provider,{value:i},n)}}}]);