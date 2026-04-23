/* ── MM DASHBOARD STATIC DATA ── data.js ── */

const RP_SEASONS = {
  SEP:{ cr:9.0,  cpa:325, eff:73, rde:10, age75:15, ltv:730, ltvPct:0.45, label:'SEP — Special Enrollment' },
  OEP:{ cr:10.0, cpa:325, eff:72, rde:15, age75:15, ltv:730, ltvPct:0.45, label:'OEP — Open Enrollment' },
  AEP:{ cr:16.0, cpa:275, eff:74, rde:15, age75:15, ltv:730, ltvPct:0.45, label:'AEP — Annual Enrollment' },
};

const MPQS_MULT = { A:1.15, B:1.00, C:0.85, D:0.70 };

const SEASON_META = {
  SEP:{ cpa:325, cr:9.0,  eff:73, rde:10, age75:15, ltv:730, label:'SEP — Special Enrollment', dates:'Apr 1 – Oct 14', color:'var(--green)', pillBg:'rgba(0,230,118,0.15)', pillBorder:'rgba(0,230,118,0.3)' },
  OEP:{ cpa:325, cr:10.0, eff:72, rde:15, age75:15, ltv:730, label:'OEP — Open Enrollment',    dates:'Jan 1 – Mar 31', color:'var(--cyan)',  pillBg:'rgba(0,229,255,0.15)',  pillBorder:'rgba(0,229,255,0.3)' },
  AEP:{ cpa:275, cr:16.0, eff:74, rde:15, age75:15, ltv:730, label:'AEP — Annual Enrollment',  dates:'Oct 15 – Nov 7', color:'var(--amber)', pillBg:'rgba(255,181,71,0.15)',  pillBorder:'rgba(255,181,71,0.3)' },
};

const SUBID_DATA = [
  { id:'FLEX-CARD', angle:'Flex card / allowance benefit',  cr:9.4, gpth:92, eff:74, rde:8,  age75:13, qi:1.10 },
  { id:'GROCERY',   angle:'Grocery / food allowance',       cr:8.8, gpth:85, eff:72, rde:9,  age75:16, qi:1.05 },
  { id:'DENTAL',    angle:'Dental coverage emphasis',       cr:7.9, gpth:78, eff:69, rde:11, age75:14, qi:0.95 },
  { id:'OTC',       angle:'OTC / pharmacy benefit',         cr:7.2, gpth:71, eff:67, rde:13, age75:17, qi:0.88 },
  { id:'VISION',    angle:'Vision + dental combo',          cr:8.1, gpth:80, eff:70, rde:10, age75:15, qi:0.92 },
  { id:'TRANSPORT', angle:'Transportation benefit',         cr:6.4, gpth:63, eff:64, rde:15, age75:19, qi:0.80 },
];
const SUBID_MAP = Object.fromEntries(SUBID_DATA.map(s=>[s.id,s]));

