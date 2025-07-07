import { test, expect } from '@playwright/test';

test('TC_UI_010 - Ensure the Send Button (Arrow Icon) is Visible and Clickable after input', async ({ page }) => {
  await page.goto('https://debales.ai/');

  const chatbotBtn = page.locator('#debales-chat-button');
  await expect(chatbotBtn).toBeVisible();
  await chatbotBtn.click();

  const chatbotContainer = page.locator('[data-testid="debales-chat-container"]');
  await expect(chatbotContainer).toBeVisible();

  const inputField = page.locator('#debales-chat-input');
  await expect(inputField).toBeVisible();
  await inputField.fill('Hello from QA automation!');

  const sendBtn = page.locator('#debales-send-button');
  await expect(sendBtn).toBeVisible();
  await expect(sendBtn).toBeEnabled(); // Optional but recommended

  await sendBtn.click();
});
