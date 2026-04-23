<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Media Match — Performance Dashboard | Centerfield Health & Medicare</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700&family=Inter:wght@300;400;500;600&family=DM+Sans:wght@400;500;600&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>
<style>
:root{--ink:#05080F;--ink2:#0A0F1C;--surface:rgba(255,255,255,0.035);--surface2:rgba(255,255,255,0.06);--edge:rgba(255,255,255,0.07);--edge2:rgba(255,255,255,0.13);--cyan:#00E5FF;--cyan-dim:rgba(0,229,255,0.12);--amber:#FFB547;--amber-dim:rgba(255,181,71,0.12);--green:#00E676;--green-dim:rgba(0,230,118,0.10);--red:#FF5252;--red-dim:rgba(255,82,82,0.10);--violet:#B388FF;--violet-dim:rgba(179,136,255,0.1);--blue:#4FC3F7;--blue-dim:rgba(79,195,247,0.1);--text:#F0F4FF;--text-2:rgba(240,244,255,0.6);--text-3:rgba(240,244,255,0.35);--r-sm:5px;--r-md:10px;--r-lg:16px;--font-d:'Syne',sans-serif;--font-m:'Space Mono',monospace;--font-b:'Inter',sans-serif;--font-s:'DM Sans',sans-serif;--font-num:'Barlow',sans-serif;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
body{font-family:var(--font-b);background:var(--ink);color:var(--text);min-height:100vh;overflow-x:hidden;-webkit-font-smoothing:antialiased;}
body::before{content:'';position:fixed;inset:0;z-index:0;background:radial-gradient(ellipse 100% 70% at 0% 0%,rgba(0,229,255,0.055) 0%,transparent 55%),radial-gradient(ellipse 80% 60% at 100% 100%,rgba(255,181,71,0.04) 0%,transparent 55%);pointer-events:none;}
body::after{content:'';position:fixed;inset:0;z-index:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.007) 2px,rgba(255,255,255,0.007) 4px);pointer-events:none;}
.shell{position:relative;z-index:1;max-width:1540px;margin:0 auto;padding:0 28px 60px;min-width:0;}

/* HEADER */
.header{display:flex;align-items:center;justify-content:space-between;padding:22px 0 0;border-bottom:1px solid var(--edge);margin-bottom:0;animation:slideDown 0.5s cubic-bezier(0.16,1,0.3,1) both;}
.header-left{display:flex;align-items:center;gap:18px;}
.logo-mark{width:42px;height:42px;background:linear-gradient(135deg,var(--cyan),rgba(0,229,255,0.3));border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.logo-mark span{font-family:var(--font-m);font-size:12px;font-weight:700;color:var(--ink);}
.header-wordmark{display:flex;flex-direction:column;gap:1px;}
.header-eyebrow{font-family:var(--font-m);font-size:9px;letter-spacing:2.5px;text-transform:uppercase;color:var(--cyan);opacity:0.8;}
.header-name{font-family:var(--font-d);font-size:18px;font-weight:800;color:var(--text);letter-spacing:-0.3px;line-height:1;}
.hdivider{width:1px;height:32px;background:var(--edge2);}
.header-sub{font-size:12px;color:var(--text-2);}
.header-right{display:flex;align-items:center;gap:12px;padding-bottom:16px;}
.period-tabs{display:flex;gap:2px;background:var(--surface);border:1px solid var(--edge);border-radius:var(--r-sm);padding:3px;}
.ptab{padding:6px 14px;font-family:var(--font-m);font-size:11px;color:var(--text-3);background:transparent;border:none;border-radius:3px;cursor:pointer;transition:all 0.15s;letter-spacing:0.5px;}
.ptab.active{background:var(--cyan);color:var(--ink);font-weight:700;}
.ptab:hover:not(.active){color:var(--text);background:var(--surface2);}
.refresh-btn{display:flex;align-items:center;gap:8px;padding:7px 16px;background:var(--surface);border:1px solid var(--edge2);border-radius:var(--r-sm);cursor:pointer;transition:all 0.2s;font-family:var(--font-m);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--cyan);}
.refresh-btn:hover{background:var(--cyan-dim);border-color:rgba(0,229,255,0.4);transform:translateY(-1px);}
.refresh-btn.loading{color:var(--text-3);pointer-events:none;border-color:var(--edge);}
.refresh-icon{font-size:14px;display:inline-block;transition:transform 0.3s;}
.refresh-btn.loading .refresh-icon{animation:spin 1s linear infinite;}
.last-sync{font-family:var(--font-m);font-size:9px;color:var(--text-3);display:flex;align-items:center;gap:5px;}
.sync-dot{width:5px;height:5px;border-radius:50%;background:var(--green);box-shadow:0 0 6px var(--green);animation:blink 2s infinite;}
.sync-dot.stale{background:var(--amber);box-shadow:0 0 6px var(--amber);animation:none;}

/* NAV TABS */
.nav-tabs{display:flex;gap:2px;border-bottom:1px solid var(--edge);margin-bottom:24px;}
.nav-tab{padding:12px 20px;font-family:var(--font-s);font-size:13px;font-weight:500;color:var(--text-3);background:transparent;border:none;border-bottom:2px solid transparent;cursor:pointer;transition:all 0.15s;letter-spacing:0.2px;margin-bottom:-1px;}
.nav-tab.active{color:var(--cyan);border-bottom-color:var(--cyan);font-weight:600;}
.nav-tab:hover:not(.active){color:var(--text-2);}
.tab-panel{display:none;}
.tab-panel.active{display:block;}

/* NOTION BANNER */
.notion-banner{display:flex;align-items:center;gap:12px;padding:10px 16px;background:linear-gradient(90deg,rgba(0,229,255,0.06),rgba(0,229,255,0.02));border:1px solid rgba(0,229,255,0.15);border-radius:var(--r-md);margin-bottom:22px;font-size:12px;color:var(--text-2);animation:riseIn 0.4s ease both;flex-wrap:wrap;gap:8px;}
.notion-banner strong{color:var(--cyan);font-family:var(--font-m);font-size:10px;letter-spacing:1px;text-transform:uppercase;}
.notion-source-pill{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;background:var(--cyan-dim);border:1px solid rgba(0,229,255,0.25);border-radius:20px;font-family:var(--font-m);font-size:9px;color:var(--cyan);font-weight:700;letter-spacing:1px;white-space:nowrap;}

/* SECTION */
.sec{display:flex;align-items:center;gap:12px;margin-bottom:14px;margin-top:4px;}
.sec-tag{font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--cyan);padding:4px 10px;background:var(--cyan-dim);border:1px solid rgba(0,229,255,0.2);border-radius:3px;}
.sec-tag.amber{color:var(--amber);background:var(--amber-dim);border-color:rgba(255,181,71,0.2);}
.sec-tag.green{color:var(--green);background:var(--green-dim);border-color:rgba(0,230,118,0.2);}
.sec-tag.violet{color:var(--violet);background:var(--violet-dim);border-color:rgba(179,136,255,0.2);}
.sec-line{flex:1;height:1px;background:linear-gradient(90deg,var(--edge2) 0%,transparent 100%);}
.sec-count{font-family:var(--font-m);font-size:9px;color:var(--text-3);}

/* KPI GRID */
.kpi-grid{display:grid;grid-template-columns:repeat(6,minmax(180px,1fr));gap:10px;margin-bottom:26px;}
.kpi-grid-4{display:grid;grid-template-columns:repeat(4,minmax(200px,1fr));gap:10px;margin-bottom:26px;}
.kpi-grid-3{display:grid;grid-template-columns:repeat(3,minmax(220px,1fr));gap:10px;margin-bottom:26px;}
.kpi{background:var(--surface);border:1px solid var(--edge);border-radius:var(--r-md);padding:18px 16px 14px;position:relative;overflow:hidden;cursor:default;transition:border-color 0.2s,background 0.2s,transform 0.2s;animation:riseIn 0.5s cubic-bezier(0.16,1,0.3,1) both;}
.kpi:hover{border-color:var(--edge2);background:var(--surface2);transform:translateY(-2px);}
.kpi-accent{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--cyan),transparent);opacity:0.5;}
.kpi.primary .kpi-accent{background:linear-gradient(90deg,var(--amber),var(--cyan));opacity:1;}
.kpi.primary{border-color:rgba(255,181,71,0.2);background:linear-gradient(135deg,rgba(255,181,71,0.06) 0%,var(--surface) 100%);}
.kpi.green-accent .kpi-accent{background:linear-gradient(90deg,var(--green),transparent);opacity:0.8;}
.kpi.amber-accent .kpi-accent{background:linear-gradient(90deg,var(--amber),transparent);opacity:0.8;}
.kpi.violet-accent .kpi-accent{background:linear-gradient(90deg,var(--violet),transparent);opacity:0.8;}
.kpi-label{font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);margin-bottom:10px;}
.kpi-val{font-family:var(--font-num);font-size:28px;font-weight:300;color:var(--text);line-height:1;letter-spacing:-0.5px;margin-bottom:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.kpi-val .unit{font-size:14px;font-weight:400;color:var(--text-2);letter-spacing:0;margin-left:1px;}
.kpi-badge{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-m);font-size:10px;font-weight:700;padding:3px 8px;border-radius:20px;letter-spacing:0.3px;}
.kpi-badge.up{background:var(--green-dim);color:var(--green);}
.kpi-badge.down{background:var(--red-dim);color:var(--red);}
.kpi-badge.flat{background:var(--surface2);color:var(--text-3);}

/* LAYOUTS */
.g6040{display:grid;grid-template-columns:1.5fr 1fr;gap:12px;margin-bottom:12px;}
.g3333{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px;}
.g5050{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;}
.g4060{display:grid;grid-template-columns:1fr 1.5fr;gap:12px;margin-bottom:12px;}

/* PANEL */
.panel{background:var(--surface);border:1px solid var(--edge);border-radius:var(--r-lg);padding:22px;animation:riseIn 0.55s cubic-bezier(0.16,1,0.3,1) both;transition:border-color 0.25s;}
.panel:hover{border-color:var(--edge2);}
.p-head{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:18px;}
.p-title{font-family:var(--font-d);font-size:13px;font-weight:700;color:var(--text);letter-spacing:-0.2px;margin-bottom:3px;}
.p-sub{font-size:11px;color:var(--text-3);}
.pill{font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:4px 10px;border-radius:20px;border:1px solid;white-space:nowrap;}
.pill-c{color:var(--cyan);border-color:rgba(0,229,255,0.3);background:var(--cyan-dim);}
.pill-a{color:var(--amber);border-color:rgba(255,181,71,0.3);background:var(--amber-dim);}
.pill-g{color:var(--green);border-color:rgba(0,230,118,0.3);background:var(--green-dim);}
.pill-v{color:var(--violet);border-color:rgba(179,136,255,0.3);background:var(--violet-dim);}
.pill-notion{color:var(--violet);border-color:rgba(179,136,255,0.3);background:var(--violet-dim);}

/* FUNNEL */
.funnel{display:flex;flex-direction:column;gap:9px;}
.f-row{display:flex;align-items:center;gap:10px;}
.f-label{font-size:11px;color:var(--text-2);width:145px;flex-shrink:0;text-align:right;}
.f-track{flex:1;height:28px;background:rgba(255,255,255,0.03);border-radius:3px;overflow:hidden;border:1px solid var(--edge);}
.f-fill{height:100%;border-radius:3px;display:flex;align-items:center;padding-left:10px;font-family:var(--font-m);font-size:10px;font-weight:700;color:rgba(255,255,255,0.9);transition:width 1.4s cubic-bezier(0.16,1,0.3,1);}
.f-pct{font-family:var(--font-m);font-size:10px;color:var(--text-3);width:42px;flex-shrink:0;}

/* CLIENT TABLE */
.ct{width:100%;border-collapse:collapse;}
.ct th{font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);text-align:left;padding:0 0 10px;border-bottom:1px solid var(--edge);}
.ct th:not(:first-child){text-align:right;}
.ct td{padding:10px 0;border-bottom:1px solid var(--edge);font-size:12px;color:var(--text-2);vertical-align:middle;}
.ct td:not(:first-child){text-align:right;font-family:var(--font-m);font-size:11px;}
.ct tr:last-child td{border-bottom:none;}
.ct tr{transition:background 0.15s;}
.ct tr:hover td{background:var(--surface2);}
.c-name{font-family:var(--font-d);font-weight:700;font-size:13px;color:var(--text);}
.c-type{font-size:10px;color:var(--text-3);margin-top:1px;display:block;}
.mb-wrap{display:flex;align-items:center;justify-content:flex-end;gap:7px;}
.mb{width:46px;height:3px;background:var(--edge);border-radius:2px;overflow:hidden;}
.mb-fill{height:100%;border-radius:2px;transition:width 1s ease;}
.stag{display:inline-block;font-family:var(--font-m);font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;letter-spacing:0.5px;}
.stag-g{background:var(--green-dim);color:var(--green);}
.stag-a{background:var(--amber-dim);color:var(--amber);}

/* PUBLISHER SCORECARD */
.publisher-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:12px;margin-bottom:24px;}
.pub-card{background:var(--surface);border:1px solid var(--edge);border-radius:var(--r-md);padding:16px 15px;position:relative;overflow:hidden;transition:border-color 0.2s,transform 0.2s,background 0.2s;cursor:default;}
.pub-card:hover{border-color:var(--edge2);background:var(--surface2);transform:translateY(-2px);}
.pub-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1.5px;}
.pub-card.scale-eligible::before{background:linear-gradient(90deg,var(--green),transparent);opacity:1;}
.pub-card.maintain::before{background:linear-gradient(90deg,var(--cyan),transparent);opacity:0.8;}
.pub-card.monitor::before{background:linear-gradient(90deg,var(--amber),transparent);opacity:0.7;}
.pub-card.throttle::before{background:linear-gradient(90deg,rgba(255,181,71,0.5),transparent);opacity:1;}
.pub-card.pullback::before{background:linear-gradient(90deg,var(--red),transparent);opacity:0.8;}
.pub-top{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;gap:8px;}
.pub-name{font-family:var(--font-num);font-size:14px;font-weight:400;color:var(--text);letter-spacing:-0.1px;line-height:1.3;word-break:break-word;}
.pub-action{font-family:var(--font-m);font-size:8px;font-weight:700;letter-spacing:1px;padding:3px 7px;border-radius:20px;text-transform:uppercase;white-space:nowrap;flex-shrink:0;margin-left:6px;}
.action-scale{background:var(--green-dim);color:var(--green);}
.action-maintain{background:var(--cyan-dim);color:var(--cyan);}
.action-monitor{background:var(--amber-dim);color:var(--amber);}
.action-throttle{background:rgba(255,181,71,0.08);color:var(--amber);border:1px solid rgba(255,181,71,0.2);}
.action-pullback{background:var(--red-dim);color:var(--red);}
.pub-metrics{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;}
.pub-metric{display:flex;flex-direction:column;gap:2px;}
.pub-metric-label{font-family:var(--font-m);font-size:8px;letter-spacing:1px;text-transform:uppercase;color:var(--text-3);}
.pub-metric-val{font-family:var(--font-num);font-size:16px;font-weight:300;color:var(--text);line-height:1;letter-spacing:-0.3px;}
.pub-metric-val.good{color:var(--green);}
.pub-metric-val.warn{color:var(--amber);}
.pub-metric-val.bad{color:var(--red);}
.pub-headline{font-size:10px;color:var(--text-3);line-height:1.4;padding-top:8px;border-top:1px solid var(--edge);}
.pub-risk{display:flex;align-items:flex-start;gap:5px;font-size:10px;color:rgba(255,82,82,0.75);margin-top:5px;line-height:1.35;}
.pub-risk::before{content:'!';font-family:var(--font-m);font-size:9px;font-weight:700;flex-shrink:0;background:var(--red-dim);border-radius:50%;width:12px;height:12px;display:flex;align-items:center;justify-content:center;}
.pub-opp{display:flex;align-items:flex-start;gap:5px;font-size:10px;color:rgba(0,230,118,0.7);margin-top:4px;line-height:1.35;}
.pub-opp::before{content:'+';font-family:var(--font-m);font-size:10px;font-weight:700;flex-shrink:0;}

/* DISPOSITION TAB */
.disp-publisher-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(520px,1fr));gap:14px;margin-bottom:24px;}
.disp-card{background:var(--surface);border:1px solid var(--edge);border-radius:var(--r-lg);overflow:hidden;transition:border-color 0.2s;}
.disp-card:hover{border-color:var(--edge2);}
.disp-card-header{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid var(--edge);}
.disp-card-header.healthy{border-left:3px solid var(--green);}
.disp-card-header.watch{border-left:3px solid var(--amber);}
.disp-card-header.risk{border-left:3px solid var(--red);}
.disp-pub-name{font-family:var(--font-num);font-size:14px;font-weight:400;color:var(--text);}
.disp-pub-meta{font-family:var(--font-m);font-size:9px;color:var(--text-3);margin-top:2px;}
.disp-band{font-family:var(--font-m);font-size:9px;font-weight:700;padding:3px 8px;border-radius:20px;letter-spacing:0.5px;white-space:nowrap;}
.disp-kpi-row{display:grid;grid-template-columns:repeat(5,1fr);gap:0;border-bottom:1px solid var(--edge);}
.disp-kpi{padding:10px 14px;border-right:1px solid var(--edge);display:flex;flex-direction:column;gap:3px;}
.disp-kpi:last-child{border-right:none;}
.disp-kpi-label{font-family:var(--font-m);font-size:8px;letter-spacing:1px;text-transform:uppercase;color:var(--text-3);}
.disp-kpi-val{font-family:var(--font-num);font-size:18px;font-weight:300;color:var(--text);line-height:1;}
.disp-kpi-sub{font-family:var(--font-m);font-size:8px;color:var(--text-3);}
.disp-flow-row{display:flex;align-items:stretch;padding:12px 16px;gap:0;background:rgba(255,255,255,0.01);}
.disp-step{flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;padding:0 4px;}
.disp-step::after{content:'→';position:absolute;right:-8px;top:50%;transform:translateY(-50%);font-size:12px;color:var(--text-3);font-family:var(--font-m);}
.disp-step:last-child::after{display:none;}
.disp-step-box{background:var(--surface2);border:1px solid var(--edge);border-radius:6px;padding:8px 6px;width:100%;margin-bottom:4px;}
.disp-step-num{font-family:var(--font-num);font-size:16px;font-weight:300;line-height:1;margin-bottom:2px;}
.disp-step-label{font-family:var(--font-m);font-size:7px;letter-spacing:0.5px;text-transform:uppercase;color:var(--text-3);}
.disp-step-rate{font-family:var(--font-m);font-size:8px;color:var(--text-3);}
.disp-bars-section{padding:12px 16px;border-top:1px solid var(--edge);}
.disp-bar-row{display:flex;align-items:center;gap:8px;margin-bottom:7px;}
.disp-bar-row:last-child{margin-bottom:0;}
.disp-bar-label{font-family:var(--font-m);font-size:9px;color:var(--text-2);width:120px;flex-shrink:0;text-align:right;}
.disp-bar-track{flex:1;height:12px;background:rgba(255,255,255,0.04);border-radius:3px;overflow:hidden;}
.disp-bar-fill{height:100%;border-radius:3px;transition:width 1.2s cubic-bezier(0.16,1,0.3,1);}
.disp-bar-val{font-family:var(--font-m);font-size:9px;font-weight:600;width:50px;flex-shrink:0;}
.disp-bar-pct{font-family:var(--font-m);font-size:9px;color:var(--text-3);width:36px;flex-shrink:0;text-align:right;}
.disp-intel{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:10px 16px;border-top:1px solid var(--edge);}
.disp-intel-box{padding:8px 10px;border-radius:6px;font-size:10px;line-height:1.5;}
.disp-intel-box.risk{background:rgba(255,82,82,0.06);border:1px solid rgba(255,82,82,0.2);color:rgba(255,82,82,0.75);}
.disp-intel-box.opp{background:rgba(0,230,118,0.05);border:1px solid rgba(0,230,118,0.2);color:rgba(0,230,118,0.7);}
.disp-intel-label{font-family:var(--font-m);font-size:8px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:3px;}
.report-card{background:var(--surface);border:1px solid var(--edge);border-radius:var(--r-lg);padding:20px;margin-bottom:12px;transition:border-color 0.2s;}
.report-card:hover{border-color:var(--edge2);}
.report-card-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:14px;gap:12px;}
.report-title{font-family:var(--font-d);font-size:15px;font-weight:700;color:var(--text);letter-spacing:-0.2px;}
.report-date{font-family:var(--font-m);font-size:9px;color:var(--text-3);margin-top:3px;}
.report-scores{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;}
.rscore{display:flex;flex-direction:column;gap:3px;padding:10px 14px;background:var(--surface2);border-radius:var(--r-md);min-width:80px;}
.rscore-label{font-family:var(--font-m);font-size:8px;letter-spacing:1px;text-transform:uppercase;color:var(--text-3);}
.rscore-val{font-family:var(--font-num);font-size:20px;font-weight:300;color:var(--text);line-height:1;}
.rscore-val.good{color:var(--green);}
.rscore-val.warn{color:var(--amber);}
.rscore-val.bad{color:var(--red);}
.report-meta{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:12px;}
.report-meta-item{display:flex;flex-direction:column;gap:4px;}
.report-meta-label{font-family:var(--font-m);font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--text-3);}
.report-meta-val{font-size:12px;color:var(--text-2);line-height:1.4;}
.report-divider{height:1px;background:var(--edge);margin:10px 0;}
.report-risk{display:flex;align-items:flex-start;gap:6px;font-size:11px;color:rgba(255,82,82,0.75);line-height:1.4;}
.report-risk::before{content:'!';font-family:var(--font-m);font-size:9px;font-weight:700;flex-shrink:0;background:var(--red-dim);border-radius:50%;width:14px;height:14px;display:flex;align-items:center;justify-content:center;}
.report-opp{display:flex;align-items:flex-start;gap:6px;font-size:11px;color:rgba(0,230,118,0.7);margin-top:5px;line-height:1.4;}
.report-opp::before{content:'+';font-family:var(--font-m);font-size:11px;font-weight:700;flex-shrink:0;}
.report-status{font-family:var(--font-m);font-size:9px;font-weight:700;padding:3px 9px;border-radius:20px;letter-spacing:0.5px;white-space:nowrap;}
.status-published{background:var(--green-dim);color:var(--green);}
.status-review{background:var(--amber-dim);color:var(--amber);}
.status-draft{background:var(--surface2);color:var(--text-3);}

