import React, {useState, useContext} from 'react';
import {Text, View, Button, ActivityIndicator, Alert} from 'react-native';

import { useAuth } from "../../providers/auth";

export default function Home(props) {
    const {navigate} = props.navigation;

    const {state, handleLogout} = useAuth();
    const user = state.user;

    return (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            <Text>{`Welcome ${user.name} `}</Text>

            

            <Button title={"Log Out"} onPress={() => {
                handleLogout();
                navigate('Auth');
            }}/>
        </View>
    );
}