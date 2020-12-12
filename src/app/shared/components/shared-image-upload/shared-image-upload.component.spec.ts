import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedImageUploadComponent } from './shared-image-upload.component';

describe('SharedImageUploadComponent', () => {
  let component: SharedImageUploadComponent;
  let fixture: ComponentFixture<SharedImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedImageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
