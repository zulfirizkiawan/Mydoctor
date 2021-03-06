import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor1, IconStart} from '../../../assets';
import {colors} from '../../../utils';

const RatedDoctor = () => {
  return (
    <View style={styles.page}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.nama}>Aliayan Dewi</Text>
        <Text style={styles.kategori}>Pediantrist</Text>
      </View>
      <View style={styles.start}>
        <IconStart />
        <IconStart />
        <IconStart />
        <IconStart />
        <IconStart />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  start: {
    flexDirection: 'row',
  },
  nama: {
    color: colors.text.primary,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  kategori: {
    fontFamily: 'Poppins-Medium',
    color: colors.text.secondary,
    fontSize: 14,
  },
  profile: {
    flex: 1,
  },
});
