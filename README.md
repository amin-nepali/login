# Amin Nepali — Secure Access

A responsive, animated sign-in interface with sign-in, registration, and password-recovery screens.

## Run locally

```sh
npm install
npm run dev
```

## Demo behavior

This project is a front-end demo, not an authentication system:

- Sign-in validates required fields in the browser and then redirects to `https://aminnepali.com.np/`. It does not verify an identity.
- Registration and recovery show an explicit demo-only message. They do not create accounts or send email.
- Form values are not stored or sent to a server.

Do not use this demo to collect real credentials. Before production, connect an authentication provider and implement server-side sign-in, registration, recovery, session management, and appropriate abuse protections. Then remove or update the demo notice and flow.
