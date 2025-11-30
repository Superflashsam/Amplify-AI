# Supabase Authentication Setup

## Environment

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Install

1. Add dependencies:
   - `@supabase/supabase-js`, `zod`
   - Dev: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `@playwright/test`

2. Start dev server.

## Database

Execute `supabase/schema.sql` in your Supabase SQL editor to create `profiles` with RLS policies.

## Usage

- Storage preference is controlled by `localStorage.auth_storage_pref` (`local` or `session`).
- OAuth providers: Google, Microsoft (Azure), GitHub.
- Password reset uses `redirectTo` to `/<origin>/reset`.

## Security

- CSRF token stored in `SameSite=Strict` cookie and validated on submit.
- Client-side rate limiting: 5 attempts per minute.
- Password requirements: min 8 chars, upper, lower, digit.
- Focus states via `.focus-ring` utility; buttons and inputs meet contrast.

## Tests

- Unit: `tests/signin.test.tsx`
- Integration: `tests/auth.integration.test.ts`
- E2E: `e2e/signin.spec.ts` (requires dev server).

