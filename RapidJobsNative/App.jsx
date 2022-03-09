import { Component } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 250,
  },
  header: {
    fontSize: 60,
  },
  subheader: {
    fontSize: 20,
    marginTop: 10
  },
  button: {
    margin: 5,
    borderRadius: 8,
    backgroundColor: 'black',
    color: 'white',
    padding: 15,
  },
  smallBtnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
    minWidth: 70,
    textAlign: 'center',
  },
});

export class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.state = {
      showLogin: false,
      showSignup: false,
    }
  }

  handleLoginClick() {
    this.setState({ showLogin: true });
  }

  handleSignupClick() {
    this.setState({ showSignup: true });
  }

  render() {
    let message;
    if (this.state.showLogin) {
      return(
        <View style={styles.container}>
          <Text>Welcome</Text>  
        </View>
      );
    } else if (this.state.showSignup) {
      return(
        <View style={styles.container}>
          <Text>Welcome</Text>  
        </View>
      );
    }else{
      return (
        <View style={styles.subcontainer}>
          <Pressable style={styles.button} onPress={() => {
            this.handleSignupClick();
          }}>
            <Text style={styles.smallBtnText}>Sign Up</Text>
          </Pressable>
  
          <Pressable style={styles.button} onPress={() => {
            this.handleLoginClick();
          }}>
            <Text style={styles.smallBtnText}>Sign In</Text>
          </Pressable>
        </View>
      );
    }

  }
}

export default class App extends Component {
  state = {
    showLogin: false,
    showSignup: false
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.header}>RapidJobs</Text>
          <Text style={styles.subheader}>Let's Get It Done.</Text>

          <LoginControl></LoginControl>
        </View>


      </>
    );
  }

}
