declare module "gsap-trial/SplitText" {
  export interface SplitTextVars {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
  }

  export class SplitText {
    constructor(target: Element | string | ArrayLike<Element>, vars?: SplitTextVars);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert: () => void;
  }
}
