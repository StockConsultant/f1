var numofsforms, numkeys, n=0, m, l4="",daybstr2='',
zx,numuserkeys=0,stockdatau=[],searchdu=[],typeofdata="",
goodtq="Good long trade qualities: at/just above support, good+ neutral/bullish 1 day money flow, neutral/bullish 3 day candlestick chart, good+ long P/L ratio and target 1 potential. ",
goodtqsht="Good short trade qualities: at/just below resistance, good+ neutral/bearish 1 day money flow, neutral/bearish 3 day candlestick chart, good+ short P/L ratio and target 1 potential. ",
poorupl="Poor long P/L ratio.",
lpstk="Stocks priced under $12 ",lpstk2="Long Under $12 ",hpstk="Stocks priced $12+ ",hpstk2="Long 12+ ",
lpstk2sht="Short Under $12 ",hpstk2sht="Short 12+ ",
sortedpstr=" Sorted by long target 1 profit (%). The 6 month typical volume is 300k or more.",sortedbostr=" Sorted by breakout profit (%). The 6 month typical volume is 300k or more.",sortedbdstr=" Sorted by breakdown profit (%). The 6 month typical volume is 300k or more.",
sortedpstrsht=" Sorted by short target 1 profit (%). The 6 month typical volume is 300k or more.",
breakmf=" Also with mild to strong+ neutral/bullish 1 day money flow and good breakout P/L ratio. ",
breakmfsht=" Also with mild to strong+ neutral/bearish 1 day money flow and good breakdown P/L ratio. ",
i, j, k, start, end, target, tolook, datazstr="", dataz="", first,configstr,
zstr="",zstrhead="",checkstr,menustr,menuarray,curitems,menulen,evalstr="",
selectnum, currentset, selectnum, searchstr, prestr, addspace, tempout, selstart, arraylen,
tmparray, cmlen, cursearchstr, temparray,typeofsearch="searchd",
therealnum = [0,2,1,26,9,6,8,7,5,10,11,12,13,15,17,14,16,27,18,20,3,22,24,19,21,4,23,25],
alltrue,mapnum,allmap,doand,addaor,toomanysorts,sorttemp,
oarry = [], onum=0, testnum=0, curnum=0, charnum=0, lastnum=0, tempcode=0 ,tempcode2=0,
listwin=null,sortby=0,sc666fullprestr="",foundold=0,sc666fullpreary,
trendcodeform = ['0: ALL','1: Sideways trend','2: Downtrend turned sideways, possible bottom','3: Unsustainable uptrend, may turn sideways','4: Uptrend turned sideways, may continue or pullback','5: Obsolete, see number 9,2','6: Obsolete, see number 4','7: Uptrend with recent pullback','8: Sideways trend near lower support','9: Mild uptrend','a: Sideways trend near upper resistance','b: Uptrend','c: Unsustainable downtrend, may turn sideways','d: Downtrend'],
pricecodeform = ['0: ALL','1: 0-5','2: 5-12','3: 12-25','4: 25-40','5: 40-70','6: > 70'],
volcodeform = ['0: ALL','1: 0-100K','2: 100K-300K','3: 300K-600K','4: 600K-1M','5: > 1Mil'],
ratedcodeform = ['0: ALL','1: Neutral','2: 65-75% Mild bullish','3: 65-75% Mild bearish','4: 80-85% bullish','5: 80-85% bearish','6: 90% Strong bullish','7: 90% Strong bearish','8: 95%+ Extreme bullish','9: 95%+ Extreme bearish'],
sortbycodeform = ['0: None','1: Price','2: 6 mo Typical Volume','3: Typical Rallies/Pullbacks','4: Long Target 1 Profit','5: Long Target 1 Profit/loss','6: Short Target 1 Profit','7: Short Target 1 Profit/loss','8: Breakout Profit','9: Breakdown Profit','a: Overall Rated','b: Long Target Potential','c: Short Target Potential','d: Support/Resistance Type','e: Breakout Type','f: Breakdown Type'],
showst=0,showend=6,cleanfrom=0,idx=0,z=0,endnum=0,
customcode = ['0: User Preset List','1: -open-','2: -open-','3: -open-','4: -open-','5: -open-','6: -open-','7: -open-','8: -open-','9: -open-','10: -open-','11: -open-','12: -open-','13: -open-','14: -open-','15: -open-','16: -open-','17: -open-','18: -open-','19: -open-','20: -open-','21: -open-','22: -open-','23: -open-','24: -open-','25: -open-'],
scdscode = ["Founder Screens",
"1: Momo stocks below $12.",
"2: Momo stocks above $12.",
"3: Breakout stocks below $12.",
"4: Breakout stocks above $12.",
"5: Breakdown stocks below $12.",
"6: Breakdown stocks above $12.",
"7: Targeted Long Trade setups, all prices, typ volume above 300k.",
"8: Targeted Breakout Trade setups, all prices, typ volume above 300k.",
"9: Targeted Short Trade setups, price above 5, typ volume above 300k.",
"10: Targeted Breakdown Trade setups, price above 5, typ volume above 300k."
],
scdsstr = ['',
',12,,45,00!0!!0!00,124,,1234567,,12,000,124,00000,345,,34,,456,00000004',
',3456,,45,00!0!!0!00,124,,1234567,,12,000,124,00000,345,,34,,456,00000004',
',12,,45,00!0!!0!,12456789abcd,,1234567,,12345,,12345,,124,000000000000,24,,2345,000008',
',3456,,45,00!0!!0!,12456789abcd,,1234567,,12345,,12345,,124,000000000000,24,,2345,000008',
',12,,45,00!0!!0!,123456789abd,,1234567,,12345,,12345,000000000000000000,24,09',
',3456,,45,00!0!!0!,123456789abd,,1234567,,12345,,12345,000000000000000000,24,09',
// '0,345,,2468,0!0!!0!,124789b,,1234579,,124,0,12,100,12,00,12,,1234,0,2345,,34,,456,00000004',
'0,345,,2468,0!0!!0!0,1234579,,124,,135,,12,100,124,00,12,00,2345,,34,,456,00000004',
// '0,345,00!0!!0!,124789abcd,,12345679,,124,,12,,124,000,24,0,1234,0,2345,000,234,,234,,2345,000008',
'0,345,00!0!!0!,124789abcd,,12345679,,124,,12,,124,000,124,0,1234,00000,2345,,234,,2345,000008',
// ',23456,,345,,3579,0!0!!0!,14ad,,1234568,,135,0,13,500,13,00,13,,1234,000000,2345,,34,,456,006',
',23456,,345,,3579,0!0!!0!0,1234568,,135,,124,,13,500,135,00,13,0000000,2345,,34,,456,006',
// ',23456,,345,00!0!!0!,1234789abd,,12345678,,135,,13,,135,000,35,0,1234,0,2345,00000000,234,,234,,2345,9'
',23456,,345,00!0!!0!,1234789abd,,12345678,,135,,13,,135,000,135,0,1234,0000000000,2345,,234,,2345,9'],
scprecode = ["General Screens",
"1: "+hpstk2+"All patterns at/just above support.",
"2: "+hpstk2+"a. Month uptrend at/just above support.",
"3: "+hpstk2+"b. Intermediate uptrend trend/starting uptrend.",
"4: "+hpstk2+"c. Uptrending momentum stocks at/just above support.",
"5: "+hpstk2+"d. Unsustainable intermediate downtrend.",
"6: "+hpstk2+"e. Intermediate downtrend turned sideways.",
"7: "+hpstk2+"f. Oversold/extreme oversold (4-6 weeks), bottoms.",
"8: "+hpstk2+"g. Short term (1-2 week) extreme pullbacks, possible bottoms.",
"9: "+hpstk2+"At/just above double+ support, good support strength.",
"10: "+hpstk2+"Top Breakout Watches, All types.",
"11: "+hpstk2+"a. Top Breakout Watches, Continuation.",
"12: "+hpstk2+"b. Top Breakout Watches, True.",
"13: "+hpstk2+"c. FlatTop Breakout Watches.",
"14: "+hpstk2+"Bottom Breakout Watches.",
"15: "+hpstk2+"Top Breakout Confirmations, All types.",
"16: "+hpstk2+"a. FlatTop Breakout Confirmations.",
"17: "+hpstk2+"Bottom Breakout Confirmations.",
"18: "+lpstk2+"All patterns at/just above support.",
"19: "+lpstk2+"a. Month uptrend at/just above support.",
"20: "+lpstk2+"b. Intermediate uptrend trend/starting uptrend.",
"21: "+lpstk2+"c. Uptrending momentum stocks at/just above support.",
"22: "+lpstk2+"d. Unsustainable intermediate downtrend.",
"23: "+lpstk2+"e. Intermediate downtrend turned sideways.",
"24: "+lpstk2+"f. Oversold/extreme oversold (4-6 weeks), bottoms.",
"25: "+lpstk2+"g. Short term (1-2 week) extreme pullbacks, possible bottoms.",
"26: "+lpstk2+"At/just above double+ support, good support strength.",
"27: "+lpstk2+"Top Breakout Watches, All types.",
"28: "+lpstk2+"a. Top Breakout Watches, Continuation.",
"29: "+lpstk2+"b. Top Breakout Watches, True.",
"30: "+lpstk2+"c. FlatTop Breakout Watches.",
"31: "+lpstk2+"Bottom Breakout Watches.",
"32: "+lpstk2+"Top Breakout Confirmations, All types.",
"33: "+lpstk2+"a. FlatTop Breakout Confirmations.",
"34: "+lpstk2+"Bottom Breakout Confirmations.",
"35: "+hpstk2sht+"All stock patterns at/just below resistance.",
"36: "+hpstk2sht+"a. Intermediate uptrend turned sideways.",
"37: "+hpstk2sht+"b. Unsustainable intermediate uptrend.",
"38: "+hpstk2sht+"c. Overbought/extreme overbought (4-6 weeks), tops.",
"39: "+hpstk2sht+"d. Short term (1-2 week) extreme rally, possible tops.",
"40: "+hpstk2sht+"At/just below double+ resistance, good resistance strength.",
"41: "+hpstk2sht+"Top Breakdown Watches.",
"42: "+hpstk2sht+"Bottom Breakdown Watches, All types.",
"43: "+hpstk2sht+"a. Bottom Breakdown Watches, Continuation.",
"44: "+hpstk2sht+"b. Bottom Breakdown Watches, True.",
"45: "+hpstk2sht+"c. FlatBottom Breakdown Watches.",
"46: "+hpstk2sht+"Top Breakdown Confirmations.",
"47: "+hpstk2sht+"Bottom Breakdown Confirmations, All types.",
"48: "+hpstk2sht+"a. FlatBottom Breakdown Confirmations.",
"49: "+lpstk2sht+"All stock patterns at/just below resistance.",
"50: "+lpstk2sht+"a. Intermediate uptrend turned sideways.",
"51: "+lpstk2sht+"b. Unsustainable intermediate uptrend.",
"52: "+lpstk2sht+"c. Overbought/extreme overbought (4-6 weeks), tops.",
"53: "+lpstk2sht+"d. Short term (1-2 week) extreme rally, possible tops.",
"54: "+lpstk2sht+"At/just below double+ resistance, good resistance strength.",
"55: "+lpstk2sht+"Top Breakdown Watches.",
"56: "+lpstk2sht+"Bottom Breakdown Watches, All types.",
"57: "+lpstk2sht+"a. Bottom Breakdown Watches, Continuation.",
"58: "+lpstk2sht+"b. Bottom Breakdown Watches, True.",
"59: "+lpstk2sht+"c. FlatBottom Breakdown Watches.",
"60: "+lpstk2sht+"Top Breakdown Confirmations.",
"61: "+lpstk2sht+"Bottom Breakdown Confirmations, All Types",
"62: "+lpstk2sht+"a. FlatBottom Breakdown Confirmations.",
"63: Targeted Long Trade setups, all prices, typ volume above 300k.",
"64: Targeted Breakout Trade setups, all prices, typ volume above 300k.",
"65: Targeted Short Trade setups, price above 5, typ volume above 300k.",
"66: Targeted Breakdown Trade setups, price above 5, typ volume above 300k."],
scprestr = ['',
',3456,,345,00!0!!_1!00000,13ac,00,124,00,12,,345,00,34,,456,00000004',
',3456,,345,00!0!!_2!00,24,00,13ac,00,124,00,12,,345,00,34,,456,00000004',
',3456,,345,00!0!!_3!,49b,0,12,,12345,0,13ac,00,124,00,12,,345,00,34,,456,00000004',
',3456,,345,00!0!!_4!,479b,,1234568,,12346,00,13ac,00,124,00,12,,345,00,34,,456,00000004',
',3456,,345,00!0!!_5!c0000,13ac,00,124,00,12,,345,00,34,,456,00000004',
',3456,,345,00!0!!_6!20000,13ac,00,124,00,12,,345,00,34,,456,00000004',
',3456,,345,00!0!!_7!0,79,,57,00,13ac,00,124,00,12,,345,00,34,,456,00000004',
',3456,,345,00!0!!_8!00070,13ac,00,124,00,12,,345,00,34,,456,00000004',
',3456,,345,00!0!!_9!00,1234,,1234,0,13ac,,345,,456,,124,00,12,,345,00,34,,456,00000004',
',3456,,345,00!0!!_10!,1349ab,,12468,,124,00000000,12,,2345,000,23456,20000008',
',3456,,345,00!0!!_11!,1349ab,,12468,,124,00020000,12,,2345,000,23456,20000008',
',3456,,345,00!0!!_12!,1349ab,,12468,,124,000,345,0000,12,,2345,000,23456,20000008',
',3456,,345,00!0!!_13!,1349ab,,12468,100000000,12,,2345,000,23456,20000008',
',3456,,345,00!0!!_14!,12789cd,,13579,000000000,12,,2345,000,23456,20000008', 
',3456,,345,00!0!!_15!,1349ab,,12468,,124,00000000,12,,2345,000,23456,40000008',
',3456,,345,00!0!!_16!,1349ab,,12468,100000000,12,,2345,000,23456,40000008',
',3456,,345,00!0!!_17!,12789cd,,13579,000000000,12,,2345,000,23456,40000008',
',12,,345,00!0!!_18!00000,13ac,00,124,00,12,,345,00,34,,456,00000004',
',12,,345,00!0!!_19!00,24,00,13ac,00,124,00,12,,345,00,34,,456,00000004',
',12,,345,00!0!!_20!,49b,0,12,,12345,0,13ac,00,124,00,12,,345,00,34,,456,00000004',
',12,,345,00!0!!_21!,479b,,1234568,,12346,00,13ac,00,124,00,12,,345,00,34,,456,00000004',
',12,,345,00!0!!_22!c0000,13ac,00,124,00,12,,345,00,34,,456,00000004',
',12,,345,00!0!!_23!20000,13ac,00,124,00,12,,345,00,34,,456,00000004',
',12,,345,00!0!!_24!0,79,,57,00,13ac,00,124,00,12,,345,00,34,,456,00000004',
',12,,345,00!0!!_25!00070,13ac,00,124,00,12,,345,00,34,,456,00000004',
',12,,345,00!0!!_26!00,1234,,1234,0,13ac,,345,,456,,124,00,12,,345,00,34,,456,00000004',
',12,,345,00!0!!_27!,1349ab,,12468,,124,00000000,12,,2345,000,23456,20000008',
',12,,345,00!0!!_28!,1349ab,,12468,,124,00020000,12,,2345,000,23456,20000008',
',12,,345,00!0!!_29!,1349ab,,12468,,124,000,345,0000,12,,2345,000,23456,20000008',
',12,,345,00!0!!_30!,1349ab,,12468,100000000,12,,2345,000,23456,20000008',
',12,,345,00!0!!_31!,12789cd,,13579,000000000,12,,2345,000,23456,20000008', 
',12,,345,00!0!!_32!,1349ab,,12468,,124,00000000,12,,2345,000,23456,40000008',
',12,,345,00!0!!_33!,1349ab,,12468,100000000,12,,2345,000,23456,40000008',
',12,,345,00!0!!_34!,12789cd,,13579,000000000,12,,2345,000,23456,40000008',
',3456,,345,00!0!!_35!00000,57ad,00,135,00,13,,345,000,123,000,34,,456,006', 
',3456,,345,00!0!!_36!40000,57ad,00,135,00,13,,345,0000000,34,,456,006',
',3456,,345,00!0!!_37!30000,57ad,00,135,00,13,,345,0000000,34,,456,006',
',3456,,345,00!0!!_38!0,68,,46,00,57ad,00,135,00,13,,345,0000000,34,,456,006',
',3456,,345,00!0!!_39!00060,57ad,00,135,00,13,,345,0000000,34,,456,006',
',3456,,345,00!0!!_40!00000,57ad,,345,,456,,135,00,13,,345,000,123,000,34,,456,006', 
',3456,,345,00!0!!_41!,1347ab,,12468,000000000,13,,2345,00000000,23456,209',
',3456,,345,00!0!!_42!,128cd,,3579,000000000,13,,2345,00000000,23456,209',
',3456,,345,00!0!!_43!,128cd,,3579,000020000,13,,2345,00000000,23456,209',
',3456,,345,00!0!!_44!,128cd,,3579,0000,345,0000,13,,2345,00000000,23456,209',
',3456,,345,00!0!!_45!,128cd,,3579,100000000,13,,2345,00000000,23456,209',
',3456,,345,00!0!!_46!,1347ab,,12468,000000000,13,,2345,00000000,23456,409',
',3456,,345,00!0!!_47!,128cd,,3579,000000000,13,,2345,00000000,23456,409',
',3456,,345,00!0!!_48!,128cd,,3579,100000000,13,,2345,00000000,23456,409',
',12,,345,00!0!!_49!00000,57ad,00,135,00,13,,345,000,123,000,34,,456,006', 
',12,,345,00!0!!_50!40000,57ad,00,135,00,13,,345,0000000,34,,456,006',
',12,,345,00!0!!_51!30000,57ad,00,135,00,13,,345,0000000,34,,456,006',
',12,,345,00!0!!_52!0,68,,46,00,57ad,00,135,00,13,,345,0000000,34,,456,006',
',12,,345,00!0!!_53!00060,57ad,00,135,00,13,,345,0000000,34,,456,006',
',12,,345,00!0!!_54!00000,57ad,,345,,456,,135,00,13,,345,000,123,000,34,,456,006', 
',12,,345,00!0!!_55!,1347ab,,12468,000000000,13,,2345,00000000,23456,209',
',12,,345,00!0!!_56!,128cd,,3579,000000000,13,,2345,00000000,23456,209',
',12,,345,00!0!!_57!,128cd,,3579,000020000,13,,2345,00000000,23456,209',
',12,,345,00!0!!_58!,128cd,,3579,0000,345,0000,13,,2345,00000000,23456,209',
',12,,345,00!0!!_59!,128cd,,3579,100000000,13,,2345,00000000,23456,209',
',12,,345,00!0!!_60!,1347ab,,12468,000000000,13,,2345,00000000,23456,409',
',12,,345,00!0!!_61!,128cd,,3579,000000000,13,,2345,00000000,23456,409',
',12,,345,00!0!!_62!,128cd,,3579,100000000,13,,2345,00000000,23456,409',
// '0,345,,2468,0!0!!_63!,124789b,,1234579,,124,0,12,100,12,00,12,,1234,0,2345,,34,,456,00000004',
'0,345,,2468,0!0!!_63!0,1234579,,124,,135,,12,100,124,00,12,00,2345,,34,,456,00000004',
// '0,345,00!0!!_64!,124789abcd,,12345679,,124,,12,,124,000,24,0,1234,0,2345,000,234,,234,,2345,000008',
'0,345,00!0!!_64!,124789abcd,,12345679,,124,,12,,124,000,124,0,1234,00000,2345,,234,,2345,000008',
// ',23456,,345,,3579,0!0!!_65!,14ad,,1234568,,135,0,13,500,13,00,13,,1234,000000,2345,,34,,456,006',
',23456,,345,,3579,0!0!!_65!0,1234568,,135,,124,,13,500,135,00,13,0000000,2345,,34,,456,006',
// ',23456,,345,00!0!!_66!,1234789abd,,12345678,,135,,13,,135,000,35,0,1234,0,2345,00000000,234,,234,,2345,9'
',23456,,345,00!0!!_66!,1234789abd,,12345678,,135,,13,,135,000,135,0,1234,0000000000,2345,,234,,2345,9'],
listcode = ['ALL Stocks','','','','','','','','','**ALL User Lists'],
lprofitrcodeform = ['0: ALL','1: 0-1:1 dismal','2: 1-2:1 poor','3: 2-2.5:1 fair','4: 2.5-3.8:1 good','5: 3.8-5:1 excellent','6: > 5:1 excellent'],
boughtcodeform = ['0: ALL','1: Neutral','2: Neutral+','3: Neutral-','4: Near Overbought','5: Near Oversold','6: Overbought','7: Oversold','8: Extreme Overbought','9: Extreme Oversold'],
trend1codeform = ['0: ALL','1: Sideways/flat','2: Up','3: Down','4: Strong Up','5: Strong Down','6: Excessive Up','7: Excessive Down'],
dircodeform = ['0: ALL','1: Flat','2: Up','3: Down','4: Strong Up','5: Strong Down','6: Excessive Up','7: Excessive Down'],
changecodeform = ['0: ALL','1: Flat','2: Up','3: Down','4: Strong Up','5: Strong Down','6: Excessive Up','7: Excessive Down'],
rescodeform = ['0: ALL','1: At support','2: Possible support','3: Above support','4: Just below support','5: At resistance','6: Possible resistance','7: Below resistance','8: Just above resistance','9: Not at support/resistance','a: At support/resistance(type unknown)','b: Possible support/resistance(type unknown)','c: Above support/resistance(type unknown)','d: Below support/resistance(type unknown)'],
restypecodeform = ['0: ALL','1: N/A','2: Single','3: Double','4: Triple','5: Triple+'],
resstrcodeform = ['0: ALL','1: N/A','2: Weak','3: Mild','4: Good','5: Strong','6: Very Strong'],
bullcodeform = ['0: ALL','1: Neutral','2: Mild Bullish','3: Mild Bearish','4: Strong Bullish','5: Strong Bearish'],
mfdircodeform = ['0: ALL','1: Neutral','2: Bullish','3: Bearish'],
mf3dircodeform = ['0: ALL','1: Neutral','2: Accum','3: Distr'],
mfdaycodeform = ['0: ALL','1: Light','2: Mild','3: Good','4: Strong','5: Extreme'],
profitcodeform = ['0: ALL','1: 0-5%','2: 5-9%','3: 9-16%','4: 16-25%','5: > 25%'],
tarpotcodeform = ['0: ALL','1: Poor','2: Fair','3: Good','4: Excellent'],
breakoutcodeform = ['0: ALL','1: None','2: Watch','3: Possible','4: Confirmed'],
optionablecode = ['ALL','No','Yes'], initsearchstr="", latestsearchstr="",
allowselectchange=1,
sortcode={'0':0,'1':0,'2':2,'3':27,'4':18,'5':3,'6':19,'7':4,'8':24,'9':25,'a':1,'b':20,'c':21,'d':11,'e':22,'f':23},
foundrstr='Founder Dan Chapman\'s stock screen listing the top ',
dsinfo=new Array('',
foundrstr+'momentum stocks with long and short term uptrend momentum. Stocks priced below $12.',
foundrstr+'momentum stocks with long and short term uptrend momentum. Stocks priced above $12.',
foundrstr+'breakout stocks with oversold bottom and top breakouts. Stocks priced below $12.',
foundrstr+'breakout stocks with oversold bottom and top breakouts. Stocks priced above $12.',
foundrstr+'breakdown stocks with overbought top and bottom breakdowns. Stocks priced below $12.',
foundrstr+'breakdown stocks with overbought top and bottom breakdowns. Stocks priced above $12.',
foundrstr+'long setups at support with good trade quality and profit. For all prices and typical volume above 300k per day.',
foundrstr+'breakout setups at resistance with local bullish price action, good upside profit and p/l ratio. For all prices and typical volume above 300k per day.',
foundrstr+'short setups at resistance with good trade quality and profit. For all prices above 5 and typical volume above 300k per day.',
foundrstr+'breakdown setups at support with local bearish price action, good downside profit and p/l ratio. For all prices above 5 and typical volume above 300k per day.'
),
searchinfo=new Array('',
'An all stock patterns search for stocks priced $12+ that are at/just above support. '+goodtq+sortedpstr,   
hpstk+'with one month uptrend patterns. '+goodtq+sortedpstr,
hpstk+'with a 4 month intermediate uptrend trend/starting uptrend and 1 month flat/up trend. No excessive short term up/down direction. '+goodtq+sortedpstr,
'Uptrending momentum stocks priced $12+. '+goodtq+sortedpstr,
hpstk+'with an unsustainable 4 month intermediate downtrend. '+goodtq+sortedpstr, 
hpstk+'with a 4 month intermediate downtrend turned sideways. '+goodtq+sortedpstr,
hpstk+'that are oversold/extreme oversold and also have a strong/extreme one month downtrend. Stocks are typically down for at least a month (4-6 weeks). '+goodtq+sortedpstr,
hpstk+'that have had a short term (1-2 week) extreme pullback with early signs of a possible bottom. '+goodtq+sortedpstr,
hpstk+'at/just above double or greater support with good+ support strength. No strong/extreme pulbacks or down month trends. '+goodtq+sortedpstr,
hpstk+'with a breakout watch from a top. All breakout types: continuation (from single resistance) and true (double+ resistance).'+breakmf+sortedbostr,  /* 10 */
hpstk+'with a breakout watch from a top. Continuation type from single resistance.'+breakmf+sortedbostr,
hpstk+'with a breakout watch from a top. True type from double+ resistance.'+breakmf+sortedbostr,
hpstk+'with a breakout watch from a flat top (flat 1 month trend).'+breakmf+sortedbostr,
hpstk+'with a breakout watch near or at a bottom.'+breakmf+sortedbostr,  
hpstk+'with a breakout confirmation from a top.'+breakmf+sortedbostr,   
hpstk+'with a breakout confirmation from a flat top (flat 1 month trend).'+breakmf+sortedbostr,
hpstk+'with a breakout confirmation near or at a bottom.'+breakmf+sortedbostr,
'An all stock patterns search for stocks priced under $12 that are at/just above support. '+goodtq+sortedpstr,
lpstk+'with one month uptrend patterns. '+goodtq+sortedpstr,
lpstk+'with a 4 month intermediate uptrend trend/starting uptrend and 1 month flat/up trend. No excessive short term up/down direction. '+goodtq+sortedpstr,  /* 20 */
'Uptrending momentum stocks priced under $12. '+goodtq+sortedpstr,
lpstk+'with an unsustainable 4 month intermediate downtrend. '+goodtq+sortedpstr, 
lpstk+'with a 4 month intermediate downtrend turned sideways. '+goodtq+sortedpstr,
lpstk+'that are oversold/extreme oversold and also have a strong/extreme one month downtrend. Stocks are typically trending down for at least a month (4-6 weeks). '+goodtq+sortedpstr,
lpstk+'that have had a short term (1-2 week) extreme pullback with early signs of a possible bottom. '+goodtq+sortedpstr,
lpstk+'at/just above double or greater support with good+ support strength. No strong/extreme pulbacks or down month trends. '+goodtq+sortedpstr,
lpstk+'with a breakout watch from a top. All breakout types: continuation (from single resistance) and true (double+ resistance).'+breakmf+sortedbostr,
lpstk+'with a breakout watch from a top. Continuation type from single resistance.'+breakmf+sortedbostr,
lpstk+'with a breakout watch from a top. True type from double+ resistance.'+breakmf+sortedbostr,
lpstk+'with a breakout watch from a flat top (flat 1 month trend).'+breakmf+sortedbostr,
lpstk+'with a breakout watch near or at a bottom.'+breakmf+sortedbostr, 
lpstk+'with a breakout confirmation from a top.'+breakmf+sortedbostr,
lpstk+'with a breakout confirmation from a flat top (flat 1 month trend).'+breakmf+sortedbostr,
lpstk+'with a breakout confirmation near or at a bottom.'+breakmf+sortedbostr, 
'An all stock patterns search for stocks priced $12+ that are at/just below resistance. '+goodtqsht+poorupl+sortedpstrsht, /* 35 */
hpstk+'with a 4 month intermediate uptrend turned sideways. '+goodtqsht+sortedpstrsht,  
hpstk+'with an unsustainable 4 month intermediate uptrend. '+goodtqsht+sortedpstrsht,
hpstk+'that are overbought/extreme overbought and also have a strong/extreme one month uptrend. Stocks are typically trending up for at least a month (4-6 weeks). '+goodtqsht+sortedpstrsht,
hpstk+'that have had a short term (1-2 week) extreme rally with early signs of a possible top. '+goodtqsht+sortedpstrsht,  
hpstk+'at/just below double or greater resistance with good+ resistance strength. '+goodtqsht+poorupl+sortedpstrsht,     /* 40 */
hpstk+'with a breakdown watch near or at a top.'+breakmfsht+sortedbdstr,
hpstk+'with a breakdown watch from a bottom. All breakdown types: continuation (from single support) and true (double+ support).'+breakmfsht+sortedbdstr,
hpstk+'with a breakdown watch from a bottom. Continuation type from single support.'+breakmfsht+sortedbdstr,
hpstk+'with a breakdown watch from a bottom. True type from double+ support.'+breakmfsht+sortedbdstr,
hpstk+'with a breakdown watch from a flat bottom (flat 1 month trend).'+breakmfsht+sortedbdstr,
hpstk+'with a breakdown confirmation near or at a top.'+breakmfsht+sortedbdstr,
hpstk+'with a breakdown confirmation from a bottom.'+breakmfsht+sortedbdstr,
hpstk+'with a breakdown confirmation from a flat bottom (flat 1 month trend).'+breakmfsht+sortedbdstr,
'An all stock patterns search for stocks below $12 that are at/just below resistance. '+goodtqsht+poorupl+sortedpstrsht,  /* 49 */
lpstk+'with a 4 month intermediate uptrend turned sideways. '+goodtqsht+sortedpstrsht,
lpstk+'with an unsustainable 4 month intermediate uptrend. '+goodtqsht+sortedpstrsht,
lpstk+'that are overbought/extreme overbought and also have a strong/extreme one month uptrend. Stocks are typically trending up for at least a month (4-6 weeks). '+goodtqsht+sortedpstrsht,
lpstk+'that have had a short term (1-2 week) extreme rally with early signs of a possible top. '+goodtqsht+sortedpstrsht,
lpstk+'at/just below double or greater resistance with good+ resistance strength. '+goodtqsht+poorupl+sortedpstrsht,  /* 54 */
lpstk+'with a breakdown watch near or at a top.'+breakmfsht+sortedbdstr,
lpstk+'with a breakdown watch from a bottom. All breakdown types: continuation (from single support) and true (double+ support).'+breakmfsht+sortedbdstr,
lpstk+'with a breakdown watch from a bottom. Continuation type from single support.'+breakmfsht+sortedbdstr,
lpstk+'with a breakdown watch from a bottom. True type from double+ support.'+breakmfsht+sortedbdstr,
lpstk+'with a breakdown watch from a flat bottom (flat 1 month trend).'+breakmfsht+sortedbdstr,
lpstk+'with a breakdown confirmation near or at a top.'+breakmfsht+sortedbdstr,
lpstk+'with a breakdown confirmation from a bottom.'+breakmfsht+sortedbdstr,
lpstk+'with a breakdown confirmation from a flat bottom (flat 1 month trend).'+breakmfsht+sortedbdstr,
'Narrow targeted long trade setup screen with stocks at support with good trade quality, and profit. For all prices and typical volume above 300k per day. Sorted by Long Target1 Profit.',
'Narrow targeted breakout trade setup screen with stocks at resistance, local bullish price action, and good upside profit and p/l ratio. For all prices and typical volume above 300k per day. Sorted by Breakout Profit.',
'Narrow targeted short trade setup screen with stocks at resistance with good trade quality and profit. For all prices above 5 and typical volume above 300k per day. Sorted by Short Target1 Profit.',
'Narrow targeted breakdown trade setup screen with stocks at support, local bearish price action, and good downside profit and p/l ratio. For all prices above 5 and typical volume above 300k per day.Sorted by Breakdown Profit.'
);

