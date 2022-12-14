import { tweened } from 'svelte/motion';
import { writable } from 'svelte/store';

export const sceneIsPlaying = writable(false);

export const titleOpacity = tweened(0, {
  duration: 1000
});
export const titleSize = tweened(0, {
  duration: 1000
});
export const titlePositionY = tweened(-20, {
  duration: 1000
});

