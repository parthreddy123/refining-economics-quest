const chapterDiagrams = {

// Chapter 1: Crack Spreads Fundamentals
1: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <!-- Title -->
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">3-2-1 Crack Spread Formula</text>
  <!-- Gasoline box x2 -->
  <rect x="20" y="45" width="120" height="44" rx="6" fill="var(--green)" opacity="0.18" stroke="var(--green)" stroke-width="1.5"/>
  <text x="80" y="63" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--green)">2 x Gasoline</text>
  <text x="80" y="79" text-anchor="middle" font-size="9" fill="var(--dim)">RBOB futures</text>
  <!-- Plus sign -->
  <text x="160" y="72" text-anchor="middle" font-size="18" font-weight="bold" fill="var(--accent)">+</text>
  <!-- Diesel box x1 -->
  <rect x="180" y="45" width="120" height="44" rx="6" fill="var(--cyan)" opacity="0.18" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="240" y="63" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--cyan)">1 x Diesel</text>
  <text x="240" y="79" text-anchor="middle" font-size="9" fill="var(--dim)">Heating Oil futures</text>
  <!-- Minus sign -->
  <text x="320" y="72" text-anchor="middle" font-size="18" font-weight="bold" fill="var(--red)">-</text>
  <!-- Crude box x3 -->
  <rect x="340" y="45" width="140" height="44" rx="6" fill="var(--gold)" opacity="0.18" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="410" y="63" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--gold)">3 x Crude Oil</text>
  <text x="410" y="79" text-anchor="middle" font-size="9" fill="var(--dim)">WTI or Brent</text>
  <!-- Arrow down -->
  <line x1="250" y1="98" x2="250" y2="120" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrowCh1)"/>
  <defs><marker id="arrowCh1" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)"/></marker></defs>
  <!-- Equals result -->
  <rect x="130" y="125" width="240" height="48" rx="8" fill="var(--accent)" opacity="0.13" stroke="var(--accent)" stroke-width="2"/>
  <text x="250" y="146" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">= Crack Spread ($/bbl)</text>
  <text x="250" y="163" text-anchor="middle" font-size="9" fill="var(--dim)">Proxy for refining profitability</text>
  <!-- Example calc -->
  <rect x="40" y="192" width="420" height="52" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="210" text-anchor="middle" font-size="9" fill="var(--dim)">Example (per barrel):</text>
  <text x="80" y="228" text-anchor="middle" font-size="9" fill="var(--green)">2 x $92</text>
  <text x="145" y="228" text-anchor="middle" font-size="9" fill="var(--text)">+</text>
  <text x="200" y="228" text-anchor="middle" font-size="9" fill="var(--cyan)">1 x $98</text>
  <text x="260" y="228" text-anchor="middle" font-size="9" fill="var(--text)">-</text>
  <text x="320" y="228" text-anchor="middle" font-size="9" fill="var(--gold)">3 x $80</text>
  <text x="395" y="228" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--accent)">=  $42 / 3 = $14/bbl</text>
