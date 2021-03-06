import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {Gap, Buttons} from '../../atoms';
import Profile from './Profile';

const Header = ({onPress, title, type}) => {
  if (type === 'profile') {
    return <Profile />;
  }
  return (
    <View style={styles.container}>
      <Buttons type="icon-only" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 1,
    elevation: 10,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
  },
});
