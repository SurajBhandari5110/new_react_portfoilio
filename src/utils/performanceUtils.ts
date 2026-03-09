/**
 * Throttle function to limit how often a callback is executed
 * @param callback Function to throttle
 * @param delay Minimum time between executions in milliseconds
 */
export const throttle = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  let timeout: NodeJS.Timeout;

  return function (...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      callback(...args);
      lastCall = now;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(...args);
        lastCall = Date.now();
      }, delay - (now - lastCall));
    }
  };
};

/**
 * Debounce function to delay callback execution
 * @param callback Function to debounce
 * @param delay Delay in milliseconds
 */
export const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return function (...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

/**
 * Request animation frame based throttle - more efficient for animations
 */
export const rafThrottle = <T extends (...args: any[]) => any>(
  callback: T
): ((...args: Parameters<T>) => void) => {
  let rafId: number;
  let lastArgs: Parameters<T>;

  return function (...args: Parameters<T>) {
    lastArgs = args;
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    rafId = requestAnimationFrame(() => {
      callback(...lastArgs);
    });
  };
};
