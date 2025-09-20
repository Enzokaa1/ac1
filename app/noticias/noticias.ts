import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Noticia {
  titulo: string;
  autor: string;
  data: Date;
  conteudo: string;
  curtidas: number;
  comentarios: string[];
  novoComentario?: string;
}

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.html',
  imports: [FormsModule],
  styleUrls: ['./noticias.css']
})
export class Noticias{
  noticias: Noticia[] = [
    {
      titulo: "Neymar conquista sua primeira Copa do Mundo",
      autor: "TNT Sports",
      data: new Date(2026, 11, 12),
      conteudo: "Neymar aos 33 anos conquista usa primeira Copa do Mundo",
      curtidas: 100,
      comentarios: []
    },
    {
      titulo: "Crawford se torna 3x campeão unificado",
      autor: "Combate",
      data: new Date(2025, 9, 13),
      conteudo: "Crawford supera Canelo Alvarez e se torna 3x campeão unificado.",
      curtidas: 100,
      comentarios: []
    },
    {
      titulo: "São Paulo campeão da Libertadores 2025",
      autor: "TNT Sports",
      data: new Date(2025, 11, 10),
      conteudo: "São paulo se torna o primeiro clube brasileiro a ser tetracampeão da Copa Libertadores",
      curtidas: 13000000000,
      comentarios: []
    }
  ];

  curtir(noticia: Noticia) {
    noticia.curtidas++;
  }

  comentar(noticia: Noticia) {
    if (noticia.novoComentario && noticia.novoComentario.trim() !== "") {
      noticia.comentarios.push(noticia.novoComentario);
      noticia.novoComentario = ""; 
    }
  }
}
