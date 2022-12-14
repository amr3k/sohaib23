<script lang="ts">
	import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';
	import { Three, useFrame, useTexture } from '@threlte/core';

	const rotation = { x: 0, y: 0, z: 0 };
	useFrame((ctx, delta) => {
		rotation.x += delta / 10;
		rotation.y -= delta / 7;
		rotation.z += delta / 13;
	});
</script>

<Three
	type={Mesh}
	position={[-10, -15, 30]}
	rotation={[rotation.x, rotation.y, rotation.z]}
	geometry={new BoxGeometry(5, 5, 5)}
	material={new MeshStandardMaterial({
		map: useTexture('/textures/dog.jpg')
	})}
	receiveShadow
	castShadow
/>
