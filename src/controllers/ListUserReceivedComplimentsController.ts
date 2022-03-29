/* eslint-disable @typescript-eslint/naming-convention */
import { Request, Response } from 'express';
import { ListUserReceivedComplimentsService } from '../services/ListUserReceivedComplimentsService';

class ListUserReceivedComplimentsController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(req: Request, res: Response) {
    const listUserReceivedComplimentsService = new ListUserReceivedComplimentsService();
    const { user_id } = req;

    const compliments = await listUserReceivedComplimentsService.execute(user_id);
    
    return compliments;
  }
}

export { ListUserReceivedComplimentsController };
