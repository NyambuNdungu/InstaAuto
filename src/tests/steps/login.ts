import { BeforeAll, AfterAll, Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

BeforeAll(async () => {
    // Launch the browser before any test scenarios are executed
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
});


Given('use has valid credentials and is on apps homepage', async function () {
    await page.goto("https://www.instagram.com/");
});

When('user enters email and password and clicks Login', async function () {
    // Locate the email input field and type in the email
    await page.locator("#loginForm > div > div:nth-child(1) > div > label > input").fill("nyambu_ndungu");
    // password input
    await page.locator("#loginForm > div > div:nth-child(2) > div > label > input").fill("Tester");
    //login
    await page.locator("#loginForm > div > div:nth-child(3)").click();

    await page.waitForURL("https://www.instagram.com/");
});

Then('user should be redirected to homepage', async function () {
    Then('user should be redirected to homepage', async function () {
        // Wait for navigation to complete
        await page.waitForEvent("domcontentloaded");
    
        // Access explore page
        await page.locator("body > div:nth-child(43)").click();
    
        // Wait for navigation to complete after clicking
        await page.waitForEvent("load");
    
        // Verify if the user is redirected to the explore page
        const currentURL = page.url();
        expect(currentURL).toEqual("https://www.instagram.com/explore/");
    });
});

AfterAll(async () => {
    // Close the browser after all test scenarios have finished running
    if (browser) {
        await browser.close();
    }
});
