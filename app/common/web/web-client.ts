import type { APIRequestContext, APIResponse, Page } from '@playwright/test';
import { joinUrl } from '../utils/helpers';

export class WebClient {
  constructor(
    private readonly page: Page,
    private readonly baseUrl: string,
  ) {}

  async goto(pathName = '/'): Promise<void> {
    await this.page.goto(joinUrl(this.baseUrl, pathName));
  }
}

export class ApiClient {
  constructor(
    private readonly request: APIRequestContext,
    private readonly apiBaseUrl: string,
  ) {}

  async get(pathName: string): Promise<APIResponse> {
    return this.request.get(joinUrl(this.apiBaseUrl, pathName));
  }
}