</svg>`,

// Chapter 2: Gross Refinery Margin (GRM)
2: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">GRM Waterfall: Crude Cost to Product Revenue</text>
  <!-- Baseline -->
  <line x1="40" y1="220" x2="470" y2="220" stroke="var(--border)" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="35" y="232" text-anchor="end" font-size="8" fill="var(--dim)">$0</text>
  <!-- Bar 1: Crude cost -->
  <rect x="60" y="80" width="80" height="140" rx="4" fill="var(--gold)" opacity="0.25" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="100" y="155" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--gold)">Crude</text>
  <text x="100" y="170" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--gold)">Cost</text>
  <text x="100" y="73" text-anchor="middle" font-size="9" fill="var(--dim)">$80/bbl</text>
  <!-- Connector line -->
  <line x1="140" y1="80" x2="175" y2="80" stroke="var(--border)" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Bar 2: Operating cost (stacked on top) -->
  <rect x="175" y="56" width="80" height="24" rx="4" fill="var(--red)" opacity="0.22" stroke="var(--red)" stroke-width="1.5"/>
  <text x="215" y="72" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--red)">OpEx -$5</text>
  <!-- Invisible base for opex bar -->
  <rect x="175" y="80" width="80" height="140" rx="0" fill="none" stroke="var(--border)" stroke-width="0.5" stroke-dasharray="2,2"/>
  <!-- Connector -->
  <line x1="255" y1="56" x2="290" y2="56" stroke="var(--border)" stroke-width="1" stroke-dasharray="3,2"/>
  <!-- Bar 3: Product Revenue -->
  <rect x="290" y="40" width="80" height="180" rx="4" fill="var(--green)" opacity="0.22" stroke="var(--green)" stroke-width="1.5"/>
  <text x="330" y="125" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--green)">Product</text>
  <text x="330" y="140" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--green)">Revenue</text>
  <text x="330" y="33" text-anchor="middle" font-size="9" fill="var(--dim)">$95/bbl</text>
  <!-- GRM bracket -->
  <line x1="400" y1="80" x2="420" y2="80" stroke="var(--accent)" stroke-width="1.5"/>
  <line x1="420" y1="80" x2="420" y2="40" stroke="var(--accent)" stroke-width="1.5"/>
  <line x1="400" y1="40" x2="420" y2="40" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="438" y="52" font-size="10" font-weight="bold" fill="var(--accent)">GRM</text>
  <text x="438" y="67" font-size="10" font-weight="bold" fill="var(--accent)">$10/bbl</text>
  <!-- Net margin bracket -->
  <line x1="400" y1="56" x2="410" y2="56" stroke="var(--cyan)" stroke-width="1"/>
  <line x1="410" y1="56" x2="410" y2="40" stroke="var(--cyan)" stroke-width="1"/>
  <line x1="400" y1="40" x2="410" y2="40" stroke="var(--cyan)" stroke-width="1"/>
  <!-- Formula -->
  <rect x="60" y="240" width="410" height="24" rx="4" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="265" y="256" text-anchor="middle" font-size="9" fill="var(--dim)">GRM = Product Revenue - Crude Cost | Net Margin = GRM - Operating Costs</text>
</svg>`,

// Chapter 3: Product Yields & Refinery Configuration
3: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">Refinery Yields: Simple vs Complex Configuration</text>
  <!-- Simple refinery bar -->
  <text x="140" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--dim)">Simple (Hydroskimmer)</text>
  <!-- Stacked bar: simple -->
  <!-- LPG 5% = 10px -->
  <rect x="90" y="60" width="100" height="10" rx="0" fill="var(--pink)" opacity="0.6"/>
  <text x="200" y="69" font-size="8" fill="var(--pink)">LPG 5%</text>
  <!-- Naphtha 10% = 20px -->
  <rect x="90" y="70" width="100" height="20" rx="0" fill="var(--gold)" opacity="0.5"/>
  <text x="200" y="84" font-size="8" fill="var(--gold)">Naphtha 10%</text>
  <!-- Gasoline 15% = 30px -->
  <rect x="90" y="90" width="100" height="30" rx="0" fill="var(--green)" opacity="0.5"/>
  <text x="200" y="109" font-size="8" fill="var(--green)">Gasoline 15%</text>
  <!-- Diesel/Kero 25% = 50px -->
  <rect x="90" y="120" width="100" height="50" rx="0" fill="var(--cyan)" opacity="0.45"/>
  <text x="200" y="149" font-size="8" fill="var(--cyan)">Diesel/Kero 25%</text>
  <!-- Fuel Oil 40% = 80px -->
  <rect x="90" y="170" width="100" height="80" rx="0" fill="var(--red)" opacity="0.4"/>
  <text x="200" y="214" font-size="8" fill="var(--red)">Fuel Oil 40%</text>
  <!-- Loss 5% = 10px -->
  <rect x="90" y="250" width="100" height="10" rx="0" fill="var(--border)" opacity="0.5"/>
  <text x="200" y="259" font-size="8" fill="var(--dim)">Loss 5%</text>
  <!-- Complex refinery bar -->
  <text x="390" y="50" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--accent)">Complex (FCC + Coker)</text>
  <!-- LPG 8% = 16px -->
  <rect x="340" y="60" width="100" height="16" rx="0" fill="var(--pink)" opacity="0.6"/>
  <text x="450" y="72" font-size="8" fill="var(--pink)">LPG 8%</text>
  <!-- Naphtha 5% = 10px -->
  <rect x="340" y="76" width="100" height="10" rx="0" fill="var(--gold)" opacity="0.5"/>
  <text x="450" y="85" font-size="8" fill="var(--gold)">Naphtha 5%</text>
  <!-- Gasoline 32% = 64px -->
  <rect x="340" y="86" width="100" height="64" rx="0" fill="var(--green)" opacity="0.5"/>
  <text x="450" y="122" font-size="8" fill="var(--green)">Gasoline 32%</text>
  <!-- Diesel/Kero 40% = 80px -->
  <rect x="340" y="150" width="100" height="80" rx="0" fill="var(--cyan)" opacity="0.45"/>
  <text x="450" y="194" font-size="8" fill="var(--cyan)">Diesel/Kero 40%</text>
  <!-- Fuel Oil 10% = 20px -->
  <rect x="340" y="230" width="100" height="20" rx="0" fill="var(--red)" opacity="0.4"/>
  <text x="450" y="244" font-size="8" fill="var(--red)">Fuel Oil 10%</text>
  <!-- Loss 5% = 10px -->
  <rect x="340" y="250" width="100" height="10" rx="0" fill="var(--border)" opacity="0.5"/>
  <text x="450" y="259" font-size="8" fill="var(--dim)">Loss 5%</text>
  <!-- Arrow between bars -->
  <line x1="265" y1="160" x2="325" y2="160" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowCh3)"/>
  <defs><marker id="arrowCh3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)"/></marker></defs>
  <text x="295" y="153" text-anchor="middle" font-size="8" fill="var(--accent)">Higher</text>
  <text x="295" y="163" text-anchor="middle" font-size="8" fill="var(--accent)">value</text>
