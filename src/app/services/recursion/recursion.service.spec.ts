import { RecursionService } from './recursion.service';
import { LogService } from '../logger/log.service';

describe('RecursionService', () => {
  let service: RecursionService;
  let loggerSpy: jasmine.SpyObj<LogService>;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LogService', ['log']);
    service = new RecursionService(loggerSpy);
  });

  it('обчислює значення рекурсивно близьке до atan(x)', () => {
    const result = service.tabulate(0.1, 0.1, 0.1);
    expect(result.length).toBe(1);
    expect(result[0].x).toBeCloseTo(0.1, 5);
    expect(result[0].y).toBeCloseTo(Math.atan(0.1), 2);
  });

  it('викликає logger.log для кожного x', () => {
    service.tabulate(0.1, 0.4, 0.1);
    expect(loggerSpy.log).toHaveBeenCalledTimes(4);
  });
});
