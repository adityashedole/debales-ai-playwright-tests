import { test, expect } from '@playwright/test';

test('TC_UI_008 - Ensure Close (X) Icon is Visible and Clickable', async ({ page }) => {
  
  await page.goto('https://debales.ai/');

  const chatbotBtn = page.getByTestId('debales-chat-button');
  await expect(chatbotBtn).toBeVisible();
  await chatbotBtn.click();

  const chatbotContainer = page.getByTestId('debales-chat-container');
  await expect(chatbotContainer).toBeVisible();

  const closeBtn = page.locator('#debales-minimize-button'); 
  await expect(closeBtn).toBeVisible();
  await expect(closeBtn).toBeEnabled();
   await closeBtn.click();

});