/* no output array, put all vars on one var */
function setuserlist(){ 
  var k, kt, sf4id=getid('sf4');
  typeofsearch="searchd";
  typeofdata="stockdata";
  if(sf4id.selectedIndex>0){
    typeofsearch="searchdu";
    typeofdata="stockdatau";
    if (sf4id.selectedIndex<=8){ 
      dataz=getlistCookie(cvnum(sf4id.selectedIndex));
      if (dataz.length>0) tempstr=dataz.split(",");
      else tempstr="";
    }
    else{
      first=1; 
      for (k=1;k<=8;k++){
        dataz=getlistCookie(cvnum(k));
        if (dataz!=""){
          if (first){
            datazstr=dataz; first=0;
          }else 
            datazstr+=','+dataz;
        }
      } 
      if (datazstr.length>0) tempstr=datazstr.split(",");
      else tempstr="";
    }
    numuserkeys=tempstr.length; 
    var target,i,j,start,end,tolook;
    if (numuserkeys>0){
      var searchdl=searchd.split(","),stockdatal=stockdata.split(","),numkeys=searchdl.length;
    }
    for (i=0;i<numuserkeys;i++){
      stockdatau[i]=tempstr[i]; 
      searchdu[i]='0000000000000000000000000000';
      j=-1; start=0; end=numkeys-1; tolook=stockdatau[i];
      while (j<0){ 
        target=mr((end+start)/2);
        if ((target!=end)&&(target!=start)){
          if (tolook<stockdatal[target]) end=target; 
          else if (tolook>stockdatal[target]) start=target;
            else if (tolook==stockdatal[target]) j=target;
        }else{ 
          if (tolook==stockdatal[start]) j=start; 
          else if (tolook == stockdatal[end]) j=end; 
            else j=15000;
        }
      }
      if (j!=15000) searchdu[i]=searchdl[j];
    }
  }
}

