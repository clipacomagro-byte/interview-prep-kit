---
name: interview
description: Use when the user says they have an interview with a company. Researches the company and role immediately, matches the user's real CV to the job's duties, and builds the cheat sheet (data.js) in this kit.
---

# Interview: research and build the cheat sheet

Trigger: "I have an interview with <company>" (role optional).

## CV SOURCE
Look for the user's CV in this folder (a file named cv*, resume*, or CV.md; it is gitignored) or ask once for a path or pasted text.

## What to do, in order, without asking questions

1. Get the company and role from the message. If the role is missing, infer it from the job ad you find. Only ask if you truly cannot tell.
2. Research right away (WebSearch, WebFetch): what the company does, who pays them, products, customer types, size and location, and the actual job ad with its listed duties. Anything you could not confirm gets the tag "verify".
3. Read the candidate's CV (see CV SOURCE below). Pick the CV closest to the role.
4. Map real positions and experience onto each duty in the job ad. Use only what the CV really says. Never invent experience, employers, numbers or tools.
5. Write `data.js` in the kit folder (same keys as the current file, see data.js and examples/). Rules:
   - Plain language, every technical word explained. Answers 1 to 2 lines, said out loud.
   - 5 to 8 scenario questions per customer type, specific to this company's real customers and products, not generic.
   - "About you" answers use real CV facts (a real story: problem, what they did, result).
   - Mark unsure company facts with the tag "verify".
   - No em dashes or en dashes.
   - Keep the method, golden rule and pressure section unless the role is not customer facing, then swap in role-fitting equivalents.
6. Open `index.html` for the user.
7. Reply with a short result: what you found about the company, the 3 duties in the ad that matter most, which CV facts you leaned on, and the "verify" items to check before the call. Plain language, no recap of the process.

If a `data.js` already holds another interview, save it first as `examples/<company>.js`.
