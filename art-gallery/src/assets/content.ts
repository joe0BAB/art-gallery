import { imagesHQ, imagesW1000, imagesW300, imagesW500, imagesW750 } from '@/assets/qualityMappings';

export enum Orientation {
  V = 'vertical',
  H = 'horizontal'
}

export interface DImage {
  path: string;
  color: string;
  orientation: Orientation;
}

const images: DImage[] = [];

// const baseColors = ['#804F4D', '#FF9E99', '#FF544C', '#802B26', '#CC443D'];

images.push({ path: require('./P1000017.jpeg'), color: '#804F4D', orientation: Orientation.V });
images.push({ path: require('./P1000021.jpeg'), color: '#FF9E99', orientation: Orientation.V });
images.push({ path: require('./P1000317.jpeg'), color: '#FF544C', orientation: Orientation.V });
images.push({ path: require('./P1060421.jpeg'), color: '#802B26', orientation: Orientation.V });
images.push({ path: require('./P1000720.jpeg'), color: '#CC443D', orientation: Orientation.V });
images.push({ path: require('./P1020077.jpeg'), color: '#804F4D', orientation: Orientation.V });
images.push({ path: require('./P1020132.jpeg'), color: '#FF9E99', orientation: Orientation.V });
images.push({ path: require('./P1040505.jpeg'), color: '#802B26', orientation: Orientation.V });
images.push({ path: require('./P1040510.jpeg'), color: '#FF544C', orientation: Orientation.V });
images.push({ path: require('./P1040511.jpeg'), color: '#CC443D', orientation: Orientation.V });
images.push({ path: require('./P1040517.jpeg'), color: '#802B26', orientation: Orientation.V });
images.push({ path: require('./P1040526.jpeg'), color: '#804F4D', orientation: Orientation.V });
images.push({ path: require('./P1060427.jpeg'), color: '#FF9E99', orientation: Orientation.V });
images.push({ path: require('./P1040530.jpeg'), color: '#FF544C', orientation: Orientation.V });
images.push({ path: require('./P1040527.jpeg'), color: '#CC443D', orientation: Orientation.H }); // large
images.push({ path: require('./P1040547.jpeg'), color: '#804F4D', orientation: Orientation.H }); // large
images.push({ path: require('./P1040558.jpeg'), color: '#802B26', orientation: Orientation.H }); // large
images.push({ path: require('./P1060398.jpeg'), color: '#FF544C', orientation: Orientation.H }); // large
images.push({ path: require('./P1060462.jpeg'), color: '#804F4D', orientation: Orientation.H }); // large
images.push({ path: require('./P1060762.jpeg'), color: '#FF9E99', orientation: Orientation.H }); // large

export const IMAGES = images;

const colors = [
  '#804F4D',
  '#FF9E99',
  '#FF544C',
  '#802B26',
  '#CC443D',
  '#804F4D',
  '#FF9E99',
  '#802B26',
  '#FF544C',
  '#CC443D',
  '#802B26',
  '#804F4D',
  '#FF9E99',
  '#FF544C',
  '#CC443D',
  '#804F4D',
  '#802B26',
  '#FF544C',
  '#804F4D',
  '#FF9E99',
  '#CC443D'
];

export function imageColor (index: number) {
  const max = colors.length;
  return colors[index % max];
}

export interface HqImage {
  name: string;
  orientation: Orientation;
  rank?: number;
}