const RP_NOTION_DATA = [
  {Publisher:"Adolent Marketing",Season:"SEP",MPQS:"B",actualCpa:328,targetCpa:325,eff:71,rde:9,age75:17,cr:8.2,subIds:["FLEX-CARD","GROCERY"],rpAction:"On Target",actionBand:"Maintain",baseBid:18},
  {Publisher:"Barrington Media Group",Season:"SEP",MPQS:"D",actualCpa:765,targetCpa:325,eff:68,rde:14,age75:21,cr:6.1,subIds:["FLEX-CARD"],rpAction:"Cut Bid",actionBand:"Pullback",baseBid:null},
  {Publisher:"DigiPeak LLC",Season:"SEP",MPQS:"B",actualCpa:387,targetCpa:325,eff:73,rde:8,age75:14,cr:7.0,subIds:["GROCERY","DENTAL"],rpAction:"Reduce Bid",actionBand:"Monitor",baseBid:25},
  {Publisher:"EngageCX",Season:"SEP",MPQS:"C",actualCpa:442,targetCpa:325,eff:70,rde:11,age75:18,cr:7.8,subIds:["FLEX-CARD","OTC"],rpAction:"Reduce Bid",actionBand:"Throttle",baseBid:38},
  {Publisher:"Healthcare.com",Season:"SEP",MPQS:"B",actualCpa:348,targetCpa:325,eff:74,rde:9,age75:15,cr:8.5,subIds:["FLEX-CARD","GROCERY","DENTAL"],rpAction:"Reduce Bid",actionBand:"Maintain",baseBid:40},
  {Publisher:"HLG Solutions",Season:"SEP",MPQS:"C",actualCpa:274,targetCpa:325,eff:69,rde:12,age75:20,cr:9.8,subIds:["OTC"],rpAction:"Reduce Bid",actionBand:"Monitor",baseBid:22},
  {Publisher:"Insurco",Season:"SEP",MPQS:"B",actualCpa:425,targetCpa:325,eff:75,rde:7,age75:12,cr:8.1,subIds:["GROCERY"],rpAction:"Reduce Bid",actionBand:"Monitor",baseBid:40},
  {Publisher:"Milestone Marketing Solutions",Season:"SEP",MPQS:"B",actualCpa:480,targetCpa:325,eff:72,rde:9,age75:16,cr:7.2,subIds:["FLEX-CARD","GROCERY"],rpAction:"Reduce Bid",actionBand:"Throttle",baseBid:45},
  {Publisher:"MyHealthAngel",Season:"SEP",MPQS:"D",actualCpa:421,targetCpa:325,eff:66,rde:15,age75:23,cr:6.5,subIds:["GROCERY"],rpAction:"Cut Bid",actionBand:"Pullback",baseBid:null},
  {Publisher:"Paragon",Season:"SEP",MPQS:"B",actualCpa:null,targetCpa:325,eff:73,rde:8,age75:13,cr:0,subIds:["FLEX-CARD"],rpAction:"No Spend",actionBand:"Maintain",baseBid:30},
  {Publisher:"Quote Velocity",Season:"SEP",MPQS:"B",actualCpa:264,targetCpa:325,eff:72,rde:10,age75:15,cr:9.1,subIds:["DENTAL","OTC"],rpAction:"On Target",actionBand:"Maintain",baseBid:35},
  {Publisher:"RateQuote",Season:"SEP",MPQS:"B",actualCpa:367,targetCpa:325,eff:70,rde:8,age75:12,cr:7.5,subIds:["GROCERY"],rpAction:"Reduce Bid",actionBand:"Monitor",baseBid:18},
  {Publisher:"RevRise Media",Season:"SEP",MPQS:"C",actualCpa:null,targetCpa:325,eff:74,rde:11,age75:18,cr:0,subIds:["FLEX-CARD","GROCERY"],rpAction:"No Spend",actionBand:"Maintain",baseBid:35},
  {Publisher:"Scalability.io",Season:"SEP",MPQS:"B",actualCpa:289,targetCpa:325,eff:71,rde:9,age75:16,cr:8.8,subIds:["DENTAL"],rpAction:"Reduce Bid",actionBand:"Monitor",baseBid:27},
  {Publisher:"The Wisdom Companies LLC",Season:"SEP",MPQS:"C",actualCpa:346,targetCpa:325,eff:68,rde:10,age75:19,cr:7.8,subIds:["GROCERY","OTC"],rpAction:"Reduce Bid",actionBand:"Monitor",baseBid:20},
  {Publisher:"UAB Inulti",Season:"SEP",MPQS:"B",actualCpa:304,targetCpa:325,eff:70,rde:8,age75:14,cr:8.4,subIds:["FLEX-CARD"],rpAction:"On Target",actionBand:"Maintain",baseBid:18},
  {Publisher:"Adolent Marketing",Season:"OEP",MPQS:"B",actualCpa:null,targetCpa:325,eff:71,rde:9,age75:17,cr:6.2,subIds:["FLEX-CARD","GROCERY"],rpAction:"No Spend",actionBand:"Maintain",baseBid:null},
  {Publisher:"Healthcare.com",Season:"OEP",MPQS:"B",actualCpa:240,targetCpa:325,eff:66.7,rde:9,age75:0,cr:19.4,subIds:["FLEX-CARD","GROCERY","DENTAL"],rpAction:"Scale Up",actionBand:"Scale Eligible",baseBid:45},
  {Publisher:"Insurco",Season:"OEP",MPQS:"A",actualCpa:null,targetCpa:325,eff:75,rde:7,age75:12,cr:8.2,subIds:["GROCERY"],rpAction:"No Spend",actionBand:"Scale Eligible",baseBid:45},
  {Publisher:"Paragon",Season:"OEP",MPQS:"A",actualCpa:null,targetCpa:325,eff:73,rde:8,age75:13,cr:9.6,subIds:["FLEX-CARD"],rpAction:"No Spend",actionBand:"Scale Eligible",baseBid:30},
  {Publisher:"RevRise Media",Season:"OEP",MPQS:"B",actualCpa:231,targetCpa:325,eff:87.3,rde:11,age75:43.3,cr:14.8,subIds:["FLEX-CARD","GROCERY"],rpAction:"Scale Up",actionBand:"Scale Eligible",baseBid:35},
  {Publisher:"Scalability.io",Season:"OEP",MPQS:"B",actualCpa:369,targetCpa:325,eff:78.4,rde:9,age75:9.6,cr:10.6,subIds:["DENTAL"],rpAction:"Reduce Bid",actionBand:"Maintain",baseBid:27},
  {Publisher:"Quote Velocity",Season:"OEP",MPQS:"B",actualCpa:352,targetCpa:325,eff:75.3,rde:10,age75:4.9,cr:10.0,subIds:["DENTAL","OTC"],rpAction:"Reduce Bid",actionBand:"Monitor",baseBid:35},
];

