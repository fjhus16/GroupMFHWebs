// To parse this data:
//
//   import { Convert, Article } from "./file";
//
//   const article = Convert.toArticle(json);

export interface Article {
  data: ArticleData;
}

export interface ArticleData {
  id:         number;
  attributes: PurpleAttributes;
}

export interface PurpleAttributes {
  title:         string;
  excerpt:       string;
  services:      string;
  sector:        string;
  category:      string;
  content:       string;
  date:          Date;
  keywords:      string;
  locale:        string;
  coverImage:    CoverImage;
  localizations: Localizations;
}

export interface CoverImage {
  data: CoverImageData;
}

export interface CoverImageData {
  id:         number;
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  name: string;
  url:  string;
}

export interface Localizations {
  data: Datum[];
}

export interface Datum {
  id:         number;
  attributes: DatumAttributes;
}

export interface DatumAttributes {
  title:    string;
  excerpt:  string;
  services: string;
  sector:   string;
  category: string;
  content:  string;
  date:     Date;
  keywords: string;
  locale:   string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toArticle(json: string): Article {
      return JSON.parse(json);
  }

  public static articleToJson(value: Article): string {
      return JSON.stringify(value);
  }
}

export default Article