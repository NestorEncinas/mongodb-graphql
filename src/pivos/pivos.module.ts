import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PivosService } from './pivos.service';
import { PivoSchema } from './pivos.schema';
import { PivosResolver } from './pivos.resolver';

/**
 * Code first#
 * In the code first approach, you'll only use decorators and TypeScript classes
 *  to generate the corresponding GraphQL schema.
 */

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pivo', schema: PivoSchema }])],
  providers: [PivosResolver, PivosService],
})
export class PivosModule {}
