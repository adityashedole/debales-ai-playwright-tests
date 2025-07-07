import { test , expect } from '@playwright/test'

test('TC_UI_004 - Chatbot message input and send works correctly' , async ({ page })=> {

  await page.goto('https://debales.ai/');

  const chatbotBtn = page.locator('[data-testid="debales-chat-button"]');
  await expect(chatbotBtn).toBeVisible();
  await chatbotBtn.click();

  const chatbotContainer = page.locator('[data-testid="debales-chat-container"]');
  await expect(chatbotContainer).toBeVisible();

  const inputField = page.locator('[data-testid="debales-chat-input"]');
  await expect(inputField).toBeVisible();
  await inputField.fill('Hi Debales, from Testing Team');

  const sendBtn = page.locator('#debales-send-button');
  await expect(sendBtn).toBeVisible();
  await sendBtn.click();
  
});