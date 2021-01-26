import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { AdminBottomTab } from './AdminBottomTab';
import { AddNewUser } from '../Screens/Admin/AddNewUser';
const AdminStack = createStackNavigator();

const AdminMainNavigator = () => {
    return(
        <AdminStack.Navigator
            initialRouteName={'AdminBottomTab'}
            screenOptions={{headerShown: false}}
            >
            <AdminStack.Screen name="AdminBottomTab" component={AdminBottomTab} />
            <AdminStack.Screen name="AdminAddNewUser" component={AddNewUser} />
        </AdminStack.Navigator>
    );
}

export default AdminMainNavigator;