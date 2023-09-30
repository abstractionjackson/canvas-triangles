<script lang="ts">
	import { onMount } from 'svelte';
	import sketch from './sketch.js';
	import { browser } from '$app/environment';
	import { COLORS } from './constants.js';
	import { wrapExtract } from './utils.js';

	export let numTriangles = 10;
	export let colors: string[] = Object.values(COLORS)
	export let updateFreq: number = 1500;
    let canvas: HTMLCanvasElement;

	onMount(() => {
		handleUpdate()
    });

	$: if(canvas && numTriangles) {
		handleUpdate();
	}

    function handleUpdate() {
        sketch(canvas, numTriangles, colors)
    }
</script>

<svelte:window on:resize={handleUpdate} />

<canvas bind:this={canvas} id="triangles"></canvas>

<style>
	canvas {
		transform: opacity 1s;
		position: absolute;
		z-index: -999;
	}
</style>