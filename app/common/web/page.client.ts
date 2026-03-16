import type { Page } from '@playwright/test';
import { joinUrl } from '../utils/url.util';

export class WebClient {
  constructor(
    private readonly page: Page,
    private readonly baseUrl: string,
  ) {}

  async goto(pathName = '/'): Promise<void> {
    await this.page.goto(joinUrl(this.baseUrl, pathName));
  }
}
