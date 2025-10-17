export interface Member {
  id: string;
  name: string;
  nameJapanese: string;
  title: string;
  joinYear: string;
  image: string;
  questions?: Question[];
}

export interface Question {
  id: string;
  question: string;
  answer: string;
}

export interface GoodPoint {
  id: string;
  text: string;
  icon: string;
}

export interface HomePageData {
  mission: {
    title: string;
    subtitle: string;
  };
  message: {
    title: string;
    content: string;
    link: string;
  };
  interview: {
    title: string;
    members: Member[];
  };
  goodPoints: {
    title: string;
    points: GoodPoint[];
  };
}

export interface Graduate {
  id: string;
  name: string;
  nameJapanese: string;
  title: string;
  graduationYear: string;
  image: string;
  content: string;
}

