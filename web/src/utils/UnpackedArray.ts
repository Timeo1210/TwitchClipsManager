export type UnpackedArray<T> = T extends (infer U)[] ? U : T;
