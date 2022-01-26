# Movie Mania

**Project Name**: `RNMovie`

**Bundle Id**: `org.reactjs.native.example.RNMovie` **Package Name**: `com.rnmovie`

[![react-native](https://img.shields.io/badge/react--native-0.67.0-brightgreen)](https://facebook.github.io/react-native/docs/getting-started) [![code-style](https://img.shields.io/badge/code%20style-standard%20JS-brightgreen)](https://standardjs.com/)

---

##  Project Desctiption
A react-native project for searching the movie and TV show and mark them as your favourite.

## Prerequisites

**iOS** : XCode(113.2) onwards

**Android** : Android Studio(3.5.2) with gradle(7.1.2) onwards

**Editor** : Visual Studio Code

## How to Setup Project

**Step 1:** Clone this repository.

**Step 2:** Go to the cloned repo and open in in termianl.

**Step 3:** Install the Application with `npm i`

**Step 4:** cd to ios directory. And install pods with `pod install`

**Step 5:** Run Jetify for Third Party library convert in AndroidX `npx jetify`(This needs to be done only for first time after checking out the repo. And for all projects having react-native 0.60 onwards)

**Step 6:** Create .env file and put the following api urls into it
  1. `API_URL=https://api.themoviedb.org/3`
  2. `API_KEY=d9ca42f944024f53ccd5081fdfdbd2e1`
  3. `IMAGE_URL=http://image.tmdb.org/t/p/w500/`

## How to Run the Project

1. cd to the project directory
2. Run and build for either OS
    * Run iOSm app
        ```bash 
        npm run ios
        ```
    * Run Android app
      ```bash 
      npm run android
      ```
    * Note: This npm scripts will lint your code first. If there are no lint errors, then it will run the ios or android app. Otherwise it will show the lint errors in the terminal.


## List of all dependencies used in the project with their usage

- **Framework:**
  - [React Native](https://github.com/facebook/react-native)

- **State management libraries:** 
  - [Redux](http://redux.js.org/), [React Redux](https://react-redux.js.org/), [Redux Persist](https://github.com/rt2zz/redux-persist), [Seamless-Immutable](https://github.com/rtfeldman/seamless-immutable)

- **API & Middleware libraries:**
  - [API Sauce](https://github.com/infinitered/apisauce), [Redux Sauce](https://github.com/jkeam/reduxsauce), [Redux Saga](https://redux-saga.js.org/)

- **Libraries used for navigation:**
  - [react-navigation](https://github.com/react-navigation/react-navigation), [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler), [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated), [react-navigation-redux-helpers](https://github.com/react-navigation/redux-helpers), [react-navigation-stack](https://github.com/react-navigation/stack), [react-navigation-tabs](https://github.com/react-navigation/tabs)

- **Libraries used for UI:**
  - [native-base](https://nativebase.io/), [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons),

- **Libraries used for storage:** 
  - [async-storage](https://github.com/react-native-community/async-storage)

- **Libraries used for general configuration:** 
  - [react-native-config](https://github.com/luggit/react-native-config)

## Troubleshoot Notes

for [**react-native-config**](https://github.com/luggit/react-native-config) 

**If you're coming from React version 0.60 and above, you should be referencing the package from GitHub instead of NPM because there are issues with the NPM package**

 **Known Issues**
 
 1. [**GeneratedInfoPlistDotEnv.h` file not found and iOS command not working**](https://github.com/luggit/react-native-config/issues/216)
 2. [**'GeneratedDotEnv.m' file not found**](https://github.com/luggit/react-native-config/issues/187)

  **If you have taken refrence from the GitHub then you don't have to add any other post-install scripts, just run the app like usual and it should work fine. Make sure you undo any other fixes before doing this.**