.agent-strip{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:28px;animation:riseIn 0.6s cubic-bezier(0.16,1,0.3,1) both;}
.ac{background:var(--surface);border:1px solid var(--edge);border-radius:var(--r-md);padding:16px 14px;display:flex;flex-direction:column;gap:8px;transition:all 0.2s;position:relative;overflow:hidden;}
.ac:hover{border-color:var(--edge2);background:var(--surface2);transform:translateY(-1px);}
.ac::before{content:'';position:absolute;top:0;left:0;right:0;height:1.5px;background:linear-gradient(90deg,var(--cyan),transparent);opacity:0;transition:opacity 0.2s;}
.ac:hover::before{opacity:1;}
.ac.build::before{background:linear-gradient(90deg,var(--amber),transparent);opacity:0.6;}
.a-top{display:flex;align-items:center;justify-content:space-between;}
.a-name{font-family:var(--font-d);font-size:12px;font-weight:800;color:var(--text);letter-spacing:-0.2px;}
.a-st{display:flex;align-items:center;gap:4px;}
.a-dot{width:6px;height:6px;border-radius:50%;}
.dot-live{background:var(--green);box-shadow:0 0 8px var(--green);animation:blink 2s infinite;}
.dot-build{background:var(--amber);box-shadow:0 0 8px var(--amber);animation:blink 2.5s infinite;}
.a-stxt{font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:1px;}
.a-role{font-size:10px;color:var(--text-3);line-height:1.4;}
.a-met{display:flex;align-items:baseline;gap:5px;margin-top:4px;}
.a-val{font-family:var(--font-num);font-size:22px;font-weight:300;color:var(--text);letter-spacing:-0.3px;line-height:1;}
.a-mlbl{font-size:9px;color:var(--text-3);font-family:var(--font-m);}
.up-track{height:2px;background:var(--edge);border-radius:1px;overflow:hidden;margin-top:4px;}
.up-fill{height:100%;background:linear-gradient(90deg,var(--cyan),rgba(0,229,255,0.4));border-radius:1px;transition:width 1.8s cubic-bezier(0.16,1,0.3,1);}

/* AI ACTIVITY */
.ai-feed{display:flex;flex-direction:column;gap:0;}
.ai-item{display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--edge);}
.ai-item:last-child{border-bottom:none;}
.ai-score{width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:var(--font-num);font-size:14px;font-weight:400;flex-shrink:0;}
.ai-content{flex:1;}
.ai-task{font-family:var(--font-s);font-size:12px;font-weight:600;color:var(--text);}
.ai-meta{font-family:var(--font-m);font-size:10px;color:var(--text-3);margin-top:2px;}
.ai-note{font-size:11px;color:var(--text-2);margin-top:3px;line-height:1.4;}
.ai-saved{font-family:var(--font-m);font-size:9px;padding:2px 7px;border-radius:20px;background:var(--green-dim);color:var(--green);flex-shrink:0;margin-top:4px;}

/* SCORE BAR */
.score-bar-row{display:flex;align-items:center;gap:10px;margin-bottom:10px;}
.score-bar-label{font-family:var(--font-s);font-size:11px;color:var(--text-2);width:120px;flex-shrink:0;}
.score-bar-track{flex:1;height:6px;background:rgba(255,255,255,0.06);border-radius:3px;}
.score-bar-fill{height:6px;border-radius:3px;}
.score-bar-val{font-family:var(--font-m);font-size:11px;font-weight:700;color:var(--text);width:30px;text-align:right;}
.score-bar-ct{font-family:var(--font-m);font-size:10px;color:var(--text-3);width:30px;}

/* SCORECARD ITEM */
.sc-item{display:flex;gap:12px;align-items:center;padding:10px 0;border-bottom:1px solid var(--edge);}
.sc-item:last-child{border-bottom:none;}
.sc-score{width:44px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-family:var(--font-d);font-size:14px;font-weight:800;flex-shrink:0;}
.sc-content{flex:1;}
.sc-label{font-family:var(--font-s);font-size:12px;font-weight:600;color:var(--text);}
.sc-meta{font-family:var(--font-m);font-size:10px;color:var(--text-3);margin-top:2px;}

/* SEASON PILLS */
.season-strip{display:flex;gap:10px;margin-bottom:20px;}
.season-pill{flex:1;padding:14px 16px;border-radius:var(--r-md);border:1px solid var(--edge);background:var(--surface);display:flex;flex-direction:column;gap:4px;transition:all 0.2s;}
.season-pill:hover{border-color:var(--edge2);transform:translateY(-1px);}
.season-pill-label{font-family:var(--font-m);font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--text-3);}
.season-pill-val{font-family:var(--font-num);font-size:24px;font-weight:300;color:var(--text);line-height:1;}
.season-pill-sub{font-size:10px;color:var(--text-3);}

/* GLOBAL SEASON TOGGLE */
.global-season{display:flex;gap:2px;background:var(--surface);border:1px solid var(--edge);border-radius:var(--r-sm);padding:3px;}
.gstab{padding:5px 14px;font-family:var(--font-m);font-size:11px;font-weight:700;color:var(--text-3);background:transparent;border:none;border-radius:3px;cursor:pointer;transition:all 0.15s;letter-spacing:0.5px;}
.gstab.active{color:var(--ink);font-weight:700;}
.gstab.sep.active{background:var(--green);}
.gstab.oep.active{background:var(--cyan);}
.gstab.aep.active{background:var(--amber);}
.gstab:hover:not(.active){color:var(--text);background:var(--surface2);}
.season-context-bar{display:flex;align-items:center;gap:12px;padding:7px 0;border-bottom:1px solid var(--edge);margin-bottom:0;font-family:var(--font-m);font-size:10px;color:var(--text-3);}
.season-context-pill{padding:3px 10px;border-radius:20px;font-size:9px;font-weight:700;letter-spacing:1px;}
.season-context-item{display:flex;align-items:center;gap:5px;}
.season-context-item strong{color:var(--text-2);}

/* ALERTS — COLLAPSED GROUPED CALLOUT SYSTEM */
.alerts-header{display:flex;align-items:center;gap:12px;cursor:pointer;padding:12px 18px;border-radius:var(--r-md);border:1px solid var(--edge);background:var(--surface);transition:border-color 0.2s,background 0.2s;user-select:none;margin-bottom:20px;}
.alerts-header:hover{border-color:var(--edge2);background:var(--surface2);}
.alerts-header.has-critical{border-color:rgba(255,82,82,0.3);background:rgba(255,82,82,0.05);}
.alerts-header.has-critical:hover{background:rgba(255,82,82,0.08);}
.alerts-header.has-warning{border-color:rgba(255,181,71,0.25);background:rgba(255,181,71,0.04);}
.alerts-header.all-clear{border-color:rgba(0,230,118,0.25);background:rgba(0,230,118,0.04);}
.alerts-dot-row{display:flex;gap:5px;align-items:center;}
.alerts-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;}
.alerts-summary-text{font-family:var(--font-m);font-size:11px;flex:1;}
.alerts-chevron{font-size:12px;color:var(--text-3);transition:transform 0.25s;margin-left:4px;}
.alerts-chevron.open{transform:rotate(180deg);}
.alerts-badge{font-family:var(--font-m);font-size:9px;font-weight:700;padding:2px 8px;border-radius:20px;letter-spacing:0.5px;}
.alerts-badge.critical{background:rgba(255,82,82,0.15);color:var(--red);border:1px solid rgba(255,82,82,0.3);}
.alerts-badge.warning{background:rgba(255,181,71,0.15);color:var(--amber);border:1px solid rgba(255,181,71,0.3);}
.alerts-badge.clear{background:rgba(0,230,118,0.12);color:var(--green);border:1px solid rgba(0,230,118,0.25);}

.alerts-body{display:none;margin-bottom:20px;animation:riseIn 0.25s ease both;}
.alerts-body.open{display:block;}
.alert-group{margin-bottom:12px;}
.alert-group-label{font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:6px 12px;border-radius:4px 4px 0 0;border:1px solid;border-bottom:none;}
.alert-group-label.critical{color:var(--red);background:rgba(255,82,82,0.08);border-color:rgba(255,82,82,0.25);}
.alert-group-label.warning{color:var(--amber);background:rgba(255,181,71,0.06);border-color:rgba(255,181,71,0.22);}
.alert-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px;padding:12px;border-radius:0 0 var(--r-md) var(--r-md);border:1px solid;}
.alert-cards.critical{background:rgba(255,82,82,0.04);border-color:rgba(255,82,82,0.2);}
.alert-cards.warning{background:rgba(255,181,71,0.03);border-color:rgba(255,181,71,0.18);}
.alert-card{background:var(--surface2);border-radius:var(--r-sm);padding:10px 12px;display:flex;flex-direction:column;gap:5px;border:1px solid var(--edge);}
.alert-card-pub{font-family:var(--font-num);font-size:13px;font-weight:400;color:var(--text);}
.alert-card-msg{font-size:10px;color:var(--text-2);line-height:1.45;}
.alert-card-metric{font-family:var(--font-m);font-size:9px;font-weight:700;padding:2px 7px;border-radius:20px;align-self:flex-start;margin-top:2px;}
.alert-card-metric.critical{background:rgba(255,82,82,0.15);color:var(--red);}
.alert-card-metric.warning{background:rgba(255,181,71,0.15);color:var(--amber);}

/* TREND CHARTS */
.trend-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}

.skeleton{background:linear-gradient(90deg,var(--surface) 25%,var(--surface2) 50%,var(--surface) 75%);background-size:200% 100%;animation:shimmer 1.4s infinite;}

/* FOOTER */
.footer{display:flex;align-items:center;justify-content:space-between;padding-top:20px;border-top:1px solid var(--edge);font-size:11px;color:var(--text-3);font-family:var(--font-m);}
.dtag{padding:3px 8px;background:var(--surface2);border:1px solid var(--edge2);border-radius:3px;font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--amber);}
.auto-refresh-badge{display:flex;align-items:center;gap:5px;font-family:var(--font-m);font-size:9px;color:var(--text-3);padding:3px 10px;background:var(--surface);border:1px solid var(--edge);border-radius:20px;}

/* ANIMATIONS */
@keyframes slideDown{from{opacity:0;transform:translateY(-14px);}to{opacity:1;transform:translateY(0);}}
@keyframes riseIn{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);}}
@keyframes blink{0%,100%{opacity:1;}50%{opacity:0.3;}}
@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}
@keyframes shimmer{0%{background-position:200% 0;}100%{background-position:-200% 0;}}
@keyframes swap{0%{color:var(--cyan);}100%{color:var(--text);}}
.swapped{animation:swap 0.4s ease;}
/* ── SNAPSHOT MODE ── */
.snapshot-btn{display:flex;align-items:center;gap:7px;padding:7px 14px;background:var(--surface);border:1px solid var(--edge2);border-radius:var(--r-sm);cursor:pointer;transition:all 0.2s;font-family:var(--font-m);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--violet);}
.snapshot-btn:hover{background:var(--violet-dim);border-color:rgba(179,136,255,0.4);}
.snapshot-btn.active{background:var(--violet-dim);border-color:rgba(179,136,255,0.5);}
body.snapshot-mode .nav-tab[data-working]{display:none;}

