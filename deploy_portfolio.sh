#!/bin/bash

cd "$( dirname -- "$0"; )";

#cd /var/www/domains/portfolio
git pull
npm install
npm run build
pm2 restart portfolio