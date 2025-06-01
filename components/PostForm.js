import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const PostForm = React.memo(({ onSubmit, post }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        multiline
      />
      <Button title="Submit" onPress={() => onSubmit({ title, body })} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 6,
  },
  textArea: {
    height: 80,
  },
});

export default PostForm;
