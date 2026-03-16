import { UserApiController } from '../../../controller/user_controller/CRUD/user.controller';

export const getUserIdStep = async (
  userApiController: UserApiController,
  endpoint = '/users/me',
): Promise<number> => userApiController.getUserId(endpoint);
