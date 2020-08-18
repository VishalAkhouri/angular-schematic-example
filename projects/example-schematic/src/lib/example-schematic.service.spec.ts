import { TestBed } from '@angular/core/testing';

import { ExampleSchematicService } from './example-schematic.service';

describe('ExampleSchematicService', () => {
  let service: ExampleSchematicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleSchematicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
