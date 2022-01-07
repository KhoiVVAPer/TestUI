export interface IComment {
  id: string;
  userName?: string;
  userAvatar?: string;
  userTitle?: string;
  content?: string;
}

export const mockPostListComments: IComment[] = [
  {
    id: '01',
    userAvatar: 'https://picsum.photos/50',
    userName: 'Nguyễn Văn A',
    userTitle: 'Bac si',
    content:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: '02',
    userAvatar: 'https://picsum.photos/50',
    userName: 'Nguyễn Văn B',
    userTitle: 'Bac si B',
    content:
      'Lorem Ipsum is simply dummy Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industrytext of the printing and typesetting industry',
  },
  {
    id: '03',
    userAvatar: 'https://picsum.photos/50',
    userName: 'Nguyễn Văn C',
    content:
      'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryIpsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: '04',
    userAvatar: 'https://picsum.photos/50',
    userName: 'Nguyễn Văn E',
    userTitle: 'Bac si X',
    content:
      'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryIpsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: '05',
    userAvatar: 'https://picsum.photos/50',
    userName: 'Nguyễn Văn F',
    content:
      'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryIpsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: '06',
    userAvatar: 'https://picsum.photos/50',
    userName: 'Nguyễn Văn ASD',
    userTitle: 'Bac si X',
    content:
      'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryIpsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: '07',
    userAvatar: 'https://picsum.photos/50',
    userName: 'Nguyễn Văn BBBF',
    content:
      'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryIpsum is simply dummy text of the printing and typesetting industry',
  },
];
