import { useRef, useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CameraIcon from '@mui/icons-material/Camera';
import { CardMedia, CardActions } from '@mui/material';

// ----------------------------------------------------------------------

// eslint-disable-next-line react/prop-types
export function Photo({ closeCamera }) {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 1920,
          height: 1080,
        },
      })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((e) => console.error(e));
  };

  const tackPhoto = () => {
    const width = 1920;
    const height = width / (16 / 9);

    const video = videoRef.current;
    const photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    const ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <Card>
      <CardMedia component="video" ref={hasPhoto ? photoRef : videoRef} />
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '46%' }}>
        <IconButton aria-label="snap" size="large" onClick={tackPhoto}>
          <CameraIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="back" size="large" onClick={closeCamera}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
