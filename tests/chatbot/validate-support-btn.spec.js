import { test, expect } from '@playwright/test';

test('TC_UI_007 - Validate Support Button is Visible and Clickable', async ({ page }) => {

  await page.goto('https://debales.ai/');

  const chatbotBtn = page.getByTestId('debales-chat-button');
  await expect(chatbotBtn).toBeVisible();
  await chatbotBtn.click();

  const chatbotContainer = page.getByTestId('debales-chat-container');
  await expect(chatbotContainer).toBeVisible();

  const supportBtn = chatbotContainer.getByRole('button', { name: /support/i }); 

  await expect(supportBtn).toBeVisible();
  await expect(supportBtn).toBeEnabled();

  await supportBtn.click();

});
