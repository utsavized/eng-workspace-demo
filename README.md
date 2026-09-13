# Engineering Workboard

A small, creator-owned React and TypeScript project built for a Coder Agents demonstration. It resembles an internal engineering task dashboard and begins in a complete, working state so the demo can focus on delegated development rather than scaffolding.

## Run locally

```bash
npm install
npm run dev
```

Vite serves the app at `http://localhost:5173` by default.

## Verify

```bash
npm test
npm run build
```

## Planned agent task

The baseline intentionally does not include priority filtering. During the demonstration, the coding agent will receive this request:

> Add a priority filter to the task dashboard with All, High, Medium, and Low options. Persist the selected filter in the URL, show an appropriate empty state, add or update automated tests, run the test suite, and summarize the files changed.

This task is intentionally small but crosses multiple parts of a normal codebase: interface design, application state, browser behavior, edge cases, and automated tests.

## Demo notes

- Keep the baseline branch unchanged until the recording workflow is finalized.
- Run the prompt from a fresh Coder workspace so the result is reproducible.
- Review the diff, test output, and finished interface on camera.
- This repository contains no production data, secrets, or sponsor code.
