const products = {
  "mutual-funds": {
    name: "Mutual Funds",
    category: "investment",
    overview: "Professionally managed investment schemes across equity, debt, hybrid, index, sectoral and solution-oriented categories.",
    benefits: ["Diversification across securities", "SIP, STP, SWP and lump sum options", "Schemes for short, medium and long-term goals"],
    who: "Investors seeking market-linked growth with professional fund management and transparent portfolio reporting.",
    considerations: ["Returns are market-linked and not guaranteed", "Scheme selection should match goal horizon and risk appetite", "Periodic portfolio review is important"]
  },
  "sip-investments": {
    name: "SIP Investments",
    category: "investment",
    overview: "Systematic investment plans that help build wealth through disciplined monthly investing.",
    benefits: ["Rupee-cost averaging", "Low starting commitment", "Automated investing habit"],
    who: "Salaried professionals, young investors and families saving for education, home purchase or retirement.",
    considerations: ["Longer horizons improve the usefulness of SIP discipline", "Investment amount should be reviewed as income grows", "Short-term market volatility can affect returns"]
  },
  "fixed-deposits": {
    name: "Fixed Deposits",
    category: "investment",
    overview: "Bank and corporate fixed deposit options for predictable income, capital stability and planned liquidity.",
    benefits: ["Defined tenure and interest rates", "Lower volatility than market-linked products", "Useful for emergency funds and known commitments"],
    who: "Conservative investors, retirees and investors parking funds for short-to-medium-term needs.",
    considerations: ["Post-tax return should be evaluated", "Corporate FD credit quality matters", "Premature withdrawal may carry penalties"]
  },
  bonds: {
    name: "Bonds",
    category: "investment",
    overview: "Debt instruments that can support income generation, portfolio stability and diversification.",
    benefits: ["Coupon income potential", "Diversifies equity exposure", "Multiple issuer and tenure choices"],
    who: "Investors looking for fixed income allocation with attention to credit quality and liquidity.",
    considerations: ["Credit rating and issuer strength are important", "Interest-rate changes can affect prices", "Liquidity may vary by bond type"]
  },
  equity: {
    name: "Equity",
    category: "investment",
    overview: "Direct equity investments for investors seeking long-term wealth creation through ownership in listed companies.",
    benefits: ["Participation in business growth", "Long-term capital appreciation potential", "Flexible sector and stock selection"],
    who: "Investors with higher risk appetite, longer time horizon and ability to tolerate volatility.",
    considerations: ["Requires research and risk controls", "Prices can be highly volatile", "Concentration risk should be managed"]
  },
  etfs: {
    name: "ETFs",
    category: "investment",
    overview: "Exchange-traded funds for efficient exposure to indices, sectors, commodities or debt baskets.",
    benefits: ["Low-cost exposure", "Exchange liquidity", "Useful for tactical and core allocation"],
    who: "Investors seeking simple, transparent and rules-based market exposure.",
    considerations: ["Tracking error should be reviewed", "Liquidity differs by ETF", "Brokerage and bid-ask spreads may apply"]
  },
  pms: {
    name: "PMS",
    category: "investment",
    overview: "Portfolio Management Services for eligible investors seeking customized, professionally managed portfolios.",
    benefits: ["Concentrated strategies", "Professional portfolio oversight", "Customized reporting"],
    who: "HNIs and eligible investors comfortable with higher ticket sizes and market-linked risk.",
    considerations: ["Minimum investment and eligibility rules apply", "Strategy risk can be higher than diversified funds", "Fee structure should be understood clearly"]
  },
  aif: {
    name: "AIF",
    category: "investment",
    overview: "Alternative Investment Funds offering access to specialized strategies beyond traditional products.",
    benefits: ["Alternative sources of return", "Specialized manager expertise", "Potential diversification"],
    who: "Eligible sophisticated investors with high risk awareness, suitable liquidity profile and long horizon.",
    considerations: ["High minimum investment and eligibility requirements may apply", "Liquidity can be limited", "Strategy, lock-in and tax treatment should be reviewed"]
  },
  sif: {
    name: "SIF",
    category: "investment",
    overview: "Specialized Investment Funds are intended to offer advanced mutual-fund-style strategies for investors seeking differentiated exposure, subject to applicable regulatory availability.",
    benefits: ["Access to specialized strategies", "Potential diversification beyond traditional categories", "Professional fund management framework"],
    who: "Experienced investors who understand market risk and want exposure to differentiated investment strategies.",
    considerations: ["Availability depends on current regulatory and product approvals", "Strategy complexity and risk should be understood", "Suitability assessment is essential"]
  },
  p2p: {
    name: "P2P Lending",
    category: "investment",
    overview: "Peer-to-peer lending enables eligible investors to lend through regulated online platforms, with potential income linked to borrower repayment.",
    benefits: ["Potential regular income", "Alternative fixed-income exposure", "Small-ticket diversification across borrowers may be possible"],
    who: "Investors with higher risk tolerance who understand borrower default risk and platform-specific terms.",
    considerations: ["Capital and returns are not guaranteed", "Borrower default and platform risk must be assessed", "Liquidity may be limited before loan maturity"]
  },
  nps: {
    name: "NPS",
    category: "investment",
    overview: "National Pension System for retirement-focused accumulation with equity and debt allocation options.",
    benefits: ["Retirement discipline", "Tax advantages under applicable sections", "Low-cost pension architecture"],
    who: "Individuals planning retirement income and looking for regulated long-term pension investing.",
    considerations: ["Withdrawal and annuity rules apply", "Asset allocation should match retirement horizon", "Tax benefits depend on applicable law"]
  },
  "life-insurance": {
    name: "Life Insurance",
    category: "protection",
    overview: "Protection planning to secure family income, liabilities and long-term financial continuity.",
    benefits: ["Income replacement", "Loan and goal protection", "Peace of mind for dependents"],
    who: "Earning members with dependents, liabilities or future family commitments.",
    considerations: ["Cover amount should be based on income, liabilities and goals", "Term insurance is usually the core protection product", "Policy exclusions and claim terms should be reviewed"]
  },
  "health-insurance": {
    name: "Health Insurance",
    category: "protection",
    overview: "Health coverage planning for individuals, families, parents and business owners.",
    benefits: ["Hospitalization expense protection", "Family floater and individual options", "Top-up planning for larger cover"],
    who: "Every household seeking protection from medical expense shocks.",
    considerations: ["Waiting periods, room rent limits and exclusions matter", "Adequate cover should consider medical inflation", "Top-up plans can improve protection efficiently"]
  },
  "personal-accident-insurance": {
    name: "Personal Accident Insurance",
    category: "protection",
    overview: "Personal accident insurance provides financial support if an accident leads to death, permanent disability, temporary disability, or loss of income as per policy terms.",
    benefits: ["Accidental death benefit", "Disability cover support", "Income protection during accident recovery"],
    who: "Salaried professionals, business owners, frequent travellers, self-employed people, and families that depend on one earning member.",
    considerations: ["Check disability definitions carefully", "Weekly income benefit limits may apply", "Exclusions for risky activities or intoxication should be reviewed"]
  },
  "critical-illness-insurance": {
    name: "Critical Illness Insurance",
    category: "protection",
    overview: "Critical illness insurance pays a lump sum if the insured person is diagnosed with a covered serious illness, subject to policy conditions.",
    benefits: ["Lump sum payout for covered illnesses", "Support for treatment and lifestyle costs", "Can supplement regular health insurance"],
    who: "People who want extra financial protection against serious illnesses such as cancer, heart attack, stroke, kidney failure, or other covered conditions.",
    considerations: ["Covered illness list differs by policy", "Survival period and waiting period rules apply", "It should be used along with, not instead of, health insurance"]
  },
  "vehicle-insurance": {
    name: "Vehicle Insurance",
    category: "protection",
    overview: "Motor insurance solutions for cars, two-wheelers and commercial vehicles, covering mandatory third-party liability and optional own-damage protection.",
    benefits: ["Third-party liability compliance", "Own-damage protection for accidents, theft and natural events", "Add-ons such as zero depreciation and roadside assistance"],
    who: "Vehicle owners who need legally compliant and practical protection for personal or commercial vehicles.",
    considerations: ["IDV, deductibles and add-ons affect premium and claim value", "Policy renewal should happen before expiry", "Claim process and garage network should be checked"]
  },
  "general-insurance": {
    name: "General Insurance",
    category: "protection",
    overview: "Coverage for vehicles, homes, travel, business assets and other non-life risks.",
    benefits: ["Asset protection", "Risk transfer for specific events", "Compliance for mandatory covers"],
    who: "Individuals and businesses that need practical protection for assets and liabilities.",
    considerations: ["Coverage scope differs widely by policy", "Exclusions and deductibles should be reviewed", "Sum insured should reflect replacement or liability needs"]
  }
};

