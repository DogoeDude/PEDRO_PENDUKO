export type GameState = {
  currentDimension: number;
  currentScene: string;
  inventory: string[];
  choices: string[];
  playerStats: {
    health: number;
    energy: number;
    experience: number;
  };
};

export type Dimension = {
  name: string;
  mechanics: string;
  lore: string;
  village: {
    name: string;
    description: string;
    activities: string[];
  };
};

export type Scene = {
  title: string;
  description: string;
  background: string;
  choices: Choice[];
};

export type Choice = {
  text: string;
  nextScene: string;
  requirement?: {
    item?: string;
    stat?: {
      type: "health" | "energy" | "experience";
      value: number;
    };
  };
};
