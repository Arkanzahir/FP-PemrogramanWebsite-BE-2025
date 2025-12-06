export interface IPairOrNoPairItem {
  id: string;
  game_template_id: string;
  creator_id: string;
  left_content: string;
  right_content: string;
}

export interface IPairOrNoPairGameData {
  items: IPairOrNoPairItem[];
}

export interface IStackCard {
  id: string;
  content: string;
}