const hqImage: HqImage[] = [];
hqImage.push({ name: '01', orientation: Orientation.V });
hqImage.push({ name: '02', rank: 7, orientation: Orientation.V });
hqImage.push({ name: '03', rank: 8, orientation: Orientation.V });
hqImage.push({ name: '04', rank: 9, orientation: Orientation.V });
hqImage.push({ name: '05', orientation: Orientation.V });
hqImage.push({ name: '06', rank: 10, orientation: Orientation.V });
hqImage.push({ name: '07', rank: 5, orientation: Orientation.H });
hqImage.push({ name: '08', orientation: Orientation.H });
hqImage.push({ name: '09', rank: 2, orientation: Orientation.H });
hqImage.push({ name: '10', orientation: Orientation.H });
hqImage.push({ name: '11', orientation: Orientation.H });
hqImage.push({ name: '12', orientation: Orientation.H });
hqImage.push({ name: '13', orientation: Orientation.H });
hqImage.push({ name: '14', orientation: Orientation.H });
hqImage.push({ name: '15', rank: 6, orientation: Orientation.H });
hqImage.push({ name: '16', rank: 11, orientation: Orientation.H });
hqImage.push({ name: '17', orientation: Orientation.H });
hqImage.push({ name: '18', rank: 12, orientation: Orientation.H });
hqImage.push({ name: '19', rank: 3, orientation: Orientation.H });
hqImage.push({ name: '20', orientation: Orientation.H });
hqImage.push({ name: '21', rank: 14, orientation: Orientation.H });
hqImage.push({ name: '22', rank: 15, orientation: Orientation.H });
hqImage.push({ name: '23', rank: 16, orientation: Orientation.H });
hqImage.push({ name: '24', rank: 17, orientation: Orientation.H });
hqImage.push({ name: '25', rank: 18, orientation: Orientation.H });
hqImage.push({ name: '26', rank: 20, orientation: Orientation.H });
hqImage.push({ name: '27', rank: 13, orientation: Orientation.H });
hqImage.push({ name: '28', rank: 1, orientation: Orientation.H });
hqImage.push({ name: '29', rank: 19, orientation: Orientation.H });
hqImage.push({ name: '30', rank: 4, orientation: Orientation.H });
hqImage.push({ name: '31', rank: 21, orientation: Orientation.V });
hqImage.push({ name: '32', orientation: Orientation.V });
hqImage.push({ name: '33', orientation: Orientation.V });
hqImage.push({ name: '34', rank: 22, orientation: Orientation.V });
hqImage.push({ name: '35', rank: 23, orientation: Orientation.H });
hqImage.push({ name: '36', rank: 24, orientation: Orientation.H });
hqImage.push({ name: '37', rank: 25, orientation: Orientation.H });
hqImage.push({ name: '38', rank: 26, orientation: Orientation.H });
hqImage.push({ name: '39', orientation: Orientation.H });
hqImage.push({ name: '40', orientation: Orientation.H });
hqImage.push({ name: '41', orientation: Orientation.H });
hqImage.push({ name: '42', orientation: Orientation.H });
hqImage.push({ name: '43', orientation: Orientation.H });
hqImage.push({ name: '44', orientation: Orientation.H });
hqImage.push({ name: '45', orientation: Orientation.H });
hqImage.push({ name: '46', orientation: Orientation.H });
hqImage.push({ name: '47', orientation: Orientation.H });
hqImage.push({ name: '48', orientation: Orientation.H });
hqImage.push({ name: '49', orientation: Orientation.H });

export const HQ_IMAGES = hqImage;

export enum QUALITY {
  HQ = 150,
  w1000 = 100,
  w750 = 75,
  w500 = 50,
  w300 = 30
}

export function isValidImage (name: string) {
  return hqImage.filter(image => image.name === name).length === 1;
}

export function rankedImages () {
  return hqImage.filter(image => !!image.rank).sort((a, b) => {
    if (!a.rank || !b.rank) {
      return 0;
    }
    if (a.rank < b.rank) {
      return -1;
    }
    if (b.rank < a.rank) {
      return 1;
    }
    return 0;
  }).map((image, index) => {
    return { ...image, color: imageColor(index) };
  });
}

export function imageClass (image: HqImage, quality: QUALITY) {
  return `img-${image.name}-${quality}`;
}

export function imagePath (name: string, quality: QUALITY) {
  if (quality === QUALITY.w300) {
    return imagesW300[name];
  }
  if (quality === QUALITY.w500) {
    return imagesW500[name];
  }
  if (quality === QUALITY.w750) {
    return imagesW750[name];
  }
  if (quality === QUALITY.w1000) {
    return imagesW1000[name];
  } else {
    return imagesHQ[name];
  }
}

export const INTRO_IMAGES = [8, 9, 42, 44, 5, 33, 20, 15];
