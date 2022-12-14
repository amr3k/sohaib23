<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { blur, fade } from 'svelte/transition';
	import { useProgress } from '@threlte/extras';
	import { tweened } from 'svelte/motion';
	import { linear } from 'svelte/easing';

	const { progress } = useProgress();
	const dispatch = createEventDispatcher();

	const percentage = tweened(0, { duration: 10, easing: linear });
	$: percentage.set($progress * 100);

	$: if ($percentage === 100) dispatch('startTheShow');
</script>

<div class="overlay" out:fade={{ duration: 1000, delay: 500 }}>
	{#if $percentage < 100}
		<div class="loading">
			<div class="tut-cover" out:blur={{ duration: 1500, delay: 1000 }}>
				<div class="tut-over" style="height: {100 - $percentage}%;" />
			</div>
		</div>
	{/if}
</div>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0px;
		padding: 0px;
		background-color: black;
	}

	.loading {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.tut-cover {
		position: relative;
		width: 200px;
		height: 285px;
	}
	.tut-over {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000000f0;
	}
</style>
