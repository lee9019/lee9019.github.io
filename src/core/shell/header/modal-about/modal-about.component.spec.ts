import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalAboutComponent } from './modal-about.component';
import { SeWebModule } from '@se/web-ui-angular';

describe('ModalAboutComponent', () => {
  let component: ModalAboutComponent;
  let fixture: ComponentFixture<ModalAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SeWebModule],
      declarations: [ModalAboutComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});