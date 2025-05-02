import { SeriesService } from './series.service';
import { LogService } from '../logger/log.service';

describe('SeriesService', () => {
  let service: SeriesService;
  let loggerSpy: jasmine.SpyObj<LogService>;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LogService', ['log']);
    service = new SeriesService(loggerSpy);
  });

  it('правильно обчислює значення ряду для atan(x)', () => {
    const result = service.tabulate(0.1, 0.1, 0.1); // одне значення
    expect(result.length).toBe(1);
    expect(result[0].x).toBeCloseTo(0.1, 5);
    // очікуємо схожість з Math.atan()
    expect(result[0].y).toBeCloseTo(Math.atan(0.1), 2); // точність менша
  });

  it('викликає logger.log для кожного x', () => {
    service.tabulate(0.1, 0.3, 0.1); // три значення
    expect(loggerSpy.log).toHaveBeenCalledTimes(3);
  });
});
