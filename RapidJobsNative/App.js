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

export function SignUpFlow(){
  return(
    <>
        <Text>SIGN UP ACTIVATED</Text>  
    </>
  );
}

export default class App extends Component {
  state = {
    showSignUp: false,
    showSignIn: false,
  }

  render(){
    return (
      <>
      <View style={styles.container}>
        <Text style={styles.header}>RapidJobs</Text>
        <Text style={styles.subheader}>Let's Get It Done.</Text>
      </View>
  
      
  
      <View style={styles.subcontainer}>
        <Pressable style={styles.button} onPress={() => {
          this.setState({showSignUp: true}, () => {
            <SignUpFlow></SignUpFlow>
          });
        }}>
          <Text style={styles.smallBtnText}>Sign Up</Text>
        </Pressable>
  
        <Pressable style={styles.button} onPress={() => {
          setShowSignIn(true);
        }}>
          <Text style={styles.smallBtnText}>Sign In</Text>
        </Pressable>
      </View>
      </>
    );
  }
 
}
