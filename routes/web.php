<?php

use Illuminate\Support\Facades\Route;
use Drewdan\PageBuilder\Http\Controllers\PageRenderController;

Route::get('/page/{page:slug}', PageRenderController::class)->name('page-builder.page');
