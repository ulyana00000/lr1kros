import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyHeaderComponent } from './my-header.component';

describe('MyHeaderComponent', () => {
  let component: MyHeaderComponent;
  let fixture: ComponentFixture<MyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHeaderComponent] // ✅ standalone, тому тут!
    }).compileComponents();

    fixture = TestBed.createComponent(MyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
