import styled from "styled-components/native";
import colors from "../../config/style/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.background.green};
  align-items: center;
  justify-content: center;
`;
export const Hero = styled.View`
align-items: center;
justify-content: center;
width: 90%;
`;
export const Logo = styled.View``;
export const Name = styled.Text`
color: ${colors.background.green};
font-weight: bold;
font-size: 42px;
`;
export const Slogan = styled.Text`
color: ${colors.background.grey};
font-weight: bold;
font-size: 18px;
text-align: center;
margin: 4px 0;
`;


export const Main = styled.View`
width: 90%;
align-items: center;
justify-content: center;
`;
export const DescritionText = styled.Text`
text-align: center;
color: #000;
margin-bottom: 10px;
align-items: center;
`;
export const Privacy = styled.View`
text-align: center;
align-items: center;
margin: 20px;
`;
export const PolicyText = styled.Text`
text-align: center;
color: #000;
align-items: center;
`;
export const DescritionTextWrapper = styled.View`
align-items: center;
flex-direction: row;
justify-content: center;
`;
export const LinkButton = styled.TouchableOpacity`
margin: 4px;
`;
export const LinkButtonText = styled.Text`
color: ${colors.background.green};
/* text-decoration: underline; */
`;
export const Button = styled.TouchableOpacity`
background-color: ${colors.background.green80};
width: 300px;
height: 50px;
align-items: center;
justify-content: center;
border-radius: 30px;
margin-top: 12px ;
`;
export const ButtonTex = styled.Text`
text-align: center;
color: ${colors.background.white};
font-weight: bold;
`;