const RP_SCORECARD_DATA = [
  {pub:"Quote Velocity",season:"OEP",rawCalls:1147,netSales:446,cpa:352,eff:0.753,age75:0.049,talkHours:1355.6,actionBand:"Monitor",status:"Watch",biggestRisk:"GPpTH $53 below $75 benchmark",topOpp:"Lowest Over75% in Monitor — compliance-clean partner with scale potential",date:"2026-02-28"},
  {pub:"Elijay Marketing Solutions",season:"OEP",rawCalls:41,netSales:2,cpa:663,eff:0.364,age75:0.670,talkHours:59.3,actionBand:"Pullback",status:"At Risk",biggestRisk:"Lowest MPQS. Negative GPpTH, Eff% 36.4%, Over75 67.0% — all components flagged",topOpp:"None — full program review required",date:"2026-02-28"},
  {pub:"The Wisdom Companies LLC",season:"OEP",rawCalls:1147,netSales:133,cpa:316,eff:0.851,age75:0.141,talkHours:562.5,actionBand:"Monitor",status:"Watch",biggestRisk:"CR 7.9% below 9% benchmark",topOpp:"Effectuation 85.1% — highest durability in Monitor. CR coaching would unlock Maintain.",date:"2026-02-28"},
  {pub:"Scalability.io",season:"OEP",rawCalls:1147,netSales:117,cpa:369,eff:0.784,age75:0.096,talkHours:809.9,actionBand:"Maintain",status:"Healthy",biggestRisk:"GPpTH $57 below $75 benchmark",topOpp:"7 points from Scale Eligible — GPpTH improvement is the single lever",date:"2026-02-28"},
  {pub:"RevRise Media",season:"OEP",rawCalls:1147,billableCalls:null,billableRate:0.256,netSales:59,cpa:231,eff:0.873,age75:0.433,talkHours:75.7,actionBand:"Scale Eligible",status:"Healthy",biggestRisk:"Demo Mix 43.3% Over75 — nearly 3x the 15% benchmark",topOpp:"Strongest Eff% in portfolio at 87.3%",date:"2026-02-28"},
  {pub:"Milestone Marketing Solutions",season:"OEP",rawCalls:1147,netSales:361,cpa:442,eff:0.789,age75:0.184,talkHours:1403.7,actionBand:"Monitor",status:"Watch",biggestRisk:"GPpTH $42 significantly below $75 benchmark",topOpp:"Highest volume in Monitor — GPpTH improvement would have largest portfolio impact",date:"2026-02-28"},
  {pub:"Paragon",season:"OEP",rawCalls:1147,netSales:548,cpa:265,eff:0.704,age75:0.129,talkHours:2483.9,actionBand:"Maintain",status:"Healthy",biggestRisk:"Effectuation 70.4% — slightly below 72% benchmark",topOpp:"Highest Net Sales in Maintain — scale upside significant if GPpTH improves",date:"2026-02-28"},
  {pub:"Healthcare.com",season:"OEP",rawCalls:1147,billableCalls:464,billableRate:0.256,netSales:6,cpa:240,eff:0.667,age75:0.000,talkHours:6.7,actionBand:"Scale Eligible",status:"Healthy",biggestRisk:"Over75 = 0.0% — confirm not a data gap before scaling",topOpp:"Highest MPQS in portfolio — immediate scale candidate",date:"2026-02-28"},
  {pub:"EngageCX",season:"OEP",rawCalls:1147,netSales:950,cpa:413,eff:0.731,age75:0.274,talkHours:3168.9,actionBand:"Throttle",status:"Watch",biggestRisk:"GPpTH $36 and Over75 27.4% on highest-volume Throttle partner",topOpp:"950 sold policies — largest volume opportunity outside Maintain/Scale",date:"2026-02-28"},
  {pub:"Adolent Marketing",season:"OEP",rawCalls:1147,netSales:284,cpa:294,eff:0.706,age75:0.669,talkHours:1990.1,actionBand:"Throttle",status:"Watch",biggestRisk:"Over75 66.9% — highest in portfolio. Immediate compliance escalation required.",topOpp:"284 sold policies at strong CPA — compliance resolution must precede volume",date:"2026-02-28"},
];

