<?php

use Illuminate\Support\Facades\Route;
use Drewdan\PageBuilder\Http\Controllers\PageController;
use Drewdan\PageBuilder\Http\Controllers\FileController;
use Drewdan\PageBuilder\Http\Controllers\SignedStorageUrlController;

Route::get('pages', [PageController::class, 'edit'])->name('laravel-page-builder.edit');

Route::post('storage-url', [SignedStorageUrlController::class, 'store'])->name('laravel-page-builder.storage-url');
Route::post('files', [FileController::class, 'store'])->name('laravel-page-builder.files.store');
