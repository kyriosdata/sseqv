import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class ArticleComponent implements OnInit {

  nome: string;

  constructor(private router: ActivatedRoute) {
    router.params.subscribe(params => {
      this.nome = params.article;
    })
   }

  ngOnInit() {
  }

}
