<?php

use Illuminate\Support\Facades\Route;
use Drewdan\PageBuilder\Http\Controllers\AppController;
use Drewdan\PageBuilder\Http\Controllers\PageController;
use Drewdan\PageBuilder\Http\Controllers\FileController;
use Drewdan\PageBuilder\Http\Controllers\SignedStorageUrlController;


Route::get('/pages/{page:slug}', [AppController::class, '__invoke'])->name('laravel-page-builder.show');
Route::get('/error/{code}', [AppController::class, '__invoke'])->name('laravel-page-builder.error');

Route::get('/data/pages/{page:uuid}', [PageController::class, 'show'])->name('laravel-page-builder.pages.show');
Route::put('/data/pages/{page:uuid}', [PageController::class, 'update'])->name('laravel-page-builder.pages.update');
Route::delete('/data/pages/{page:uuid}', [PageController::class, 'destroy'])->name('laravel-page-builder.pages.destroy');
// File upload routes
Route::post('/storage-url', [SignedStorageUrlController::class, 'store'])->name('laravel-page-builder.storage-url');
Route::post('/files', [FileController::class, 'store'])->name('laravel-page-builder.files.store');
