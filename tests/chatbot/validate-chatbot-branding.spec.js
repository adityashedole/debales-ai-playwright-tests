import { test , expect } from '@playwright/test'

test('TC_UI_005 - Validate Chatbot Header Shows Branding Text Debales AI' , async ({ page })=> {

await page.goto('https://debales.ai/');

const chatbotBtn = page.locator('[id="debales-chat-button"]');
await expect(chatbotBtn).toBeVisible();
await chatbotBtn.click();

const container = page.locator('[data-testid="debales-chat-container"]');
await expect(container).toBeVisible();

const header = page.locator('span', { hasText: 'Debales AI'});
await expect(header).toBeVisible();
await expect(header).toHaveText('Debales AI');

});