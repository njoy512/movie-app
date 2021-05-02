import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Input() placeholder: string = 'Search';
  @Output() searchEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onChangeEvent(event: any) {
    this.searchEvent.emit(event.target.value);
  }

}
