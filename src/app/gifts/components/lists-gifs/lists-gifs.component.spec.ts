import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsGifsComponent } from './lists-gifs.component';

describe('ListsGifsComponent', () => {
  let component: ListsGifsComponent;
  let fixture: ComponentFixture<ListsGifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListsGifsComponent]
    });
    fixture = TestBed.createComponent(ListsGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
