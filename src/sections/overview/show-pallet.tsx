import type { BoxProps } from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { ButtonBase } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';

import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  handelSetColor: Function;
  list?: {
    stagione: string;
    image?: string;
    color: {
      hex: string;
      name?: string;
    }[];
  };
};
type colorPorp = {
  hex: string;
  name?: string;
};

export function ShowPallet({ title, subheader, list, handelSetColor, ...other }: Props) {
  console.log(list);
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 1 }} />

      <Scrollbar sx={{ minHeight: 405 }}>
        <Box sx={{ minWidth: 640 }}>
          {list?.color.map((col) => (
            <PostItem key={col.hex} item={col} handelSetColor={handelSetColor} />
          ))}
        </Box>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------

function PostItem({
  sx,
  item,
  handelSetColor,
  ...other
}: BoxProps & { item: colorPorp; handelSetColor: Function }) {
  return (
    <Box
      sx={{
        py: 2,
        px: 3,
        gap: 2,
        display: 'flex',
        alignItems: 'center',
        borderBottom: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
        ...sx,
      }}
      {...other}
    >
      {' '}
      <ButtonBase onClick={() => handelSetColor(item.hex)}>
        <Box
          sx={{ mr: 2, width: 48, height: 48, flexShrink: 0, borderRadius: 1, bgcolor: item.hex }}
        />

        <ListItemText
          primary={item.name}
          primaryTypographyProps={{ noWrap: true, typography: 'subtitle2' }}
          secondaryTypographyProps={{ mt: 0.5, noWrap: true, component: 'span' }}
        />
      </ButtonBase>
    </Box>
  );
}
