<?php

use App\Message;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
REFERENCES

Decoupled back end api without CSRF
https://www.reddit.com/r/laravel/comments/6v6rmy/csrf_protection_with_a_decoupled_backend_api/

JWT-Auth Laravel
https://jwt-auth.readthedocs.io/en/develop/quick-start/

Alternative to docker-compose.yml v2 healthchecks in docker-compose.yml v3
https://github.com/peter-evans/docker-compose-healthcheck/issues/3

Laravel + Socket.io + Channels + Realtime
https://www.youtube.com/watch?v=k4KUlM3c5_M
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => 'api', 'prefix' => 'api'], function () {
    Route::post('register', 'AuthController@register')->name('register');
    Route::post('login', 'AuthController@login')->name('login');
    Route::post('logout', 'AuthController@logout')->name('logout');
    Route::post('refresh', 'AuthController@refresh')->name('refresh');
    Route::post('me', 'AuthController@me')->name('me');

    Route::get('messages', function () {
        return Message::paginate(10);
    });

    Route::post('messages', function () {
        $data = request()->all();
        $message = Message::create($data);
        broadcast(new \App\Events\SendMessage($message));
        return $message;
    });
});
