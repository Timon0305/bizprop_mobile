import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterSelectionPage } from './register-selection.page';

describe('RegisterSelectionPage', () => {
  let component: RegisterSelectionPage;
  let fixture: ComponentFixture<RegisterSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSelectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
