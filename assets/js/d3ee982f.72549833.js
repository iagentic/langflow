"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[6817],{7293:(e,t,n)=>{n.d(t,{A:()=>N});var a=n(6540),s=n(4848);function i(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),i=t.filter((e=>e!==n)),o=n?.props.children;return{mdxAdmonitionTitle:o,rest:i.length>0?(0,s.jsx)(s.Fragment,{children:i}):null}}(e.children),i=e.title??t;return{...e,...i&&{title:i},children:n}}var o=n(8215),r=n(1312),l=n(7559);const c={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:t,className:n,children:a}=e;return(0,s.jsx)("div",{className:(0,o.A)(l.G.common.admonition,l.G.common.admonitionType(t),c.admonition,n),children:a})}function h(e){let{icon:t,title:n}=e;return(0,s.jsxs)("div",{className:c.admonitionHeading,children:[(0,s.jsx)("span",{className:c.admonitionIcon,children:t}),n]})}function u(e){let{children:t}=e;return t?(0,s.jsx)("div",{className:c.admonitionContent,children:t}):null}function g(e){const{type:t,icon:n,title:a,children:i,className:o}=e;return(0,s.jsxs)(d,{type:t,className:o,children:[a||n?(0,s.jsx)(h,{title:a,icon:n}):null,(0,s.jsx)(u,{children:i})]})}function p(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const m={icon:(0,s.jsx)(p,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,s.jsx)(g,{...m,...e,className:(0,o.A)("alert alert--secondary",e.className),children:e.children})}function j(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const f={icon:(0,s.jsx)(j,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function w(e){return(0,s.jsx)(g,{...f,...e,className:(0,o.A)("alert alert--success",e.className),children:e.children})}function A(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,s.jsx)(g,{...y,...e,className:(0,o.A)("alert alert--info",e.className),children:e.children})}function v(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const I={icon:(0,s.jsx)(v,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function D(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const k={icon:(0,s.jsx)(D,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const C={icon:(0,s.jsx)(v,{}),title:(0,s.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const T={...{note:x,tip:w,info:b,warning:function(e){return(0,s.jsx)(g,{...I,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(g,{...k,...e,className:(0,o.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(x,{title:"secondary",...e}),important:e=>(0,s.jsx)(b,{title:"important",...e}),success:e=>(0,s.jsx)(w,{title:"success",...e}),caution:function(e){return(0,s.jsx)(g,{...C,...e,className:(0,o.A)("alert alert--warning",e.className),children:e.children})}}};var B=n(6763);function N(e){const t=i(e),n=(a=t.type,T[a]||(B.warn(`No admonition component found for admonition type "${a}". Using Info as fallback.`),T.info));var a;return(0,s.jsx)(n,{...t})}},7533:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(6540),s=n(1122),i=n(6025),o=n(4848);const r=e=>{let{alt:t,sources:n,style:r}=e;const[l,c]=(0,a.useState)(!1),d=e=>{"Escape"===e.key&&c(!1)};(0,a.useEffect)((()=>(l?document.addEventListener("keydown",d):document.removeEventListener("keydown",d),()=>{document.removeEventListener("keydown",d)})),[l]);return(0,o.jsx)("div",{className:"zoomable-image "+(l?"fullscreen":""),onClick:()=>{c(!l)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...r},children:(0,o.jsx)(s.A,{className:"zoomable-image-inner",alt:t,sources:{light:(0,i.Ay)(n.light),dark:(0,i.Ay)(n.dark)}})})}},3954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>h});n(6540);var a=n(4848),s=n(8453),i=(n(1122),n(6025),n(7533)),o=n(7293);const r={},l="\ud83c\udf1f RAG with Astra DB",c={id:"tutorials/rag-with-astradb",title:"\ud83c\udf1f RAG with Astra DB",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/tutorials/rag-with-astradb.mdx",sourceDirName:"tutorials",slug:"/tutorials/rag-with-astradb",permalink:"/tutorials/rag-with-astradb",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Integrate Documents with Prompt Variables",permalink:"/tutorials/loading_document"},next:{title:"Docker",permalink:"/deployment/docker"}},d={},h=[{value:"Create an Astra DB Database",id:"create-an-astra-db-database",level:2},{value:"(Optional) Duplicate the Langflow 1.0 HuggingFace Space",id:"optional-duplicate-the-langflow-10-huggingface-space",level:2},{value:"Open the Vector Store RAG Project in Langflow",id:"open-the-vector-store-rag-project-in-langflow",level:2}];function u(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",a:"a",ul:"ul",li:"li",em:"em",h2:"h2",code:"code",img:"img"},(0,s.RP)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"-rag-with-astra-db",children:"\ud83c\udf1f RAG with Astra DB"}),"\n",(0,a.jsx)(o.A,{type:"warning",title:"warning",children:(0,a.jsx)(t.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,a.jsxs)(t.p,{children:["This guide will walk you through how to build a RAG (Retrieval Augmented Generation) application using ",(0,a.jsx)(t.strong,{children:"Astra DB"})," and ",(0,a.jsx)(t.strong,{children:"Langflow"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.datastax.com/products/datastax-astra?utm_source=langflow-pre-release&utm_medium=referral&utm_campaign=langflow-announcement&utm_content=astradb",children:"Astra DB"})," is a cloud-native database built on Apache Cassandra that is optimized for the cloud. It is a fully managed database-as-a-service that simplifies operations and reduces costs. Astra DB is built on the same technology that powers the largest Cassandra deployments in the world."]}),"\n",(0,a.jsx)(t.p,{children:"In this guide, we will use Astra DB as a vector store to store and retrieve the documents that will be used by the RAG application to generate responses."}),"\n",(0,a.jsx)(o.A,{type:"tip",children:(0,a.jsxs)(t.p,{children:["This guide assumes that you have Langflow up and running. If you are new to\nLangflow, you can check out the ",(0,a.jsx)(t.a,{href:"../getting-started/install-langflow",children:"Getting\nStarted"})," guide."]})}),"\n",(0,a.jsx)(t.p,{children:"TLDR;"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://astra.datastax.com/signup?utm_source=langflow-pre-release&utm_medium=referral&utm_campaign=langflow-announcement&utm_content=create-a-free-astra-db-account",children:"Create a free Astra DB account"})}),"\n",(0,a.jsxs)(t.li,{children:["Create a new database, get a ",(0,a.jsx)(t.strong,{children:"Token"})," and the ",(0,a.jsx)(t.strong,{children:"API Endpoint"})]}),"\n",(0,a.jsxs)(t.li,{children:["Start Langflow and click on the ",(0,a.jsx)(t.strong,{children:"New Project"})," button and look for Vector Store RAG. This will create a new project with the necessary components"]}),"\n",(0,a.jsx)(t.li,{children:"Import the project into Langflow by dropping it on the Workspace or My Collection page"}),"\n",(0,a.jsxs)(t.li,{children:["Update the ",(0,a.jsx)(t.strong,{children:"Token"})," and ",(0,a.jsx)(t.strong,{children:"API Endpoint"})," in the ",(0,a.jsx)(t.strong,{children:"Astra DB"})," components"]}),"\n",(0,a.jsxs)(t.li,{children:["Update the OpenAI API key in the ",(0,a.jsx)(t.strong,{children:"OpenAI"})," components"]}),"\n",(0,a.jsxs)(t.li,{children:["Run the ingestion flow which is the one that uses the ",(0,a.jsx)(t.strong,{children:"Astra DB"})," component"]}),"\n",(0,a.jsxs)(t.li,{children:["Click on the \u26a1 ",(0,a.jsx)(t.em,{children:"Run"})," button and start interacting with your RAG application"]}),"\n"]}),"\n",(0,a.jsx)(t.h1,{id:"first-things-first",children:"First things first"}),"\n",(0,a.jsx)(t.h2,{id:"create-an-astra-db-database",children:"Create an Astra DB Database"}),"\n",(0,a.jsxs)(t.p,{children:["To get started, you will need to ",(0,a.jsx)(t.a,{href:"https://astra.datastax.com/signup?utm_source=langflow-pre-release&utm_medium=referral&utm_campaign=langflow-announcement&utm_content=create-an-astradb-database",children:"create an Astra DB database"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Once you have created an account, you will be taken to the Astra DB dashboard. Click on the ",(0,a.jsx)(t.strong,{children:"Create Database"})," button."]}),"\n",(0,a.jsx)(i.A,{alt:"Docusaurus themed image",sources:{light:"img/astra-create-database.png",dark:"img/astra-create-database.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,a.jsxs)(t.p,{children:["Now you will need to configure your database. Choose the ",(0,a.jsx)(t.strong,{children:"Serverless (Vector)"})," deployment type, and pick a Database name, provider and region."]}),"\n",(0,a.jsxs)(t.p,{children:["After you have configured your database, click on the ",(0,a.jsx)(t.strong,{children:"Create Database"})," button."]}),"\n",(0,a.jsx)(i.A,{alt:"Docusaurus themed image",sources:{light:"img/astra-configure-deployment.png",dark:"img/astra-configure-deployment.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,a.jsxs)(t.p,{children:["Once your database is initialized, to the right of the page, you will see the ",(0,a.jsx)(t.em,{children:"Database Details"})," section which contains a button for you to copy the ",(0,a.jsx)(t.strong,{children:"API Endpoint"})," and another to generate a ",(0,a.jsx)(t.strong,{children:"Token"}),"."]}),"\n",(0,a.jsx)(i.A,{alt:"Docusaurus themed image",sources:{light:"img/astra-generate-token.png",dark:"img/astra-generate-token.png"},style:{width:"50%",margin:"20px auto"}}),"\n",(0,a.jsx)(t.p,{children:"Now we are all set to start building our RAG application using Astra DB and Langflow."}),"\n",(0,a.jsx)(t.h2,{id:"optional-duplicate-the-langflow-10-huggingface-space",children:"(Optional) Duplicate the Langflow 1.0 HuggingFace Space"}),"\n",(0,a.jsxs)(t.p,{children:["If you haven't already, now is the time to launch Langflow. To make things easier, you can duplicate our ",(0,a.jsx)(t.a,{href:"https://huggingface.co/spaces/Langflow/Langflow-Preview?duplicate=true",children:"Langflow 1.0 Space"})," which sets up a Langflow instance just for you."]}),"\n",(0,a.jsx)(t.h2,{id:"open-the-vector-store-rag-project-in-langflow",children:"Open the Vector Store RAG Project in Langflow"}),"\n",(0,a.jsx)(t.p,{children:"Run Langflow and open the UI."}),"\n",(0,a.jsxs)(t.p,{children:["In the Langflow dashboard, click the ",(0,a.jsx)(t.strong,{children:"New Project"})," button and select the ",(0,a.jsx)(t.strong,{children:"Vector Store RAG"})," project. This will open a starter project with the necessary components to run a RAG application using Astra DB."]}),"\n",(0,a.jsxs)(t.p,{children:["This project consists of two flows. The simpler one is the ",(0,a.jsx)(t.strong,{children:"Ingestion Flow"})," which is responsible for ingesting the documents into the Astra DB database."]}),"\n",(0,a.jsx)(t.p,{children:"Your first step should be to understand what each flow does and how they interact with each other."}),"\n",(0,a.jsx)(t.p,{children:"The ingestion flow consists of:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Files"})," component that uploads a text file to Langflow"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Recursive Character Text Splitter"})," component that splits the text into smaller chunks"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"OpenAIEmbeddings"})," component that generates embeddings for the text chunks"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Astra DB"})," component that stores the text chunks in the Astra DB database"]}),"\n"]}),"\n",(0,a.jsx)(i.A,{alt:"Docusaurus themed image",sources:{light:"img/astra-ingestion-flow.png",dark:"img/astra-ingestion-flow.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,a.jsxs)(t.p,{children:["Now, let's update the ",(0,a.jsx)(t.strong,{children:"Astra DB"})," and ",(0,a.jsx)(t.strong,{children:"Astra DB Search"})," components with the ",(0,a.jsx)(t.strong,{children:"Token"})," and ",(0,a.jsx)(t.strong,{children:"API Endpoint"})," that we generated earlier, and the OpenAI Embeddings components with your OpenAI API key."]}),"\n",(0,a.jsx)(i.A,{alt:"Docusaurus themed image",sources:{light:"img/astra-ingestion-fields.png",dark:"img/astra-ingestion-fields.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,a.jsx)(t.p,{children:"And run it! This will ingest the Text data from your file into the Astra DB database."}),"\n",(0,a.jsx)(i.A,{alt:"Docusaurus themed image",sources:{light:"img/astra-ingestion-run.png",dark:"img/astra-ingestion-run.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,a.jsxs)(t.p,{children:["Now, on to the ",(0,a.jsx)(t.strong,{children:"RAG Flow"}),". This flow is responsible for generating responses to your queries. It will define all of the steps from getting the User's input to generating a response and displaying it in the Playground."]}),"\n",(0,a.jsx)(t.p,{children:"The RAG flow is a bit more complex. It consists of:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Chat Input"})," component that defines where to put the user input coming from the Playground"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"OpenAI Embeddings"})," component that generates embeddings from the user input"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Astra DB Search"})," component that retrieves the most relevant Data from the Astra DB database"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Text Output"})," component that turns the Data into Text by concatenating them and also displays it in the Playground","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["One interesting point you'll see here is that this component is named ",(0,a.jsx)(t.code,{children:"Extracted Chunks"}),", and that is how it will appear in the Playground"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Prompt"})," component that takes in the user input and the retrieved Data as text and builds a prompt for the OpenAI model"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"OpenAI"})," component that generates a response to the prompt"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Chat Output"})," component that displays the response in the Playground"]}),"\n"]}),"\n",(0,a.jsx)(i.A,{alt:"Docusaurus themed image",sources:{light:"img/astra-rag-flow.png",dark:"img/astra-rag-flow.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,a.jsxs)(t.p,{children:["To run it all we have to do is click on the ",(0,a.jsxs)(t.strong,{children:[(0,a.jsx)(t.img,{src:n(4757).A+"",loading:"lazy",alt:"Playground icon",width:"24",height:"24"}),"Playground"]})," button and start interacting with your RAG application."]}),"\n",(0,a.jsx)(i.A,{alt:"Docusaurus themed image",sources:{light:"img/astra-rag-flow-run.png",dark:"img/astra-rag-flow-run.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,a.jsx)(t.p,{children:"This opens the Playground where you can chat with your data."}),"\n",(0,a.jsxs)(t.p,{children:["Because this flow has a ",(0,a.jsx)(t.strong,{children:"Chat Input"})," and a ",(0,a.jsx)(t.strong,{children:"Text Output"})," component, the Panel displays a chat input at the bottom and the Extracted Chunks section on the left."]}),"\n",(0,a.jsx)(i.A,{alt:"Docusaurus themed image",sources:{light:"img/astra-rag-flow-interaction-panel.png",dark:"img/astra-rag-flow-interaction-panel.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,a.jsx)(t.p,{children:"Once we interact with it we get a response and the Extracted Chunks section is updated with the retrieved Data."}),"\n",(0,a.jsx)(i.A,{alt:"Docusaurus themed image",sources:{light:"img/astra-rag-flow-interaction-panel-interaction.png",dark:"img/astra-rag-flow-interaction-panel-interaction.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,a.jsx)(t.p,{children:"And that's it! You have successfully ran a RAG application using Astra DB and Langflow."}),"\n",(0,a.jsx)(t.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"In this guide, we have learned how to run a RAG application using Astra DB and Langflow.\nWe have seen how to create an Astra DB database, import the Astra DB RAG Flows project into Langflow, and run the ingestion and RAG flows."})]})}const g=function(e={}){const{wrapper:t}=Object.assign({},(0,s.RP)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},4757:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtYm90LW1lc3NhZ2Utc3F1YXJlIj4KICA8cGF0aCBkPSJNMTIgNlYySDgiIC8+CiAgPHBhdGggZD0ibTggMTgtNCA0VjhhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMloiIC8+CiAgPHBhdGggZD0iTTIgMTJoMiIgLz4KICA8cGF0aCBkPSJNOSAxMXYyIiAvPgogIDxwYXRoIGQ9Ik0xNSAxMXYyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgo8L3N2Zz4g"},8453:(e,t,n)=>{n.d(t,{RP:()=>i,xA:()=>r});var a=n(6540);const s=a.createContext({});function i(e){const t=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||o:i(e),a.createElement(s.Provider,{value:r},t)}}}]);