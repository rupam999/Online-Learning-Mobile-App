import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { AdminBottomTab } from './AdminBottomTab';
import { AddNewSubject, AddNewUser, AdminNotification } from '../Screens/Admin';
const AdminStack = createStackNavigator();

const AdminMainNavigator = () => {
    return(
        <AdminStack.Navigator
            initialRouteName={'AdminBottomTab'}
            screenOptions={{headerShown: false}}
            >
            <AdminStack.Screen name="AdminBottomTab" component={AdminBottomTab} />
            <AdminStack.Screen name="AdminAddNewUser" component={AddNewUser} />
            <AdminStack.Screen name="AdminAddNewSubject" component={AddNewSubject} />
            <AdminStack.Screen name="AdminNotification" component={AdminNotification} />
        </AdminStack.Navigator>
    );
}

export default AdminMainNavigator;