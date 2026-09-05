import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    fullyParallel: false,

    retries: (globalThis as typeof globalThis & {
        process?: { env?: { CI?: string } };
    }).process?.env?.CI ? 1 : 0,

    workers: 1,

    timeout: 50000,

    reporter: [
        ['list'],
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never',
        }],
    ],

    use: {
        viewport: {
            width: 1920,
            height: 1080,
        },

        headless: !!(globalThis as typeof globalThis & {
            process?: { env?: { CI?: string } };
        }).process?.env?.CI,

        trace: 'retain-on-failure',

        screenshot: 'only-on-failure',
    },

    projects: [
        {
            name: 'chromium',
        },
    ],
});