/* EXEC SNAPSHOT OVERLAY */
#execSnapshot{display:none;position:fixed;inset:0;z-index:9000;background:var(--ink);overflow-y:auto;padding:40px 48px 60px;}
#execSnapshot.open{display:block;}
.exec-close{position:fixed;top:20px;right:28px;font-family:var(--font-m);font-size:10px;font-weight:700;letter-spacing:1px;padding:7px 16px;border-radius:var(--r-sm);background:var(--surface2);border:1px solid var(--edge2);color:var(--text-2);cursor:pointer;z-index:9001;transition:all 0.15s;}
.exec-close:hover{background:var(--surface);color:var(--text);}
.exec-print{position:fixed;top:20px;right:130px;font-family:var(--font-m);font-size:10px;font-weight:700;letter-spacing:1px;padding:7px 16px;border-radius:var(--r-sm);background:var(--cyan-dim);border:1px solid rgba(0,229,255,0.3);color:var(--cyan);cursor:pointer;z-index:9001;transition:all 0.15s;}
.exec-print:hover{background:rgba(0,229,255,0.2);}
.exec-header{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:32px;padding-bottom:20px;border-bottom:2px solid var(--edge2);}
.exec-logo{display:flex;align-items:center;gap:14px;}
.exec-logo-mark{width:48px;height:48px;background:linear-gradient(135deg,var(--cyan),rgba(0,229,255,0.3));border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;font-family:var(--font-m);font-size:13px;font-weight:700;color:var(--ink);}
.exec-title{font-family:var(--font-d);font-size:22px;font-weight:800;color:var(--text);letter-spacing:-0.3px;}
.exec-subtitle{font-family:var(--font-m);font-size:10px;color:var(--text-3);margin-top:3px;letter-spacing:1px;}
.exec-meta{text-align:right;font-family:var(--font-m);font-size:10px;color:var(--text-3);}
.exec-meta strong{color:var(--text-2);display:block;font-size:12px;margin-bottom:2px;}
.exec-section{margin-bottom:28px;}
.exec-section-title{font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:var(--cyan);margin-bottom:12px;padding-bottom:6px;border-bottom:1px solid var(--edge2);}
.exec-kpi-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;}
.exec-kpi{background:var(--surface);border:1px solid var(--edge);border-radius:var(--r-md);padding:16px 18px;position:relative;overflow:hidden;}
.exec-kpi::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;}
.exec-kpi.cyan::before{background:var(--cyan);}
.exec-kpi.green::before{background:var(--green);}
.exec-kpi.amber::before{background:var(--amber);}
.exec-kpi.red::before{background:var(--red);}
.exec-kpi-label{font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);margin-bottom:8px;}
.exec-kpi-val{font-family:var(--font-num);font-size:26px;font-weight:300;color:var(--text);line-height:1;margin-bottom:4px;}
.exec-kpi-sub{font-size:10px;color:var(--text-3);}
.exec-action-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-bottom:0;}
.exec-action-card{background:var(--surface);border:1px solid var(--edge);border-radius:var(--r-md);padding:14px;text-align:center;}
.exec-action-count{font-family:var(--font-num);font-size:28px;font-weight:300;line-height:1;margin-bottom:4px;}
.exec-action-label{font-family:var(--font-m);font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--text-3);}
.exec-pub-table{width:100%;border-collapse:collapse;}
.exec-pub-table th{font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);text-align:left;padding:6px 10px;border-bottom:1px solid var(--edge2);}
.exec-pub-table th:not(:first-child){text-align:right;}
.exec-pub-table td{padding:9px 10px;border-bottom:1px solid var(--edge);font-size:12px;color:var(--text-2);}
.exec-pub-table td:not(:first-child){text-align:right;font-family:var(--font-m);font-size:11px;}
.exec-pub-table tr:last-child td{border-bottom:none;}
.exec-alert-row{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:6px;margin-bottom:6px;font-size:11px;}
.exec-alert-row.critical{background:rgba(255,82,82,0.07);border:1px solid rgba(255,82,82,0.2);color:rgba(255,82,82,0.85);}
.exec-alert-row.warning{background:rgba(255,181,71,0.07);border:1px solid rgba(255,181,71,0.2);color:rgba(255,181,71,0.85);}
.exec-footer{margin-top:32px;padding-top:16px;border-top:1px solid var(--edge);display:flex;justify-content:space-between;font-family:var(--font-m);font-size:9px;color:var(--text-3);}
.exec-two-col{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.exec-insight-box{background:var(--surface);border:1px solid var(--edge);border-radius:var(--r-md);padding:14px 16px;}
.exec-insight-title{font-family:var(--font-m);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;}
.exec-insight-item{display:flex;align-items:flex-start;gap:8px;font-size:11px;color:var(--text-2);margin-bottom:7px;line-height:1.45;}
.exec-insight-item:last-child{margin-bottom:0;}

/* ── MOBILE ── */
@media(max-width:768px){
  .shell{padding:0 12px 40px;}
  .header{flex-direction:column;align-items:flex-start;gap:10px;padding:12px 0 0;}
  .header-right{width:100%;flex-wrap:wrap;gap:6px;padding-bottom:8px;}
  .global-season{order:-1;}
  .period-tabs{display:none;}
  .hdivider,.header-sub{display:none;}
  .snapshot-btn span:last-child{display:none;}
  .nav-tabs{overflow-x:auto;gap:0;padding-bottom:2px;scrollbar-width:none;-ms-overflow-style:none;flex-wrap:nowrap;margin-bottom:16px;}
  .nav-tabs::-webkit-scrollbar{display:none;}
  .nav-tab{padding:9px 12px;font-size:11px;white-space:nowrap;flex-shrink:0;}
  .kpi-grid{grid-template-columns:repeat(2,1fr)!important;}
  .kpi-grid-4{grid-template-columns:repeat(2,1fr)!important;}
  .kpi-grid-3{grid-template-columns:1fr 1fr!important;}
  .g6040,.g5050,.g4060,.g3333{grid-template-columns:1fr!important;}
  .publisher-grid{grid-template-columns:1fr!important;}
  .disp-publisher-grid{grid-template-columns:1fr!important;}
  .disp-kpi-row{grid-template-columns:repeat(3,1fr)!important;}
  .disp-flow-row{overflow-x:auto;gap:4px;}
  .disp-step{min-width:72px;}
  .trend-grid{grid-template-columns:1fr!important;}
  .exec-kpi-row{grid-template-columns:repeat(2,1fr)!important;}
  .exec-action-grid{grid-template-columns:repeat(3,1fr)!important;}
  .exec-two-col{grid-template-columns:1fr!important;}
  .season-context-bar{overflow-x:auto;flex-wrap:nowrap;gap:8px;scrollbar-width:none;padding-bottom:6px;}
  .season-context-bar::-webkit-scrollbar{display:none;}
  .panel{padding:12px!important;}
  .report-meta{grid-template-columns:1fr 1fr!important;}
  #execSnapshot{padding:16px 14px 40px;}
  .exec-header{flex-direction:column;gap:10px;}
  .exec-close{top:auto;bottom:20px;right:14px;position:fixed;}
  .exec-print{top:auto;bottom:20px;right:110px;position:fixed;}
  .alert-cards{grid-template-columns:1fr!important;}
}

/* ── PRINT ── */
@media print{
  body{background:#fff!important;color:#111!important;}
  body::before,body::after{display:none!important;}
  .shell,.header,.nav-tabs,.season-context-bar,.alerts-header,.alerts-body,.notion-banner,.refresh-btn,.exec-close,.exec-print{display:none!important;}
  #execSnapshot{display:block!important;position:static!important;background:#fff!important;padding:20px!important;}
  .exec-title,.exec-subtitle,.exec-section-title,.exec-kpi-label,.exec-action-label{color:#333!important;}
  .exec-kpi-val,.exec-action-count{color:#111!important;}
  .exec-kpi,.exec-action-card,.exec-insight-box{background:#f5f5f5!important;border-color:#ddd!important;}
  .exec-pub-table td,.exec-pub-table th{border-color:#ddd!important;color:#333!important;}
}

</head>
<body>
<div class="shell">

<!-- HEADER -->
<header class="header">
  <div class="header-left">
    <div class="logo-mark"><span>MM</span></div>
    <div class="header-wordmark">
      <div class="header-eyebrow">Centerfield &middot; Health &amp; Medicare</div>
      <div class="header-name">Media Match</div>
    </div>
    <div class="hdivider"></div>
    <div class="header-sub">Performance Dashboard &nbsp;&middot;&nbsp; AI-Powered Media Distribution Engine</div>
  </div>
  <div class="header-right">
    <div class="global-season" id="globalSeasonToggle">
      <button class="gstab sep active" onclick="setGlobalSeason('SEP',this)">SEP</button>
      <button class="gstab oep" onclick="setGlobalSeason('OEP',this)">OEP</button>
      <button class="gstab aep" onclick="setGlobalSeason('AEP',this)">AEP</button>
    </div>
    <div class="period-tabs">
      <button class="ptab" onclick="setPeriod('WTD',this)">WTD</button>
      <button class="ptab active" onclick="setPeriod('MTD',this)">MTD</button>
      <button class="ptab" onclick="setPeriod('QTD',this)">QTD</button>
    </div>
    <div class="last-sync" id="syncStatus">
      <span class="sync-dot stale" id="syncDot"></span>
      <span id="syncLabel">Not synced</span>
    </div>
    <button class="refresh-btn" id="refreshBtn" onclick="loadNotionData()">
      <span class="refresh-icon" id="refreshIcon">&#10227;</span>
      <span id="refreshLabel">Sync Notion</span>
    </button>
    <button class="snapshot-btn" id="snapshotModeBtn" onclick="toggleSnapshotMode()">&#9670; <span>Leadership</span></button>
    <button class="snapshot-btn" style="color:var(--cyan);border-color:rgba(0,229,255,0.25);" onclick="openExecSnapshot()">&#8682; <span>Export</span></button>
  </div>
</header>

<!-- GLOBAL SEASON CONTEXT BAR -->
<div class="season-context-bar" id="seasonContextBar">
  <span class="season-context-pill" id="seasonContextPill" style="background:rgba(0,230,118,0.15);color:var(--green);border:1px solid rgba(0,230,118,0.3);">SEP</span>
  <span class="season-context-item">Target CPA: <strong id="sctx-cpa">$325</strong></span>
  <span style="color:var(--edge2)">·</span>
  <span class="season-context-item">CR Target: <strong id="sctx-cr">9.0%</strong></span>
  <span style="color:var(--edge2)">·</span>
  <span class="season-context-item">Effectuation: <strong id="sctx-eff">73%</strong></span>
  <span style="color:var(--edge2)">·</span>
  <span class="season-context-item">Max RDE: <strong id="sctx-rde">10%</strong></span>
  <span style="color:var(--edge2)">·</span>
  <span class="season-context-item">Age 75+ Max: <strong id="sctx-age">15%</strong></span>
  <span style="color:var(--edge2)">·</span>
  <span class="season-context-item">LTV: <strong id="sctx-ltv">$730</strong></span>
  <span style="margin-left:auto;" id="sctx-label" style="font-style:italic;color:var(--text-3);">SEP — Special Enrollment · Apr 1 – Oct 14</span>
</div>

<!-- NAV TABS -->
<nav class="nav-tabs">
  <button class="nav-tab active" onclick="switchTab('overview',this)">Overview</button>
  <button class="nav-tab" onclick="switchTab('rp',this)">Right Pricing</button>
  <button class="nav-tab" data-working onclick="switchTab('subid',this)">Sub ID Intel</button>
  <button class="nav-tab" data-working onclick="switchTab('dispositions',this)">Dispositions</button>
  <button class="nav-tab" onclick="switchTab('reporting',this)">Joanie Reporting</button>
  <button class="nav-tab" onclick="switchTab('publishers',this)">Publisher Scorecards</button>
  <button class="nav-tab" data-working onclick="switchTab('scorecards',this)">QM &amp; MP Scorecards</button>
  <button class="nav-tab" data-working onclick="switchTab('ai',this)">Joanie AI Activity</button>
  <button class="nav-tab" data-working onclick="switchTab('agents',this)">Agent Health</button>
</nav>

<!-- OVERVIEW TAB -->
<div id="tab-overview" class="tab-panel active">

  <!-- ALERTS — COLLAPSED BY DEFAULT -->
  <div class="alerts-header" id="alertsHeader" onclick="toggleAlerts()">
    <div class="alerts-dot-row" id="alertsDots"></div>
    <div class="alerts-summary-text" id="alertsSummaryText">Scanning alerts...</div>
    <div id="alertsBadges" style="display:flex;gap:6px;"></div>
    <span class="alerts-chevron" id="alertsChevron">▼</span>
  </div>
  <div class="alerts-body" id="alertsBody"></div>

  <div class="notion-banner">
    <span style="font-size:16px;">&#9672;</span>
    <div><strong>Live Data Source</strong> &nbsp;&middot;&nbsp; Publisher scorecards, scorecards, reporting &amp; AI activity pulled from Notion on demand</div>
    <span class="notion-source-pill">Joanie Reporting</span>
    <span class="notion-source-pill">Joanie MPQS</span>
    <span class="notion-source-pill">Joanie QM Scorecards</span>
    <span class="notion-source-pill">Joanie AI Activity Log</span>
    <div style="margin-left:auto;font-size:11px;color:var(--text-3);">Auto-refreshes every <strong style="color:var(--cyan)">60s</strong></div>
  </div>

  <div class="sec"><div class="sec-tag">Revenue &amp; GP</div><div class="sec-line"></div></div>
  <div class="kpi-grid">
    <div class="kpi primary"><div class="kpi-accent"></div><div class="kpi-label">Revenue / Call</div><div class="kpi-val" id="kv-rpc">$18.40</div><span class="kpi-badge up" id="kd-rpc">&#9650; 12.3% vs prior</span></div>
    <div class="kpi"><div class="kpi-accent"></div><div class="kpi-label">Total Revenue</div><div class="kpi-val" id="kv-rev">$184K</div><span class="kpi-badge up" id="kd-rev">&#9650; 8.1% MoM</span></div>
    <div class="kpi"><div class="kpi-accent"></div><div class="kpi-label">Gross Profit</div><div class="kpi-val" id="kv-gp">$52.4K</div><span class="kpi-badge up" id="kd-gp">&#9650; 6.7% MoM</span></div>
    <div class="kpi"><div class="kpi-accent"></div><div class="kpi-label">GP Margin</div><div class="kpi-val" id="kv-margin">28.5<span class="unit">%</span></div><span class="kpi-badge flat" id="kd-margin">&#8212; vs 27.9% prior</span></div>
    <div class="kpi"><div class="kpi-accent"></div><div class="kpi-label">QM Fill Rate</div><div class="kpi-val" id="kv-fill">74<span class="unit">%</span></div><span class="kpi-badge down" id="kd-fill">&#9660; 2.1% vs prior</span></div>
    <div class="kpi"><div class="kpi-accent"></div><div class="kpi-label">Overflow Capture</div><div class="kpi-val" id="kv-overflow">$28.2K</div><span class="kpi-badge up" id="kd-overflow">&#9650; NEW revenue</span></div>
  </div>

  <div class="sec"><div class="sec-tag amber">Season Activity</div><div class="sec-line"></div></div>
  <div class="season-strip" id="seasonStrip">
    <div class="season-pill"><div class="season-pill-label" style="color:rgba(0,229,255,0.6);">OEP</div><div class="season-pill-val">—</div><div class="season-pill-sub">Jan 1 – Mar 31</div></div>
    <div class="season-pill"><div class="season-pill-label" style="color:rgba(0,230,118,0.6);">SEP</div><div class="season-pill-val">—</div><div class="season-pill-sub">Apr 1 – Oct 14</div></div>
    <div class="season-pill"><div class="season-pill-label" style="color:rgba(255,181,71,0.6);">AEP</div><div class="season-pill-val">—</div><div class="season-pill-sub">Oct 15 – Nov 7</div></div>
  </div>

  <div class="sec"><div class="sec-tag">Trends</div><div class="sec-line"></div></div>
  <div class="g6040">
    <div class="panel"><div class="p-head"><div><div class="p-title">Revenue &amp; GP Trend</div><div class="p-sub">Daily revenue vs. gross profit &middot; MTD</div></div><span class="pill pill-a">Period-over-Period</span></div><div class="chart-wrap" style="height:210px"><canvas id="revChart"></canvas></div></div>
    <div class="panel"><div class="p-head"><div><div class="p-title">Call Routing Split</div><div class="p-sub">QM direct vs. Marketplace overflow</div></div><span class="pill pill-c">MTD</span></div><div class="chart-wrap" style="height:140px;display:flex;align-items:center;justify-content:center"><canvas id="routePie" style="max-height:140px;max-width:170px;"></canvas></div><div style="display:flex;gap:20px;justify-content:center;margin-top:14px;"><div style="display:flex;align-items:center;gap:7px;"><span style="width:8px;height:8px;border-radius:2px;background:var(--cyan);display:inline-block;opacity:0.85;"></span><span style="font-size:11px;color:var(--text-2)">QM Direct</span><span style="font-family:var(--font-m);font-size:12px;font-weight:700;color:var(--text);margin-left:4px;">74%</span></div><div style="display:flex;align-items:center;gap:7px;"><span style="width:8px;height:8px;border-radius:2px;background:var(--amber);display:inline-block;opacity:0.85;"></span><span style="font-size:11px;color:var(--text-2)">Marketplace</span><span style="font-family:var(--font-m);font-size:12px;font-weight:700;color:var(--text);margin-left:4px;">26%</span></div></div></div>
  </div>

  <div class="sec"><div class="sec-tag">Call Volume</div><div class="sec-line"></div></div>
  <div class="g6040">
    <div class="panel"><div class="p-head"><div><div class="p-title">Daily Call Volume</div><div class="p-sub">QM filled vs. marketplace overflow &middot; 14 days</div></div><span class="pill pill-c">Stacked</span></div><div class="chart-wrap" style="height:210px"><canvas id="callVolChart"></canvas></div></div>
    <div class="panel"><div class="p-head"><div><div class="p-title">Routing Funnel</div><div class="p-sub">Inbound &#8594; Answered &#8594; Routed &#8594; Converted</div></div><span class="pill pill-g">Live Logic</span></div><div class="funnel" id="funnelEl" style="margin-top:6px;"></div></div>
  </div>
</div>

<!-- DISPOSITIONS TAB -->
<div id="tab-dispositions" class="tab-panel">
  <div class="notion-banner">
    <span style="font-size:16px;">&#9672;</span>
    <div><strong>Call Dispositions</strong> &nbsp;&middot;&nbsp; Full call flow per publisher — Raw → Transferred → Billable → Sold → Effectuated</div>
    <span class="notion-source-pill">QM Scorecard Data</span>
    <span class="notion-source-pill">OEP 2026</span>
  </div>

  <div class="kpi-grid-4" style="margin-bottom:20px;" id="disp-summary-kpis">
    <!-- filled by JS -->
  </div>

  <div class="sec"><div class="sec-tag">Portfolio Call Flow</div><div class="sec-line"></div></div>
  <div class="panel" style="margin-bottom:20px;">
    <div class="p-head"><div><div class="p-title">Portfolio-Level Disposition Funnel</div><div class="p-sub">Aggregate across all active publishers · OEP 2026</div></div><span class="pill pill-c">All Publishers</span></div>
    <div id="disp-portfolio-funnel" style="display:flex;align-items:stretch;gap:0;padding:8px 0;"></div>
    <div id="disp-portfolio-bars" style="margin-top:16px;padding-top:16px;border-top:1px solid var(--edge);"></div>
  </div>

  <div class="sec"><div class="sec-tag">Publisher Breakdown</div><div class="sec-line"></div><div class="sec-count" id="disp-pub-count">— publishers</div></div>

  <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;align-items:center;">
    <span style="font-family:var(--font-m);font-size:9px;color:var(--text-3);">Sort:</span>
    <select id="disp-sort" onchange="renderDispositionsTab()" style="font-family:var(--font-m);font-size:10px;padding:5px 10px;border-radius:6px;border:1px solid var(--edge2);background:var(--surface2);color:var(--text-2);cursor:pointer;outline:none;">
      <option value="name">A–Z</option>
      <option value="rawcalls">Raw Calls ↓</option>
      <option value="netsales">Net Sales ↓</option>
      <option value="eff">Effectuation ↓</option>
      <option value="status">Status</option>
    </select>
    <span style="font-family:var(--font-m);font-size:9px;color:var(--text-3);margin-left:8px;">Filter:</span>
    <select id="disp-filter" onchange="renderDispositionsTab()" style="font-family:var(--font-m);font-size:10px;padding:5px 10px;border-radius:6px;border:1px solid var(--edge2);background:var(--surface2);color:var(--text-2);cursor:pointer;outline:none;">
      <option value="all">All publishers</option>
      <option value="healthy">Healthy only</option>
      <option value="watch">Watch only</option>
      <option value="risk">At Risk only</option>
      <option value="scale">Scale Eligible</option>
    </select>
  </div>

  <div id="disp-publisher-grid" class="disp-publisher-grid"></div>
</div>

<!-- RIGHT PRICING TAB -->
<div id="tab-rp" class="tab-panel">
  <div class="notion-banner">
    <span style="font-size:16px;">&#9672;</span>
    <div><strong>Right Pricing Engine</strong> &nbsp;&middot;&nbsp; Enhanced RP Formula: Base × MPQS Multiplier × Sub ID Quality Index</div>
    <span class="notion-source-pill">QM RP Hub Data</span>
    <div style="display:flex;gap:8px;margin-left:auto;align-items:center;">
      <div style="display:flex;gap:4px;">
        <button id="rp-sep" onclick="setRPSeason('SEP',this)" style="padding:5px 12px;font-family:var(--font-m);font-size:10px;border-radius:3px;border:1px solid var(--edge2);background:var(--cyan);color:var(--ink);font-weight:700;cursor:pointer;">SEP</button>
        <button id="rp-oep" onclick="setRPSeason('OEP',this)" style="padding:5px 12px;font-family:var(--font-m);font-size:10px;border-radius:3px;border:1px solid var(--edge2);background:var(--surface);color:var(--text-3);cursor:pointer;">OEP</button>
        <button id="rp-aep" onclick="setRPSeason('AEP',this)" style="padding:5px 12px;font-family:var(--font-m);font-size:10px;border-radius:3px;border:1px solid var(--edge2);background:var(--surface);color:var(--text-3);cursor:pointer;">AEP</button>
      </div>
    </div>
  </div>

  <div class="kpi-grid" style="margin-bottom:20px;" id="rp-kpi-grid">
    <!-- filled by JS -->
  </div>

  <div class="sec"><div class="sec-tag">Formula Reference</div><div class="sec-line"></div></div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px;">
    <div class="panel" style="border-left:2px solid var(--cyan);">
      <div class="p-title" style="font-size:11px;margin-bottom:6px;">Base Bid</div>
      <div style="font-family:var(--font-m);font-size:10px;color:var(--text-2);">LTV × Eff% × LTV% × CR%</div>
      <div style="font-size:10px;color:var(--text-3);margin-top:4px;">Anchored to economic reality</div>
    </div>
    <div class="panel" style="border-left:2px solid var(--amber);">
      <div class="p-title" style="font-size:11px;margin-bottom:6px;">MPQS Multiplier</div>
      <div style="font-family:var(--font-m);font-size:10px;color:var(--text-2);">A=×1.15 · B=×1.00 · C=×0.85 · D=×0.70</div>
      <div style="font-size:10px;color:var(--text-3);margin-top:4px;">D-grade = 26% discount vs A</div>
    </div>
    <div class="panel" style="border-left:2px solid var(--blue);">
      <div class="p-title" style="font-size:11px;margin-bottom:6px;">Sub ID Quality Index</div>
      <div style="font-family:var(--font-m);font-size:10px;color:var(--text-2);">0.75–1.10 based on CR, Eff, RDE</div>
      <div style="font-size:10px;color:var(--text-3);margin-top:4px;">FLEX-CARD earns premium; TRANSPORT discounted</div>
    </div>
  </div>

  <div class="sec"><div class="sec-tag">Publisher Right Pricing</div><div class="sec-line"></div></div>
  <div style="overflow-x:auto;border-radius:var(--r-md);border:1px solid var(--edge);">
    <table style="width:100%;border-collapse:collapse;font-size:11px;">
      <thead>
        <tr style="border-bottom:1px solid var(--edge2);">
          <th style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);padding:8px 12px;text-align:left;background:var(--surface);white-space:nowrap;">Publisher</th>
          <th style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);padding:8px 12px;text-align:center;background:var(--surface);white-space:nowrap;">MPQS</th>
          <th style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);padding:8px 12px;text-align:right;background:var(--surface);white-space:nowrap;">Actual CPA</th>
          <th style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);padding:8px 12px;text-align:right;background:var(--surface);white-space:nowrap;">Target CPA</th>
          <th style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);padding:8px 12px;text-align:right;background:var(--surface);white-space:nowrap;">Delta</th>
          <th style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);padding:8px 12px;text-align:right;background:var(--surface);white-space:nowrap;">Eff%</th>
          <th style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);padding:8px 12px;text-align:right;background:var(--surface);white-space:nowrap;">RDE%</th>
          <th style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);padding:8px 12px;text-align:right;background:var(--surface);white-space:nowrap;">Age75+</th>
          <th style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);padding:8px 12px;text-align:right;background:var(--surface);white-space:nowrap;">Enh. Bid</th>
          <th style="font-family:var(--font-m);font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-3);padding:8px 12px;text-align:left;background:var(--surface);white-space:nowrap;">RP Action</th>
        </tr>
      </thead>
      <tbody id="rp-table-body"></tbody>
    </table>
  </div>
