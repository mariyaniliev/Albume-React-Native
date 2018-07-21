import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
  state = { albums: [] };


 componentWillMount() {
   //https://rallycoding.herokuapp.com/api/music_albums
   fetch('https://api.myjson.com/bins/1cws22')
   .then((response) => response.json())
   .then((responseData) => {
     this.setState({ albums: responseData });
   });
 }
 
 renderAlbums() {
  return this.state.albums.map(album => 
    <AlbumDetail key={album.title} album={album} />
  );
 }

  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
