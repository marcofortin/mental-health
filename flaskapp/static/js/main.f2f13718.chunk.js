(window["webpackJsonpmental-health"]=window["webpackJsonpmental-health"]||[]).push([[0],{143:function(e,t,a){e.exports=a(308)},304:function(e,t,a){},305:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(34),i=a.n(r),l=a(10),c=a(11),s=a(13),d=a(12),u=a(14),b=a(25),p=a(89),m=a(3),h=a(38),x=a.n(h),g=a(131),k=a(132),y=a(133),j=a(134),f=a(135),E=a(136),v=a.n(E),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).onChange=function(e){var t=e.value;a.setState({value:t}),console.log(a.state.value)},a.onKeyDown=function(e,t){if(e.ctrlKey)switch(e.preventDefault(),e.key){case"b":return t.toggleMark("bold"),!0;case"i":return t.toggleMark("italic"),!0;case"c":return t.toggleMark("code"),!0;case"l":return t.toggleMark("list"),!0;case"u":return t.toggleMark("underline"),!0;default:return}},a.renderMark=function(e){switch(e.mark.type){case"bold":return o.a.createElement(O,e);case"italic":return o.a.createElement(S,e);case"code":return o.a.createElement("code",e.attributes,e.children);case"list":return o.a.createElement("ul",e.attributes,o.a.createElement("li",null,e.children));case"underline":return o.a.createElement("u",e.attributes,e.children);default:return}},a.onMarkClick=function(e,t){e.preventDefault();var n=a.state.value.change().toggleMark(t);a.onChange(n)},a.state={value:m.n.fromJSON(a.props.jsonData)},a.submitEntry=a.submitEntry.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"submitEntry",value:function(){var e=new XMLHttpRequest;e.addEventListener("load",(function(){})),e.open("POST","/new_post?user_id=1&title=testTitle&content="+this.state.value),e.send()}},{key:"render",value:function(){var e=this;return"True"==this.props.editable?o.a.createElement("div",null,o.a.createElement(n.Fragment,null,o.a.createElement(w,null,o.a.createElement("button",{onPointerDown:function(t){return e.onMarkClick(t,"bold")},className:"tooltip-icon-button"},o.a.createElement(x.a,{icon:g.bold})),o.a.createElement("button",{onPointerDown:function(t){return e.onMarkClick(t,"italic")},className:"tooltip-icon-button"},o.a.createElement(x.a,{icon:k.italic})),o.a.createElement("button",{onPointerDown:function(t){return e.onMarkClick(t,"code")},className:"tooltip-icon-button"},o.a.createElement(x.a,{icon:y.code})),o.a.createElement("button",{onPointerDown:function(t){return e.onMarkClick(t,"list")},className:"tooltip-icon-button"},o.a.createElement(x.a,{icon:j.list})),o.a.createElement("button",{onPointerDown:function(t){return e.onMarkClick(t,"underline")},className:"tooltip-icon-button"},o.a.createElement(x.a,{icon:f.underline}))),o.a.createElement(p.a,{value:this.state.value,onChange:this.onChange,onKeyDown:this.onKeyDown,renderMark:this.renderMark}),o.a.createElement(v.a,{variant:"success",onClick:this.submitEntry,style:{margin:"20px"}},"Submit"))):o.a.createElement(n.Fragment,null,o.a.createElement(p.a,{value:this.state.value,onChange:this.onChange,onKeyDown:this.onKeyDown,renderMark:this.renderMark,readOnly:!0}))}}]),t}(n.Component),O=function(e){return o.a.createElement("strong",null,e.children)},S=function(e){return o.a.createElement("em",{property:"italic",style:{fontSize:28}},e.children)},w=function(e){return o.a.createElement("div",{className:"format-toolbar"},e.children)},D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={editing:!1,jsonData:{object:"value",document:{object:"document",nodes:[{object:"block",type:"paragraph",nodes:[{object:"text",text:"This is editable "},{object:"text",text:"rich",marks:[{type:"bold"}]},{object:"text",text:" text, "},{object:"text",text:"much",marks:[{type:"italic"}]},{object:"text",text:" better than a "},{object:"text",text:"<textarea>",marks:[{type:"code"}]},{object:"text",text:"!"}]},{object:"block",type:"paragraph",nodes:[{object:"text",text:"Since it's rich text, you can do things like turn a selection of text "},{object:"text",text:"bold",marks:[{type:"bold"}]},{object:"text",text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{object:"block",type:"block-quote",nodes:[{object:"text",text:"A wise quote."}]},{object:"block",type:"paragraph",nodes:[{object:"text",text:"Try it out for yourself!"}]}]}}},a.myFunction=function(e){a.setState({editing:!0})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.editing?o.a.createElement("div",{style:{color:"rgb(17, 17, 17)",maxWidth:"740px",backgroundColor:"rgb(255, 255, 255)",boxShadow:"rgba(118, 143, 255, 0.1) 0px 16px 24px 0px",padding:"20px",margin:"25px auto 25px",borderRadius:"4.5px"}},o.a.createElement(C,{editable:this.props.editable,jsonData:{object:"value",document:{object:"document",nodes:[{object:"block",type:"paragraph",nodes:[{object:"text",text:"This is editable "},{object:"text",text:"rich",marks:[{type:"bold"}]},{object:"text",text:" text, "},{object:"text",text:"much",marks:[{type:"italic"}]},{object:"text",text:" better than a "},{object:"text",text:"<textarea>",marks:[{type:"code"}]},{object:"text",text:"!"}]},{object:"block",type:"paragraph",nodes:[{object:"text",text:"Since it's rich text, you can do things like turn a selection of text "},{object:"text",text:"bold",marks:[{type:"bold"}]},{object:"text",text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{object:"block",type:"block-quote",nodes:[{object:"text",text:"A wise quote."}]},{object:"block",type:"paragraph",nodes:[{object:"text",text:"Try it out for yourself!"}]}]}}})):o.a.createElement("div",{style:{color:"rgb(17, 17, 17)",maxWidth:"740px",backgroundColor:"rgb(255, 255, 255)",boxShadow:"rgba(118, 143, 255, 0.1) 0px 16px 24px 0px",padding:"20px",margin:"25px auto 25px",borderRadius:"4.5px"},onClick:this.myFunction},o.a.createElement("h1",null,this.props.title," | ",this.props.rating),o.a.createElement("h3",null,this.props.date))}}]),t}(n.Component),M=a(137),F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={options:{legend:{display:!1}}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"This is the graph"),o.a.createElement(M.a,{data:function(e){var t=e.getContext("2d").createLinearGradient(500,0,100,0);return t.addColorStop(0,"#80b6f4"),t.addColorStop(.2,"#94d973"),t.addColorStop(.5,"#fad874"),t.addColorStop(1,"#f49080"),{labels:["Sep 01","Sep 02","Sep 03","Sep 04","Sep 05","Sep 06","Sep 07","Sep 08","Sep 09","Sep 10","Sep 11","Sep 12","Sep 13","Sep 14"],datasets:[{label:"Mood Chart",fill:!1,lineTension:.1,backgroundColor:t,borderColor:t,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:t,pointBackgroundColor:t,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:t,pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[85,84,85,86,90,80,70,60,50,10,20,70,40,3]}]}},options:this.state.options}))}}]),t}(n.Component),T=a(139),W=a.n(T),H=(a(304),[["2019-09-14",10],["2019-09-13",32],["2019-09-12",90],["2019-09-11",3],["2019-09-10",40],["2019-09-09",70]]),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={today:new Date,selectedDate:new Date},a.onClickDay=a.onClickDay.bind(Object(b.a)(a)),a.setMoodColor=a.setMoodColor.bind(Object(b.a)(a)),a.getAllEntries=a.getAllEntries.bind(Object(b.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getAllEntries()}},{key:"getAllEntries",value:function(){var e=new XMLHttpRequest;e.addEventListener("load",(function(){console.log(e.responseText)})),e.open("GET","http://mental-health-api.herokuapp.com/get_calendar?id=1"),e.send()}},{key:"onClickDay",value:function(e){this.setState({selectedDate:e})}},{key:"setMoodColor",value:function(e){for(var t,a=e.date.toISOString().substr(0,10),n=0;n<H.length;n++)if(H[n][0]===a){t=H[n][1];break}return t>=75?"good-mood":t>=45?"medium-mood":"bad-mood"}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"This is the selected date: ",this.state.selectedDate.toDateString()),o.a.createElement(W.a,{maxDate:this.state.today,onClickDay:this.onClickDay,tileClassName:this.setMoodColor}))}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{style:{width:"40%",padding:"5%",float:"left"}},o.a.createElement("div",{style:{color:"rgb(17, 17, 17)",maxWidth:"740px",backgroundColor:"rgb(255, 255, 255)",boxShadow:"rgba(118, 143, 255, 0.1) 0px 16px 24px 0px",padding:"20px",margin:"25px auto 25px",borderRadius:"4.5px"}},o.a.createElement(F,null)),o.a.createElement("div",{style:{color:"rgb(17, 17, 17)",maxWidth:"740px",backgroundColor:"rgb(255, 255, 255)",boxShadow:"rgba(118, 143, 255, 0.1) 0px 16px 24px 0px",padding:"20px",margin:"25px auto 25px",borderRadius:"4.5px"}},o.a.createElement(R,null))),o.a.createElement("div",{style:{width:"40%",padding:"5%",float:"left"}},o.a.createElement(D,{title:"+ Create New Post",editable:"True"}),o.a.createElement(D,{title:"Went to my First Hackathon!",rating:"84%",date:"September 3rd, 2018",editable:"False"}),o.a.createElement(D,{title:"Won my First Hackathon",rating:"100%",date:"September 3rd, 2018",editable:"False"}),o.a.createElement(D,{title:"School is hard",rating:"22%",date:"September 3rd, 2018",editable:"False"}),o.a.createElement(D,{title:"Went to my First Hackathon!",rating:"84%",date:"September 3rd, 2018",editable:"False"}),o.a.createElement(D,{title:"Won my First Hackathon",rating:"100%",date:"September 3rd, 2018",editable:"False"}),o.a.createElement(D,{title:"School is hard",rating:"22%",date:"September 3rd, 2018",editable:"False"})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(140),B=a(26),A=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Login"))}}]),t}(o.a.Component),P=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Register"))}}]),t}(o.a.Component),K=(a(305),o.a.createElement(q.a,{basename:"#"},o.a.createElement(B.a,{exact:!0,path:"/",component:N}),o.a.createElement(B.a,{path:"/login",component:A}),o.a.createElement(B.a,{path:"/register",component:P})));i.a.render(K,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[143,1,2]]]);
//# sourceMappingURL=main.f2f13718.chunk.js.map