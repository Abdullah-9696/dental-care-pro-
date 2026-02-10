<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;

class CourseController extends Controller
{
    public function index(){
        return Course::all();
    }

    public function store(Request $request){
        if(auth()->user()->role != 'admin'){
            return response()->json(['error'=>'Unauthorized'],403);
        }
        $course = Course::create($request->all());
        return response()->json($course);
    }
}