</svg>`,

// Chapter 4: Crude Selection Economics
4: `<svg viewBox="0 0 500 290" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">Crude Selection: API Gravity vs Sulfur Content</text>
  <!-- Axes -->
  <line x1="70" y1="250" x2="470" y2="250" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="70" y1="250" x2="70" y2="45" stroke="var(--border)" stroke-width="1.5"/>
  <!-- X axis label -->
  <text x="270" y="278" text-anchor="middle" font-size="9" fill="var(--dim)">Sulfur Content (wt%) ---></text>
  <!-- Y axis label -->
  <text x="18" y="150" text-anchor="middle" font-size="9" fill="var(--dim)" transform="rotate(-90,18,150)">API Gravity ---></text>
  <!-- X axis ticks -->
  <text x="100" y="265" text-anchor="middle" font-size="8" fill="var(--dim)">0.1</text>
  <text x="200" y="265" text-anchor="middle" font-size="8" fill="var(--dim)">1.0</text>
  <text x="300" y="265" text-anchor="middle" font-size="8" fill="var(--dim)">2.0</text>
  <text x="400" y="265" text-anchor="middle" font-size="8" fill="var(--dim)">3.0</text>
  <!-- Y axis ticks -->
  <text x="60" y="230" text-anchor="end" font-size="8" fill="var(--dim)">20</text>
  <text x="60" y="180" text-anchor="end" font-size="8" fill="var(--dim)">30</text>
  <text x="60" y="130" text-anchor="end" font-size="8" fill="var(--dim)">40</text>
  <text x="60" y="80" text-anchor="end" font-size="8" fill="var(--dim)">50</text>
  <!-- Quadrant shading -->
  <!-- Light-sweet (top-left) -->
  <rect x="71" y="46" width="160" height="100" fill="var(--green)" opacity="0.07"/>
  <text x="151" y="60" text-anchor="middle" font-size="8" font-weight="bold" fill="var(--green)">Light-Sweet</text>
  <text x="151" y="72" text-anchor="middle" font-size="7" fill="var(--green)">(PREMIUM)</text>
  <!-- Heavy-sour (bottom-right) -->
  <rect x="231" y="146" width="238" height="103" fill="var(--red)" opacity="0.07"/>
  <text x="350" y="235" text-anchor="middle" font-size="8" font-weight="bold" fill="var(--red)">Heavy-Sour</text>
  <text x="350" y="247" text-anchor="middle" font-size="7" fill="var(--red)">(DISCOUNT)</text>
  <!-- Crude grade dots -->
  <!-- Brent: 38 API, 0.37% S -->
  <circle cx="125" cy="100" r="8" fill="var(--green)" opacity="0.7"/>
  <text x="125" y="93" text-anchor="middle" font-size="7" font-weight="bold" fill="var(--green)">Brent</text>
  <!-- WTI: 41 API, 0.24% S -->
  <circle cx="105" cy="85" r="8" fill="var(--green)" opacity="0.7"/>
  <text x="105" y="78" text-anchor="middle" font-size="7" font-weight="bold" fill="var(--green)">WTI</text>
  <!-- Dubai: 31 API, 2.0% S -->
  <circle cx="300" cy="175" r="8" fill="var(--gold)" opacity="0.7"/>
  <text x="300" y="168" text-anchor="middle" font-size="7" font-weight="bold" fill="var(--gold)">Dubai</text>
  <!-- Arab Heavy: 27 API, 2.8% S -->
  <circle cx="380" cy="195" r="8" fill="var(--red)" opacity="0.7"/>
  <text x="380" y="188" text-anchor="middle" font-size="7" font-weight="bold" fill="var(--red)">Arab Heavy</text>
  <!-- Bonny Light: 35 API, 0.14% S -->
  <circle cx="90" cy="115" r="8" fill="var(--cyan)" opacity="0.7"/>
  <text x="90" y="108" text-anchor="middle" font-size="7" font-weight="bold" fill="var(--cyan)">Bonny Lt</text>
  <!-- Urals: 31 API, 1.35% S -->
  <circle cx="215" cy="175" r="8" fill="var(--pink)" opacity="0.7"/>
  <text x="215" y="168" text-anchor="middle" font-size="7" font-weight="bold" fill="var(--pink)">Urals</text>
  <!-- Mars: 28.5 API, 1.9% S -->
  <circle cx="285" cy="192" r="8" fill="var(--gold)" opacity="0.6"/>
  <text x="285" y="210" text-anchor="middle" font-size="7" font-weight="bold" fill="var(--gold)">Mars</text>
