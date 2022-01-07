export interface IPostDetails {
  id: string;
  userName?: string;
  userAvatar?: string;
  lastModified?: string;
  title?: string;
  content?: string;
}

export const mockPostInfo: IPostDetails = {
  id: '01',
  userAvatar: 'https://picsum.photos/50',
  userName: 'Nguyễn Văn A',
  lastModified: '28/09/2021',
  title:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  content:
    'But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};
