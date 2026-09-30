// Finished example: Adsterra, Customer Support.
// To view it: copy this file over data.js in the main folder, then open index.html.
window.INTERVIEW = {
  meta: {
    company: "Adsterra",
    role: "Customer Support",
    tagline: "Tap any question to open the answer. Say it in your own words, keep it short."
  },
  golden: "Check the facts. Explain in plain words. Give a next step with a time.",
  company: {
    title: "The company in 30 seconds",
    cards: [
      { title: "What Adsterra is", text: "An ad network: a middleman. Website owners (publishers) show ads and earn money. Businesses (advertisers) pay to have their ads shown." },
      { title: "Who you help", text: "Two groups: publishers (\"why did my earnings drop?\") and advertisers (\"why is my campaign not working?\")." },
      { title: "Ad types", tag: "know 3", text: "Popunder (opens in a new tab behind the page), Social Bar (small message-style ad), Native banners (ads that look like page content), Direct Link, Banners." },
      { title: "How money is counted", text: "CPM = price per 1,000 views. CPC = price per click. CPA = price per sign-up or sale." },
      { title: "Where", tag: "verify", text: "Founded around 2013, with a strong presence in Cyprus (Limassol). Check their site before the call, do not state it as fact unless you have seen it." },
      { title: "Why support matters", text: "Publishers and advertisers are both paying or earning money. A fast, clear answer keeps them from leaving to a competitor." }
    ],
    say: {
      q: "SAY THIS: \"WHAT DO YOU KNOW ABOUT US?\"",
      a: "\"Adsterra is an ad network that connects website owners with advertisers. Support is the human side of that: helping publishers earn and advertisers get results, so both keep working with you.\""
    }
  },
  role: {
    title: "The role: what support really does",
    cards: [
      { title: "Daily work", text: "Answer tickets, chats and emails. Solve problems or pass them to the right team." },
      { title: "Common publisher issues", text: "Site rejected, earnings dropped, late payment, ad code not working." },
      { title: "Common advertiser issues", text: "Low traffic, ad rejected, funding or refund questions." },
      { title: "How you are judged", text: "Speed of first reply, time to solve, customer satisfaction score (CSAT), and clear notes for the team." }
    ],
    say: {
      q: "SAY THIS: \"WHAT MAKES A GOOD SUPPORT AGENT?\"",
      a: "\"Staying calm, explaining things simply, and always following through. The customer should never have to ask twice.\""
    }
  },
  method: {
    title: "Your 5-step method (repeat it on the call)",
    steps: [
      { t: "Listen", d: "Let them finish. Repeat the problem back." },
      { t: "Care", d: "\"I understand, that is frustrating.\"" },
      { t: "Check", d: "Look at the facts before promising." },
      { t: "Fix", d: "Give the answer and a time." },
      { t: "Follow up", d: "Make sure it actually worked." }
    ],
    phrases: [
      "\"Let me check that for you.\"",
      "\"Here is what I can do.\"",
      "\"I do not know yet, but I will find out and come back to you by [time].\"",
      "\"I understand this is frustrating, let me fix it now.\"",
      "Angry customer rule: Acknowledge, Apologise, Act."
    ]
  },
  sections: [
    { title: "Publisher scenarios", items: [
      { q: "Earnings dropped 50% overnight. What do you do?", a: "First I check if it is on our side, like a system issue or a changed ad format. Then I look at their traffic: did visitors drop, or the country mix change? I explain what I found and what they can try." },
      { q: "Website rejected. They are upset and say it is a good site.", a: "I tell them I understand, then check the exact rejection reason. I explain it in plain words, tell them what to fix, and say they can reapply once it is done." },
      { q: "Payment is late.", a: "I check the payment date and status first so I am not guessing. If it is within the normal window I give them the date. If it is late I escalate right away and tell them when I will update them." },
      { q: "Ad code installed but no ads show.", a: "I ask for the site link and check the code is placed correctly. I also check for ad blockers or the code loading in the wrong place, and walk them through it step by step." },
      { q: "Their numbers are lower than what we show, or the other way round.", a: "This is common. Different tools count differently, so a small gap is normal. I explain that, and if the gap is large I check for things like bot traffic being filtered out." }
    ]},
    { title: "Advertiser scenarios", items: [
      { q: "Spent the budget, got no results.", a: "I check the basics first: country targeting, the price they bid, and whether the ad was approved. Then I suggest specific changes, like a higher bid or a wider audience." },
      { q: "Their ad was rejected.", a: "I tell them exactly which rule it broke and how to fix it. Then I offer to look at the new version before they resubmit, so it does not bounce twice." },
      { q: "They want a refund.", a: "I listen to why, then check our refund policy before promising anything. If I cannot approve it myself I pass it to the right team and tell them when to expect an answer." },
      { q: "They say the traffic is fake.", a: "I take it seriously. I ask for dates and the campaign ID, pass it to the team that checks traffic quality, and keep them updated until it is resolved." }
    ]},
    { title: "Pressure and behaviour", items: [
      { q: "Customer writes in capitals: \"you are useless\".", a: "I stay calm and do not take it personally. I say \"I understand this is frustrating, let me fix it now\" and go straight to the problem. Solving it is what calms them down." },
      { q: "Two customers, both urgent. Who first?", a: "The one where money or a blocked account is at stake. I send the other a quick message so they know I have not forgotten them." },
      { q: "You gave wrong information.", a: "I tell the customer straight away, apologise, and give the right answer. Then I note it so it does not happen again." },
      { q: "Something outside your role.", a: "I do not guess. I say \"let me get the right person for this\", hand it over with full notes so they do not repeat themselves, and follow up." },
      { q: "Same problem from many customers.", a: "I tell my team lead and suggest a template answer or a help article, so everyone is fixed faster." }
    ]},
    { title: "About you", items: [
      { q: "Why should we choose you?", a: "I stay calm, I explain things clearly, and I follow through. I also have real experience: [one line from your CV], and I am ready to learn your product fast." },
      { q: "Explain a technical term to a beginner.", a: "I use a simple comparison. For example, CPM is like paying per 1,000 people who walk past a billboard, whether or not they stop." },
      { q: "How do you learn a new product quickly?", a: "I use the product myself, read the help pages, and ask lots of questions in the first weeks. I keep notes on common problems." },
      { q: "How do you write a good customer email?", a: "Short and clear: greet them, show I understood the problem, give the answer or next step, and say when they will hear from me next." },
      { q: "Why do you want to leave your last job?", a: "Keep it positive: \"I learned a lot there, and now I want a role where I can grow in a fast-moving online industry like yours.\" Never criticise a past employer." }
    ]}
  ],
  ask: [
    "\"What does a typical day look like for the support team?\"",
    "\"How do you measure success in this role in the first 3 months?\"",
    "\"What are the most common issues customers write in about?\"",
    "\"What training do new agents get?\"",
    "\"What are the next steps in the process?\""
  ],
  askNote: "Asking 2 or 3 of these shows you are serious. Ask the last one every time.",
  terms: [
    { t: "Publisher", d: "shows ads on their site and earns" },
    { t: "Advertiser", d: "pays to show ads" },
    { t: "Impression", d: "one time an ad is shown" },
    { t: "CTR", d: "share of viewers who click" },
    { t: "eCPM", d: "earnings per 1,000 views" },
    { t: "Fill rate", d: "how often an ad slot actually gets an ad" },
    { t: "GEO", d: "the country of the visitor" },
    { t: "Traffic fraud", d: "fake visits from bots" },
    { t: "Ticket", d: "one customer request in the system" },
    { t: "Escalation", d: "passing a case to a senior or another team" },
    { t: "First response time", d: "how fast you first reply" },
    { t: "SLA", d: "the promised reply or fix time" }
  ],
  termsNote: "If asked about payout minimums or exact schedules: \"I would check the current policy so I give the right number.\" Do not guess.",
  checklist: [
    "Glass of water, quiet room, headphones working",
    "Open Adsterra.com and read the homepage for 2 minutes",
    "Have your CV open, pick one real customer example",
    "Smile, speak slowly, short answers",
    "Say \"I do not know, but I will find out\" instead of guessing",
    "Ask your questions at the end"
  ]
};
