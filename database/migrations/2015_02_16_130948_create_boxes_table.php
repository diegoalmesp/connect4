<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBoxesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('boxes', function(Blueprint $table)
		{
			$table->increments('id');

			$table->integer('player', 10)->unsigned();
			$table->integer('x', 10)->unsigned();
			$table->integer('y', 10)->unsigned();
			$table->string('value', 10)->unsigned();

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('boxes');
	}

}
