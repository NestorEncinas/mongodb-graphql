import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { PivoType } from './dto/create-pivo.dto';
import { PivosService } from './pivos.service';

import { PivoInput } from './inputs/pivo.input';

@Resolver()
export class PivosResolver {
  constructor(private readonly pivosService: PivosService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [PivoType])
  async pivos() {
    return this.pivosService.findAll();
  }

  @Mutation(() => PivoType)
  async createPivo(@Args('input') input: PivoInput) {
    return this.pivosService.create(input);
  }
}
