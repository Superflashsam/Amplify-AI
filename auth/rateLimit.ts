type Bucket = { count: number; resetAt: number }

const KEY = 'signin_rl_bucket'
const WINDOW_MS = 60_000
const MAX_ATTEMPTS = 5

export const canAttempt = () => {
  const now = Date.now()
  const raw = localStorage.getItem(KEY)
  const bucket: Bucket = raw ? JSON.parse(raw) : { count: 0, resetAt: now + WINDOW_MS }
  if (now > bucket.resetAt) {
    bucket.count = 0
    bucket.resetAt = now + WINDOW_MS
  }
  const allowed = bucket.count < MAX_ATTEMPTS
  if (!allowed) return { allowed, remainingMs: bucket.resetAt - now }
  bucket.count += 1
  localStorage.setItem(KEY, JSON.stringify(bucket))
  return { allowed, remainingMs: bucket.resetAt - now }
}

export const resetBucket = () => localStorage.removeItem(KEY)

