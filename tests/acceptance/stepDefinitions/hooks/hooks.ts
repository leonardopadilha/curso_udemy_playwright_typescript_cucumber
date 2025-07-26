import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { pageFixture } from "./browserContextFixture";

let browser: Browser;

BeforeAll(async function() {
  console.log("\nExecuting test suite...")
})

AfterAll(async function() {
  console.log("\nFinished execution of test suite...")
})

Before(async function() {
  browser = await chromium.launch({ headless: false })
  pageFixture.context = await browser.newContext({ viewport: { width: 1920, height: 1080 }})
  pageFixture.page = await pageFixture.context.newPage()
})

After(async function() {
  await pageFixture.page.close()
  await browser.close()
})

