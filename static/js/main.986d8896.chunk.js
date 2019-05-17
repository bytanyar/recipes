(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t.p+"static/media/amaretto.fe214cc2.jpeg"},22:function(e){e.exports={recipes:[{id:1,name:"Alfredo Sauce",prepTime:2,cookTime:5,ovenTemp:null,yeilds:"2 servings",image:"http://www.bytanyar.com/recipes/images/alfredo-sauce.jpg",ingredients:[{id:1,qty:"4",unit:"Tbsp",item:"parmesan cheese",description:"shredded"},{id:2,qty:"2",unit:"Tbsp",item:"butter",description:""},{id:3,qty:"1/8",unit:"cup",item:"heavy cream",description:""},{id:4,qty:"1",unit:"tsp",item:"garlic",description:"minced"},{id:5,qty:"",unit:"",item:"Italian spices",description:""}],instructions:["Melt butter","Lightly saute garlic in butter","Add heavy cream and spices","Stir","Bring to boil","Add parmesan cheese","Constantly stirring, reduce heat and thicken to preference"]},{id:2,name:"Amazing Chicken",prepTime:10,cookTime:30,ovenTemp:425,yeilds:"4 servings",image:"http://www.bytanyar.com/recipes/images/amazing-chicken.jpg",ingredients:[{id:1,qty:"4",unit:"",item:"chicken breast",description:"boneless, skinless, halves"},{id:2,qty:"",unit:"",item:"salt and pepper",description:"to taste"},{id:3,qty:"1/2",unit:"cup",item:"mayonnaise",description:""},{id:4,qty:"2",unit:"cup",item:"bread crumbs",description:"Italian seasoned"}],instructions:["Preheat oven","Grease shallow baking dish","Season chicken breasts","Coat chicken on all sides with mayonnaise","Roll chicken in bread crumbs until thoroughly coated","Place chicken in prepared dish","Bake uncovered 30 minutes or until chicken is no longer pink inside and juices run clear"]}]}},27:function(e,n,t){e.exports=t.p+"static/media/alfredo-sauce.af8a7793.jpg"},28:function(e,n,t){e.exports=t.p+"static/media/amazing-chicken.3888d290.jpg"},29:function(e,n,t){e.exports=t.p+"static/media/tabletop.62573cb8.jpg"},35:function(e,n,t){e.exports=t(56)},40:function(e,n,t){},41:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t.n(i),c=t(18),r=t.n(c),o=(t(40),t(6)),l=t(7),s=t(11),d=t(8),m=t(12),u=t(16),p=t(5),g=(t(41),t(27)),h=t.n(g),b=t(19),v=t.n(b),f=t(28),E=t.n(f),x=t(29),w=t.n(x),y=t(9),k=t(10);function N(){var e=Object(y.a)(["\n    min-height: 150vh;\n\n    img {\n        width: 100vw;\n    }\n    .chicken {\n        position: absolute;\n        top: 140px;\n    }\n    .sauce {\n        position: absolute;\n        z-index: 5;\n\n        h2 {\n            color: white;\n            font-size: 2rem;\n            margin: 0 15px;\n            padding-bottom: 5vh;\n            text-align: right;\n            text-shadow: 2px 2px 0 #333;\n        }\n    }\n    .tabletop {\n        background-size: 100vw;\n        height: 85vh;\n        position: relative;\n        top: 40vh;\n    }\n    .drink {\n        position: absolute;\n        z-index: 5;\n\n        h3 {\n            color: white;\n            font-size: 2rem;\n            margin: 0 15px;\n            padding-bottom: 20vh;\n            text-align: center;\n            text-shadow: 2px 2px 0 #333;\n        }\n    }\n    @media only screen and (min-width: 400px){\n        .chicken {\n            top: 150px;\n        }\n        .sauce {\n            top: 200px;\n            \n            h2 {\n                font-size: 2rem;\n                margin: 10vh 12.5%;\n            }\n        }\n        .tabletop {\n            top: 375px;\n        }\n        .drink {\n            h3 {\n                font-size: 2rem;\n                margin: 0 12.5%;\n                padding-bottom: 10vw;\n            }\n        }\n    }\n    @media only screen and (min-width: 768px){\n        .tabletop {\n            height: 250vh;\n            top: 900px;\n\n            h3 {\n                font-size: 4rem;\n                margin: 0 25%;\n            }\n        }\n        .sauce {\n            h2 {\n                font-size: 3rem;\n                margin: 20vh 12.5%;\n            }\n        }\n        .drink {\n            top: 2000px;\n        }\n    }\n"]);return N=function(){return e},e}var I=k.a.div(N()),j=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this,e))).state={showSauce:!1,showDrink:!1},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this._pastaOnScroll),window.addEventListener("scroll",this._drinkOnScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this._pastaOnScroll),window.removeEventListener("scroll",this._drinkOnScroll)}},{key:"_pastaOnScroll",value:function(){var e=document.getElementById("sauce"),n=0-window.pageYOffset/1.2,t=window.innerWidth;e.style.top=.5625*t-50+n+"px"}},{key:"_drinkOnScroll",value:function(){var e=document.getElementById("drink"),n=0-window.pageYOffset/2,t=window.innerWidth;e.style.top=1.5*t+300+n+"px"}},{key:"render",value:function(){var e={backgroundImage:"url(".concat(w.a,")")};return a.a.createElement(I,{className:"home"},a.a.createElement("div",{id:"chicken",className:"chicken"},a.a.createElement("img",{src:E.a,alt:"chicken"})),a.a.createElement("div",{id:"sauce",className:"sauce"},a.a.createElement("div",null,a.a.createElement("h2",null,"What\u2019s for dinner?")),a.a.createElement("img",{src:h.a,alt:"sauce"})),a.a.createElement("div",{id:"tabletop",className:"tabletop",style:e}),a.a.createElement("div",{id:"drink",className:"drink"},a.a.createElement("h3",null,"It\u2019s gotta be something good!"),a.a.createElement("img",{src:v.a,alt:"drink"})))}}]),n}(i.Component),O=t(15),R=t(22);function z(){var e=Object(y.a)(["\n    .recipe-container {\n        background-color: beige;\n        border-radius: 20px;\n        left: 12.5%;\n        margin: 5vh auto;\n        max-height: 90vh;\n        max-width: 500px;\n        padding: 5px 15px 15px;\n        position: absolute;\n        right: 12.5%;\n        top: 5vh;\n        width: 75%;\n        z-index: 750;\n    }\n    .close-x {\n        background-color: #fff;\n        border: 1px solid #333;\n        border-radius: 50%;\n        padding: 0 5px;\n        position: absolute;\n        right: 20px;\n        text-align: left;\n        top: 10px;\n        width: 20px;\n    }\n    .close-x:hover {\n        background-color: blanchedalmond;\n    }\n"]);return z=function(){return e},e}var B=k.a.div(z()),S=(t(46),function(e){var n=e.recipe,t=n?n.ingredients.map(function(e){return a.a.createElement("li",{key:e.id,className:"ingredients"},e.qty," ",e.unit," ",e.item,", ",e.description)}):null;return a.a.createElement("ul",{className:"ingredients-list"},t)}),q=(t(47),function(e){var n=e.recipe,t=n?n.instructions.map(function(e,n){return a.a.createElement("li",{key:n,className:"instructions"},e)}):null;return a.a.createElement("ul",{className:"instructions-list"},t)}),T=function(e){var n=e.bgImage,t=e.closeRecipe,i=e.recipe,c={backgroundImage:"url(".concat(n,")")};return console.log(n),a.a.createElement(B,{className:"recipe-modal-container"},a.a.createElement("div",{className:"recipe-container",style:n?c:null},a.a.createElement("p",{className:"close-x",onClick:t},"x"),a.a.createElement("h2",null,i.name),a.a.createElement(S,{recipe:i}),a.a.createElement(q,{recipe:i})))};function C(){var e=Object(y.a)(["\n    height: 100vh;\n    margin: -20px auto 0;\n    max-width: 1200px;\n    padding-top: 20px;\n\n    * {\n        box-sizing: border-box;\n    }\n    .recipe-modal-bg {\n        background-color: rgba(0, 0, 0, 0.5);\n        bottom: 0;\n        left: 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        z-index: 100;\n    }\n    .background-fixed img {\n        max-width: 1200px;\n        overflow-y: hidden;\n        transition-duration: 0.5s;\n        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n        width: 100vw;\n        z-index: 1;\n    }\n    .recipes-list {\n        background-color: rgba(255, 255, 255, 0.5);\n        border: 1px solid #333;\n        margin: 20px;\n        margin-block-end: 0;\n        margin-block-start: 0;\n        padding-inline-start: 0;\n        position: relative;\n        z-index: 200;\n    }\n    .recipe {\n        display: flex;\n        justify-content: space-between;\n        list-style: none;\n        padding: 5px 0;\n        text-align: left;\n\n        &:nth-child(2n){\n            background-color: beige;\n        }\n        &:hover {\n            background-color: blanchedalmond;\n        }\n        &.active {\n            background-color: lightblue;\n        }\n    }\n    .name {\n        font-size: 18px;\n        max-width: 350px;\n        padding-left: 20px;\n        width: 45%;\n    }\n    .time {\n        max-width: 150px;\n        width: 20%;\n    }\n    .main-ingredient {\n        max-width: 250px;\n        width: 35%;\n    }\n"]);return C=function(){return e},e}var L=k.a.div(C()),A=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this,e))).toggleRecipe=function(e){var n=t.state.showRecipe;t.setState({recipeId:e,showRecipe:!n})},t.closeRecipe=function(){t.setState({showRecipe:!1})},t.state={recipeId:0,showRecipe:!1},t.toggleRecipe=t.toggleRecipe.bind(Object(O.a)(Object(O.a)(t))),t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this,n=R?R.recipes.map(function(n){var t=e.state.showRecipe&&e.state.recipeId===n.id?"recipe active":"recipe";return a.a.createElement("span",{key:n.id},a.a.createElement("li",{className:t,onClick:function(){return e.toggleRecipe(n.id)}},a.a.createElement("span",{className:"name"},n.name),a.a.createElement("span",{className:"time"},n.prepTime+n.cookTime," minutes"),a.a.createElement("span",{className:"main-ingredient"},n.ingredients[0].item)),e.state.showRecipe&&e.state.recipeId===n.id?a.a.createElement(T,{bgImage:n.image,closeRecipe:e.closeRecipe,recipe:n}):null)}):null;return a.a.createElement(L,{className:"recipes-container"},this.state.showRecipe?a.a.createElement("div",{className:"recipe-modal-bg",onClick:this.closeRecipe}):null,a.a.createElement("ul",{className:"recipes-list"},n),a.a.createElement("div",{className:"background-fixed"},a.a.createElement("img",{src:v.a,alt:"drink"})))}}]),n}(i.Component),W=(t(48),t(49),function(){var e;return a.a.createElement("form",{id:"new-ingredient-form",onSubmit:function(){var n=document.getElementById("qty")?document.getElementById("qty").value:null,t=document.getElementById("unit")?document.getElementById("unit").value:null,i=document.getElementById("item")?document.getElementById("item").value:null,a=document.getElementById("description")?document.getElementById("description").value:null;e=n+" "+t+" "+i+", "+a,console.log(e)}},a.a.createElement("label",{htmlFor:"ingredients"},"Ingredients:"),a.a.createElement("input",{disabled:!0,type:"text",className:"ingredient",value:e}),a.a.createElement("fieldset",{id:"ingredients",className:"ingredients"},a.a.createElement("input",{type:"number",className:"ingredient-detail qty",id:"qty",maxLength:"4"}),a.a.createElement("input",{type:"text",className:"ingredient-detail unit",id:"unit",maxLength:"6"}),a.a.createElement("input",{type:"text",className:"ingredient-detail item",id:"item"}),a.a.createElement("input",{type:"text",className:"ingredient-detail description",id:"description"}),a.a.createElement("button",{id:"add-ingredient",type:"submit"},"Add Ingredient")))}),_=(t(50),function(){var e;return a.a.createElement("form",{id:"new-ingredient-form",onSubmit:function(){var n=document.getElementById("instruction")?document.getElementById("instruction").value:null;e=n,console.log(e)}},a.a.createElement("label",{htmlFor:"instructions"},"Instructions:"),a.a.createElement("input",{disabled:!0,type:"text",className:"instruction",value:e}),a.a.createElement("fieldset",{id:"instructions",className:"instructions"},a.a.createElement("input",{type:"text",className:"instruction-details",id:"instruction"}),a.a.createElement("button",{id:"add-instruction",type:"submit"},"Add Instruction")))}),F=function(){return a.a.createElement("div",{className:"main-recipe-form"},a.a.createElement("form",{id:"new-recipe-form",onSubmit:function(){var e=document.getElementById("recipe-name")?document.getElementById("recipe-name").value:null;console.log(e)}},a.a.createElement("label",{htmlFor:"recipeName"},"Recipe Name"),a.a.createElement("input",{type:"text",id:"recipe-name"}),a.a.createElement("button",{type:"submit"},"Save Recipe Name")),a.a.createElement(W,null),a.a.createElement(_,null))},D=function(e){function n(){return Object(o.a)(this,n),Object(s.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(u.a,{basename:"/recipes"},a.a.createElement("div",{className:"app"},a.a.createElement("header",{className:"app-header"},a.a.createElement("h1",null,"Recipes"),a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(u.b,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(u.b,{to:"/list"},"Recipes List")),a.a.createElement("li",null,a.a.createElement(u.b,{to:"/newRecipe"},"New Recipe"))))),a.a.createElement(p.a,{path:"/",exact:!0,component:j}),a.a.createElement(p.a,{path:"/list",exact:!0,component:A}),a.a.createElement(p.a,{path:"/newRecipe",exact:!0,component:F})))}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.986d8896.chunk.js.map