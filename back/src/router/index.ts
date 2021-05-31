import express from 'express';
import globalRoutes from '../global/routes';

const router = express.Router();

router.use(globalRoutes.home, require('./home'));

export default router;