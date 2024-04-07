import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { CreateUserSettingsInput } from '../utils/CreateUserSettingsInput';
import { mockUserSettings } from 'src/_mocks_/mockUserSettings';

@Resolver()
export class UserSettingResolver {
  @Mutation(() => UserSetting)
  createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: CreateUserSettingsInput,
  ) {
    mockUserSettings.push(createUserSettingsData)
    return createUserSettingsData;
  }
}
