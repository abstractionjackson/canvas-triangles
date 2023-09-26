type Point = {
  x: number,
  y: number,
}
export function getPoint(x: number, y: number) {
  return {
    x,
    y
  }
}
function pointInTriangle(vertices:[Point, Point, Point], pt: Point): boolean {
  const [v1, v2, v3] = vertices;
  const dX = pt.x - v3.x;
  const dY = pt.y - v3.y;
  const dX21 = v3.x - v2.x;
  const dY12 = v2.y - v3.y;
  const D = dY12 * (v1.x - v3.x) + dX21 * (v1.y - v3.y);
  const s = dY12 * dX + dX21 * dY;
  const t = (v3.y - v1.y) * dX + (v1.x - v3.x) * dY;
  return s > 0 && t > 0 && (s + t) < D;
}
export type Triangle = {
  vertices: [Point, Point, Point]
  fill: string
  stroke?: string
  pointInTriangle: typeof pointInTriangle
}
export function getTriangle(a:Point, b:Point, c:Point, fill = "#ffffff", stroke?: string):Triangle {
  return {
    vertices: [a, b, c],
    fill,
    stroke,
    pointInTriangle
  }
}
export function drawTriangle(ctx: CanvasRenderingContext2D, triangle: Triangle) {
  const [A, B, C]: number[][] = triangle.vertices.map(vertex => [vertex.x, vertex.y])
  ctx.beginPath();
    ctx.moveTo(A[0], A[1]); // Move to the starting point
    ctx.lineTo(B[0], B[1]); // Draw a line to the second point
    ctx.lineTo(C[0], C[1]); // Draw a line to the third point
    ctx.closePath(); // Close the path
    ctx.fillStyle = triangle.fill; // Set the fill color
    ctx.fill(); // Fill the triangle
    ctx.strokeStyle = triangle.stroke ?? 'none'; // Set the stroke color
    ctx.lineWidth = 2; // Set the line width
    ctx.stroke(); // Stroke the triangle
}
export function getEqTriHeight(base: number) {
    return (Math.sqrt(3) * base) / 2;
  }

  export function getCenter(sideLength: number) {
    // Calculate the height of the equilateral triangle
    const height = (Math.sqrt(3) / 2) * sideLength;
  
    // The x-coordinate of the center is halfway along the base
    const x = sideLength / 2;
  
    // The y-coordinate of the center is one-third of the height from the base
    const y = height / 3;
  
    return { x, y };
  }