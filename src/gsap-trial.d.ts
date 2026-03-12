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

declare module 'gsap-trial/ScrollSmoother' {
  interface ScrollSmootherConfig {
    wrapper?: string | Element;
    content?: string | Element;
    smooth?: number;
    speed?: number;
    effects?: boolean;
    autoResize?: boolean;
    ignoreMobileResize?: boolean;
    onUpdate?: (obj: any) => void;
    onPress?: () => void;
    onRelease?: () => void;
    [key: string]: any;
  }

  export class ScrollSmoother {
    constructor(config?: ScrollSmootherConfig);
    static create(config?: ScrollSmootherConfig): ScrollSmoother;
    scrollTop(value?: number): number | undefined;
    paused(value?: boolean): boolean | undefined;
    getVelocity(): number;
    refresh(): this;
    kill(): this;
  }
}
