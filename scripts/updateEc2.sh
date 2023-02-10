#!/usr/bin/env bash
sudo rm -rf -v !(*.htaccess) /var/www/html/*

sudo cp -r ~/website/dist/* /var/www/html

sudo systemctl restart apache2.service
