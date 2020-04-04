(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),c=a.n(o);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(4),m=a(5),i=a(6),d=a(7),l=function(e){return n.a.createElement("div",{className:e.class},n.a.createElement("label",{className:"switch"},n.a.createElement("input",{type:"checkbox",id:e.ids}),n.a.createElement("span",{className:"slider"})))},u=function(e){return n.a.createElement("p",null,e.detail.musicInfo)},p=[{keyCode:49,keyTrigger:"1",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:50,keyTrigger:"2",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:51,keyTrigger:"3",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:97,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:101,keyTrigger:"E",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:102,keyTrigger:"F",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:108,keyTrigger:"L",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:106,keyTrigger:"J",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:110,keyTrigger:"N",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],k=[{keyCode:49,keyTrigger:"1",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:50,keyTrigger:"2",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:51,keyTrigger:"3",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:97,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:101,keyTrigger:"E",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:102,keyTrigger:"F",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:108,keyTrigger:"L",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:106,keyTrigger:"J",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:110,keyTrigger:"N",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],g=a(1),h=a.n(g),y=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).listeners=function(e){if(r.state.Power){var t=e.keyCode,a=r.state.chnager.filter((function(e){return e.keyCode===t}));if(0!==a.length){var n=document.getElementById(a[0].keyCode),o=new Audio(a[0].url);n.animate([{backgroundColor:"red"},{backgroundColor:"red"}],{duration:50}),o.play(),r.controlVolume(o),r.setState({musicInfo:a[0].id})}}},r.buttonClickFunction=function(e){var t=r.state.chnager.filter((function(t){return t.keyCode===Number(e.target.id)})),a=new Audio(t[0].url),n=document.getElementById(e.target.id);a.play(),r.controlVolume(a),r.setState({musicInfo:t[0].id}),n.animate([{backgroundColor:"red"},{backgroundColor:"red"}],{duration:50})},r.controlVolume=function(e){var t=document.getElementById("vol").value;e.volume=t/100,r.setState({musicInfo:"Volume: ".concat(t)})},r.state={musicInfo:"musicInfo",chnager:k,power:!1},r}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=2,a=0;h()("#pbtn").click((function(){h()("button").fadeToggle("slow"),t%2===0?e.setState({Power:!0}):e.setState({Power:!1}),t++})),h()("#changer").click((function(){a%2===0?e.setState({chnager:p,musicInfo:"Heater kit"}):e.setState({chnager:k,musicInfo:"Smooth Piano kit"}),a++})),window.addEventListener("keypress",this.listeners)}},{key:"UNSAFE_componentWillMount",value:function(){window.removeEventListener("keypress",this.listeners)}},{key:"render",value:function(){var e=this,t=k.map((function(t){return n.a.createElement("button",{key:t.id,id:t.keyCode,onClick:e.buttonClickFunction},t.keyTrigger," ")}));return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"btn"},t),n.a.createElement("div",{className:"extra"},n.a.createElement("div",null,n.a.createElement("p",null,"Power"),n.a.createElement(l,{ids:"pbtn",class:"noChange"})),n.a.createElement("div",{className:"info"},n.a.createElement(u,{detail:this.state})),n.a.createElement("div",null,n.a.createElement("input",{type:"range",min:"0",max:"100",onChange:this.controlVolume,id:"vol"})),n.a.createElement("div",null,n.a.createElement("p",null,"Bank"),n.a.createElement(l,{ids:"changer",class:"change"})))),n.a.createElement("p",{id:"spl"},"Create your music"))}}]),a}(n.a.Component);c.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.b5f88808.chunk.js.map