</svg>`,

// Chapter 5: Product Pricing Mechanisms
5: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">Product Price Discovery Flow</text>
  <defs>
    <marker id="arrowCh5" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)"/>
    </marker>
  </defs>
  <!-- Step 1: Physical Market -->
  <rect x="15" y="50" width="100" height="60" rx="8" fill="var(--cyan)" opacity="0.15" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="65" y="73" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--cyan)">Physical</text>
  <text x="65" y="86" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--cyan)">Market</text>
  <text x="65" y="100" text-anchor="middle" font-size="7" fill="var(--dim)">Actual trades</text>
  <!-- Arrow 1 -->
  <line x1="120" y1="80" x2="145" y2="80" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowCh5)"/>
  <!-- Step 2: PRA Assessment -->
  <rect x="150" y="50" width="100" height="60" rx="8" fill="var(--gold)" opacity="0.15" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="200" y="70" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--gold)">PRA</text>
  <text x="200" y="83" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--gold)">Assessment</text>
  <text x="200" y="100" text-anchor="middle" font-size="7" fill="var(--dim)">Platts / Argus</text>
  <!-- Arrow 2 -->
  <line x1="255" y1="80" x2="280" y2="80" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowCh5)"/>
  <!-- Step 3: Published Benchmark -->
  <rect x="285" y="50" width="100" height="60" rx="8" fill="var(--green)" opacity="0.15" stroke="var(--green)" stroke-width="1.5"/>
  <text x="335" y="70" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--green)">Published</text>
  <text x="335" y="83" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--green)">Benchmark</text>
  <text x="335" y="100" text-anchor="middle" font-size="7" fill="var(--dim)">MOC / daily fix</text>
  <!-- Arrow 3 -->
  <line x1="390" y1="80" x2="415" y2="80" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowCh5)"/>
  <!-- Step 4: Contract Pricing -->
  <rect x="420" y="50" width="70" height="60" rx="8" fill="var(--pink)" opacity="0.15" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="455" y="73" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--pink)">Contract</text>
  <text x="455" y="86" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--pink)">Pricing</text>
  <text x="455" y="100" text-anchor="middle" font-size="7" fill="var(--dim)">Bench +/- diff</text>
  <!-- Formula example row -->
  <rect x="30" y="135" width="440" height="44" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="154" text-anchor="middle" font-size="9" fill="var(--dim)">Typical term contract formula:</text>
  <text x="250" y="170" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--accent)">Price = Platts Singapore Gasoil (MOPS) + Premium/Discount</text>
  <!-- Key PRAs -->
  <text x="100" y="205" text-anchor="middle" font-size="8" fill="var(--gold)">Platts (S&P Global)</text>
  <text x="250" y="205" text-anchor="middle" font-size="8" fill="var(--gold)">Argus Media</text>
  <text x="400" y="205" text-anchor="middle" font-size="8" fill="var(--gold)">ICIS</text>
  <text x="100" y="220" text-anchor="middle" font-size="7" fill="var(--dim)">MOC window method</text>
  <text x="250" y="220" text-anchor="middle" font-size="7" fill="var(--dim)">Volume-weighted avg</text>
  <text x="400" y="220" text-anchor="middle" font-size="7" fill="var(--dim)">Petrochemicals focus</text>
</svg>`,

