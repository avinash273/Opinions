import React from 'react';
import { View } from 'react-native';
import { UserType } from '../../../types';
import ProfilePicture from '../../ProfilePicture';

//Has only profile picture of opinion
export type LeftContainerProps = {
    user: UserType,
}

const LeftContainer = ({ user }: LeftContainerProps) => (
    <View>
        <ProfilePicture image={user.image} size={50} />
    </View>
)

export default LeftContainer;
