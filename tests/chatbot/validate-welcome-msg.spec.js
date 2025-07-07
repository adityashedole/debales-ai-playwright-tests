import { test, expect } from '@playwright/test';

test('TC_UI_009 - Welcome message is displayed on chatbot open', async ({ page }) => {
  await page.goto('https://debales.ai/');

  const chatbotBtn = page.getByTestId('debales-chat-button');
  await expect(chatbotBtn).toBeVisible();
  await chatbotBtn.click();

  const chatbotContainer = page.getByTestId('debales-chat-container');
  await expect(chatbotContainer).toBeVisible();

  const welcomeMessage = page.locator('div.sc-kpOvIu.ubwdY p');

  await expect(welcomeMessage).toBeVisible();
  await expect(welcomeMessage).toContainText(/welcome|hi|hello/i);
  
});
