import { test , expect } from '@playwright/test'

test('TC_UI_001 - Verify chatbot widget is visible on page load' , async ({ page }) => {

  await page.goto('https://debales.ai/');

  await page.waitForLoadState('load');

  const chatbotWidget = page.locator('[data-testid="debales-chat-button"]');

  await expect(chatbotWidget).toBeVisible();


});