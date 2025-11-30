import { test, expect } from '@playwright/test'

test('renders landing page', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Amplify.ai - The AI Marketing Operating System')
})
