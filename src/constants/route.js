const isProduction = process.env.NODE_ENV === 'production';

const base_url = isProduction
  ? 'https://www.meeu.app/api'
  : 'http://localhost:3000/api';

export default base_url;
