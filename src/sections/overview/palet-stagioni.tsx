import type { CardProps } from '@mui/material/Card';

import Card from '@mui/material/Card';
import { Box, CardActionArea } from '@mui/material';

import { bgCircolGradient } from 'src/theme/styles';

// ----------------------------------------------------------------------

type colorprops = {
  hex: string;
  name?: string;
};

type Props = CardProps & {
  title: string;
  total: number;
  percent: number;
  arrcolor: colorprops[];
  imgUrl: string;
  setStagione: Function;
};

export function PalletStagione({
  title,
  total,
  percent,
  arrcolor,
  imgUrl,
  sx,
  setStagione,
  ...other
}: Props) {
  return (
    <Card
      sx={{
        ...bgCircolGradient({
          arrcolor: arrcolor.concat(arrcolor),
          imgUrl,
        }),
        boxShadow: 'none',
        position: 'relative',
        backgroundColor: 'common.white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      <CardActionArea onClick={() => setStagione()}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={imgUrl} alt="pngegg.png" loading="lazy" height="250px" />
        </Box>
      </CardActionArea>
    </Card>
  );
}
