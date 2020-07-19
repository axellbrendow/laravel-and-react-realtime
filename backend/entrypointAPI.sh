#!/usr/bin/env sh

# LARAVEL DEPENDENCIES

chmod -R 777 storage

composer install

# LARAVEL

# Try to connect to the database every 1 second over 40 seconds
dockerize -wait tcp://db:5432 -timeout 40s

php artisan migrate:fresh --seed

php artisan serve --host 0.0.0.0 --port 8000
