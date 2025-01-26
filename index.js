import { ShaderArt } from 'https://esm.sh/shader-art';
import { UniformPlugin } from 'https://esm.sh/@shader-art/plugin-uniform';

ShaderArt.register([() => new UniformPlugin()]);

// Original config without cylindrical
const config = {
  scale: 0.35,
  ax: 8.71,
  ay: 7,
  az: 3.4,
  aw: 3.4,
  bx: 1,
  by: 1,
  color1: '#000000',
  color2: '#000000',
  color3: '#161616',
  color4: '#020202'
};

document.querySelector('shader-art').addEventListener('ready', (e) => {
  const shader = e.detail;
  Object.entries(config).forEach(([key, value]) => {
    shader.setUniform(key, value);
  });
});

// scale
// 0.35
// ax
// 8.71
// ay
// 7
// az
// 3.4
// aw
// 3.4
// bx
// 1
// by
// 1
// color1
// #000000
// color2
// #000000
// color3
// #161616
// color4
// #020202
// Close Controls