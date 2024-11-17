import type { CardProps } from '@mui/material/Card';

import Card from '@mui/material/Card';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';

import { fCurrency } from 'src/utils/format-number';

import { Label } from 'src/components/label';
import { ColorPreview } from 'src/components/color-utils';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  colore: {
    hex: string;
    name?: string;
  };
};

type CardsPoprs = {
  color: string;
  status: string;
  price: number;
  priceSale: number;
  name: string;
  url: string;
};
const vesiti = {
  url: '/assets/images/vestiti/tshort2.png',
  status: '',
  name: 'nike',
  price: 22.34,
  priceSale: 15.52,
};

export function ListaVestiti({ title, subheader, colore, ...other }: Props) {
  console.log(colore);
  return (
    <Card {...other}>
      <Box
        component="img"
        sx={{ filter: `opacity(0.5) drop-shadow(0 0 0 ${colore.hex});` }}
        alt={vesiti.name}
        src={vesiti.url}
      />
    </Card>
  );
}
function Cards2({ color, status, price, priceSale, name, url }: Readonly<CardsPoprs>) {
  const renderStatus = (
    <Label
      variant="inverted"
      color={(status === 'sale' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      sx={{ filter: `opacity(0.4) drop-shadow(0 0 0 ${color});` }}
      alt={name}
      src={url}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: 'text.disabled',
          textDecoration: 'line-through',
        }}
      >
        {priceSale && fCurrency(priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(price)}
    </Typography>
  );

  return (
    <Card>
      <Box>{renderImg}</Box>
    </Card>
  );
}
