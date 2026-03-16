import { test, expect } from '@playwright/test';
import { UserApiController } from '../../../app/src/product/api/controller/user_controller/CRUD/user.controller';
import { getConfig } from '../../../app/src/common/config/ConfigProvider/config.provider';

test.describe('User API', () => {
  test('should get user id from endpoint', async ({ request }) => {
    const config = getConfig();
    const userApiController = new UserApiController(request, config.apiBaseUrl);

    const userId = await userApiController.getUserId('/users/me');
    expect(userId).toBeGreaterThan(0);
  });
});
