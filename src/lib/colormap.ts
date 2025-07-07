import colormap from 'colormap';

export const currentColormap = colormap({
  colormap: 'magma', // change this to your desired colormap name
  nshades: 256,
  format: 'rgba',
  alpha: 1
}) as number[][];
