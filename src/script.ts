import Zdog from 'zdog'
import { animate as motion, spring } from 'motion'
import chroma from 'chroma-js'

const scale = chroma.scale(["red", "blue"])
const scale2 = chroma.scale(["blue", "red"])
let color = scale(0).hex()




let illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
});

let can = new Zdog.Cylinder({
  addTo: illo,
  diameter: 80,
  length: 120,
  stroke: false,
  color: color,
  frontFace: '#EA0',
  backface: '#636',
});

function animate() {
  // rotate illo each frame
  // illo.rotate.y += 0.03;
  illo.rotate.x += 0.003
  can.color = color
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();

motion(prog=>{
  color = scale(prog).hex()
   illo.rotate.y += prog* 0.1;
}, {
  duration: 1,
  repeat: Infinity,
  direction: "alternate",
  easing: "linear"
  // easing: spring({ velocity: 0.025 })
})


illo.updateRenderGraph();
