export interface TCategory {
  name: string;
  options: {
    name: string;
    func: Function;
  }[];
}
