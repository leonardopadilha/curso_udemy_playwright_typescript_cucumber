import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "./hooks/browserContextFixture";
import { expect } from "@playwright/test";

let alertText: string

When('I type a username {word}', async (username: string) => {
  await pageFixture.page.getByPlaceholder('Username').fill(username)
});

When('I type a password {word}', async (password: string) => {
  await pageFixture.page.locator('form[class="form"] input').nth(1).fill(password)
});

When('I click on the login button', async () => {
  // Capturando o texto da mensagem de alerta exibida pelo HTML
  await pageFixture.page.on('dialog', async (alert) => {
    alertText = await alert.message()
    await alert.accept()
  })
  await pageFixture.page.getByRole('button', { name: 'Login' }).click()
});

Then('I should be presented with an alert box which contains text {string}', async (expectedAlertText: string) => {
  await expect(alertText).toContain(expectedAlertText)
});