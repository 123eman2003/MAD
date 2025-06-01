import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import FastImage from 'expo-fast-image';

const UserList = React.memo(({ users }) => (
  <FlatList
    data={users}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={styles.userContainer}>
        <FastImage
          style={styles.avatar}
          source={{ uri: item.avatar }}
          resizeMode="cover"
        />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    )}
  />
));

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default UserList;
