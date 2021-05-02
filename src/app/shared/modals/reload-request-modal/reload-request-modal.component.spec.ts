import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadRequestModalComponent } from './reload-request-modal.component';

describe('ReloadRequestModalComponent', () => {
  let component: ReloadRequestModalComponent;
  let fixture: ComponentFixture<ReloadRequestModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReloadRequestModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReloadRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
