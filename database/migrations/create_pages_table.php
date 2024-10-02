<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration {

	public function up(): void {
		Schema::create('pages', function (Blueprint $table) {
			$table->id();
			$table->string('uuid')->unique();
			$table->string('slug');
			$table->string('label');
			$table->string('meta_description')->nullable();
			$table->string('meta_keywords')->nullable();
			$table->json('head')->nullable();
			$table->json('body')->nullable();
			$table->json('foot')->nullable();
			$table->timestamps();
		});
	}

	public function down(): void {
		Schema::drop('pages');
	}
};
