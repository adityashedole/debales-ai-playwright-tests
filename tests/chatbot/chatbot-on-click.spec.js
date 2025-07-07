import { test , expect } from '@playwright/test'

test('TC_UI_003 - Chatbot opens successfully on click' , async ({ page }) => {

  await page.goto('https://debales.ai');

  const chatbotBtn = page.locator('[data-testid="debales-chat-button"]');
  await expect(chatbotBtn).toBeVisible();
  await chatbotBtn.click();

  const chatbotPanel = page.locator('[data-testid="debales-chat-container"]');
  await expect(chatbotPanel).toBeVisible();

});