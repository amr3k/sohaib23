import { writable } from 'svelte/store';

export const sceneIsPlaying = writable(false);

export const controlVector = writable({ x: 0, y: 0, z: 0 });
