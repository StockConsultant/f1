var conf_array=new Array('Symbol','Price & Volume','','Overall','1d Change','1d Moneyflow','3day Candle','3d Acc/Dist','ST Direction','Overbought/sold','Month Trend','Intermediate Trend','Support/Resistance','Resistance Above','Support Below','Typ/extreme R/P','Breakout','Breakdown','T1 up','T2 up','Stop Up','P/L Up','T1 Pot Up','T1 Dn','T2 Dn','Cover Dn','P/L Dn','T1 Pot Dn'),conf_size=new Array(120,132,0,100,72,85,73,85,80,106,90,134,151,127,127,114,122,122,41,41,52,56,61,40,40,58,44,61),conf_realnum=new Array(0,1,2,3,4,5,6,7,8,16,17,18,19,20,21,22,23,24,25,26,27,9,10,11,12,13,14,15),outstr4,stknum,stknum2,showbars=0,firstrow;function writeplratio2(plr){var os='';if(plr>=2.5)os='<b>';if(plr<2.0)os+='Poor';else if(plr<2.5)os+='Fair';else if(plr<3.8)os+='Good';else os+='Excellent';if(plr>=2.5)os+='</b>';return(os)}
function writebarg2(num,spec){var bjpg,wnum,addspace='';if(num>0){bjpg=sumblue;wnum=num}
else if(num<0){bjpg=sumred;wnum=-num}
else{bjpg=sumneut;wnum=0.5}
if(spec==0)bjpg="#888";if(wnum<=3)wnum=wnum*8;else if(wnum<=7)wnum=24+(wnum-3)*16;else wnum=88+(wnum-7)*24;wnum=mr(wnum*0.6);if(Math.abs(num)>=4)addspace='&nbsp;';return('<div style="padding-top:5px;white-space:nowrap;"><div style="display:inline-block;border-top-right-radius:4px;border-bottom-right-radius:4px;padding:2px;height:16px;width:'+wnum+'px;background:'+bjpg+'">&nbsp;</div><div class="ssp15b" style="display:inline-block;padding-left:4px;padding-right:3px;color:'+bjpg+'">'+num+'</div></div>')}
function checkstillselected(){if(((getselected(0,0)+getselected(1,0))!="")&&(!window.confirm("Stocks still selected, Continue anyway?")))
return(0);else return(1)}
function wlcquotedata(nz,lfv,z9){var temp=pdata[nz][z9].split(","),ts;if(temp[0]<=temp[1])ts='<font color="#0000ee">&#x25B2;</font>';else ts='<font color="#cc0000">&#x25BC;</font>';jtoc(wlcjuldate[nz]-wlcdaysum[nz][z9]);gdivnamepdata[nz].innerHTML=daynamemed[FindDay(dayglb,monthglb,yearglb-1928)]+'&nbsp;'+monthglb+'/'+dayglb+'&nbsp;'+ts+'<br>o:'+temp[0]+'&nbsp;c:'+temp[1]}
function returnportfstks(){if(portf=="1")return("**NONE");return(totsearchstr)}
function donext(){showpoptext('','',void 0,0,0,99);donotremovestocks=1;if(curremoved>0)
sfrom+=numstocks-curremoved;else sfrom=stoo;if(sfrom>=stotal)sfrom-=numstocks;consult(returnportfstks(),0,0,2,0)}
function selectnext(idstr){if((getselected(0,0)+getselected(1,0))!="")
showpoptext('Stocks still selected, Continue anyway?',smallbutstr+'onclick="getid(\'poptext\').style.display=\'none\';">Cancel</span> &nbsp;&nbsp; '+smallbutstr+'onclick="donext();">OK</span>',idstr,130,90,0);else donext()}
function doprev(){showpoptext('','',void 0,0,0,99);sfrom-=numstocks;if(sfrom<0)sfrom=0;consult(returnportfstks(),0,0,2,0)}
function selectprev(idstr){if((getselected(0,0)+getselected(1,0))!="")
showpoptext('Stocks still selected, Continue anyway?',smallbutstr+'onclick="getid(\'poptext\').style.display=\'none\';">Cancel</span> &nbsp;&nbsp; '+smallbutstr+'onclick="doprev();">OK</span>',idstr,130,90,0);else doprev()}
function dofirst(){showpoptext('','',void 0,0,0,99);sfrom=0;consult(returnportfstks(),0,0,2,0)}
function selectfirst(idstr){if((getselected(0,0)+getselected(1,0))!="")
showpoptext('Stocks still selected, Continue anyway?',smallbutstr+'onclick="getid(\'poptext\').style.display=\'none\';">Cancel</span> &nbsp;&nbsp; '+smallbutstr+'onclick="dofirst();">OK</span>',idstr,150,90,0);else dofirst()}
function dolast(){showpoptext('','',void 0,0,0,99);donotremovestocks=1;sfrom=stotal-numstocks;if(sfrom<0)sfrom=0;consult(returnportfstks(),0,0,2,0)}
function selectlast(idstr){if((getselected(0,0)+getselected(1,0))!="")
showpoptext('Stocks still selected, Continue anyway?',smallbutstr+'onclick="getid(\'poptext\').style.display=\'none\';">Cancel</span> &nbsp;&nbsp; '+smallbutstr+'onclick="dolast();">OK</span>',idstr,150,90,0);else dolast()}
function writeinfo(symlen){var l3=[],l3n=0;var i,nd,nz=0,ts2;if(charts==0){var overstr='';if(tabletmode==1)overstr='overflow-x:auto;overflow-y:hidden;';document.write(divsp20+'<div style="white-space:nowrap;'+overstr+'"><table style="border-top-left-radius:3px;border-top-right-radius:3px;background:#dadbdc" border="0" bgcolor="#dadbdc" cellspacing="0" cellpadding="0"><tr><td><table border="0" CELLSPACING="1" CELLPADDING="1">')}
for(i=0;i<symlen;i++){nd=sd(i);if(charts==1){document.write(writelargewlc(currentzoomwlc[i],i,nd),od(i,nd))}else od(i,nd)}
if(charts==0){document.write('</table></td></tr></table></div>')}
if(charts==1){for(i=0;i<symlen;i++)
if(wlc_nochart[i]==0){gdivnametsm[i]=getid("ttb"+i);gdivnamepdata[i]=getid("pdatadiv"+i);pdataright[i]=1;wlcquotedata(i,624,0);wlcwriteoverallsum("overallsum"+i,i)}}}
document.write('<div id="vimg" style="border:0.5px solid #999;background:#fff;display:none;z-index:10;position:absolute;top:0px;left:0px;padding:0px;"><!-- --></div>');function showvimg(num,id,ofsx,ofsy,targeturl){var temp=document.getElementById('vimg'),temp2=document.getElementById(id),rnum=Math.round(Math.random(1)*10000)
temp.style.left=(zxcPos(temp2)[0]-ofsx)+"px";temp.style.top=(zxcPos(temp2)[1]-ofsy)+"px";temp.innerHTML='<img width=430 height=209 src="https://www.finviz.com/chart.ashx?s=1m&ty=c&p=d&t='+num+'">';temp.style.display="block"}
function hidevimg(){document.getElementById('vimg').style.display="none"}
var i,tempstr,plusstr,ftcolor,bgc,pchange,plusstr,ppercent,volchange,plr,plr2;function od(stknum,data){var ts,tsb,j,i,idx,idx2,sumofpix,z,bld1,bld2,row=stknum+1,ts2,l3=new Array(),n=0,nbz='</a></div>';iso2='<div style="display:inline-block;padding-top:2px;padding-bottom:1px;padding-right:13px;"><a style="text-decoration:none;" onmouseover="isl=1;"onmouseout="isl=0;"href="javascript:void(0);"onclick="ow(';idx=0;idx2=0;ts='<td style="padding:4px 10px 3px 4px;color:#000" class="ssp14b" nowrap>';ts2='';tsb='<td style="text-align:center;padding:4px 8px 3px 8px;color:#fcfdfe" class="ssp15" nowrap>'
if(charts==1){if((nochart==1)||(insymbol.charAt(0)!="*")){l3[n++]='<div style="padding:0px 5px 1px 5px;"><div style="display:inline-block;min-width:400px;padding-left:5px;padding-top:2px;border:1px solid #dadbdc;background:#eeeff0;border-radius:6px;" class="ssp16">'+iso2+stknum+',60,1);return false;">Profile'+nbz+iso2+stknum+',66,1,1);return false;">Stats'+nbz+iso2+stknum+',87,0);return false;">PmQ'+nbz+iso2+stknum+',88,0);return false;">AhQ'+nbz+iso2+stknum+',22,0);return false;">RTQ'+nbz+iso2+stknum+',44,1);return false;">(2)'+nbz+iso2+stknum+',134,0);return false;">NLS';l3[n++]=nbz+iso2+stknum+',106,1,1);return false;">EarnsDate'+nbz;l3[n++]=iso2+stknum+',78,1,1);return false;">Industry'+nbz+iso2+stknum+',12,1,1);return false;">News'+nbz+iso2+stknum+',127,0,1);return false;">Tweets'+nbz+iso2+stknum+',20,0,1);return false;">STwits'+nbz+iso2+stknum+',19,1,1);return false;">Forum'+nbz;l3[n++]=iso2+stknum+',49,0,1);return false;">Options</a>';if(nochart==0){if((searcht=="1")||(searcht=="2")||(searcht=="3"))pg=3;else pg=1;l3[n++]=' <div style="display:inline-block;padding-left:25px;padding-top:3px;padding-right:13px;padding-bottom:1px;"><a style="text-decoration:none;" onmouseover="isl=1;"onmouseout="isl=0;"href="javascript:void(0);"onclick="consult(\''+insymbol+'\','+pg+',0,0,0,\'LONGT\');return false;">L_ReCalc'+nbz+'<div style="display:inline-block;padding-top:3px;padding-bottom:1px;"><a style="text-decoration:none;" onmouseover="isl=1;"onmouseout="isl=0;"href="javascript:void(0);"onclick="consult(\''+insymbol+'\','+pg+',0,0,0,\'SHORTT\');return false;">S_ReCalc</a></div>'}
l3[n++]='</div></div></div>'}}
if(charts==1)
l3[n++]='<div style="padding-top:5px;padding-left:4px;">';if((charts==0)&&((stknum%5)==0)){l3[n++]='<tr bgcolor="#917d7d">';j=0;for(z=0;z<conf_array.length;z++){i=conf_realnum[z];if((conf_defaults[activeconfig].substr(i,1)=='1')||(i==0)){if((i==0)&&(charts==0)){l3[n++]=tsb+'SEL</td>';if((portf=="1")&&(isuserlist()))
l3[n++]=tsb+'REM</td>'}
l3[n++]=tsb+conf_array[i]+'</td>';if(((j%10)==0)&&(j!=0))l3[n++]=tsb+'Symbol</td>';j++}}
l3[n++]='</tr>'}
if(charts==0)
l3[n++]='<tr id="tr'+stknum+'" style="background:#fff;">';j=0;for(z=0;z<conf_array.length;z++){i=conf_realnum[z];if((conf_defaults[activeconfig].substr(i,1)=='1')||(i==0)){if(charts==0){if(i==0)l3[n++]='<td style="background:#edeeef;';else if(showbars!=0)l3[n++]='<td style="padding-left:5px;padding-right:5px;';if((i==0)||(showbars!=0))l3[n++]='vertical-align:middle;" align="left"';else l3[n++]='<td style="padding-right:5px;padding-left:5px;vertical-align:middle;" align="right"'}else{l3[n++]='<div style="vertical-align:top;padding-top:3px;display:inline-block;white-space:nowrap;border-left:1px solid #fff;">';l3[n++]='<div class="ssp15" style="border-top-left-radius:3px;border-top-right-radius:3px;padding:3px 8px 2px 8px;text-align:center;vertical-align:middle;background:#917d7d;color:#fcfdfe;">';l3[n++]=conf_array[i]+'</div>';var alignstr='right';if((i==0)||(showbars!=0))alignstr='left';l3[n++]='<div class="ssp14" style="min-height:38px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;padding:1px 5px 0px 5px;text-align:'+alignstr+';vertical-align:middle;background:#eeeff0;">'}
if((i==0)&&(charts==0)){l3[n++]=' class="ssp14" nowrap><label for="selstk'+stknum+'">&nbsp; ';l3[n++]='<input style="cursor:pointer;width:20px;height:20px;position:relative;top:0px;"type="checkbox" onclick="selectstock('+stknum+',0,0)" value="" id="selstk'+stknum+'"> &nbsp;</label></td>';if((portf=="1")&&(isuserlist())){l3[n++]='<td align=left class="ssp14" nowrap style="background:#edeeef">';l3[n++]='<label for="remstk'+stknum+'">&nbsp; <input style="cursor:pointer;width:20px;height:20px;position:relative;top:0px;"type="checkbox" onclick="selectstock('+stknum+',0,1)" value="" id="remstk'+stknum+'"> &nbsp;</label></td>'}
l3[n++]='<td align=left class="ssp14" nowrap>'}else if(charts==0)
l3[n++]=' class="ssp14" nowrap>';if(data==1){if(i<10){if(i==0){dodatestuff(linedata[0],linedata[1],2,1);l3[n++]='<div style="display:inline-block;white-space:nowrap"><b style="padding-left:3px;">'+(sfrom+(stknum%numstocks)+1)+'</b>. ';if((searcht=="1")||(searcht=="2")||(searcht=="3"))pg=3;else pg=1;l3[n++]='<a style="text-decoration:none;" class="ssp15b" title="Click for Consultant page on '+insymbol+'" onmouseover="isl=1;"onmouseout="isl=0;"href="javascript:void(0);"onclick="consult(\''+insymbol+'\','+pg+',0,0,0,0);return false;">'+insymbol+'</a> ';if((charts==0)&&(insymbol.indexOf("*")<0)){l3[n++]='&nbsp; <span id='+('ppstk'+stknum)+' style="z-index:115;cursor:pointer;"onmouseover="showvimg(\''+insymbol+'\',\''+('ppstk'+stknum)+'\',-50,100,1)"onmouseout="hidevimg()"><img style="position:relative;top:7px;"width=26 height=23 border=0 src="https://cdk.stockconsultant.com/img/graphicon.png">&nbsp; </span>'}
l3[n++]=timestr;l3[n++]='<br>&nbsp;'+datestr;l3[n++]='</div>'}
else if(i==1){pchange=Math.round((cprice-prevclose)*100.0)/100.0;if(pchange<0){plusstr="";ftcolor="#ee2222"}else{plusstr="+";ftcolor="#2222ee"}
ppercent=trimnumfxd(Math.round((pchange/prevclose)*10000.0)/100.0);l3[n++]='<font color="'+ftcolor+'">'+cprice+','+plusstr+pchange+' pts ('+plusstr+ppercent+'%)</font>';l3[n++]='<br>&nbsp;&nbsp;';if((indexes==1)&&(indxmult==0)){curvold=0;avgvold=0}
if(globtimerat>1.0)globtimerat=1.0;volchange=0.0;avgvold=avgvold*globtimerat;if(avgvold>0.0)volchange=trimnumfxd((curvold-avgvold)/avgvold*100.0);bld1="";bld2="";if(volchange<0){plusstr="";ftcolor="#FF0000"}else{if(volchange>70){bld1="<b>";bld2="</b>"}plusstr="+";ftcolor="#0000FF"}
l3[n++]='<font style="padding-top:2px;" color="'+ftcolor+'">'+bld1+volscale(curvold)+' ('+plusstr+trimnumfxd(volchange)+'%)'+bld2+'</font>'}
else if(i==2){}
else if(i==3){bullindtxt=(bullind-50)/5;if(showbars==0){var temp,sign='';if(bullindtxt<0)temp=rateddescr[-bullindtxt+11].split(" ");else{sign='+';temp=rateddescr[bullindtxt].split(" ")}
if(temp.length==3)temp=" "+temp[0]+'<br>'+temp[1]+' '+temp[2];else temp='<br>'+temp.join(" ");l3[n++]=temp}else l3[n++]=writebarg2(bullindtxt,1)}
else if(i==4){if(showbars==0){if(rchange>=0)l3[n++]="+"+rchange+"<br>"+pricesdescrip[rchange];else l3[n++]=rchange+"<br>"+pricesdescrip[-rchange+11]}else l3[n++]=writebarg2(rchange,1)}
else if(i==5){if(showbars==0){plusstr="+";if(flowdir==2)plusstr="-";l3[n++]=plusstr+moneyflow+"<br>"+mfsdescip[moneyflow].substr(0,7)+" "+flowdescr[flowdir]}else{var tmpmonflow=moneyflow;if(flowdir==2)tmpmonflow=-tmpmonflow;l3[n++]=writebarg2(tmpmonflow,flowdir)}}
else if(i==6){if(showbars==0){if(chartvdescrip[advbulldays]>=0)l3[n++]='+'+chartvdescrip[advbulldays]+"<br>"+chartdescrip[chartvdescrip[advbulldays]];else l3[n++]=chartvdescrip[advbulldays]+"<br>"+chartdescrip[-chartvdescrip[advbulldays]+11]}else l3[n++]=writebarg2(chartvdescrip[advbulldays],1)}
else if(i==7){if(showbars==0){plusstr="+";if(flowdir3d==2)plusstr="-";l3[n++]=plusstr+moneyflow3d+"<br>"+mfsdescip[moneyflow3d].substr(0,7)+" "+flowtype[flowdir3d]}else{var tmpmonflow3d=moneyflow3d;if(flowdir3d==2)tmpmonflow3d=-tmpmonflow3d;l3[n++]=writebarg2(tmpmonflow3d,flowdir3d)}}
else if(i==8){if(showbars==0){if(ldir2<0)l3[n++]=ldir2+"<br>"+rallypullsdescip[-ldir2+11];else l3[n++]="+"+ldir2+"<br>"+rallypullsdescip[ldir2]}else l3[n++]=writebarg2(ldir2,1)}
else if(i==9){if(showbars==0){if(boughtidx<0)l3[n++]=boughtidx+"<br>"+boughtsdescip[-boughtidx+11];else l3[n++]="+"+boughtidx+"<br>"+boughtsdescip[boughtidx]}else l3[n++]=writebarg2(boughtidx,1)}}
else if(i<20){if(i==10){if(showbars==0){if(monthtrend>=0)l3[n++]="+"+monthtrend+"<br>"+monthtrendsdescrip[monthtrend];else l3[n++]=monthtrend+"<br>"+monthtrendsdescrip[-monthtrend+11]}else l3[n++]=writebarg2(monthtrend,1)}
else if(i==11){if(showbars==0)l3[n++]=trenddescrip[intertrend];else l3[n++]=writebarg2(trendstatnum[intertrend],1)}
else if(i==12){if(rescomment>=0)l3[n++]=rescomdescrip[rescomment];else l3[n++]=rescomdescrip[-rescomment+11];tempnum=-1;if(justinres>=0)tempnum=justinres;else if(justoutres>=0)tempnum=justoutres;if(tempnum>=0){bld1="";bld2="";if(restype[tempnum]>1){bld1="<b>";bld2="</b>"}l3[n++]='<br>'+bld1+trimnum(resprice[tempnum])+bld2+' &#177 '+trimnum(resprice[tempnum]*reswidth)+', type '+writerestype2(restype[tempnum])+', '+resstrength[tempnum]}}
else if(i==13){portfstr=resabove[0].split(",");tempstr="";if(portfstr.length>=1)
for(j=0;j<portfstr.length;j++)if(j==0)tempstr+=portfstr[j]+'<br>';else tempstr+=portfstr[j];else tempstr=resabove[0];l3[n++]=tempstr}
else if(i==14){portfstr=supbelow[0].split(",");tempstr="";if(portfstr.length>=1)
for(j=0;j<portfstr.length;j++)if(j==0)tempstr+=portfstr[j]+'<br>';else tempstr+=portfstr[j];else tempstr=supbelow[0];l3[n++]=tempstr}
else if(i==15){l3[n++]='typ:'+typmove+' pts '+Math.round(typmove/cprice*100.0*10.0)/10.0+'%<BR>ex:'+exmove+' pts '+Math.round(exmove/cprice*100.0*10.0)/10.0+'%'}
else if(i==16){plr=0.0;plr2=0.0;if(cprice>0.0)plr2=(upsidebreak+upbrkamount-cprice)/cprice*100.0;if(lossl>0.0)plr=trimnumfxd(plr2/lossl);plr2=trimnumfxd(plr2);tempstr='';tempnum=-1;if(justinres>=0)tempnum=justinres;else if(justoutres>=0)tempnum=justoutres;if(tempnum>=0){if(restype[tempnum]>1)tempstr="True";else tempstr="Cont"}
if(confirmupbrk==1){l3[n++]='<b>Cfirmd></b>'+upsidebreak+'&nbsp;&nbsp;T:'+trimnum(upsidebreak+upbrkamount)+'<br> +'+plr2+'%'+'&nbsp; P/L:'+plr+':1&nbsp;'+tempstr}
else if((isnotbearish)&&(!bearish1daymonflow)&&(justoutres>=0)&&(upsidebreak>0.0)){l3[n++]='<b>Poss ></b>'+upsidebreak+'&nbsp;&nbsp;T:'+trimnum(upsidebreak+upbrkamount)+'<br> +'+plr2+'%'+'&nbsp; P/L:'+plr+':1&nbsp;'+tempstr}
else if((justinres>=0)&&(upsidebreak>0.0)){l3[n++]='<b>Watch></b>'+upsidebreak+'&nbsp;&nbsp;T:'+trimnum(upsidebreak+upbrkamount)+'<br> +'+plr2+'%'+'&nbsp; P/L:'+plr+':1&nbsp;'+tempstr}
else l3[n++]='None.'}
else if(i==17){plr=0.0;plr2=0.0;if(cprice>0.0)plr2=(cprice-(dwnsidebreak-dwnbrkamount))/cprice*100.0;if(losss>0.0)plr=trimnumfxd(plr2/losss);plr2=trimnumfxd(plr2);tempstr='';tempnum=-1;if(justinres>=0)tempnum=justinres;else if(justoutres>=0)tempnum=justoutres;if(tempnum>=0){if(restype[tempnum]>1)tempstr="True";else tempstr="Cont"}
if(confirmdwnbrk==1){l3[n++]='<b>Cfirmd\<</b>'+dwnsidebreak+'&nbsp;&nbsp;T:';if((dwnsidebreak-dwnbrkamount)>0)l3[n++]=trimnum(dwnsidebreak-dwnbrkamount)+'<br> -'+plr2+'%'+'&nbsp; P/L:'+plr+':1&nbsp;'+tempstr;else l3[n++]=' N/A '}
else if((isnotbullish)&&(!bullish1daymonflow)&&(justoutres>=0)&&(dwnsidebreak>0.0)){l3[n++]='<b>Poss \<</b>'+dwnsidebreak+'&nbsp;&nbsp;T:';if((dwnsidebreak-dwnbrkamount)>0)l3[n++]=trimnum(dwnsidebreak-dwnbrkamount)+'<br> -'+plr2+'%'+'&nbsp; P/L:'+plr+':1&nbsp;'+tempstr;else l3[n++]=' N/A '}
else if((justinres>=0)&&(dwnsidebreak>0.0)){l3[n++]='<b>Watch\<</b>'+dwnsidebreak+'&nbsp;&nbsp;T:';if((dwnsidebreak-dwnbrkamount)>0)l3[n++]=trimnum(dwnsidebreak-dwnbrkamount)+'<br> -'+plr2+'%'+'&nbsp; P/L:'+plr+':1&nbsp;'+tempstr;else l3[n++]=' N/A '}
else l3[n++]='None.'}
else if(i==18){l3[n++]=target1_long+'<br>+'+profit1_long+'%'}
else if(i==19){l3[n++]=target2_long+'<br>+'+profit2_long+'%'}}else{if(i==20){l3[n++]=shortprice+'<br>-'+lossl+'%'}
else if(i==21){l3[n++]=plratiol+' : 1<br>'+writeplratio2(plratiol)}
else if(i==22){l3[n++]=rallypottxt[10-resinwaystrenl]+'<br>'+numresinwayl+' res to T1'}
else if(i==23){if(target1_short>0)l3[n++]=target1_short+'<br>-'+profit1_short+'%';else l3[n++]=' N/A '}
else if(i==24){if(target2_short>0)l3[n++]=target2_short+'<br>-'+profit2_short+'%';else l3[n++]=' N/A '}
else if(i==25){if(target1_short>0)l3[n++]=coverprice+'<br>+'+losss+'%';else l3[n++]=' N/A '}
else if(i==26){if(target1_short>0)l3[n++]=plratios+' : 1<br>'+writeplratio2(plratios);else l3[n++]=' N/A '}
else if(i==27){if(target1_short>0){l3[n++]=rallypottxt[10-resinwaystrens]+'<br>'+numresinways+' sup to T1'}else l3[n++]=' N/A '}}}else{if(i==0){if(insymbol=="")insymbol="No Symbol!";l3[n++]='<b>'+(sfrom+(stknum%numstocks)+1)+'</b>. ';if((searcht=="1")||(searcht=="2")||(searcht=="3"))pg=3;else pg=1;l3[n++]='<a "ssp15b" style="text-decoration:none;" href="javascript:void(0);"onclick="consult(\''+insymbol+'\','+pg+',0,0,0,0);return false;">'+insymbol+'</a><br><span class="ssp14" style="color:#000;">NO DATA AVAILABLE</span>'}
else l3[n++]='N/A'}
if(charts==0)l3[n++]='</td>';else l3[n++]='</div></div>';if((charts==0)&&((j%10)==0)&&(j!=0)){if((searcht=="1")||(searcht=="2")||(searcht=="3"))pg=3;else pg=1;l3[n++]='<td align="center" nowrap><a style="text-decoration:none;" class="ssp14b" onmouseover="isl=1;"onmouseout="isl=0;"href="javascript:void(0);"onclick="consult(\''+insymbol+'\','+pg+',0,0,0,0 );return false;">'+insymbol+'</a></td>'}
j++}}
idx2=idx;if(charts==1)l3[n++]='</div>';else l3[n++]='</tr>';if(charts==0)
document.write(l3.join(""));else return(l3.join(""))}
function changeactivecfg(num){var prevcfg=activeconfig;activeconfig=getid('cfg').selectedIndex;var i,j=0,newstr="";if((searcht=="1")||(searcht=="2")){if((searcht=="1")&&(getid('sf5').selectedIndex>0))j=16+getid('sf5').selectedIndex;else if((getid('scpre').selectedIndex>0)&&(activeconfig!=prevcfg)){showpoptext('Output data styles are fixed for PreScreen searches.',smallbutstr+'onclick="getid(\'poptext\').style.display=\'none\';">OK</span>','cfg',10,90,0);getid('cfg').selectedIndex=prevcfg;activeconfig=prevcfg;return}
for(i=0;i<activelist[1].length;i++)if(i==j)newstr+=activeconfig.toString(16);else newstr+=activelist[1].charAt(i);activelist[1]=newstr}else if(portf=="1"){if((portfactivel==5)&&(seclist<=1)&&(schart==1))j=16;else j=portfactivel;for(i=0;i<activelist[1].length;i++)if(i==j)newstr+=activeconfig.toString(16);else newstr+=activelist[1].charAt(i);activelist[1]=newstr}else if(searcht=="3"){for(i=0;i<activelist[1].length;i++)if(i==j)newstr+=activeconfig.toString(16);else newstr+=activelist[1].charAt(i);activelist[1]=newstr}
if((searcht=="2")||(searcht=="3"))updateglobs(0,activelist[0],0);else if((searcht=="1")&&(initsearchstr!=getsearchstr(1,0))||(num==1)||((symlen<=0)&&(searcht=="1")))updateglobs(0,activelist[0],0);else updateglobs(0,activelist[0],1)}
function getactiveconfig(){var j=0;if(searcht=="3"){activeconfig=parseInt(activelist[1].charAt(j),16)}
else if((searcht=="1")||(searcht=="2")){if((searcht=="1")&&(getid('sf5').selectedIndex>0)){j=16+getid('sf5').selectedIndex;activeconfig=parseInt(activelist[1].charAt(j),16)}
else if(getid('scpre').selectedIndex>0){j=getid('scpre').selectedIndex;activeconfig=parseInt(preset_conf.charAt(j),16)}
else activeconfig=parseInt(activelist[1].charAt(j),16)}else{if((portfactivel==5)&&(seclist<=1)&&(schart==1))j=16;else j=portfactivel;activeconfig=parseInt(activelist[1].charAt(j),16)}
if((searcht=="2")&&(ppnum==0))getid('cfg').selectedIndex=0;else getid('cfg').selectedIndex=activeconfig}
var searchrangestr="";function writesymdet_portf(){if(portf=="1"){if((portfactivel==5)&&(seclist<=1)&&(schart==1))
activeconfig=parseInt(activelist[1].charAt(16),16);else activeconfig=parseInt(activelist[1].charAt(portfactivel),16)}
var i,outstr2='<span class="ssp18b" style="position:relative;top:2px;color:#fff;">Results</span>&nbsp; ',sortstr="Off",barstr="Off",yellf='<font color="#FFFF00">';if((searcht==1)||(searcht==3))outstr2+=' &nbsp; &nbsp; ';else outstr2+=' &nbsp; &nbsp; '+daybstr;outstr2+=' &nbsp; <span class="ssp16" style="position:relative;top:1px;color:#ffffff;padding-right:6px;">Output Data</span></font><select class="ssp16" id="cfg" onChange="changeactivecfg(0)"';if((searcht=="2")||(searcht=="3"))outstr2+=' disabled> ';else outstr2+='> ';for(i=0;i<conf_names.length;i++)outstr2+="<option>"+(i+1)+": "+conf_names[i];outstr2+="</select>";if(conf_defaults[activeconfig].substr(29,1)=='1'){showbars=1;barstr="On"}
if((activeconfig==8)||(searcht=="2")||(searcht=="3"))outstr2+='&nbsp; &nbsp; &nbsp; ';else outstr2+=' &nbsp; <a rel="nofollow" id="configlistw" onmouseover="isl=1;"onmouseout="isl=0;"href="javascript:void(0);"onclick="editlistwin(1);" class="ssp17b" style="color:#ffff00;text-decoration:none;border:0.5px solid #ccc;border-radius:6px;padding:3px 5px">Edit</a>';if((searcht=="3")&&(symlen>0))
outstr2+=' &nbsp; &nbsp;&nbsp; <a class="ssp14b" style="text-decoration:none;" onclick="refreshwin();return false;" href="javascript:void();">&nbsp;<img style="position:relative;top:4px;" width="20" src="https://cdk.stockconsultant.com/img/refreshwht128.png">&nbsp;</a>';else if((searcht!="1")&&(searcht!="2")&&(symlen>0))
outstr2+=' &nbsp; &nbsp;&nbsp; <a class="ssp14b" style="text-decoration:none;" onclick="globnameloc=\'resultstab\';refreshwin();return false;" href="javascript:void();">&nbsp;<img style="position:relative;top:4px;" width="20" src="https://cdk.stockconsultant.com/img/refreshwht128.png">&nbsp;</a>';if(((searcht=="1")||(searcht=="2")||(searcht=="3"))&&(symlen>0)){searchrangestr='<div style="padding:7px 0px 0px 10px;"><span class="ssp17" style="background:#eeeff0;border-radius:6px;border:1px solid #dadbdc;padding:5px 10px;">Found: <b>'+extot+'</b> stocks, Listing <b>'+(sfrom+1)+'</b> through <b>'+stoo+'</b>';if((searcht!="2")&&(searcht!="3")){searchrangestr+=',&nbsp; sorted by <span id="bysortid"></span>'}
searchrangestr+='</span></div>';var temptxt='SearchTool',temptxt2=' per screen';if(searcht=="2")temptxt='PreScreener';else if(searcht=="3"){temptxt='Stocks To Watch';temptxt2=''}
if((!pageoverride)&&(sample==1))searchrangestr+='<br><span style="padding-left:10px;line-height:2.1em;" class="ssp16">*** Free '+temptxt+' limited to 3 results'+temptxt2+',<br> &nbsp;&nbsp; <a class="ssp18" style="text-decoration:none;padding:5px 10px;border-width:0px;border-radius:6px;cursor:pointer;background:#6E87A4;color:#fff;" HREF="https://www.stockconsultant.com/signup.html" target=_top>Sign Up</a> to unlock all results.</span>'}
outstr2+='</td><td style="position:relative;top:8px;" align=right>';if((symlen>0)&&(searcht!="1")&&(searcht!="2")&&(searcht!="3")){outstr2+='<span class="kbdb" style="color:#fff">';if((seclist<=1)&&(portfactivel==5)){var secstr=sectornames.split(","),secsyms=orgsymbol.split(","),num=isinlist(secsyms[0],sectorsdef);outstr2+=secstr[num]+' sector'}
else if(portfactivel>0){var sortit=mystocks2[portfactivel].split("|");outstr2+=sortit[0]+' list'}
outstr2+='</span>'}
if((searcht=="1")||(searcht=="2")||(searcht=="3"))outstr2+='<span id="searchtxt" class="ssp14" style="color:#ffffff;"></span>';document.write(outstr2+'&nbsp;')}
doneloading4=1;
