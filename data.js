// YOUR INTERVIEW CONTENT. Edit this file, then open index.html.
// Every [BRACKET] is a slot to fill in. Search this file for "[" to find them all.
// Fastest way: paste PROMPT.md into Claude with the job ad and your CV, it fills this file for you.
// Keep answers to 1 or 2 lines, written the way you would actually say them out loud.
window.INTERVIEW = {
  meta: {
    company: "[COMPANY]",
    role: "[ROLE, e.g. Customer Support]",
    tagline: "Tap any question to open the answer. Say it in your own words, keep it short."
  },

  golden: "Check the facts. Explain in plain words. Give a next step with a time.",

  company: {
    title: "The company in 30 seconds",
    cards: [
      { title: "What they do", text: "[One plain sentence: who pays them, what they sell]" },
      { title: "Who they help", text: "[Their two or three customer types]" },
      { title: "Main products", tag: "know 3", text: "[Product 1, product 2, product 3, each in a few plain words]" },
      { title: "How they make money", text: "[Subscription, commission, per sale, etc.]" },
      { title: "Where and how big", tag: "verify", text: "[Founded, HQ, size. Only say what you have seen on their site]" },
      { title: "Why support matters here", text: "[What happens to the business if a customer gets a slow or wrong answer]" }
    ],
    say: {
      q: "SAY THIS: \"WHAT DO YOU KNOW ABOUT US?\"",
      a: "\"[COMPANY] is [what they do in one line]. Support is the human side of that: helping [customer type 1] and [customer type 2] get what they need, so they keep working with you.\""
    }
  },

  role: {
    title: "The role: what it really involves",
    cards: [
      { title: "Daily work", text: "Answer tickets, chats and emails. Solve problems or pass them to the right team." },
      { title: "Common issue type 1", text: "[e.g. account or access problems]" },
      { title: "Common issue type 2", text: "[e.g. billing or payment problems]" },
      { title: "How you are judged", text: "Speed of first reply, time to solve, customer satisfaction score, and clear notes for the team." }
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
    {
      title: "Scenarios: customer type 1",
      items: [
        { q: "[Specific problem this customer type has, written as a question]", a: "[1 or 2 lines: what you check first, what you tell them, what happens next]" },
        { q: "[Another realistic problem]", a: "[Your answer]" },
        { q: "[Another realistic problem]", a: "[Your answer]" }
      ]
    },
    {
      title: "Scenarios: customer type 2",
      items: [
        { q: "[Specific problem]", a: "[Your answer]" },
        { q: "[Specific problem]", a: "[Your answer]" }
      ]
    },
    {
      title: "Pressure and behaviour",
      items: [
        { q: "Customer writes in capitals: \"you are useless\".", a: "I stay calm and do not take it personally. I say \"I understand this is frustrating, let me fix it now\" and go straight to the problem. Solving it is what calms them down." },
        { q: "Two customers, both urgent. Who first?", a: "The one where money or a blocked account is at stake. I send the other a quick message so they know I have not forgotten them." },
        { q: "You gave wrong information.", a: "I tell the customer straight away, apologise, and give the right answer. Then I note it so it does not happen again." },
        { q: "Something outside your role.", a: "I do not guess. I say \"let me get the right person for this\", hand it over with full notes so they do not repeat themselves, and follow up." },
        { q: "Same problem from many customers.", a: "I tell my team lead and suggest a template answer or a help article, so everyone is fixed faster." }
      ]
    },
    {
      title: "About you",
      items: [
        { q: "Why should we choose you?", a: "I stay calm, I explain things clearly, and I follow through. I also have real experience: [one line from your CV], and I am ready to learn your product fast." },
        { q: "Tell me about a time you helped an unhappy customer.", a: "[Your real story in 3 short parts: the problem, what you did, the result]" },
        { q: "How do you learn a new product quickly?", a: "I use the product myself, read the help pages, and ask lots of questions in the first weeks. I keep notes on common problems." },
        { q: "How do you write a good customer email?", a: "Short and clear: greet them, show I understood the problem, give the answer or next step, and say when they will hear from me next." },
        { q: "Why do you want to leave your last job?", a: "Keep it positive: \"I learned a lot there, and now I want a role where I can grow in [industry].\" Never criticise a past employer." },
        { q: "Where do you see yourself in a few years?", a: "[Honest, simple: e.g. growing into a senior support or team lead role at a company like this]" }
      ]
    }
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
    { t: "Ticket", d: "one customer request in the system" },
    { t: "Escalation", d: "passing a case to a senior or another team" },
    { t: "First response time", d: "how fast you first reply" },
    { t: "SLA", d: "the promised reply or fix time" },
    { t: "CSAT", d: "customer satisfaction score" },
    { t: "Tier 1 / Tier 2", d: "first-line support / harder cases" },
    { t: "[Industry term]", d: "[plain meaning]" },
    { t: "[Industry term]", d: "[plain meaning]" }
  ],
  termsNote: "If asked for an exact policy or number you do not know: \"I would check the current policy so I give you the right answer.\" Do not guess.",

  checklist: [
    "Glass of water, quiet room, headphones working",
    "Read the company homepage for 2 minutes",
    "Have your CV open, pick one real customer example",
    "Smile, speak slowly, short answers",
    "Say \"I do not know, but I will find out\" instead of guessing",
    "Ask your questions at the end"
  ]
};
