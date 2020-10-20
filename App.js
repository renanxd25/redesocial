import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { View,Text, StyleSheet } from 'react-native';
import Comments from './src/components/coments.js';
import Header from './src/components/header.js';
import Post from './src/components/post.js';



export default class App extends Component {
  render(){
      const comments =[{
        nickname: 'Joana Elena Silva',
        comment: 'Excelente Foto!'
      }, {
        nickname: 'Rafael Gustavo Pereira',
        comment: 'Muito ruim! Faço Melhor....'
      }]
    return (
      <View style={{flex:1}}>
        <Header/>
        <Post image={require('./assets/imgs/fence.jpg')}
            comments={comments}
        />
  
      </View>
    )
  }
  
}