var selnameglob,menunameglob;

function makeprestrandset(){
  var i,http;
  sc666fullprestr="~"; 
  for(i=1;i<=24;i++) 
    sc666fullprestr+=sc666fullpreary[i]+"~"; 
  sc666fullprestr+=sc666fullpreary[i]; 
  getsetCookie(0,'sc666fullpre',sc666fullprestr); 
  getsetCookie(0,'sc666savedsearch',getsearchstr(1,0));
  var rannum=Math.round(Math.random(1)*1000), username=getsetCookie(1,'username',''),locationhref=window.location.href;
  if (locationhref.indexOf("#")>=0){
    locationhref=locationhref.split("#");
    locationhref=locationhref[0];
  }
  if ((sample==0)&&(checkifpres(username)!=0)&&(username.length>2)&&(username.indexOf('@')>0)){
    cleanCookie(1);
    username=username.split(",");
    document.body.style.cursor = 'wait';
    if (window.XMLHttpRequest) http = new XMLHttpRequest();
    else http = new ActiveXObject("Microsoft.XMLHTTP");  
    /*if (msbrowser) http = new ActiveXObject("Microsoft.XMLHTTP");
    else http = new XMLHttpRequest();*/
    http.open("GET","https://www.stockconsultant.com/consultnow/save_cookiessec.cgi?"+username[0]+"~none", false);
    http.send(null);
    document.body.style.cursor = 'auto';
    if (http.responseText=="1") {http.close; window.location.href=locationhref+'&'+rannum;}
    else window.location.href='https://www.stockconsultant.com/login.html?loginerror';
  }else
    window.location.reload(false);
}

