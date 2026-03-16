import type { Page } from '@playwright/test';

const trimTrailingSlash = (value: string): string => value.replace(/\/+$/, '');
const trimLeadingSlash = (value: string): string => value.replace(/^\/+/, '');

export class BasePage {
  protected readonly normalizedBaseUrl: string;

  constructor(
    protected readonly page: Page,
    baseUrl = 'https://www.saucedemo.com',
  ) {
    this.normalizedBaseUrl = trimTrailingSlash(baseUrl);
  }

  protected async gotoPath(pathName = '/'): Promise<void> {
    if (pathName === '/' || !pathName) {
      await this.page.goto(`${this.normalizedBaseUrl}/`);
      return;
    }

    await this.page.goto(`${this.normalizedBaseUrl}/${trimLeadingSlash(pathName)}`);
  }
}
