interface ArticleProvider {
  id: string;
  reset(): void;
  hasMore(): boolean;
  next(): Promise<Article[]>;
  getMainSubjects(): Promise<MainSubjectsCount>;
  articleSelected(article: Article): void;
}

interface MainSubject {
  id: string;
  label: string;
}

type MainSubjectsCount = {
  [key: string]: number;
};

type Person = {
  id?: string;
  label: string;
};

type Publication = {
  id?: string;
  label: string;
};

interface Article {
  api: string;
  authors?: Person[];
  citation_line?: string;
  doi: string;
  id: string;
  issue?: string;
  logo?: string;
  main_subjects?: MainSubject[];
  pages?: string;
  provider?: string;
  publications?: Publication[];
  publication_date?: Date;
  title?: string;
  url: string;
  volume?: string;
}

interface Creator {
  id: string;
  label: string;
  url?: string;
}

interface Depicted {
  id: string;
  label?: string;
  url?: string;
  dro?: boolean;
  prominent?: boolean;
}

interface Image {
  api: string;
  aspect_ratio: number;
  attribution?: string;
  coords?: string;
  creator?: Creator;
  depicts?: Depicted[];
  description?: string;
  detail_url?: string;
  file?: string;
  foreign_landing_url?: string;
  format?: string;
  id: string;
  iiif?: string; // IIIF manifest URL
  imageQualityAssessment?: string;
  isFavorite?: boolean;
  height?: number;
  license: string; // URL
  logo?: string; // provider logo
  pageid?: string;
  provider?: string; // name of provider
  raw?: object;
  score?: number;
  size?: number;
  source?: string;
  tags?: string[];
  title?: string;
  thumbnail?: string;
  url?: string;
  width?: number;
}

export {
  Article,
  ArticleProvider,
  Depicted,
  Image,
  MainSubject,
  MainSubjectsCount,
};