const services = {
  "financial-planning": {
    name: "Financial Planning",
    problem: "Income, expenses, insurance, investments and goals often sit in separate buckets.",
    solution: "We connect them into one written plan with priorities, action items and review checkpoints.",
    benefits: ["Better cash-flow decisions", "Goal clarity", "Protection and investment alignment"],
    process: ["Discovery", "Data review", "Plan design", "Implementation support", "Periodic review"]
  },
  "investment-advisory": {
    name: "Investment Advisory",
    problem: "Investors often hold scattered products without a clear allocation strategy.",
    solution: "We help build diversified portfolios based on risk appetite, time horizon and liquidity needs.",
    benefits: ["Portfolio structure", "Risk-aware allocation", "Regular review discipline"],
    process: ["Risk profiling", "Portfolio audit", "Recommendation", "Execution coordination", "Monitoring"]
  },
  "retirement-planning": {
    name: "Retirement Planning",
    problem: "Retirement needs are underestimated because inflation and longevity are ignored.",
    solution: "We estimate the retirement corpus, income strategy and investment path required.",
    benefits: ["Corpus visibility", "Income planning", "Reduced retirement anxiety"],
    process: ["Expense estimate", "Gap analysis", "Asset allocation", "Income strategy", "Annual review"]
  },
  "tax-planning": {
    name: "Tax Planning",
    problem: "Tax-saving investments are often selected at the last minute without suitability checks.",
    solution: "We align tax efficiency with goals, liquidity and risk profile.",
    benefits: ["Better Section 80C planning", "Tax-aware investing", "Reduced rushed decisions"],
    process: ["Tax position review", "Eligible options", "Suitability mapping", "Implementation", "Year-end review"]
  },
  "wealth-management": {
    name: "Wealth Management",
    problem: "High-value portfolios need consolidated oversight across assets, risks and family goals.",
    solution: "We create an integrated wealth roadmap with investment, protection and review governance.",
    benefits: ["Consolidated reporting", "Strategic allocation", "Premium advisory attention"],
    process: ["Wealth audit", "Mandate definition", "Strategy design", "Execution", "Family review"]
  },
  "financial-coaching": {
    name: "Financial Coaching",
    problem: "Many investors need confidence and habits before complex product decisions.",
    solution: "We provide structured coaching on budgeting, investing basics, risk and goal discipline.",
    benefits: ["Improved financial habits", "Less emotional investing", "Clear next steps"],
    process: ["Baseline assessment", "Coaching sessions", "Action tracker", "Progress review", "Next plan"]
  },
  "goal-based-planning": {
    name: "Goal-based Planning",
    problem: "Important goals compete for limited savings without prioritization.",
    solution: "We map each goal to timeline, corpus need, monthly investment and suitable assets.",
    benefits: ["Goal prioritization", "Investment clarity", "Measurable progress"],
    process: ["Goal mapping", "Future value estimate", "Investment strategy", "Tracking", "Rebalancing"]
  }
};

const blogs = {
  "sip-vs-lumpsum": {
    title: "SIP or Lump Sum: Which Is Better for You?",
    category: "Mutual Funds",
    date: "18 May 2026",
    excerpt: "Understand when SIP investing may help and when a lump sum investment may make sense.",
    image: "https://images.pexels.com/photos/6801682/pexels-photo-6801682.jpeg?auto=compress&cs=tinysrgb&w=1400",
    content: [
      "SIP and lump sum are two common ways to invest in mutual funds. SIP means you invest a fixed amount regularly, usually every month. Lump sum means you invest a larger amount at one time. Both can be useful, but they serve different needs.",
      "A SIP is helpful when you earn monthly income and want to build wealth slowly. It creates discipline and reduces the pressure of timing the market. When markets move up and down, your SIP buys units at different prices.",
      "A lump sum can make sense when you already have idle money and your goal is long term. But it should be planned carefully. If the money is needed soon, putting it all into a high-risk fund may not be wise.",
      "The better choice depends on your goal, time period, risk comfort and cash flow. Many investors use both: SIP for regular income and lump sum for bonuses, business surplus or maturity proceeds."
    ]
  },
  "health-insurance-family": {
    title: "Why Every Family Needs Health Insurance",
    category: "Insurance",
    date: "18 May 2026",
    excerpt: "Medical costs can disturb savings. A good health plan can protect your family from sudden expenses.",
    image: "https://images.pexels.com/photos/14558560/pexels-photo-14558560.jpeg?auto=compress&cs=tinysrgb&w=1400",
    content: [
      "Health insurance is one of the first protections every family should review. A hospital bill can become large very quickly, especially in a private hospital. Without insurance, families may need to use savings meant for education, home purchase or retirement.",
      "A family floater plan can cover spouse and children under one policy. Parents may need a separate plan because age and medical history affect premium and coverage. A top-up or super top-up plan can also help increase cover at a lower cost.",
      "Before buying, check waiting periods, room rent limits, exclusions, co-payment, network hospitals and claim process. The cheapest policy is not always the best policy.",
      "Health insurance does not remove every risk, but it gives financial support when you need it most. Review your cover every few years because medical inflation is real."
    ]
  },
  "retirement-planning-india": {
    title: "Retirement Planning: Start Before It Feels Urgent",
    category: "Retirement",
    date: "18 May 2026",
    excerpt: "Retirement planning is not only for older people. Starting early makes the goal easier.",
    image: "https://images.pexels.com/photos/7581043/pexels-photo-7581043.jpeg?auto=compress&cs=tinysrgb&w=1400",
    content: [
      "Retirement planning means preparing money for the years when active income may reduce or stop. Many people delay this goal because it feels far away. But the earlier you start, the smaller the monthly effort can be.",
      "The first step is to estimate future monthly expenses. Inflation must be included because today’s expenses will not remain the same after 20 or 30 years. Healthcare costs should also be considered.",
      "A retirement plan may include mutual funds, NPS, fixed income products, insurance and emergency savings. The mix should become more stable as you move closer to retirement.",
      "Retirement is not only about a large corpus. It is also about regular income, liquidity, tax efficiency and peace of mind. A yearly review can help keep the plan on track."
    ]
  },
  "term-insurance-cover": {
    title: "How Much Life Insurance Cover Do You Need?",
    category: "Life Insurance",
    date: "18 May 2026",
    excerpt: "Life cover should protect income, loans and important family goals.",
    image: "https://images.pexels.com/photos/7580644/pexels-photo-7580644.jpeg?auto=compress&cs=tinysrgb&w=1400",
    content: [
      "Life insurance is meant to protect your family if your income stops due to death. The cover should not be chosen randomly. It should be linked to income, loans, children’s education, spouse needs and other family goals.",
      "Term insurance is usually the simplest way to get a large life cover at a lower premium. It does not focus on investment returns. Its main purpose is protection.",
      "A rough estimate can start with 10 to 15 times annual income, but the correct number depends on your family situation. Home loan, business loan, dependent parents and children’s future costs should be added.",
      "Review life cover after marriage, childbirth, loan purchase or major income change. Underinsurance can create stress for the family at the worst time."
    ]
  }
};

