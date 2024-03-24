import { View, Text,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveScreenWidth,responsiveScreenHeight } from 'react-native-responsive-dimensions';

const TopBar = () => {
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <View style={{flexDirection:"row",width:responsiveScreenWidth(90),justifyContent:"space-between",alignItems:"center"}}>
            <View  style={{width:responsiveScreenWidth(8),height:responsiveScreenHeight(6)}}>
                <Image source={require('../../../src/assets/images/neveragainLogo.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
            </View>
            <View style={{flexDirection:"row",width:responsiveScreenWidth(30),justifyContent:"space-around"}}>
                <TouchableOpacity style={{width:responsiveScreenWidth(6),height:responsiveScreenHeight(4)}}>
                <Image source={require('../../../src/assets/images/search.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
                </TouchableOpacity>
          <TouchableOpacity style={{width:responsiveScreenWidth(6),height:responsiveScreenHeight(4)}}> 
            <Image source={require('../../../src/assets/images/setting.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width:responsiveScreenWidth(6),height:responsiveScreenHeight(4)}}>
            <Image source={require('../../../src/assets/images/scanner.png')} style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default TopBar;