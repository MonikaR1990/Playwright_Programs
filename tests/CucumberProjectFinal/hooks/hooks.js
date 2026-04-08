import { Before, After, AfterStep } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import test from 'node:test';

Before(async function () 
{
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

AfterStep(async function ({ result }) {
    if (result.status === 'FAILED') {
        const screenshot = await this.page.screenshot();
        await this.attach(screenshot, 'image/png');
    }
});

After(async function () 
{
    await this.page.close();
    await this.browser.close();
});