const FALLBACK = [
  {"Report":"QM — Healthcare.com — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Scale Eligible","CPA":240,"Conv Rate (CR%)":0.194,"Effectuation %":0.667,"Duplicate Rate %":0.047,"Headline Metric":"MPQS 102.4 — #1 in portfolio. GPpTH $205. Scale Eligible.","Biggest Risk":"Over75 = 0.0% — confirm not a data gap before scaling","Top Opportunity":"Highest MPQS in portfolio — immediate scale candidate"},
  {"Report":"QM — RevRise Media — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Scale Eligible","CPA":231,"Conv Rate (CR%)":0.148,"Effectuation %":0.873,"Duplicate Rate %":0.047,"Headline Metric":"MPQS 97.3 — #2 in portfolio. GPpTH $135. Scale Eligible.","Biggest Risk":"Demo Mix 43.3% Over75 — nearly 3x benchmark.","Top Opportunity":"Strongest Effectuation % at 87.3%"},
  {"Report":"QM — Scalability.io — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Maintain","CPA":369,"Conv Rate (CR%)":0.106,"Effectuation %":0.784,"Duplicate Rate %":null,"Headline Metric":"MPQS 83.8 — #4. Maintain.","Biggest Risk":"GPpTH $57 below $75 benchmark","Top Opportunity":"7 points from Scale Eligible"},
  {"Report":"QM — Quote Velocity — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Monitor","CPA":352,"Conv Rate (CR%)":0.1,"Effectuation %":0.753,"Duplicate Rate %":null,"Headline Metric":"MPQS 81.4 — #6. Monitor.","Biggest Risk":"GPpTH $53 below benchmark","Top Opportunity":"Best Over75% in Monitor tier"},
  {"Report":"QM — Milestone Marketing — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Monitor","CPA":442,"Conv Rate (CR%)":0.11,"Effectuation %":0.789,"Duplicate Rate %":null,"Headline Metric":"MPQS 76.0. Monitor. Highest volume in Monitor.","Biggest Risk":"GPpTH $42 significantly below benchmark","Top Opportunity":"GPpTH improvement would have largest portfolio impact"},
  {"Report":"QM — EngageCX — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Throttle","CPA":413,"Conv Rate (CR%)":0.098,"Effectuation %":0.731,"Duplicate Rate %":0.042,"Headline Metric":"MPQS 69.5. Throttle. 950 sales.","Biggest Risk":"GPpTH $36 on highest-volume Throttle partner","Top Opportunity":"950 net sales — largest volume outside Maintain/Scale"},
  {"Report":"QM — Adolent Marketing — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Throttle","CPA":294,"Conv Rate (CR%)":0.062,"Effectuation %":0.706,"Duplicate Rate %":null,"Headline Metric":"MPQS 69.6. Throttle. Over75 66.9%.","Biggest Risk":"Over75 66.9% — compliance escalation required","Top Opportunity":"High volume — compliance fix unlocks expansion"},
  {"Report":"QM — Elijay / VitalCareWorks — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Pullback","CPA":663,"Conv Rate (CR%)":0.049,"Effectuation %":0.364,"Duplicate Rate %":null,"Headline Metric":"MPQS 56.3 — Pullback.","Biggest Risk":"Lowest MPQS. All components flagged.","Top Opportunity":"Full program review required"},
  {"Report":"QM — Paragon — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Maintain","CPA":265,"Conv Rate (CR%)":0.096,"Effectuation %":0.704,"Duplicate Rate %":0.029,"Headline Metric":"MPQS 83.4. Maintain. High volume.","Biggest Risk":"Effectuation 70.4% slightly below 72%","Top Opportunity":"Highest Net Sales in Maintain band"},
  {"Report":"QM — Insurco — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Monitor","CPA":564,"Conv Rate (CR%)":0.082,"Effectuation %":0.813,"Duplicate Rate %":0.033,"Headline Metric":"MPQS Monitor. GPpTH negative.","Biggest Risk":"Negative GPpTH — entire score drag is economics","Top Opportunity":"If GPpTH turns positive, Maintain band is within reach"},
  {"Report":"QM — MyHealthAngel — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Pullback","CPA":421,"Conv Rate (CR%)":0.065,"Effectuation %":0.660,"Duplicate Rate %":null,"Headline Metric":"Pullback. Low LTV, elevated RDE and demo age over 75.","Biggest Risk":"Durability profile unacceptable at current spend","Top Opportunity":"None — program review required"},
  {"Report":"QM — Barrington Media Group — Feb 2026","date:Date:start":"2026-02-28","Action Band":"Pullback","CPA":765,"Conv Rate (CR%)":0.061,"Effectuation %":0.680,"Duplicate Rate %":0.058,"Headline Metric":"Pullback. GPpTH -$117, Over75 37.5%.","Biggest Risk":"Economics and compliance both flagged simultaneously","Top Opportunity":"CR 17.2% is a genuine strength if CPA corrected"},
];