var pphelp='Select a PreScreen above, then click on Search!';
function usescpre(){
  var num=getid('scpre').selectedIndex;
  if (searcht=="1"){
    if (num>0)
      setsearchstr(scprestr[num],0);
    else 
      setsearchstr('0000!0!!0!0000000000000000000000000',0);
  }else{
   ppnum=num;
   if (num>0) {
        getid('scds').selectedIndex=0;
        getid('ppinfo').innerHTML=searchinfo[num];
        var sortbyinfo=sortbycodeform[scprestr[num].charAt(scprestr[num].length-1)];
        sortbyinfo=sortbyinfo.split(':');        
        getid('ppsortby').innerHTML=sortbyinfo[1];
      }else{
        getid('ppinfo').innerHTML='<span class="ssp15">'+pphelp+'</span>';
        getid('ppsortby').innerHTML="";
        getid("searchtxt").innerHTML='Custom screen';
      }
  }   
  setsearchactiveconfig();
}
function usescds(){
  var num=getid('scds').selectedIndex;
   ppnum=num+200;
   if (num>0){
     getid('scpre').selectedIndex=0;
     getid('ppinfo').innerHTML=dsinfo[num];
     var sortbyinfo=sortbycodeform[scdsstr[num].charAt(scdsstr[num].length-1)];
     sortbyinfo=sortbyinfo.split(':');        
     getid('ppsortby').innerHTML=sortbyinfo[1];
   }else{
        getid('ppinfo').innerHTML='<span class="ssp15">'+pphelp+'</span>';
        getid('ppsortby').innerHTML="";
    }  
  setsearchactiveconfig();
}

