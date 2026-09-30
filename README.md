# Interview Prep Kit

A one-page cheat sheet you keep open during an interview call. Tap a question,
read the answer, say it in your own words. Works on a laptop or a phone. No
install, no internet needed once you have the files.

It ships set up for customer support roles, and the structure works for any
role where you get scenario questions.

## Use it for a new interview

Open this folder in Claude Code and say one sentence:

> I have an interview with Adsterra

Claude researches the company and the role, reads your CV, matches your real
experience to what the job asks for, fills `data.js`, opens the sheet and tells
you what to double-check. Nothing else to do. (Put your CV in this folder first
as `cv.md` or `cv.txt`. It is ignored by git, so it stays private.)

Without Claude Code: click **Use this template**, paste `PROMPT.md` into any AI
chat with the job ad and your CV, save the result over `data.js`, and
double-click `index.html`.

## See a finished example

Copy `examples/adsterra.js` over `data.js`, then open `index.html`.

## What is on the sheet

- One golden rule to fall back on when your mind goes blank
- The company in 30 seconds, with a ready answer for "what do you know about us?"
- The role, what it involves and how you are judged
- A 5-step method plus phrases you can repeat word for word
- Scenario questions with 1 to 2 line answers you can say out loud
- Questions for you to ask them
- A plain-language word list
- A checklist for the minutes before the call

## Files

- `index.html`: the page. You never need to edit it.
- `data.js`: all the content. This is the only file you change.
- `PROMPT.md`: the text to paste into Claude to fill `data.js` for you.
- `examples/`: finished sheets to copy from.
