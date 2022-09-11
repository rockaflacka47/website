#!/usr/bin/env bash

sudo rm -rf /var/www/html/*

rm -rf /home/ubuntu/website/my-website/dist

npm run build

sudo rm -rf -v !(*.htaccess) /var/www/html/*

sudo systemctl restart apache2.service