function setpreset(){
  selectnum=getid('setpre').selectedIndex;
  if (selectnum>0){
//      var winx=$(window).width();
//      if (winx<760) winx=50; else winx=250;
  
      winx=50;
      
      $.colorbox({
      iframe:true,
      href: "https://www.stockconsultant.com/consultnow/setuserpreset4.html",
      width:"460",
      height:"280",
      opacity:"0.6",
      left:viewportleft,
    onComplete : function() {

    var xychanged=0,wx=460,wy=240;
    if ((window.innerHeight-40)<wy) {wy = window.innerHeight-40;xychanged=1;}
    if (xychanged) $(this).colorbox.resize({width:wx,height:wy});
    },
      'onClosed' : function (){
                          getid('setpre').selectedIndex=0;
                         }
    });
  }  
}

function handlepreset(selectnum,cc){
  var rstr="",i,j,scpreid=getid('scpre');
  scpreid.selectedIndex=0;
  if (cc.substr(0,1)==" ") cc=cc.substr(1,cc.length-1);    
    for (j=0;j<cc.length;j++){
      i=cc.charCodeAt(j);
      if ( ((i>=48)&&(i<=57))
         ||((i>=65)&&(i<=90)) 
         ||((i>=97)&&(i<=122)) 
         ||(i==44) || (i==45) 
         ||(i==32) ) rstr+=cc.substr(j,1); 
      else if (i==47) rstr+="-";
      else rstr+=" ";
    }
    cc=rstr;
    if (cc.length>30) cc=cc.substr(0,30);
    scpreid.options[selectnum].text=selectnum+": "+cc;
    getid('sf5').options[selectnum].text=selectnum+": "+cc;
    getid('sf5').selectedIndex=selectnum;
    changeactivecfg(1);
    sc666fullpreary[selectnum]=cc+":"+getsearchstr(1,0);
    makeprestrandset();
    scpreid.selectedIndex=0;
}

function usecustompre(){
  selectnum=getid('sf5').selectedIndex;
  if (selectnum>0){
    tmpstr=sc666fullpreary[selectnum];
    if (tmpstr.length>0){
      searchstr=tmpstr.split(":");
      setsearchstr(searchstr[1],0);
    }
  }else
    setsearchstr('0000!0!!0!0000000000000000000000000',0);
  getid('scpre').selectedIndex=0;
  setsearchactiveconfig();
}

function setsearchactiveconfig(){
  var j=0;
  if (searcht=="1"){
    if (getid('sf5').selectedIndex>0){
      j=16+getid('sf5').selectedIndex;
      activeconfig=parseInt(activelist[1].charAt(j),16);
    }
    else if (getid('scpre').selectedIndex>0){
      j=getid('scpre').selectedIndex;
//      window.alert(j+"    ="+preset_conf.charAt(j));
      activeconfig=parseInt(preset_conf.charAt(j),16);
    } 
    else activeconfig=parseInt(activelist[1].charAt(j),16);
  }else{
    if (getid('scpre').selectedIndex>0){
      j=getid('scpre').selectedIndex;
      activeconfig=parseInt(preset_conf.charAt(j),16);
    }else if (getid('scds').selectedIndex>0){
      j=getid('scds').selectedIndex;
      activeconfig=parseInt(dsset_conf.charAt(j),16);
    } else activeconfig=0;
  }
  getid('cfg').selectedIndex=activeconfig;
  changeactivecfg(1);
}

function setpresetnames(){
// why??  if (typeof(document.consultinput.sf5)!='object') return;
  if (searcht=="1"){
    var i,j,tmpstr,sf5id=getid('sf5'),setpreid=getid('setpre');
    foundold=0; sc666fullprestr="";
    sc666fullprestr=getsetCookie(1,'sc666fullpre','');
    if (checkifpres(sc666fullprestr)==0){
      sc666fullprestr="~"; 
      for(i=1;i<=24;i++) sc666fullprestr+="~"; 
      getsetCookie(0,'sc666fullpre',sc666fullprestr);
    }
    sc666fullpreary=sc666fullprestr.split("~");
    j=sc666fullpreary.length;
    if (j>sf5id.options.length)
      j=sf5id.options.length;
    for (i=1;i<j;i++)
      if (sc666fullpreary[i].length>0){
        searchstr=sc666fullpreary[i].split(":");
        sf5id.options[i].text=i+': '+searchstr[0];
        if (searchstr[0].length>30)
          prestr=searchstr[0].substr(0,30);
        else 
          prestr=searchstr[0];
        setpreid.options[i].text=i+': '+prestr;
      }
  //  if (document.consultinput.scpre.selectedIndex==0){
      tmpstr=getsetCookie(1,'sc666savedsearch','');
      if (checkifpres(tmpstr)==0) tmpstr="";
      if (tmpstr.length>0) setsearchstr(tmpstr,0);
  //  }
    initsearchstr=getsearchstr(1,0);
  } else{
      var num,sortbyinfo;
      if (ppnum>=200){
        num=ppnum-200;
        getid('scds').selectedIndex=num;
        getid('scpre').selectedIndex=0;
      }else{
        num=ppnum;
        getid('scpre').selectedIndex=num;
        getid('scds').selectedIndex=0;
      }
      if (num>0) {
        if (ppnum>=200){
          getid('ppinfo').innerHTML=dsinfo[num];
          sortbyinfo=sortbycodeform[scdsstr[num].charAt(scdsstr[num].length-1)];
        }else{
          getid('ppinfo').innerHTML=searchinfo[ppnum];
          sortbyinfo=sortbycodeform[scprestr[ppnum].charAt(scprestr[ppnum].length-1)];
        }
        sortbyinfo=sortbyinfo.split(':');        
        getid('ppsortby').innerHTML=sortbyinfo[1];
      }else 
        getid('ppinfo').innerHTML='<span class="ssp15">'+pphelp+'</span>';
    }
}