// Chapter 6: Indian Basket & Domestic Pricing
6: `<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">Indian Basket & Retail Price Buildup</text>
  <!-- Indian Basket Formula -->
  <text x="130" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--dim)">Indian Crude Basket</text>
  <!-- Dubai bar (72%) -->
  <rect x="30" y="58" width="144" height="36" rx="5" fill="var(--gold)" opacity="0.25" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="102" y="75" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--gold)">Dubai 72%</text>
  <text x="102" y="88" text-anchor="middle" font-size="8" fill="var(--dim)">Sour grade</text>
  <!-- Plus -->
  <text x="184" y="81" text-anchor="middle" font-size="14" font-weight="bold" fill="var(--accent)">+</text>
  <!-- Brent bar (28%) -->
  <rect x="194" y="58" width="56" height="36" rx="5" fill="var(--cyan)" opacity="0.25" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="222" y="75" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--cyan)">Brent</text>
  <text x="222" y="88" text-anchor="middle" font-size="8" fill="var(--dim)">28%</text>
  <!-- Equals -->
  <text x="133" y="114" text-anchor="middle" font-size="9" fill="var(--accent)">= 0.72 x Dubai + 0.28 x Brent</text>
  <!-- Retail Price Buildup (right side) -->
  <text x="390" y="48" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--dim)">Retail Petrol Price (INR/L)</text>
  <!-- Stacked bars from bottom up -->
  <!-- Base crude (38%) -->
  <rect x="340" y="215" width="100" height="66" rx="0" fill="var(--gold)" opacity="0.4" stroke="var(--gold)" stroke-width="1"/>
  <text x="390" y="250" text-anchor="middle" font-size="8" font-weight="bold" fill="var(--gold)">Crude Cost</text>
  <text x="390" y="262" text-anchor="middle" font-size="7" fill="var(--dim)">~38%</text>
  <!-- Refining margin (5%) -->
  <rect x="340" y="202" width="100" height="13" rx="0" fill="var(--green)" opacity="0.4" stroke="var(--green)" stroke-width="1"/>
  <text x="448" y="212" font-size="7" fill="var(--green)">Margin 5%</text>
  <!-- Freight (3%) -->
  <rect x="340" y="192" width="100" height="10" rx="0" fill="var(--pink)" opacity="0.4" stroke="var(--pink)" stroke-width="1"/>
  <text x="448" y="200" font-size="7" fill="var(--pink)">Freight 3%</text>
  <!-- Central excise (25%) -->
  <rect x="340" y="148" width="100" height="44" rx="0" fill="var(--red)" opacity="0.35" stroke="var(--red)" stroke-width="1"/>
  <text x="390" y="174" text-anchor="middle" font-size="8" font-weight="bold" fill="var(--red)">Excise Duty</text>
  <text x="390" y="185" text-anchor="middle" font-size="7" fill="var(--dim)">~25%</text>
  <!-- Dealer commission (3%) -->
  <rect x="340" y="138" width="100" height="10" rx="0" fill="var(--cyan)" opacity="0.35" stroke="var(--cyan)" stroke-width="1"/>
  <text x="448" y="147" font-size="7" fill="var(--cyan)">Dealer 3%</text>
  <!-- VAT/State tax (26%) -->
  <rect x="340" y="92" width="100" height="46" rx="0" fill="var(--accent)" opacity="0.2" stroke="var(--accent)" stroke-width="1"/>
  <text x="390" y="118" text-anchor="middle" font-size="8" font-weight="bold" fill="var(--accent)">State VAT</text>
  <text x="390" y="129" text-anchor="middle" font-size="7" fill="var(--dim)">~26%</text>
  <!-- Price line top -->
  <line x1="335" y1="92" x2="450" y2="92" stroke="var(--text)" stroke-width="1.5"/>
  <text x="390" y="82" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--text)">~INR 105/L</text>
  <!-- Bottom label -->
  <line x1="335" y1="281" x2="450" y2="281" stroke="var(--border)" stroke-width="1"/>
  <text x="390" y="295" text-anchor="middle" font-size="8" fill="var(--dim)">Taxes = ~54% of retail</text>
</svg>`,

