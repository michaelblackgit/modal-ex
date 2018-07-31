import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  private data: string;

  constructor(private modalService: NgbModal) {
    this.data = '';
  }

  ngOnInit() {

  }

  private open(): void {
    const modalRef = this.modalService.open(ModalContent);
    modalRef.componentInstance.data = this.data;
    modalRef.result.then(result => {
      this.data = result;
      console.log("WORKED. Data: ", this.data);
    })
  }

}



@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Test</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form>
        <label>Enter data</label>
        <input placeholder="{{ data }}" [(ngModel)]="data" name="data">
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="close()">Close</button>
    </div>
  `
})

export class ModalContent {

  @Input() data;

  constructor(public activeModal: NgbActiveModal) { }

  private close(): void {
    console.log("CLOSING. Data: ", this.data);
    this.activeModal.close(this.data);
  }
}
