import { drawTriangle, getCenter, getEqTriHeight, getPoint, getTriangle, type Triangle } from './utils.js';
import { COLROS } from './constants.js';

export default function (
	canvas: HTMLCanvasElement,
	trianglesPerRow: number = 10
) {
	console.log('Sketching ', trianglesPerRow, 'triangles per row');
	// Get the window dimensions
	const { innerHeight, innerWidth } = window;

	// const canvas = document.getElementById('triangles') as HTMLCanvasElement;
	canvas.width = innerWidth
	canvas.height = innerHeight
	var ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

	// Get the base length of the triangle by innerWidth
	const baseLength = innerWidth / trianglesPerRow;
	const halfBaseLength = 0.5 * baseLength;
	const triHeight = getEqTriHeight(baseLength);
	const trianglesPerCol = Math.ceil(innerHeight / triHeight);
	const sideLength = triHeight - baseLength / 3;

	// Data
	const triangles: Triangle[] = [];

	for (let i = 0; i < trianglesPerRow; i++) {
		for (let j = 0; j <= trianglesPerCol; j++) {
			// Origin - Left Center
			const { x, y } = getPoint(i * baseLength, j * triHeight + triHeight / 3);
			// Vertices
			const { A, B, C, D, E, F } = Object.fromEntries(
				Object.entries({
					A: [x, y],
					B: [x, y - sideLength],
					C: [x + baseLength, y - sideLength],
					D: [x + halfBaseLength, y - triHeight / 3],
					E: [x + halfBaseLength, y + (triHeight - sideLength)],
					F: [x - halfBaseLength, y + (triHeight - sideLength)]
				}).map(([k, v]) => [k, getPoint(v[0], v[1])])
			);

			// Isosceles
			const paths = [
				[A, B, E],
				[A, E, F],
				[A, F, B],
				[D, B, E],
				[D, B, C],
				[D, C, E]
			].forEach(([a, b, c], i) => {
				triangles.push(getTriangle(a, b, c))// using default fill, stroke
			});
		}
	}

	function update() {
		triangles.forEach(triangle => drawTriangle(ctx, triangle))
	}
	canvas.addEventListener('click', function(e) {
		const rect = canvas.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		
		triangles.forEach(triangle => {
		  if (triangle.pointInTriangle(triangle.vertices, {x: mouseX, y: mouseY})) {
			// Example: Translate the clicked triangle by 10 units to the right
			triangle.fill = 'red';
		  }
		});
		
		update();
	  });

	  update();
	  
}
