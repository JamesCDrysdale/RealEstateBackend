import express from 'express';

// Controller Import
import { createUser, getAllUsers, getUserInfoByID } from '../controllers/user.controller';

// Initialise Instance of a router
const router = express.Router();

// Routes

router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserInfoByID);

export default router;