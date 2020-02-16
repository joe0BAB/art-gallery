export interface DImage {
  path: string;
  title: string;
  description: string;
  date: string;
  color: string;
}

const images: DImage[] = [];

images.push({ path: require('./kandinsky-1.jpg'), color: '#804F4D', title: '', description: '', date: '' });
images.push({ path: require('./kandinsky-2.jpg'), color: '#FF9E99', title: '', description: '', date: '' });
images.push({ path: require('./picasso-1.jpg'), color: '#FF544C', title: '', description: '', date: '' });
images.push({ path: require('./picasso-2.jpg'), color: '#802B26', title: '', description: '', date: '' });
images.push({ path: require('./picasso-2.jpg'), color: '#CC443D', title: '', description: '', date: '' });
images.push({ path: require('./kandinsky-1.jpg'), color: '#804F4D', title: '', description: '', date: '' });

export const IMAGES = images;
