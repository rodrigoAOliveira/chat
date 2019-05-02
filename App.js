import React from 'react';
import { StyleSheet, Text, View, FlatList, KeyboardAvoidingView, Keyboard } from 'react-native';
import CommentPicker from "./src/components/CommentPicker"


export default class App extends React.Component {
  state = {
    mensagens: [
      { key: "mensagem1", value: "teste" },
      { key: "mensagem2", value: "teste2" },
    ],
    mensagem: ""
  }
  _onChangeText = (mensagem) => {
    this.setState({ mensagem })
  }
  _onSubmit = () => {
    const { mensagens, mensagem } = this.state
    console.log(this.state.mensagem)
    this.setState({
      mensagem: "",
      mensagens: [...mensagens, { key: mensagens.length + 1, value: mensagem }]

    })
    Keyboard.dismiss();

  }
  _renderItem = ({ item, index }) => <Text>{item.value}</Text>

  render() {
    const { mensagens, mensagem } = this.state
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, paddingTop: 40 }}>
          <FlatList
            style={styles.messagesBox}
            data={mensagens}
            keyExtractor={i => String(i.key)}
            renderItem={this._renderItem}
          />

          <CommentPicker
            onChangeText={this._onChangeText}
            value={mensagem}
            onSubmit={this._onSubmit}
          />

        </View>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  messagesBox: {
    flex: 1,

  },
  inputBox: {
    height: 40,

  }
});
