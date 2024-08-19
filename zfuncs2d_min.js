function initconfig(){myConfig={"background-color":"#000",type:"mixed",title:{text:""},plot:{tooltip:{visible:!1},mode:"fast",exact:!0,smartSampling:!1,maxNodes:"100",maxTrackers:"100"},plotarea:{"background-color":"#000",margin:"dynamic"},scaleX:{itemsOverlap:!0,"max-items":100,item:{"font-family":"Arial",color:"#e4e4e4",fontSize:"12px",rules:[{rule:'"%scale-label" == "10a" || "%scale-label" == "11a" || "%scale-label" == "12p" || "%scale-label" == "1p" || "%scale-label" == "2p" || "%scale-label" == "3p"',alpha:"0.7"}]},tick:{alpha:"0",color:"#ddd",rules:[{rule:'"%scale-label" != "" || "%scale-label" == "10a" || "%scale-label" == "11a" || "%scale-label" == "12p" || "%scale-label" == "1p" || "%scale-label" == "2p" || "%scale-label" == "3p"',alpha:"1"}]},guide:{visible:!0,zIndex:"0","line-color":"#383838","line-style":"solid",alpha:"0",rules:[{rule:' "%scale-label" != "" || "%scale-label" == "10 " || "%scale-label" == "11 " || "%scale-label" == "12 " || "%scale-label" == "01"|| "%scale-label" == "02" || "%scale-label" == "03"',alpha:"1"},{rule:'"%scale-label" == "10a" || "%scale-label" == "11a" || "%scale-label" == "12p" || "%scale-label" == "1p" || "%scale-label" == "2p" || "%scale-label" == "3p"',alpha:"0.6"}]},labels:[]},scaleY:{itemsOverlap:!0,"max-items":50,item:{"font-family":"Arial",color:"#e4e4e4",fontSize:"12px"},placement:"opposite",decimals:"1","offset-start":"19%",format:"%v",values:"0:1:1",guide:{"line-style":"dotted",zIndex:"0","line-color":"#555"},label:{text:""}},scaleY2:{"max-items":3,item:{"font-family":"Arial",color:"#777",fontSize:"9px"},blended:!0,"offset-end":"86%",placement:"opposite","exponent-decimals":"0",format:"%v",values:"0:1:1",guide:{"line-style":"solid",zIndex:"0","line-color":"#333"},label:{text:""}},series:[{type:"stock",scales:"scaleX,scaleY",zIndex:"1",aspect:"candlestick","bar-width":"100%","trend-up":{"background-color":"#000","line-color":"#00ff00","border-color":"#00ff00"},"trend-down":{"background-color":"#ff1111","line-color":"#ff1111","border-color":"#ff1111"},"trend-equal":{"background-color":"#00ff00","line-color":"#00ff00","border-color":"#00ff00"},values:[]},{type:"bar",scales:"scaleX,scaleY2","background-color":"#00ff00",stacked:!0,"bar-width":"90%",values:[]},{scales:"scaleX,scaleY",zIndex:"0",marker:{visible:"false"},aspect:"spline",lineColor:"#BF48BF",lineWidth:"1px",values:[]},{type:"bar",scales:"scaleX,scaleY2","background-color":"#ff1111",stacked:!0,"bar-width":"90%",values:[]}]}}function decodedata(e){var a,l,s,t,i="",o=0,n=1;if(timeoutsecs=0,1==debugg&&(l=new Date),void 0!=e){if(1==debugg&&(console.log(e),console.log("apidatafail="+apidatafail)),(i=e).length>=1&&i.length<=11)if("9"==i)n=0,apidatafail=0,hadtowaitglob=0;else if("6"==i)o=1,apidatafail++;else if("5"==i)o=1,hadtowaitglob++;else if("1"==i.charAt(0)){if(i.indexOf(",")>0){S=i.split(",");S=parseFloat(S[1]),timeoutsecs=S>=1&&S<=3650?S:60}o=1,apidatafail=0,hadtowaitglob=0}if(0==n&&(document.getElementById("status").innerHTML=symbolin+"</span> no chart"),1==debugg&&console.log("*********************************** nochartupdate="+o),1==debugg&&console.log("before currentsdate="+currentsdate+"  currentsfidx="+currentsfidx),1==n&&0==o){i=i.split("~"),days>=i.length?days=i.length:(days=origdays)>=i.length&&(days=i.length);var r,c,g,d,u,f,m,y,h,b,p=[1,78,39,26,13,13,7,7,7,7,7],C=[1,6,3,2,1,1,1,1,1,1,1],v=-1,x=99999999,w=[],X=0,z=0,T=[0,0,0],k=0;for(initconfig(),b=i.length-1;b>=0;b--){if(u=i[b].indexOf("]"),f=i[b].substr(0,u).split(","),m=f[0].substr(6,2),y=i[b].substr(u+1).split("["),0==b){if(currentsdate=f[0],currentsfidx=f[1],"1"==f[3]?apidatafail++:apidatafail=0,"1"==f[2]?hadtowaitglob++:hadtowaitglob=0,0==timeoutsecs&&5==f.length){var S=parseFloat(f[4]);timeoutsecs=S>=1&&S<=3650?S:60}1==debugg&&console.log("j="+b+"  currentsdate="+currentsdate+"  currentsfidx="+currentsfidx+"  dataslots[days]="+p[days])}d=y.length,g=0;var I=p[days]-d;if(1==i.length){if(d<p[days])for(c=0;c<I;c++)y.unshift("")}else if(d<p[days])for(c=0;c<I;c++)y.push("");r=-1;var Y=0;for(c=-1;c<=p[days];c++){if(-1==c||c==p[days])c==p[days]&&0!=b?X--:(myConfig.scaleX.labels[X]="",myConfig.series[0].values.push([null,null,null,null]),myConfig.series[1].values[X]=0,myConfig.series[3].values[X]=0,myConfig.series[2].values[X]=null);else if(days>1||1==days&&1==Y||""!=y[c]){Y=1;var F=g/C[days];if(F-Math.floor(F)==0&&F%2==1)myConfig.scaleX.labels[X]=F>5?.5*(F-1)-2:.5*(F-1)+10,2==days&&10==myConfig.scaleX.labels[X]?myConfig.scaleX.labels[X]="":days>=3&&(10==myConfig.scaleX.labels[X]||12==myConfig.scaleX.labels[X]||2==myConfig.scaleX.labels[X])?myConfig.scaleX.labels[X]="":5!=days||10!=myConfig.scaleX.labels[X]&&11!=myConfig.scaleX.labels[X]&&12!=myConfig.scaleX.labels[X]&&2!=myConfig.scaleX.labels[X]&&3!=myConfig.scaleX.labels[X]?days>5&&(myConfig.scaleX.labels[X]=""):myConfig.scaleX.labels[X]="",""!=myConfig.scaleX.labels[X]&&(myConfig.scaleX.labels[X]<12&&myConfig.scaleX.labels[X]>9?myConfig.scaleX.labels[X]+="a":myConfig.scaleX.labels[X]+="p");else if(0==g){var D=parseInt(m);myConfig.scaleX.labels[X]=D<10?m:10==D||11==D||12==D?parseInt(m)+" ":m}else myConfig.scaleX.labels[X]="";if(g++,""!=y[c])if(""!=(h=y[c].split(","))[3]){var A=parseFloat(h[1]),B=parseFloat(h[2]),O=parseInt(h[4]),E=parseFloat(h[0]),M=parseFloat(h[3]);if(A>v&&(v=A),B<x&&(x=B),myConfig.series[0].values.push([E,A,B,M]),O>z&&(z=O),M<E?(myConfig.series[3].values[X]=O,myConfig.series[1].values[X]=0):(myConfig.series[1].values[X]=O,myConfig.series[3].values[X]=0),O>T[0]?(T[2]=T[1],T[1]=T[0],T[0]=O):O>T[1]?(T[2]=T[1],T[1]=O):O>T[2]&&(T[2]=O),k++,r=parseFloat(h[3]),w.unshift(parseFloat(h[3])),w.length>=12){W=0;for(L=0;L<12;L++)W+=w[L];myConfig.series[2].values[X]=parseFloat((W/12).toFixed(3))}else myConfig.series[2].values[X]=null}else if(r>0)if(myConfig.series[0].values.push([r,r,r,r]),myConfig.series[1].values[X]=0,myConfig.series[3].values[X]=0,w.unshift(r),w.length>=12){var L,W=0;for(L=0;L<12;L++)W+=w[L];myConfig.series[2].values[X]=parseFloat((W/12).toFixed(3))}else myConfig.series[2].values[X]=null;else myConfig.series[0].values.push([null,null,null,null]),myConfig.series[1].values[X]=0,myConfig.series[3].values[X]=0,myConfig.series[2].values[X]=null;else myConfig.series[0].values.push([null,null,null,null]),myConfig.series[1].values[X]=0,myConfig.series[3].values[X]=0,myConfig.series[2].values[X]=null}else myConfig.scaleX.labels[X]="",myConfig.series[0].values.push([null,null,null,null]),myConfig.series[1].values[X]=0,myConfig.series[3].values[X]=0,myConfig.series[2].values[X]=null;X++}}-1!=v&&99999999!=x&&(myConfig.scaleY.values=dwidth<510?x+":"+v+":"+.125*(v-x):x+":"+v+":"+.1*(v-x),myConfig.scaleY.decimals=x<1?"3":x<1e3?"2":"1");var j=0;k>20&&T[0]>2*T[2]&&(j=1,z=T[2]);var H=parseInt(.02*z);for(b=0;b<X;b++)1==j&&(myConfig.series[1].values[b]==T[0]&&(myConfig.series[1].values[b]=T[2]),myConfig.series[3].values[b]==T[0]&&(myConfig.series[3].values[b]=T[2]),myConfig.series[1].values[b]==T[1]&&(myConfig.series[1].values[b]=T[2]),myConfig.series[3].values[b]==T[1]&&(myConfig.series[3].values[b]=T[2])),myConfig.series[1].values[b]>0&&myConfig.series[1].values[b]<H&&(myConfig.series[1].values[b]=H),myConfig.series[3].values[b]>0&&myConfig.series[3].values[b]<H&&(myConfig.series[3].values[b]=H),myConfig.scaleX.labels[b]=myConfig.scaleX.labels[b].toString();z>0&&(myConfig.scaleY2.values="0:"+z+":"+parseInt(.5*z)),dwidth<510&&(myConfig.series[1].barWidth="60%",myConfig.series[3].barWidth="60%"),myConfig.series[0].aspect=0==stickchart?"candlestick":"whisker",v<10&&z>49900?(myConfig.scaleY2.exponent=!0,myConfig.scaleY2.item.fontSize="10px"):v<100&&z>499e3&&(myConfig.scaleY2.exponent=!0,myConfig.scaleY2.item.fontSize="10px"),1==debugg&&(s=new Date,console.log("setup vars time="+(s.getTime()-l.getTime())/1e3),a=new Date),zingchart.render({id:"myChart",data:myConfig,height:"100%",width:"100%"}),zingchart.bind("myChart","contextmenu",function(e){return!1}),zingchart.bind("myChart","mousewheel",function(e){return!1}),zingchart.bind("myChart","swipe",function(e){return!1}),1==debugg&&(t=new Date,console.log("setup render time="+(t.getTime()-a.getTime())/1e3))}}}function cyclechart(){0==onetime&&1!=apidatafail&&1!=hadtowaitglob&&(hadtowaitglob=0,apidatafail=0,timeoutsecs=parseInt(1e3*timeoutsecs),0==timeoutsecs&&(timeoutsecs=6e4),1==debugg&&console.log("normal getting data secs="+timeoutsecs),thetimeout=setTimeout(function(){getdata()},timeoutsecs)),1==apidatafail?(hadtowaitglob=0,1==debugg&&console.log("api fail or timeout getting data 1 secs"),thetimeout=setTimeout(function(){getdata()},1e3)):apidatafail=0,0==onetime&&1==hadtowaitglob?(1==debugg&&console.log("had to wait getting data 5 secs"),thetimeout=setTimeout(function(){getdata()},5e3)):hadtowaitglob=0}function loopuntilzload(e){if(1==zingloaded)1==debugg&&console.log("zingloaded in times="+zloadtries),decodedata(e.responseText),cyclechart();else{if(++zloadtries>maxloadtries)return;var a=100;zloadtries<=3?a=20:zloadtries<=5&&(a=40),setTimeout(function(){loopuntilzload(e)},a)}}function getdata(){if(timeoutsecs=0,thetimeout&&clearTimeout(thetimeout),0==onetime&&document.hidden)return"object"==typeof xhr&&xhr&&xhr.readyState&&xhr.abort(),1==debugg&&console.log("I was hidden"),void(thetimeout=setTimeout(getdata,1e3));1==debugg&&console.log("getting data func days="+origdays),(xhr=new XMLHttpRequest).open("GET","https://www.stockconsultant.com/consultnow/"+cgiprog+".cgi?SYMBOL="+symbolin+"&DAYS="+origdays+"&SDATE="+currentsdate+"&SFIDX="+currentsfidx,!0),1==debugg&&console.log("calling https://www.stockconsultant.com/consultnow/"+cgiprog+".cgi?SYMBOL="+symbolin+"&DAYS="+origdays+"&SDATE="+currentsdate+"&SFIDX="+currentsfidx),xhr.timeout=4500,xhr.onload=function(e){4===xhr.readyState&&(1==debugg&&(endt=new Date,console.log("xhr sucess time="+(endt.getTime()-startt.getTime())/1e3)),xhr.readyState=null,200===xhr.status?(zloadtries=0,loopuntilzload(xhr)):(1==debugg&&(endt=new Date,console.log("xhr status not 200 error time="+(endt.getTime()-startt.getTime())/1e3)),apidatafail++,cyclechart()))},xhr.ontimeout=function(e){1==debugg&&(endt=new Date,console.log("timeout error time="+(endt.getTime()-startt.getTime())/1e3)),xhr.readyState=null,apidatafail++,cyclechart()},xhr.onerror=function(e){1==debugg&&(endt=new Date,console.log("xhr error time="+(endt.getTime()-startt.getTime())/1e3)),xhr.readyState=null,apidatafail++,cyclechart()},1==debugg&&(startt=new Date),xhr.send(null)}function getinput(){var e=0,a=window.location.search.substr(1).split(","),l=document.getElementById("myChart"),s=l.offsetHeight;dwidth=l.offsetWidth,1==debugg&&console.log("dheight="+s+"   dwidth="+dwidth),s>400?(l.style.width="101%",l.style.height="101%"):s>357?(l.style.width="102%",l.style.height="104%"):s<270&&(l.style.width="103%",l.style.height="114%"),window.location.search.length<20&&(4!=a.length?e=1:(((days=parseInt(a[1]))<1||days>10||4==days)&&(e=1),symbolin=a[0],symbolin.length>7&&(e=1),0!=(onetime=a[2])&&1!=onetime&&(e=1),stickchart=a[3]),0==e&&(origdays=days,getdata()))}var myConfig,thetimeout,errorstr="",xhr,days,currentsdate="1",currentsfidx="1",cgiprog="screaltime1b5",hadtowaitglob=0,apidatafail=0,onetime=1,origdays,stickchart=0,j,startt,endt,zloadtries=0,maxloadtries=95,dwidth;