
import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";

When('I type a first name', async () =>{
  await pageFixture.page.locator('[placeholder="First Name"]').fill("John")
});
When('I type a last name', async () => {
  await pageFixture.page.locator('[placeholder="Last Name"]').fill("Doe")
});

When('I enter an email address', async () =>{
  await pageFixture.page.locator('//input[contains(@placeholder, "Email")]').fill("john.doe@example.com")
});

When('I type a comment', async () =>{
  await pageFixture.page.getByPlaceholder('Comments').fill('This is my text in English')
});

When('I click on the submit button', async () => {
  await pageFixture.page.locator('//div/input[@type="submit"]').click()
});

Then('I should be presented with a successful contact us submission message', async () => {
  const message = await pageFixture.page.locator('#contact_reply h1').textContent()
  await expect(message).toEqual('Thank You for your Message!')
});

Then('I should be presented with a unsuccessful contact us message', async () => {
  await pageFixture.page.waitForSelector("body")
  const bodyElement = await pageFixture.page.locator("body")

  const bodyText = await bodyElement.textContent()
  await expect(bodyText).toMatch(/Error: (all fields are required|Invalid email address)/)
})