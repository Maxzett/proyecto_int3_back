import express from 'express';
import routesProducts from '../routes/productRoutes.js';
import routesAuth from '../routes/authRoutes.js';
import shoppingCartRoutes from '../routes/shoppingCartRoutes.js'
import routeError from '../utils/routeError.js';

import cors from 'cors';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routesAuth);
server.use(routesProducts);
server.use(shoppingCartRoutes);

server.use(routeError)
export default server;