import { TabService } from './tab.service';
import { LogService } from '../logger/log.service';

describe('TabService', () => {
  let service: TabService;
  let loggerSpy: jasmine.SpyObj<LogService>;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LogService', ['log']);
    service = new TabService(loggerSpy);
  });

  it('повертає правильне значення atan(x)', () => {
    const result = service.tabulate(0.1, 0.1, 0.1); // тільки одне значення
    expect(result.length).toBe(1);
    expect(result[0].x).toBeCloseTo(0.1, 5);
    expect(result[0].y).toBeCloseTo(Math.atan(0.1), 5);
  });

  it('викликає logger.log для кожного x', () => {
    service.tabulate(0.1, 0.3, 0.1); // три значення
    expect(loggerSpy.log).toHaveBeenCalledTimes(3);
  });
});