const formatINR = (value) => new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
}).format(Number.isFinite(value) ? value : 0);

const formatCompactINR = (value) => {
  const amount = Math.abs(value);
  if (amount >= 10000000) return `Rs ${(value / 10000000).toFixed(1)} Cr`;
  if (amount >= 100000) return `Rs ${(value / 100000).toFixed(1)} L`;
  if (amount >= 1000) return `Rs ${(value / 1000).toFixed(0)} K`;
  return `Rs ${Math.round(value)}`;
};

const formatDateLocal = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const slugFromUrl = (fallback) => new URLSearchParams(location.search).get("product") || new URLSearchParams(location.search).get("service") || fallback;
const leadEmail = "info@ygwealth.in";
const emailFormEndpoint = `https://formsubmit.co/ajax/${leadEmail}`;

function setMetaDescription(description) {
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", description);
}

function addBusinessSchema() {
  if (document.querySelector("#yg-business-schema")) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "yg-business-schema";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Y&G Financial Services Private Limited",
    url: "https://www.ygfinserv.com",
    email: leadEmail,
    telephone: "+91 9139110009",
    areaServed: "India",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Maharashtra",
      addressLocality: "Pune",
      streetAddress: "Mahalunge",
      postalCode: "411045"
    },
    sameAs: [
      "https://facebook.com/ygwealth",
      "https://instagram.com/ygwealth",
      "https://threads.net/ygwealth",
      "https://x.com/ygfincon",
      "https://linkedin.com/ygwealth",
      "https://www.youtube.com/@ygfinancialservicepvtltd3553"
    ]
  });
  document.head.appendChild(script);
}

