import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.waitForTimeout(Time.seconds(2));
  await page.close();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.waitForTimeout(Time.seconds(2));
  await page.close();
});









test('youtube', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.locator('#start #guide-button').click();
  await page.locator('#sign-in-button').getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByText('Sign in', { exact: true })).toBeVisible();
  await page.waitForTimeout(Time.minutes(0.1));
  
  // await page.screenshot({
  //   path: 'screenshots/img.png',
  //   fullPage: true,
  // });
  await page.close();
});
export const Time = {
  seconds: (value: number) => value * 1000,
  minutes: (value: number) => value * 60 * 1000,
};