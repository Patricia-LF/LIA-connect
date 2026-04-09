# LIA Connect

A mobile-first React application built for the Yrgo LIA event, where students and companies can connect based on shared interests.

## About

LIA Connect lets students and company representatives select their areas of interest — such as Frontend, UX, Branding or Motion Design — and get a visual color profile based on their choices. The profile can then be used as a conversation starter when mingling at the event.

## Features

- Choose role as student or company representative
- Select areas of interest, each with a unique color
- Get a visual profile with an animated circle organism
- Browse interest cards with conversation starters
- Students can add a portfolio link and generate a QR code

## Tech stack

- React
- React Router
- CSS Modules
- Vite

## Getting started

Install dependencies:

```bash
npm install
```

The following package is included in `package.json` and will be installed automatically:

- `qrcode.react` — QR code generation

Start the development server:

```bash
npm run dev
```

## Deployment

The app is deployed on Netlify at [(https://lia-connect.netlify.app/)].

## Developed by

Andrea Kutchoukov  
Erik Karlsson  
Patricia Loayza Frykberg  
Robin Andersson  
Yrgo WU25 & DD25 — 2026

## Possible improvements

- The `html2canvas` package could be used to allow users to save their profile as an image.

- A database was not necessary for this specific event, but adding one could be useful for creating user profiles and saving results.

- We created an array containing information about the companies attending the event, but we did not have time to validate the data.
