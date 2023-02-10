#!/usr/bin/env bash
sudo rm -rf -v !(*.htaccess) /var/www/html/*

sudo cp -r ~/mywebsite/mywebsite/dist/* /var/www/html

sudo systemctl restart apache2.service
