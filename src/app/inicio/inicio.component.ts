import {Component, ElementRef, OnInit} from '@angular/core';
import {newArray} from '@angular/compiler/src/util';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    public tabelaPontosPsi: any;
    public tabelaPontosPsi2: any;

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        this.tabelaPontosPsi = [{
            sobreMim: 'Controle de pensamentos negativos.'
        }, {
            sobreMim: 'Atividade de concentração da mente.'
        }, {
            sobreMim: 'Ressignifação dos seus pensamentos.'
        }, {
            sobreMim: 'Valorize-se.'
        }];

        this.tabelaPontosPsi2 = [{
            sobreMim: 'Afaste-se de pessoas negativas.'
        }, {
            sobreMim: 'Comemore as pequenas conquistas.'
        }, {
            sobreMim: 'Faça suas próprias escolhas.'
        }];
    }

}
