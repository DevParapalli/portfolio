// Shader exports for wave background
import noiseShader from './noise.glsl';
import vertexShader from './vertex.glsl';
import fragmentShader from './fragment.glsl';

export const shaders = {
  noise: noiseShader,
  vertex: vertexShader,
  fragment: fragmentShader,
  // Combined shaders with noise prepended
  get fullVertex() {
    return this.noise + this.vertex;
  },
  get fullFragment() {
    return this.noise + this.fragment;
  },
};

export { noiseShader, vertexShader, fragmentShader };
