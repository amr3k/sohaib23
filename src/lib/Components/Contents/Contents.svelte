<script>
	import { degToRad } from 'three/src/math/MathUtils';
	import { Text } from '@threlte/extras';
	import { titleOpacity, titlePositionY, titleSize } from '$lib/Stores/global';
</script>

<Text
	text="Happy birthday"
	position={{ x: -45, y: $titlePositionY, z: 10 }}
	rotation={{ y: degToRad(90) }}
	fontSize={$titleSize}
	fillOpacity={$titleOpacity}
	anchorX="center"
	anchorY="middle"
	textAlign="center"
/>
<Text
	text="Sohaib"
	position={{ x: -45, y: $titlePositionY - 10, z: 10 }}
	rotation={{ y: degToRad(90) }}
	fontSize={$titleSize}
	fillOpacity={$titleOpacity}
	anchorX="center"
	anchorY="middle"
	textAlign="center"
/>
