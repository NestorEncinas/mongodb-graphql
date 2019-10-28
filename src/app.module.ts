import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PivosModule } from './pivos/pivos.module';

/**
 * Code first
 * In the code first approach, you'll only use decorators and TypeScript classes
 *  to generate the corresponding GraphQL schema.
 */

@Module({
  imports: [
    PivosModule,
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    MongooseModule.forRoot(
      'mongodb+srv://encinas:encinas@cluster0-d9ht5.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
