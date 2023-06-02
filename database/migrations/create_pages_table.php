<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration {

	public function up(): void {
		Schema::create('pages', function (Blueprint $table) {
			$table->id();
			$table->string('title');
			$table->string('slug');
			$table->longText('content')->nullable();
			$table->string('page_title')->nullable();
			$table->string('meta_description')->nullable();
			$table->string('meta_keywords')->nullable();
			$table->timestamps();
		});
	}

	public function down(): void {
		Schema::drop('pages');
	}
};
