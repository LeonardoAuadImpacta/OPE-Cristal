(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Messages"],{1681:function(e,t,a){},"4d63":function(e,t,a){var i=a("83ab"),o=a("da84"),r=a("94ca"),n=a("7156"),s=a("9bf2").f,l=a("241c").f,c=a("44e7"),d=a("ad6d"),u=a("9f7f"),m=a("6eeb"),f=a("d039"),v=a("69f3").set,g=a("2626"),p=a("b622"),h=p("match"),b=o.RegExp,x=b.prototype,I=/a/g,k=/a/g,w=new b(I)!==I,C=u.UNSUPPORTED_Y,y=i&&r("RegExp",!w||C||f((function(){return k[h]=!1,b(I)!=I||b(k)==k||"/a/i"!=b(I,"i")})));if(y){var R=function(e,t){var a,i=this instanceof R,o=c(e),r=void 0===t;if(!i&&o&&e.constructor===R&&r)return e;w?o&&!r&&(e=e.source):e instanceof R&&(r&&(t=d.call(e)),e=e.source),C&&(a=!!t&&t.indexOf("y")>-1,a&&(t=t.replace(/y/g,"")));var s=n(w?new b(e,t):b(e,t),i?this:x,R);return C&&a&&v(s,{sticky:a}),s},V=function(e){e in R||s(R,e,{configurable:!0,get:function(){return b[e]},set:function(t){b[e]=t}})},_=l(b),O=0;while(_.length>O)V(_[O++]);x.constructor=R,R.prototype=x,m(o,"RegExp",R)}g("RegExp")},"5cc7":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"messages"},[a("v-container",[a("h1",{staticClass:"black accent-4 white--text"},[e._v(" Controle de Catálogo")]),a("v-card",[a("SnkCrud")],1)],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.produtos,"hide-default-footer":"","sort-by":"precoProduto"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{staticClass:"grey darken-2 white--text",attrs:{flat:""}},[a("v-toolbar-title",[e._v("Catálogo")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"40%"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,o=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mb-2 blue-grey lighten-5 green--text",attrs:{dark:"",outlined:""}},"v-btn",o,!1),i),[e._v(" Novo item ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{ref:"form",staticClass:"grey lighten-2"},[a("v-card-title",{staticClass:"grey darken-2 white--text"},[a("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{color:"black",label:"Nome do Produto",rules:e.nomeRules,outlined:"",clearable:"",required:""},model:{value:e.editedItem.nome,callback:function(t){e.$set(e.editedItem,"nome",t)},expression:"editedItem.nome"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-text-field",{attrs:{color:"black",label:"Sub-titulo do Produto",rules:e.nomeRules,outlined:"",clearable:"",required:""},model:{value:e.editedItem.subtitulo,callback:function(t){e.$set(e.editedItem,"subtitulo",t)},expression:"editedItem.subtitulo"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-text-field",{attrs:{color:"black",rules:e.precoRules,label:"Preço",outlined:"",clearable:"",required:""},model:{value:e.editedItem.precoAtual,callback:function(t){e.$set(e.editedItem,"precoAtual",t)},expression:"editedItem.precoAtual"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-text-field",{attrs:{color:"black",rules:e.qteRules,label:"Quantidade",outlined:"",clearable:"",required:""},model:{value:e.editedItem.quantidade,callback:function(t){e.$set(e.editedItem,"quantidade",t)},expression:"editedItem.quantidade"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"8"}},[a("v-text-field",{attrs:{color:"black",rules:e.urlRules,label:"URL da Imagem",outlined:"",clearable:"",required:""},model:{value:e.editedItem.urlImage,callback:function(t){e.$set(e.editedItem,"urlImage",t)},expression:"editedItem.urlImage"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-select",{attrs:{items:e.categoria,label:"Categoria",outlined:""},model:{value:e.editedItem.categoria,callback:function(t){e.$set(e.editedItem,"categoria",t)},expression:"editedItem.categoria"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-textarea",{attrs:{color:"black",name:"input-7-1",outlined:"",label:"Descrição do Produto","auto-grow":"",shaped:"",required:"",counter:250},model:{value:e.editedItem.descricao,callback:function(t){e.$set(e.editedItem,"descricao",t)},expression:"editedItem.descricao"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"blue-grey lighten-5 red--text",attrs:{text:""},on:{click:e.close}},[e._v(" Cancelar ")]),a("v-btn",{staticClass:"blue-grey lighten-5 green--text",attrs:{outlined:"",text:""},on:{click:e.save}},[e._v(" Salvar ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"30%"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Tem certeza que deseja deletar este item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"blue-grey lighten-5 red--text",attrs:{text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),a("v-btn",{staticClass:"blue-grey lighten-5 green--text",attrs:{text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var i=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{color:"green",small:""},on:{click:function(t){return e.editItem(i)}}},[e._v(" mdi-pencil ")]),a("v-icon",{attrs:{color:"red",small:""},on:{click:function(t){return e.deleteItem(i)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})},n=[],s=a("1da1"),l=(a("96cf"),a("4d63"),a("ac1f"),a("25f0"),a("8ba4"),a("a9e3"),a("8b24")),c={data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Código",align:"start",sortable:!1,value:"id"},{text:"Produto",align:"start",sortable:!1,value:"nome"},{text:"Sub-Titulo",value:"subtitulo"},{text:"Preço",value:"precoAtual"},{text:"Qantidade",value:"quantidade"},{text:"URL",value:"urlImage"},{text:"Descrição",value:"descricao"},{text:"Actions",value:"actions",sortable:!1}],urlRules:[function(e){var t=new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);if(0==t.test(e))return"URL inválida"}],precoRules:[function(e){return!!e||"preco é necessário"},function(e){return!isNaN(parseFloat(e))&&e>0||"Numero inválido"}],nomeRules:[function(e){return!!e||"Nome do produto é necessário"}],qteRules:[function(e){return!!e||"quantidade é necessário"},function(e){return 0==Number.isInteger(e)&&e>0||"Numero inválido"}],categoria:["Corrida","Skateboarding","Academia","Sportwear","Acessórios"],produtos:[],editedIndex:-1,deleteProdutoId:-1,editedItem:{id:0,nome:"",subtitulo:"",precoAtual:0,quantidade:0,urlImage:"",descricao:"",categoria:""},defaultItem:{nameProduto:"",precoProduto:0,quantidade:0,urlImage:"",descricaoProduto:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Novo Item":"Editar Item"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{initialize:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["e"])(0,100,e);case 2:e.produtos=t.sent;case 3:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.produtos.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.deleteProdutoId=Number(e.id),this.editedIndex=this.produtos.indexOf(e),this.dialogDelete=!0},deleteItemConfirm:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["b"])(e.deleteProdutoId);case 2:return t.next=4,e.initialize();case 4:e.closeDelete();case 5:case"end":return t.stop()}}),t)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.editedIndex>-1)){t.next=6;break}return console.log(e.editedItem),t.next=4,Object(l["c"])(e.editedItem,e.editedItem.id);case 4:t.next=9;break;case 6:return e.editedItem.id=null,t.next=9,Object(l["a"])(e.editedItem);case 9:return t.next=11,e.initialize();case 11:e.close();case 12:case"end":return t.stop()}}),t)})))()}}},d=c,u=a("2877"),m=a("6544"),f=a.n(m),v=a("8336"),g=a("b0af"),p=a("99d9"),h=a("62ad"),b=a("a523"),x=a("8fea"),I=a("169a"),k=a("ce7e"),w=a("132d"),C=a("0fd9"),y=a("b974"),R=a("2fa4"),V=a("8654"),_=a("5530"),O=(a("1681"),a("58df")),D=Object(O["a"])(V["a"]),N=D.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return Object(_["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},V["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"}},genInput:function(){var e=V["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){V["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}}),T=a("71d9"),q=a("2a7f"),P=Object(u["a"])(d,r,n,!1,null,null,null),$=P.exports;f()(P,{VBtn:v["a"],VCard:g["a"],VCardActions:p["a"],VCardText:p["c"],VCardTitle:p["d"],VCol:h["a"],VContainer:b["a"],VDataTable:x["a"],VDialog:I["a"],VDivider:k["a"],VIcon:w["a"],VRow:C["a"],VSelect:y["a"],VSpacer:R["a"],VTextField:V["a"],VTextarea:N,VToolbar:T["a"],VToolbarTitle:q["a"]});var j={name:"SnkViewCatalogo",components:{SnkCrud:$}},S=j,z=(a("eb26"),Object(u["a"])(S,i,o,!1,null,"6f2306c3",null));t["default"]=z.exports;f()(z,{VCard:g["a"],VContainer:b["a"]})},"5e89":function(e,t,a){var i=a("861d"),o=Math.floor;e.exports=function(e){return!i(e)&&isFinite(e)&&o(e)===e}},"8ba4":function(e,t,a){var i=a("23e7"),o=a("5e89");i({target:"Number",stat:!0},{isInteger:o})},d828:function(e,t,a){},eb26:function(e,t,a){"use strict";a("d828")}}]);
//# sourceMappingURL=Messages.c435607c.js.map