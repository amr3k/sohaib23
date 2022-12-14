import { SITE_NAME } from '$lib/constants';
import { quadInOut } from 'svelte/easing';
import { tweened } from 'svelte/motion';
import { writable, type Writable } from 'svelte/store';
import { Vector3 } from 'three';
import type { Vector3 as THREEVector3 } from 'three';

const tweenedOptions = {
	duration: 2000,
	easing: quadInOut
};

export const ogCameraPosition = new Vector3(9, 2, -8);
export const ogTargetPosition = new Vector3(0, 1.5, -3);

export const camCopyPosition: Writable<THREEVector3> = writable(new Vector3());

const ogZoomSpeed = 0.7;
const ogMinZoomDistance = 10;
const ogMaxZoomDistance = 15;

export const cameraPosition = tweened(new Vector3(11, 2, -9), tweenedOptions);
export const targetPosition = tweened(new Vector3(0, 1.5, -3), tweenedOptions);


export const zoomSpeed = tweened(ogZoomSpeed, tweenedOptions);
export const minZoomDistance = tweened(ogMinZoomDistance, tweenedOptions);
export const maxZoomDistance = tweened(ogMaxZoomDistance, tweenedOptions);

export const controlsEnabled = writable(false);

export const resetCamera = () => {
	holdControls();
	camCopyPosition.subscribe(_c => {
		cameraPosition.set(_c);
	});
	targetPosition.set(ogTargetPosition);

	zoomSpeed.set(ogZoomSpeed);

	minZoomDistance.set(ogMinZoomDistance);
	maxZoomDistance.set(ogMaxZoomDistance);

	document.title = SITE_NAME;
}

export async function holdControls() {
	controlsEnabled.set(false);
	setTimeout(() => {
		controlsEnabled.set(true);
	}, tweenedOptions.duration + 100);
}