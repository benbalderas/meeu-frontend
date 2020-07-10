import React from 'react';

import MuseumIcon from '@material-ui/icons/AccountBalanceOutlined';
import CollectionsIcon from '@material-ui/icons/CollectionsOutlined';
import ArtworkIcon from '@material-ui/icons/PanoramaOutlined';

export const DRAWER_WIDTH = 280;
export const SECTIONS = [
  {
    name: 'Museums',
    icon: <MuseumIcon />,
  },
  {
    name: 'Exhibits',
    icon: <CollectionsIcon />,
  },
  {
    name: 'Artworks',
    icon: <ArtworkIcon />,
  },
];
