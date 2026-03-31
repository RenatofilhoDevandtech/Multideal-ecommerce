
import cardPrimeflix from '../assets/cards/card-primeflix-anuncio1.png';

export interface AdBanner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  backgroundColor?: string;
  textColor?: string;
  buttonText?: string;
}

export const homeAds: AdBanner[] = [
  {
    id: 'primeflix-01',
    title: 'Prime Flix',
    subtitle: 'O entretenimento do futuro, agora na palma da sua mão.',
    image: cardPrimeflix,
    link: 'https://site-primefix.vercel.app/',
    backgroundColor: '#000000',
    textColor: '#FFFFFF',
    buttonText: 'Acessar Grátis'
  }
];
