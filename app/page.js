'use client'

export default function Home() {
  return (
    <iframe
      srcDoc={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Property Title Intelligence System</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
:root{
--bg:#f2f2f7;--bg2:#ffffff;--bg3:#f2f2f7;--bg4:#e5e5ea;
--accent:#007aff;--accent2:#0051a8;--accent-dim:#b4d0f0;
--text:#1c1c1e;--text2:#3a3a3c;--text3:#8e8e93;
--green:#34c759;--yellow:#ffcc00;--orange:#ff9500;--red:#ff3b30;
--border:#d1d1d6;--radius:12px;
}
html{height:100%}
body{min-height:100%;font-family:-apple-system,BlinkMacSystemFont,'SF Pro Text','SF Pro Display','Helvetica Neue',sans-serif;background:var(--bg);color:var(--text);font-size:15px;line-height:1.5;overflow-x:hidden;-webkit-font-smoothing:antialiased}

/* ===== RADIO TAB HACK ===== */
input[name="tab"]{display:none}
input[name="subtab-flags"],input[name="subtab-strat"]{display:none}

.app-wrap{display:flex;flex-direction:column;min-height:100%;max-width:600px;margin:0 auto}
header{padding:16px 16px 12px;background:var(--bg);text-align:center}
header h1{font-size:20px;color:var(--text);letter-spacing:-0.3px;font-weight:700}
header p{font-size:12px;color:var(--text3);margin-top:2px;font-weight:400}

.tab-content{padding:16px 16px 20px;-webkit-overflow-scrolling:touch;background:var(--bg)}
.tab-panel{display:none}

/* Main tab switching */
#tab1:checked ~ .app-wrap .tab-content #panel-tip{display:block}
#tab2:checked ~ .app-wrap .tab-content #panel-glossary{display:block}
#tab3:checked ~ .app-wrap .tab-content #panel-flags{display:block}
#tab4:checked ~ .app-wrap .tab-content #panel-strategy{display:block}
#tab5:checked ~ .app-wrap .tab-content #panel-tools{display:block}

/* Nav label styling */
nav{display:flex;background:rgba(249,249,249,0.94);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-top:0.5px solid rgba(0,0,0,0.12);padding:4px 0 env(safe-area-inset-bottom,6px)}
nav label{flex:1;background:none;border:none;color:var(--text3);font-size:10px;padding:4px 2px 2px;display:flex;flex-direction:column;align-items:center;gap:2px;cursor:pointer;transition:color .2s;text-align:center;-webkit-tap-highlight-color:transparent;user-select:none;font-weight:500}
nav label .icon{font-size:22px;display:block}

/* Active tab nav highlighting */
#tab1:checked ~ .app-wrap nav label[for="tab1"]{color:var(--accent)}
#tab2:checked ~ .app-wrap nav label[for="tab2"]{color:var(--accent)}
#tab3:checked ~ .app-wrap nav label[for="tab3"]{color:var(--accent)}
#tab4:checked ~ .app-wrap nav label[for="tab4"]{color:var(--accent)}
#tab5:checked ~ .app-wrap nav label[for="tab5"]{color:var(--accent)}

/* ===== INPUTS ===== */
input[type="text"],input[type="tel"],input[type="email"],input[type="url"],textarea{
width:100%;background:var(--bg2);border:none;color:var(--text);padding:11px 14px;border-radius:10px;font-size:16px;font-family:inherit;outline:none;transition:box-shadow .2s}
input[type="text"]:focus,input[type="tel"]:focus,input[type="email"]:focus,input[type="url"]:focus,textarea:focus{box-shadow:0 0 0 3px rgba(0,122,255,0.3)}
textarea{resize:vertical;min-height:60px}
.field-label{display:block;font-size:13px;color:var(--text3);margin-bottom:5px;font-weight:500}
.field{margin-bottom:14px}

/* ===== CHECKBOXES ===== */
.check-item{display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:0.5px solid rgba(0,0,0,0.08)}
.check-item:last-child{border-bottom:none}
.check-item input[type="checkbox"]{display:none}
.check-item .check-box{width:22px;height:22px;min-width:22px;border:2px solid var(--border);border-radius:6px;display:flex;align-items:center;justify-content:center;margin-top:1px;cursor:pointer;transition:all .2s;background:transparent}
.check-item input[type="checkbox"]:checked + .check-box{background:var(--accent);border-color:var(--accent)}
.check-item input[type="checkbox"]:checked + .check-box::after{content:"";display:block;width:5px;height:10px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);margin-top:-2px}
.check-item .check-text{font-size:14px;line-height:1.45;cursor:pointer;color:var(--text2)}
.check-item input[type="checkbox"]:checked ~ .check-text{color:var(--text3);text-decoration:line-through}

/* ===== DETAILS/SUMMARY CARDS ===== */
details{background:var(--bg2);border:none;border-radius:var(--radius);margin-bottom:8px;overflow:hidden;box-shadow:0 0.5px 1px rgba(0,0,0,0.04),0 1px 3px rgba(0,0,0,0.04)}
details > summary{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;cursor:pointer;user-select:none;list-style:none;-webkit-tap-highlight-color:transparent}
details > summary::-webkit-details-marker{display:none}
details > summary::marker{display:none;content:""}
details > summary h3{font-size:15px;color:var(--text);display:flex;align-items:center;gap:10px;margin:0;font-weight:600;letter-spacing:-0.2px}
details > summary .arrow{color:var(--text3);font-size:12px;transition:transform .3s}
details[open] > summary .arrow{transform:rotate(180deg)}
details[open] > summary{border-bottom:0.5px solid rgba(0,0,0,0.06)}
details .card-body{padding:4px 16px 16px}

/* Step number badges */
.step-num{background:var(--accent);color:#fff;width:26px;height:26px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}

/* ===== SECTION HEADERS ===== */
.section-title{font-size:20px;color:var(--text);margin:20px 0 12px;padding-bottom:0;border-bottom:none;font-weight:700;letter-spacing:-0.3px}
.section-title:first-child{margin-top:4px}

/* ===== GLOSSARY ===== */
.glossary-item{background:var(--bg2);border:none;border-radius:var(--radius);margin-bottom:6px;overflow:hidden;box-shadow:0 0.5px 1px rgba(0,0,0,0.04),0 1px 3px rgba(0,0,0,0.04)}
.glossary-item > summary{padding:12px 16px;cursor:pointer;font-weight:600;font-size:15px;display:flex;justify-content:space-between;align-items:center;list-style:none;-webkit-tap-highlight-color:transparent;user-select:none;color:var(--text);letter-spacing:-0.2px}
.glossary-item > summary::-webkit-details-marker{display:none}
.glossary-item > summary::marker{display:none;content:""}
.glossary-item > summary .arrow{color:var(--text3);font-size:11px;transition:transform .3s}
.glossary-item[open] > summary .arrow{transform:rotate(180deg)}
.glossary-item[open] > summary{border-bottom:0.5px solid rgba(0,0,0,0.06)}
.glossary-def{padding:8px 16px 14px;font-size:14px;color:var(--text2);line-height:1.55}
.glossary-def strong{color:var(--accent);font-size:13px;display:block;margin-top:10px;font-weight:600}

/* ===== SEVERITY BADGES ===== */
.sev{display:inline-block;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600}
.sev-minor{background:#d1f5d3;color:#1b7a24}
.sev-low{background:#d1f5d3;color:#1b7a24}
.sev-moderate{background:#fff3cd;color:#856404}
.sev-severe{background:#ffe0cc;color:#9a3412}
.sev-critical{background:#fecdd3;color:#b91c1c}

/* ===== MATRIX TABLE ===== */
.matrix{width:100%;border-collapse:collapse;margin-bottom:16px;background:var(--bg2);border-radius:var(--radius);overflow:hidden;box-shadow:0 0.5px 1px rgba(0,0,0,0.04),0 1px 3px rgba(0,0,0,0.04)}
.matrix th{text-align:left;font-size:11px;color:var(--text3);padding:8px 10px;border-bottom:0.5px solid rgba(0,0,0,0.08);font-weight:600;text-transform:uppercase;letter-spacing:0.3px}
.matrix td{font-size:13px;padding:10px;border-bottom:0.5px solid rgba(0,0,0,0.05);vertical-align:middle;color:var(--text2)}
.matrix tr:last-child td{border-bottom:none}

/* ===== RED FLAG PATTERNS ===== */
.pattern-card{background:var(--bg2);border-left:3px solid var(--red);border-radius:0 var(--radius) var(--radius) 0;padding:14px 16px;margin-bottom:10px;box-shadow:0 0.5px 1px rgba(0,0,0,0.04),0 1px 3px rgba(0,0,0,0.04)}
.pattern-card h4{color:var(--red);font-size:15px;margin-bottom:6px;font-weight:700;letter-spacing:-0.2px}
.pattern-card p{font-size:14px;color:var(--text2);margin-bottom:6px}
.pattern-card ul{padding-left:18px;font-size:14px;color:var(--text2)}
.pattern-card ul li{margin-bottom:4px}

/* ===== STRATEGY CARDS ===== */
.strat-card{background:var(--bg2);border:none;border-radius:var(--radius);margin-bottom:8px;overflow:hidden;box-shadow:0 0.5px 1px rgba(0,0,0,0.04),0 1px 3px rgba(0,0,0,0.04)}
.strat-card > summary{padding:14px 16px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;list-style:none;-webkit-tap-highlight-color:transparent;user-select:none}
.strat-card > summary::-webkit-details-marker{display:none}
.strat-card > summary::marker{display:none;content:""}
.strat-card > summary h4{font-size:15px;color:var(--text);margin:0;font-weight:600;letter-spacing:-0.2px}
.strat-card > summary .arrow{color:var(--text3);font-size:11px;transition:transform .3s}
.strat-card[open] > summary .arrow{transform:rotate(180deg)}
.strat-card[open] > summary{border-bottom:0.5px solid rgba(0,0,0,0.06)}
.strat-body{padding:8px 16px 16px}
.strat-body .meta{font-size:12px;color:var(--accent);margin-bottom:4px;font-weight:600;text-transform:uppercase;letter-spacing:0.3px}
.strat-body .meta b{color:var(--accent)}
.strat-body p{font-size:14px;color:var(--text2);margin-bottom:12px;line-height:1.5}

/* ===== COST TABLE ===== */
.cost-row{background:var(--bg2);border:none;border-radius:var(--radius);padding:14px 16px;margin-bottom:8px;box-shadow:0 0.5px 1px rgba(0,0,0,0.04),0 1px 3px rgba(0,0,0,0.04)}
.cost-row .defect{font-weight:600;font-size:15px;margin-bottom:6px;color:var(--text);letter-spacing:-0.2px}
.cost-row .costs{display:flex;gap:20px;font-size:13px;color:var(--text3)}
.cost-row .costs span{display:flex;flex-direction:column}
.cost-row .costs span b{color:var(--accent);font-size:14px}

/* ===== TOOL ITEMS ===== */
.tool-item{background:var(--bg2);border:none;border-radius:var(--radius);padding:14px 16px;margin-bottom:8px;box-shadow:0 0.5px 1px rgba(0,0,0,0.04),0 1px 3px rgba(0,0,0,0.04)}
.tool-item h4{font-size:15px;color:var(--text);margin-bottom:4px;display:flex;align-items:center;gap:8px;font-weight:600;letter-spacing:-0.2px}
.tool-item h4 .badge{font-size:10px;padding:2px 8px;border-radius:20px;background:#d1f5d3;color:#1b7a24;font-weight:600}
.tool-item h4 .badge.paid{background:#fff3cd;color:#856404}
.tool-item p{font-size:13px;color:var(--text2);line-height:1.45}
.tool-item a{color:var(--accent);font-size:13px;text-decoration:none;display:inline-block;margin-top:6px;font-weight:500}

/* ===== SUB-TAB HACK (Red Flags) ===== */
.sub-panel-flags{display:none}
#subtab-flags-checklist:checked ~ .app-wrap .tab-content #panel-flags .sub-panel-flags.sp-checklist{display:block}
#subtab-flags-matrix:checked ~ .app-wrap .tab-content #panel-flags .sub-panel-flags.sp-matrix{display:block}
#subtab-flags-patterns:checked ~ .app-wrap .tab-content #panel-flags .sub-panel-flags.sp-patterns{display:block}

.sub-tabs{display:flex;gap:0;margin-bottom:16px;background:rgba(0,0,0,0.05);border-radius:9px;padding:2px;overflow:hidden}
.sub-tabs label{flex:1;padding:7px 12px;border-radius:7px;font-size:13px;font-weight:500;background:transparent;color:var(--text3);border:none;cursor:pointer;white-space:nowrap;transition:all .2s;-webkit-tap-highlight-color:transparent;user-select:none;text-align:center}

#subtab-flags-checklist:checked ~ .app-wrap .tab-content #panel-flags .sub-tabs label[for="subtab-flags-checklist"]{background:#fff;color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,0.08)}
#subtab-flags-matrix:checked ~ .app-wrap .tab-content #panel-flags .sub-tabs label[for="subtab-flags-matrix"]{background:#fff;color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,0.08)}
#subtab-flags-patterns:checked ~ .app-wrap .tab-content #panel-flags .sub-tabs label[for="subtab-flags-patterns"]{background:#fff;color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,0.08)}

/* ===== SUB-TAB HACK (Strategy) ===== */
.sub-panel-strat{display:none}
#subtab-strat-signals:checked ~ .app-wrap .tab-content #panel-strategy .sub-panel-strat.sp-signals{display:block}
#subtab-strat-costs:checked ~ .app-wrap .tab-content #panel-strategy .sub-panel-strat.sp-costs{display:block}

#subtab-strat-signals:checked ~ .app-wrap .tab-content #panel-strategy .sub-tabs label[for="subtab-strat-signals"]{background:#fff;color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,0.08)}
#subtab-strat-costs:checked ~ .app-wrap .tab-content #panel-strategy .sub-tabs label[for="subtab-strat-costs"]{background:#fff;color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,0.08)}

/* ===== SCROLLBAR ===== */
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--bg4);border-radius:4px}

/* ===== NESTED DETAILS inside Red Flags ===== */
.pattern-details{background:var(--bg3);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:10px;border-left:3px solid var(--red)}
.pattern-details > summary{padding:12px 14px;cursor:pointer;list-style:none;-webkit-tap-highlight-color:transparent;user-select:none;display:flex;justify-content:space-between;align-items:center}
.pattern-details > summary::-webkit-details-marker{display:none}
.pattern-details > summary::marker{display:none;content:""}
.pattern-details > summary h4{color:var(--red);font-size:14px;margin:0}
.pattern-details > summary .arrow{color:var(--text3);font-size:11px;transition:transform .3s}
.pattern-details[open] > summary .arrow{transform:rotate(180deg)}
.pattern-details .pattern-body{padding:0 14px 14px}
.pattern-details .pattern-body p{font-size:13px;color:var(--text2);margin-bottom:6px}
.pattern-details .pattern-body ul{padding-left:18px;font-size:13px;color:var(--text2)}
.pattern-details .pattern-body ul li{margin-bottom:3px}
.pattern-details .pattern-body .strategy-label{font-size:12px;color:var(--gold);font-weight:600;margin-top:8px;margin-bottom:4px}
</style>
</head>
<body>

<!-- ===== MAIN TAB RADIOS ===== -->
<input type="radio" name="tab" id="tab1" checked>
<input type="radio" name="tab" id="tab2">
<input type="radio" name="tab" id="tab3">
<input type="radio" name="tab" id="tab4">
<input type="radio" name="tab" id="tab5">

<!-- ===== SUB-TAB RADIOS (Red Flags) ===== -->
<input type="radio" name="subtab-flags" id="subtab-flags-checklist" checked>
<input type="radio" name="subtab-flags" id="subtab-flags-matrix">
<input type="radio" name="subtab-flags" id="subtab-flags-patterns">

<!-- ===== SUB-TAB RADIOS (Strategy) ===== -->
<input type="radio" name="subtab-strat" id="subtab-strat-signals" checked>
<input type="radio" name="subtab-strat" id="subtab-strat-costs">

<div class="app-wrap">
<header>
<h1>Property Title Intelligence System</h1>
</header>

<div class="tab-content">

<!-- ================================================================ -->
<!-- TAB 1: TIP BUILDER -->
<!-- ================================================================ -->
<div id="panel-tip" class="tab-panel">

<!-- Step 1 -->
<details>
<summary>
<h3><span class="step-num">1</span> Confirm Address</h3>
<span class="arrow">&#9660;</span>
</summary>
<div class="card-body">
<div class="field"><span class="field-label">Property Address</span><input type="text" placeholder="123 Main St"></div>
<div class="field"><span class="field-label">Directionals (N/S/E/W)</span><input type="text" placeholder="e.g., N Main St vs S Main St"></div>
<div class="field"><span class="field-label">Unit / Apt / Suite</span><input type="text" placeholder="Unit 2B"></div>
<div class="field"><span class="field-label">Cross Streets</span><input type="text" placeholder="Between Oak Ave and Elm St"></div>
<div class="field"><span class="field-label">Notes</span><textarea placeholder="Additional notes..."></textarea></div>
<div style="margin-top:8px">
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Verified full street address with correct spelling</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked directionals (N/S/E/W can change the property entirely)</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Confirmed parcel matches physical location on map</span></label>
</div>
</div>
</details>

<!-- Step 2 -->
<details>
<summary>
<h3><span class="step-num">2</span> Assessor Search</h3>
<span class="arrow">&#9660;</span>
</summary>
<div class="card-body">
<div class="field"><span class="field-label">Owner Name(s)</span><input type="text" placeholder="John D. Smith, Jane M. Smith"></div>
<div class="field"><span class="field-label">Parcel Number</span><input type="text" placeholder="12-345-678-90"></div>
<div class="field"><span class="field-label">Legal Description</span><textarea placeholder="Lot 5, Block 3, Sunny Acres Subdivision..."></textarea></div>
<div class="field"><span class="field-label">Mailing Address</span><input type="text" placeholder="If different from property address"></div>
<div class="field"><span class="field-label">Assessed Value</span><input type="text" placeholder="$125,000"></div>
<div class="field"><span class="field-label">Notes</span><textarea placeholder="Additional notes..."></textarea></div>
<div style="margin-top:8px">
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked if mailing address differs from property (absentee indicator)</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Noted if multiple parcels are associated</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Looked at the assessor map for lot lines and neighbors</span></label>
</div>
</div>
</details>

<!-- Step 3 -->
<details>
<summary>
<h3><span class="step-num">3</span> Tax Collector</h3>
<span class="arrow">&#9660;</span>
</summary>
<div class="card-body">
<div class="field"><span class="field-label">Tax Status</span><input type="text" placeholder="Current / Delinquent / Tax Sale"></div>
<div class="field"><span class="field-label">Delinquency Amount</span><input type="text" placeholder="$0 or amount owed"></div>
<div class="field"><span class="field-label">Who Is Paying Taxes</span><input type="text" placeholder="Owner / Bank / Third Party / Institutional"></div>
<div class="field"><span class="field-label">Notes</span><textarea placeholder="Note any payor codes, institutional payers, or anomalies..."></textarea></div>
<div style="margin-top:8px">
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked current tax payment status</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked delinquency history (how many years?)</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Noted third-party or institutional payor codes</span></label>
</div>
</div>
</details>

<!-- Step 4 -->
<details>
<summary>
<h3><span class="step-num">4</span> Recorder of Deeds</h3>
<span class="arrow">&#9660;</span>
</summary>
<div class="card-body">
<div class="field"><span class="field-label">Current Deed Type</span><input type="text" placeholder="Warranty / Quitclaim / Special Warranty / TOD"></div>
<div class="field"><span class="field-label">Grantor (Seller)</span><input type="text" placeholder="Who transferred the property"></div>
<div class="field"><span class="field-label">Grantee (Buyer)</span><input type="text" placeholder="Who received the property"></div>
<div class="field"><span class="field-label">Recording Date</span><input type="text" placeholder="MM/DD/YYYY"></div>
<div class="field"><span class="field-label">Book / Page or Document Number</span><input type="text" placeholder="Book 1234, Page 567"></div>
<div class="field"><span class="field-label">Notes</span><textarea placeholder="Chain of title observations, marital status, vesting..."></textarea></div>
<div style="margin-top:8px">
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Searched by owner name (all spelling variations)</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Searched by legal description</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked for unreleased mortgages / deeds of trust</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Looked for quitclaim deeds within family</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked marital status on deed</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked notary blocks for errors or missing info</span></label>
</div>
</div>
</details>

<!-- Step 5 -->
<details>
<summary>
<h3><span class="step-num">5</span> Court Records</h3>
<span class="arrow">&#9660;</span>
</summary>
<div class="card-body">
<div class="field"><span class="field-label">Case Types Found</span><input type="text" placeholder="Civil, Criminal, Family, Probate..."></div>
<div class="field"><span class="field-label">Judgment Amounts</span><input type="text" placeholder="$5,000 judgment - First National Bank"></div>
<div class="field"><span class="field-label">Case Status</span><input type="text" placeholder="Active / Disposed / Pending"></div>
<div class="field"><span class="field-label">Notes</span><textarea placeholder="Details on cases, lis pendens, divorce decrees..."></textarea></div>
<div style="margin-top:8px">
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked for civil judgments against owner</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked for divorce filings</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked for probate cases</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked for criminal cases</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked for tax liens (state and federal)</span></label>
</div>
</div>
</details>

<!-- Step 6 -->
<details>
<summary>
<h3><span class="step-num">6</span> Other Liens</h3>
<span class="arrow">&#9660;</span>
</summary>
<div class="card-body">
<div class="field"><span class="field-label">PACER Results</span><input type="text" placeholder="Federal bankruptcy, federal tax liens..."></div>
<div class="field"><span class="field-label">City Liens</span><input type="text" placeholder="Code violations, water bills, demolition liens..."></div>
<div class="field"><span class="field-label">UCC Filings</span><input type="text" placeholder="Secured interests in personal property / fixtures"></div>
<div class="field"><span class="field-label">Notes</span><textarea placeholder="Additional lien research notes..."></textarea></div>
<div style="margin-top:8px">
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Searched PACER for federal cases</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked city accounts receivable for municipal liens</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Searched UCC filings at Secretary of State</span></label>
</div>
</div>
</details>

<!-- Step 7 -->
<details>
<summary>
<h3><span class="step-num">7</span> Skip Tracing</h3>
<span class="arrow">&#9660;</span>
</summary>
<div class="card-body">
<div class="field"><span class="field-label">Phone Numbers Found</span><input type="tel" placeholder="(555) 123-4567"></div>
<div class="field"><span class="field-label">Email Addresses</span><input type="email" placeholder="owner@email.com"></div>
<div class="field"><span class="field-label">Social Media Profiles</span><input type="url" placeholder="Facebook, LinkedIn URLs..."></div>
<div class="field"><span class="field-label">Obituary Info</span><textarea placeholder="If deceased, note obituary findings and surviving heirs..."></textarea></div>
<div class="field"><span class="field-label">Notes</span><textarea placeholder="Best contact method, times called, responses..."></textarea></div>
<div style="margin-top:8px">
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Google searched property address</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Google searched owner name(s)</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked obituaries (FindAGrave, Legacy.com)</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked social media (Facebook, LinkedIn)</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Called utility company for current account holder</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Checked CashApp / SpyDialer for contact verification</span></label>
</div>
</div>
</details>

</div><!-- end panel-tip -->

<!-- ================================================================ -->
<!-- TAB 2: GLOSSARY -->
<!-- ================================================================ -->
<div id="panel-glossary" class="tab-panel">

<details class="glossary-item">
<summary>SITUS Address <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">The physical location of the property. The actual street address where the property sits.<strong>Why It Matters:</strong>Confirms you're researching the right property. Directionals (N/S/E/W) can mean entirely different properties.</div>
</details>

<details class="glossary-item">
<summary>Mailing Address <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">The address where the county sends tax bills and notices to the property owner.<strong>Why It Matters:</strong>When mailing address differs from SITUS, the owner is absentee. Absentee owners are often more motivated sellers.</div>
</details>

<details class="glossary-item">
<summary>Legal Description <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">The precise description of a property's boundaries using lot/block, metes and bounds, or section/township/range.<strong>Why It Matters:</strong>Must match across all documents. A typo in the legal description can create a cloud on title that requires a quiet title action.</div>
</details>

<details class="glossary-item">
<summary>Parcel Number <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">A unique identifier assigned by the county assessor to each piece of real property.<strong>Why It Matters:</strong>The most reliable way to search for a property. Street addresses can change; parcel numbers rarely do.</div>
</details>

<details class="glossary-item">
<summary>Deed <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">The legal document that transfers ownership of real property from one party (grantor) to another (grantee).<strong>Why It Matters:</strong>The type of deed (warranty vs. quitclaim) tells you how much protection the buyer received and signals the nature of the transaction.</div>
</details>

<details class="glossary-item">
<summary>Vesting <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">How title to a property is held. Determines ownership rights, survivorship, and transfer requirements.<strong>Why It Matters:</strong>Vesting controls who must sign to sell. Getting this wrong means the sale could be voided.</div>
</details>

<details class="glossary-item">
<summary>Joint Tenancy <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">Two or more owners with equal shares and right of survivorship. When one dies, their share automatically passes to surviving owner(s).<strong>Why It Matters:</strong>Only needs death certificate and affidavit to clear title when one owner dies. No probate needed.</div>
</details>

<details class="glossary-item">
<summary>Tenants in Common <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">Two or more owners who each own a distinct share. No right of survivorship. Each share passes through that owner's estate.<strong>Why It Matters:</strong>When one tenant in common dies, their share goes through probate. Every heir becomes a co-owner, creating "fractured family" situations.</div>
</details>

<details class="glossary-item">
<summary>Warranties <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">Guarantees made by the grantor in a deed about the quality of title being transferred.<strong>Why It Matters:</strong>General warranty deed = strongest protection. Quitclaim deed = zero warranties. The type of deed signals the transaction's nature.</div>
</details>

<details class="glossary-item">
<summary>Chain of Title <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">The complete history of ownership transfers for a property, from the original grant to the present.<strong>Why It Matters:</strong>Any gap or break in the chain is a critical title defect. Every transfer must connect perfectly.</div>
</details>

<details class="glossary-item">
<summary>Encumbrance <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">Any claim, lien, charge, or liability attached to real property that may diminish its value or burden the title.<strong>Why It Matters:</strong>Encumbrances can prevent or complicate a sale. Some must be cleared before closing; others transfer with the property.</div>
</details>

<details class="glossary-item">
<summary>Lien Priority <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">The order in which liens are paid from sale proceeds. Generally follows "first in time, first in right."<strong>Why It Matters:</strong>Property taxes are always first priority. After that, recording date determines position. This order determines who gets paid at closing.</div>
</details>

<details class="glossary-item">
<summary>Release / Reconveyance <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">A document recorded when a mortgage or deed of trust is paid off, removing the lien from the property.<strong>Why It Matters:</strong>Missing releases are one of the most common title problems. The lien shows as still active until the release is recorded.</div>
</details>

<details class="glossary-item">
<summary>Judgment Lien <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">A court-ordered lien that attaches to a debtor's real property. Created when someone wins a lawsuit and records the judgment.<strong>Why It Matters:</strong>Judgment liens attach to ALL real property owned by the debtor in that county. They must be satisfied or negotiated before clear title can transfer.</div>
</details>

<details class="glossary-item">
<summary>Cloud on Title <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">Any irregularity, claim, or encumbrance that appears in the public record and casts doubt on the owner's title.<strong>Why It Matters:</strong>Clouds prevent title insurance companies from insuring. Must be cleared through negotiation, corrective deeds, or quiet title action.</div>
</details>

<details class="glossary-item">
<summary>Quiet Title Action <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">A lawsuit filed to establish clear ownership of property by eliminating competing claims.<strong>Why It Matters:</strong>The nuclear option for title problems. Expensive ($4K-$10K+) and time-consuming (6-24 months) but sometimes the only solution.</div>
</details>

<details class="glossary-item">
<summary>Adverse Possession <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">Legal doctrine allowing someone who occupies property openly and continuously for a statutory period to claim ownership.<strong>Why It Matters:</strong>Someone living on the property for years without permission may have a legal claim. Check state-specific requirements.</div>
</details>

<details class="glossary-item">
<summary>Probate <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">The legal process of settling a deceased person's estate, including transferring property to heirs or beneficiaries.<strong>Why It Matters:</strong>Property in a deceased person's name cannot be sold until probate is complete. This creates opportunity but requires patience.</div>
</details>

<details class="glossary-item">
<summary>Executor / Personal Representative <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">The person appointed by the court (or named in a will) to manage a deceased person's estate.<strong>Why It Matters:</strong>Only the PR/executor has legal authority to sell estate property. Verify their appointment through court records.</div>
</details>

<details class="glossary-item">
<summary>Beneficiary Deed / TOD <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">A deed that transfers property automatically upon the owner's death, bypassing probate. Also called Transfer on Death deed.<strong>Why It Matters:</strong>These deeds can be revoked while the owner is alive. Check that the most recent one is still valid and the beneficiary is correct.</div>
</details>

<details class="glossary-item">
<summary>Heirship <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">The status of being an heir. Relevant when someone dies without a will (intestate) and property must pass according to state law.<strong>Why It Matters:</strong>Unknown or missing heirs are among the most complex title problems. Every heir has a legal right to their share.</div>
</details>

<details class="glossary-item">
<summary>Due on Sale Clause <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">A provision in a mortgage that requires the full loan balance to be paid if the property is sold or transferred.<strong>Why It Matters:</strong>Most mortgages have this clause. If the seller has an existing mortgage, transferring title could trigger full repayment.</div>
</details>

<details class="glossary-item">
<summary>UCC Filing <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">A Uniform Commercial Code filing that creates a public record of a security interest in personal property (sometimes including fixtures).<strong>Why It Matters:</strong>UCC filings on real property fixtures can complicate title. Check Secretary of State records.</div>
</details>

<details class="glossary-item">
<summary>Bankruptcy Stay <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">An automatic court order that halts all collection actions, foreclosures, and property transfers when someone files bankruptcy.<strong>Why It Matters:</strong>You cannot buy property from someone in active bankruptcy without court permission. The stay freezes everything.</div>
</details>

<details class="glossary-item">
<summary>Skip Tracing <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">The process of locating a person who has "skipped" or cannot be found at their known address.<strong>Why It Matters:</strong>Finding the actual decision-maker is essential. You can't buy a property if you can't reach the owner.</div>
</details>

<details class="glossary-item">
<summary>Motivation <span class="arrow">&#9660;</span></summary>
<div class="glossary-def">The underlying reason a property owner might be willing to sell, often at a discount. Driven by life circumstances, not just financial factors.<strong>Why It Matters:</strong>Understanding motivation is the key to making appropriate offers. Distressed sellers need speed and certainty, not top dollar.</div>
</details>

</div><!-- end panel-glossary -->

<!-- ================================================================ -->
<!-- TAB 3: RED FLAGS -->
<!-- ================================================================ -->
<div id="panel-flags" class="tab-panel">

<div class="sub-tabs">
<label for="subtab-flags-checklist">Checklist</label>
<label for="subtab-flags-matrix">Severity</label>
<label for="subtab-flags-patterns">Patterns</label>
</div>

<!-- Sub-panel: Checklist -->
<div class="sub-panel-flags sp-checklist">
<h3 class="section-title" style="margin-top:0">Red Flag Checklist</h3>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Quitclaim deeds within the family (why not a warranty deed?)</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Missing marital status on deed</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">No release recorded for Deed of Trust / Mortgage</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Spouse or ex-spouse not signing the deed</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Homemade or downloaded form documents</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Incorrect or incomplete notary block</span></label>
<label class="check-item"><input type="checkbox"><span class="check-box"></span><span class="check-text">Beneficiary Deed issues (outdated, wrong beneficiary)</span></label>
</div>

<!-- Sub-panel: Severity Matrix -->
<div class="sub-panel-flags sp-matrix">
<h3 class="section-title" style="margin-top:0">Severity Matrix</h3>
<table class="matrix">
<thead><tr><th>Red Flag</th><th>Severity</th><th>Cost</th><th>Time</th></tr></thead>
<tbody>
<tr><td>Typo in Legal Description</td><td><span class="sev sev-minor">Minor</span></td><td>$250-750</td><td>1-2 wk</td></tr>
<tr><td>Unreleased Private Mortgage</td><td><span class="sev sev-moderate">Moderate</span></td><td>$500-2,500</td><td>2-6 wk</td></tr>
<tr><td>Missing Mortgage Release</td><td><span class="sev sev-low">Low</span></td><td>$100-300</td><td>1-4 wk</td></tr>
<tr><td>Judgment Lien (Paid)</td><td><span class="sev sev-low">Low</span></td><td>$100-300</td><td>1-4 wk</td></tr>
<tr><td>Judgment Lien (Unpaid, Active)</td><td><span class="sev sev-moderate">Moderate</span></td><td>Varies</td><td>1-4 wk</td></tr>
<tr><td>IRS Tax Lien</td><td><span class="sev sev-severe">Severe</span></td><td>Varies</td><td>4-12 wk</td></tr>
<tr><td>Missing Heir</td><td><span class="sev sev-severe">Severe</span></td><td>$3-7.5K</td><td>3-6 mo</td></tr>
<tr><td>Multiple Heirs</td><td><span class="sev sev-critical">Critical</span></td><td>Varies</td><td>Varies</td></tr>
<tr><td>Break in Chain of Title</td><td><span class="sev sev-critical">Critical</span></td><td>$4-10K+</td><td>6-12+ mo</td></tr>
<tr><td>Active Lis Pendens</td><td><span class="sev sev-critical">Critical</span></td><td>Varies</td><td>Varies</td></tr>
</tbody>
</table>
</div>

<!-- Sub-panel: Patterns -->
<div class="sub-panel-flags sp-patterns">
<h3 class="section-title" style="margin-top:0">Red Flag Patterns</h3>

<details class="pattern-details">
<summary><h4>The Ghost Owner</h4><span class="arrow">&#9660;</span></summary>
<div class="pattern-body">
<p>Signs to watch for:</p>
<ul>
<li>Property still in a deceased person's name</li>
<li>Delinquent taxes piling up</li>
<li>No probate case ever filed</li>
<li>Heirs may not know they inherited</li>
</ul>
<div class="strategy-label">Strategy:</div>
<p>Pursue through tax sale opportunity or locate and contact heirs directly. Offer to guide them through probate in exchange for a purchase agreement.</p>
</div>
</details>

<details class="pattern-details">
<summary><h4>The House of Cards</h4><span class="arrow">&#9660;</span></summary>
<div class="pattern-body">
<p>Signs to watch for:</p>
<ul>
<li>Multiple quitclaim deeds in succession</li>
<li>Unreleased private mortgages</li>
<li>LLC with generic name holds title</li>
<li>No title insurance was purchased</li>
</ul>
<div class="strategy-label">Strategy:</div>
<p>Full title search and legal review before any offer. Budget for quiet title action. The discount must justify the cleanup cost and risk.</p>
</div>
</details>

<details class="pattern-details">
<summary><h4>The Fractured Family</h4><span class="arrow">&#9660;</span></summary>
<div class="pattern-body">
<p>Signs to watch for:</p>
<ul>
<li>Multiple owners as tenants in common</li>
<li>One or more owners deceased</li>
<li>Different mailing addresses for co-owners</li>
<li>Family members not communicating</li>
</ul>
<div class="strategy-label">Strategy:</div>
<p>Position yourself as a neutral third party who can alleviate the headache. Offer a clean cash deal that splits evenly. Be the easy button for a complicated family situation.</p>
</div>
</details>

</div>

</div><!-- end panel-flags -->

<!-- ================================================================ -->
<!-- TAB 4: STRATEGY -->
<!-- ================================================================ -->
<div id="panel-strategy" class="tab-panel">

<div class="sub-tabs">
<label for="subtab-strat-signals">Distress Signals</label>
<label for="subtab-strat-costs">Cost-Benefit</label>
</div>

<!-- Sub-panel: Distress Signals -->
<div class="sub-panel-strat sp-signals">
<h3 class="section-title" style="margin-top:0">Distress Signals</h3>

<details class="strat-card">
<summary><h4>&#128176; Financial Distress</h4><span class="arrow">&#9660;</span></summary>
<div class="strat-body">
<div class="meta"><b>The Human Story</b></div>
<p>Job loss, medical bills, business failure, or simply living beyond means. The owner is drowning in payments and every month that passes makes it worse.</p>
<div class="meta"><b>Where to Find Clues</b></div>
<p>Delinquent taxes, multiple judgments, pre-foreclosure filings, utility shutoff notices, code violations piling up.</p>
<div class="meta"><b>Your Strategy</b></div>
<p>Lead with speed and certainty. Offer to close fast with no contingencies. Cover their moving costs. Don't lowball -- offer a fair price that solves their problem quickly.</p>
</div>
</details>

<details class="strat-card">
<summary><h4>&#127973; Health Crisis</h4><span class="arrow">&#9660;</span></summary>
<div class="strat-body">
<div class="meta"><b>The Human Story</b></div>
<p>Owner or spouse facing serious illness, disability, or aging into needing assisted living. The property has become a burden they can't maintain.</p>
<div class="meta"><b>Where to Find Clues</b></div>
<p>Absentee mailing address (nursing home/family member), property deterioration, medical liens, power of attorney recorded.</p>
<div class="meta"><b>Your Strategy</b></div>
<p>Sensitivity is paramount. Often dealing with family members, not the owner directly. Offer flexibility on timelines. Be prepared for POA or guardianship requirements.</p>
</div>
</details>

<details class="strat-card">
<summary><h4>&#128148; Relationship Breakdown</h4><span class="arrow">&#9660;</span></summary>
<div class="strat-body">
<div class="meta"><b>The Human Story</b></div>
<p>Divorce, separation, or family dispute. Neither party wants the property but both want their share. The house represents the pain they want to leave behind.</p>
<div class="meta"><b>Where to Find Clues</b></div>
<p>Divorce filings in court records, quitclaim deeds between spouses, both names on deed but different mailing addresses.</p>
<div class="meta"><b>Your Strategy</b></div>
<p>You may need agreement from both parties. Position yourself as the neutral solution. Cash offer splits easily. Speed helps because both parties want to move on.</p>
</div>
</details>

<details class="strat-card">
<summary><h4>&#128188; Job Loss / Relocation</h4><span class="arrow">&#9660;</span></summary>
<div class="strat-body">
<div class="meta"><b>The Human Story</b></div>
<p>Transferred for work, found a new job in another city, or retired and moving. Carrying two mortgages or an empty house far away.</p>
<div class="meta"><b>Where to Find Clues</b></div>
<p>Absentee owner with out-of-state mailing address, property listed then delisted, recent address change with assessor.</p>
<div class="meta"><b>Your Strategy</b></div>
<p>Convenience is your selling point. They don't want to deal with showings, repairs, or waiting for retail buyers. Make it easy.</p>
</div>
</details>

<details class="strat-card">
<summary><h4>&#128338; Bereavement</h4><span class="arrow">&#9660;</span></summary>
<div class="strat-body">
<div class="meta"><b>The Human Story</b></div>
<p>Owner has passed away. Heirs may be overwhelmed, grieving, or scattered across the country. Nobody wants the responsibility of the inherited property.</p>
<div class="meta"><b>Where to Find Clues</b></div>
<p>Obituaries, probate filings, property in deceased person's name, delinquent taxes starting after death date.</p>
<div class="meta"><b>Your Strategy</b></div>
<p>Patience and empathy required. Help guide heirs through the probate process if needed. Offer to buy "as-is" so they don't have to clean out the house.</p>
</div>
</details>

<details class="strat-card">
<summary><h4>&#128555; General Overwhelm</h4><span class="arrow">&#9660;</span></summary>
<div class="strat-body">
<div class="meta"><b>The Human Story</b></div>
<p>Accidental landlord, inherited a mess, or just burned out. The property has become an emotional and financial albatross they want off their plate.</p>
<div class="meta"><b>Where to Find Clues</b></div>
<p>Code violations, tenant complaints, multiple repair liens, owner managing from out of area.</p>
<div class="meta"><b>Your Strategy</b></div>
<p>Be the aspirin for their headache. Handle everything. Close fast. Make it disappear from their life. The premium they pay for convenience is your profit margin.</p>
</div>
</details>

</div>

<!-- Sub-panel: Cost-Benefit -->
<div class="sub-panel-strat sp-costs">
<h3 class="section-title" style="margin-top:0">Cost-Benefit Analysis</h3>

<div class="cost-row">
<div class="defect">Unreleased Lien</div>
<div class="costs"><span>Cost to Cure<b>$500 - $1,500</b></span><span>Recommended Discount<b>$3,000 - $5,000</b></span></div>
</div>
<div class="cost-row">
<div class="defect">Missing Spouse Signature</div>
<div class="costs"><span>Cost to Cure<b>$1,000 - $2,500</b></span><span>Recommended Discount<b>$10,000 - $20,000</b></span></div>
</div>
<div class="cost-row">
<div class="defect">Simple Probate</div>
<div class="costs"><span>Cost to Cure<b>$3,000 - $7,500</b></span><span>Recommended Discount<b>$15,000 - $30,000</b></span></div>
</div>
<div class="cost-row">
<div class="defect">Boundary Dispute</div>
<div class="costs"><span>Cost to Cure<b>$1,500 - $5,000</b></span><span>Recommended Discount<b>$10,000 - $25,000</b></span></div>
</div>
<div class="cost-row">
<div class="defect">Gap in Chain of Title</div>
<div class="costs"><span>Cost to Cure<b>$4,000 - $10,000+</b></span><span>Recommended Discount<b>$25,000 - $75,000+</b></span></div>
</div>
<div class="cost-row">
<div class="defect">Adverse Possession Claim</div>
<div class="costs"><span>Cost to Cure<b>$5,000 - $15,000+</b></span><span>Recommended Discount<b>30% - 50% of value</b></span></div>
</div>
</div>

</div><!-- end panel-strategy -->

<!-- ================================================================ -->
<!-- TAB 5: TOOLS -->
<!-- ================================================================ -->
<div id="panel-tools" class="tab-panel">

<details>
<summary>
<h3>Free Tools</h3>
<span class="arrow">&#9660;</span>
</summary>
<div class="card-body">
<div class="tool-item"><h4><span class="badge">FREE</span> County Assessor Website</h4><p>Property ownership, parcel numbers, assessed values, legal descriptions. Look for owner name, mailing address vs. property address mismatch, and multiple parcels. Varies by county -- search "[county name] assessor."</p></div>
<div class="tool-item"><h4><span class="badge">FREE</span> County Recorder of Deeds</h4><p>Deeds, mortgages, liens, releases. Search by owner name AND legal description. Look for unreleased mortgages, quitclaim deeds, and chain of title gaps. Some counties offer online search; others require in-person visits.</p></div>
<div class="tool-item"><h4><span class="badge">FREE</span> Case.net (Missouri Courts)</h4><p>State court records including civil, criminal, family, and probate cases. Search by party name for judgments, divorces, probate filings, and lis pendens.</p><a href="https://www.courts.mo.gov/casenet" target="_blank">courts.mo.gov/casenet</a></div>
<div class="tool-item"><h4><span class="badge">FREE</span> PACER</h4><p>Federal court records including bankruptcy filings and federal tax liens. Search by debtor name. $0.10/page, first $30/quarter free. Look for active bankruptcy stays.</p><a href="https://pacer.uscourts.gov" target="_blank">pacer.uscourts.gov</a></div>
<div class="tool-item"><h4><span class="badge">FREE</span> SpyDialer</h4><p>Free reverse phone lookup. Search phone numbers to find owner names and verify contacts. Cross-reference with assessor records.</p><a href="https://www.spydialer.com" target="_blank">spydialer.com</a></div>
<div class="tool-item"><h4><span class="badge">FREE</span> CashApp</h4><p>Search by phone number or email to verify contact information and confirm identity. Quick way to validate a skip trace lead.</p></div>
<div class="tool-item"><h4><span class="badge">FREE</span> FindAGrave</h4><p>Cemetery records and obituary information. Confirms if an owner is deceased and identifies surviving family members listed in memorials.</p><a href="https://www.findagrave.com" target="_blank">findagrave.com</a></div>
<div class="tool-item"><h4><span class="badge">FREE</span> Legacy.com</h4><p>Obituary aggregator. Search by name to find death notices, surviving family members, and funeral home information for heir research.</p><a href="https://www.legacy.com" target="_blank">legacy.com</a></div>
<div class="tool-item"><h4><span class="badge">FREE</span> Google (Strategic Searches)</h4><p>Search "[address] + flood/fire/police/code violation" for property history. Use Image Search to upload property photos. Use Street View for property condition history over time and to verify occupancy.</p></div>
<div class="tool-item"><h4><span class="badge">FREE</span> Google Image Search</h4><p>Upload a property photo to find it listed elsewhere. Useful for identifying properties that were previously listed or marketed under different addresses.</p></div>
<div class="tool-item"><h4><span class="badge">FREE</span> Google Street View</h4><p>View property condition history across multiple years. Compare current vs. historical imagery to spot deterioration, vacancy, or changes in occupancy.</p></div>
<div class="tool-item"><h4><span class="badge">FREE</span> Secretary of State Website</h4><p>LLC and corporate filings. Search for entity status, registered agents, organizers, and formation dates. Helps identify who controls an LLC that holds title.</p></div>
<div class="tool-item"><h4><span class="badge">FREE</span> Federal BOP Inmate Locator</h4><p>Federal Bureau of Prisons inmate search. Confirms if an owner is currently incarcerated. Important for skip tracing and understanding why a property may be abandoned.</p><a href="https://www.bop.gov/inmateloc/" target="_blank">bop.gov/inmateloc/</a></div>
</div>
</details>

<details>
<summary>
<h3>Paid Tools</h3>
<span class="arrow">&#9660;</span>
</summary>
<div class="card-body">
<div class="tool-item"><h4><span class="badge paid">PAID</span> TLO (TransUnion)</h4><p>Comprehensive people and asset search. Phone numbers, addresses, relatives, associates, vehicles, properties. Industry standard for skip tracing. Requires licensed access.</p></div>
<div class="tool-item"><h4><span class="badge paid">PAID</span> LexisNexis</h4><p>Legal research platform. Court records, liens, judgments, and public records searches across all jurisdictions. Deep background checks and comprehensive lien searches.</p></div>
<div class="tool-item"><h4><span class="badge paid">PAID</span> Newspaper Archive</h4><p>Historical newspaper search. Find old property-related news, legal notices, foreclosure announcements, and obituaries that didn't make it to online databases.</p></div>
<div class="tool-item"><h4><span class="badge paid">PAID</span> Ancestry.com</h4><p>Genealogy and heir research. Essential for probate situations with unknown or missing heirs. Census records, family trees, vital records, and death indices.</p></div>
</div>
</details>

</div><!-- end panel-tools -->

</div><!-- end tab-content -->

<nav>
<label for="tab1"><span class="icon">&#128269;</span>Property Profile</label>
<label for="tab2"><span class="icon">&#128218;</span>Glossary</label>
<label for="tab3"><span class="icon">&#9888;&#65039;</span>Red Flags</label>
<label for="tab4"><span class="icon">&#9813;</span>Strategy</label>
<label for="tab5"><span class="icon">&#128295;</span>Tools</label>
</nav>

</div><!-- end app-wrap -->

</body>
</html>`}
      style={{width:'100%',height:'100vh',border:'none'}}
      title='Property Title Intelligence System'
    />
  )
}
