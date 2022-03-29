/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response } from 'express';
import { ListUserSentComplimentsService } from '../services/ListUserSentComplimentsService';

class ListUserSentComplimentsController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(req: Request, res: Response) {
    const listUserSentComplimentsService = new ListUserSentComplimentsService();
    const { user_id } = req;

    const compliments = await listUserSentComplimentsService.execute(user_id);

    return compliments;
  }
}

export { ListUserSentComplimentsController };
