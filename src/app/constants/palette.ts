export const PALETTE2 = [
  '#ff71ce',
  '#01cdfe',
  '#05ffa1',
  '#b967ff',
  '#fffb96'
]

export const PALETTE = [
  '#135589',
  '#272930',
  '#3ddad7',
  '#d1d3cf',
  '#198967'
]

interface PALETTES {
  [key: string]: string[];
}

export type Theme = 'vapor' | 'phantom' | 'hickory' | 'red_clover' | 'wood_sorrel' | 'foretell' | 'crystal_sunshine' | 'soft_nature' | 'cloudy_woods';

export const PALETTES = {
  vapor: [ '#ff71ce', '#01cdfe', '#05ffa1', '#b967ff', '#fffb96' ],
  phantom: [ '#135589', '#272930', '#3ddad7', '#d1d3cf', '#198967' ],
  hickory: ['#2eab1a', '#a9d233', '#734bf4', '#9395ee', '#746ff9'],
  red_clover: ['#f4cef1', '#a915b2', '#1fb222', '#9be195', '#103a2a'],
  wood_sorrel: ['#fbd9d3', '#a3e545', '#d6c51e', '#18c145', '#055881'],
  foretell: ['#08566d', '#0aa34a', '#f6f0ca', '#964e12', '#bd46d4'],
  crystal_sunshine: ['#ebbdeb', '#cec6ff', '#719dd6', '#4f6cb2', '#1f2c59'],
  soft_nature: ['#669999', '#ba8080', '#669966', '#99bb7d', '#beca8a'],
  cloudy_woods: ['#003609', '#603f00', '#362400', '#838383', '#a16900'],
}
