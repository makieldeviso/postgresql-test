import url from 'url';
import path from 'path';

import { getAllUsernames } from '../db/queries.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = path.join(__dirname, '../');

const homeController = {
  homeViewGet: async (req, res) => {
    const usernames = await getAllUsernames();
    res.render(path.join(__root, '/views/pages', 'homeView'), {usernames: usernames});
  }
}

export default homeController;