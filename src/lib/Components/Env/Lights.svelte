<script lang="ts">
	import { DirectionalLight, AmbientLight, SpotLight } from '@threlte/core';
</script>

<AmbientLight intensity={0.2} color={0xffffff} />
<DirectionalLight
	color={0xc2c5cc}
	target={{ x: 0, y: 0, z: 0 }}
	position={{ x: -50, y: -20, z: 10 }}
	intensity={0.8}
	shadow
/>
<SpotLight
	color={0xffffff}
	target={{ x: -40, y: -20, z: 10 }}
	position={{ x: -50, y: -60, z: -20 }}
	intensity={1}
	shadow
/>
