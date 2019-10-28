import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Pivo } from './interfaces/pivo.interface';
import { PivoInput } from './inputs/pivo.input';

@Injectable()
export class PivosService {
  constructor(@InjectModel('Pivo') private readonly pivoModel: Model<Pivo>) {}

  async create(createPivoDto: PivoInput): Promise<Pivo> {
    const createdPivo = new this.pivoModel(createPivoDto);
    return await createdPivo.save();
  }

  async findAll(): Promise<Pivo[]> {
    return await this.pivoModel.find().exec();
  }
}