</div>

<!-- SUB ID INTEL TAB -->
<div id="tab-subid" class="tab-panel">
  <div class="notion-banner">
    <span style="font-size:16px;">&#9672;</span>
    <div><strong>Sub ID Intelligence</strong> &nbsp;&middot;&nbsp; Marketing angle performance scored vs season targets · QI drives bid multiplier</div>
    <span class="notion-source-pill">QM RP Hub Data</span>
  </div>

  <div class="sec"><div class="sec-tag">Sub ID Quality Index</div><div class="sec-line"></div></div>
  <div id="subid-cards" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;margin-bottom:24px;"></div>

  <div class="sec"><div class="sec-tag">Season Targets Reference</div><div class="sec-line"></div></div>
  <div id="subid-targets" style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px;"></div>
</div>

<!-- JOANIE REPORTING TAB -->
<div id="tab-reporting" class="tab-panel">
  <div class="notion-banner">
    <span style="font-size:16px;">&#9672;</span>
    <div><strong>Joanie Reporting</strong> &nbsp;&middot;&nbsp; Master rolled-up view — MPQS + QM + MP scores combined by period</div>
    <span class="notion-source-pill">Joanie Reporting</span>
    <span class="notion-source-pill">Joanie MPQS</span>
    <span class="notion-source-pill">Joanie QM Scorecards</span>
    <span class="notion-source-pill">Joanie MP Scorecards</span>
    <div style="margin-left:auto;font-size:11px;color:var(--text-3);">Auto-refreshes every <strong style="color:var(--cyan)">60s</strong></div>
  </div>

  <div class="kpi-grid-4" style="margin-bottom:20px;">
    <div class="kpi green-accent"><div class="kpi-accent"></div><div class="kpi-label">Reporting Periods</div><div class="kpi-val" id="rpt-count">—</div><span class="kpi-badge flat">All time</span></div>
    <div class="kpi green-accent"><div class="kpi-accent"></div><div class="kpi-label">Avg MPQS Score</div><div class="kpi-val" id="rpt-mpqs-avg">—</div><span class="kpi-badge flat" id="rpt-mpqs-badge">All periods</span></div>
    <div class="kpi amber-accent"><div class="kpi-accent"></div><div class="kpi-label">Avg QM Score</div><div class="kpi-val" id="rpt-qm-avg">—</div><span class="kpi-badge flat" id="rpt-qm-badge">All periods</span></div>
    <div class="kpi violet-accent"><div class="kpi-accent"></div><div class="kpi-label">Avg MP Score</div><div class="kpi-val" id="rpt-mp-avg">—</div><span class="kpi-badge flat" id="rpt-mp-badge">All periods</span></div>
  </div>

  <div class="sec"><div class="sec-tag amber">Season Activity</div><div class="sec-line"></div></div>
  <div class="season-strip" id="reportingSeasonStrip">
    <div class="season-pill"><div class="season-pill-label" style="color:rgba(0,229,255,0.6);">OEP</div><div class="season-pill-val">—</div><div class="season-pill-sub">Jan 1 – Mar 31</div></div>
    <div class="season-pill"><div class="season-pill-label" style="color:rgba(0,230,118,0.6);">SEP</div><div class="season-pill-val">—</div><div class="season-pill-sub">Apr 1 – Oct 14</div></div>
    <div class="season-pill"><div class="season-pill-label" style="color:rgba(255,181,71,0.6);">AEP</div><div class="season-pill-val">—</div><div class="season-pill-sub">Oct 15 – Nov 7</div></div>
  </div>

  <div class="sec"><div class="sec-tag">Period Reports</div><div class="sec-line"></div><span class="pill pill-notion" style="font-size:8px;padding:3px 9px;">&#9672; Live from Notion</span></div>
  <div id="reportingFeed"><div style="color:var(--text-3);font-size:12px;text-align:center;padding:40px;">Loading Joanie Reporting data...</div></div>

  <div class="sec" style="margin-top:24px;"><div class="sec-tag amber">Period-over-Period Trends</div><div class="sec-line"></div></div>
  <div class="trend-grid">
    <div class="panel"><div class="p-head"><div><div class="p-title">MPQS Score Trend</div><div class="p-sub">Average MPQS across reporting periods</div></div><span class="pill pill-g">Trend</span></div><div class="chart-wrap" style="height:180px"><canvas id="trendMpqsChart"></canvas></div></div>
    <div class="panel"><div class="p-head"><div><div class="p-title">QM &amp; MP Score Trend</div><div class="p-sub">QM vs MP scores period-over-period</div></div><span class="pill pill-c">Comparative</span></div><div class="chart-wrap" style="height:180px"><canvas id="trendQmMpChart"></canvas></div></div>
  </div>
  <div class="trend-grid">
    <div class="panel"><div class="p-head"><div><div class="p-title">CPA Trend</div><div class="p-sub">Cost per acquisition across periods vs target</div></div><span class="pill pill-a">vs Target</span></div><div class="chart-wrap" style="height:180px"><canvas id="trendCpaChart"></canvas></div></div>
    <div class="panel"><div class="p-head"><div><div class="p-title">Score Distribution</div><div class="p-sub">MPQS · QM · MP latest period breakdown</div></div><span class="pill pill-v">Latest</span></div><div class="chart-wrap" style="height:180px"><canvas id="trendDistChart"></canvas></div></div>
  </div>
</div>

<!-- PUBLISHERS TAB -->
<div id="tab-publishers" class="tab-panel">
  <div class="sec"><div class="sec-tag">Publisher Scorecards</div><div class="sec-line"></div><div class="sec-count" id="pubCount">&#8212; partners</div><span class="pill pill-notion" style="font-size:8px;padding:3px 9px;">&#9672; Live from Notion</span></div>

  <div class="panel" style="margin-bottom:12px;">
    <div class="p-head"><div><div class="p-title">MPQS Portfolio Distribution</div><div class="p-sub">Action band breakdown &mdash; from Notion scorecards</div></div><span class="pill pill-notion">&#9672; Live</span></div>
    <div id="mpqsDist" style="display:flex;gap:10px;align-items:stretch;height:56px;"><div style="flex:1;background:var(--surface2);border-radius:4px;" class="skeleton"></div></div>
    <div id="mpqsLegend" style="display:flex;gap:16px;margin-top:12px;flex-wrap:wrap;"></div>
  </div>

  <div id="publisherGrid" class="publisher-grid">
    <div class="pub-card" style="height:160px;"><div class="skeleton" style="height:100%;border-radius:8px;"></div></div>
    <div class="pub-card" style="height:160px;"><div class="skeleton" style="height:100%;border-radius:8px;"></div></div>
    <div class="pub-card" style="height:160px;"><div class="skeleton" style="height:100%;border-radius:8px;"></div></div>
    <div class="pub-card" style="height:160px;"><div class="skeleton" style="height:100%;border-radius:8px;"></div></div>
  </div>

  <div class="sec" style="margin-top:8px;"><div class="sec-tag">Client Performance</div><div class="sec-line"></div></div>
  <div class="g5050">
    <div class="panel"><div class="p-head"><div><div class="p-title">CPA by Client vs. Target</div><div class="p-sub">Actual CPA vs. target &mdash; lower is better</div></div><span class="pill pill-c">MTD</span></div><div class="chart-wrap" style="height:210px"><canvas id="cpaChart"></canvas></div></div>
    <div class="panel"><div class="p-head"><div><div class="p-title">Client Scorecard</div><div class="p-sub">Volume &middot; CPA &middot; Status &middot; vs. Target</div></div><span class="pill pill-a">Template Data</span></div><table class="ct"><thead><tr><th>Client</th><th>Calls</th><th>Actual CPA</th><th>Target</th><th>vs Target</th><th>Status</th></tr></thead><tbody id="clientTbody"></tbody></table></div>
  </div>
</div>

<!-- SCORECARDS TAB -->
<div id="tab-scorecards" class="tab-panel">
  <div class="kpi-grid-4" style="margin-bottom:20px;">
    <div class="kpi green-accent"><div class="kpi-accent"></div><div class="kpi-label">MPQS Evaluations</div><div class="kpi-val" id="sc-mpqs-count">—</div><span class="kpi-badge flat">All time</span></div>
    <div class="kpi green-accent"><div class="kpi-accent"></div><div class="kpi-label">Avg MPQS Score</div><div class="kpi-val" id="sc-mpqs-avg">—</div><span class="kpi-badge flat" id="sc-mpqs-badge">Loading...</span></div>
    <div class="kpi amber-accent"><div class="kpi-accent"></div><div class="kpi-label">QM Scorecards</div><div class="kpi-val" id="sc-qm-count">—</div><span class="kpi-badge flat">All time</span></div>
    <div class="kpi amber-accent"><div class="kpi-accent"></div><div class="kpi-label">Avg QM Score</div><div class="kpi-val" id="sc-qm-avg">—</div><span class="kpi-badge flat" id="sc-qm-badge">Loading...</span></div>
  </div>

  <div class="g5050">
    <div class="panel">
      <div class="p-head"><div><div class="p-title">Recent MPQS Evaluations</div><div class="p-sub">Latest from Joanie MPQS database</div></div><span class="pill pill-g">&#9672; Live</span></div>
      <div id="mpqs-feed"><div style="color:var(--text-3);font-size:12px;text-align:center;padding:30px;">Loading MPQS data...</div></div>
    </div>
    <div class="panel">
      <div class="p-head"><div><div class="p-title">Recent QM Scorecards</div><div class="p-sub">Latest from Joanie QM Scorecards</div></div><span class="pill pill-a">&#9672; Live</span></div>
      <div id="qm-feed"><div style="color:var(--text-3);font-size:12px;text-align:center;padding:30px;">Loading QM data...</div></div>
    </div>
  </div>

  <div class="sec" style="margin-top:8px;"><div class="sec-tag">Revenue Analysis</div><div class="sec-line"></div></div>
  <div class="g3333">
    <div class="panel"><div class="p-head"><div><div class="p-title">Revenue/Call by Source</div><div class="p-sub">QM vs. Marketplace &mdash; 8 weeks</div></div><span class="pill pill-a">Comparison</span></div><div class="chart-wrap" style="height:170px"><canvas id="rpcChart"></canvas></div></div>
    <div class="panel"><div class="p-head"><div><div class="p-title">Overflow Revenue Recovery</div><div class="p-sub">$ captured from QM-declined calls</div></div><span class="pill pill-g">Proof Point</span></div><div class="chart-wrap" style="height:170px"><canvas id="overflowChart"></canvas></div></div>
    <div class="panel"><div class="p-head"><div><div class="p-title">GP Margin Trend</div><div class="p-sub">Weekly gross profit margin %</div></div><span class="pill pill-c">Trend</span></div><div class="chart-wrap" style="height:170px"><canvas id="marginChart"></canvas></div></div>
  </div>
</div>

<!-- AI ACTIVITY TAB -->
<div id="tab-ai" class="tab-panel">
  <div class="kpi-grid-4" style="margin-bottom:20px;">
    <div class="kpi violet-accent"><div class="kpi-accent"></div><div class="kpi-label">Total AI Interactions</div><div class="kpi-val" id="ai-total">—</div><span class="kpi-badge flat">All time</span></div>
    <div class="kpi violet-accent"><div class="kpi-accent"></div><div class="kpi-label">Avg Quality Score</div><div class="kpi-val" id="ai-avg">—</div><span class="kpi-badge flat" id="ai-avg-badge">out of 10</span></div>
    <div class="kpi violet-accent"><div class="kpi-accent"></div><div class="kpi-label">Outputs Saved</div><div class="kpi-val" id="ai-saved">—</div><span class="kpi-badge flat" id="ai-saved-badge">save rate</span></div>
    <div class="kpi violet-accent"><div class="kpi-accent"></div><div class="kpi-label">Open Flags</div><div class="kpi-val" id="ai-flags">—</div><span class="kpi-badge flat" id="ai-flags-badge">scores below 6</span></div>
  </div>

  <div class="g5050">
    <div class="panel">
      <div class="p-head"><div><div class="p-title">Quality by Task Type</div><div class="p-sub">Average score per AI task category</div></div><span class="pill pill-v">&#9672; Live</span></div>
      <div id="ai-quality-bars"><div style="color:var(--text-3);font-size:12px;text-align:center;padding:30px;">Loading AI data...</div></div>
    </div>
    <div class="panel">
      <div class="p-head"><div><div class="p-title">Recent AI Activity</div><div class="p-sub">Latest logged sessions from Joanie AI Activity Log</div></div><span class="pill pill-v">&#9672; Live</span></div>
      <div id="ai-feed" class="ai-feed"><div style="color:var(--text-3);font-size:12px;text-align:center;padding:30px;">Loading activity...</div></div>
    </div>
  </div>

  <div class="panel" style="margin-top:12px;">
    <div class="p-head"><div><div class="p-title">Flags &mdash; Sessions Scoring Below 6</div><div class="p-sub">Review these to improve prompt quality and output consistency</div></div><span class="pill" style="color:var(--red);border-color:rgba(255,82,82,0.3);background:var(--red-dim);">Attention</span></div>
    <div id="ai-flags-feed" class="ai-feed"><div style="color:var(--text-3);font-size:12px;text-align:center;padding:20px;">No flags — all scores above 6 ✓</div></div>
  </div>
</div>

<!-- AGENTS TAB -->
<div id="tab-agents" class="tab-panel">
  <div class="sec"><div class="sec-tag green">AI Agent Health</div><div class="sec-line"></div></div>
  <div class="agent-strip" id="agentStrip"></div>

  <div class="sec"><div class="sec-tag">Routing &amp; Efficiency</div><div class="sec-line"></div></div>
  <div class="g5050">
    <div class="panel"><div class="p-head"><div><div class="p-title">Daily Call Volume</div><div class="p-sub">QM filled vs. marketplace overflow &middot; 14 days</div></div><span class="pill pill-c">14 Day</span></div><div class="chart-wrap" style="height:210px"><canvas id="callVolChart2"></canvas></div></div>
    <div class="panel"><div class="p-head"><div><div class="p-title">Routing Funnel</div><div class="p-sub">Inbound &#8594; Answered &#8594; Routed &#8594; Converted</div></div><span class="pill pill-g">Live Logic</span></div><div class="funnel" id="funnelEl2" style="margin-top:6px;"></div></div>
  </div>
</div>

<!-- FOOTER -->
<footer class="footer">
  <div style="display:flex;align-items:center;gap:8px;"><span class="dtag">Live</span>Scorecards &amp; activity sync from <span style="color:var(--violet);">&#9672; Notion</span> &nbsp;&middot;&nbsp; Auto-refresh every 60s</div>
  <div class="auto-refresh-badge"><span class="sync-dot" style="width:5px;height:5px;"></span><span id="countdown">Next refresh in 60s</span></div>
  <div>"We Supercharge Your Customer Acquisition" &nbsp;&middot;&nbsp; Centerfield Media &nbsp;&middot;&nbsp; Health &amp; Medicare</div>
</footer>

</div><!-- /shell -->

<script src="data.js"></script>
<script>
/* ── STATIC DATA ─────────────────────────────────────────────────── */
const STATIC={kpis:{WTD:{rpc:'$16.20',rpcD:'&#9650; 8.4% vs prior',rpcDir:'up',rev:'$41K',revD:'&#9650; 5.2% WoW',revDir:'up',gp:'$11.8K',gpD:'&#9650; 4.1% WoW',gpDir:'up',margin:'28.8',marginD:'&#8212; flat',marginDir:'flat',fill:'72',fillD:'&#9660; 1.5% vs prior',fillDir:'down',overflow:'$6.1K',overflowD:'&#9650; NEW revenue',overflowDir:'up'},MTD:{rpc:'$18.40',rpcD:'&#9650; 12.3% vs prior',rpcDir:'up',rev:'$184K',revD:'&#9650; 8.1% MoM',revDir:'up',gp:'$52.4K',gpD:'&#9650; 6.7% MoM',gpDir:'up',margin:'28.5',marginD:'&#8212; vs 27.9% prior',marginDir:'flat',fill:'74',fillD:'&#9660; 2.1% vs prior',fillDir:'down',overflow:'$28.2K',overflowD:'&#9650; NEW revenue',overflowDir:'up'},QTD:{rpc:'$17.90',rpcD:'&#9650; 9.8% vs prior',rpcDir:'up',rev:'$521K',revD:'&#9650; 11.4% QoQ',revDir:'up',gp:'$146K',gpD:'&#9650; 9.2% QoQ',gpDir:'up',margin:'28.0',marginD:'&#9650; +0.4pp QoQ',marginDir:'up',fill:'75',fillD:'&#9650; 1.0% vs prior',fillDir:'up',overflow:'$78K',overflowD:'&#9650; NEW revenue',overflowDir:'up'}},revTrend:{labels:['4/1','4/2','4/3','4/4','4/5','4/6','4/7','4/8','4/9','4/10','4/11','4/12','4/13','4/14','4/15','4/16','4/17','4/18','4/19','4/20'],revenue:[7200,8100,6800,9400,10200,8700,7500,9800,11200,10500,9200,10800,11500,9700,10100,12300,11800,10400,9900,11000],gp:[2050,2310,1940,2680,2910,2480,2140,2800,3200,2990,2620,3080,3280,2770,2880,3510,3360,2970,2820,3140]},callVol:{labels:['4/7','4/8','4/9','4/10','4/11','4/12','4/13','4/14','4/15','4/16','4/17','4/18','4/19','4/20'],qm:[312,340,298,380,410,360,290,355,422,445,390,415,370,430],market:[88,95,82,120,130,105,80,115,148,155,130,140,120,150]},funnel:[{label:'Inbound Calls',val:10340,pct:100},{label:'Answered / IVR',val:9820,pct:95},{label:'Scored & Routed',val:9600,pct:92.8},{label:'QM — Filled',val:7130,pct:69.0},{label:'Marketplace',val:1960,pct:19.0},{label:'Converted',val:9090,pct:88.0}],clients:[{name:'Quote Manage',type:'Primary Buyer',calls:7130,cpa:142,target:150,status:'On Target'},{name:'Buyer A',type:'Marketplace',calls:820,cpa:168,target:160,status:'Over Target'},{name:'Buyer B',type:'Marketplace',calls:610,cpa:155,target:170,status:'On Target'},{name:'Buyer C',type:'Marketplace',calls:380,cpa:144,target:145,status:'On Target'},{name:'Buyer D',type:'Marketplace',calls:150,cpa:190,target:180,status:'Over Target'}],rpc:{labels:['W1','W2','W3','W4','W5','W6','W7','W8'],qm:[16.2,16.8,17.1,16.9,17.5,18.0,17.8,18.4],market:[14.8,15.2,15.5,15.1,15.9,16.4,16.1,16.8]},overflow:{labels:['W1','W2','W3','W4','W5','W6','W7','W8'],vals:[3200,4100,4800,5200,5800,6400,6100,6900]},margin:{labels:['W1','W2','W3','W4','W5','W6','W7','W8'],vals:[26.4,27.1,27.5,27.2,27.8,28.2,28.0,28.5]},agents:[{name:'Joanie',role:'Workflow Orchestrator',status:'Live',uptime:99.8,metric:'99.8%',label:'uptime'},{name:'MPQS',role:'Partner Quality Scoring',status:'Live',uptime:99.4,metric:'847',label:'partners scored'},{name:'Scoring',role:'Real-Time Call Quality',status:'Live',uptime:99.1,metric:'9,600',label:'calls scored MTD'},{name:'Data Agent',role:'Signal Aggregation',status:'Live',uptime:99.6,metric:'100%',label:'data freshness'},{name:'Right Pricing',role:'Dynamic Bid Optimization',status:'In Build',uptime:0,metric:"Q3 '26",label:'target launch'}]};

