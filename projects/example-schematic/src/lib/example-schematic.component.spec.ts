import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSchematicComponent } from './example-schematic.component';

describe('ExampleSchematicComponent', () => {
  let component: ExampleSchematicComponent;
  let fixture: ComponentFixture<ExampleSchematicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleSchematicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSchematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
