<?php

use App\Http\Controllers\PostsApiController;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

use function PHPUnit\Framework\isEmpty;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth')->get('/user', function (Request $request) {
//     return $request->user();
// });

//create a user route
Route::get('/signup', function () {
    $user = request()->only(['name', 'email', 'password']);

    User::create($user);

    return request();
});


//login user
Route::post('/login', function () {
    $credentials = request()->only(['email', 'password']);

    $token = auth()->attempt($credentials);
    $user = auth()->user();

    if (!$token) {
        return [
            'message' => 'Unauthenticated'
        ];
    };

    return [
        'user' =>  $user,
        'token' =>  $token,
    ];
});


//get the authenticated user
Route::middleware('auth')->get('/user', function () {
    return auth()->user();
});


Route::get('/posts', [PostsApiController::class, 'index']);

Route::get('/posts/{post}', function (Post $post) {
    return $post;
});

Route::post('/posts', [PostsApiController::class, 'create']);

Route::put('/posts/{post}', [PostsApiController::class, 'update']);

Route::delete('/posts/{post}', [PostsApiController::class, 'delete']);