function cleanUrl(path) {
  if (location.protocol === "file:") return path;
  return path.replace(/\.html(?=($|[?#]))/, "");
}

function normalizeInternalLinks() {
  if (location.protocol === "file:") return;
  document.querySelectorAll('a[href$=".html"], a[href*=".html?"], a[href*=".html#"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("http") && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
      link.setAttribute("href", cleanUrl(href));
    }
  });
}

function hideHtmlExtension() {
  if (!/^https?:$/.test(location.protocol)) return;
  if (!location.pathname.endsWith(".html")) return;
  const cleanPath = location.pathname.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  history.replaceState(null, "", `${cleanPath}${location.search}${location.hash}`);
}

function simpleProductLine(item) {
  if (item.category === "protection") {
    return `${item.name} helps protect you from a large cost or loss. It can support your family, health, vehicle, or assets when an unexpected event happens.`;
  }
  return `${item.name} helps you save or invest money for a future goal. The right choice depends on your time period, risk comfort, and need for easy access to money.`;
}

function simpleServiceLine(item) {
  return `${item.name} helps you make better money decisions with a clear plan, simple steps, and regular review.`;
}

const imageAssets = {
  home: [
    {
      title: "Smart Financial Planning for a Secure Future",
      subtext: "Investment, protection, and wealth creation solutions tailored for you.",
      image: "https://images.pexels.com/photos/7580644/pexels-photo-7580644.jpeg?auto=compress&cs=tinysrgb&w=1800",
      trusts: ["Goal-led advice", "Transparent process", "India-focused portfolios"],
      metric: ["Projected corpus", "₹2.84 Cr", "Retirement goal on track"],
      allocation: ["Portfolio mix", "Balanced Growth", ["Equity 52%", "Debt 32%", "Protection 16%"]],
      chart: "Monthly SIP progress"
    },
    {
      title: "Invest With a Clear Plan",
      subtext: "Compare mutual funds, fixed deposits, PMS, AIF, SIF, P2P, and equity with simple guidance.",
      image: "https://images.pexels.com/photos/6801682/pexels-photo-6801682.jpeg?auto=compress&cs=tinysrgb&w=1800",
      trusts: ["Mutual funds", "PMS / AIF / SIF", "Equity and FDs"],
      metric: ["Investment plan", "₹75 L", "10-year wealth target"],
      allocation: ["Growth basket", "Core Satellite", ["Equity 60%", "Debt 25%", "Alternates 15%"]],
      chart: "Investment growth path"
    },
    {
      title: "Protect What Matters Most",
      subtext: "Get simple guidance on life, health, vehicle, accident, and critical illness insurance.",
      image: "https://images.pexels.com/photos/14558560/pexels-photo-14558560.jpeg?auto=compress&cs=tinysrgb&w=1800",
      trusts: ["Life cover review", "Health cover check", "Accident protection"],
      metric: ["Protection gap", "₹1.20 Cr", "Family cover suggested"],
      allocation: ["Insurance mix", "Protection First", ["Life 50%", "Health 35%", "Accident 15%"]],
      chart: "Cover adequacy view"
    },
    {
      title: "Plan Retirement Before It Feels Urgent",
      subtext: "Build a retirement path with income, insurance, tax planning, and regular reviews.",
      image: "https://images.pexels.com/photos/7581043/pexels-photo-7581043.jpeg?auto=compress&cs=tinysrgb&w=1800",
      trusts: ["Retirement corpus", "Monthly income plan", "Annual reviews"],
      metric: ["Retirement need", "₹4.10 Cr", "25-year income plan"],
      allocation: ["Retirement mix", "Income + Growth", ["Equity 45%", "Debt 40%", "Cash 15%"]],
      chart: "Retirement readiness"
    }
  ],
  about: "https://images.pexels.com/photos/7580644/pexels-photo-7580644.jpeg?auto=compress&cs=tinysrgb&w=1600",
  appointment: "https://images.pexels.com/photos/7581043/pexels-photo-7581043.jpeg?auto=compress&cs=tinysrgb&w=1600",
  calculators: "https://images.pexels.com/photos/6801682/pexels-photo-6801682.jpeg?auto=compress&cs=tinysrgb&w=1600",
  careers: "https://images.pexels.com/photos/7580644/pexels-photo-7580644.jpeg?auto=compress&cs=tinysrgb&w=1600",
  contact: "https://images.pexels.com/photos/7581043/pexels-photo-7581043.jpeg?auto=compress&cs=tinysrgb&w=1600",
  insurance: "https://images.pexels.com/photos/14558560/pexels-photo-14558560.jpeg?auto=compress&cs=tinysrgb&w=1600",
  products: "https://images.pexels.com/photos/6801682/pexels-photo-6801682.jpeg?auto=compress&cs=tinysrgb&w=1600",
  services: "https://images.pexels.com/photos/7580644/pexels-photo-7580644.jpeg?auto=compress&cs=tinysrgb&w=1600",
  team: "https://images.pexels.com/photos/7580644/pexels-photo-7580644.jpeg?auto=compress&cs=tinysrgb&w=1600",
  investment: "https://images.pexels.com/photos/6801682/pexels-photo-6801682.jpeg?auto=compress&cs=tinysrgb&w=1600",
  protection: "https://images.pexels.com/photos/14558560/pexels-photo-14558560.jpeg?auto=compress&cs=tinysrgb&w=1600",
  serviceDetail: "https://images.pexels.com/photos/7581043/pexels-photo-7581043.jpeg?auto=compress&cs=tinysrgb&w=1600"
};

function initHeroSlider() {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const slides = [...hero.querySelectorAll(".hero__slide")];
  const controls = [...hero.querySelectorAll("[data-hero-control]")];
  const prev = hero.querySelector("[data-hero-prev]");
  const next = hero.querySelector("[data-hero-next]");
  const title = hero.querySelector("[data-hero-title]");
  const subtext = hero.querySelector("[data-hero-subtext]");
  const fields = {
    trust1: hero.querySelector("[data-trust-1]"),
    trust2: hero.querySelector("[data-trust-2]"),
    trust3: hero.querySelector("[data-trust-3]"),
    metricLabel: hero.querySelector("[data-metric-label]"),
    metricValue: hero.querySelector("[data-metric-value]"),
    metricNote: hero.querySelector("[data-metric-note]"),
    allocationLabel: hero.querySelector("[data-allocation-label]"),
    allocationTitle: hero.querySelector("[data-allocation-title]"),
    legend1: hero.querySelector("[data-legend-1]"),
    legend2: hero.querySelector("[data-legend-2]"),
    legend3: hero.querySelector("[data-legend-3]"),
    chartTitle: hero.querySelector("[data-chart-title]")
  };
  imageAssets.home.forEach((slide, index) => {
    if (slides[index]) slides[index].style.backgroundImage = `url("${slide.image}")`;
  });
  let active = 0;
  const showSlide = (index) => {
    active = (index + imageAssets.home.length) % imageAssets.home.length;
    const slide = imageAssets.home[active];
    slides.forEach((element, slideIndex) => element.classList.toggle("is-active", slideIndex === active));
    controls.forEach((control, controlIndex) => control.classList.toggle("is-active", controlIndex === active));
    if (title) title.textContent = slide.title;
    if (subtext) subtext.textContent = slide.subtext;
    fields.trust1.textContent = slide.trusts[0];
    fields.trust2.textContent = slide.trusts[1];
    fields.trust3.textContent = slide.trusts[2];
    fields.metricLabel.textContent = slide.metric[0];
    fields.metricValue.textContent = slide.metric[1];
    fields.metricNote.textContent = slide.metric[2];
    fields.allocationLabel.textContent = slide.allocation[0];
    fields.allocationTitle.textContent = slide.allocation[1];
    fields.legend1.textContent = slide.allocation[2][0];
    fields.legend2.textContent = slide.allocation[2][1];
    fields.legend3.textContent = slide.allocation[2][2];
    fields.chartTitle.textContent = slide.chart;
  };
  const startTimer = () => setInterval(() => showSlide(active + 1), 4000);
  showSlide(active);
  let timer = startTimer();
  const move = (index) => {
    showSlide(index);
    clearInterval(timer);
    timer = startTimer();
  };
  controls.forEach((control) => {
    control.addEventListener("click", () => move(Number(control.dataset.heroControl)));
  });
  if (prev) prev.addEventListener("click", () => move(active - 1));
  if (next) next.addEventListener("click", () => move(active + 1));
}

function applyPageHeroImage(type, item) {
  const hero = document.querySelector(".page-hero");
  if (!hero) return;
  const page = location.pathname.split("/").pop().replace(".html", "") || "index";
  let image = imageAssets[page];
  if (type === "product") image = imageAssets[item?.category] || imageAssets.products;
  if (type === "service") image = imageAssets.serviceDetail;
  if (!image) return;
  hero.classList.add("has-image");
  hero.style.setProperty("--page-hero-image", `url("${image}")`);
}

function productKnowledgeHtml(item) {
  const typeLine = item.category === "protection"
    ? "This is mainly a protection product. Its job is to reduce the financial shock from illness, death, accident, damage, or another unexpected event."
    : "This is mainly an investment product. Its job is to help your money grow, earn income, or stay available for a planned goal.";
  return `
    <section class="section content-section">
      <div class="section__head">
        <p class="eyebrow">Knowledge guide</p>
        <h2>${item.name}: meaning, use and key points</h2>
      </div>
      <div class="article-copy">
        <p>${item.overview} ${typeLine} A good decision starts with a simple question: what do you want this product to do for you? Some people need safety, some need growth, some need income, and some need protection for their family. The right answer can be different for a salaried person, a business owner, a retiree, or an HNI family.</p>
        <p>${item.who} Before choosing ${item.name}, look at your time period, monthly cash flow, current savings, tax position, and comfort with risk. Do not select a product only because it is popular or because someone else has used it. A product should fit your goal. For example, money needed soon should not be exposed to high market risk, and long-term money should not remain idle without a growth plan.</p>
        <p>Main benefits include ${item.benefits.map((benefit) => benefit.toLowerCase()).join(", ")}. These benefits are useful only when the product is selected properly and reviewed from time to time. You should also check costs, lock-in, liquidity, tax rules, claim or redemption process, and documents before you proceed.</p>
        <p>Important points to remember: ${(item.considerations || []).map((point) => point.toLowerCase()).join("; ")}. At Y&amp;G Financial Services Private Limited, we explain the product in simple language, compare it with your need, and help you take the next step with more confidence.</p>
      </div>
    </section>`;
}

function serviceKnowledgeHtml(item) {
  return `
    <section class="section content-section">
      <div class="section__head">
        <p class="eyebrow">Knowledge guide</p>
        <h2>${item.name}: what it means and how it helps</h2>
      </div>
      <div class="article-copy">
        <p>${item.name} is useful when you want clear answers about money. Many people earn well but still feel unsure about savings, investments, insurance, tax, retirement, or future goals. The problem is not always income. Often, the problem is that money decisions are scattered and there is no simple plan to follow.</p>
        <p>${item.problem} ${item.solution} We start by understanding your present situation. This includes income, expenses, loans, family needs, current investments, insurance cover, tax position, and the goals you want to achieve. Once this is clear, it becomes easier to decide what should be done first and what can wait.</p>
        <p>This service can help with ${item.benefits.map((benefit) => benefit.toLowerCase()).join(", ")}. The aim is not to make finance sound complex. The aim is to make your next step simple. You should know why a recommendation is given, what risk it carries, how long it may take, and how it connects with your personal goal.</p>
        <p>Our process follows these steps: ${item.process.join(", ")}. Each step is explained in plain language. You can ask questions, review options, and decide at your own pace. Y&amp;G Financial Services Private Limited focuses on practical guidance, regular review, and advice that a normal investor can understand and use.</p>
      </div>
    </section>`;
}

function renderHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;
  header.innerHTML = `
    <nav class="nav" aria-label="Main navigation">
      <a class="logo" href="index.html" aria-label="Y&G Financial Services home">
        <img class="logo__mark" src="assets/yg-logo.png" alt="Y&G Financial Services">
      </a>
      <button class="menu-toggle" data-menu-toggle aria-label="Toggle menu">Menu</button>
      <div class="nav__menu">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <div class="dropdown">
          <button class="dropdown__button" type="button">Products v</button>
          <div class="dropdown__panel">
            <a href="products.html">All Products</a>
            <a href="product-detail.html?product=aif">AIF</a>
            <a href="product-detail.html?product=equity">Equity</a>
            <a href="product-detail.html?product=fixed-deposits">Fixed Deposits</a>
            <div class="submenu">
              <a class="submenu__button" href="insurance.html">Insurance</a>
              <div class="submenu__panel">
                <a href="product-detail.html?product=critical-illness-insurance">Critical Illness Insurance</a>
                <a href="product-detail.html?product=health-insurance">Health Insurance</a>
                <a href="product-detail.html?product=life-insurance">Life Insurance</a>
                <a href="product-detail.html?product=personal-accident-insurance">Personal Accident Insurance</a>
                <a href="product-detail.html?product=vehicle-insurance">Vehicle Insurance</a>
              </div>
            </div>
            <a href="product-detail.html?product=mutual-funds">Mutual Funds</a>
            <a href="product-detail.html?product=p2p">P2P</a>
            <a href="product-detail.html?product=pms">PMS</a>
            <a href="product-detail.html?product=sif">SIF</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropdown__button" type="button">Services v</button>
          <div class="dropdown__panel">
            <a href="services.html">All Services</a>
            <a href="service-detail.html?service=financial-coaching">Financial Coaching</a>
            <a href="service-detail.html?service=financial-planning">Financial Planning</a>
            <a href="service-detail.html?service=goal-based-planning">Goal-based Planning</a>
            <a href="service-detail.html?service=investment-advisory">Investment Advisory</a>
            <a href="service-detail.html?service=retirement-planning">Retirement Planning</a>
            <a href="service-detail.html?service=tax-planning">Tax Planning</a>
            <a href="service-detail.html?service=wealth-management">Wealth Management</a>
          </div>
        </div>
        <a href="calculators.html">Calculators</a>
        <a href="blog.html">Blog</a>
        <a href="careers.html">Careers</a>
        <a href="contact.html">Contact Us</a>
      </div>
      <div class="nav__actions">
        <a class="btn btn--red" href="login.html">Login</a>
        <a class="btn btn--orange" href="signup.html">Sign Up</a>
        <a class="btn btn--gold" href="appointment.html">Book Appointment</a>
      </div>
    </nav>`;
  header.querySelector("[data-menu-toggle]").addEventListener("click", () => {
    header.querySelector(".nav").classList.toggle("is-open");
  });
  header.querySelectorAll(".dropdown__button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const dropdown = event.currentTarget.closest(".dropdown");
      header.querySelectorAll(".dropdown.is-open").forEach((openDropdown) => {
        if (openDropdown !== dropdown) openDropdown.classList.remove("is-open");
      });
      dropdown.classList.toggle("is-open");
    });
  });
  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
      header.querySelectorAll(".dropdown.is-open").forEach((dropdown) => dropdown.classList.remove("is-open"));
    }
  });
}

