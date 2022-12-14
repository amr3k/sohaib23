<script lang="ts">
	import { Mesh, SphereGeometry, MeshPhongMaterial } from 'three';
	import { Three, useTexture } from '@threlte/core';
</script>

<Three
	type={Mesh}
	position={[-40, -20, 10]}
	rotation={[Math.PI, 0, Math.PI / -2]}
	geometry={new SphereGeometry(10, 32, 32)}
	material={new MeshPhongMaterial({
		map: useTexture('/textures/moon/texture.jpg'),
		displacementMap: useTexture('/textures/moon/displacement.jpg'),
		displacementScale: 0.05,
		bumpMap: useTexture('/textures/moon/displacement.jpg'),
		bumpScale: 0.05,
		reflectivity: 1,
		shininess: 1
	})}
/>