var clickedit=0,sfmulti=newFilledArray(35,0),sfnameinit=[],sfshowinit=[],sfnum=0,sfmultiallpad=[];
function writeoptions(menucode,selname,heading,spaceit,useit,ismulti,shownum){
  var i, j, maxstrlen,istart=0, ts, multstr='',arraylen,tempstr="", tempout='',addspace="",selstart='<select ';
  if (spaceit>0) addspace=" &nbsp; ";
  if ((menucode=="customcode")||(menucode=="scprecode")||(menucode=="scdscode")) selstart+='class="ssp17"';
  else selstart+='class="ssp17"';
  if (ismulti){
    if (shownum) sfshowinit[sfnum]=shownum;
    else sfshowinit[sfnum]=1;
    sfnameinit[sfnum]='#'+selname;
    ts=selname.split('sf');
    sfmulti[ts[1]]=1;
//    selstart+=' style="position:relative;top:7px;" ';
    selstart+=' multiple="multiple" size="5" ';
    multstr='name="'+selname+'[]"';
  }
  selstart+=' id="'+selname+'"value="'+selname+'"'+multstr+' ';

// selstart+=' id="'+selname+'"'+multstr+'>';

  if (menucode=="customcode") selstart+='onchange="usecustompre()"> ';
    else if (menucode=="scprecode") selstart+='onchange="usescpre()"> ';
      else if (menucode=="scdscode") selstart+='onchange="usescds()"> ';
        else // {}
         selstart+='>';
  
//   if (selname=='sf_0')
//     window.alert(selstart);

  eval("arraylen="+menucode+".length;");
  if (ismulti){
    istart=1;
    maxstrlen=0;
    for (i=istart;i<arraylen;i++){
      eval("tempstr="+menucode+"["+i+"];");
      if (tempstr.length>maxstrlen) maxstrlen=tempstr.length;
    }
    sfmultiallpad[sfnum++]=maxstrlen;
  }

  for (i=istart;i<arraylen;i++){
    eval("tempstr="+menucode+"["+i+"];");
    ts=tempstr.split(':');
    if ((ismulti)&&(tempstr.length<maxstrlen))
//      tempstr+="<div style='float:left;width:"+(20*(maxstrlen-tempstr.length))+"px;'></div><div style='clear:both;'></div>";
      ts[1]+='&nbsp;';
      for (j=Math.floor(1.6*(maxstrlen-tempstr.length));j>0;j--)
        ts[1]+='&nbsp;';
    if (ismulti) tempout+='<option value="'+ts[0]+'">'+ts[1]+'</option>';
    else tempout+='<option value="'+ts[0]+'">'+tempstr+'</option>';
  }
//  if ((menucode=="customcode")||(menucode=="scprecode")||(menucode=="scdscode")) 
//   if (heading!="") heading='<span class="z4b">'+heading+'</span>';
  
  if (heading=='Select User Preset') 
    heading='<span class="ssp16">Select User Preset</span>';
  else if (heading=='Select PreScreen') 
    heading='<span class="ssp16">Select PreScreen</span>';
  else if (heading=='Sort by') 
    heading='<span class="ssp16b">Sort by</span>';
  else
    heading='<span class="ssp16">'+heading+'</span>';
  if (heading=="") return(selstart+tempout+'</select>');
  else return(addspace+heading+'&nbsp;'+selstart+tempout+'</select>');
}

function setsearchstr(searchstr,ignore){ 
  var specstr,i,rstr="",j,cc,istr,optionnums=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  for (j=0;j<searchstr.length;j++){
    cc=searchstr.charCodeAt(j);
    if ( ((cc>=97)&&(cc<=122))
         || ((cc>=48)&&(cc<=57))
         || (cc==33) || (cc==44) || (cc==95) 
        ) rstr+=searchstr.substr(j,1); 
    else rstr+="";
  }
  searchstr=rstr;
  /* test length */
  curnum=0; 
  for (i=0;i<searchstr.length;i++){
    if (curnum==3){}
    else if (searchstr.substr(i,1)=="!") {i++; while (searchstr.substr(i,1)!="!"){i++; if (i>=searchstr.length) break;}}
    else if (searchstr.substr(i,1)==",") {i++; while (searchstr.substr(i,1)!=","){i++; if (i>=searchstr.length) break;}}
    else {}
    curnum++;   
  }
  if(curnum!=31){
    window.alert("Incorrect SearchStr Length or Format!");return;
  }
  curnum=0;
  for (i=0;i<searchstr.length;i++) {
    if (curnum==3) getid('sf3').selectedIndex=searchstr.substr(i,1);
    else if (searchstr.substr(i,1)=="!") 
      { 
        specstr=""; i++; while (searchstr.substr(i,1)!="!"){ specstr+=searchstr.substr(i,1); i++; if (i>=searchstr.length) break; }
        if ((curnum==5) && (specstr.substr(0,1)=="_")){
          if (ignore==0) { specstr=specstr.substr(1,specstr.length-1);
            getid('scpre').selectedIndex=parseInt(specstr);
          } else getid('scpre').selectedIndex=0;
          getid('sf'+curnum).selectedIndex=0;
        } else if (curnum==5) { 
            getid('scpre').selectedIndex=0;
            getid('sf'+curnum).selectedIndex=parseInt(specstr);
        }
        else getid('sf'+curnum).selectedIndex=parseInt(specstr);
      }
    else if (searchstr.substr(i,1)==",") { 
          specstr="";
          i++;
          while (searchstr.substr(i,1)!=","){
            specstr+=searchstr.substr(i,1)+',';
            i++;
            if (i>=searchstr.length) break;
          }
          if (sfmulti[curnum]==1)
            $('#sf'+curnum).val(specstr);
          else{
            specstr='CM:'+specstr.substr(0,specstr.length-1);
            var sfid=getid('sf'+curnum);
            sfid.options[sfid.length-1].text=specstr;
            sfid.selectedIndex=sfid.length-1;
          }
      }
    else{ 
      specstr=searchstr.substr(i,1);
      if (sfmulti[curnum]==1){
        if (specstr!='0')
          $('#sf'+curnum).val(specstr);
        else{
          istr='';
          for (j=1;j<=$('#sf'+curnum).howmanyItems();j++)
            istr+=optionnums[j]+',';
          $('#sf'+curnum).val(istr);
          $('#sf'+curnum).selectAllItems();
        }
      }
      else{
        found=0;
        menulen=getid('sf'+curnum).length;
        if (curnum==30) menulen++;
        var sfid=getid('sf'+curnum);
        for (j=1;j<(menulen-1);j++)
          if (specstr==sfid.options[j].text.substr(0,1)) found=j;
        sfid.selectedIndex=found;
      }
    }
    curnum++;   
   }
}

var ppsort=0;
function getsearchstr(fullstr,special){
  var cursearchstr="",tempstr,ts,ts2,ts3,j,istr,optionnums=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  if (searcht=='2'){
    if (ppnum>200)  tempstr=scdsstr[ppnum-200].split('!');
    else tempstr=scprestr[ppnum].split('!');
    cursearchstr=tempstr[0]+tempstr[4].substr(0,tempstr[4].length-1);
    ppsort=1*tempstr[4].charAt(tempstr[4].length-1);
  }else{  
  for (i=0;i<numofsforms;i++){
    if (i==3) cursearchstr+=getid('sf3').selectedIndex;
    else if (((i==4)||(i==5))&&(fullstr)){
      if ((getid('scpre').selectedIndex>0)&&(i==5)){
        cursearchstr+='!_'+getid('scpre').selectedIndex+'!';
      }else{
        if (special==0) cursearchstr+='!'+getid('sf'+i).selectedIndex+'!';
        else cursearchstr+='!0!';
      }
    } // ??????   getid('sf'+30).selectedIndex].text; sort by text
    else if ( (i!=4) && (i!=5) && ((i!=30) || ((i==30) && (fullstr))) ){
      if (sfmulti[i]==1){
         ts2=ts=String($('#sf'+i).val());
//         window.alert('sf'+i+'='+ts2);
         if (ts!=''){
           ts=ts.split(',');
           ts=ts.length;
         }else{
           ts=0;
           istr='';
           for (j=1;j<=$('#sf'+i).howmanyItems();j++)
            istr+=optionnums[j]+',';
          $('#sf'+i).val(istr);
          $('#sf'+i).selectAllItems();
         }
         if (ts==0) cursearchstr+="0";
         else if (ts==1) cursearchstr+=ts2;
         else{

           ts3=$('#sf'+i).howmanyItems();
//           if (ts3>=8) window.alert(ts3+' items sf'+i+'    ts='+ts+'    ts2='+ts2);
           if (ts3==ts) cursearchstr+="0";
           else {
             temparray=ts2.split(',');
             cursearchstr+=',';
             for (j=0;j<temparray.length;j++)
               cursearchstr+=temparray[j];
             cursearchstr+=',';
         }
        }
      }else {
        tempstr=getid('sf'+i).options[getid('sf'+i).selectedIndex].text;
        temparray=tempstr.split(':');
        if ((temparray[1]==null)||(temparray[0]=='Custom'))
          cursearchstr+="0";
        else if(temparray[0]=='CM'){
          temparray=temparray[1].split(',');
          if(temparray[0]==null)
            cursearchstr+="0";
          else{
            cursearchstr+=',';
            for (j=0;j<temparray.length;j++)
              cursearchstr+=temparray[j];
            cursearchstr+=',';
          }
        }
        else
          cursearchstr+=temparray[0];
      }
    }
  } // for 
  }
  return(cursearchstr);
}

function srow(color){
  if (color>'') color="BGCOLOR="+color; 
  return('<tr><td '+color+'>');
}

function compprofitr1a(a,b){
  if (searchd[a].substr(tempcode,1)==searchd[b].substr(tempcode,1))
    return(0);  
  return ((searchd[a].substr(tempcode,1)>searchd[b].substr(tempcode,1))?-1:1); 
}

function compprofitru1a(a,b){
  if (searchdu[a].substr(tempcode,1)==searchdu[b].substr(tempcode,1))
    return(0);  
  return ((searchdu[a].substr(tempcode,1)>searchdu[b].substr(tempcode,1))?-1:1); 
}

function searchforpre(idstr){
  if (((searcht=='2')&&(ppnum==0))||((searcht=='2')&&(ppnum==200))){
    showpoptext(pphelp,smallbutstr+'onclick="getid(\'poptext\').style.display=\'none\';">OK</span>',idstr,70,70,0);
    return;
  }
  if ((getselected(0,0))!=""){
    showpoptext('Stocks still selected, Continue anyway?',smallbutstr+'onclick="searchfor();">OK</span> &nbsp; '+smallbutstr+'onclick="getid(\'poptext\').style.display=\'none\';">Cancel</span>',idstr,70,60,0);
    return;
  }
  showpoptext('','',void 0,0,0,99);
  searchfor();

}

