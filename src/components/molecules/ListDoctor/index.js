import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor2} from '../../../assets';
import {colors} from '../../../utils';

const ListDoctor = ({FotoProfile, nama, desc}) => {
  return (
    <View style={styles.page}>
      <Image source={FotoProfile} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.namaD}>{nama}</Text>
        <Text style={styles.kategoriD}>{desc}</Text>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 14,
    paddingTop: 14,
  },
  profile: {
    flex: 1,
  },
  namaD: {
    color: colors.text.primary,
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  kategoriD: {
    fontFamily: 'Poppins-Medium',
    color: colors.text.secondary,
    fontSize: 12,
  },
});
