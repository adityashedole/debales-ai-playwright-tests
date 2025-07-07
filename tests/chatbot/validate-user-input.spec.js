import { test, expect } from '@playwright/test';

test('TC_UI_011 - Confirm Visibility of the Input Textbox in the Footer', async ({ page }) => {
  
  await page.goto('https://debales.ai/');

  const chatbotBtn = page.locator('#debales-chat-button');
  await expect(chatbotBtn).toBeVisible();
  await chatbotBtn.click();

  const chatbotContainer = page.locator('[data-testid="debales-chat-container"]');
  await expect(chatbotContainer).toBeVisible();

  const inputField = page.locator('#debales-chat-input');
  await expect(inputField).toBeVisible();

  await inputField.fill('Testing visibility of input box');

  await expect(inputField).toHaveValue('Testing visibility of input box');
});
