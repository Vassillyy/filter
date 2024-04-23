<script>
	import Table from "./Table.svelte";
	import { writable } from "svelte/store";
	import { setContext } from "svelte";
	import { getContext } from "svelte";

	let obj = getContext("obj");

	let organization = writable(null);
	let flag = writable(false);
	let car = writable(null);

	setContext("car", car);
	setContext("flag", flag);

	function resetCar() {
		car.set(null);
	}

	function changeFlagFalse() {
		flag.set(false);
	}

	function changeFlagTrue() {
		flag.set(true);
	}
</script>

<div>
	<label
		>Организация:
		<select
			bind:value={$organization}
			on:change={(changeFlagFalse, resetCar)}
		>
			<option value={null}>Организации:</option>
			{#each $obj.orgs as org}
				<option>{org.organization}</option>
			{/each}
		</select>
	</label>

	<label
		>Техника:
		<select
			bind:value={$car}
			disabled={!$organization}
			on:change={changeFlagFalse}
		>
			<option value={null}>VIN:</option>
			{#if $organization}
				{#each $obj.orgs.find((org) => org.organization === $organization)?.vehicles as vehicle}
					<option>{vehicle}</option>
				{/each}
			{/if}
		</select>
	</label>

	<button disabled={!$car} on:click={changeFlagTrue}>Найти</button>
</div>

<Table />

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
		width: 80px;
		text-align: center;
		font-weight: 500;
		
	}
	select,
	button {
		background-color: LightGreen;
		border-radius: 4px;
	}
</style>
