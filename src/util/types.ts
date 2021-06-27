// color id is its index in the colors array
export type Color = number;

export type BucketContents = Color[];

export interface GameState {
  buckets: BucketContents[];
}
