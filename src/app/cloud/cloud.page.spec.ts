import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CloudPage } from './cloud.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CloudPage', () => {
  let component: CloudPage;
  let fixture: ComponentFixture<CloudPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CloudPage, 
        HttpClientTestingModule 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CloudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
