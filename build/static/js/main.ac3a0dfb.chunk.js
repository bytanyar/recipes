(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e){e.exports={recipes:[{id:1,name:"Alfredo Sauce",prepTime:2,cookTime:5,ovenTemp:null,yeilds:"2 servings",image:"",ingredients:[{qty:"4",unit:"Tbsp",item:"parmesan cheese",description:"shredded"},{qty:"2",unit:"Tbsp",item:"butter",description:""},{qty:"1/8",unit:"cup",item:"heavy cream",description:""},{qty:"1",unit:"tsp",item:"garlic",description:"minced"},{qty:"",unit:"",item:"Italian spices",description:""}],instructions:["Melt butter","Lightly saute garlic in butter","Add heavy cream and spices","Stir","Bring to boil","Add parmesan cheese","Constantly stirring, reduce heat and thicken to preference"]},{id:2,name:"Amazing Chicken",prepTime:10,cookTime:30,ovenTemp:425,yeilds:"4 servings",image:"",ingredients:[{qty:"4",unit:"",item:"chicken breast",description:"boneless, skinless, halves"},{qty:"",unit:"",item:"salt and pepper",description:"to taste"},{qty:"1/2",unit:"cup",item:"mayonnaise",description:""},{qty:"2",unit:"cup",item:"bread crumbs",description:"Italian seasoned"}],instructions:["Preheat oven","Grease shallow baking dish","Season chicken breasts","Coat chicken on all sides with mayonnaise","Roll chicken in bread crumbs until thoroughly coated","Place chicken in prepared dish","Bake uncovered 30 minutes or until chicken is no longer pink inside and juices run clear"]}]}},,,,,,,,,function(e,t,n){e.exports=n(46)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(21),r=n.n(c),l=(n(29),n(8)),s=n(9),o=n(11),m=n(10),u=n(12),d=n(13),p=n(5),g=(n(30),n(7)),E=(n(31),n(15)),h=(n(32),n(33),function(e){var t=e.recipe,n=t?t.ingredients.map(function(e){return a.a.createElement("li",{className:"ingredients"},e.qty," ",e.unit," ",e.item,", ",e.description)}):null;return a.a.createElement("ul",{className:"ingredients-list"},n)}),y=(n(34),function(e){var t=e.recipe,n=t?t.instructions.map(function(e){return a.a.createElement("li",{className:"instructions"},e)}):null;return a.a.createElement("ul",{className:"instructions-list"},n)}),b=function(e){var t=e.bgImage,n=e.closeRecipe,i=e.recipe,c={backgroundImage:"url(".concat(t,")")};return a.a.createElement("div",{className:"recipe-modal-container"},a.a.createElement("div",{className:"recipe-container",style:c},a.a.createElement("p",{className:"close-x",onClick:n},"x"),a.a.createElement("h2",null,i.name),a.a.createElement(h,{recipe:i}),a.a.createElement(y,{recipe:i})))},f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).toggleRecipe=function(e){var t=n.state.showRecipe;n.setState({recipeId:e,showRecipe:!t})},n.closeRecipe=function(){n.setState({showRecipe:!1})},n.state={recipeId:0,showRecipe:!1},n.toggleRecipe=n.toggleRecipe.bind(Object(g.a)(Object(g.a)(n))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=E?E.recipes.map(function(t){return a.a.createElement("span",{key:t.id},a.a.createElement("li",{className:"recipe",onClick:function(){return e.toggleRecipe(t.id)}},a.a.createElement("span",{className:"name"},t.name),a.a.createElement("span",{className:"time"},t.prepTime+t.cookTime," minutes"),a.a.createElement("span",{className:"main-ingredient"},t.ingredients[0].item)),e.state.showRecipe&&e.state.recipeId===t.id?a.a.createElement(b,{bgImage:t.image,closeRecipe:e.closeRecipe,recipe:t}):null)}):null;return a.a.createElement("div",{className:"recipes-container"},this.state.showRecipe?a.a.createElement("div",{className:"recipe-modal-bg",onClick:this.closeRecipe}):null,a.a.createElement("ul",{className:"recipes-list"},t),a.a.createElement("div",{className:"background-fixed"}))}}]),t}(i.Component),v=(n(35),n(36),function(){var e;return a.a.createElement("form",{id:"new-ingredient-form",onSubmit:function(){var t=document.getElementById("qty")?document.getElementById("qty").value:null,n=document.getElementById("unit")?document.getElementById("unit").value:null,i=document.getElementById("item")?document.getElementById("item").value:null,a=document.getElementById("description")?document.getElementById("description").value:null;e=t+" "+n+" "+i+", "+a,console.log(e)}},a.a.createElement("label",{htmlFor:"ingredients"},"Ingredients:"),a.a.createElement("input",{disabled:!0,type:"text",className:"ingredient",value:e}),a.a.createElement("fieldset",{id:"ingredients",className:"ingredients"},a.a.createElement("input",{type:"number",className:"ingredient-detail qty",id:"qty",maxLength:"4"}),a.a.createElement("input",{type:"text",className:"ingredient-detail unit",id:"unit",maxLength:"6"}),a.a.createElement("input",{type:"text",className:"ingredient-detail item",id:"item"}),a.a.createElement("input",{type:"text",className:"ingredient-detail description",id:"description"}),a.a.createElement("button",{id:"add-ingredient",type:"submit"},"Add Ingredient")))}),N=(n(37),function(){var e;return a.a.createElement("form",{id:"new-ingredient-form",onSubmit:function(){var t=document.getElementById("instruction")?document.getElementById("instruction").value:null;e=t,console.log(e)}},a.a.createElement("label",{htmlFor:"instructions"},"Instructions:"),a.a.createElement("input",{disabled:!0,type:"text",className:"instruction",value:e}),a.a.createElement("fieldset",{id:"instructions",className:"instructions"},a.a.createElement("input",{type:"text",className:"instruction-details",id:"instruction"}),a.a.createElement("button",{id:"add-instruction",type:"submit"},"Add Instruction")))}),k=function(){return a.a.createElement("div",{className:"main-recipe-form"},a.a.createElement("form",{id:"new-recipe-form",onSubmit:function(){var e=document.getElementById("recipe-name")?document.getElementById("recipe-name").value:null;console.log(e)}},a.a.createElement("label",{htmlFor:"recipeName"},"Recipe Name"),a.a.createElement("input",{type:"text",id:"recipe-name"}),a.a.createElement("button",{type:"submit"},"Save Recipe Name")),a.a.createElement(v,null),a.a.createElement(N,null))},w=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(d.a,{basename:"/recipes"},a.a.createElement("div",{className:"app"},a.a.createElement("header",{className:"app-header"},a.a.createElement("h1",null,"Recipes"),a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(d.b,{to:"/"},"Recipes List")),a.a.createElement("li",null,a.a.createElement(d.b,{to:"/newRecipe"},"New Recipe"))))),a.a.createElement(p.a,{path:"/",exact:!0,component:f}),a.a.createElement(p.a,{path:"/newRecipe",exact:!0,component:k})))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[24,1,2]]]);
//# sourceMappingURL=main.ac3a0dfb.chunk.js.map