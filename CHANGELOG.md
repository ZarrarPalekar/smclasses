# Changelog

All notable changes to this project are documented in this file.

## [Unreleased] - 2026-02-15
- Revamp: Full responsive redesign (mobile-first)
  - Added utilities and section-level mobile-first CSS under `src/styles/`.
  - Added responsive styles for hero, features, about, services, gallery, toppers, team, testimonials, recent-results, and footer.
  - Added `.img-responsive` utility and gallery helpers.
  - Navigation: accessible hamburger, auto-close on resize and Escape.
  - Adjusted floating action buttons (WhatsApp, call) for smaller screens.
  - Minor JavaScript accessibility and behavior tweaks.

Files of interest:
- `src/styles/utilities.css`
- `src/styles/sections/*` (new section styles)
- `src/components/navigation.jsx` (accessibility + behavior)
- `src/components/*.styles.css` (floating buttons, avatars)
