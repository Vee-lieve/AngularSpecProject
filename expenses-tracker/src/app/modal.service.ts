import { Injectable } from '@angular/core';

import {ModalDirective} from 'angular-bootstrap-md';

@Injectable({

providedIn:'root'

})

export class ModalService {

yourModal:ModalDirective;

constructor() { }

setModal(modal:ModalDirective) {

this.yourModal=modal;

}

showModal() {

this.yourModal.show();

}

}