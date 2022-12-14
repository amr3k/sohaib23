<script lang="ts">
	import { PerspectiveCamera, OrbitControls, AudioListener } from '@threlte/core';
	import {
		cameraPosition,
		maxAzimuthAngle,
		maxPolarAngle,
		minAzimuthAngle,
		minPolarAngle,
		targetPosition,
		maxZoomDistance,
		minZoomDistance,
		zoomSpeed,
		controlsEnabled
	} from '$lib/Stores/camera';

	const dev = import.meta.env.DEV;
</script>

<PerspectiveCamera position={$cameraPosition} fov={50} near={0.1} far={500}>
	<AudioListener />
	<OrbitControls
		target={$targetPosition}
		enabled={$controlsEnabled}
		enableRotate
		enablePan={dev}
		enableDamping
		dampingFactor={0.025}
		zoomSpeed={$zoomSpeed}
	/>
	<!--
		minDistance={$minZoomDistance}
		maxDistance={$maxZoomDistance}
		minPolarAngle={$minPolarAngle}
		maxPolarAngle={$maxPolarAngle}
		minAzimuthAngle={$minAzimuthAngle}
		maxAzimuthAngle={$maxAzimuthAngle}
	 -->
</PerspectiveCamera>