/* ── STATE ── */
let activeRPSeason = 'SEP';
let globalSeason = 'SEP';

/* ── RP HELPERS ── */
function calcRPEnhancedBid(d) {
  const t = RP_SEASONS[activeRPSeason];
  const ltv = 730, ltvPct = 0.45;
  const cr = d.cr || t.cr;
  const eff = d.eff || t.eff;
  const baseBid = ltv * (eff/100) * ltvPct * (cr/100);
  const mpqsMult = MPQS_MULT[d.MPQS] || 1.0;
  const qis = (d.subIds||[]).map(id => SUBID_MAP[id]?.qi || 1.0);
  const qi = qis.length ? qis.reduce((a,b)=>a+b,0)/qis.length : 1.0;
  return +(baseBid * mpqsMult * qi).toFixed(0);
}
function rpBadgeColor(a){const m={'Scale Up':'#00E676','On Target':'#00E676','Slight ↑':'#4FC3F7','Reduce Bid':'#FFB547','Cut Bid':'#FF5252','No Spend':'rgba(255,255,255,0.2)'};return m[a]||'rgba(255,255,255,0.2)';}
function mpqsBadgeColor(g){return g==='A'?'#00E676':g==='B'?'#4FC3F7':g==='C'?'#FFB547':'#FF5252';}
