
# React Native DH Demo Project

## Folder structure

- `assets`: Asset folder to store all images, icons.
- `mock`: Contains mock JSON data and a script that generates it.
- `src`: This folder is the main container of all the code inside your application.
  - `api`: Folder that contains mock api requests.
  - `components`: Folder to store any common component that used through app.
  - `query`: Folder that contains redux-query client.
  - `screens`: Folder that contains all application screens.
  - `store`: This folder contains all stores and reducers that needed by redux-toolkit.
  - `types`: Folder to store all types.
  - `utils`: Helper functions.
  - `App.tsx`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## Usage
Make sure dev environment has been set up accordingly https://reactnative.dev/docs/environment-setup/

Run `npm i`, `npx pod-install ios` and `npx react-native run-ios` inside the root folder.

# ⚠️ Notes
- The project is only tested for iOS. It might or might not need modifications for Android.

