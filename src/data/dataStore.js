export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  listCreatorText: 'Add new list',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  defaultListImage: './src/vendor/alternatywne-tlo.jpg',
  defaultHeaderIcon: 'far fa-comment-dots',
};

export const pageContents = {
  categoryTitle: 'Home',
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const infoContents = {
  categoryTitle: 'Info',
  title: 'About us',
  image: 'src/vendor/pexels-pew-nguyen.jpg',
  contentInfoTitle: 'Info',
  contentInfoText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  contentContactTitle: 'Contact',
  contentContactText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  contentContactTel: 'tel: 123 456 789',
  contentContactEmail: 'info@info.com',
  contentContactCountry: 'New Zeland',
};

export const faqContents = {
  categoryTitle: 'FAQ',
  title: 'Frequently Asked Questions',
  image: 'src/vendor/light-bulb.jpg',
  questionTitle1: '1. How to do?',
  questionContent1: 'Nullam suscipit dolor. Morbi scelerisque justo vulputate lectus. In cursus justo nibh pulvinar ligula, in augue.',
  questionTitle2: '2. Why to do?',
  questionContent2: 'Proin luctus. Aenean faucibus orci elit, sit amet neque. Cras ut orci ac posuere cubilia Curae, Sed dolor. Nullam fermentum wisi, mollis luctus laoreet. Donec lectus nulla vitae ornare id, urna. Aenean quis consectetuer arcu nec lectus sit amet, aliquam imperdiet.',
  questionTitle3: '3. Where to go?',
  questionContent3: 'Donec libero odio tellus wisi, fermentum pede, molestie justo sem, eleifend erat volutpat. Vivamus nibh malesuada tristique, mauris tincidunt sit amet, est. Curabitur scelerisque condimentum nec, scelerisque a, convallis libero. Donec eu mi leo nec nisl. Vestibulum vestibulum, dolor lacus, elementum vitae, pellentesque non, ipsum.',
};

export const searchingContent = {
  title: 'Your Search Results',
  image: 'https://cdn.pixabay.com/photo/2017/03/08/20/12/telescope-2127704_960_720.jpg',
  icon: 'fas fa-search',
};

export const listData = {
  key: 0,
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          // index: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          // index: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          // index: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          // index: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          // index: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          // index: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    // key: 0,
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    // key: 1,
    id: 'list-2',
    title: 'Things to do <sup>next week!</sup>',
    description: 'Interesting things I do not want to do!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    // key: 2,
    id: 'list-3',
    title: 'Things to do <sup>next year!</sup>',
    description: 'Not interesting things!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    index: 0,
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    index: 1,
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    index: 0,
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    index: 1,
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    index: 0,
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    index: 1,
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;

