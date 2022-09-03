#!/usr/bin/env bash

sudo rm -rf /var/www/html/*

rm -rf /home/ubuntu/website/my-website/dist

npm run build

sudo cp -r /home/ubuntu/website/my-website/dist/* /var/www/html

sudo systemctl restart apache2.service