(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t.p+"static/media/amaretto.fe214cc2.jpeg"},22:function(e){e.exports={recipes:[{id:1,name:"Alfredo Sauce",prepTime:2,cookTime:5,ovenTemp:null,yeilds:"2 servings",image:"http://www.bytanyar.com/recipes/images/alfredo-sauce.jpg",ingredients:[{id:1,qty:"4",unit:"Tbsp",item:"parmesan cheese",description:"shredded"},{id:2,qty:"2",unit:"Tbsp",item:"butter",description:""},{id:3,qty:"1/8",unit:"cup",item:"heavy cream",description:""},{id:4,qty:"1",unit:"tsp",item:"garlic",description:"minced"},{id:5,qty:"",unit:"",item:"Italian spices",description:""}],instructions:["Melt butter","Lightly saute garlic in butter","Add heavy cream and spices","Stir","Bring to boil","Add parmesan cheese","Constantly stirring, reduce heat and thicken to preference"]},{id:2,name:"Amazing Chicken",prepTime:10,cookTime:30,ovenTemp:425,yeilds:"4 servings",image:"http://www.bytanyar.com/recipes/images/amazing-chicken.jpg",ingredients:[{id:1,qty:"4",unit:"",item:"chicken breast",description:"boneless, skinless, halves"},{id:2,qty:"",unit:"",item:"salt and pepper",description:"to taste"},{id:3,qty:"1/2",unit:"cup",item:"mayonnaise",description:""},{id:4,qty:"2",unit:"cup",item:"bread crumbs",description:"Italian seasoned"}],instructions:["Preheat oven","Grease shallow baking dish","Season chicken breasts","Coat chicken on all sides with mayonnaise","Roll chicken in bread crumbs until thoroughly coated","Place chicken in prepared dish","Bake uncovered 30 minutes or until chicken is no longer pink inside and juices run clear"]}]}},27:function(e,n,t){e.exports=t.p+"static/media/alfredo-sauce.af8a7793.jpg"},28:function(e,n,t){e.exports=t.p+"static/media/amazing-chicken.3888d290.jpg"},29:function(e,n,t){e.exports=t.p+"static/media/tabletop.62573cb8.jpg"},35:function(e,n,t){e.exports=t(56)},40:function(e,n,t){},41:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(18),r=t.n(c),o=(t(40),t(6)),l=t(7),s=t(11),m=t(8),d=t(12),u=t(16),p=t(5),g=(t(41),t(27)),h=t.n(g),b=t(19),f=t.n(b),E=t(28),v=t.n(E),x=t(29),y=t.n(x),k=t(9),w=t(10);function N(){var e=Object(k.a)(["\n    .page-image {\n        width: 100%;\n    }\n    .parallax-image {\n        height: 100vh;\n\n        background-attachment: fixed;\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n\n        h3 {\n            color: white;\n            font-size: 3rem;\n            margin-top: -50vh;\n            text-shadow: 2px 2px 0 #333;\n        }\n        p {\n            color: white;\n            font-size: 2rem;\n            margin-top: 65vh;\n            text-shadow: 2px 2px 0 #333;\n        }\n    }\n"]);return N=function(){return e},e}var j=w.a.div(N()),I=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(m.a)(n).call(this,e))).state={},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e={backgroundImage:"url(".concat(y.a,")")},n={backgroundImage:"url(".concat(f.a,")")};return i.a.createElement(j,{className:"parallax"},i.a.createElement("img",{className:"page-image",src:v.a,alt:"chicken"}),i.a.createElement("div",{style:n,className:"parallax-image"},i.a.createElement("h3",null,"What\u2019s for Dinner?"),i.a.createElement("p",null,"Gotta be something good!")),i.a.createElement("img",{className:"page-image",src:h.a,alt:"sauce"}),i.a.createElement("div",{style:e,className:"parallax-image"}))}}]),n}(a.Component),R=t(15),O=t(22);function B(){var e=Object(k.a)(["\n    .recipe-container {\n        background-color: beige;\n        border-radius: 20px;\n        left: 12.5%;\n        margin: 5vh auto;\n        max-height: 90vh;\n        max-width: 500px;\n        padding: 5px 15px 15px;\n        position: absolute;\n        right: 12.5%;\n        top: 5vh;\n        width: 75%;\n        z-index: 750;\n    }\n    .close-x {\n        background-color: #fff;\n        border: 1px solid #333;\n        border-radius: 50%;\n        padding: 0 5px;\n        position: absolute;\n        right: 20px;\n        text-align: left;\n        top: 10px;\n        width: 20px;\n    }\n    .close-x:hover {\n        background-color: blanchedalmond;\n    }\n"]);return B=function(){return e},e}var q=w.a.div(B()),z=(t(46),function(e){var n=e.recipe,t=n?n.ingredients.map(function(e){return i.a.createElement("li",{key:e.id,className:"ingredients"},e.qty," ",e.unit," ",e.item,", ",e.description)}):null;return i.a.createElement("ul",{className:"ingredients-list"},t)}),T=(t(47),function(e){var n=e.recipe,t=n?n.instructions.map(function(e,n){return i.a.createElement("li",{key:n,className:"instructions"},e)}):null;return i.a.createElement("ul",{className:"instructions-list"},t)}),C=function(e){var n=e.bgImage,t=e.closeRecipe,a=e.recipe,c={backgroundImage:"url(".concat(n,")")};return console.log(n),i.a.createElement(q,{className:"recipe-modal-container"},i.a.createElement("div",{className:"recipe-container",style:n?c:null},i.a.createElement("p",{className:"close-x",onClick:t},"x"),i.a.createElement("h2",null,a.name),i.a.createElement(z,{recipe:a}),i.a.createElement(T,{recipe:a})))};function S(){var e=Object(k.a)(["\n    height: 100vh;\n    margin: -20px auto 0;\n    max-width: 1200px;\n    padding-top: 20px;\n\n    * {\n        box-sizing: border-box;\n    }\n    .recipe-modal-bg {\n        background-color: rgba(0, 0, 0, 0.5);\n        bottom: 0;\n        left: 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        z-index: 100;\n    }\n    .background-fixed img {\n        max-width: 1200px;\n        overflow-y: hidden;\n        transition-duration: 0.5s;\n        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n        width: 100vw;\n        z-index: 1;\n    }\n    .recipes-list {\n        background-color: rgba(255, 255, 255, 0.5);\n        border: 1px solid #333;\n        margin: 20px;\n        margin-block-end: 0;\n        margin-block-start: 0;\n        padding-inline-start: 0;\n        position: relative;\n        z-index: 200;\n    }\n    .recipe {\n        display: flex;\n        justify-content: space-between;\n        list-style: none;\n        padding: 5px 0;\n        text-align: left;\n\n        &:nth-child(2n){\n            background-color: beige;\n        }\n        &:hover {\n            background-color: blanchedalmond;\n        }\n        &.active {\n            background-color: lightblue;\n        }\n    }\n    .name {\n        font-size: 18px;\n        max-width: 350px;\n        padding-left: 20px;\n        width: 45%;\n    }\n    .time {\n        max-width: 150px;\n        width: 20%;\n    }\n    .main-ingredient {\n        max-width: 250px;\n        width: 35%;\n    }\n"]);return S=function(){return e},e}var A=w.a.div(S()),L=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(m.a)(n).call(this,e))).toggleRecipe=function(e){var n=t.state.showRecipe;t.setState({recipeId:e,showRecipe:!n})},t.closeRecipe=function(){t.setState({showRecipe:!1})},t.state={recipeId:0,showRecipe:!1},t.toggleRecipe=t.toggleRecipe.bind(Object(R.a)(Object(R.a)(t))),t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this,n=O?O.recipes.map(function(n){var t=e.state.showRecipe&&e.state.recipeId===n.id?"recipe active":"recipe";return i.a.createElement("span",{key:n.id},i.a.createElement("li",{className:t,onClick:function(){return e.toggleRecipe(n.id)}},i.a.createElement("span",{className:"name"},n.name),i.a.createElement("span",{className:"time"},n.prepTime+n.cookTime," minutes"),i.a.createElement("span",{className:"main-ingredient"},n.ingredients[0].item)),e.state.showRecipe&&e.state.recipeId===n.id?i.a.createElement(C,{bgImage:n.image,closeRecipe:e.closeRecipe,recipe:n}):null)}):null;return i.a.createElement(A,{className:"recipes-container"},this.state.showRecipe?i.a.createElement("div",{className:"recipe-modal-bg",onClick:this.closeRecipe}):null,i.a.createElement("ul",{className:"recipes-list"},n),i.a.createElement("div",{className:"background-fixed"},i.a.createElement("img",{src:f.a,alt:"drink"})))}}]),n}(a.Component),W=(t(48),t(49),function(){var e;return i.a.createElement("form",{id:"new-ingredient-form",onSubmit:function(){var n=document.getElementById("qty")?document.getElementById("qty").value:null,t=document.getElementById("unit")?document.getElementById("unit").value:null,a=document.getElementById("item")?document.getElementById("item").value:null,i=document.getElementById("description")?document.getElementById("description").value:null;e=n+" "+t+" "+a+", "+i,console.log(e)}},i.a.createElement("label",{htmlFor:"ingredients"},"Ingredients:"),i.a.createElement("input",{disabled:!0,type:"text",className:"ingredient",value:e}),i.a.createElement("fieldset",{id:"ingredients",className:"ingredients"},i.a.createElement("input",{type:"number",className:"ingredient-detail qty",id:"qty",maxLength:"4"}),i.a.createElement("input",{type:"text",className:"ingredient-detail unit",id:"unit",maxLength:"6"}),i.a.createElement("input",{type:"text",className:"ingredient-detail item",id:"item"}),i.a.createElement("input",{type:"text",className:"ingredient-detail description",id:"description"}),i.a.createElement("button",{id:"add-ingredient",type:"submit"},"Add Ingredient")))}),F=(t(50),function(){var e;return i.a.createElement("form",{id:"new-ingredient-form",onSubmit:function(){var n=document.getElementById("instruction")?document.getElementById("instruction").value:null;e=n,console.log(e)}},i.a.createElement("label",{htmlFor:"instructions"},"Instructions:"),i.a.createElement("input",{disabled:!0,type:"text",className:"instruction",value:e}),i.a.createElement("fieldset",{id:"instructions",className:"instructions"},i.a.createElement("input",{type:"text",className:"instruction-details",id:"instruction"}),i.a.createElement("button",{id:"add-instruction",type:"submit"},"Add Instruction")))}),D=function(){return i.a.createElement("div",{className:"main-recipe-form"},i.a.createElement("form",{id:"new-recipe-form",onSubmit:function(){var e=document.getElementById("recipe-name")?document.getElementById("recipe-name").value:null;console.log(e)}},i.a.createElement("label",{htmlFor:"recipeName"},"Recipe Name"),i.a.createElement("input",{type:"text",id:"recipe-name"}),i.a.createElement("button",{type:"submit"},"Save Recipe Name")),i.a.createElement(W,null),i.a.createElement(F,null))},G=function(e){function n(){return Object(o.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(u.a,{basename:"/recipes"},i.a.createElement("div",{className:"app"},i.a.createElement("header",{className:"app-header"},i.a.createElement("h1",null,"Recipes"),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(u.b,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/list"},"Recipes List")),i.a.createElement("li",null,i.a.createElement(u.b,{to:"/newRecipe"},"New Recipe"))))),i.a.createElement(p.a,{path:"/",exact:!0,component:I}),i.a.createElement(p.a,{path:"/list",exact:!0,component:L}),i.a.createElement(p.a,{path:"/newRecipe",exact:!0,component:D})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.f17fba2d.chunk.js.map