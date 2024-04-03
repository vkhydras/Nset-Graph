import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { User } from "../models/User";
import { mockUsers } from "src/_mocks_/mockUser";

@Resolver()
export class UserResolver{

    @Query((returns) => User, {nullable: true})
    getUserById(@Args('id', {type: () => Int}) id: number){
        return mockUsers.find(user => user.id === id)
    }

    @Query(()=> [User])
    getUsers(){
        return mockUsers;
    }

}