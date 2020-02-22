export interface DImage {
  path: string;
  date: string;
  color: string;
}

const images: DImage[] = [];

images.push({ path: require('./P1000017.jpeg'), color: '#804F4D', date: '' });
images.push({ path: require('./P1000021.jpeg'), color: '#FF9E99', date: '' });
images.push({ path: require('./P1000317.jpeg'), color: '#FF544C', date: '' });
images.push({ path: require('./P1000408.jpeg'), color: '#802B26', date: '' });
images.push({ path: require('./P1000720.jpeg'), color: '#CC443D', date: '' });
images.push({ path: require('./P1020077.jpeg'), color: '#804F4D', date: '' });

export const IMAGES = images;
