import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySquadComponent } from './my-squad.component';

describe('MySquadComponent', () => {
  let component: MySquadComponent;
  let fixture: ComponentFixture<MySquadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySquadComponent]
    });
    fixture = TestBed.createComponent(MySquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
