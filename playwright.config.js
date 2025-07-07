// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        viewport: { width: 1366, height: 768 },
        
      },
    },
    {
      name: 'firefox',
      use: {
        viewport: { width: 1366, height: 768 },
      },
    },
    {
      name: 'webkit',
      use: {
        viewport: { width: 1366, height: 768 },
      },
    },
  ],
});
