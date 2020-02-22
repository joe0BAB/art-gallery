export interface DImage {
  path: string;
  date: string;
  color: string;
}

const images: DImage[] = [];

// const baseColors = ['#804F4D', '#FF9E99', '#FF544C', '#802B26', '#CC443D'];

images.push({ path: require('./P1000017.jpeg'), color: '#804F4D', date: '' });
images.push({ path: require('./P1000021.jpeg'), color: '#FF9E99', date: '' });
images.push({ path: require('./P1000317.jpeg'), color: '#FF544C', date: '' });
// images.push({ path: require('./P1000408.jpeg'), color: '#802B26', date: '' }); // small
images.push({ path: require('./P1060421.jpeg'), color: '#802B26', date: '' });
images.push({ path: require('./P1000720.jpeg'), color: '#CC443D', date: '' });
images.push({ path: require('./P1020077.jpeg'), color: '#804F4D', date: '' });
images.push({ path: require('./P1020132.jpeg'), color: '#FF9E99', date: '' });
images.push({ path: require('./P1040505.jpeg'), color: '#802B26', date: '' });
images.push({ path: require('./P1040510.jpeg'), color: '#FF544C', date: '' });
images.push({ path: require('./P1040511.jpeg'), color: '#CC443D', date: '' });
images.push({ path: require('./P1040517.jpeg'), color: '#802B26', date: '' });
images.push({ path: require('./P1040526.jpeg'), color: '#804F4D', date: '' });
images.push({ path: require('./P1060427.jpeg'), color: '#FF9E99', date: '' });
images.push({ path: require('./P1040530.jpeg'), color: '#FF544C', date: '' });
images.push({ path: require('./P1040527.jpeg'), color: '#CC443D', date: '' }); // large
images.push({ path: require('./P1040547.jpeg'), color: '#804F4D', date: '' }); // large
images.push({ path: require('./P1040558.jpeg'), color: '#802B26', date: '' }); // large
// images.push({ path: require('./P1060376.jpeg'), color: '#FF544C', date: '' });  // real
images.push({ path: require('./P1060398.jpeg'), color: '#FF544C', date: '' }); // large
images.push({ path: require('./P1060462.jpeg'), color: '#804F4D', date: '' }); // large
images.push({ path: require('./P1060762.jpeg'), color: '#FF9E99', date: '' }); // large

export const IMAGES = images;
