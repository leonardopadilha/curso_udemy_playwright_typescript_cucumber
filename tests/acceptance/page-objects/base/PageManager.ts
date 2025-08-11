import { Page } from "@playwright/test"
import { BasePage } from "./BasePage"
import { pageFixture } from "../../stepDefinitions/hooks/browserContextFixture"

export class PageManager {
  get page(): Page {
    return pageFixture.page
  }

  createBasePage(): BasePage {
    return new BasePage()
  }
}
