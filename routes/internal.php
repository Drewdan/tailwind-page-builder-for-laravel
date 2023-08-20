<?php

use Illuminate\Support\Facades\Route;
use Drewdan\PageBuilder\Http\Controllers\AppController;
use Drewdan\PageBuilder\Http\Controllers\PageController;
use Drewdan\PageBuilder\Http\Controllers\FileController;
use Drewdan\PageBuilder\Http\Controllers\ElementController;
use Drewdan\PageBuilder\Http\Controllers\SignedStorageUrlController;


Route::get('/pages', [AppController::class, '__invoke'])->name('laravel-page-builder.index');
Route::get('/pages/{page}', [AppController::class, '__invoke'])->name('laravel-page-builder.show');
Route::get('/error/{code}', [AppController::class, '__invoke'])->name('laravel-page-builder.error');
Route::resource('/data/pages', PageController::class);

Route::post('/storage-url', [SignedStorageUrlController::class, 'store'])->name('laravel-page-builder.storage-url');
Route::post('/files', [FileController::class, 'store'])->name('laravel-page-builder.files.store');
Route::get('/elements', ElementController::class)->name('elements');
