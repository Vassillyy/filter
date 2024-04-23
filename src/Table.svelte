<div>
	<table border='3px'>
		<caption>Результаты:</caption> 
		<thead>
			<tr>
				<th>Скорость</th>
				<th>Количество топлива</th>
			</tr>
		</thead>
		<tbody>
			{#if $flag}
				{#each $obj.data as elem}
					{#if elem.vin === $car}
						<tr>
							<td>{elem.speed}</td>
							<td>{elem.fll.toFixed(2)}</td>
						</tr>
					{/if}
				{/each}
			{/if}
		</tbody>
	</table>
</div>


<script>
	import { getContext } from 'svelte';

	let obj = getContext('obj');
	let car = getContext('car');
	let flag = getContext('flag');
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	div {
		border-top: 4px solid Olive;
		background-color: SeaGreen;
		padding-bottom: 20px; 
	}
	table {
		width: 50%;
		margin: 0 auto;
		border: 2px solid DarkOliveGreen;
		border-collapse: collapse;
		background-color: OliveDrab;
	}
	caption {
		font-size: 25px;
	}
	table th {
		font-weight: bold;
		padding: 5px;
		background: MediumSeaGreen	;
		border: 1px solid DarkOliveGreen;
		text-align: center;
	}
	table td {
		border: 1px solid DarkOliveGreen;
		padding: 5px;
		text-align: center;
	}
</style>



