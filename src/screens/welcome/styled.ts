import { Dimensions } from "react-native";
import styled from "styled-components/native";
import colors from "../../config/style/colors";

const {width} = Dimensions.get("window")
const contWidth = width * 0.9


export const Container = styled.SafeAreaView`
flex:1;
background-color:${colors.background.white};
align-items: center;
justify-content: center;
`

export const CenterContainer = styled.View`
width: ${contWidth+"px"};
/* height: ${contWidth+"px"}; */
`

export const IndicatorContainer = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 8%;
`
export const IndicatorOn = styled.View`
background-color:${colors.background.green};
width: 40px;
height:12px;
border-radius: 24px;
margin-left: 2px;
margin-right: 2px;
`

export const IndicatorOff = styled.View`
background-color:${colors.background.grey};
width: 12px;
height:12px;
border-radius: 24px;
margin-left: 2px;
margin-right: 2px;
`

export const Box = styled.View`
width: ${contWidth+"px"};
/* height: ${contWidth+"px"}; */
align-items: center;
justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
background-color:${colors.background.green};
border-radius: 25px;
width: 270px;
height: 55px;
align-items: center;
flex-direction: row;
justify-content: center;
margin-top: 8%;
`

export const TextButton = styled.Text`
color: ${colors.background.white};
font-size: 18px;
font-weight: bold;
margin-right: 15px;
`

export const TextWelcome = styled.Text`
color:${colors.background.green};
font-size: 18px;
font-weight: bold;
margin-bottom: 5%;
`


export const SVGContainer = styled.View`
width: ${contWidth + "px"};
/* height: 50%; */
height: ${(contWidth-(contWidth*0.2)) + "px"};
/* background-color: #c2c2c2; */
margin-bottom:6%;
`

export const Image = styled.Image`
width: 100%;
height: 100%;
`
export const IntroContainer = styled.View`
align-items: center;
margin-bottom: 20px;
`
export const TextIntro = styled.Text`
color:#000;
font-size: 16px;
`
export const TextIntroBold = styled.Text`
color:${colors.text.dark};
font-size: 16px;
font-weight: bold;
`

export const TextMessage = styled.Text`
color:${colors.text.dark};
font-size: 12px;
`