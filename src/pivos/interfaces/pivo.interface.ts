import { Document } from 'mongoose';

export interface Pivo extends Document {
  readonly name: string;
}
