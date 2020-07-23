const getScreenTitle = (path) => {
  switch (path) {
    case '/museums':
      return 'Museums';
    case '/exhibits':
      return 'Exhibits';
    case '/artworks':
      return 'Artworks';
    case '/profile':
      return 'Profile';
    default:
      return '';
  }
};

export default getScreenTitle;
