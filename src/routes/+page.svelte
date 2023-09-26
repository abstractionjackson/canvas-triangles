<script>
	import Background from "$lib/components/Background.svelte";
	let value = 10; // Initial value of the slider

</script>

<div class="slider-container">
  <label for="number-slider" class="slider-label">Triangles Per Row</label>
  <input
  id="number-slider"
  type="range"
  min="1"
  max="100"
  step="1"
  bind:value
  />
  <span class="number">{value}</span>
</div>
<Background numTriangles={value}/>


<style>
	.slider-container {
  display: flex;
  align-items: center;
  z-index: 999;
  padding: 1rem;
  position: absolute;
  background-color: #fff;
  border: 1px solid black;
  top: 3;
}
.slider-label {
  margin-right: 10px;
}
.number {
	margin-left: 1em;
}
</style>