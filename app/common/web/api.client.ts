import type { APIRequestContext, APIResponse } from '@playwright/test';
import { joinUrl } from '../utils/url.util';

export class ApiClient {
  constructor(
    private readonly request: APIRequestContext,
    private readonly apiBaseUrl: string,
  ) {}

  async get(pathName: string): Promise<APIResponse> {
    return this.request.get(joinUrl(this.apiBaseUrl, pathName));
  }

  async post<TPayload extends object>(pathName: string, payload: TPayload): Promise<APIResponse> {
    return this.request.post(joinUrl(this.apiBaseUrl, pathName), { data: payload });
  }
}
