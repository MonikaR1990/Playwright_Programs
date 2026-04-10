import {test as base} from '@playwright/test'

export const test = base.extend({
    screenshotonFailure: async({page}, use, testInfo) => {
        await use(page); //Test execution

        //After Test Execution
        if(testInfo.status != testInfo.expectedStatus)
        {
            const path = `screenshots/${testInfo.title}.png`;
            await page.screenshot({path, fullPage: true});

            console.log(`Screenshot saved: ${path}`);
        }
    }
});
