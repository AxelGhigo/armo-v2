import { useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { TextField, CircularProgress } from '@mui/material';

import { _posts } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsNews } from '../analytics-news';
import { PalletStagione } from '../palet-stagioni';
import { ShowPallet } from '../show-pallet';
import { ListaVestiti } from '../lista-vestiti';

// ----------------------------------------------------------------------

const mock = [
  {
    stagione: 'estate',
    color: [
      { hex: '#08a48c', name: 'Persian Green' },
      { hex: '#887cac', name: 'Lavender Purple' },
      { hex: '#d43c50', name: 'Brick Red' },
      { hex: '#c4448c', name: 'Red-Violet (Crayola)' },
      { hex: '#9c9484', name: 'Grullo' },
      { hex: '#f4a3b4', name: 'Amaranth Pink' },
      { hex: '#8cbccc', name: 'Dark Sky Blue' },
      { hex: '#9484ac', name: 'Deep Amethyst' },
      { hex: '#4c4c74', name: 'Independence' },
      { hex: '#343454', name: 'Jacarta' },
    ],
    image: './public/assets/images/person/pngegg.png',
  },
  {
    stagione: 'inverno',
    color: [
      { hex: '#eee791', name: 'Giallo chiaro' },
      { hex: '#cf1f56', name: 'Fucsia' },
      { hex: '#1c141f', name: 'Nero' },
      { hex: '#625c55', name: 'Grigio topo)' },
      { hex: '#2376b1', name: 'Azzurro scuro' },
      { hex: '#36265e', name: 'Viola' },
      { hex: '#0f700f', name: 'Verde scuro' },
      { hex: '#db1323', name: 'Rosso' },
      { hex: '#597fb5', name: 'Indaco' },
      { hex: '#318c2e', name: 'Verde' },
    ],
    image: './public/assets/images/person/pngegg.png',
  },
  {
    stagione: 'primavera',
    color: [
      { hex: '#1c6598', name: 'Blu' },
      { hex: '#b5d1c8', name: 'Azzurro' },
      { hex: '#678535', name: 'Verde' },
      { hex: '#e17d20', name: 'Arancione' },
      { hex: '#f0d50a', name: 'Giallo' },
      { hex: '#ee3528', name: 'Rosso' },
      { hex: '#d9b709', name: 'Giallo senape' },
      { hex: '#c29269', name: 'Marrone chiaro' },
      { hex: '#3c4943', name: 'Verde molto scuro' },
      { hex: '#4bb49b', name: 'Verde acqua' },
    ],
    image: './public/assets/images/person/pngegg.png',
  },
  {
    stagione: 'autunno',
    color: [
      { hex: '#eeaf32', name: 'Giallo senape' },
      { hex: '#d45a3b', name: 'Mattone' },
      { hex: '#a0502f', name: 'Marroncino' },
      { hex: '#362d1e', name: 'Marrone scuro' },
      { hex: '#ede8e5', name: 'Panna' },
      { hex: '#5c5c5c', name: 'Grigio scuro' },
      { hex: '#a39b9c', name: 'Grigio chiaro' },
      { hex: '#6f342e', name: 'Marrone' },
      { hex: '#757269', name: 'Grigio verde' },
      { hex: '#544f3e', name: 'Verde militare' },
    ],
    image: './public/assets/images/person/pngegg.png',
  },
];

export function OverviewAnalyticsView() {
  const [season, setSeason] = useState('estate');
  const [colore, setColore] = useState('#000000 ');

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h3" sx={{ mb: { xs: 3, md: 5 } }}>
        titole
      </Typography>
      <Typography variant="h5" sx={{ mb: { xs: 3, md: 5 } }}>
        prova
      </Typography>

      <Grid container spacing={3}>
        {mock.map(({ stagione, color, image }, key) => (
          <Grid xs={12} sm={6} md={6} key={key}>
            <PalletStagione
              title="Weekly sales"
              percent={2.6}
              total={714000}
              imgUrl={image}
              arrcolor={color}
              icon={<img alt="icon" src="/assets/icons/glass/ic-glass-bag.svg" />}
              chart={{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
                series: [22, 8, 35, 50, 82, 84, 77, 12],
              }}
              setStagione={() => setSeason(stagione)}
            />
          </Grid>
        ))}

        <Grid xs={12} sm={12} md={12}>
          <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
            codice colore
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>

        <Grid xs={12} sm={12} md={12}>
          <CircularProgress />
        </Grid>

        <Grid xs={12} md={4} lg={4}>
          <ShowPallet
            title="colori palett"
            handelSetColor={setColore}
            list={mock.find(({ stagione }) => stagione === season)}
          />
        </Grid>
        <Grid xs={12} md={8} lg={8}>
          <ListaVestiti title="colori palett" colore={{ hex: colore }} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
