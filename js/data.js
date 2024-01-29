import {getRandomArrElement, getRandomInteger} from './util.js';

const MAX_PHOTOS = 25;
const MAX_AVATAR_ID = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const DESCRIPTIONS = [
  'Как быстро летит время!',
  'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. — Albus Dumbledore',
  'Это я на море был, сейчас я дома уже...',
  'Возраст — всего лишь число.',
  'Ученье — свет, а неученье — тьма',
  'Когда-нибудь всё снова будет хорошо, но это уже совсем другая история...',
  'Every great wizard in history has started out as nothing more than what we are now, students. If they can do it, why not us? — Harry Potter',
  'Как жаль, что солнце в Санкт-Петербурге такое редкое явление!',
  'Нас и здесь неплохо кормят!',
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const COMMENTATORS_NAMES = [
  'Natalia',
  'Elizaveta',
  'Varvara',
  'Elena',
  'Marina',
  'Andrey',
  'Victoria',
  'Alexsey',
  'Ekaterina',
  'Alexsander',
  'Roman',
  'Polina',
  'Anna',
  'Olga',
  'Sofia',
];
const MAX_COMMENTS = 15;

const createComment = (id) => ({
  id,
  avatar: `img/avatar-${getRandomInteger(1, MAX_AVATAR_ID)}.svg`,
  message:getRandomArrElement(COMMENTS),
  name: getRandomArrElement(COMMENTATORS_NAMES),
});

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({length: getRandomInteger(1, MAX_COMMENTS)}, (_, index) => createComment (index + 1)),
});

export const createGallery = () =>
  Array
    .from({length: MAX_PHOTOS}, (_, index) => createPhoto (index + 1));