/* ── CHART DEFAULTS ──────────────────────────────────────────────── */
Chart.defaults.color='rgba(240,244,255,0.4)';Chart.defaults.font.family="'Inter',sans-serif";Chart.defaults.font.size=11;
const GRID={color:'rgba(255,255,255,0.04)',drawTicks:false},TICKS={padding:8},AX={grid:GRID,ticks:TICKS,border:{display:false}};
const TS={backgroundColor:'#0A0F1C',borderColor:'rgba(0,229,255,0.2)',borderWidth:1,padding:10,cornerRadius:6,titleFont:{family:"'Space Mono',monospace",size:10},bodyFont:{family:"'Space Mono',monospace",size:11}};

/* ── CHART BUILDERS ──────────────────────────────────────────────── */
function buildRevChart(){const ctx=document.getElementById('revChart').getContext('2d');const g=ctx.createLinearGradient(0,0,0,210);g.addColorStop(0,'rgba(0,229,255,0.2)');g.addColorStop(1,'rgba(0,229,255,0)');new Chart(ctx,{type:'line',data:{labels:STATIC.revTrend.labels,datasets:[{label:'Revenue ($)',data:STATIC.revTrend.revenue,borderColor:'#00E5FF',borderWidth:2,backgroundColor:g,fill:true,pointRadius:0,pointHoverRadius:4,tension:0.4,yAxisID:'y'},{label:'Gross Profit ($)',data:STATIC.revTrend.gp,borderColor:'#FFB547',borderWidth:2,borderDash:[5,3],backgroundColor:'transparent',fill:false,pointRadius:0,pointHoverRadius:4,tension:0.4,yAxisID:'y'}]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:{display:true,position:'top',align:'end',labels:{boxWidth:12,boxHeight:2,padding:16,pointStyle:'line',usePointStyle:true,color:'rgba(240,244,255,0.5)',font:{family:"'Space Mono',monospace",size:10}}},tooltip:{...TS,callbacks:{label:c=>` ${c.dataset.label}: $${c.parsed.y.toLocaleString()}`}}},scales:{x:{...AX,ticks:{...TICKS,maxTicksLimit:10}},y:{...AX,ticks:{...TICKS,callback:v=>`$${(v/1000).toFixed(0)}k`}}}}});}
function buildRoutePie(){const ctx=document.getElementById('routePie').getContext('2d');new Chart(ctx,{type:'doughnut',data:{labels:['QM Direct','Marketplace'],datasets:[{data:[74,26],backgroundColor:['rgba(0,229,255,0.8)','rgba(255,181,71,0.8)'],borderColor:'#05080F',borderWidth:3,hoverOffset:5}]},options:{responsive:true,maintainAspectRatio:false,cutout:'74%',plugins:{legend:{display:false},tooltip:{...TS,callbacks:{label:c=>` ${c.label}: ${c.parsed}%`}}}}});}

function buildCallVolChart(canvasId){const ctx=document.getElementById(canvasId).getContext('2d');new Chart(ctx,{type:'bar',data:{labels:STATIC.callVol.labels,datasets:[{label:'QM Filled',data:STATIC.callVol.qm,backgroundColor:'rgba(0,229,255,0.65)',borderRadius:3,borderSkipped:false,stack:'s'},{label:'Marketplace',data:STATIC.callVol.market,backgroundColor:'rgba(255,181,71,0.75)',borderRadius:3,borderSkipped:false,stack:'s'}]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:{display:true,position:'top',align:'end',labels:{boxWidth:10,padding:14,pointStyle:'rect',usePointStyle:true,color:'rgba(240,244,255,0.5)',font:{family:"'Space Mono',monospace",size:10}}},tooltip:{...TS}},scales:{x:{...AX,stacked:true},y:{...AX,stacked:true}}}});}

