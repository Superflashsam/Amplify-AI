import { defineConfig } from '@playwright/test'
import fs from 'fs'
import path from 'path'

const summaryPath = path.resolve(__dirname, 'code_summary.json')
let baseURL = 'http://localhost:3004'
try {
  const raw = fs.readFileSync(summaryPath, 'utf-8')
  const summary = JSON.parse(raw)
  const host = summary?.devServer?.host || 'localhost'
  const port = summary?.devServer?.port || 3004
  baseURL = `http://${host}:${port}`
} catch {}

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL
  }
})
