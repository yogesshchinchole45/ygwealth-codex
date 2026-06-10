const formatInr = (value) => new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0
}).format(Number.isFinite(value) ? value : 0);

const calculatorMap = {
  sip: {
    title: "SIP Calculator",
    fields: [["Monthly SIP", 25000], ["Expected Return %", 12], ["Years", 15]],
    calc: ([p, r, y]) => {
      const months = y * 12;
      const rate = r / 100 / 12;
      const value = rate ? p * (((1 + rate) ** months - 1) / rate) * (1 + rate) : p * months;
      const invested = p * months;
      return { invested, value, gain: value - invested };
    }
  },
  lumpsum: {
    title: "Lump Sum Calculator",
    fields: [["Investment", 500000], ["Expected Return %", 12], ["Years", 10]],
    calc: ([p, r, y]) => {
      const value = p * ((1 + r / 100) ** y);
      return { invested: p, value, gain: value - p };
    }
  },
  future: {
    title: "Future Value Calculator",
    fields: [["Current Amount", 500000], ["Growth Rate %", 8], ["Years", 10]],
    calc: ([p, r, y]) => {
      const value = p * ((1 + r / 100) ** y);
      return { invested: p, value, gain: value - p };
    }
  },
  retirement: {
    title: "Retirement Calculator",
    fields: [["Current Savings", 1000000], ["Monthly Saving", 30000], ["Return %", 10], ["Years", 20]],
    calc: ([current, monthly, r, y]) => {
      const months = y * 12;
      const rate = r / 100 / 12;
      const existing = current * ((1 + r / 100) ** y);
      const sip = rate ? monthly * (((1 + rate) ** months - 1) / rate) * (1 + rate) : monthly * months;
      const invested = current + monthly * months;
      const value = existing + sip;
      return { invested, value, gain: value - invested };
    }
  }
};

function renderYgCalculators() {
  document.querySelectorAll("[data-yg-calculators]").forEach((root) => {
    const tabs = Object.keys(calculatorMap);
    root.innerHTML = `<div class="yg-calculator-tabs">${tabs.map((key) => `<button type="button" data-calc="${key}">${calculatorMap[key].title}</button>`).join("")}</div><div data-calc-body></div>`;
    const body = root.querySelector("[data-calc-body]");
    const render = (key) => {
      const config = calculatorMap[key];
      root.querySelectorAll("[data-calc]").forEach((button) => button.classList.toggle("is-active", button.dataset.calc === key));
      body.innerHTML = `<div class="yg-calculator-card"><h3>${config.title}</h3><div class="yg-calculator-grid">${config.fields.map(([label, value], index) => `<label>${label}<input type="number" value="${value}" data-field="${index}"></label>`).join("")}</div><div class="yg-result-grid" data-results></div></div>`;
      const update = () => {
        const values = Array.from(body.querySelectorAll("[data-field]")).map((input) => Number(input.value || 0));
        const result = config.calc(values);
        body.querySelector("[data-results]").innerHTML = `<div class="yg-result"><span>Invested / Base</span><strong>${formatInr(result.invested)}</strong></div><div class="yg-result"><span>Estimated Value</span><strong>${formatInr(result.value)}</strong></div><div class="yg-result"><span>Estimated Gain</span><strong>${formatInr(result.gain)}</strong></div>`;
      };
      body.querySelectorAll("[data-field]").forEach((input) => input.addEventListener("input", update));
      update();
    };
    root.querySelectorAll("[data-calc]").forEach((button) => button.addEventListener("click", () => render(button.dataset.calc)));
    render("sip");
  });
}

document.addEventListener("DOMContentLoaded", renderYgCalculators);
