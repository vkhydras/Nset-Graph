import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "../models/User";
import { mockUsers } from "src/_mocks_/mockUser";
import { UserSetting } from "../models/UserSetting";
import { mockUserSettings } from "src/_mocks_/mockUserSettings";
import { CreateUserInput } from "../utils/CReateUserInput";

let incrimentaId = 3

@Resolver(() => User)
export class UserResolver{

    @Query(() => User, {nullable: true})
    getUserById(@Args('id', {type: () => Int}) id: number){
        return mockUsers.find(user => user.id === id)
    }

    @Query(()=> [User])
    getUsers(){
        return mockUsers;
    }

    @ResolveField(() => UserSetting, {name: 'settings', nullable: true})
    getUserSettings(@Parent() user: User){
        return mockUserSettings.find(setting => setting.userId === user.id)
    }

    @Mutation(() => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput){
        const {username, displayName} = createUserData
        const newUser = {
            username,
            displayName,
            id: ++incrimentaId
        }
        mockUsers.push(newUser)
        return newUser
    }

}