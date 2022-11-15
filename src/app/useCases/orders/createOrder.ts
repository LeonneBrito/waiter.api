import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    if (!table || !products) {
      return res.sendStatus(400).json({ message: 'Missing table or products' });
    }

    const order = await Order.create({ table, products });

    return res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
