// config.js — sheet metadata for the Sheets Portal.
//
// -----------------------------------------------------------------------------
// How to generate a SHA-256 hash for a password
// -----------------------------------------------------------------------------
// Open this site (or any page) in a browser, open DevTools > Console, and run:
//
//   const buf = await crypto.subtle.digest(
//     'SHA-256',
//     new TextEncoder().encode('your-password-here')
//   );
//   Array.from(new Uint8Array(buf))
//     .map(b => b.toString(16).padStart(2, '0'))
//     .join('');
//
// Copy the returned hex string into the `passwordHash` field below.
// Never commit the plain-text password.
//
// -----------------------------------------------------------------------------
// How to get an embed URL
// -----------------------------------------------------------------------------
// In Google Sheets: File > Share > Publish to web > Embed > Entire document (or
// a specific tab). Copy the URL out of the generated <iframe> tag. It looks
// like:
//   https://docs.google.com/spreadsheets/d/e/2PACX-<id>/pubhtml?widget=true&headers=false
//
// -----------------------------------------------------------------------------
// Security notes (read before deploying)
// -----------------------------------------------------------------------------
// * This is casual gating, not authentication. The hash below is visible to
//   anyone who opens DevTools and can be brute-forced offline against a
//   dictionary — a weak password gives no meaningful protection.
// * The mechanism defends against casual URL exposure (browser history,
//   shoulder-surfing the address bar on a shared PC), not a determined attacker.
// * A stronger long-term alternative is to share each Google Sheet with
//   specific Google accounts only and authenticate viewers with Google Sign-In,
//   removing the client-side password entirely.
// -----------------------------------------------------------------------------

// Both entries are seeded with the SHA-256 hex of the string "changeme" so the
// portal works out of the box. Replace these hashes and embed URLs before use.
export const SHEETS = {
  portfolio: {
    name: "Portfolio Sheet",
    passwordHash:
      "057ba03d6c44104863dc7361fe4578965d1887360f90a0895882e58a6248fc86",
    embedUrl:
      "https://docs.google.com/spreadsheets/d/e/2PACX-REPLACE_ME/pubhtml?widget=true&headers=false",
  },
  encryption: {
    name: "Encryption Sheet",
    passwordHash:
      "057ba03d6c44104863dc7361fe4578965d1887360f90a0895882e58a6248fc86",
    embedUrl:
      "https://docs.google.com/spreadsheets/d/e/2PACX-REPLACE_ME/pubhtml?widget=true&headers=false",
  },
};

// Fixed session expiry from the moment of login. Not sliding — activity does
// not extend it. sessionStorage also clears everything on tab close.
export const SESSION_TIMEOUT_MS = 30 * 60 * 1000;
