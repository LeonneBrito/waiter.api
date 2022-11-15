import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes) {
      return res.sendStatus(400).json({ error: 'Invalid status' });
    }

    await Order.findByIdAndUpdate(orderId, { status });

    return res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
