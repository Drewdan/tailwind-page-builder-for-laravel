<?php

use Illuminate\Support\Facades\Route;
use Drewdan\PageBuilder\Http\Controllers\PageController;

Route::get('pages', [PageController::class, 'edit'])->name('laravel-page-builder.edit');
