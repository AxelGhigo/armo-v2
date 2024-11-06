import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: icon('color-swatch-svgrepo-com'),
  },
  /* {
    title: 'User',
    path: '/user',
    icon: icon('ic-user'),
  }, */
  {
    title: 'shop',
    path: '/products',
    icon: icon('ic-cart'),
    info: (
      <Label color="error" variant="inverted">
        +3
      </Label>
    ),
  },
  {
    title: 'Profilo',
    path: '/blog',
    icon: icon('ic-blog'),
  },
  {
    title: 'assistenza',
    path: '/assistenza',
    icon: icon('chat-round-dots-svgrepo-com'),
  },
  {
    title: 'assistenza vocale',
    path: '/assistenza',
    icon: icon('service-svgrepo-com'),
  },
  {
    title: '⁠modalità per daltonici',
    path: '/assistenza',
    icon: icon('service-start-svgrepo-com'),
  },
  {
    title: 'Sign in',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },
];
