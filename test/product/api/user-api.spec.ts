import { test, expect } from '@playwright/test';
import { UserApiController } from '../../../app/product/api/controller/user_controller/CRUD/user.controller';
import { getConfig } from '../../../app/common/config';

test.describe('User API', () => {
  test('should get user id from endpoint', async ({ request }) => {
    const config = getConfig();
    const userApiController = new UserApiController(request, config.apiBaseUrl);

    const userId = await userApiController.getUserId('/users/me');
    expect(userId).toBeGreaterThan(0);
  });
});
