import { test, expect } from '@playwright/test'

test('renders landing page', async ({ page }) => {
  await page.goto('http://localhost:3004/')
  await page.waitForLoadState('networkidle')
  await expect(page.getByText(/Amplify/)).toBeVisible()
})
