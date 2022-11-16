import React, { useState, Dispatch, SetStateAction, useRef } from "react";
import { FontAwesome, EvilIcons, AntDesign } from "@expo/vector-icons";
import * as Styled from "./styled";
import colors from "../../config/style/colors";
import { useNavigation } from "@react-navigation/native";
import ArrowBack from "../../assets/icons/right-arrow.svg";
import { Platform, TextInput } from "react-native";

type Props = {
  callback: (text: string) => void;
};
export function Search({ callback }: Props) {
  const [text, settext] = useState<string>("");
  const navigation = useNavigation();
  const isAndroid : boolean = Platform.OS === "android"
  const handleBack = () => navigation.goBack();

  const inputRef = useRef<TextInput>()
  React.useEffect(()=>{
    inputRef.current?.focus()
  })
  return (
    <Styled.TopContainer style={{marginTop:isAndroid?10:0}}>
      <Styled.IconBack onPress={() => handleBack()}>
        <ArrowBack width={40} height={40} />
      </Styled.IconBack>

      <Styled.InputContainer>
        <Styled.Input
          ref={inputRef}
          value={text}
          onChangeText={(e) => {
            settext(e);
            callback(e);
          }}
          placeholder="Pesquisar linha"
        />
        <Styled.SearchIcon activeOpacity={0.7} onPress={() => settext("")}>
          <AntDesign
            name="closecircle"
            size={25}
            color={colors.background.grey70}
          />
        </Styled.SearchIcon>
      </Styled.InputContainer>
    </Styled.TopContainer>
  );
}
