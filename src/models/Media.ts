export class Media {
  nome: string;
  nota: number;
  id: string;
  imagem: string;
  tipo: 'serie' | 'movie';

  constructor(
    nome: string,
    nota: number,
    id: string,
    imagem: string,
    tipo: 'serie' | 'movie'
  ) {
    this.nome = nome;
    this.nota = nota;
    this.id = id;
    this.imagem = imagem;
    this.tipo = tipo;
  }
}
