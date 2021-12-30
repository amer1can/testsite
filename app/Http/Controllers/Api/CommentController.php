<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Comment\CreateRequest;
use App\Jobs\AddNewComment;

class CommentController extends Controller
{
    public function store(CreateRequest $request) {

//        $validator = \Validator::make($request->all(), [
//           'subject' => 'required|min:6',
//            'body' => 'required|min:10'
//        ]);
//
//        if($validator->fails()) {
//            return response()->json([
//               'status' => 'error',
//               'msg' => 'Error',
//               'errors' => $validator->errors()
//            ], 422);
//        }

        AddNewComment::dispatch($request['subject'], $request['body'], $request['article_id']);

        //create new comment

        return response()->json([
           'status' => 'success'
        ], 201);

    }
}
