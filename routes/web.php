<?php

use Illuminate\Support\Facades\Route;
use Drewdan\PageBuilder\Http\Controllers\PageController;
use Drewdan\PageBuilder\Http\Controllers\FileController;

Route::get('pages', [PageController::class, 'edit'])->name('laravel-page-builder.edit');


Route::post('files', [FileController::class, 'store'])->name('laravel-page-builder.files.store');