function searchfor(){
//  if (((searcht=='2')&&(ppnum==0))||((searcht=='2')&&(ppnum==200))){
//    window.alert(pphelp);
//    return;
//  }
//  if (((getselected(0,0))!="")&&(!window.confirm("Stocks still selected, Continue anyway?")))
//  return;
  var typeofs,i,samplenumsearch=0;
  onum=0; showst=0; idx=0; showend=6; oarry.length=0;
  window.status='SEARCHING.... PLEASE WAIT!';
  if (searcht=='1'){
    latestsearchstr=getsearchstr(1,0);
    if (initsearchstr!=latestsearchstr)
      getsetCookie(0,'sc666savedsearch',latestsearchstr);
    setuserlist();
  }
  var cursearchstr=getsearchstr(0,0),alltrue=1,curnum=0,allmap=1,doand=0,addaor=0,mapnum=0;
  if ((typeofsearch!="searchdu")||(searcht=='2')) typeofs="searchdl";
  else typeofs="searchdu";
  if (typeofs=="searchdu") var evalstr="var i,numuk=numuserkeys;for(i=0;i<numuk;i++){if(";
    else var evalstr='var searchdl=searchd.split(","),i,numk=searchdl.length;for(i=0;i<numk;i++){if(';
  for (i=0;i<cursearchstr.length;i++){
    doand=1; mapnum=therealnum[curnum];
    if (mapnum>=0){
      if (cursearchstr.substr(i,1)=='0') doand=0;
      else if (cursearchstr.substr(i,1)==','){
        i++; addaor=1; evalstr+="(";
        while (cursearchstr.substr(i,1)!=','){
          evalstr+="("+typeofs+"[i].substr("+mapnum+",1)=='"+cursearchstr.substr(i,1)+"')";
          if (cursearchstr.substr(i+1,1)!=',')  evalstr+="||";
          i++;
        }
        evalstr+=")";
      }else{
        evalstr+="("+typeofs+"[i].substr("+mapnum+",1)=='"+cursearchstr.substr(i,1)+"')"; 
        if (i==(cursearchstr.length-1)) addaor=1; 
      }
    }else
      doand=0;
    if ((i!=(cursearchstr.length-1))&&(doand)){ 
      evalstr+="&&";
      addaor=0;
    }
  curnum++;
  } // for
  if (addaor) evalstr+="&&(1)";
  else evalstr+="(1)";
  evalstr+="){oarry[onum]=i;onum++;}}";
  eval(evalstr);
  if ((!pageoverride)&&(sample==1)) samplenumsearch=onum;
  if ((!pageoverride)&&((sample==1)&&(onum>2))){onum=2;oarry.length=2;}
//  toomanysorts=true;
  var sf30num;
  if (searcht=='2') sf30num=ppsort;
  else sf30num=getid('sf30').selectedIndex;
  if (sf30num>0){ 
 //   if(onum>1400) toomanysorts=confirm("There are "+onum+" results, sorting may take time");
//    if (toomanysorts!=false){
      sorttemp=sortbycodeform[sf30num].split(":");
      sorttemp=sorttemp[0];
      evalstr="var tempcode="+sortcode[sorttemp]+";";
      if (typeofs=="searchdl") 
        evalstr+="function compprofitr1a(a,b){if(searchdl[a].substr(tempcode,1)==searchdl[b].substr(tempcode,1))return(0); return((searchdl[a].substr(tempcode,1)>searchdl[b].substr(tempcode,1))? -1 : 1); };oarry.sort(compprofitr1a);";else  evalstr+="function compprofitru1a(a,b){if(searchdu[a].substr(tempcode,1)==searchdu[b].substr(tempcode,1)){return(0);};return((searchdu[a].substr(tempcode,1)>searchdu[b].substr(tempcode,1))?-1:1);};oarry.sort(compprofitru1a);";  
      eval(evalstr);
//    }
  }
//  if (toomanysorts!=false){
    window.status='SEARCH DONE!';
    extot=stotal=onum; sfrom=0; 
//    window.alert('st='+stotal);
    if ((!pageoverride)&&(sample==1)) extot=samplenumsearch;
    if (onum>numstocks) stoo=numstocks; 
    else stoo=onum;
    var tmpz='',pg=onum; 
    if (msbrowser){
     if (pg>600) pg=600; // was 200
    } else if (pg>1500) pg=1500;
    if (typeofs=="searchdu"){
      for (i=0; i<pg; i++) tmpz+=stockdatau[oarry[i]]+',';
    }else{
      var stockdatal=stockdata.split(",");
      for (i=0;i<pg;i++) 
        tmpz+=stockdatal[oarry[i]]+','; 
    }
    if (pg>0) tmpz=tmpz.substr(0,tmpz.length-1);
    if ((searcht=='1')&&(initsearchstr!=latestsearchstr)) consult(tmpz,0,0,2,1); 
    else consult(tmpz,0,0,2,0); 
//  }
}

function daysbcall2(){
  if (initsearchstr!=getsearchstr(1,0)) 
    getsetCookie(0,'sc666savedsearch',getsearchstr(1,0));
  dbak=getid('daysb2').selectedIndex; 
  consult("**NONE",0,0,0,0); 
}

function writeentryformspp(){
  var outstr='<table border=0 cellspacing=6 cellpadding=0 width='+(standwidthout-25)+'>',
  divsp='<div style="height:6px;"><!-- --></div>',
  n,k,sortit,l3=[],i=0;
  for (k=1;k<=8;k++){
    n=cvnum(k); 
    sortit=mystocks2[n].split("|"); 
    listcode[k]=sortit[0];
  }
  l3[i++]='<div style="height:2px;"><!-- --></div><div style="padding-left:7px"><div style="border-radius:3px;background:#ececec;border:0.5px solid #d7d7d7;padding:3px;margin:3px;width:'+(standwidthout-28)+'px"><table BORDER=0 CELLSPACING=6 CELLPADDING=0 width=100%>';
  l3[i++]='<tr><td  width=55 style="width:55px;" nowrap><span class="ssp16">Select:</span></td><td nowrap align=left><span class="ssp16">'+writeoptions('scdscode',"scds","",0,0)+'</span></td></tr>';
  l3[i++]='<tr><td align=right nowrap>or&nbsp;</td><td align=left nowrap><span class="ssp16">'+writeoptions('scprecode',"scpre","",0,0)+'</span></td></tr>';
  l3[i++]='</table>';
  l3[i++]='<div style="height:3px;"><!-- --></div><div style="padding-left:13px;padding-right:10px;">';
  l3[i++]='<table BORDER=0 CELLSPACING=4 CELLPADDING=0 width=100%><tr><td nowrap valign="top"><span class="ssp16b" style="position:relative;left:-12px;">Details:</span></td>';
  l3[i++]='<td><div style="width:100%;height:auto;min-height:1px;max-height:999999px;" id="ppinfo" class="ssp16"></div></td></tr></table>';
  l3[i++]='<div style="height:5px;"><!-- --></div><span class="ssp16b" style="position:relative;left:-8px;">Sorted by:</span>';
  l3[i++]='<span id="ppsortby" class="ssp16" style="position:relative;left:-4px;color:#0000ee"></span>';
  l3[i++]='</div></div></div><div style="height:5px;"><!-- --></div></div></div>';
  document.write(l3.join(""));
  // writeoptions('sortbycodeform','sf30','Sort by',1,0)+' 
}

function SearchInfo(){
    var scpre=getid('scpre').selectedIndex,ts='https://www.stockconsultant.com/consultnow/';

    if (scpre==0){
      showpoptext('Select a PreScreen Search to the left, then click for Info',smallbutstr+'onclick="getid(\'poptext\').style.display=\'none\';">OK</span>','sinfow',50,70,0);
      ts+='colorboxclose.html';
    }else
      ts+='searchinfo9.html';
    getid('sinfow').href=ts;
}


