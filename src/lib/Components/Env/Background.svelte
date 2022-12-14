<script lang="ts">
	import {
		type MeshBasicMaterial as THREEMeshBasicMaterial,
		BoxGeometry,
		MeshBasicMaterial,
		DoubleSide,
		Mesh
	} from 'three';
	import { useTexture, Three } from '@threlte/core';

	const textures = useTexture([
		'/textures/sky/front.png',
		'/textures/sky/back.png',
		'/textures/sky/top.png',
		'/textures/sky/bottom.png',
		'/textures/sky/left.png',
		'/textures/sky/right.png'
	]);
	const materials: THREEMeshBasicMaterial[] = [];
	textures.map((_t) => {
		const _m = new MeshBasicMaterial({ map: _t });
		_m.side = DoubleSide;
		materials.push(_m);
	});
</script>

<Three
	type={Mesh}
	position={[0, -10, 0]}
	geometry={new BoxGeometry(100, 100, 100)}
	material={materials}
/>
