import React, { useState } from 'react';
import { Text, View } from 'react-native';
import ThemeSwitcher from '../ThemeSwitcher';
import styles from './styles';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ title, onPress }) => {
    const [state, setState] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <ThemeSwitcher />
        </View>
    );
};

export default Header;
