<?php

use Illuminate\Support\Facades\Route;
use Drewdan\PageBuilder\Http\Controllers\PageRenderController;

Route::get('/page/{page}', PageRenderController::class)->name('page-builder.page');
