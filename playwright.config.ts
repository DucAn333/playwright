/// <reference types="node" />
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    fullyParallel: false,

    workers: process.env.CI ? 2 : 1,

    retries: process.env.CI ? 1 : 0,

    timeout: 50000,

    // reporter: [
    //     ['list'],
    //     ['html', {
    //         outputFolder: 'playwright-report',
    //         open: 'never',
    //     }],
    // ],

    use: {
        viewport: {
            width: 1920,
            height: 1080,
        },

        headless: !!process.env.CI,

        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
    },

    projects: [
        {
            name: 'chromium',
        },
        
        
    ],
});