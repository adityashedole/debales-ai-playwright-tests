import { test , expect } from '@playwright/test'

test('TC_UI_002 - Chatbot logo is displayed correctly', async ({page}) => {
  
  
  await page.goto('https://debales.ai/');

  
  await page.waitForLoadState('load');

  
  const chatbotLogo = page.locator("img[alt='Chat Bot Icon']");


  await expect(chatbotLogo).toBeVisible();

})