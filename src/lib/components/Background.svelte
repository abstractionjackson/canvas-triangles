<script lang="ts">
	import { onMount } from 'svelte';
	import sketch from './sketch.js';
	import { browser } from '$app/environment';

	export let numTriangles = 10;
    let canvas: HTMLCanvasElement;

	onMount(() => {
        sketch(canvas, numTriangles)
    });

	// if (browser) {
	// 	window.addEventListener('resize', () => {
	// 		handleUpdate();
	// 	});
	// }
    
    // $: if(browser && numTriangles) {
    //     handleUpdate()
    // }

    // function handleUpdate() {
    //     sketch(numTriangles)
    // }
</script>

<canvas bind:this={canvas} id="triangles"></canvas>
