(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,function(e,t,c){},,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),i=c(9),o=c.n(i),r=(c(16),c(3)),l=c(4),d=c(2),j=c(6),h=c(5),u=(c(17),c(18),function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var a;return Object(r.a)(this,c),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(d.a)(a)),a}return Object(l.a)(c,[{key:"handleClick",value:function(e){e.preventDefault(),this.props.handler(this.props.title)}},{key:"render",value:function(){return this.props.display?Object(a.jsx)("li",{className:"Selected",onClick:this.handleClick,toggled:this.props.toggled,children:this.props.title}):Object(a.jsx)("li",{onClick:this.handleClick,toggled:this.props.toggled,children:this.props.title})}}]),c}(s.a.Component)),b=c.p+"static/media/menu.a75428f4.svg",m=[{name:"Home"},{name:"About Me"},{name:"Socials"}],p=function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var a;return Object(r.a)(this,c),(a=t.call(this,e)).handler=a.handler.bind(Object(d.a)(a)),a.state={selected:"Home",menuToggle:"0"},a}return Object(l.a)(c,[{key:"handler",value:function(e){this.setState({selected:e,menuToggle:"0"}),this.props.handler(e)}},{key:"render",value:function(){var e=this,t=function(t){var c=t.items;return Object(a.jsx)(a.Fragment,{children:c.map((function(t){return e.state.selected===t.name?Object(a.jsx)(u,{title:t.name,handler:e.handler,display:"selected",toggled:e.state.menuToggle},t.name):Object(a.jsx)(u,{title:t.name,handler:e.handler,toggled:e.state.menuToggle},t.name)}))})};return Object(a.jsxs)("div",{className:"Navigation",toggled:this.state.menuToggle,children:[Object(a.jsx)("div",{className:"MenuButtonParent",toggled:this.state.menuToggle,children:Object(a.jsx)("img",{src:b,className:"MenuButton",onClick:function(){return e.setState({selected:e.state.selected,menuToggle:"1"})},toggled:this.state.menuToggle})}),Object(a.jsx)("ul",{className:"NavListParent",toggled:this.state.menuToggle,children:Object(a.jsx)(t,{items:m})})]})}}]),c}(n.Component),O=(c(19),c(7),c.p+"static/media/lachlan_peacock_head.1acba7af.jpeg");var g=function(e){return Object(a.jsxs)("div",{className:"Home",children:[Object(a.jsxs)("div",{className:"Text",children:[Object(a.jsx)("h2",{children:"Hi, I'm Lachie"}),Object(a.jsx)("h3",{children:"Software Developer based in Melbourne, Australia"})]}),Object(a.jsx)("div",{className:"Photo",children:Object(a.jsx)("img",{src:O,alt:"me, Lachie",className:"PhotoImg"})})]})};var x=function(e){return Object(a.jsx)("div",{className:"AboutMe",children:Object(a.jsxs)("div",{className:"AboutMeText",children:[Object(a.jsx)("h2",{children:"Who am I?"}),Object(a.jsx)("p",{className:"AboutMeText",children:"I'm a Monash University Graduate (Bachelor of Information Technology, Software Development) with a passion for technology and coding."}),Object(a.jsxs)("p",{className:"AboutMeText",children:["I have over 3 years professional experience, and have worked on a range of projects with emerging technologies, such as Chatbots and Robotic Process Automation. My personal projects have seen me branch out to Front-End Development and Mobile Applications.",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"If you would like to discuss my portfolio of projects further, please reach out on social media!"]}),Object(a.jsx)("p",{className:"AboutMeText",children:"Besides technology, I'm a keen musician and music-lover."})]})})},f=c.p+"static/media/github.b7bd79ba.svg",v=c.p+"static/media/salesforce.dc44abd9.svg",k=c.p+"static/media/linkedin.34288b89.svg",N=c.p+"static/media/spotify.0d6bff6b.svg";function C(e){return Object(a.jsxs)("div",{className:"SocialItem",children:[Object(a.jsx)("img",{src:e.img,className:"SocialImage",alt:"Social Media Platform Logo"}),Object(a.jsx)("a",{href:e.url,target:"blank",className:"SocialLink",children:e.name})]})}var y=function(e){return Object(a.jsx)("div",{className:"Socials",children:Object(a.jsxs)("ul",{className:"SocialList",children:[Object(a.jsx)(C,{name:"l-peacock on GitHub",url:"https://github.com/l-peacock",img:f}),Object(a.jsx)(C,{name:"Lachlan Peacock on Trailblazer",url:"https://trailblazer.me/id/lachlan-peacock",img:v}),Object(a.jsx)(C,{name:"Lachlan Peacock on LinkedIn",url:"https://www.linkedin.com/in/lachlan-peacock/",img:k}),Object(a.jsx)(C,{name:"lachie_peacock on Spotify",url:"https://open.spotify.com/user/lachie_peacock",img:N})]})})};var L=function(e){return Object(a.jsx)("div",{className:"Portfolio",children:Object(a.jsx)("p",{className:"AboutMeText",children:"I don't currently have any public portfolio pieces, however I have a full stack iOS application currently in development. Reach out for a demo!"})})};var I=function(e){return Object(a.jsx)("div",{className:"GetInTouch",children:Object(a.jsx)("p",{children:"Get in touch form"})})};var T={home:Object(a.jsx)(g,{}),"about me":Object(a.jsx)(x,{}),socials:Object(a.jsx)(y,{}),portfolio:Object(a.jsx)(L,{}),"get in touch":Object(a.jsx)(I,{})},S=function(e){var t=e.page.toLowerCase();return console.log(t),Object(a.jsx)("div",{className:"Content",children:T[t]})},P=c(10),w=(c(20),c.p+"static/media/up.1e7b1345.svg");var M=function(e){var t=s.a.useState("0"),c=Object(P.a)(t,2),n=c[0],i=c[1],o=(new Date).getFullYear();return Object(a.jsxs)("div",{className:"Popup",onClick:function(){"0"===n&&i("1")},expanded:n,children:[Object(a.jsxs)("p",{className:"PopupContent",expanded:n,children:["This site was created using create-react-app. ",Object(a.jsx)("br",{}),"All components were created by me. ",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Icons: ",Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://iconscout.com/icons/linkedin",target:"blank",className:"CreditLink",children:"Linkedin Icon"})," by ",Object(a.jsx)("a",{href:"https://iconscout.com/contributors/luc-chaffard",className:"CreditLink",children:"Luc Chaffard"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://iconscout.com/icons/spotify",target:"blank",className:"CreditLink",children:"Spotify Logo Icon"})," by ",Object(a.jsx)("a",{href:"https://iconscout.com/contributors/alexis-doreau",target:"blank",className:"CreditLink",children:"Alexis Doreau"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://iconscout.com/icons/salesforce",target:"blank",className:"CreditLink",children:"Salesforce Icon"})," by ",Object(a.jsx)("a",{href:"https://iconscout.com/contributors/icons8",target:"blank",className:"CreditLink",children:"Icons8"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://iconscout.com/icons/up",target:"blank",className:"CreditLink",children:"Up Icon"})," by ",Object(a.jsx)("a",{href:"https://iconscout.com/contributors/ricki-tri-putra",target:"blank",className:"CreditLink",children:"Ricki Tri Putra"}),Object(a.jsx)("br",{}),Object(a.jsx)("a",{href:"https://iconscout.com/icons/menu-1768000",target:"blank",className:"CreditLink",children:"Menu Icon"})," by ",Object(a.jsx)("a",{href:"https://iconscout.com/contributors/eva-icons",target:"blank",className:"CreditLink",children:"Eva Icons"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"\xa9 Lachlan Peacock ",o]}),Object(a.jsx)("button",{className:"PopupCloseButton",onClick:function(){return i("0")},expanded:n,children:"X"}),Object(a.jsx)("p",{className:"PopupTitle",onClick:function(){return i("1")},expanded:n,children:"About this site "}),Object(a.jsx)("img",{src:w,className:"PopupOpenButton",onClick:function(){return i("1")},expanded:n})]})},A=(c(21),function(e){Object(j.a)(c,e);var t=Object(h.a)(c);function c(e){var a;return Object(r.a)(this,c),(a=t.call(this,e)).handler=a.handler.bind(Object(d.a)(a)),a.state={selected:"Home"},a}return Object(l.a)(c,[{key:"handler",value:function(e){this.setState({selected:e})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{handler:this.handler}),Object(a.jsx)("header",{className:"App-content",children:Object(a.jsx)(S,{page:this.state.selected})}),Object(a.jsx)(M,{})]})}}]),c}(n.Component)),B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,23)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root")),B()}],[[22,1,2]]]);
//# sourceMappingURL=main.45502995.chunk.js.map