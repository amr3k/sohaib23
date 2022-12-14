<script lang="ts">
	import { browser } from '$app/environment';
	import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
	import { Pass, useThrelte } from '@threlte/core';

	const { renderer } = useThrelte();

	const pixelRatio = renderer.getPixelRatio();

	const width = (browser && window.innerWidth) || 1920;
	const height = (browser && window.innerHeight) || 1080;
</script>

{#if window.devicePixelRatio <= 1}
	<!-- Disable if ration > 1 (Mac retina display) -->
	<Pass pass={new SMAAPass(width * pixelRatio, height * pixelRatio)} />
{/if}