// Chapter 7: Operating Cost Structure
7: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">Refinery Operating Cost Breakdown</text>
  <!-- Pie chart center -->
  <!-- Energy 60% - large slice (216 degrees, from 0) -->
  <path d="M 200 150 L 200 70 A 80 80 0 1 1 130.72 209.28 Z" fill="var(--gold)" opacity="0.45" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="158" y="178" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--gold)">Energy</text>
  <text x="158" y="190" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--gold)">60%</text>
  <!-- Maintenance 12% - 43.2 degrees -->
  <path d="M 200 150 L 130.72 209.28 A 80 80 0 0 1 125.36 174.52 Z" fill="var(--cyan)" opacity="0.45" stroke="var(--cyan)" stroke-width="1.5"/>
  <!-- Catalysts 10% - 36 degrees -->
  <path d="M 200 150 L 125.36 174.52 A 80 80 0 0 1 132.92 138.24 Z" fill="var(--green)" opacity="0.45" stroke="var(--green)" stroke-width="1.5"/>
  <!-- Labor 8% - 28.8 degrees -->
  <path d="M 200 150 L 132.92 138.24 A 80 80 0 0 1 148.8 102.96 Z" fill="var(--pink)" opacity="0.45" stroke="var(--pink)" stroke-width="1.5"/>
  <!-- Chemicals 5% - 18 degrees -->
  <path d="M 200 150 L 148.8 102.96 A 80 80 0 0 1 166.4 84.48 Z" fill="var(--red)" opacity="0.4" stroke="var(--red)" stroke-width="1.5"/>
  <!-- Other 5% - 18 degrees -->
  <path d="M 200 150 L 166.4 84.48 A 80 80 0 0 1 200 70 Z" fill="var(--border)" opacity="0.6" stroke="var(--border)" stroke-width="1.5"/>
  <!-- Legend -->
  <rect x="310" y="65" width="12" height="12" rx="2" fill="var(--gold)" opacity="0.6"/>
  <text x="328" y="75" font-size="9" fill="var(--text)">Energy (fuel, steam, power) — 60%</text>
  <rect x="310" y="90" width="12" height="12" rx="2" fill="var(--cyan)" opacity="0.6"/>
  <text x="328" y="100" font-size="9" fill="var(--text)">Maintenance — 12%</text>
  <rect x="310" y="115" width="12" height="12" rx="2" fill="var(--green)" opacity="0.6"/>
  <text x="328" y="125" font-size="9" fill="var(--text)">Catalysts — 10%</text>
  <rect x="310" y="140" width="12" height="12" rx="2" fill="var(--pink)" opacity="0.6"/>
  <text x="328" y="150" font-size="9" fill="var(--text)">Labor — 8%</text>
  <rect x="310" y="165" width="12" height="12" rx="2" fill="var(--red)" opacity="0.6"/>
  <text x="328" y="175" font-size="9" fill="var(--text)">Chemicals — 5%</text>
  <rect x="310" y="190" width="12" height="12" rx="2" fill="var(--border)" opacity="0.6"/>
  <text x="328" y="200" font-size="9" fill="var(--text)">Other — 5%</text>
  <!-- Typical cost note -->
  <rect x="60" y="248" width="380" height="24" rx="4" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="264" text-anchor="middle" font-size="9" fill="var(--dim)">Typical opex: $3-6/bbl processed (energy cost dominates, especially in older refineries)</text>
</svg>`,

// Chapter 8: Inventory Management & Valuation
8: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">Inventory Valuation: FIFO vs LIFO in Rising/Falling Markets</text>
  <defs>
    <marker id="arrowCh8" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--dim)"/>
    </marker>
  </defs>
  <!-- Price timeline axis -->
  <line x1="40" y1="140" x2="460" y2="140" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="155" text-anchor="middle" font-size="8" fill="var(--dim)">Time ---></text>
  <!-- Rising price line -->
  <polyline points="60,120 130,110 200,95 270,82 340,70 410,55" fill="none" stroke="var(--green)" stroke-width="2"/>
  <text x="430" y="55" font-size="8" font-weight="bold" fill="var(--green)">Price</text>
  <!-- Purchase markers -->
  <circle cx="100" cy="115" r="4" fill="var(--gold)"/>
  <text x="100" y="138" text-anchor="middle" font-size="7" fill="var(--gold)">Buy $70</text>
  <circle cx="200" cy="95" r="4" fill="var(--gold)"/>
  <text x="200" y="138" text-anchor="middle" font-size="7" fill="var(--gold)">Buy $80</text>
  <circle cx="300" cy="76" r="4" fill="var(--gold)"/>
  <text x="300" y="138" text-anchor="middle" font-size="7" fill="var(--gold)">Buy $90</text>
  <!-- Sell marker -->
  <circle cx="380" cy="62" r="5" fill="var(--accent)"/>
  <text x="380" y="138" text-anchor="middle" font-size="7" font-weight="bold" fill="var(--accent)">Sell $95</text>
  <!-- FIFO vs LIFO comparison boxes -->
  <!-- FIFO Box -->
  <rect x="30" y="170" width="210" height="100" rx="6" fill="var(--green)" opacity="0.08" stroke="var(--green)" stroke-width="1.5"/>
  <text x="135" y="188" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--green)">FIFO (First-In, First-Out)</text>
  <text x="135" y="206" text-anchor="middle" font-size="8" fill="var(--dim)">Sells oldest inventory first</text>
  <text x="135" y="224" text-anchor="middle" font-size="9" fill="var(--text)">COGS = $70 (oldest batch)</text>
  <text x="135" y="242" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--green)">Profit = $95 - $70 = $25</text>
  <text x="135" y="258" text-anchor="middle" font-size="8" fill="var(--dim)">Higher reported profit</text>
  <!-- LIFO Box -->
  <rect x="260" y="170" width="210" height="100" rx="6" fill="var(--red)" opacity="0.08" stroke="var(--red)" stroke-width="1.5"/>
  <text x="365" y="188" text-anchor="middle" font-size="10" font-weight="bold" fill="var(--red)">LIFO (Last-In, First-Out)</text>
  <text x="365" y="206" text-anchor="middle" font-size="8" fill="var(--dim)">Sells newest inventory first</text>
  <text x="365" y="224" text-anchor="middle" font-size="9" fill="var(--text)">COGS = $90 (newest batch)</text>
  <text x="365" y="242" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--red)">Profit = $95 - $90 = $5</text>
  <text x="365" y="258" text-anchor="middle" font-size="8" fill="var(--dim)">Lower tax, better cash flow</text>
</svg>`,

