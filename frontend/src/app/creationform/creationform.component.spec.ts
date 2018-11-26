import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationformComponent } from './creationform.component';

describe('CreationformComponent', () => {
  let component: CreationformComponent;
  let fixture: ComponentFixture<CreationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
