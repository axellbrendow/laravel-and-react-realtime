#!/usr/bin/env sh

# LARAVEL DEPENDENCIES

chmod -R 777 storage

composer install

# LARAVEL

function tryToMigrate() {
    timeout=5
    php artisan migrate:fresh --seed

    if [ $? -ne 0 ]; then
        echo "Database not ready. I will try to reconnect in $timeout seconds..."
        sleep $timeout
        tryToMigrate
    fi
}

tryToMigrate

php artisan serve --host 0.0.0.0 --port 8000
