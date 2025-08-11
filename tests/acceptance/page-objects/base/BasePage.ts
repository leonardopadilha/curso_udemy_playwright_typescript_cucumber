import { Page, Locator } from "@playwright/test"
import { pageFixture } from "../../stepDefinitions/hooks/browserContextFixture"

export class BasePage {
  get page(): Page {
    return pageFixture.page
  }

  // Promise<void> in TypeScript when you're defining an async function that doesn't explicitly return a value
  public async navigate(url: string): Promise<void> {
    await this.page.goto(url)
  }

  public async waitAndClickByRole(role: string, name: string): Promise<void> {
    const element = await this.page.getByRole(role as any, { name: name })
    await element.click()
  }

  // Wait for the locator to be visible and then click on it
  public async waitAndClick(locator: Locator): Promise<void> {
    await locator.isVisible()
    await locator.click()
  }

  // Wait for the selector to be visible and then click on it
  public async waitAndClickSelector(selector: string): Promise<void> {
    await this.page.waitForSelector(selector)
    await this.page.click(selector)
  }


}