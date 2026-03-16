import type { APIRequestContext } from '@playwright/test';
import { joinUrl } from '../../../../../common/utils';

type UserIdResponse = {
  id?: number;
  userId?: number;
  data?: {
    id?: number;
    userId?: number;
  };
};

export class UserApiController {
  constructor(
    private readonly request: APIRequestContext,
    private readonly apiBaseUrl: string,
  ) {}

  async getUserId(endpoint = '/users/me'): Promise<number> {
    const response = await this.request.get(joinUrl(this.apiBaseUrl, endpoint));

    if (!response.ok()) {
      throw new Error(`Failed to fetch user data from ${endpoint}. Status: ${response.status()}`);
    }

    const body = (await response.json()) as UserIdResponse;
    const userId = body.userId ?? body.id ?? body.data?.userId ?? body.data?.id;

    if (typeof userId !== 'number') {
      throw new Error(`User id was not found in response from ${endpoint}`);
    }

    return userId;
  }
}
