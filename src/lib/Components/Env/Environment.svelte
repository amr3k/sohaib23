<script lang="ts">
	import { sRGBEncoding, ACESFilmicToneMapping } from 'three';
	import { useThrelte } from '@threlte/core';

	import Camera from './Camera.svelte';
	import Lights from './Lights.svelte';
	import PostProcessing from './PostProcessing.svelte';
	import Stats from './Stats.svelte';
	import Background from './Background.svelte';
	import Moon from './Moon.svelte';

	const { renderer } = useThrelte();
	renderer.outputEncoding = sRGBEncoding;
	renderer.toneMapping = ACESFilmicToneMapping;
	renderer.toneMappingExposure = 3;
</script>

<Moon />
<Background />
<Camera />
<Lights />
<PostProcessing />
<Stats />
