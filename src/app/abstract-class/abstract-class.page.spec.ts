import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractClassPage } from './abstract-class.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AbstractClassPage', () => {
  let component: AbstractClassPage;
  let fixture: ComponentFixture<AbstractClassPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AbstractClassPage, // ✅ standalone
        HttpClientTestingModule // ✅ підключаємо для HttpClient
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AbstractClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