function buildFunnel(elId){const el=document.getElementById(elId);const colors=['#00E5FF','rgba(0,229,255,0.75)','rgba(0,229,255,0.55)','rgba(0,229,255,0.4)','#FFB547','#00E676'];el.innerHTML=STATIC.funnel.map((s,i)=>`<div class="f-row"><div class="f-label">${s.label}</div><div class="f-track"><div class="f-fill" style="background:${colors[i]};width:0%" data-t="${s.pct}">${s.val.toLocaleString()}</div></div><div class="f-pct">${s.pct}%</div></div>`).join('');setTimeout(()=>{document.querySelectorAll('.f-fill').forEach(b=>{b.style.width=b.dataset.t+'%';});},250);}
function buildCpaChart(){const ctx=document.getElementById('cpaChart').getContext('2d');const labels=STATIC.clients.map(c=>c.name);const actuals=STATIC.clients.map(c=>c.cpa);const targets=STATIC.clients.map(c=>c.target);new Chart(ctx,{type:'bar',data:{labels,datasets:[{label:'Actual CPA',data:actuals,backgroundColor:actuals.map((v,i)=>v<=targets[i]?'rgba(0,229,255,0.7)':'rgba(255,82,82,0.7)'),borderRadius:4,borderSkipped:false},{label:'Target CPA',data:targets,type:'line',borderColor:'rgba(255,181,71,0.8)',backgroundColor:'transparent',borderWidth:2,borderDash:[5,3],pointRadius:4,pointBackgroundColor:'#FFB547'}]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:{display:true,position:'top',align:'end',labels:{boxWidth:10,padding:14,pointStyle:'rect',usePointStyle:true,color:'rgba(240,244,255,0.5)',font:{family:"'Space Mono',monospace",size:10}}},tooltip:{...TS,callbacks:{label:c=>` ${c.dataset.label}: $${c.parsed.y}`}}},scales:{x:{...AX},y:{...AX,ticks:{...TICKS,callback:v=>`$${v}`}}}}});}
function buildClientTable(){const tbody=document.getElementById('clientTbody');const maxCpa=Math.max(...STATIC.clients.map(c=>c.cpa));tbody.innerHTML=STATIC.clients.map(c=>{const pct=Math.round((c.cpa/maxCpa)*100);const vs=c.cpa-c.target;const vsLbl=vs<=0?`-$${Math.abs(vs)}`:`+$${vs}`;const vsClr=vs<=0?'var(--green)':'var(--red)';const tag=c.status==='On Target'?'stag-g':'stag-a';const barC=vs<=0?'var(--cyan)':'var(--red)';return `<tr><td><span class="c-name">${c.name}</span><span class="c-type">${c.type}</span></td><td>${c.calls.toLocaleString()}</td><td><div class="mb-wrap"><div class="mb"><div class="mb-fill" style="width:0%;background:${barC}" data-t="${pct}"></div></div>$${c.cpa}</div></td><td>$${c.target}</td><td style="color:${vsClr};font-weight:700;">${vsLbl}</td><td><span class="stag ${tag}">${c.status}</span></td></tr>`;}).join('');setTimeout(()=>{document.querySelectorAll('.mb-fill').forEach(el=>{el.style.width=el.dataset.t+'%';});},350);}
function buildRpcChart(){const ctx=document.getElementById('rpcChart').getContext('2d');new Chart(ctx,{type:'line',data:{labels:STATIC.rpc.labels,datasets:[{label:'QM',data:STATIC.rpc.qm,borderColor:'#00E5FF',borderWidth:2,pointRadius:3,pointBackgroundColor:'#00E5FF',tension:0.3},{label:'Marketplace',data:STATIC.rpc.market,borderColor:'#FFB547',borderWidth:2,pointRadius:3,pointBackgroundColor:'#FFB547',tension:0.3}]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:{display:true,position:'top',align:'end',labels:{boxWidth:10,padding:12,color:'rgba(240,244,255,0.5)',font:{family:"'Space Mono',monospace",size:10}}},tooltip:{...TS,callbacks:{label:c=>` ${c.dataset.label}: $${c.parsed.y.toFixed(2)}`}}},scales:{x:{...AX},y:{...AX,min:13,ticks:{...TICKS,callback:v=>`$${v.toFixed(0)}`}}}}});}
function buildOverflowChart(){const ctx=document.getElementById('overflowChart').getContext('2d');new Chart(ctx,{type:'bar',data:{labels:STATIC.overflow.labels,datasets:[{label:'Overflow Revenue',data:STATIC.overflow.vals,backgroundColor:'rgba(0,230,118,0.65)',borderRadius:4,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{...TS,callbacks:{label:c=>` $${c.parsed.y.toLocaleString()}`}}},scales:{x:{...AX},y:{...AX,ticks:{...TICKS,callback:v=>`$${(v/1000).toFixed(0)}k`}}}}});}
function buildMarginChart(){const ctx=document.getElementById('marginChart').getContext('2d');new Chart(ctx,{type:'line',data:{labels:STATIC.margin.labels,datasets:[{label:'GP Margin %',data:STATIC.margin.vals,borderColor:'#FFB547',borderWidth:2.5,pointRadius:4,pointBackgroundColor:'#FFB547',tension:0.4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{...TS,callbacks:{label:c=>` GP Margin: ${c.parsed.y}%`}}},scales:{x:{...AX},y:{...AX,min:25,ticks:{...TICKS,callback:v=>`${v}%`}}}}});}

function buildAgents(){const s=document.getElementById('agentStrip');s.innerHTML=STATIC.agents.map(a=>{const isLive=a.status==='Live';const dc=isLive?'dot-live':'dot-build';const sc=isLive?'var(--green)':'var(--amber)';const cc=isLive?'':'build';return `<div class="ac ${cc}"><div class="a-top"><div class="a-name">${a.name}</div><div class="a-st"><span class="a-dot ${dc}"></span><span class="a-stxt" style="color:${sc}">${a.status}</span></div></div><div class="a-role">${a.role}</div><div class="a-met"><span class="a-val">${a.metric}</span><span class="a-mlbl">${a.label}</span></div>${isLive?`<div class="up-track"><div class="up-fill" style="width:0%" data-t="${a.uptime}"></div></div>`:`<div style="font-size:9px;color:var(--amber);font-family:'Space Mono',monospace;letter-spacing:0.5px;margin-top:2px;">Active development</div>`}</div>`;}).join('');setTimeout(()=>{document.querySelectorAll('.up-fill').forEach(el=>{el.style.width=el.dataset.t+'%';});},450);}

/* ── PERIOD SWITCHER ─────────────────────────────────────────────── */
function setPeriod(p,btn){document.querySelectorAll('.ptab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const d=STATIC.kpis[p];const map=[['kv-rpc',d.rpc,false,false],['kd-rpc',d.rpcD,true,d.rpcDir],['kv-rev',d.rev,false,false],['kd-rev',d.revD,true,d.revDir],['kv-gp',d.gp,false,false],['kd-gp',d.gpD,true,d.gpDir],['kv-margin',d.margin+'<span class="unit">%</span>',true,false],['kd-margin',d.marginD,true,d.marginDir],['kv-fill',d.fill+'<span class="unit">%</span>',true,false],['kd-fill',d.fillD,true,d.fillDir],['kv-overflow',d.overflow,false,false],['kd-overflow',d.overflowD,true,d.overflowDir]];map.forEach(([id,val,isHtml,dir])=>{const el=document.getElementById(id);if(!el)return;if(isHtml)el.innerHTML=val;else el.textContent=val;if(dir)el.className=`kpi-badge ${dir}`;el.classList.remove('swapped');void el.offsetWidth;el.classList.add('swapped');});}

/* ── TAB SWITCHER ────────────────────────────────────────────────── */
function switchTab(id, btn){
  document.querySelectorAll('.nav-tab').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-'+id).classList.add('active');
}

/* ── NOTION PUBLISHER DATA ───────────────────────────────────────── */
const AC_CFG={'Scale Eligible':{cls:'scale-eligible',tagCls:'action-scale'},'Maintain':{cls:'maintain',tagCls:'action-maintain'},'Monitor':{cls:'monitor',tagCls:'action-monitor'},'Throttle':{cls:'throttle',tagCls:'action-throttle'},'Pullback':{cls:'pullback',tagCls:'action-pullback'}};
const TIER_CLR={'Scale Eligible':'#00E676','Maintain':'#00E5FF','Monitor':'#FFB547','Throttle':'rgba(255,181,71,0.45)','Pullback':'#FF5252'};
const ORDER=['Scale Eligible','Maintain','Monitor','Throttle','Pullback'];

function pubName(r){return (r.Report||'').replace(/^QM — /,'').split(' — ')[0]||r.Report||'Unknown';}
function fmtPct(v){return v==null?'—':(v*100).toFixed(1)+'%';}
function fmtDollar(v){return v==null||v===0?'—':'$'+Math.round(v).toLocaleString();}
function cpaClr(v){if(!v)return '';if(v<300)return 'good';if(v<500)return '';return 'bad';}

function renderCards(recs){
  const grid=document.getElementById('publisherGrid');
  const cnt=document.getElementById('pubCount');
  if(!recs||!recs.length){grid.innerHTML='<div style="grid-column:1/-1;padding:40px;text-align:center;color:var(--text-3);font-family:var(--font-m);font-size:11px;">No scorecard data — hit Sync Notion</div>';cnt.textContent='0 partners';return;}
  cnt.textContent=recs.length+' partners';
  recs.sort((a,b)=>{const ai=ORDER.indexOf(a['Action Band']||'');const bi=ORDER.indexOf(b['Action Band']||'');return(ai<0?99:ai)-(bi<0?99:bi);});
  grid.innerHTML=recs.map(r=>{
    const n=pubName(r),a=r['Action Band']||'Monitor',cfg=AC_CFG[a]||AC_CFG['Monitor'];
    const dt=r['date:Date:start']?new Date(r['date:Date:start']).toLocaleDateString('en-US',{month:'short',year:'numeric'}):'';
    const eff=r['Effectuation %'];
    return `<div class="pub-card ${cfg.cls}">
<div class="pub-top"><div><div class="pub-name">${n}</div><div style="font-size:9px;color:var(--text-3);font-family:var(--font-m);margin-top:2px;">${dt}</div></div><span class="pub-action ${cfg.tagCls}">${a}</span></div>
<div class="pub-metrics">
<div class="pub-metric"><div class="pub-metric-label">CPA</div><div class="pub-metric-val ${cpaClr(r.CPA)}">${fmtDollar(r.CPA)}</div></div>
<div class="pub-metric"><div class="pub-metric-label">Conv Rate</div><div class="pub-metric-val">${fmtPct(r['Conv Rate (CR%)'])}</div></div>
<div class="pub-metric"><div class="pub-metric-label">Effectuation</div><div class="pub-metric-val ${eff!=null?(eff>=0.72?'good':'warn'):''}">${fmtPct(eff)}</div></div>
<div class="pub-metric"><div class="pub-metric-label">Dup Rate</div><div class="pub-metric-val ${r['Duplicate Rate %']>0.08?'bad':''}">${fmtPct(r['Duplicate Rate %'])}</div></div>
</div>
<div class="pub-headline">${(r['Headline Metric']||'').substring(0,100)}</div>
${r['Biggest Risk']?`<div class="pub-risk">${r['Biggest Risk'].substring(0,90)}</div>`:''}
${r['Top Opportunity']?`<div class="pub-opp">${r['Top Opportunity'].substring(0,90)}</div>`:''}
</div>`;}).join('');
}

function renderDist(recs){
  const counts={};ORDER.forEach(o=>counts[o]=0);
  recs.forEach(r=>{const b=r['Action Band'];if(b&&counts[b]!==undefined)counts[b]++;});
  const total=recs.length;
  document.getElementById('mpqsDist').innerHTML=ORDER.map(b=>{const c=counts[b];const pct=total?(c/total*100).toFixed(0):0;return `<div style="flex:${c||0.1};display:flex;flex-direction:column;align-items:center;gap:4px;" title="${b}: ${c} (${pct}%)"><div style="width:100%;background:${TIER_CLR[b]};border-radius:4px;opacity:0.85;flex:1;min-height:8px;"></div><div style="font-family:var(--font-m);font-size:9px;color:var(--text-3);">${c}</div></div>`;}).join('');
  document.getElementById('mpqsLegend').innerHTML=ORDER.map(b=>{const c=counts[b];const pct=total?(c/total*100).toFixed(0):0;return `<div style="display:flex;align-items:center;gap:5px;"><span style="width:8px;height:8px;background:${TIER_CLR[b]};border-radius:2px;display:inline-block;"></span><span style="font-size:10px;color:var(--text-2);">${b}</span><span style="font-family:var(--font-m);font-size:10px;color:var(--text-3);">${c} (${pct}%)</span></div>`;}).join('');
}

/* ── RENDER NOTION SCORECARDS ────────────────────────────────────── */
function renderScorecards(data){
  // MPQS
  document.getElementById('sc-mpqs-count').textContent = data.mpqsCount || '—';
  document.getElementById('sc-mpqs-avg').textContent = data.avgMpqs || '—';
  const mpqsFeed = document.getElementById('mpqs-feed');
  if(data.recentMpqs && data.recentMpqs.length){
    mpqsFeed.innerHTML = data.recentMpqs.map(e => {
      const score = e.mpqsScore;
      const clr = !score ? 'rgba(255,255,255,0.1)' : score >= 80 ? 'rgba(0,230,118,0.15)' : score >= 60 ? 'rgba(0,229,255,0.15)' : 'rgba(255,181,71,0.15)';
      const txtClr = !score ? 'var(--text-3)' : score >= 80 ? 'var(--green)' : score >= 60 ? 'var(--cyan)' : 'var(--amber)';
      return `<div class="sc-item">
        <div class="sc-score" style="background:${clr};color:${txtClr}">${score ?? '—'}</div>
        <div class="sc-content">
          <div class="sc-label">${e.publisherName || 'MPQS Evaluation'}</div>
          <div class="sc-meta">${e.date || ''} · ${e.season || ''} · ${e.periodType || ''}</div>
        </div>
      </div>`;
    }).join('');
  } else {
    mpqsFeed.innerHTML = '<div style="color:var(--text-3);font-size:12px;text-align:center;padding:30px;">No MPQS data yet — run your first evaluation</div>';
  }

  // QM
  document.getElementById('sc-qm-count').textContent = data.qmCount || '—';
  document.getElementById('sc-qm-avg').textContent = data.avgQmScore || '—';
  const qmFeed = document.getElementById('qm-feed');
  if(data.recentQm && data.recentQm.length){
    qmFeed.innerHTML = data.recentQm.map(e => {
      const score = e.crScore;
      const clr = !score ? 'rgba(255,255,255,0.1)' : score >= 80 ? 'rgba(0,230,118,0.15)' : score >= 60 ? 'rgba(255,181,71,0.15)' : 'rgba(255,82,82,0.15)';
      const txtClr = !score ? 'var(--text-3)' : score >= 80 ? 'var(--green)' : score >= 60 ? 'var(--amber)' : 'var(--red)';
      return `<div class="sc-item">
        <div class="sc-score" style="background:${clr};color:${txtClr}">${score ?? '—'}</div>
        <div class="sc-content">
          <div class="sc-label">${e.agent || 'QM Review'}</div>
          <div class="sc-meta">${e.date || ''} · ${e.season || ''} · ${e.status || ''}</div>
        </div>
      </div>`;
    }).join('');
  } else {
    qmFeed.innerHTML = '<div style="color:var(--text-3);font-size:12px;text-align:center;padding:30px;">No QM scorecard data yet</div>';
  }
}

/* ── RENDER AI ACTIVITY ──────────────────────────────────────────── */
function renderAIActivity(data){
  document.getElementById('ai-total').textContent = data.totalEntries || '—';
  document.getElementById('ai-avg').textContent = data.avgQuality || '—';
  document.getElementById('ai-saved').textContent = data.outputsSaved || '—';
  document.getElementById('ai-flags').textContent = data.flagCount || '0';

  if(data.totalEntries > 0){
    const rate = Math.round((data.outputsSaved / data.totalEntries) * 100);
    document.getElementById('ai-saved-badge').textContent = rate + '% save rate';
    document.getElementById('ai-flags-badge').textContent = data.flagCount > 0 ? 'review needed' : 'all clear ✓';
    document.getElementById('ai-avg-badge').textContent = data.avgQuality >= 8 ? '↑ strong' : data.avgQuality >= 6 ? '→ adequate' : '↓ needs work';
  }

  // Quality bars
  const barsEl = document.getElementById('ai-quality-bars');
  if(data.qualityByTask && data.qualityByTask.length){
    barsEl.innerHTML = data.qualityByTask.map(item => {
      const pct = (item.avg / 10) * 100;
      const clr = item.avg >= 8 ? '#00E676' : item.avg >= 6 ? '#00E5FF' : '#FFB547';
      return `<div class="score-bar-row">
        <span class="score-bar-label">${item.type}</span>
        <div class="score-bar-track"><div class="score-bar-fill" style="width:${pct}%;background:${clr};"></div></div>
        <span class="score-bar-val">${item.avg}</span>
        <span class="score-bar-ct">(${item.count})</span>
      </div>`;
    }).join('');
  } else {
    barsEl.innerHTML = '<div style="color:var(--text-3);font-size:12px;padding:20px;text-align:center;">No scored entries yet</div>';
  }

  // Activity feed
  const feedEl = document.getElementById('ai-feed');
  if(data.recentActivity && data.recentActivity.length){
    feedEl.innerHTML = data.recentActivity.map(e => {
      const score = e.qualityScore;
      const clr = !score ? 'rgba(255,255,255,0.06)' : score >= 8 ? 'rgba(0,230,118,0.15)' : score >= 6 ? 'rgba(0,229,255,0.15)' : 'rgba(255,181,71,0.15)';
      const txtClr = !score ? 'var(--text-3)' : score >= 8 ? 'var(--green)' : score >= 6 ? 'var(--cyan)' : 'var(--amber)';
      return `<div class="ai-item">
        <div class="ai-score" style="background:${clr};color:${txtClr}">${score ?? '—'}</div>
        <div class="ai-content">
          <div class="ai-task">${e.taskType || 'Session'}${e.projectContext ? ' · ' + e.projectContext : ''}</div>
          <div class="ai-meta">${e.teamMember || ''} · ${e.date || ''} · ${e.timeInvested || 0}min</div>
          ${e.whatWorkedWell ? `<div class="ai-note">${e.whatWorkedWell}</div>` : ''}
        </div>
        ${e.outputSaved ? '<span class="ai-saved">Saved</span>' : ''}
      </div>`;
    }).join('');
  } else {
    feedEl.innerHTML = '<div style="color:var(--text-3);font-size:12px;text-align:center;padding:30px;">No AI activity logged yet</div>';
  }

  // Flags
  const flagsEl = document.getElementById('ai-flags-feed');
  if(data.flags && data.flags.length){
    flagsEl.innerHTML = data.flags.map(e => {
      return `<div class="ai-item">
        <div class="ai-score" style="background:rgba(255,82,82,0.15);color:var(--red)">${e.qualityScore}</div>
        <div class="ai-content">
          <div class="ai-task">${e.taskType || 'Session'}${e.projectContext ? ' · ' + e.projectContext : ''}</div>
          <div class="ai-meta">${e.teamMember || ''} · ${e.date || ''}</div>
          ${e.whatToImprove ? `<div class="ai-note" style="color:rgba(255,82,82,0.7)">${e.whatToImprove}</div>` : ''}
        </div>
      </div>`;
    }).join('');
  } else {
    flagsEl.innerHTML = '<div style="color:var(--text-3);font-size:12px;text-align:center;padding:20px;">No flags — all scores above 6 ✓</div>';
  }
}

/* ── RENDER SEASON STRIP ─────────────────────────────────────────── */
function renderSeasons(data){
  const counts = {OEP:0, SEP:0, AEP:0};
  if(data.seasonBreakdown){
    data.seasonBreakdown.forEach(s => { if(counts[s.name] !== undefined) counts[s.name] = s.value; });
  }
  const strip = document.getElementById('seasonStrip');
  const seasons = [
    {key:'OEP', label:'OEP', sub:'Jan 1 – Mar 31', clr:'rgba(0,229,255,0.6)'},
    {key:'SEP', label:'SEP', sub:'Apr 1 – Oct 14', clr:'rgba(0,230,118,0.6)'},
    {key:'AEP', label:'AEP', sub:'Oct 15 – Nov 7', clr:'rgba(255,181,71,0.6)'},
  ];
  strip.innerHTML = seasons.map(s => `
    <div class="season-pill">
      <div class="season-pill-label" style="color:${s.clr}">${s.label}</div>
      <div class="season-pill-val">${counts[s.key] || '0'}</div>
      <div class="season-pill-sub">${s.sub}</div>
    </div>
  `).join('');
}

/* ── RENDER JOANIE REPORTING ─────────────────────────────────────── */
function renderReporting(data){
  if(!data || !data.reportingEntries) return;
  const entries = data.reportingEntries;

  // KPI cards
  document.getElementById('rpt-count').textContent = entries.length || '—';

  // Avg scores across all periods
  const mpqsScores = entries.filter(e => e.mpqsScore).map(e => e.mpqsScore);
  const qmScores = entries.filter(e => e.qmScore).map(e => e.qmScore);
  const mpScores = entries.filter(e => e.mpScore).map(e => e.mpScore);

  const avg = arr => arr.length ? (arr.reduce((a,b)=>a+b,0)/arr.length).toFixed(1) : '—';
  document.getElementById('rpt-mpqs-avg').textContent = avg(mpqsScores);
  document.getElementById('rpt-qm-avg').textContent = avg(qmScores);
  document.getElementById('rpt-mp-avg').textContent = avg(mpScores);

  // Season strip
  const seasonCounts = {OEP:0, SEP:0, AEP:0};
  entries.forEach(e => { if(seasonCounts[e.season] !== undefined) seasonCounts[e.season]++; });
  const strip = document.getElementById('reportingSeasonStrip');
  const seasons = [
    {key:'OEP', label:'OEP', sub:'Jan 1 – Mar 31', clr:'rgba(0,229,255,0.6)'},
    {key:'SEP', label:'SEP', sub:'Apr 1 – Oct 14', clr:'rgba(0,230,118,0.6)'},
    {key:'AEP', label:'AEP', sub:'Oct 15 – Nov 7', clr:'rgba(255,181,71,0.6)'},
  ];
  strip.innerHTML = seasons.map(s => `
    <div class="season-pill">
      <div class="season-pill-label" style="color:${s.clr}">${s.label}</div>
      <div class="season-pill-val">${seasonCounts[s.key] || '0'}</div>
      <div class="season-pill-sub">${s.sub}</div>
    </div>
  `).join('');

  // Report cards feed
  const feed = document.getElementById('reportingFeed');
  if(!entries.length){
    feed.innerHTML = '<div style="color:var(--text-3);font-size:12px;text-align:center;padding:40px;">No reporting periods yet — create your first entry in Joanie Reporting</div>';
    return;
  }

  feed.innerHTML = entries.map(e => {
    const mpqsClr = !e.mpqsScore ? '' : e.mpqsScore >= 80 ? 'good' : e.mpqsScore >= 60 ? '' : 'warn';
    const qmClr = !e.qmScore ? '' : e.qmScore >= 80 ? 'good' : e.qmScore >= 60 ? '' : 'warn';
    const mpClr = !e.mpScore ? '' : e.mpScore >= 80 ? 'good' : e.mpScore >= 60 ? '' : 'warn';
    const statusCls = e.status === 'Published' ? 'status-published' : e.status === 'In Review' ? 'status-review' : 'status-draft';
    return `<div class="report-card">
      <div class="report-card-header">
        <div>
          <div class="report-title">${e.reportName || 'Reporting Period'}</div>
          <div class="report-date">${e.date || ''}${e.periodType ? ' · ' + e.periodType : ''}${e.season ? ' · ' + e.season : ''}</div>
        </div>
        <span class="report-status ${statusCls}">${e.status || 'Draft'}</span>
      </div>
      <div class="report-scores">
        <div class="rscore"><div class="rscore-label">MPQS</div><div class="rscore-val ${mpqsClr}">${e.mpqsScore ?? '—'}</div></div>
        <div class="rscore"><div class="rscore-label">QM Score</div><div class="rscore-val ${qmClr}">${e.qmScore ?? '—'}</div></div>
        <div class="rscore"><div class="rscore-label">MP Score</div><div class="rscore-val ${mpClr}">${e.mpScore ?? '—'}</div></div>
      </div>
      ${e.headlineMetric ? `<div class="report-meta-item" style="margin-bottom:10px;"><div class="report-meta-label">Headline</div><div class="report-meta-val">${e.headlineMetric}</div></div>` : ''}
      <div class="report-divider"></div>
      ${e.biggestRisk ? `<div class="report-risk">${e.biggestRisk}</div>` : ''}
      ${e.topOpportunity ? `<div class="report-opp">${e.topOpportunity}</div>` : ''}
    </div>`;
  }).join('');

  // Render trend charts with live entries
  renderTrendCharts(entries);
}

/* ── DISPOSITIONS TAB ────────────────────────────────────────────── */
function renderDispositionsTab() {
  const sortVal   = (document.getElementById('disp-sort')   || {}).value || 'name';
  const filterVal = (document.getElementById('disp-filter') || {}).value || 'all';

  let data = [...RP_SCORECARD_DATA];

  // Filter
  if (filterVal === 'healthy') data = data.filter(d => d.status === 'Healthy');
  else if (filterVal === 'watch') data = data.filter(d => d.status === 'Watch');
  else if (filterVal === 'risk')  data = data.filter(d => d.status === 'At Risk');
  else if (filterVal === 'scale') data = data.filter(d => d.actionBand === 'Scale Eligible');

  // Sort
  if (sortVal === 'rawcalls')  data.sort((a,b) => (b.rawCalls||0)-(a.rawCalls||0));
  else if (sortVal === 'netsales') data.sort((a,b) => (b.netSales||0)-(a.netSales||0));
  else if (sortVal === 'eff')  data.sort((a,b) => (b.eff||0)-(a.eff||0));
  else if (sortVal === 'status') data.sort((a,b) => {
    const ord = {'Healthy':0,'Watch':1,'At Risk':2};
    return (ord[a.status]||1) - (ord[b.status]||1);
  });
  else data.sort((a,b) => a.pub.localeCompare(b.pub));

  // Summary KPIs
  const totalRaw   = data.reduce((s,d) => s+(d.rawCalls||0), 0);
  const totalSales = data.reduce((s,d) => s+(d.netSales||0), 0);
  const totalHours = data.reduce((s,d) => s+(d.talkHours||0), 0);
  const avgEff     = data.filter(d=>d.eff).length
    ? (data.filter(d=>d.eff).reduce((s,d)=>s+d.eff,0) / data.filter(d=>d.eff).length * 100).toFixed(1)
    : '—';
  const billableTotal = data.reduce((s,d) => s+(d.billableCalls||0), 0);
  const billableRate  = totalRaw > 0 ? (billableTotal/totalRaw*100).toFixed(1)+'%' : '—';

  document.getElementById('disp-summary-kpis').innerHTML = `
    <div class="kpi green-accent"><div class="kpi-accent"></div><div class="kpi-label">Total Raw Calls</div><div class="kpi-val">${totalRaw.toLocaleString()}</div><span class="kpi-badge flat">${data.length} publishers</span></div>
    <div class="kpi green-accent"><div class="kpi-accent"></div><div class="kpi-label">Total Net Sales</div><div class="kpi-val">${totalSales.toLocaleString()}</div><span class="kpi-badge up">Sold policies</span></div>
    <div class="kpi amber-accent"><div class="kpi-accent"></div><div class="kpi-label">Avg Effectuation</div><div class="kpi-val">${avgEff}<span class="unit">%</span></div><span class="kpi-badge flat">Target: 72%</span></div>
    <div class="kpi"><div class="kpi-accent"></div><div class="kpi-label">Total Talk Hours</div><div class="kpi-val">${Math.round(totalHours).toLocaleString()}</div><span class="kpi-badge flat">hrs</span></div>
  `;

  document.getElementById('disp-pub-count').textContent = data.length + ' publishers';

  // Portfolio funnel
  const portFunnel = [
    { label:'Raw Calls',   val:totalRaw,   color:'var(--cyan)' },
    { label:'Net Sales',   val:totalSales, color:'var(--green)' },
    { label:'Talk Hrs',    val:Math.round(totalHours), color:'var(--violet)' },
  ];
  const maxPortVal = Math.max(...portFunnel.map(f=>f.val));
  document.getElementById('disp-portfolio-funnel').innerHTML = portFunnel.map((f,i) => `
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;text-align:center;position:relative;padding:0 8px;">
      ${i < portFunnel.length-1 ? `<div style="position:absolute;right:-8px;top:50%;transform:translateY(-50%);font-size:16px;color:var(--text-3);z-index:1;">→</div>` : ''}
      <div style="background:var(--surface2);border:1px solid var(--edge);border-radius:8px;padding:14px 10px;width:100%;margin-bottom:6px;">
        <div style="font-family:var(--font-num);font-size:26px;font-weight:300;color:${f.color};line-height:1;margin-bottom:3px;">${f.val.toLocaleString()}</div>
        <div style="font-family:var(--font-m);font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--text-3);">${f.label}</div>
      </div>
      <div style="height:4px;width:${Math.round(f.val/maxPortVal*100)}%;background:${f.color};border-radius:2px;opacity:0.5;transition:width 1s ease;"></div>
    </div>
  `).join('');

  // Portfolio bars by publisher (net sales)
  const barMax = Math.max(...data.map(d=>d.netSales||0));
  document.getElementById('disp-portfolio-bars').innerHTML = data.map(d => {
    const pct = barMax > 0 ? Math.round((d.netSales||0)/barMax*100) : 0;
    const statusColor = d.status==='Healthy'?'var(--green)':d.status==='At Risk'?'var(--red)':'var(--amber)';
    return `<div class="disp-bar-row">
      <div class="disp-bar-label">${d.pub.length>18?d.pub.slice(0,18)+'…':d.pub}</div>
      <div class="disp-bar-track"><div class="disp-bar-fill" style="width:0%;background:${statusColor};opacity:0.7;" data-w="${pct}"></div></div>
      <div class="disp-bar-val" style="color:${statusColor};">${(d.netSales||0).toLocaleString()}</div>
      <div class="disp-bar-pct">${d.eff?(d.eff*100).toFixed(0)+'% eff':'—'}</div>
    </div>`;
  }).join('');

  // Animate bars
  setTimeout(() => {
    document.querySelectorAll('.disp-bar-fill[data-w]').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 100);

  // Publisher cards
  document.getElementById('disp-publisher-grid').innerHTML = data.map(d => buildDispCard(d)).join('');

  // Animate card bars
  setTimeout(() => {
    document.querySelectorAll('.disp-card-bar-fill[data-w]').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 200);
}

function buildDispCard(d) {
  const statusCls  = d.status==='Healthy'?'healthy':d.status==='At Risk'?'risk':'watch';
  const statusColor = d.status==='Healthy'?'var(--green)':d.status==='At Risk'?'var(--red)':'var(--amber)';
  const bandColor   = d.actionBand==='Scale Eligible'?'var(--green)':d.actionBand==='Maintain'?'var(--cyan)':d.actionBand==='Monitor'?'var(--amber)':d.actionBand==='Throttle'?'var(--amber)':'var(--red)';
  const bandBg      = d.actionBand==='Scale Eligible'?'rgba(0,230,118,0.12)':d.actionBand==='Maintain'?'rgba(0,229,255,0.12)':d.actionBand==='Monitor'?'rgba(255,181,71,0.12)':d.actionBand==='Throttle'?'rgba(255,181,71,0.08)':'rgba(255,82,82,0.12)';

  // Core metrics
  const raw        = d.rawCalls || 0;
  const billable   = d.billableCalls || null;
  const sales      = d.netSales || 0;
  const effPct     = d.eff ? (d.eff * 100).toFixed(1) + '%' : '—';
  const effColor   = !d.eff ? 'var(--text-3)' : d.eff >= 0.72 ? 'var(--green)' : d.eff >= 0.65 ? 'var(--amber)' : 'var(--red)';
  const age75Pct   = d.age75 ? (d.age75 * 100).toFixed(1) + '%' : '—';
  const age75Color = !d.age75 ? 'var(--text-3)' : d.age75 <= 0.15 ? 'var(--text-2)' : d.age75 <= 0.25 ? 'var(--amber)' : 'var(--red)';
  const crPct      = d.cr ? (d.cr * 100).toFixed(1) + '%' : '—';
  const crColor    = !d.cr ? 'var(--text-3)' : d.cr >= 0.10 ? 'var(--green)' : d.cr >= 0.08 ? 'var(--amber)' : 'var(--red)';
  const hours      = d.talkHours ? d.talkHours.toLocaleString() : '—';
  const cpa        = d.cpa ? '$' + Math.round(d.cpa) : '—';
  const cpaColor   = !d.cpa ? 'var(--text-3)' : d.cpa <= 325 ? 'var(--green)' : d.cpa <= 450 ? 'var(--amber)' : 'var(--red)';

  // Disposition flow steps
  const flowSteps = [
    { label:'Raw Calls',  val:raw,      color:'var(--cyan)',   rate:'entry' },
    { label:'Net Sales',  val:sales,    color:'var(--green)',  rate:'CR: '+crPct },
    { label:'Effectuated',val:d.eff && sales ? Math.round(sales*d.eff) : null, color:'var(--violet)', rate:'Eff: '+effPct },
  ];
  if (billable) {
    flowSteps.splice(1, 0, { label:'Billable', val:billable, color:'var(--amber)', rate:(raw>0?(billable/raw*100).toFixed(0)+'% of raw':'—') });
  }

  const flowHTML = flowSteps.filter(s=>s.val!=null).map((s,i,arr) => `
    <div class="disp-step">
      <div class="disp-step-box">
        <div class="disp-step-num" style="color:${s.color};">${typeof s.val==='number'?s.val.toLocaleString():s.val}</div>
        <div class="disp-step-label">${s.label}</div>
      </div>
      <div class="disp-step-rate">${s.rate}</div>
    </div>
  `).join('');

  // Disposition bars
  const dispBuckets = [
    { label:'Net Sales',    val:sales,                                          color:'var(--green)' },
    { label:'Effectuated',  val:d.eff && sales ? Math.round(sales*d.eff) : null, color:'var(--violet)' },
    { label:'Duplicate',    val:d.dupRate ? Math.round(raw*d.dupRate) : null,   color:'var(--amber)' },
    { label:'Not Qualified',val:raw - sales - (d.dupRate?Math.round(raw*d.dupRate):0) > 0 ? raw - sales - (d.dupRate?Math.round(raw*d.dupRate):0) : null, color:'rgba(255,82,82,0.6)' },
  ].filter(b => b.val != null && b.val > 0);

  const bMax = Math.max(...dispBuckets.map(b=>b.val), 1);
  const barsHTML = dispBuckets.map(b => {
    const bPct = Math.round(b.val/bMax*100);
    const ofRaw = raw > 0 ? (b.val/raw*100).toFixed(1)+'%' : '—';
    return `<div class="disp-bar-row">
      <div class="disp-bar-label">${b.label}</div>
      <div class="disp-bar-track"><div class="disp-bar-fill disp-card-bar-fill" style="width:0%;background:${b.color};opacity:0.75;" data-w="${bPct}"></div></div>
      <div class="disp-bar-val" style="color:${b.color};">${b.val.toLocaleString()}</div>
      <div class="disp-bar-pct">${ofRaw}</div>
    </div>`;
  }).join('');

  return `<div class="disp-card">
    <div class="disp-card-header ${statusCls}">
      <div>
        <div class="disp-pub-name">${d.pub}</div>
        <div class="disp-pub-meta">${d.season} · ${d.date} · ${raw.toLocaleString()} raw calls</div>
      </div>
      <div style="display:flex;gap:6px;align-items:center;">
        <span class="disp-band" style="color:${bandColor};background:${bandBg};border:1px solid ${bandColor}33;">${d.actionBand}</span>
        <span class="disp-band" style="color:${statusColor};background:${statusColor}15;border:1px solid ${statusColor}33;">${d.status}</span>
      </div>
    </div>
    <div class="disp-kpi-row">
      <div class="disp-kpi"><div class="disp-kpi-label">CPA</div><div class="disp-kpi-val" style="color:${cpaColor};">${cpa}</div><div class="disp-kpi-sub">Target $325</div></div>
      <div class="disp-kpi"><div class="disp-kpi-label">Net Sales</div><div class="disp-kpi-val">${sales.toLocaleString()}</div><div class="disp-kpi-sub">Sold policies</div></div>
      <div class="disp-kpi"><div class="disp-kpi-label">Conv Rate</div><div class="disp-kpi-val" style="color:${crColor};">${crPct}</div><div class="disp-kpi-sub">Target 10%</div></div>
      <div class="disp-kpi"><div class="disp-kpi-label">Effectuation</div><div class="disp-kpi-val" style="color:${effColor};">${effPct}</div><div class="disp-kpi-sub">Target 72%</div></div>
      <div class="disp-kpi"><div class="disp-kpi-label">Age 75+</div><div class="disp-kpi-val" style="color:${age75Color};">${age75Pct}</div><div class="disp-kpi-sub">Max 15%</div></div>
    </div>
    <div class="disp-flow-row">${flowHTML}</div>
    <div class="disp-bars-section">${barsHTML}</div>
    ${(d.biggestRisk || d.topOpp) ? `<div class="disp-intel">
      ${d.biggestRisk ? `<div class="disp-intel-box risk"><div class="disp-intel-label">⚠ Biggest Risk</div>${d.biggestRisk}</div>` : '<div></div>'}
      ${d.topOpp ? `<div class="disp-intel-box opp"><div class="disp-intel-label">↑ Top Opportunity</div>${d.topOpp}</div>` : ''}
    </div>` : ''}
  </div>`;
}

/* ── DATA LOADED FROM data.js ── */

/* ── GLOBAL SEASON TOGGLE ── */
function setGlobalSeason(s,btn){
  globalSeason=s; activeRPSeason=s;
  document.querySelectorAll('.gstab').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
  const m=SEASON_META[s];
  document.getElementById('sctx-cpa').textContent='$'+m.cpa;
  document.getElementById('sctx-cr').textContent=m.cr+'%';
  document.getElementById('sctx-eff').textContent=m.eff+'%';
  document.getElementById('sctx-rde').textContent=m.rde+'%';
  document.getElementById('sctx-age').textContent=m.age75+'%';
  document.getElementById('sctx-ltv').textContent='$'+m.ltv;
  document.getElementById('sctx-label').textContent=m.label+' · '+m.dates;
  const pill=document.getElementById('seasonContextPill');
  pill.textContent=s; pill.style.color=m.color; pill.style.background=m.pillBg; pill.style.border='1px solid '+m.pillBorder;
  renderRPTab(); renderSubIDTab(); renderDispositionsTab(); renderAlerts();
}

/* ── RIGHT PRICING TAB ── */
function setRPSeason(s,btn){activeRPSeason=s;['SEP','OEP','AEP'].forEach(x=>{const el=document.getElementById('rp-'+x.toLowerCase());if(el){el.style.background=x===s?'var(--cyan)':'var(--surface)';el.style.color=x===s?'var(--ink)':'var(--text-3)';}});renderRPTab();}

function renderRPTab(){
  const t=RP_SEASONS[activeRPSeason];
  const pubs=RP_NOTION_DATA.filter(d=>d.Season===activeRPSeason);
  const active=pubs.filter(d=>d.actualCpa);
  const avgCpa=active.length?Math.round(active.reduce((s,d)=>s+d.actualCpa,0)/active.length):null;
  const onTarget=active.filter(d=>d.actualCpa<=t.cpa).length;
  const scaleEligible=pubs.filter(d=>d.actionBand==='Scale Eligible').length;
  const pullback=pubs.filter(d=>d.actionBand==='Pullback').length;
  document.getElementById('rp-kpi-grid').innerHTML=`
    <div class="kpi"><div class="kpi-accent"></div><div class="kpi-label">Season Target CPA</div><div class="kpi-val">$${t.cpa}</div><span class="kpi-badge flat">${activeRPSeason}</span></div>
    <div class="kpi green-accent"><div class="kpi-accent"></div><div class="kpi-label">Avg Actual CPA</div><div class="kpi-val" style="color:${avgCpa&&avgCpa<=t.cpa?'var(--green)':'var(--amber)'}">${avgCpa?'$'+avgCpa:'—'}</div><span class="kpi-badge flat">${active.length} active</span></div>
    <div class="kpi green-accent"><div class="kpi-accent"></div><div class="kpi-label">On / Under Target</div><div class="kpi-val">${onTarget}</div><span class="kpi-badge up">of ${active.length}</span></div>
    <div class="kpi"><div class="kpi-accent"></div><div class="kpi-label">Scale Eligible</div><div class="kpi-val" style="color:var(--green)">${scaleEligible}</div><span class="kpi-badge up">publishers</span></div>
    <div class="kpi amber-accent"><div class="kpi-accent"></div><div class="kpi-label">CR Target</div><div class="kpi-val">${t.cr}%</div><span class="kpi-badge flat">${activeRPSeason}</span></div>
    <div class="kpi"><div class="kpi-accent"></div><div class="kpi-label">Pullback</div><div class="kpi-val" style="color:var(--red)">${pullback}</div><span class="kpi-badge down">publishers</span></div>`;
  document.getElementById('rp-table-body').innerHTML=pubs.map(d=>{
    const enhBid=calcRPEnhancedBid(d),delta=d.actualCpa?Math.round(d.actualCpa-t.cpa):null;
    const dc=!delta?'var(--text-3)':delta>50?'var(--red)':delta>0?'var(--amber)':'var(--green)';
    const cc=!d.actualCpa?'var(--text-3)':d.actualCpa<=t.cpa?'var(--green)':'var(--amber)';
    const ac=rpBadgeColor(d.rpAction),mc=mpqsBadgeColor(d.MPQS);
    return `<tr style="border-bottom:1px solid var(--edge);">
      <td style="padding:9px 12px;color:var(--text);font-family:var(--font-s);font-size:12px;font-weight:500;">${d.Publisher}</td>
      <td style="padding:9px 12px;text-align:center;"><span style="font-family:var(--font-m);font-size:10px;font-weight:700;color:${mc};padding:2px 8px;border-radius:3px;background:${mc}22;">${d.MPQS}</span></td>
      <td style="padding:9px 12px;text-align:right;font-family:var(--font-m);font-size:11px;color:${cc};">${d.actualCpa?'$'+d.actualCpa:'—'}</td>
      <td style="padding:9px 12px;text-align:right;font-family:var(--font-m);font-size:11px;color:var(--text-3);">$${t.cpa}</td>
      <td style="padding:9px 12px;text-align:right;font-family:var(--font-m);font-size:11px;color:${dc};">${delta!=null?(delta>0?'+$'+delta:'-$'+Math.abs(delta)):'—'}</td>
      <td style="padding:9px 12px;text-align:right;font-family:var(--font-m);font-size:11px;color:${d.eff>=t.eff?'var(--green)':'var(--amber)'};">${d.eff}%</td>
      <td style="padding:9px 12px;text-align:right;font-family:var(--font-m);font-size:11px;color:${d.rde<=t.rde?'var(--green)':'var(--red)'};">${d.rde}%</td>
      <td style="padding:9px 12px;text-align:right;font-family:var(--font-m);font-size:11px;color:${d.age75<=t.age75?'var(--text-2)':'var(--red)'};">${d.age75}%</td>
      <td style="padding:9px 12px;text-align:right;font-family:var(--font-m);font-size:11px;color:var(--green);">${enhBid>0?'$'+enhBid:'—'}</td>
      <td style="padding:9px 12px;"><span style="font-family:var(--font-m);font-size:9px;font-weight:700;padding:3px 8px;border-radius:3px;background:${ac}22;color:${ac};border:1px solid ${ac}44;">${d.rpAction}</span></td>
    </tr>`;
  }).join('');
}

/* ── SUB ID TAB ── */
function renderSubIDTab(){
  const t=RP_SEASONS[activeRPSeason];
  document.getElementById('subid-cards').innerHTML=SUBID_DATA.map(si=>{
    const qiC=si.qi>=1.05?'var(--green)':si.qi>=0.95?'var(--amber)':'var(--red)';
    const crOk=si.cr>=t.cr,gpthOk=si.gpth>=90,effOk=si.eff>=t.eff,rdeOk=si.rde<=t.rde,age75Ok=si.age75<=t.age75;
    let pts=[crOk?2:si.cr>=t.cr-2?1:0,gpthOk?2:si.gpth>=70?1:0,effOk?2:si.eff>=t.eff-8?1:0,rdeOk?2:si.rde<=t.rde+3?1:0,age75Ok?2:si.age75<=t.age75+5?1:0].reduce((a,b)=>a+b,0);
    const grade=pts>=9?'A':pts>=7?'B':pts>=4?'C':'D';
    const gc=mpqsBadgeColor(grade);
    return `<div class="panel"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;"><div><div style="font-family:var(--font-num);font-size:15px;font-weight:400;color:var(--text);">${si.id}</div><div style="font-size:10px;color:var(--text-3);margin-top:2px;">${si.angle}</div></div><span style="font-family:var(--font-m);font-size:10px;font-weight:700;padding:3px 8px;border-radius:3px;background:${gc}22;color:${gc};">${grade}</span></div>
      <div style="display:flex;flex-direction:column;gap:5px;margin-top:10px;padding-top:10px;border-top:1px solid var(--edge);">
        ${[['Conv. Rate',si.cr+'%',crOk?'var(--green)':'var(--amber)'],['GP/TH','$'+si.gpth,gpthOk?'var(--green)':'var(--amber)'],['Effectuation',si.eff+'%',effOk?'var(--green)':'var(--amber)'],['RDE',si.rde+'%',rdeOk?'var(--green)':'var(--red)'],['Age 75+',si.age75+'%',age75Ok?'var(--text-2)':'var(--red)']].map(([l,v,c])=>`<div style="display:flex;justify-content:space-between;"><span style="font-size:10px;color:var(--text-3);font-family:var(--font-m);">${l}</span><span style="font-size:10px;font-family:var(--font-m);font-weight:600;color:${c};">${v}</span></div>`).join('')}
        <div style="display:flex;justify-content:space-between;margin-top:5px;padding-top:5px;border-top:1px solid var(--edge);"><span style="font-size:10px;color:var(--text-3);font-family:var(--font-m);">Bid QI Index</span><span style="font-size:12px;font-family:var(--font-num);font-weight:400;color:${qiC};">×${si.qi.toFixed(2)}</span></div>
      </div></div>`;
  }).join('');
  document.getElementById('subid-targets').innerHTML=Object.entries(RP_SEASONS).map(([s,t])=>`
    <div class="panel" style="flex:1;min-width:200px;"><div style="font-family:var(--font-m);font-size:9px;color:var(--cyan);font-weight:700;letter-spacing:1.5px;margin-bottom:10px;">${s} — ${t.label.split(' — ')[1]}</div>
      ${[['Target CPA','$'+t.cpa],['CR Target',t.cr+'%'],['Effectuation',t.eff+'%'],['Max RDE',t.rde+'%'],['Age 75+ Max',t.age75+'%'],['LTV','$'+t.ltv]].map(([l,v])=>`<div style="display:flex;justify-content:space-between;margin-bottom:4px;"><span style="font-size:10px;color:var(--text-3);">${l}</span><span style="font-size:10px;font-family:var(--font-m);color:var(--text-2);">${v}</span></div>`).join('')}
    </div>`).join('');
}

/* ── ALERTS ── */
const ALERT_THRESHOLDS={cpaOverPct:0.20,age75Max:15,effMin:0.68,rdeMax:12,dupRateMax:0.05};
let alertsOpen=false;
function toggleAlerts(){alertsOpen=!alertsOpen;document.getElementById('alertsBody').classList.toggle('open',alertsOpen);document.getElementById('alertsChevron').classList.toggle('open',alertsOpen);}
function renderAlerts(){
  const t=SEASON_META[globalSeason],alerts=[];
  RP_NOTION_DATA.filter(d=>d.Season===globalSeason).forEach(d=>{
    if(d.actualCpa&&d.actualCpa>t.cpa*(1+ALERT_THRESHOLDS.cpaOverPct))alerts.push({type:'critical',pub:d.Publisher,msg:`CPA $${d.actualCpa} is $${Math.round(d.actualCpa-t.cpa)} above the $${t.cpa} target`,metric:`+$${Math.round(d.actualCpa-t.cpa)} over`,cat:'CPA'});
    if(d.age75>ALERT_THRESHOLDS.age75Max)alerts.push({type:d.age75>30?'critical':'warning',pub:d.Publisher,msg:`Age 75+ at ${d.age75}% — exceeds ${ALERT_THRESHOLDS.age75Max}% threshold`,metric:`${d.age75}% vs 15%`,cat:'Compliance'});
    if(d.eff&&d.eff<ALERT_THRESHOLDS.effMin*100)alerts.push({type:'warning',pub:d.Publisher,msg:`Effectuation ${d.eff}% below ${Math.round(ALERT_THRESHOLDS.effMin*100)}% minimum`,metric:`${d.eff}% eff`,cat:'Effectuation'});
    if(d.rde>t.rde)alerts.push({type:d.rde>t.rde*1.3?'critical':'warning',pub:d.Publisher,msg:`RDE ${d.rde}% exceeds ${t.rde}% ${globalSeason} maximum`,metric:`${d.rde}% RDE`,cat:'RDE'});
    if(d.actionBand==='Pullback')alerts.push({type:'critical',pub:d.Publisher,msg:`Action band PULLBACK — immediate bid review required`,metric:'Pullback',cat:'Action Band'});
  });
  RP_SCORECARD_DATA.forEach(d=>{
    if(d.age75&&d.age75>0.40&&!alerts.find(a=>a.pub===d.pub&&a.cat==='Compliance'))alerts.push({type:'critical',pub:d.pub,msg:`Age 75+ at ${(d.age75*100).toFixed(1)}% — critical compliance risk`,metric:`${(d.age75*100).toFixed(1)}%`,cat:'Compliance'});
    if(d.eff&&d.eff<0.65&&!alerts.find(a=>a.pub===d.pub&&a.cat==='Effectuation'))alerts.push({type:'warning',pub:d.pub,msg:`Effectuation ${(d.eff*100).toFixed(1)}% well below 72%`,metric:`${(d.eff*100).toFixed(1)}% eff`,cat:'Effectuation'});
    if(d.dupRate&&d.dupRate>ALERT_THRESHOLDS.dupRateMax)alerts.push({type:'warning',pub:d.pub,msg:`Duplicate rate ${(d.dupRate*100).toFixed(1)}% exceeds 5%`,metric:`${(d.dupRate*100).toFixed(1)}% dup`,cat:'Duplicates'});
  });
  const seen=new Set();
  const deduped=alerts.filter(a=>{const k=a.pub+'|'+a.cat;if(seen.has(k))return false;seen.add(k);return true;});
  const crits=deduped.filter(a=>a.type==='critical'),warns=deduped.filter(a=>a.type==='warning');
  const hdr=document.getElementById('alertsHeader'),dots=document.getElementById('alertsDots'),sum=document.getElementById('alertsSummaryText'),bdg=document.getElementById('alertsBadges'),body=document.getElementById('alertsBody');
  if(!deduped.length){hdr.className='alerts-header all-clear';dots.innerHTML=`<div class="alerts-dot" style="background:var(--green);box-shadow:0 0 6px var(--green);"></div>`;sum.innerHTML=`<span style="color:var(--green);font-weight:600;">All clear</span> <span style="color:var(--text-3);">— all publishers within thresholds for ${globalSeason}</span>`;bdg.innerHTML=`<span class="alerts-badge clear">✓ No alerts</span>`;body.innerHTML='';return;}
  hdr.className=crits.length?'alerts-header has-critical':'alerts-header has-warning';
  dots.innerHTML=[...crits.slice(0,5).map(()=>`<div class="alerts-dot" style="background:var(--red);box-shadow:0 0 5px var(--red);"></div>`),...warns.slice(0,5).map(()=>`<div class="alerts-dot" style="background:var(--amber);box-shadow:0 0 5px var(--amber);"></div>`)].join('');
  const topPub=crits[0]?.pub||warns[0]?.pub;
  sum.innerHTML=crits.length?`<span style="color:var(--red);font-weight:600;">${crits.length} critical</span><span style="color:var(--text-3);"> · ${warns.length} warning · lead: </span><span style="color:var(--text-2);">${topPub}</span>`:`<span style="color:var(--amber);font-weight:600;">${warns.length} warnings</span><span style="color:var(--text-3);"> · lead: </span><span style="color:var(--text-2);">${topPub}</span>`;
  bdg.innerHTML=[crits.length?`<span class="alerts-badge critical">${crits.length} Critical</span>`:'',warns.length?`<span class="alerts-badge warning">${warns.length} Warning</span>`:''].join('');
  const cats=[...new Set(deduped.map(a=>a.cat))];
  body.innerHTML=`<div style="margin-bottom:8px;display:flex;gap:8px;flex-wrap:wrap;">${cats.map(cat=>{const cnt=deduped.filter(a=>a.cat===cat).length;const hc=deduped.some(a=>a.cat===cat&&a.type==='critical');return `<span style="font-family:var(--font-m);font-size:9px;padding:3px 9px;border-radius:20px;background:var(--surface2);border:1px solid var(--edge2);color:${hc?'var(--red)':'var(--amber)'};">${cat} · ${cnt}</span>`;}).join('')}</div>${crits.length?buildAlertGroup('critical',crits):''}${warns.length?buildAlertGroup('warning',warns):''}`;
}
function buildAlertGroup(type,alerts){
  return `<div class="alert-group"><div class="alert-group-label ${type}">${type==='critical'?'🔴 Critical':'🟡 Warning'} · ${alerts.length} publisher${alerts.length>1?'s':''}</div><div class="alert-cards ${type}">${alerts.map(a=>`<div class="alert-card"><div class="alert-card-pub">${a.pub}</div><div class="alert-card-msg">${a.msg}</div><span class="alert-card-metric ${type}">${a.metric}</span></div>`).join('')}</div></div>`;
}

/* ── TREND CHARTS ── */
let trendCharts={};
function renderTrendCharts(entries){
  if(!entries||entries.length<1)entries=[{reportName:'Period 1',mpqsScore:null,qmScore:null,mpScore:null,date:'—'}];
  const labels=entries.map(e=>e.reportName||e.date||'Period');
  const t=SEASON_META[globalSeason];
  const chartOpts={responsive:true,maintainAspectRatio:false,plugins:{legend:{display:true,labels:{color:'rgba(240,244,255,0.5)',font:{size:9,family:'Space Mono'},boxWidth:10,padding:14}}},scales:{x:{ticks:{color:'rgba(240,244,255,0.35)',font:{size:9,family:'Space Mono'},maxRotation:30},grid:{color:'rgba(255,255,255,0.04)'}},y:{ticks:{color:'rgba(240,244,255,0.35)',font:{size:9,family:'Space Mono'}},grid:{color:'rgba(255,255,255,0.04)'},min:0}}};
  if(trendCharts.mpqs)trendCharts.mpqs.destroy();
  trendCharts.mpqs=new Chart(document.getElementById('trendMpqsChart'),{type:'line',data:{labels,datasets:[{label:'MPQS Score',data:entries.map(e=>e.mpqsScore||null),borderColor:'rgba(0,230,118,0.8)',backgroundColor:'rgba(0,230,118,0.08)',tension:0.3,pointBackgroundColor:'rgba(0,230,118,0.9)',pointRadius:4,fill:true}]},options:chartOpts});
  if(trendCharts.qmmp)trendCharts.qmmp.destroy();
  trendCharts.qmmp=new Chart(document.getElementById('trendQmMpChart'),{type:'line',data:{labels,datasets:[{label:'QM Score',data:entries.map(e=>e.qmScore||null),borderColor:'rgba(0,229,255,0.8)',backgroundColor:'rgba(0,229,255,0.06)',tension:0.3,pointBackgroundColor:'rgba(0,229,255,0.9)',pointRadius:4},{label:'MP Score',data:entries.map(e=>e.mpScore||null),borderColor:'rgba(179,136,255,0.8)',backgroundColor:'rgba(179,136,255,0.06)',tension:0.3,pointBackgroundColor:'rgba(179,136,255,0.9)',pointRadius:4}]},options:chartOpts});
  if(trendCharts.cpa)trendCharts.cpa.destroy();
  trendCharts.cpa=new Chart(document.getElementById('trendCpaChart'),{type:'line',data:{labels,datasets:[{label:'CPA',data:entries.map(e=>e.cpa||null),borderColor:'rgba(255,181,71,0.8)',backgroundColor:'rgba(255,181,71,0.08)',tension:0.3,pointBackgroundColor:'rgba(255,181,71,0.9)',pointRadius:4,fill:true},{label:'Target $'+t.cpa,data:entries.map(()=>t.cpa),borderColor:'rgba(255,255,255,0.15)',borderDash:[4,4],pointRadius:0}]},options:{...chartOpts,scales:{...chartOpts.scales,y:{...chartOpts.scales.y,ticks:{...chartOpts.scales.y.ticks,callback:v=>'$'+v}}}}});
  const latest=entries[entries.length-1];
  if(trendCharts.dist)trendCharts.dist.destroy();
  trendCharts.dist=new Chart(document.getElementById('trendDistChart'),{type:'radar',data:{labels:['MPQS','QM Score','MP Score'],datasets:[{label:'Latest Period',data:[latest.mpqsScore||0,latest.qmScore||0,latest.mpScore||0],borderColor:'rgba(0,229,255,0.7)',backgroundColor:'rgba(0,229,255,0.08)',pointBackgroundColor:'rgba(0,229,255,0.9)',pointRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'rgba(240,244,255,0.5)',font:{size:9,family:'Space Mono'}}}},scales:{r:{min:0,max:100,ticks:{color:'rgba(240,244,255,0.3)',font:{size:8},backdropColor:'transparent'},grid:{color:'rgba(255,255,255,0.06)'},pointLabels:{color:'rgba(240,244,255,0.5)',font:{size:10}}}}}});
}

/* ── SNAPSHOT MODE ── */
let snapshotModeOn=false;
function toggleSnapshotMode(){
  snapshotModeOn=!snapshotModeOn;
  document.body.classList.toggle('snapshot-mode',snapshotModeOn);
  const btn=document.getElementById('snapshotModeBtn');
  btn.classList.toggle('active',snapshotModeOn);
  btn.innerHTML=snapshotModeOn?'&#9670; <span>Full View</span>':'&#9670; <span>Leadership</span>';
  const activeTab=document.querySelector('.nav-tab.active');
  if(snapshotModeOn&&activeTab&&activeTab.dataset.working!==undefined)switchTab('overview',document.querySelector('.nav-tab:first-child'));
}

/* ── EXEC SNAPSHOT ── */
function openExecSnapshot(){buildExecSnapshot();document.getElementById('execSnapshot').classList.add('open');document.body.style.overflow='hidden';}
function closeExecSnapshot(){document.getElementById('execSnapshot').classList.remove('open');document.body.style.overflow='';}
function buildExecSnapshot(){
  const t=SEASON_META[globalSeason],pubs=RP_NOTION_DATA.filter(d=>d.Season===globalSeason),active=pubs.filter(d=>d.actualCpa),now=new Date();
  const avgCpa=active.length?Math.round(active.reduce((s,d)=>s+d.actualCpa,0)/active.length):null;
  const onTarget=active.filter(d=>d.actualCpa<=t.cpa).length;
  const totalSales=RP_SCORECARD_DATA.reduce((s,d)=>s+(d.netSales||0),0);
  const effArr=RP_SCORECARD_DATA.filter(d=>d.eff);
  const avgEff=effArr.length?(effArr.reduce((s,d)=>s+d.eff,0)/effArr.length*100).toFixed(1):'—';
  const bandCounts={'Scale Eligible':pubs.filter(d=>d.actionBand==='Scale Eligible').length,'Maintain':pubs.filter(d=>d.actionBand==='Maintain').length,'Monitor':pubs.filter(d=>d.actionBand==='Monitor').length,'Throttle':pubs.filter(d=>d.actionBand==='Throttle').length,'Pullback':pubs.filter(d=>d.actionBand==='Pullback').length};
  const bandColors={'Scale Eligible':'var(--green)','Maintain':'var(--cyan)','Monitor':'var(--amber)','Throttle':'rgba(255,181,71,0.6)','Pullback':'var(--red)'};
  const alertItems=buildExecAlerts(t,pubs);
  const scaleEl=RP_SCORECARD_DATA.filter(d=>d.actionBand==='Scale Eligible'),atRisk=RP_SCORECARD_DATA.filter(d=>d.status==='At Risk');
  const pubRows=active.sort((a,b)=>a.actualCpa-b.actualCpa).map(d=>{
    const cc=d.actualCpa<=t.cpa?'#00E676':d.actualCpa<=t.cpa*1.2?'#FFB547':'#FF5252';
    const sc=RP_SCORECARD_DATA.find(s=>s.pub===d.Publisher||s.pub.toLowerCase().includes(d.Publisher.split(' ')[0].toLowerCase()));
    return `<tr><td style="color:var(--text);font-weight:500;">${d.Publisher}</td><td><span style="font-family:var(--font-m);font-size:9px;font-weight:700;padding:2px 7px;border-radius:3px;background:${bandColors[d.actionBand]}22;color:${bandColors[d.actionBand]};">${d.actionBand}</span></td><td style="color:var(--text-3);">${d.MPQS}</td><td style="color:${cc};">$${d.actualCpa}</td><td style="color:var(--text-2);">${d.eff}%</td><td style="color:${d.age75>15?'var(--red)':'var(--text-2)'};">${d.age75}%</td><td style="color:var(--text-3);">${sc?Math.round(sc.netSales||0).toLocaleString():'—'}</td></tr>`;
  }).join('');
  document.getElementById('execSnapshotContent').innerHTML=`
    <div class="exec-header"><div class="exec-logo"><div class="exec-logo-mark">MM</div><div><div class="exec-title">Media Match</div><div class="exec-subtitle">CENTERFIELD HEALTH &amp; MEDICARE · EXECUTIVE SUMMARY</div></div></div>
    <div class="exec-meta"><strong>${now.toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}</strong>Season: ${globalSeason} — ${t.label.split(' — ')[1]}<br>Target CPA: $${t.cpa} · CR: ${t.cr}% · Eff: ${t.eff}%</div></div>
    <div class="exec-section"><div class="exec-section-title">Portfolio KPIs</div><div class="exec-kpi-row">
      <div class="exec-kpi cyan"><div class="exec-kpi-label">Avg Actual CPA</div><div class="exec-kpi-val" style="color:${avgCpa&&avgCpa<=t.cpa?'var(--green)':'var(--amber)'};">${avgCpa?'$'+avgCpa:'—'}</div><div class="exec-kpi-sub">Target $${t.cpa} · ${active.length} active publishers</div></div>
      <div class="exec-kpi green"><div class="exec-kpi-label">On / Under Target</div><div class="exec-kpi-val">${onTarget} <span style="font-size:14px;color:var(--text-3);">/ ${active.length}</span></div><div class="exec-kpi-sub">Publishers at or below $${t.cpa}</div></div>
      <div class="exec-kpi amber"><div class="exec-kpi-label">Total Net Sales</div><div class="exec-kpi-val">${totalSales.toLocaleString()}</div><div class="exec-kpi-sub">Sold policies across portfolio</div></div>
      <div class="exec-kpi cyan"><div class="exec-kpi-label">Avg Effectuation</div><div class="exec-kpi-val">${avgEff}<span style="font-size:14px;">%</span></div><div class="exec-kpi-sub">Target ${t.eff}% durability</div></div>
    </div></div>
    <div class="exec-section"><div class="exec-section-title">Publisher Action Bands — ${globalSeason}</div><div class="exec-action-grid">
      ${Object.entries(bandCounts).map(([band,count])=>`<div class="exec-action-card"><div class="exec-action-count" style="color:${bandColors[band]};">${count}</div><div class="exec-action-label">${band}</div></div>`).join('')}
    </div></div>
    ${alertItems.length?`<div class="exec-section"><div class="exec-section-title">Active Alerts</div>${alertItems.map(a=>`<div class="exec-alert-row ${a.type}"><strong>${a.pub}</strong> — ${a.msg}<span style="margin-left:auto;font-family:var(--font-m);font-size:9px;opacity:0.7;">${a.metric}</span></div>`).join('')}</div>`:''}
    <div class="exec-section"><div class="exec-section-title">Publisher Performance — Active ${globalSeason} Publishers</div>
      <table class="exec-pub-table"><thead><tr><th>Publisher</th><th>Action Band</th><th>MPQS</th><th>CPA</th><th>Eff%</th><th>Age 75+</th><th>Net Sales</th></tr></thead><tbody>${pubRows}</tbody></table>
    </div>
    <div class="exec-section"><div class="exec-section-title">Key Insights</div><div class="exec-two-col">
      <div class="exec-insight-box"><div class="exec-insight-title" style="color:var(--green);">↑ Scale Opportunities</div>${scaleEl.length?scaleEl.map(d=>`<div class="exec-insight-item"><span style="color:var(--green);flex-shrink:0;">+</span><span><strong style="color:var(--text);">${d.pub}</strong> — ${d.topOpp}</span></div>`).join(''):'<div class="exec-insight-item" style="color:var(--text-3);">No scale eligible publishers this period</div>'}</div>
      <div class="exec-insight-box"><div class="exec-insight-title" style="color:var(--red);">⚠ Priority Risks</div>${atRisk.length?atRisk.map(d=>`<div class="exec-insight-item"><span style="color:var(--red);flex-shrink:0;">!</span><span><strong style="color:var(--text);">${d.pub}</strong> — ${d.biggestRisk}</span></div>`).join(''):'<div class="exec-insight-item" style="color:var(--text-3);">No at-risk publishers flagged</div>'}</div>
    </div></div>
    <div class="exec-footer"><span>Media Match · Centerfield Health &amp; Medicare · ${globalSeason} ${now.getFullYear()}</span><span>Generated ${now.toLocaleString()} · Confidential — Internal Use Only</span></div>`;
}
function buildExecAlerts(t,pubs){
  const alerts=[];
  pubs.forEach(d=>{
    if(d.actualCpa&&d.actualCpa>t.cpa*1.20)alerts.push({type:'critical',pub:d.Publisher,msg:`CPA $${d.actualCpa} is $${Math.round(d.actualCpa-t.cpa)} over target`,metric:`+${Math.round((d.actualCpa/t.cpa-1)*100)}%`});
    if(d.age75>25)alerts.push({type:'critical',pub:d.Publisher,msg:`Age 75+ at ${d.age75}% — compliance risk`,metric:`${d.age75}% vs 15%`});
    if(d.actionBand==='Pullback')alerts.push({type:'critical',pub:d.Publisher,msg:`Pullback — immediate bid review required`,metric:'Pullback'});
    if(d.rde>t.rde*1.3)alerts.push({type:'warning',pub:d.Publisher,msg:`RDE ${d.rde}% exceeds maximum`,metric:`${d.rde}% RDE`});
  });
  const seen=new Set();
  return alerts.filter(a=>{const k=a.pub+'|'+a.msg.slice(0,20);if(seen.has(k))return false;seen.add(k);return true;}).sort((a,b)=>(a.type==='critical'?0:1)-(b.type==='critical'?0:1));
}

async function loadNotionData(){
  const btn=document.getElementById('refreshBtn');
  const lbl=document.getElementById('refreshLabel');
  const dot=document.getElementById('syncDot');
  const syncLbl=document.getElementById('syncLabel');
  btn.classList.add('loading');lbl.textContent='Syncing...';dot.className='sync-dot stale';syncLbl.textContent='Syncing...';

  // Load publisher scorecards from Notion via Claude API
  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:4000,system:'Return ONLY a raw JSON array. No markdown, no explanation.',messages:[{role:'user',content:'Use the notion-query-data-sources tool to query database collection://337cb15b-3901-80f2-8500-000ba6ddf12e with SQL: SELECT "Report", "date:Date:start", "Action Band", "CPA", "Conv Rate (CR%)", "Effectuation %", "Duplicate Rate %", "Headline Metric", "Biggest Risk", "Top Opportunity", "Status" FROM "collection://337cb15b-3901-80f2-8500-000ba6ddf12e" ORDER BY "date:Date:start" DESC LIMIT 30. Return ONLY the JSON array.'}],mcp_servers:[{type:'url',url:'https://mcp.notion.com/mcp',name:'notion-mcp'}]})});
    const data=await res.json();
    let txt='';
    if(data.content){for(const b of data.content){if(b.type==='text')txt+=b.text;else if(b.type==='mcp_tool_result'&&Array.isArray(b.content)){for(const c of b.content){if(c.text)txt+=c.text;}}}}
    const m=txt.match(/\[[\s\S]*\]/);
    if(m){const recs=JSON.parse(m[0]);if(recs&&recs.length){renderCards(recs);renderDist(recs);}}
    else{renderCards(FALLBACK);renderDist(FALLBACK);}
  }catch(e){renderCards(FALLBACK);renderDist(FALLBACK);}

  // Load Joanie AI Activity + Scorecards from Vercel API
  try{
    const res = await fetch('https://joanie-dashboard-qbta.vercel.app/api/notion');
    if(res.ok){
      const data = await res.json();
      if(!data.error){
        renderAIActivity(data);
        renderScorecards(data);
        renderSeasons(data);
      }
    }
  }catch(e){console.log('Joanie API unavailable',e);}

  // Load Joanie Reporting from Notion via Claude API
  try{
    const res = await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
      model:'claude-sonnet-4-20250514',
      max_tokens:4000,
      system:'Return ONLY a raw JSON array. No markdown, no explanation.',
      messages:[{role:'user',content:'Use the notion-query-data-sources tool to query database 33ecb15b390180c1ba65cc3887668019. Return all entries as a JSON array with these fields for each row: reportName (title field), date, periodType, season, status, headlineMetric, biggestRisk, topOpportunity, mpqsScore (from MPQS Score rollup), qmScore (from QM Score rollup), mpScore (from MP Score rollup). Return ONLY the JSON array.'}],
      mcp_servers:[{type:'url',url:'https://mcp.notion.com/mcp',name:'notion-mcp'}]
    })});
    const data = await res.json();
    let txt = '';
    if(data.content){for(const b of data.content){if(b.type==='text')txt+=b.text;else if(b.type==='mcp_tool_result'&&Array.isArray(b.content)){for(const c of b.content){if(c.text)txt+=c.text;}}}}
    const m = txt.match(/\[[\s\S]*\]/);
    if(m){ const recs = JSON.parse(m[0]); if(recs) renderReporting({reportingEntries: recs}); }
  }catch(e){console.log('Joanie Reporting unavailable',e);}

  const now=new Date();
  dot.className='sync-dot';
  syncLbl.textContent='Synced '+now.toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'});
  btn.classList.remove('loading');
  lbl.textContent='Sync Notion';
  resetCountdown();
}

