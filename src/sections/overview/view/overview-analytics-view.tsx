import { useState, useRef } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import { Box, TextField, IconButton } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { ShowPallet } from '../show-pallet';
import { ListaVestiti } from '../lista-vestiti';
import { PalletStagione } from '../palet-stagioni';

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
    image: 'assets/images/person/africa.png',
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
      { hex: '#597fb5', name: 'Indaco' },
      { hex: '#318c2e', name: 'Verde' },
    ],
    image: '/assets/images/person/cina2.png',
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
    image: '/assets/images/person/woman2.png',
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
    image: '/assets/images/person/nonna.png',
  },
];

export function OverviewAnalyticsView() {
  const [season, setSeason] = useState('');
  const [colore, setColore] = useState('#000000');
  const scroldown = useRef<HTMLDivElement | null>(null);

  return (
    <DashboardContent maxWidth="xl">
      <Box display="flex" alignContent="flex-start" justifyContent="center">
        <img src="/assets/logo/to_be_color_logo.PNG" alt="to_be_color_logo.png" loading="lazy" />
      </Box>

      <Box
        sx={{ mt: 3 }}
        display="flex"
        alignContent="flex-start"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography variant="h4">Scopri la versione più bella di te!</Typography>
        <IconButton aria-label="delete" color="primary">
          <LocalSeeIcon sx={{ color: 'black' }} />
        </IconButton>
      </Box>

      <Grid container spacing={3}>
        {mock.map(({ stagione, color, image }, key) => (
          <Grid xs={12} sm={6} md={6} key={key}>
            <Typography align="center" variant="h4">
              {stagione}
            </Typography>
            <PalletStagione
              title="Weekly sales"
              percent={2.6}
              total={714000}
              imgUrl={image}
              arrcolor={color}
              setStagione={() => {
                setSeason(stagione);
                setTimeout(() => {
                  scroldown.current?.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }}
            />
          </Grid>
        ))}

        {season !== '' && (
          <>
            <Grid ref={scroldown} xs={12} sm={12} md={12}>
              <Box
                display="flex"
                alignContent="space-between"
                alignItems="center"
                flexDirection="column"
              >
                <Typography variant="h4" sx={{ mb: { xs: 3, md: 2 } }}>
                  inserisci il codice della capsula (potrai trovare il codice nell&apos; etichetta)
                </Typography>
                <TextField id="outlined-basic" label="es. 00ff00" variant="outlined" />
              </Box>
            </Grid>
            <Grid xs={12} md={4} lg={4}>
              <ShowPallet
                title="colori palette"
                handelSetColor={setColore}
                list={mock.find(({ stagione }) => stagione === season)}
              />
            </Grid>
            <Grid xs={12} md={8} lg={8}>
              <ListaVestiti title="colori palette" colore={{ hex: colore }} />
            </Grid>
          </>
        )}
      </Grid>
    </DashboardContent>
  );
}
