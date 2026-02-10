import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIllustrationComponent } from './footer-illustration.component';

describe('FooterIllustrationComponent', () => {
  let component: FooterIllustrationComponent;
  let fixture: ComponentFixture<FooterIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterIllustrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
