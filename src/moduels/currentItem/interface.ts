export interface CurrentItemState {
  item: Item | null;
}

export interface Item {
  id: number;
  name: string;
  info: string;
  tag: Array<string>;
  src: string;
  beforeVideo: Array<string>;
  profile: string;
}
