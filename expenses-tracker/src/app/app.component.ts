import { Component, Input } from '@angular/core';
import { ModalService } from './modal.service';
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "ngbd-modal-content",
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{ name }}!</p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'expenses-tracker';
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = "World";
  }

}