function renderFooter() {
  const footer = document.querySelector("[data-footer]");
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div>
          <img class="footer-brand" src="assets/yg-logo.png" alt="Y&G Financial Services">
          <h3>Y&G Financial Services Private Limited</h3>
          <p class="footer-registration">An AMFI Registered Mutual Fund Distributor (ARN-134795)</p>
          <p>Investment, protection and wealth creation guidance for Indian investors.</p>
          <p><strong>Phone:</strong> <a href="tel:+919139110009">+91 9139110009</a><br><strong>Email:</strong> <a href="mailto:${leadEmail}">${leadEmail}</a><br><strong>Website:</strong> <a href="https://www.ygfinserv.com">www.ygfinserv.com</a></p>
          <div class="membership-badges" aria-label="Membership details">
            <div class="membership-badge">
              <img class="membership-img" src="assets/amfi-logo.svg" alt="AMFI logo">
              <div><strong>AMFI Registered</strong><small>Mutual Fund Distributor · ARN-134795</small></div>
            </div>
            <div class="membership-badge">
              <img class="membership-img" src="assets/bse-starmf-logo.svg" alt="BSE StAR MF logo">
              <div><strong>BSE StAR MF</strong><small>Platform membership for mutual fund transactions</small></div>
            </div>
            <div class="membership-badge">
              <img class="membership-img" src="assets/nse-nmf-logo.svg" alt="NSE NMF logo">
              <div><strong>NSE NMF</strong><small>Mutual fund transaction platform</small></div>
            </div>
            <div class="membership-badge">
              <img class="membership-img" src="assets/mfu-logo.svg" alt="MFU logo">
              <div><strong>MFU</strong><small>Mutual Fund Utility platform</small></div>
            </div>
          </div>
          <div class="socials" aria-label="Social links">
            <a href="https://facebook.com/ygwealth" target="_blank" rel="noopener" aria-label="Facebook"><img src="https://cdn.simpleicons.org/facebook/ffffff" alt=""></a>
            <a href="https://instagram.com/ygwealth" target="_blank" rel="noopener" aria-label="Instagram"><img src="https://cdn.simpleicons.org/instagram/ffffff" alt=""></a>
            <a href="https://threads.net/ygwealth" target="_blank" rel="noopener" aria-label="Threads"><img src="https://cdn.simpleicons.org/threads/ffffff" alt=""></a>
            <a href="https://x.com/ygfincon" target="_blank" rel="noopener" aria-label="X"><img src="https://cdn.simpleicons.org/x/ffffff" alt=""></a>
            <a href="https://linkedin.com/ygwealth" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="https://cdn.simpleicons.org/linkedin/ffffff" alt=""></a>
            <a href="https://www.youtube.com/@ygfinancialservicepvtltd3553" target="_blank" rel="noopener" aria-label="YouTube"><img src="https://cdn.simpleicons.org/youtube/ffffff" alt=""></a>
            <a href="mailto:${leadEmail}" target="_blank" rel="noopener" aria-label="Email"><img src="https://cdn.simpleicons.org/gmail/ffffff" alt=""></a>
            <a href="https://www.ygfinserv.com" target="_blank" rel="noopener" aria-label="Website"><img src="https://cdn.simpleicons.org/googlechrome/ffffff" alt=""></a>
            <a href="https://wa.me/919139110009" target="_blank" rel="noopener" aria-label="WhatsApp"><img src="https://cdn.simpleicons.org/whatsapp/ffffff" alt=""></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="about.html">About Us</a>
          <a href="team.html">Team</a>
          <a href="calculators.html">Calculators</a>
          <a href="blog.html">Blog</a>
          <a href="careers.html">Careers</a>
          <a href="contact.html">Contact</a>
        </div>
        <div>
          <h4>Products</h4>
          <a href="product-detail.html?product=aif">AIF</a>
          <a href="product-detail.html?product=equity">Equity</a>
          <a href="product-detail.html?product=fixed-deposits">Fixed Deposits</a>
          <a href="product-detail.html?product=critical-illness-insurance">Critical Illness Insurance</a>
          <a href="product-detail.html?product=health-insurance">Health Insurance</a>
          <a href="product-detail.html?product=life-insurance">Life Insurance</a>
          <a href="product-detail.html?product=mutual-funds">Mutual Funds</a>
          <a href="product-detail.html?product=p2p">P2P</a>
          <a href="product-detail.html?product=personal-accident-insurance">Personal Accident Insurance</a>
          <a href="product-detail.html?product=pms">PMS</a>
          <a href="product-detail.html?product=sif">SIF</a>
          <a href="product-detail.html?product=vehicle-insurance">Vehicle Insurance</a>
        </div>
        <div>
          <h4>Services</h4>
          <a href="service-detail.html?service=financial-coaching">Financial Coaching</a>
          <a href="service-detail.html?service=financial-planning">Financial Planning</a>
          <a href="service-detail.html?service=goal-based-planning">Goal-based Planning</a>
          <a href="service-detail.html?service=investment-advisory">Investment Advisory</a>
          <a href="service-detail.html?service=retirement-planning">Retirement Planning</a>
          <a href="service-detail.html?service=tax-planning">Tax Planning</a>
          <a href="service-detail.html?service=wealth-management">Wealth Management</a>
        </div>
      </div>
      <div class="disclaimer">
        <p><strong>Disclaimer:</strong> The information on this website is for education and awareness only and should not be treated as a guaranteed return promise, tax advice, legal advice or personalized investment recommendation unless provided under a formal engagement. Market-linked investments are subject to market risks. Please read all scheme, policy and offer documents carefully before investing. Add applicable registrations, licenses and statutory disclosures before public launch.</p>
        <p>(c) ${new Date().getFullYear()} Y&G Financial Services Private Limited. All rights reserved.</p>
      </div>
    </div>`;
}

function renderProducts() {
  document.querySelectorAll("[data-product-grid]").forEach((grid) => {
    const category = grid.dataset.productGrid;
    grid.innerHTML = Object.entries(products)
      .filter(([, item]) => item.category === category)
      .map(([slug, item]) => `
        <a class="product-card" href="product-detail.html?product=${slug}">
          <span class="icon">${item.category === "investment" ? "Rs" : "+"}</span>
          <h3>${item.name}</h3>
          <p>${simpleProductLine(item)}</p>
          <strong>Explore details</strong>
        </a>`).join("");
  });
}

function renderServices() {
  const grid = document.querySelector("[data-service-grid]");
  if (!grid) return;
  grid.innerHTML = Object.entries(services).map(([slug, item]) => `
    <a class="service-card" href="service-detail.html?service=${slug}">
      <span class="icon">◎</span>
      <h3>${item.name}</h3>
      <p>${simpleServiceLine(item)}</p>
    </a>`).join("");
}

function renderBlogGrid() {
  const grid = document.querySelector("[data-blog-grid]");
  if (!grid) return;
  grid.innerHTML = Object.entries(blogs).map(([slug, blog]) => `
    <a class="blog-card" href="blog-detail.html?post=${slug}">
      <img src="${blog.image}" alt="">
      <div>
        <span>${blog.category} · ${blog.date}</span>
        <h3>${blog.title}</h3>
        <p>${blog.excerpt}</p>
        <strong>Read article</strong>
      </div>
    </a>`).join("");
}

function renderBlogDetail() {
  const main = document.querySelector("[data-blog-detail]");
  if (!main) return;
  const slug = new URLSearchParams(location.search).get("post") || "sip-vs-lumpsum";
  const blog = blogs[slug] || Object.values(blogs)[0];
  document.title = `${blog.title} | Y&G Financial Services Blog`;
  setMetaDescription(blog.excerpt);
  main.innerHTML = `
    <section class="page-hero has-image" style="--page-hero-image:url('${blog.image}')">
      <p class="eyebrow">${blog.category}</p>
      <h1>${blog.title}</h1>
      <p>${blog.excerpt}</p>
    </section>
    <section class="section content-section">
      <article class="article-copy blog-article">
        <p><strong>Published:</strong> ${blog.date}</p>
        ${blog.content.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        <p><strong>Need help?</strong> Speak to Y&amp;G Financial Services Private Limited for a simple review of your goals, investments and protection needs.</p>
        <a class="btn btn--gold" href="appointment.html">Book Appointment</a>
      </article>
    </section>`;
}

function renderDetail() {
  const main = document.querySelector("[data-detail]");
  if (!main) return;
  const type = main.dataset.detail;
  const data = type === "product" ? products : services;
  const item = data[slugFromUrl(type === "product" ? "mutual-funds" : "financial-planning")] || Object.values(data)[0];
  document.title = `${item.name} | Y&G Financial Services Private Limited`;
  if (type === "product") {
    setMetaDescription(`${item.name} by Y&G Financial Services Private Limited. Learn the meaning, benefits, who it suits, key points to check, and how to enquire.`);
    main.innerHTML = `
      <section class="page-hero">
        <p class="eyebrow">${item.category === "investment" ? "Investment Product" : "Protection Product"}</p>
        <h1>${item.name}</h1>
        <p>${item.overview}</p>
      </section>
      <section class="split-section">
        <div>
          <h2>Overview</h2>
          <p>${item.overview}</p>
          <h2>In simple words</h2>
          <p>${simpleProductLine(item)}</p>
          <h2>Who should invest</h2>
          <p>${item.who}</p>
          <a class="btn btn--gold" href="contact.html">Enquire Now</a>
        </div>
        <div class="why-list">
          ${item.benefits.map((benefit) => `<div><strong>${benefit}</strong><span>Discuss suitability with an advisor before investing.</span></div>`).join("")}
        </div>
      </section>
      ${productKnowledgeHtml(item)}
      <section class="section section--tinted">
        <div class="section__head">
          <p class="eyebrow">Before you choose</p>
          <h2>Key considerations</h2>
        </div>
        <div class="grid grid--3">
          ${(item.considerations || []).map((point) => `<div class="info-card"><h3>${point}</h3><p>Our team can help evaluate this point in the context of your goals, cash flow, risk appetite and time horizon.</p></div>`).join("")}
        </div>
      </section>`;
  } else {
    setMetaDescription(`${item.name} service from Y&G Financial Services Private Limited. Understand the problem, solution, benefits, process, and book a consultation.`);
    main.innerHTML = `
      <section class="page-hero">
        <p class="eyebrow">Service</p>
        <h1>${item.name}</h1>
        <p>${item.solution}</p>
      </section>
      <section class="split-section">
        <div>
          <h2>Problem</h2>
          <p>${item.problem}</p>
          <h2>Solution</h2>
          <p>${item.solution}</p>
          <h2>In simple words</h2>
          <p>${simpleServiceLine(item)}</p>
          <a class="btn btn--gold" href="appointment.html">Book Consultation</a>
        </div>
        <div class="why-list">
          ${item.benefits.map((benefit) => `<div><strong>${benefit}</strong><span>Supported through a structured advisory process.</span></div>`).join("")}
        </div>
      </section>
      <section class="section section--tinted">
        <div class="section__head"><p class="eyebrow">Process</p><h2>How we work</h2></div>
        <div class="timeline">${item.process.map((step, index) => `<div><span>${String(index + 1).padStart(2, "0")}</span><h3>${step}</h3><p>Clear documentation and next steps at this stage.</p></div>`).join("")}</div>
      </section>
      ${serviceKnowledgeHtml(item)}`;
  }
  applyPageHeroImage(type, item);
}

const calculatorConfigs = {
  sip: { title: "SIP Calculator", fields: [["Monthly SIP", 25000], ["Expected Return %", 12], ["Years", 15]], calc: ([p, r, y]) => {
    const n = y * 12, rate = r / 100 / 12;
    const fv = futureValueOfSips(p, rate, n);
    return { invested: p * n, value: fv, gain: fv - p * n };
  }},
  stp: { title: "STP Calculator", fields: [["Initial Amount", 1000000], ["Transfer Monthly", 50000], ["Expected Return %", 10], ["Months", 18]], calc: ([initial, transfer, r, months]) => {
    const rate = r / 100 / 12;
    const moved = Math.min(initial, transfer * months);
    const value = moved * (1 + rate * months / 2) + (initial - moved);
    return { invested: initial, value, gain: value - initial };
  }},
  swp: { title: "SWP Calculator", fields: [["Corpus", 5000000], ["Monthly Withdrawal", 40000], ["Expected Return %", 8], ["Years", 10]], calc: ([corpus, withdrawal, r, y]) => {
    let balance = corpus;
    const rate = r / 100 / 12;
    for (let i = 0; i < y * 12; i++) balance = balance * (1 + rate) - withdrawal;
    return { invested: corpus, value: Math.max(balance, 0), gain: balance - corpus, withdrawn: withdrawal * y * 12 };
  }},
  lumpsum: { title: "Lump Sum Calculator", fields: [["Investment", 500000], ["Expected Return %", 12], ["Years", 10]], calc: ([p, r, y]) => {
    const value = p * Math.pow(1 + r / 100, y);
    return { invested: p, value, gain: value - p };
  }},
  "future-value": { title: "Future Value Calculator", fields: [["Present Cost", 1000000], ["Inflation %", 6], ["Years", 12]], calc: ([p, r, y]) => {
    const value = p * Math.pow(1 + r / 100, y);
    return { invested: p, value, gain: value - p };
  }},
  "goal-sip": { title: "Goal-based SIP Calculator", fields: [["Target Amount", 5000000], ["Expected Return %", 12], ["Years", 12]], calc: ([target, r, y]) => {
    const n = y * 12, rate = r / 100 / 12;
    const factor = Math.abs(rate) < 0.0000001 ? n : (((Math.pow(1 + rate, n) - 1) / rate) * (1 + rate));
    const sip = target / factor;
    return { invested: sip * n, value: target, gain: target - sip * n, monthly: sip };
  }},
  retirement: { title: "Retirement Calculator", fields: [["Monthly Expense", 80000], ["Years to Retire", 25], ["Retirement Years", 25], ["Inflation %", 6], ["Post-retirement Return %", 7]], calc: ([expense, years, retirementYears, inflation, postReturn]) => {
    const futureMonthly = expense * Math.pow(1 + inflation / 100, years);
    const realRate = ((1 + postReturn / 100) / (1 + inflation / 100)) - 1;
    const corpus = futureMonthly * 12 * annuityFactor(realRate, retirementYears);
    return { invested: futureMonthly * 12, value: corpus, gain: corpus - futureMonthly * 12 };
  }}
};

function futureValueOfSips(monthly, monthlyRate, months) {
  if (Math.abs(monthlyRate) < 0.0000001) return monthly * months;
  return monthly * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
}

function annuityFactor(rate, years) {
  if (Math.abs(rate) < 0.0000001) return years;
  return (1 - Math.pow(1 + rate, -years)) / rate;
}

function buildChartData(key, values, result) {
  const points = [];
  const colors = {
    base: "#e93223",
    growth: "#f5821f",
    value: "#e93223",
    secondary: "#f5821f"
  };
  const pushPoint = (label, segments) => {
    const cleanSegments = segments.map((segment) => ({ ...segment, value: Math.max(segment.value, 0) }));
    points.push({
      label,
      total: cleanSegments.reduce((sum, segment) => sum + segment.value, 0),
      segments: cleanSegments
    });
  };
  if (key === "sip" || key === "goal-sip") {
    const monthly = key === "goal-sip" ? result.monthly : values[0];
    const annualReturn = values[1];
    const years = Math.max(1, Math.round(values[2]));
    const rate = annualReturn / 100 / 12;
    for (let year = 1; year <= years; year++) {
      const months = year * 12;
      const invested = monthly * months;
      const value = year === years ? result.value : futureValueOfSips(monthly, rate, months);
      pushPoint(`Y${year}`, [
        { label: key === "goal-sip" ? "Total SIP" : "Invested", value: invested, color: colors.base },
        { label: "Growth", value: value - invested, color: colors.growth }
      ]);
    }
  } else if (key === "stp") {
    const [initial, transfer, annualReturn, months] = values;
    const rate = annualReturn / 100 / 12;
    const totalMonths = Math.max(1, Math.round(months));
    const step = 1;
    for (let month = step; month <= totalMonths; month += step) {
      const moved = Math.min(initial, transfer * month);
      const value = month === totalMonths ? result.value : moved * (1 + rate * month / 2) + (initial - moved);
      pushPoint(`M${month}`, [
        { label: "Initial Amount", value: initial, color: colors.base },
        { label: "Growth", value: value - initial, color: colors.growth }
      ]);
    }
  } else if (key === "swp") {
    const [corpus, withdrawal, annualReturn, years] = values;
    const rate = annualReturn / 100 / 12;
    let balance = corpus;
    let withdrawn = 0;
    const totalMonths = Math.max(1, Math.round(years * 12));
    for (let month = 1; month <= totalMonths; month++) {
      balance = balance * (1 + rate) - withdrawal;
      withdrawn += withdrawal;
      if (month % 12 === 0 || month === totalMonths) {
        pushPoint(`Y${Math.ceil(month / 12)}`, [
          { label: "Remaining Corpus", value: month === totalMonths ? result.value : Math.max(balance, 0), color: colors.base },
          { label: "Withdrawn", value: withdrawn, color: colors.growth }
        ]);
      }
    }
  } else if (key === "retirement") {
    const [expense, years, retirementYears, inflation, postReturn] = values;
    const totalYears = Math.max(1, Math.round(years));
    const realRate = ((1 + postReturn / 100) / (1 + inflation / 100)) - 1;
    for (let year = 1; year <= totalYears; year++) {
      const futureAnnualExpense = expense * Math.pow(1 + inflation / 100, year) * 12;
      const corpusNeeded = year === totalYears ? result.value : futureAnnualExpense * annuityFactor(realRate, retirementYears);
      pushPoint(`Y${year}`, [
        { label: "First-year Expense", value: futureAnnualExpense, color: colors.base },
        { label: "Corpus Buffer", value: corpusNeeded - futureAnnualExpense, color: colors.growth }
      ]);
    }
  } else {
    const [principal, annualReturn, years] = values;
    const totalYears = Math.max(1, Math.round(years));
    for (let year = 1; year <= totalYears; year++) {
      const value = year === totalYears ? result.value : principal * Math.pow(1 + annualReturn / 100, year);
      pushPoint(`Y${year}`, [
        { label: key === "future-value" ? "Present Cost" : "Investment", value: principal, color: colors.base },
        { label: key === "future-value" ? "Inflation Impact" : "Growth", value: value - principal, color: colors.growth }
      ]);
    }
  }
  return { points, title: key === "swp" ? "Year-wise Withdrawal Projection" : key === "retirement" ? "Year-wise Retirement Corpus Need" : "Year-wise Growth" };
}

function renderGrowthChart(chartData) {
  const { points, title } = chartData;
  const maxValue = Math.max(...points.map((point) => point.total), 1);
  const axisValues = [maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, 0];
  const legend = points[0]?.segments || [];
  return `
    <div class="chart-block">
      <div class="chart-head">
        <h3>${title}</h3>
        <div class="chart-legend">${legend.map((segment) => `<span><i style="background:${segment.color}"></i>${segment.label}</span>`).join("")}</div>
      </div>
      <div class="growth-chart">
        <div class="y-axis">${axisValues.map((value) => `<span>${formatCompactINR(value)}</span>`).join("")}</div>
        <div class="bar-scroll" role="img" aria-label="Bar chart showing calculated growth over time">
        <div class="bar-plot" style="grid-template-columns: repeat(${points.length}, minmax(12px, 1fr))">
          ${points.map((point) => {
            const totalHeight = Math.max(4, point.total / maxValue * 100);
            return `<div class="bar-column" title="${point.label}: ${formatINR(point.total)}">
              <div class="bar-stack" style="height:${totalHeight}%">
                ${point.segments.slice().reverse().map((segment) => {
                  const share = point.total > 0 ? segment.value / point.total * 100 : 0;
                  return `<span class="bar-segment" style="height:${share}%;background:${segment.color}"></span>`;
                }).join("")}
              </div>
              <span class="x-label">${point.label}</span>
            </div>`;
          }).join("")}
        </div>
        </div>
      </div>
    </div>`;
}

function renderPieChart(key, result) {
  let slices;
  if (key === "swp") {
    slices = [
      { label: "Remaining Corpus", value: result.value, color: "#e93223" },
      { label: "Total Withdrawn", value: result.withdrawn || 0, color: "#f5821f" }
    ];
  } else if (key === "retirement") {
    slices = [
      { label: "Future Annual Expense", value: result.invested, color: "#e93223" },
      { label: "Corpus Buffer", value: Math.max(result.value - result.invested, 0), color: "#f5821f" }
    ];
  } else if (result.gain < 0) {
    slices = [
      { label: "Estimated Value", value: result.value, color: "#e93223" },
      { label: "Estimated Loss", value: Math.abs(result.gain), color: "#74706f" }
    ];
  } else {
    slices = [
      { label: result.monthly ? "Total SIP" : key === "future-value" ? "Present Cost" : "Invested/Base", value: result.invested, color: "#e93223" },
      { label: key === "future-value" ? "Inflation Impact" : "Growth/Gain", value: result.gain, color: "#f5821f" }
    ];
  }
  const total = Math.max(slices.reduce((sum, item) => sum + item.value, 0), 1);
  let cursor = 0;
  const gradient = slices.map((slice) => {
    const start = cursor;
    cursor += slice.value / total * 100;
    return `${slice.color} ${start}% ${cursor}%`;
  }).join(", ");
  return `
    <div class="pie-card">
      <h3>Value Composition</h3>
      <div class="pie-wrap">
        <div class="pie-chart" style="background: conic-gradient(${gradient})"><span>${formatCompactINR(total)}</span></div>
        <div class="pie-legend">
          ${slices.map((slice) => `<div><i style="background:${slice.color}"></i><span>${slice.label}</span><strong>${formatINR(slice.value)}</strong></div>`).join("")}
        </div>
      </div>
    </div>`;
}

function renderProjectionTable(chartData) {
  const { points } = chartData;
  const segmentLabels = points[0]?.segments.map((segment) => segment.label) || [];
  return `
    <div class="projection-table-card">
      <div class="chart-head">
        <h3>Projection Table</h3>
        <span class="table-note">Values are based on the current inputs.</span>
      </div>
      <div class="table-scroll">
        <table class="projection-table">
          <thead>
            <tr>
              <th>Period</th>
              ${segmentLabels.map((label) => `<th>${label}</th>`).join("")}
              <th>Total Value</th>
            </tr>
          </thead>
          <tbody>
            ${points.map((point) => `
              <tr>
                <td>${point.label}</td>
                ${point.segments.map((segment) => `<td>${formatINR(segment.value)}</td>`).join("")}
                <td><strong>${formatINR(point.total)}</strong></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>`;
}

function renderCalculators() {
  const shell = document.querySelector("[data-calculators]");
  if (!shell) return;
  const tabs = [...document.querySelectorAll("[data-calc-tab]")];
  const render = (key) => {
    const config = calculatorConfigs[key];
    tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.calcTab === key));
    shell.innerHTML = `
      <article class="calculator-card" id="${key}">
        <p class="eyebrow">Interactive estimate</p>
        <h2>${config.title}</h2>
        <div class="calculator-form">
          ${config.fields.map(([label, value], index) => `<label>${label}<input type="number" min="0" step="0.01" value="${value}" data-calc-field="${index}"></label>`).join("")}
        </div>
        <div class="calculator-visuals" data-calc-visual></div>
        <div class="result-grid" data-calc-results></div>
      </article>`;
    const update = () => {
      const values = [...shell.querySelectorAll("[data-calc-field]")].map((input) => Number(input.value));
      const result = config.calc(values);
      const firstLabel = result.monthly ? "Monthly SIP" : key === "swp" ? "Original Corpus" : key === "retirement" ? "Future Annual Expense" : "Invested / Base";
      const secondLabel = key === "swp" ? "Remaining Corpus" : key === "retirement" ? "Required Corpus" : "Estimated Value";
      const thirdLabel = key === "swp" ? "Net Growth / Drawdown" : key === "retirement" ? "Corpus Buffer" : "Estimated Gain / Gap";
      shell.querySelector("[data-calc-results]").innerHTML = `
        <div class="result-tile"><span>${firstLabel}</span><strong>${formatINR(result.monthly || result.invested)}</strong></div>
        <div class="result-tile"><span>${secondLabel}</span><strong>${formatINR(result.value)}</strong></div>
        <div class="result-tile"><span>${thirdLabel}</span><strong>${formatINR(result.gain)}</strong></div>`;
      const chartData = buildChartData(key, values, result);
      shell.querySelector("[data-calc-visual]").innerHTML = renderGrowthChart(chartData) + renderPieChart(key, result) + renderProjectionTable(chartData);
    };
    shell.querySelectorAll("[data-calc-field]").forEach((input) => input.addEventListener("input", update));
    update();
  };
  tabs.forEach((tab) => tab.addEventListener("click", () => render(tab.dataset.calcTab)));
  const hashKey = location.hash.replace("#", "");
  render(calculatorConfigs[hashKey] ? hashKey : "sip");
}

function initForms() {
  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const note = form.querySelector("[data-form-note]");
      const formType = form.dataset.form;
      const shouldEmail = formType === "contact" || formType === "appointment" || formType === "signup";

      if (!shouldEmail) {
        if (note) note.textContent = "Thank you. Your details have been captured for follow-up.";
        form.reset();
        return;
      }

      const formData = new FormData(form);
      const subjects = {
        appointment: "New appointment booking from Y&G website",
        contact: "New contact enquiry from Y&G website",
        signup: "New sign up request from Y&G website"
      };
      formData.append("_subject", subjects[formType] || "New website enquiry from Y&G website");
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      formData.append("source", location.href);

      if (note) note.textContent = "Sending your details...";

      try {
        const response = await fetch(emailFormEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData
        });
        if (!response.ok) throw new Error("Email service unavailable");
        if (note) note.textContent = "Thank you. Your details have been emailed to our team.";
        form.reset();
      } catch (error) {
        const subject = encodeURIComponent(formData.get("_subject"));
        const body = encodeURIComponent(Array.from(formData.entries())
          .filter(([key]) => !key.startsWith("_"))
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n"));
        window.location.href = `mailto:${leadEmail}?subject=${subject}&body=${body}`;
        if (note) note.textContent = "Your email app has been opened with the enquiry details.";
      }
    });
  });
}

