import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserResolver } from './graphql/resolevers/UserResolver';
import { UserSettingResolver } from './graphql/resolevers/UserSettingsREsolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'Vkhydra2005',
      database: 'graphql_tutorial',
      entities:[],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [UserResolver, UserSettingResolver],
})
export class AppModule {}
