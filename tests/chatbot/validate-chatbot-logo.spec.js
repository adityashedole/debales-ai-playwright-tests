import { test , expect } from '@playwright/test'

test('TC_UI_006 - Validate the Chatbot Logo Icon is Displayed in the top left corner', async ({ page })=> {

  await page.goto('https://debales.ai/');

  const chatbotBtn = page.locator('[data-testid="debales-chat-button"]');
  await expect(chatbotBtn).toBeVisible();
  await chatbotBtn.click();

  const chatbotContainer = page.locator('[data-testid="debales-chat-container"]');
  await expect(chatbotContainer).toBeVisible();

  const logoIcon = page.getByTestId('debales-chat-container').locator('img[alt="Chat Bot Icon"]');
await expect(logoIcon).toBeVisible();


});