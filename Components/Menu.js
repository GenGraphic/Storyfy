import { StyleSheet, Text, View, TouchableOpacity, Platform, TextInput, KeyboardAvoidingView, Image, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { database } from '../Firebase';
import { ref, set } from 'firebase/database';

const Menu = ({libraryColor, shopColor, createScreenColor, generateScreenColor}) => {
    const navigation = useNavigation();
    const [toggleSignInForm, settoggleSignInForm] = useState(false)
    const [menuHeight, setMenuHeight] = useState(200);
    const [signInUp, setSignInUp] = useState('signIn');
    const [textBtn, setTextBtn] = useState('Sign in')
    const [userSignedIn, setUserSingdeIn] = useState(false) 

    //user infor
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    
    //create new user in dataBase and asign empty lsit of library
    const createUserLibrary = (userId) => {
        set(ref(database, userId), {
            library: ['Your list is Empty'] 
        })
    }

    //this shows the sign in form
    const EnableSignInForm = () => {
        if(userSignedIn){
            navigation.navigate('UserProfile');
        }else {
            settoggleSignInForm(true)
            setMenuHeight(0);
        }  
    }

    //this hide the sign in form
    const DisableSignInForm = () => {
        settoggleSignInForm(false),
        setMenuHeight(200);
    }

    //create new user and then give update also the user name if user created succesfully
    const createNewUser = () => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then(() => {
                Alert.alert('Thank you for joining us.') //propmt user with alert
                setEmail('') //empty email field
                setPass('') //empta password field
                DisableSignInForm(); //hide login Field
                
                //update user name
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setTextBtn(auth.currentUser.displayName) //if succes, add name to the button
                }).catch((error) => alert(error))

                //create user Library in database
                createUserLibrary(auth.currentUser.uid)
            })
            .catch((error) => alert(error));
    }

    //sign in user
    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, pass)
            .then (() => {
                Alert.alert('You are now logged in.')
                DisableSignInForm();
                setTextBtn(auth.currentUser.displayName)
            })
            .catch((error) => alert(error))
    }

    //if user is signed in, put the name on the button
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
                if(user) {
                    setUserSingdeIn(true);
                    setTextBtn(auth.currentUser.displayName)
                }
            })
    },[])
    
    
    

  return (
    //because BlurView is not avalible on Andoid i had to build two separat menus
    <View style={styles.body}>
        {Platform.OS === 'ios' &&
            <BlurView
            style={styles.menuIOS}
            intensity={50}
            >
                <Text style={styles.title}>Menu</Text>

                <View style={{width:'100%' , height: menuHeight}}>  
                    <TouchableOpacity style={styles.menuOption} onPress={() => navigation.navigate('UserLibrary')}>
                        <Text style={[styles.menuTxt, {color: libraryColor}]}>Your Library</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuOption} onPress={() => navigation.navigate('Shop')}>
                        <Text style={[styles.menuTxt, {color: shopColor}]}>Buy story</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuOption}>
                        <Text style={[styles.menuTxt, {color: createScreenColor}]}>Create story</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuOption}>
                        <Text style={[styles.menuTxt, {color: generateScreenColor}]}>Generate story</Text>
                    </TouchableOpacity>
                </View>

                {toggleSignInForm &&
                    <KeyboardAvoidingView 
                        behavior='padding'
                        keyboardVerticalOffset={50}
                        style={styles.signInForm}>

                        <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={DisableSignInForm}>
                            <Image
                            style={styles.icon}
                            source={require('../assets/images/icons/cancel.png')}
                            />
                        </TouchableOpacity>

                        <View
                        style={{width: '100%'}}>

                            {signInUp === 'signIn' ?
                                <View>
                                    <Text style={styles.formTitle}>Sign In</Text>

                                    <TextInput
                                        onChangeText={(text) => setEmail(text)}
                                        style= {styles.input}
                                        placeholder='E-mail'
                                    />
                                    <TextInput
                                        onChangeText={(text) => setPass(text)}
                                        style= {styles.input}
                                        placeholder='Password'
                                        secureTextEntry={true}
                                    />

                                    <Text style={styles.subtitle}>Don't have an account?
                                        <Text style={{textDecorationLine: 'underline'}} onPress={() => setSignInUp('signUp')}> Sign up</Text>
                                    </Text>

                                    <TouchableOpacity style={styles.signinBtn} onPress={signInUser}>
                                        <Text style={styles.signinText}>{textBtn}</Text>
                                    </TouchableOpacity>
                                </View>
                            :
                                <View>
                                    <Text style={styles.formTitle}>Sign Up</Text>

                                    <TextInput
                                    placeholder='Name'
                                    style= {styles.input}
                                    onChangeText={(text) => setName(text)}
                                    />
                                    <TextInput
                                        onChangeText={(text) => setEmail(text)}
                                        style= {styles.input}
                                        placeholder='E-mail'
                                        secureTextEntry={false}
                                    />
                                    <TextInput
                                        onChangeText={(text) => setPass(text)}
                                        style= {styles.input}
                                        placeholder='Password'
                                        secureTextEntry={true}
                                    />

                                    <Text style={styles.subtitle}>You have an account?
                                        <Text style={{textDecorationLine: 'underline'}} onPress={() => setSignInUp('signIn')}> Sign in</Text>
                                    </Text>

                                    <TouchableOpacity style={styles.signinBtn} onPress={createNewUser}>
                                        <Text style={styles.signinText}>{textBtn}</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                    </KeyboardAvoidingView>
                }
                
                {!toggleSignInForm &&
                    <View>
                        <TouchableOpacity style={styles.signinBtn} onPress={EnableSignInForm}>
                            <Text style={styles.signinText}>{textBtn}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </BlurView>
        }
        {Platform.OS === 'android' &&
            <View style={styles.menuANDROID}>
                <Text style={styles.title}>Menu</Text>

                <View style={{width:'100%', height: menuHeight}}>  
                    <TouchableOpacity style={styles.menuOption} onPress={() => navigation.navigate('UserLibrary')}>
                        <Text style={[styles.menuTxt, {color: libraryColor}]}>Your Library</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuOption} onPress={() => navigation.navigate('Shop')}>
                        <Text style={[styles.menuTxt, {color: shopColor}]}>Buy story</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuOption}>
                        <Text style={[styles.menuTxt, {color: createScreenColor}]}>Create story</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuOption}>
                        <Text style={[styles.menuTxt, {color: generateScreenColor}]}>Generate story</Text>
                    </TouchableOpacity>
                </View>

                {toggleSignInForm &&
                    <KeyboardAvoidingView 
                        behavior='padding'
                        keyboardVerticalOffset={0}
                        style={styles.signInForm}>

                        <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={DisableSignInForm}>
                            <Image
                            style={styles.icon}
                            source={require('../assets/images/icons/cancel.png')}
                            />
                        </TouchableOpacity>

                        <View
                        style={{width: '100%'}}>

                            {signInUp === 'signIn' ?
                                <View>
                                    <Text style={styles.formTitle}>Sign In</Text>

                                    <TextInput
                                        onChangeText={(text) => setEmail(text)}
                                        style= {styles.input}
                                        placeholder='E-mail'
                                    />
                                    <TextInput
                                        onChangeText={(text) => setPass(text)}
                                        style= {styles.input}
                                        placeholder='Password'
                                        secureTextEntry={true}
                                    />

                                    <Text style={styles.subtitle}>Don't have an account?
                                        <Text style={{textDecorationLine: 'underline'}} onPress={() => setSignInUp('signUp')}> Sign up</Text>
                                    </Text>

                                    <TouchableOpacity style={styles.signinBtn} onPress={signInUser}>
                                        <Text style={styles.signinText}>{textBtn}</Text>
                                    </TouchableOpacity>
                                </View>
                            :
                                <View>
                                    <Text style={styles.formTitle}>Sign Up</Text>

                                    <TextInput
                                    placeholder='Name'
                                    style= {styles.input}
                                    onChangeText={(text) => setName(text)}
                                    />

                                    <TextInput
                                        onChangeText={(text) => setEmail(text)}
                                        style= {styles.input}
                                        placeholder='E-mail'
                                    />
                                    <TextInput
                                        onChangeText={(text) => setPass(text)}
                                        style= {styles.input}
                                        placeholder='Password'
                                        secureTextEntry={true}
                                    />

                                    <Text style={styles.subtitle}>You have an account?
                                        <Text style={{textDecorationLine: 'underline'}} onPress={() => setSignInUp('signIn')}> Sign in</Text>
                                    </Text>

                                    <TouchableOpacity style={styles.signinBtn} onPress={createNewUser}>
                                        <Text style={styles.signinText}>{textBtn}</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                    </KeyboardAvoidingView>
                }

                {!toggleSignInForm &&
                    <View>
                        <TouchableOpacity style={styles.signinBtn} onPress={EnableSignInForm}>
                            <Text style={styles.signinText}>{textBtn}</Text>
                        </TouchableOpacity>
                    </View>
                }
                
            </View>
        }
    </View>
    
  )
}

export default Menu

const styles = StyleSheet.create({
    icon : {
        width: 25,
        height: 25,
    },


    body: {
        height: '100%',
        width: '30%',
        shadowColor: 'black',
        shadowOffset: {width: 5, height:0},
        shadowOpacity: 0.2,
    },
    menuIOS: {
        padding: 20,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuANDROID: {
        padding: 20,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    title: {
        color: '#FFF',
        fontSize: 30,
        fontFamily: 'Hooltwood',
    },
    menuTxt: {
        fontSize: 25,
        fontFamily: 'HennyPenny',
    },
    menuOption: {
        borderBottomColor: '#FFF',
        borderBottomWidth: 1,
        marginBottom: 10,
    }, 
    signinBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#1FA4A0', //blue
        borderRadius: 20,
        height: 35,
        width: 200,
        marginTop: 20
    },
    signinText: {
        color: '#FFF',
        fontFamily: 'Hooltwood',
        fontSize: 20
    },
    signInForm: {
        width: '90%',
        alignItems: 'center'
    },
    formTitle: {
        color: '#FFF',
        fontFamily: 'Hooltwood',
        fontSize: 30,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.2
    },
    subtitle: {
        color: '#FFF',
        textAlign: 'center'
    },
})