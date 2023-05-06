import { Component, OnInit } from '@angular/core';
import { LocalizacaoService } from '../services/localizacao.service';
import { Produto } from '../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public listaProdutos: Produto[] = [];

  constructor(
    private localizacaoService: LocalizacaoService) { }

  ngOnInit() {

    setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.localizacaoService.inserir({
          idusuario: 17,
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          horario: new Date(),
          nome: "Bruna"
        }).subscribe();
      })
    }, 2000);
  }
}
