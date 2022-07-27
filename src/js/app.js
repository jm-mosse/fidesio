import '../scss/app.scss';

/* Your JS Code goes here */
import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

new Glide('.glide',{
    type: 'carousel',
    perView: 1,
    focusAt: 'center',
    gap:0,
  }).mount({ Controls, Breakpoints })



/* Demo JS */
import './demo.js';
