# StudentHub Smart System V3 — Ready-to-Run Course Demo

This version requires NO Firebase account, API key, database server, PHP, or installation.

## Run
1. Extract the ZIP.
2. Open `index.html` in Chrome/Edge.
3. Create an account.
4. Submit verification (course-demo mode marks the account verified locally).
5. Post gigs, apply from another account, select a worker, demo-fund escrow, complete work, and release payment.
6. Create projects and send join requests.
7. Edit the profile and view live counts.

## Data storage
Data is saved in the browser using `localStorage`. It stays on the same browser/device until site data is cleared. Payments are simulation only; no real money is charged.

## Important
This is a front-end course-project/demo build. For a real public deployment with multi-device accounts, secure document storage, admin review, and real payments, a backend such as Firebase/Supabase/PHP+MySQL must be connected.


## V4 fix
JavaScript modules were converted to normal browser scripts so Register/Login also work when you open index.html directly with file:// (double-click), without Live Server.
