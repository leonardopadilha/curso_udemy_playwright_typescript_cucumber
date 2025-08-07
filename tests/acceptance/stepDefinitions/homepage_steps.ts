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

When('I click on the login portal button', async () => {
  const loginButton = pageFixture.page.getByRole('link', { name: "LOGIN PORTAL" })
  await loginButton.click()
})