import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";

const url = "https://webdriveruniversity.com/"

Given('I navigate to the WebdriverUniversity homepage', async () => {
  // Access URL
  await pageFixture.page.goto(url)
});

When('I click on the contact us button', async () => {
  await pageFixture.page.locator("#contact-us h1").click()
});

When('I switch to the new browser tab', async () => {
  await pageFixture.context.waitForEvent("page")
  
  // Retrieve all current open pages (tabs)
  const allPage = await pageFixture.context.pages()

  // Assign the most recent tab to pageFixture.page
  pageFixture.page = allPage[allPage.length - 1]

  // Bring the newly assigned tab to the front (Make it active)
  await pageFixture.page.bringToFront()

  // Ensure the newly assigned tab is also fully maximized
  await pageFixture.page.setViewportSize({ width: 1920, height: 1080 })
})