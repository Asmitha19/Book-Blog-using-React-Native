import React, { Component } from 'react';
import { Text, View, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    /*static navigationOptions = {
        title: ''
    }*/

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['asmithabookshelf@blog.net'],
            subject: 'Enquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return(
            <View>
                <Card>
                    <Card.Title>Contact Information</Card.Title>
                    <Card.Divider/>
                    <Button
                        title="Send Email"
                        buttonStyle={{backgroundColor: "#23AD68"}}
                        icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                        onPress={this.sendMail}
                        style={{marginBottom : 10}}
                    />
                    <Button
                        title="Connect via Linkedin"
                        buttonStyle={{backgroundColor: "#3F7FBF"}}
                        icon={<Icon name='linkedin-square' type='font-awesome' color='white' />}
                        onPress={() => Linking.openURL('https://www.linkedin.com/in/asmitha-balaji-b26798188/')}
                        style={{marginBottom : 10}}
                    />
                    <Button
                        title="Follow in github"
                        buttonStyle={{backgroundColor: "#DADA85"}}
                        icon={<Icon name='github-square' type='font-awesome' color='white' />}
                        onPress={() => Linking.openURL('https://github.com/Asmitha19')}
                        style={{marginBottom : 10}}
                    />
                </Card>
            </View>
        );
    }
}

export default Contact;