/* ── AUTO-REFRESH COUNTDOWN ──────────────────────────────────────── */
let countdown = 60;
let countdownTimer;
function resetCountdown(){
  clearInterval(countdownTimer);
  countdown = 60;
  countdownTimer = setInterval(()=>{
    countdown--;
    const el = document.getElementById('countdown');
    if(el) el.textContent = `Next refresh in ${countdown}s`;
    if(countdown <= 0){ loadNotionData(); }
  }, 1000);
}

/* ── INIT ────────────────────────────────────────────────────────── */
window.addEventListener('DOMContentLoaded',()=>{
  buildRevChart();
  buildRoutePie();
  buildCallVolChart('callVolChart');
  buildFunnel('funnelEl');
  buildCpaChart();
  buildClientTable();
  buildRpcChart();
  buildOverflowChart();
  buildMarginChart();
  buildAgents();
  buildCallVolChart('callVolChart2');
  buildFunnel('funnelEl2');
  renderRPTab();
  renderSubIDTab();
  renderDispositionsTab();
  renderAlerts();
  renderTrendCharts([]);
  loadNotionData();
});
</script>
<!-- EXEC SNAPSHOT OVERLAY -->
<div id="execSnapshot">
  <button class="exec-print" onclick="window.print()">&#8682; Print / Save PDF</button>
  <button class="exec-close" onclick="closeExecSnapshot()">✕ Close</button>
  <div id="execSnapshotContent"></div>
</div>

</body>
</html>
