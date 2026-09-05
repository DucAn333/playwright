# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> youtube
- Location: tests\example.spec.ts:25:5

# Error details

```
Test timeout of 50000ms exceeded.
```

```
Error: locator.click: Test timeout of 50000ms exceeded.
Call log:
  - waiting for locator('#sign-in-button').getByRole('link', { name: 'Sign in' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - button "Guide" [active] [ref=e9] [cursor=pointer]
        - generic [ref=e13]:
          - link "YouTube Home" [ref=e14] [cursor=pointer]:
            - /url: /
          - generic [ref=e20]: VN
        - button "Skip navigation" [ref=e24] [cursor=pointer]
      - generic [ref=e28]:
        - search [ref=e29]:
          - generic [ref=e31]:
            - combobox "Search" [expanded] [ref=e34]
            - button "Search" [ref=e35] [cursor=pointer]
        - generic [ref=e40]:
          - button "Search with your voice" [ref=e42] [cursor=pointer]
          - tooltip "tooltip"
      - generic [ref=e47]:
        - button "Settings" [ref=e52] [cursor=pointer]
        - link "Sign in" [ref=e58] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ec=65620
  - navigation [ref=e62]:
    - generic [ref=e63]:
      - link "Home" [ref=e65] [cursor=pointer]:
        - /url: /
      - link "Shorts" [ref=e71] [cursor=pointer]:
        - /url: /shorts/
      - link "Subscriptions" [ref=e77] [cursor=pointer]:
        - /url: /feed/subscriptions
      - link "You" [ref=e83] [cursor=pointer]:
        - /url: /feed/you
  - generic [ref=e88]:
    - main [ref=e89]:
      - generic [ref=e99]:
        - heading "Try searching to get started" [level=2] [ref=e100]
        - generic [ref=e101]: Start watching videos to help us build a feed of videos you'll love.
    - text: •
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('has title', async ({ page }) => {
  4  |   await page.goto('https://playwright.dev/');
  5  | 
  6  |   // Expect a title "to contain" a substring.
  7  |   await expect(page).toHaveTitle(/Playwright/);
  8  |   await page.waitForTimeout(Time.seconds(2));
  9  |   await page.close();
  10 | });
  11 | 
  12 | test('get started link', async ({ page }) => {
  13 |   await page.goto('https://playwright.dev/');
  14 | 
  15 |   // Click the get started link.
  16 |   await page.getByRole('link', { name: 'Get started' }).click();
  17 | 
  18 |   // Expects page to have a heading with the name of Installation.
  19 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  20 |   await page.waitForTimeout(Time.seconds(2));
  21 |   await page.close();
  22 | });
  23 | 
  24 | 
  25 | test('youtube', async ({ page }) => {
  26 |   await page.goto('https://www.youtube.com/');
  27 |   await page.locator('#start #guide-button').click();
> 28 |   await page.locator('#sign-in-button').getByRole('link', { name: 'Sign in' }).click();
     |                                                                                ^ Error: locator.click: Test timeout of 50000ms exceeded.
  29 |   await expect(page.getByText('Sign in', { exact: true })).toBeVisible();
  30 |   await page.waitForTimeout(Time.minutes(0.1));
  31 |   
  32 |   // await page.screenshot({
  33 |   //   path: 'screenshots/img.png',
  34 |   //   fullPage: true,
  35 |   // });
  36 |   await page.close();
  37 | });
  38 | export const Time = {
  39 |   seconds: (value: number) => value * 1000,
  40 |   minutes: (value: number) => value * 60 * 1000,
  41 | };
```