// Chapter 9: Refinery Benchmarking
9: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">Solomon EII Benchmarking: Quartile Performance</text>
  <!-- Axes -->
  <line x1="80" y1="220" x2="440" y2="220" stroke="var(--border)" stroke-width="1.5"/>
  <line x1="80" y1="220" x2="80" y2="50" stroke="var(--border)" stroke-width="1.5"/>
  <text x="260" y="248" text-anchor="middle" font-size="9" fill="var(--dim)">Performance Quartile</text>
  <text x="30" y="135" text-anchor="middle" font-size="8" fill="var(--dim)" transform="rotate(-90,30,135)">Energy Intensity Index (EII)</text>
  <!-- Y axis labels (lower is better) -->
  <text x="72" y="215" text-anchor="end" font-size="8" fill="var(--dim)">80</text>
  <text x="72" y="175" text-anchor="end" font-size="8" fill="var(--dim)">100</text>
  <text x="72" y="135" text-anchor="end" font-size="8" fill="var(--dim)">120</text>
  <text x="72" y="95" text-anchor="end" font-size="8" fill="var(--dim)">140</text>
  <text x="72" y="65" text-anchor="end" font-size="8" fill="var(--dim)">160</text>
  <!-- Grid lines -->
  <line x1="80" y1="175" x2="440" y2="175" stroke="var(--border)" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="80" y1="135" x2="440" y2="135" stroke="var(--border)" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="80" y1="95" x2="440" y2="95" stroke="var(--border)" stroke-width="0.5" stroke-dasharray="3,3"/>
  <!-- 1st Quartile bar (best, EII ~90) -->
  <rect x="105" y="195" width="60" height="25" rx="3" fill="var(--green)" opacity="0.5" stroke="var(--green)" stroke-width="1.5"/>
  <text x="135" y="185" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--green)">EII ~90</text>
  <text x="135" y="238" text-anchor="middle" font-size="9" fill="var(--text)">1st Q</text>
  <text x="135" y="252" text-anchor="middle" font-size="7" fill="var(--green)">Best</text>
  <!-- 2nd Quartile bar (EII ~105) -->
  <rect x="195" y="163" width="60" height="57" rx="3" fill="var(--cyan)" opacity="0.4" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="225" y="153" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--cyan)">EII ~105</text>
  <text x="225" y="238" text-anchor="middle" font-size="9" fill="var(--text)">2nd Q</text>
  <!-- 3rd Quartile bar (EII ~125) -->
  <rect x="285" y="123" width="60" height="97" rx="3" fill="var(--gold)" opacity="0.4" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="315" y="113" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--gold)">EII ~125</text>
  <text x="315" y="238" text-anchor="middle" font-size="9" fill="var(--text)">3rd Q</text>
  <!-- 4th Quartile bar (EII ~150) -->
  <rect x="375" y="73" width="60" height="147" rx="3" fill="var(--red)" opacity="0.35" stroke="var(--red)" stroke-width="1.5"/>
  <text x="405" y="63" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--red)">EII ~150</text>
  <text x="405" y="238" text-anchor="middle" font-size="9" fill="var(--text)">4th Q</text>
  <text x="405" y="252" text-anchor="middle" font-size="7" fill="var(--red)">Worst</text>
  <!-- Indian average marker line -->
  <line x1="90" y1="143" x2="435" y2="143" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="6,3"/>
  <rect x="160" y="132" width="120" height="16" rx="3" fill="var(--accent)" opacity="0.2"/>
  <text x="220" y="143" text-anchor="middle" font-size="8" font-weight="bold" fill="var(--accent)">Indian Avg ~118</text>
  <!-- Note -->
  <text x="250" y="272" text-anchor="middle" font-size="8" fill="var(--dim)">Lower EII = better energy efficiency. Source: Solomon Associates methodology.</text>
