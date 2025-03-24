// Type definitions for Google Analytics gtag
interface Window {
  gtag: (
    command: 'consent' | 'config' | 'event' | 'set',
    target: string,
    config?: {
      [key: string]: any;
    }
  ) => void;
}
