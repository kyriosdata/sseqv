import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    noticias: Array<any> = [];
    publicacoes: Array<any> = [];

    constructor() {

        this.noticias.push({
                titulo: 'Health-Related Quality of Life and Well-Being',
                descricao: 'Health-related quality of life (HRQoL) is a multi-dimensional concept that includes domains related to physical, mental, emotional, and social functioning',
                link: 'https://www.healthypeople.gov/2020/about/foundation-health-measures/Health-Related-Quality-of-Life-and-Well-Being',
                imagem: ''
            },
            {
                titulo: 'Doenças raras: Governo, Especialistas e Pacientes juntos por um Sistema de Saúde Público inclusivo',
                descricao: 'A participação social como forma para superar os desafios de incluir no SUS tratamentos para doenças pouco conhecidas',
                link: 'http://conitec.gov.br/doencas-raras-governo-especialistas-e-pacientes-juntos-por-um-sistema-de-saude-publico-inclusivo',
                imagem: ''
            },
            {
                titulo: 'Contribua com a elaboração das Diretrizes Brasileiras de Intoxicações por Agrotóxicos',
                descricao: 'A CONITEC já aprovou os três primeiros capítulos do documento e, a partir de hoje, a abre Consulta Pública para receber sugestões da sociedade sobre os capítulos 4 e 5',
                link: 'http://conitec.gov.br/contribua-com-a-elaboracao-das-diretrizes-brasileiras-de-intoxicacoes-por-agrotoxicos',
                imagem: ''
            });
        this.publicacoes.push({
                titulo: 'Projeto QualiVida',
                descricao: 'Sinopse - SSEQV',
                label: 'PDF',
                link: 'assets/anexos/Sinopse_ProjetoSSEQV.pdf'
            },
            {
                titulo: 'DGITS - CONITEC',
                descricao: 'Novo Marco - Lei Nº 12.401/2011',
                label: 'PDF',
                link: 'http://portalarquivos2.saude.gov.br/images/pdf/2016/junho/29/dgits-10-anos-pnpmf.pdf'
            },
            {
                titulo: 'CONITEC - Legislação',
                descricao: 'Portaria Nº 152/2006',
                label: 'PDF',
                link: 'http://conitec.gov.br/images/Legislacao/Portaria152_19.01.2006.pdf'
            },
            {
                titulo: 'CONITEC - Legislação',
                descricao: 'Portaria SCTIE/MS Nº 26/2015',
                label: 'PDF',
                link: 'http://conitec.gov.br/images/Legislacao/Portaria26de2015_Requisitos_SubmissaoeAnalisedeProposta.pdf'
            });
    }

    ngOnInit() {

    }

}
