// Make sure JSX.IntrinsicElements resolves to React's intrinsic elements so
// third-party libs (e.g. react-markdown) get the correct tag-name literal types.
// We extend React's JSX namespace rather than providing a broad index signature
// which would make `keyof JSX.IntrinsicElements` collapse to `string`.
import type React from 'react';

declare global {
  namespace JSX {
    // Extend React's IntrinsicElements so libraries that reference JSX.IntrinsicElements
    // see the same type map as React's own types.
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }
}

export {};
