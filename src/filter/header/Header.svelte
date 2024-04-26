<script>
	/**
	 * Импорт константы obj 
	 * @module variables/data
	*/
	import { obj } from "../variables/data.js";
	/**
	 * Импорт хранилищ organization, car и flag
	 * @module variables/filter
	*/
	import { organization, car, flag } from "../variables/filter.js";
	
	/**
	 * @function
	 * @description Функция для сброса значения car
	 */
	function resetCar() {
		car.set(null);
	}

	/**
	 * @function
	 * @description Функция для изменения значения флага на false
	 */
	function changeFlagFalse() {
		flag.set(false);
	}

	/**
	 * @function
	 * @description Функция для изменения значения флага на true
	 */
	function changeFlagTrue() {
		flag.set(true); 
	}
</script>

<div>
	<label>Организация:
		<select bind:value={$organization} on:change={ changeFlagFalse, resetCar}>
			<option value={null}>Организации:</option>
			{#each obj.orgs as org}
				<option>{org.organization}</option>
			{/each}
		</select>
	</label> 

	<label>Техника:
		<select bind:value={$car} disabled={!$organization} on:change={changeFlagFalse}>
			<option value={null}>VIN:</option>
			{#if $organization}
				{#each obj.orgs.find(org => org.organization === $organization)?.vehicles as vehicle}
					<option>{vehicle}</option>
				{/each}
			{/if}
		</select>
	</label>

	<button disabled={!$car} on:click={changeFlagTrue}>Найти</button>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	div {
		width: 100%;
		height: 60px;
		background-color: YellowGreen;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	button {
		border-radius: 5px;
		width: 60px;
	} 
	select,
	button {
		background-color: LightGreen;
		border-radius: 4px;
	}
	</style>