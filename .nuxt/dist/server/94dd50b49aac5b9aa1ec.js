exports.ids=[2],exports.modules={26:function(t,e,n){var content=n(30);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(8).default;t.exports.__inject__=function(t){o("6759f5ab",content,!0,t)}},29:function(t,e,n){"use strict";n.r(e);var o=n(26),r=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e.default=r.a},30:function(t,e,n){(e=n(7)(!1)).push([t.i,"\n.chat_form {\n  font-size: 1.6rem;\n}\n\n",""]),t.exports=e},32:function(t,e,n){"use strict";n.r(e);var o=n(9),r={name:"main_page",data:()=>({messageRxd:"",name:"",room:""}),mounted(){},methods:{...Object(o.mapMutations)(["setUser"]),submitForm(t){let e=t||this.room;const n={name:this.name,room:e};this.$socket.emit("userJoined",n,data=>{"string"==typeof data?console.error(data):(n.id=data.userId,this.setUser(n),this.$router.push("/chat"))})},clear(){this.$v.$reset(),this.name="",this.room=""}}},c=n(1);var component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"chat_form"},[this._ssrNode('<form><label>\n      Имя\n      <input type="text"'+this._ssrAttr("value",this.name)+'></label> <label>\n      Комната\n      <input type="text"'+this._ssrAttr("value",this.room)+'></label> <button>Отправить</button></form> <div class="room_list"><button>Друзья</button></div>')])}),[],!1,(function(t){var e=n(29);e.__inject__&&e.__inject__(t)}),null,"372ae8c4");e.default=component.exports}};