</svg>`,

// Chapter 10: Margin Optimization Strategies
10: `<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent)">Margin Optimization Cycle</text>
  <defs>
    <marker id="arrowCh10" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)"/>
    </marker>
  </defs>
  <!-- Center circle -->
  <circle cx="250" cy="160" r="32" fill="var(--accent)" opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="250" y="157" text-anchor="middle" font-size="8" font-weight="bold" fill="var(--accent)">Optimize</text>
  <text x="250" y="169" text-anchor="middle" font-size="8" font-weight="bold" fill="var(--accent)">Margin</text>
  <!-- Node 1: LP Model (top) -->
  <rect x="200" y="40" width="100" height="40" rx="8" fill="var(--cyan)" opacity="0.18" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="250" y="58" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--cyan)">LP Model</text>
  <text x="250" y="72" text-anchor="middle" font-size="7" fill="var(--dim)">Linear programming</text>
  <!-- Node 2: Crude Selection (top-right) -->
  <rect x="370" y="80" width="110" height="40" rx="8" fill="var(--gold)" opacity="0.18" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="425" y="98" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--gold)">Crude Selection</text>
  <text x="425" y="112" text-anchor="middle" font-size="7" fill="var(--dim)">Best netback crude</text>
  <!-- Node 3: Process Adjustment (right) -->
  <rect x="380" y="175" width="110" height="40" rx="8" fill="var(--green)" opacity="0.18" stroke="var(--green)" stroke-width="1.5"/>
  <text x="435" y="193" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--green)">Process Adjust</text>
  <text x="435" y="207" text-anchor="middle" font-size="7" fill="var(--dim)">Severity, yields</text>
  <!-- Node 4: Product Slate (bottom-right) -->
  <rect x="340" y="250" width="110" height="40" rx="8" fill="var(--pink)" opacity="0.18" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="395" y="268" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--pink)">Product Slate</text>
  <text x="395" y="282" text-anchor="middle" font-size="7" fill="var(--dim)">Max high-value cuts</text>
  <!-- Node 5: Monitor (bottom-left) -->
  <rect x="105" y="250" width="110" height="40" rx="8" fill="var(--red)" opacity="0.18" stroke="var(--red)" stroke-width="1.5"/>
  <text x="160" y="268" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--red)">Monitor KPIs</text>
  <text x="160" y="282" text-anchor="middle" font-size="7" fill="var(--dim)">EII, GRM, yields</text>
  <!-- Node 6: Market Intel (left) -->
  <rect x="15" y="175" width="110" height="40" rx="8" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="70" y="193" text-anchor="middle" font-size="9" font-weight="bold" fill="var(--accent)">Market Intel</text>
  <text x="70" y="207" text-anchor="middle" font-size="7" fill="var(--dim)">Cracks, spreads</text>
  <!-- Arrows connecting nodes clockwise -->
  <!-- LP -> Crude Selection -->
  <line x1="300" y1="60" x2="368" y2="85" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowCh10)"/>
  <!-- Crude Selection -> Process Adjust -->
  <line x1="435" y1="122" x2="438" y2="173" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowCh10)"/>
  <!-- Process Adjust -> Product Slate -->
  <line x1="425" y1="217" x2="410" y2="248" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowCh10)"/>
  <!-- Product Slate -> Monitor -->
  <line x1="338" y1="270" x2="217" y2="270" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowCh10)"/>
  <!-- Monitor -> Market Intel -->
  <line x1="120" y1="248" x2="85" y2="217" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowCh10)"/>
  <!-- Market Intel -> LP Model -->
  <line x1="70" y1="173" x2="70" y2="105" stroke="var(--accent)" stroke-width="0" />
  <line x1="55" y1="173" x2="200" y2="65" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowCh10)"/>
</svg>`

};
