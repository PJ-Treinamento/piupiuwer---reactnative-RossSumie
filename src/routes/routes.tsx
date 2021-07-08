import React from 'react';
import {AppStack} from './AppStack';

import { AuthProvider, useAuth } from '../hooks/contexts/auth';
import { NavigationContainer } from '@react-navigation/native';

export const Routes = () => {
    const {token} = useAuth()

    return (
        <NavigationContainer>
            <AuthProvider>
                <AppStack/>
            </AuthProvider>
        </NavigationContainer>
    );
};

