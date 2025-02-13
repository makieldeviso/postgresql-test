import url from 'url';
import path from 'path';
import { insertIntoUsernames } from '../db/queries.js';

import { body, validationResult } from 'express-validator';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __root = path.join(__dirname, '../');

const validateUser = [
  body('username').escape()
    .notEmpty().withMessage('Username must not be empty.')
    .isLength({min: 8, max: 20}).withMessage('Username must be at between 8-20 characters.')
]

const newController = {
  newViewGet: (req, res) => {
    res.render(path.join(__root, 'views/pages', 'newView'));
  },

  newUserDataPost: [
    validateUser,
    async (req, res) => {
      const errors = validationResult(req);
      const {username} = req.body;
      console.log(`username to be saved: ${username}`);

      await insertIntoUsernames(username);
      
      res.redirect('/new');
  }]
}

export default newController;