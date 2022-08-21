import { Alert, Button, View } from 'react-native';
import * as ImagePickerExpo from 'expo-image-picker';

function ImageChoser(){

  // let permissionResult = await ImagePickerExpo.requestCameraPermissionsAsync();

  // if (permissionResult.granted === false) {
  //     Alert.alert("For this to work app needs camera roll permissions...");
  //     return;
  // }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await ImagePickerExpo.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  }



    return (
        <View>
          <View></View>
          <Button title="Take Image" onPress={takeImageHandler} />
        </View>
    );
}
  export default ImageChoser;