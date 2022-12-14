<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Environment from '$lib/Components/Env/Environment.svelte';
	import Components from '$lib/Components/Components.svelte';
	import SEO from './SEO.svelte';
	import Overlay from '$lib/Components/Overlay/Overlay.svelte';
	import { sceneIsPlaying, titleOpacity, titlePositionY, titleSize } from '$lib/Stores/global';
	import {
		cameraPosition,
		controlsEnabled,
		ogCameraPosition,
		ogTargetPosition,
		targetPosition
	} from '$lib/Stores/camera';

	export const prerender = false;

	let overlayIsVisible = true;

	const startTheShow = async () => {
		overlayIsVisible = false;
		sceneIsPlaying.set(true);
		setTimeout(() => {
			cameraPosition.set(ogCameraPosition);
			targetPosition.set(ogTargetPosition);
		}, 1000);
		setTimeout(() => {
			controlsEnabled.set(true);
		}, 3000);

		setTimeout(() => {
			$titleOpacity = 1;
			$titleSize = 6;
			$titlePositionY = 10;
		}, 2000);
	};
</script>

<SEO />

{#if overlayIsVisible}
	<Overlay on:startTheShow={startTheShow} />
{/if}
<main>
	<Canvas>
		<Environment />
		<Components />
	</Canvas>
</main>

<style>
	main {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
</style>
