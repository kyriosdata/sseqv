import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {

  coordenadores: Array<any> = new Array();
  bolsistas: Array<any> = new Array();

  constructor() {
    this.coordenadores.push({
      nome: "Prof. Dr. Eliomar Araújo de Lima",
      cargo: "Coordenador Técnico",
      lattes: "http://lattes.cnpq.br/1362170231777201",
      avatar: "assets/img/eliomar.png"
    },
      {
        nome: "Prof. Dr. Fábio Nogueira de Lucena",
        cargo: "Subcoordenador Técnico",
        lattes: "http://lattes.cnpq.br/6428011745982173",
        avatar: "assets/img/fabio.png"
      })

    this.bolsistas.push({
      nome: "Carlos Hernane Oliveira",
      cargo: "Graduado em Sistemas de Informação",
      lattes: "http://lattes.cnpq.br/4808316415791351",
      avatar: "assets/img/hernane.png"
    },
      {
        nome: "Douglas Tonetto Pfeifer",
        cargo: "Graduando em Ciência da Computação",
        lattes: "",
        avatar: "assets/img/douglas.jpeg"
      },
      {
        nome: "Hyago Vieira de Souza",
        cargo: "Graduando em Engenharia de Software",
        lattes: "http://lattes.cnpq.br/1023258037593936",
        avatar: "assets/img/hyago.jpg"
      },
      {
        nome: "Karine Pires de Araújo",
        cargo: "Graduanda em Ciência da Computação",
        lattes: "http://lattes.cnpq.br/8660012741877683",
        avatar: "assets/img/karine.jpeg"
      },
      {
        nome: "Luísa Nunes C. de Oliveira",
        cargo: "Graduanda em Gestão da Informação",
        lattes: "",
        avatar: "assets/img/luisa.png"
      },
      {
        nome: "Max Stival Rocha",
        cargo: "Graduando em Sistemas de Informação",
        lattes: "http://lattes.cnpq.br/9729379560275328",
        avatar: "assets/img/max.jpeg"
      },
      {
        nome: "Nicolas de Sousa E. Da Cruz",
        cargo: "Graduando em Gestão da Informação",
        lattes: "http://lattes.cnpq.br/0781723700217537",
        avatar: "assets/img/nicolas.jpg"
      },
      {
        nome: "Raquel de Andrade Corrêa",
        cargo: "Graduanda em Sistemas de Informação",
        lattes: "http://lattes.cnpq.br/4535240596782679",
        avatar: "assets/img/raquel.jpeg"
      },
      {
        nome: "Thaynara Mabille Marques Ribeiro",
        cargo: "Graduanda em Ciência da Computação",
        lattes: "http://lattes.cnpq.br/4546159648766726",
        avatar: "assets/img/thaynara.jpeg"
      },
      {
        nome: "Túlio Alcântara Magalhães",
        cargo: "Graduando em Ciência da Computação",
        lattes: "",
        avatar: "assets/img/tulio.png"
      },
      {
        nome: "Vinícius Borges Alencar",
        cargo: "Graduando em Ciência da Computação",
        lattes: "http://lattes.cnpq.br/8713357903992486",
        avatar: "assets/img/vinicius.jpg"
      },
      {
        nome: "Ygor Galvão Lourenço",
        cargo: "Graduado em Gestão da Informação",
        lattes: "http://lattes.cnpq.br/4675488468292421",
        avatar: "assets/img/ygor.png"
      })
  }

  ngOnInit() {
  }

}
