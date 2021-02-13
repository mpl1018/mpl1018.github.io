(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{230:function(t,e,o){var content=o(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(64).default)("1930a9a0",content,!0,{sourceMap:!1})},232:function(t,e,o){"use strict";var r=o(230);o.n(r).a},233:function(t,e,o){(e=o(63)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 0s;animation:appear 0s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=e},234:function(t,e,o){"use strict";o.r(e);var r=o(231),n=o.n(r),l={name:"Landing",data:function(){return{isHovered:!1}},computed:{txt:function(){return this.$store.state.english?{buenas:"Hello!  I'm ",typed:{estudiante:"a student",desarrollador:"a developer",deportista:"a sportsman"},quePuedoHacer:"What can I do for you?",contacto:"Email"}:{buenas:"¡Buenas! Yo soy ",typed:{estudiante:"estudiante",desarrollador:"desarrollador",deportista:"deportista"},quePuedoHacer:"¿Qué puedo hacer por ti?",contacto:"Contacto"}}},mounted:function(){new n.a("#typed",{stringsElement:"#typed-strings",typeSpeed:80,loop:!0})},methods:{handleHover:function(t){this.isHovered=t}}},c=o(50),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",{staticStyle:{"min-height":"800px","margin-top":"100px",width:"100%"},attrs:{fluid:""}},[o("Logo"),t._v(" "),o("h1",{staticClass:"title"},[o("p",[t._v(t._s(t.txt.buenas)+" ")]),t._v(" "),o("span",{staticStyle:{padding:"10px"},attrs:{id:"typed"}}),t._v(" "),o("div",{attrs:{id:"typed-strings"}},[o("p",[o("strong",[t._v("Marco Patiño")])]),t._v(" "),o("p",[o("strong",[t._v(t._s(t.txt.typed.estudiante))])]),t._v(" "),o("p",[o("strong",[t._v(t._s(t.txt.typed.desarrollador))])]),t._v(" "),o("p",[o("strong",[t._v(t._s(t.txt.typed.deportista))])])])]),t._v(" "),o("h3",{staticClass:"subtitle"},[t._v(t._s(t.txt.quePuedoHacer)+" ")]),t._v(" "),o("div",{staticClass:"links"},[o("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        LinkedIn\n        ")]),t._v(" "),o("a",{staticClass:"button--pink",attrs:{href:"mailto: marco.patino@estudiantat.upc.edu",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.txt.contacto)+"\n        ")]),t._v(" "),o("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        GitHub\n        ")])]),t._v(" "),o("div",[o("div",{directives:[{name:"b-hover",rawName:"v-b-hover",value:t.handleHover,expression:"handleHover"}],staticStyle:{"margin-top":"100px"}},[o("a",{staticStyle:{color:"#000"},attrs:{href:"#Works"}},[t.isHovered?o("b-icon",{attrs:{icon:"arrow-down",scale:"5"}}):o("b-icon",{attrs:{icon:"arrow-down",scale:"3"}})],1)])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:o(239).default})},235:function(t,e,o){"use strict";o.r(e);var r={computed:{txt:function(){return this.$store.state.english?{proyectos:"Featured projects",amazon:{title:"Automated Amazon Affiliate Store",des:"This project is a completely automated Amazon Affiliate Store. In order to keep all the products updated I made a python web scraper script that runs on a cronjob every day on a Google Cloud Platform server. The same script scrapes Amazon products and takes their Affiliate url and saves it on a firebase database."},subjects:{title:"Subject Stacks",des:"Subject stacks is a tool I needed during mi course. I needed to organize mi work and tasks, so I decided to build my own tool customized as I wanted. 5 different stacks each one representing a subject and all its corresponding work. At the moment, the data is only saved on the local storage."},generator:{title:"Word Generator",des:"When I coded this, all my friends were passionate about rap battles, but most of them were awful 😂. In order to help my friends, I tried to make a rap battle trainer so they could improve with their rap and I could improve with my code."},quijote:{title:"Quijote tweets",des:"This belongs the time I was passionate about python bots. Instagram bots, web scrapers... This is just an small but interesting project. This is a twitter bot that tweets a phrase from de Quijote every minute."},huffman:{title:"Text Encryption with Huffman Compression in C++ ",des:"This is an University Project. The goal is to encrypt a text using 0's and 1's using the Huffman algorithm to create a bintree."},finder:{title:"Interactive root finder Android app",des:"It allows you to see how Bisection, Secant and Newton Raphson method work."}}:{proyectos:"Proyectos destacados",amazon:{title:"Automated Amazon Affiliate Store",des:"Este proyecto consiste en una tienda de afiliados de Amazon completamente automatizada. Para conseguir manternerla actualizada he programado un web scraper hosteado en una máquina virtual Google Cloud Platform y que se ejecuta cada día en un cronjob. El mismo script sube los productos de amazon a una base de datos en Firebase, la cual usa la aplicación frontend en Vue para coger sus datos."},subjects:{title:"Subject Stacks",des:"Subject stacks era una herramienta que necesitaba durante mi curso escolar. Necesitaba organizar mi trabajo y tareas, así que decidí programar mi propia herramienta y personalizarla como quería. Diferentes pilas de tareas, cada una representando una asignatura y las tareas de esta. Por el momento, los datos solo se guardan en el navegador, pero una próxima actualización es guardar en una bd."},generator:{title:"Word Generator",des:"Cuando programé esto todos mis amigos estaban entusiasmados con las batallas de rap, era divertido, pero casi todos lo hacían fatal 😂. Para intentar ayudar a mis amigos, hice un 'entrenador de batallas de rap'. "},quijote:{title:"Quijote tweets",des:"Este proyecto pertenece a la época en la que estaba entusiasmado con los bots. Bots de instagram, web scrapers... Esto es un bot de twitter que cada minuto tuitea una frase del Quijote. "},huffman:{title:"Encriptador de textos usando la compresión de Huffman en C++ ",des:"Esto es un proyecto universitario. El objetivo es encriptar un texto usando 0's y 1's usando el algoritmo de Huffman para crear un árbol binario."},finder:{title:"Interactive root finder Android app",des:"Te permite ver como funciona el método de Bisección, Secante y Newton Raphson."}}}}},n=o(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"min-height":"1000px","padding-top":"50px"},attrs:{id:"Works"}},[o("div",{staticClass:"title"},[t._v(t._s(this.txt.proyectos))]),t._v(" "),o("b-tabs",{attrs:{"content-class":""}},[o("b-tab",{attrs:{title:"2020",active:""}},[o("Project",{attrs:{title:t.txt.amazon.title,text:t.txt.amazon.des,live:"https://mascarillavirus.com/#/",repo:"https://github.com/mpl1018/Automated-Amazon-Affiliate-Store"}}),t._v(" "),o("Project",{attrs:{title:t.txt.subjects.title,text:t.txt.subjects.des,live:"https://mpl1018.github.io/subject-stacks/",repo:"https://github.com/mpl1018/subject-stacks"}}),t._v(" "),o("Project",{attrs:{title:t.txt.generator.title,text:t.txt.generator.des,live:"https://mpl1018.github.io/Word-Generator/",repo:"https://github.com/mpl1018/Word-Generator"}})],1),t._v(" "),o("b-tab",{attrs:{title:"2019"}},[o("Project",{attrs:{title:t.txt.quijote.title,text:t.txt.quijote.des,repo:"https://github.com/mpl1018/Quijote-tweets"}}),t._v(" "),o("Project",{attrs:{title:t.txt.huffman.title,text:t.txt.huffman.des,repo:"https://github.com/mpl1018/ENCRIPTADOR-DE-TEXTOS"}}),t._v(" "),o("Project",{attrs:{title:t.txt.finder.title,text:t.txt.finder.des,repo:"https://github.com/mpl1018/Interactive-Root-Finder"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Project:o(237).default})},236:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{width:0}},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.width=window.innerWidth}}},n=o(50),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"min-height":"1000px","padding-top":"50px"},attrs:{id:"CV"}},[e("div",{staticClass:"title"},[this._v("Currículum Vitae")]),this._v(" "),this.width>600?e("b-tabs",{attrs:{vertical:"",pills:"",primary:"",info:"","nav-wrapper-class":"w-5"}},[e("ResumeContent")],1):e("b-tabs",{attrs:{primary:"",info:""}},[e("ResumeContent")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ResumeContent:o(238).default})},237:function(t,e,o){"use strict";o.r(e);var r={props:["title","text","live","repo"]},n=o(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",{staticClass:"mb-4 mt-4",attrs:{title:this.title,tag:"article"}},[o("b-card-text",[t._v("\n"+t._s(this.text)+"               \n")]),t._v(" "),null!=this.live?o("b-button",{staticStyle:{width:"100%","max-width":"20rem"},attrs:{href:this.live,target:"_blank",rel:"nofollow",variant:"primary"}},[t._v("Live")]):t._e(),t._v(" "),null!=this.repo?o("b-button",{staticStyle:{width:"100%","max-width":"20rem"},attrs:{href:this.repo,target:"_blank",rel:"nofollow",variant:"outline-primary"}},[t._v("Repositorio")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},238:function(t,e,o){"use strict";o.r(e);var r={computed:{txt:function(){return this.$store.state.english?{experiencia:{title:"EXPERIENCE",Alhilodemiabuela:{title:"Alhilodemiabuela.com",subtitle:"2020-Actualidad",des:"Cofundador, desarrollador y administrador del ecommerce Al hilo de mi abuela, con el objetivo de reducir la contaminación producida por material quirúrgico desechable."},fibvisiona:{title:"FIBVisiona",subtitle:"2019-Actualidad",des:"Organizando eventos que buscan conectar a estudiantes con empresas del sector tecnológico. "},_4yfn:{title:"4YFN",subtitle:"2019",des:"Volunteer Staff at the 4YFN event"},fuocco:{title:"FUOCCO",subtitle:"June-September 2019",des:"Mobile app developer (flutter)"},fundacion:{title:"Fundación Javier Berche",subtitle:"November 2019",des:"Mathematics classes for children with high capacities"},conrazones:{title:"Conrazones",subtitle:"2014-2017",des:"Creation and administration of the online store www.conrazones-troco.org, where second-hand items were exchanged for food for the “Conrazones” association"}},academia:{title:"BACKGROUD",upc:{title:"Computer Engineering | UPC",subtitle:"2018-2022",des:"Bachelor's degree in Computer Engineering. Polytechnic University of Catalonia."},android:{title:"Android Course | UPC",subtitle:"2018",des:"Android Course at the Polytechnic University of Catalonia (40 hours)"},"sangriña":{title:"IES A Sangriña",subtitle:"2018",des:"Technology and Health Baccalaureate. IES A Sangriña. 13.08/14.00. "},becasEU:{title:"Becas Europa",subtitle:"2018",des:"“Becas Europa XII” Scholarship program. 0.001% acceptance rate."},science:{title:"Video Game design and animation | UPC",subtitle:"2016",des:'Science Summer Program: "Video Game design and animation".  Polytechnic University of Catalonia.'}},idiomas:{title:"LANGUAGES","español":{title:"Spanish",star:100},gallego:{title:"Galician",star:100},ingles:{title:"English",star:90},frances:{title:"French",star:40},catalan:{title:"Catalan",star:50},portugues:{title:"Portuguese",star:70}},premios:{title:"AWARDS",matricula:{title:"UPC",subtitle:"2019",des:"Maximum grade with honors at mathematics"},wec:{title:"EBEC",subtitle:"2018",des:"Finalist in the Week of Engineering Competition 2018, Barcelona."},record:{title:"Municipality of A Guarda",subtitle:"2018",des:"Best academic record"},uwc:{title:"United World College",subtitle:"2017",des:"Finalist in the 2017 Selection Process of United World Colleges."},_3D:{title:"D3MOBILE",subtitle:"2017",des:"Awarded in the world championship of 3D modeling D3MOBILE 2017, with the sponsorship of UNESCO."},rally:{title:"Institut de Recherche pour l'Enseignement des Sciences – Toulouse",subtile:"2014",des:"International Mathematical and Scientific Rally. 1st place. Toulouse."},tetoca4:{title:"ATRESMEDIA",subtitle:"2014",des:"Second place at the national contest 'Te Toca 2014' organized by the Atresmedia Foundation, in the category of 'Petition to the adult world' with the video 'THEY CALL IT EDUCATION' (“LO LLAMAN EDUCACIÓN”). Link: https://bit.ly/2lU47lK"},tetoca3:{title:"ATRESMEDIA",subtitle:"2013",des:"'Te Toca' Contest. 2nd place. Organized by the Atresmedia Foundation, in the category of 'Petition to the adult world' with the video 'PARENTS AND TEACHERS, IT’S YOUR TURN!' (“PADRES Y PROFESORES, OS TOCA!”) Link: https://bit.ly/2kkyuS8"}},habilidades:{title:"SKILLS",vue:{title:"Vue.js",star:90},c:{title:"C++",star:100},python:{title:"Python",star:60},javascript:{title:"Javascript",star:70},firebase:{title:"Firebase",star:70},HTML:{title:"HTML",star:70},GPC:{title:"GPC",star:40},CSS:{title:"CSS",star:30},JAVA:{title:"JAVA",star:80},reactNative:{title:"React Native",star:30},react:{title:"React",star:30}}}:{experiencia:{title:"EXPERIENCIA",Alhilodemiabuela:{title:"Alhilodemiabuela.com",subtitle:"2020-Actualidad",des:"Cofundador, desarrollador y administrador del ecommerce Al hilo de mi abuela, con el objetivo de reducir la contaminación producida por material quirúrgico desechable."},fibvisiona:{title:"FIBVisiona",subtitle:"2019-Actualidad",des:"Organizando eventos que buscan conectar a estudiantes con empresas del sector tecnológico. "},_4yfn:{title:"4YFN",subtitle:"2019",des:"Volunteer Staff at the 4YFN event"},fuocco:{title:"FUOCCO",subtitle:"June-September 2019",des:"Mobile app developer (flutter)"},fundacion:{title:"Fundación Javier Berche",subtitle:"November 2019",des:"Mathematics classes for children with high capacities"},conrazones:{title:"Conrazones",subtitle:"2014-2017",des:"Creation and administration of the online store www.conrazones-troco.org, where second-hand items were exchanged for food for the “Conrazones” association"}},academia:{title:"BACKGROUD",upc:{title:"Computer Engineering | UPC",subtitle:"2018-2022",des:"Bachelor's degree in Computer Engineering. Polytechnic University of Catalonia."},android:{title:"Android Course | UPC",subtitle:"2018",des:"Android Course at the Polytechnic University of Catalonia (40 hours)"},"sangriña":{title:"IES A Sangriña",subtitle:"2018",des:"Technology and Health Baccalaureate. IES A Sangriña. 13.08/14.00. "},becasEU:{title:"Becas Europa",subtitle:"2018",des:"“Becas Europa XII” Scholarship program. 0.001% acceptance rate."},science:{title:"Video Game design and animation | UPC",subtitle:"2016",des:'Science Summer Program: "Video Game design and animation".  Polytechnic University of Catalonia.'}},idiomas:{title:"LANGUAGES","español":{title:"Español",star:100},gallego:{title:"Gallego",star:100},ingles:{title:"Inglés",star:90},frances:{title:"Francés",star:40},catalan:{title:"Catalán",star:50},portugues:{title:"Portugués",star:70}},premios:{title:"AWARDS",matricula:{title:"UPC",subtitle:"2019",des:"Maximum grade with honors at mathematics"},wec:{title:"EBEC",subtitle:"2018",des:"Finalist in the Week of Engineering Competition 2018, Barcelona."},record:{title:"Municipality of A Guarda",subtitle:"2018",des:"Best academic record"},uwc:{title:"United World College",subtitle:"2017",des:"Finalist in the 2017 Selection Process of United World Colleges."},_3D:{title:"D3MOBILE",subtitle:"2017",des:"Awarded in the world championship of 3D modeling D3MOBILE 2017, with the sponsorship of UNESCO."},rally:{title:"Institut de Recherche pour l'Enseignement des Sciences – Toulouse",subtile:"2014",des:"International Mathematical and Scientific Rally. 1st place. Toulouse."},tetoca4:{title:"ATRESMEDIA",subtitle:"2014",des:"Second place at the national contest 'Te Toca 2014' organized by the Atresmedia Foundation, in the category of 'Petition to the adult world' with the video 'THEY CALL IT EDUCATION' (“LO LLAMAN EDUCACIÓN”). Link: https://bit.ly/2lU47lK"},tetoca3:{title:"ATRESMEDIA",subtitle:"2013",des:"'Te Toca' Contest. 2nd place. Organized by the Atresmedia Foundation, in the category of 'Petition to the adult world' with the video 'PARENTS AND TEACHERS, IT’S YOUR TURN!' (“PADRES Y PROFESORES, OS TOCA!”) Link: https://bit.ly/2kkyuS8"}},habilidades:{title:"SKILLS",vue:{title:"Vue.js",star:90},c:{title:"C++",star:100},python:{title:"Python",star:60},javascript:{title:"Javascript",star:70},firebase:{title:"Firebase",star:70},HTML:{title:"HTML",star:70},GPC:{title:"GPC",star:40},CSS:{title:"CSS",star:30},JAVA:{title:"JAVA",star:80},reactNative:{title:"React Native",star:30},react:{title:"React",star:30}}}}}},n=o(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-tab",{attrs:{title:this.txt.experiencia.title,active:""}},t._l(this.txt.experiencia,(function(e){return null!=e.subtitle?o("b-card",{staticClass:"mb-4 mt-4",attrs:{title:e.title,"sub-title":e.subtitle,tag:"article"}},[o("b-card-text",[t._v("\n        "+t._s(e.des)+"\n      ")])],1):t._e()})),1),t._v(" "),o("b-tab",{attrs:{title:this.txt.academia.title}},t._l(this.txt.academia,(function(e){return null!=e.subtitle?o("b-card",{staticClass:"mb-4 mt-4",attrs:{title:e.title,"sub-title":e.subtitle,tag:"article"}},[o("b-card-text",[t._v("\n        "+t._s(e.des)+"\n      ")])],1):t._e()})),1),t._v(" "),o("b-tab",{attrs:{title:this.txt.idiomas.title}},t._l(this.txt.idiomas,(function(e,r){return"title"!=r?o("div",{staticStyle:{"margin-top":"30px"}},[o("b-row",{staticClass:"mb-4"},[o("b-col",[o("strong",[t._v(" "+t._s(e.title)+" ")])]),t._v(" "),o("b-col",[o("b-progress",{staticClass:"w-100 mb-2",attrs:{value:e.star,variant:"warning"}})],1)],1)],1):t._e()})),0),t._v(" "),o("b-tab",{attrs:{title:this.txt.premios.title}},t._l(this.txt.premios,(function(e){return null!=e.subtitle?o("b-card",{staticClass:"mb-4 mt-4",attrs:{title:e.title,"sub-title":e.subtitle,tag:"article"}},[o("b-card-text",[t._v("\n        "+t._s(e.des)+"\n      ")])],1):t._e()})),1),t._v(" "),o("b-tab",{attrs:{title:this.txt.habilidades.title}},t._l(this.txt.habilidades,(function(e,r){return"title"!=r?o("div",{staticStyle:{"margin-top":"30px"}},[o("b-row",{staticClass:"mb-4"},[o("b-col",[o("strong",[t._v(" "+t._s(e.title)+" ")])]),t._v(" "),o("b-col",[o("b-progress",{staticClass:"w-100 mb-2",attrs:{value:e.star,variant:"warning"}})],1)],1)],1):t._e()})),0)],1)}),[],!1,null,null,null);e.default=component.exports},239:function(t,e,o){"use strict";o.r(e);o(232);var r=o(50),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"NuxtLogo",attrs:{title:"Patiño means little duck in Galician, my language",width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M455.17,430.2c-0.22,34-7.41,62.84-27.7,87.33-17.2,20.75-39.71,33.25-65.46,39.73-40.07,10.08-80.23,11.85-119.86-2.32-22.61-8.08-41.8-21.1-55.74-41.08-21.07-30.2-16.41-67.47,11.32-91.7a132.7,132.7,0,0,0,14.92-14.63c5-6,4-11.11-.05-17.77-5.1-8.48-12.74-9.75-21.58-11.12a222.11,222.11,0,0,1-35.57-9.09c-9.36-3.11-13.71-11-12.27-18.81,0.61-3.32,1.9-5,5.9-5a84.11,84.11,0,0,0,39.76-9.9,10.1,10.1,0,0,0,4.3-5.33c8.5-26.16,24.82-44.26,52.46-50,18.28-3.82,36.18-1.61,52.84,7.13,21.83,11.45,30.9,34.07,29.26,57.42A71.29,71.29,0,0,1,314,382.45c-10.55,14.61-3.91,21.49,9.94,25.09,15.64,4.06,31.4,2.62,47.07-.12a177.1,177.1,0,0,0,59.58-21.82,71.42,71.42,0,0,1,8.47-4.22c6.36-2.67,8.09-2.17,9.85,4.35a188.06,188.06,0,0,1,4.87,23.87C454.8,417.33,454.85,425.2,455.17,430.2ZM218.79,328.56l0.91,0.52c0.11,1.15.14,2.32,0.35,3.45,1.07,5.62,6.09,9.81,10.67,9,5.84-1.09,9.5-7.54,8.41-14.83-0.89-6-5.66-10.49-10.55-9.65-1.69.29-3.78,1.11-4.7,2.39C221.85,322.22,220.45,325.48,218.79,328.56Z",transform:"translate(-74 -237.92)"}}),this._v(" "),e("animate",{attrs:{attributeName:"fill",attributeType:"CSS",values:"#35495e;#2cc9b2;#d413d4;#35495e",dur:"10s",repeatCount:"indefinite"}}),this._v(" "),e("animateTransform",{attrs:{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 0 0",to:"360 0 0",dur:"0.5s",repeatCount:"2"}})],1)}),[],!1,null,null,null);e.default=component.exports},240:function(t,e,o){"use strict";o.r(e);var r={head:function(){return{title:"Marco Patiño"}}},n=o(50),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",[e("Landing"),this._v(" "),e("Works"),this._v(" "),e("Resume")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Landing:o(234).default,Works:o(235).default,Resume:o(236).default})}}]);