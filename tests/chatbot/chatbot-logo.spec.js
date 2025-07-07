import { test , expect } from '@playwright/test'

test('TC_UI_002 - Chatbot logo is displayed correctly', async ({page}) => {
  
  
  await page.goto('https://debales.ai/');

  // Wait for the page to load fully - optiona;
  await page.waitForLoadState('load');

  // Locate the chatbot/logo element
  const chatbotLogo = page.locator("img[alt='Chat Bot Icon']");

  // Assertion - Check that logo is visible
  await expect(chatbotLogo).toBeVisible();

})