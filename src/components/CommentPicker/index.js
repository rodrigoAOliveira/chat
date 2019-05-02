import React from "react"
import {View,TextInput,StyleSheet, Image} from "react-native"
import PropTypes from "prop-types"
import Button from "./Button"
export default class CommentPicker extends React.Component{
  
    static get propTypes(){
        return {
            value:PropTypes.string.isRequired,
            onChangeText:PropTypes.func.isRequired,
            onSubmit:PropTypes.func.isRequired
        }
    }
    
   
    
    render(){
        const {value, onChangeText,onSubmit} = this.props;
        return (
          <View style={styles.row}>
              <Image
              source={require("../../../assets/avatar.png")}
              style={styles.avatar}
              />

              <TextInput
                style ={styles.input}
                multiline
                selectionColor="#9b59b6"
                value={value}
                onChangeText={onChangeText}
                placeholder="Escreva sua mensagem"
              />

              <Button
              onSubmit={onSubmit}/>
          </View>
        )
    }
}
const avatarSize = 40
const styles = StyleSheet.create({
    row:{
      flexDirection: "row",
      alignItems: "center",  
      padding:5,
      borderTopWidth:1,
      borderTopColor: "#eee"
    },
    avatar:{
        flex:0,
        height:avatarSize,
        width:avatarSize,
        borderRadius:avatarSize/2,
        borderWidth:1,
        borderColor:"#eee"
    },
    input:{
       flex:1,
       color:"#535559" ,
       padding:10
    }
})