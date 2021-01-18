import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Lista extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data
    }
    this.showLikes = this.showLikes.bind(this);
    this.like = this.like.bind(this);
    this.verifyLiked = this.verifyLiked.bind(this);
  }

  verifyLiked(likeada) {
    return likeada ? require('../../assets/likeada.png') :
      require('../../assets/like.png');
  }

  like() {
    let { feed } = this.state;
    if (feed.likeada) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1
        }
      });
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1
        }
      });
    }
  }

  showLikes(likes) {
    if (likes <= 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {likes} {likes > 1 ? 'Curtidas' : 'Curtida'}
      </Text>
    )

  }

  render() {
    return (
      <View style={styles.feedArea}>
        <View style={styles.profileVew}>
          <Image
            source={{ uri: this.state.feed.imgperfil }}
            style={styles.profilePicture}
          />
          <Text style={styles.username}>{this.state.feed.nome}</Text>
        </View>

        <Image
          style={styles.fotoFeed}
          resizeMode="cover"
          source={{ uri: this.state.feed.imgPublicacao }}
        />

        <View style={styles.areaIcones}>
          <TouchableOpacity
            onPress={this.like}
          >
            <Image
              source={this.verifyLiked(this.state.feed.likeada)}
              style={styles.iconeLike}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={require('../../assets/send.png')}
              style={styles.iconeLike}
            />
          </TouchableOpacity>
        </View>

        {this.showLikes(this.state.feed.likers)}

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>
          <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedArea: {

  },
  username: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000'
  },
  profileVew: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  fotoFeed: {
    flex: 1,
    height: 400,
    alignItems: 'center',

  },
  areaIcones: {
    flexDirection: 'row',
    padding: 5
  },
  iconeLike: {
    width: 33,
    height: 33
  },
  btnSend: {
    paddingLeft: 5
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nomeRodape: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    paddingLeft: 5
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  likes: {
    fontWeight: 'bold',
    paddingLeft: 5
  }
});