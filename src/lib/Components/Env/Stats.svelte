<script lang="ts">
	import { browser } from '$app/environment';

	import Stats from 'three/examples/jsm/libs/stats.module';
	import { useFrame } from '@threlte/core';

	if (browser && import.meta.env.DEV) {
		const stats = Stats();
		useFrame(stats.begin, {
			order: -100
		});
		// add stats.end at the very end of the executing frameloophandlers
		useFrame(stats.end, {
			order: 100
		});
		document.body.appendChild(stats.domElement);
	}
</script>
