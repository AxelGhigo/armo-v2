import type { CardProps } from '@mui/material/Card';
import type { ChartOptions } from 'src/components/chart';

import { Box, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';

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
  icon: React.ReactNode;
  chart: {
    series: number[];
    categories: string[];
    options?: ChartOptions;
  };
  setStagione: Function;
};

export function PalletStagione({
  icon,
  title,
  total,
  chart,
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
          arrcolor,
          imgUrl,
        }),
        boxShadow: 'none',
        position: 'relative',
        backgroundColor: 'common.white',
        height: '300px',
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
