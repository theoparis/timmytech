export type Merge<P, T> = Omit<P, keyof T> & T;

export const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.6] };
