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
const vesiti = [
  {
    url: '/assets/images/vestiti/tShort2.png',
    status: '',
    name: 'nike',
    price: 22.34,
    priceSale: 15.52,
  },
  {
    url: '/assets/images/vestiti/tShort2.png',
    status: 'new',
    name: 'nike',
    price: 22.34,
    priceSale: 15.52,
  },
  {
    url: '/assets/images/vestiti/tShort2.png',
    status: 'sale',
    name: 'nike',
    price: 22.34,
    priceSale: 15.52,
  },
  {
    url: '/assets/images/vestiti/tShort2.png',
    status: 'sale',
    name: 'nike',
    price: 22.34,
    priceSale: 15.52,
  },
];

export function ListaVestiti({ title, subheader, colore, ...other }: Props) {
  console.log(colore);
  return (
    <Card {...other}>
      <Grid container spacing={1}>
        {vesiti.map((abito) => (
          <Grid key={abito.name} xs={12} sm={12} md={6}>
            <Cards2
              url={abito.url}
              color={colore.hex}
              status={abito.status}
              price={abito.price}
              priceSale={abito.priceSale}
              name={abito.name}
            />
          </Grid>
        ))}
      </Grid>
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
      sx={{ filter: `opacity(0.5) drop-shadow(0 0 0 ${color});` }}
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
      <Box>
        {status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="h5" noWrap>
          {name}
        </Link>
      </Stack>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <ColorPreview colors={[color, color, color, color]} />
        {renderPrice}
      </Box>
    </Card>
  );
}
