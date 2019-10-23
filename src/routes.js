import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Samuel Santana',
        email: 'samuel@santana',
        password_hash: 'fafa',
    });
    return res.json(user);
});

export default routes;
