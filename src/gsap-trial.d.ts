declare module 'gsap-trial/SplitText' {
  interface SplitTextConfig {
    type?: string;
    [key: string]: any;
  }

  export class SplitText {
    constructor(target: string | Element | Element[], config?: SplitTextConfig);
    split(config?: SplitTextConfig): this;
    revert(): this;
    chars?: Element[];
    words?: Element[];
    lines?: Element[];
  }
}