function writeentryforms(){
  var outstr='<table border=0 cellspacing=6 cellpadding=0 width='+(standwidthout-22)+'>',
  divsp='<div style="position:relative;top:0px;left:0px;height:6px;"><!-- --></div>',
  n,k,sortit,l3=[],i=0;
  for (k=1;k<=8;k++){
    n=cvnum(k); 
    sortit=mystocks2[n].split("|"); 
    listcode[k]=sortit[0];
  }
    var butstr=' class="ssp18" style="cursor:pointer;padding:4px 10px;border-radius:5px;background:#3c8669;border-width:0px;text-decoration:none;color:#ffffff;"';
    l3[i++]='<div style="padding-left:5px;"><div style="background:#d4eaff;border-radius:5px;border:0.5px solid #ccc;padding:1px;margin:3px;"><table BORDER=0 CELLSPACING=6 CELLPADDING=0 width='+(standwidthout-25)+'><tr><td nowrap><table BORDER=0 CELLSPACING=0 CELLPADDING=0 width=100%><tr><td><span class="ssp16">Select User Preset'+writeoptions('customcode',"sf5","",0,0)+'</span> &nbsp; &nbsp; &nbsp; <span class="ssp16b">Screen String: </span><a rel="nofollow" id="getsstrw" class="ssp16" onmouseover="isl=1;"onmouseout="isl=0;"href="https://www.stockconsultant.com/consultnow/getsearchstr7.html">Get</a> &nbsp;<a rel="nofollow" id="setsstrw" class="ssp16" onmouseover="isl=1;"onmouseout="isl=0;"href="https://www.stockconsultant.com/consultnow/setsearchstr7.html">Set</a></td><td align=right><a class="ssp16b" HREF="javascript:void(0);"onclick="setsearchstr(\'0000!0!!0!0000000000000000000000000\',0);return false;">Reset Screen</a></td></tr></table></td></tr>';
    l3[i++]='<tr><td style="padding-top:6px;padding-bottom:8px;" nowrap><span class="ssp16">Or PreScreen'+writeoptions('scprecode',"scpre","",0,0)+'</span>&nbsp; <a style="padding-left:10px;" rel="nofollow" id="sinfow" onmouseover="isl=1;"onmouseout="isl=0;"href="javascript:void(0)" onclick="SearchInfo();" class="ssp16b">Info</a></td></tr>';
    l3[i++]='<tr><td nowrap><span class="ssp16">Or high quality&nbsp; <a '+butstr+' onclick="javascript:getid(\'scpre\').selectedIndex=63;javascript:usescpre();">Long</a>&nbsp; <a '+butstr+' onclick="javascript:getid(\'scpre\').selectedIndex=64;javascript:usescpre();">Breakout</a>&nbsp; <a '+butstr+' onclick="javascript:getid(\'scpre\').selectedIndex=65;javascript:usescpre();">Short</a>&nbsp; <a '+butstr+' onclick="javascript:getid(\'scpre\').selectedIndex=66;javascript:usescpre();">Breakdown</a> &nbsp;screen.</span></td></tr>';
    l3[i++]='<tr><td style="padding-top:15px;" nowrap><span class="ssp16"><b>Save Screen</b> as User Preset <select class="ssp17" id="setpre" onChange="setpreset()"><option>0: None__________________________ <option>1:<option>2:<option>3:<option>4:<option>5:<option>6:<option>7:<option>8:<option>9:<option>10:<option>11:<option>12:<option>13:<option>14:<option>15:<option>16:<option>17:<option>18:<option>19:<option>20:<option>21:<option>22:<option>23:<option>24:<option>25:</SELECT></span></td></tr>';
    l3[i++]='</table></div>';   

    l3[i++]='<div style="height:2px;"><!-- --></div><div style="background:#ececec;line-height:2.2em;border-radius:5px;border:0.5px solid #ccc;padding:4px;margin:3px;padding-right:0px;margin-right:0px;"><div style="float:left;position:relative;top:10px;padding-left:3px;color:#2222e7" class="ssp17b">OVERALL</div><div style="padding-left:1px;float:left">'+writeoptions('pricecodeform','sf0','Price',1,1,1,3)+'</div><div style="float:left">'+writeoptions('volcodeform','sf1','Typ Volume',1,1,1,3)+'</div><div style="float:left">'+writeoptions('ratedcodeform',"sf2","Overall",1,1,1,1);
    l3[i++]='</div><div style="clear:both;"></div><div>'+writeoptions('profitcodeform',"sf19","Typical Rallies/Pullbacks",1,1,1,3)+' &nbsp; <img width=16 height=16 align=absmiddle '+ilnk+'info16x16.png"><kbd><i> To screen out lightly traded stocks select a range for Price and Volume</i></kbd></div></div>';

    l3[i++]='<div style="height:2px;"><!-- --></div><div style="background:#ececec;line-height:2.2em;border-radius:5px;border:0.5px solid #ccc;padding:4px;margin:3px;"><div style="float:left;position:relative;top:10px;padding-left:3px;color:#2222e7" class="ssp17b">POSITIONING</div><div style="padding-left:5px;float:left">'+writeoptions('changecodeform',"sf10","1 Day Change",1,1,1,3)+'</div><div style="float:left">'+writeoptions('dircodeform',"sf9","Short Term Direction",1,1,1,3)+'</div><div style="clear:both;"></div><div style="float:left">'+writeoptions('boughtcodeform',"sf7","Overbought/sold",0,1,1,2)+'</div><div style="float:left">'+writeoptions('trend1codeform',"sf8","1 Month Trend",1,1,1,3)+'</div><div style="clear:both;"></div><div>'+writeoptions('trendcodeform',"sf6","Intermediate Trend",0,1,1,1)+'</div><div style="float:left">'+writeoptions('rescodeform',"sf11","Support/res",0,1,1,1)+'</div><div style="float:left">'+writeoptions('restypecodeform',"sf12","Sup/res Type",1,1,1,1)+'</div><div style="float:left">'+writeoptions('resstrcodeform',"sf13","Sup/res Strength",1,1,1,1)+'</div><div style="clear:both;"></div></div>';
    l3[i++]='<div style="height:2px;"><!-- --></div><div style="background:#ececec;line-height:2.2em;border-radius:5px;border:0.5px solid #ccc;padding:4px;margin:3px;"><div style="float:left;position:relative;top:10px;padding-left:3px;color:#2222e7" class="ssp17b">TIMING</div><div style="padding-left:5px;float:left">'+writeoptions('bullcodeform',"sf14","3 Day Candlestick",1,1,1,1)+'</div><div style="float:left">'+writeoptions('mf3dircodeform',"sf15","3 Day Accum/Distr",1,1,1,1)+'</div><div style="float:left">'+writeoptions('mfdaycodeform',"sf16","Accum/Distr Strength",1,1,1,1)+'</div><div style="clear:both;"></div><div style="float:left">'+writeoptions('mfdircodeform',"sf17","1 Day Money Flow",0,1,1,2)+'</div><div style="float:left">'+writeoptions('mfdaycodeform',"sf18","Money Flow Strength",1,1,1,3)+'</div><div style="clear:both;"></div></div>';
  
    l3[i++]='<div style="height:2px;"><!-- --></div><div style="background:#ececec;line-height:2.2em;border-radius:5px;border:0.5px solid #ccc;padding:4px;margin:3px;"><div style="float:left;position:relative;top:10px;padding-left:3px;color:#2222e7" class="ssp17b">LONG TRADE</div><div style="padding-left:5px;float:left">'+writeoptions('profitcodeform',"sf20","Target 1 Profit",1,1,1,1)+'</div><div style="float:left">'+writeoptions('lprofitrcodeform',"sf22","Profit/Loss",1,1,1,1)+'</div><div style="float:left">'+writeoptions('tarpotcodeform',"sf21","Target 1 Potential",1,1,1,1)+'</div><div style="clear:both;"></div><div style="float:left">'+writeoptions('breakoutcodeform',"sf23","Breakout",0,1,1,3)+'</div><div style="float:left">'+writeoptions('profitcodeform',"sf24","Breakout Profit",1,1,1,4)+'</div><div style="clear:both;"></div></div>';
    l3[i++]='<div style="height:2px;"><!-- --></div><div style="background:#ececec;line-height:2.2em;border-radius:5px;border:0.5px solid #ccc;padding:4px;margin:3px;"><div style="float:left;position:relative;top:10px;padding-left:3px;color:#2222e7" class="ssp17b">SHORT TRADE</div><div style="padding-left:5px;float:left">'+writeoptions('profitcodeform',"sf25","Target 1 Profit",1,1,1,1)+'</div><div style="float:left">'+writeoptions('lprofitrcodeform',"sf27","Profit/Loss",1,1,1,1)+'</div><div style="float:left">'+writeoptions('tarpotcodeform',"sf26","Target 1 Potential",1,1,1,1)+'</div><div style="clear:both;"></div><div style="float:left">'+writeoptions('breakoutcodeform',"sf28","Breakdown",0,1,1,3)+'</div><div style="float:left">'+writeoptions('profitcodeform',"sf29","Breakdown Profit",1,1,1,4)+'</div><div style="clear:both;"></div></div>';
 
    l3[i++]='<div style="height:2px;"><!-- --></div><div style="background:#d4eaff;border-radius:5px;border:0.5px solid #ccc;padding:4px;padding-top:0px;margin:3px;"><table border=0 cellspacing=2 cellpadding=0 width='+(standwidthout-25)+'>';
    l3[i++]='<tr><td nowrap style="padding-top:5px;position:relative;left:-8px;">'+writeoptions('sortbycodeform','sf30','Sort by',1,0)+' &nbsp; &nbsp; '+writeoptions('optionablecode',"sf3","Options",1,0)+' &nbsp; &nbsp; '+writeoptions('listcode',"sf4","Use List",0,0)+'</td><td nowrap align=right style="padding-right:5px;"><a href="https://www.stockconsultant.com/help/stockscreener.html" target="htab"><b>SearchTool Help</b></a></td></tr></table></div>'+divsp+'</div></div></div>';
    document.write(l3.join(""));
}
doneloading3=1;
