import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Alert } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';

class Feedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            feedback: ''
        }
    }


    handleRegister() {
      this.setState({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
        feedback: ''
      });
      Alert.alert('Thanks for your feedback!');
    }

    render() {
        return(
            <ScrollView>
            <View style={styles.container}>
                <Input
                    placeholder="Username"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder="First Name"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(firstname) => this.setState({firstname})}
                    value={this.state.firstname}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder="Last Name"
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(lastname) => this.setState({lastname})}
                    value={this.state.lastname}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    containerStyle={styles.formInput}
                    />
                <Input
                    placeholder="Feedback"
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={(feedback) => this.setState({feedback})}
                    value={this.state.feedback}
                    containerStyle={styles.formInput}
                    />
                <View style={styles.formButton}>
                    <Button
                        onPress={() => this.handleRegister()}
                        title="Submit"
                        buttonStyle={{
                            backgroundColor: "#D95D5D"
                        }}
                        />
                </View>
            </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20
    },
    button: {
        marginLeft: 40
    },
    formInput: {
        margin: 5
    },
    formButton: {
        margin: 60
    }
});

export default Feedback;