function initCalendar() {
  const grid = document.querySelector("[data-calendar]");
  if (!grid) return;
  const title = document.querySelector("[data-calendar-title]");
  const selectedInput = document.querySelector("[data-selected-date]");
  let cursor = new Date();
  cursor.setDate(1);
  const render = () => {
    const year = cursor.getFullYear();
    const month = cursor.getMonth();
    title.textContent = cursor.toLocaleString("en-IN", { month: "long", year: "numeric" });
    const firstDay = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    const cells = [];
    for (let i = 0; i < firstDay; i++) cells.push("<span></span>");
    for (let day = 1; day <= days; day++) {
      const date = new Date(year, month, day);
      const disabled = date < new Date(today.getFullYear(), today.getMonth(), today.getDate()) || date.getDay() === 0;
      cells.push(`<button class="calendar-day" type="button" ${disabled ? "disabled" : ""} data-date="${formatDateLocal(date)}">${day}</button>`);
    }
    grid.innerHTML = cells.join("");
    grid.querySelectorAll("[data-date]").forEach((button) => button.addEventListener("click", () => {
      grid.querySelectorAll(".calendar-day").forEach((day) => day.classList.remove("is-selected"));
      button.classList.add("is-selected");
      selectedInput.value = button.dataset.date;
    }));
  };
  document.querySelector("[data-month-prev]").addEventListener("click", () => {
    cursor.setMonth(cursor.getMonth() - 1);
    render();
  });
  document.querySelector("[data-month-next]").addEventListener("click", () => {
    cursor.setMonth(cursor.getMonth() + 1);
    render();
  });
  render();
}

renderHeader();
addBusinessSchema();
renderFooter();
renderProducts();
renderServices();
renderBlogGrid();
renderBlogDetail();
renderDetail();
applyPageHeroImage();
initHeroSlider();
renderCalculators();
initForms();
initCalendar();
normalizeInternalLinks();
hideHtmlExtension();
