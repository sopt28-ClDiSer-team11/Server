import express from 'express';
import globalRoutes from '../global/routes';

const router = express.Router();

import homeController from '../controller/home';

router.get(globalRoutes.order_rank, homeController.orderRank);

export default router