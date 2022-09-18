export type INews = {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: 0;
  produtos: string;
  editorias: string;
  imagens: string;
  destaque: boolean;
  link: string;
};

export type Image = {
  float_fulltext: string;
  float_intro: string;
  image_fulltext: string;
  image_fulltext_alt: string;
  image_fulltext_caption: string;
  image_intro: string;
  image_intro_alt: string;
  image_intro_caption: string;
};
