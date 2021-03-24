<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostsApiController extends Controller
{
    //

    public function index()
    {
        return Post::all();
    }

    public function create(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        return Post::create([
            'title' => $request->input('title'),
            'content' => $request->input('content'),

        ]);
    }

    public function update(Post $post)
    {
        request()->validate([
            'title' => 'required',
            'content' => 'required',
        ]);

        $success =   $post->update([
            'title' => request('title'),
            'content' => request('content')
        ]);

        return [
            'success' => $success
        ];
    }

    public function delete(Post $post)
    {
        $success = $post->delete();

        return [
            'success' => $success
        ];
    }
}