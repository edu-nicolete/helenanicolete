import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    name: string;
    textoMensagem: string;
}

@Component({
    selector: 'app-notifications',
    templateUrl: './notificacao.component.html',
    styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    showNotification() {
        const dialogRef = this.dialog.open(ModalNotificacaoComponent, {
            width: '50%',
            height: '50%',
            data: {name: 'Nome Pessoa', textoMensagem: "Olá, tudo bem? heheheheheheheheheheheheheheheheheheheheheheheheheeh"}
        });
    }
}

@Component({
    selector: 'app-modal-notificacao',
    templateUrl: 'modal-notificacao-component.html',
})
export class ModalNotificacaoComponent {

    constructor(
        public dialogRef: MatDialogRef<ModalNotificacaoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
