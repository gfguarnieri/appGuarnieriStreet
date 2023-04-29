import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from '../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public listaProdutos: Produto[] = [];

  constructor(private ProdutoService: ProdutoService) { }

  ngOnInit() {
    this.ProdutoService.getProdutos().subscribe(
      (produtos) =>{
       this.listaProdutos = produtos;
      }
    )
  }
}
