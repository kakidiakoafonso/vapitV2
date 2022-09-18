import React from "react";
import { FontAwesome5, AntDesign, MaterialIcons } from "@expo/vector-icons";
import * as S from "./styled";
import colors from "../../config/style/colors";

const ICON_SIZE = 20;
const ICON_RIGHT_SIZE = 12;
const path =
  "https://c8.alamy.com/zooms/9/19de79a86a874d34b0c23a6e9eb7d202/2a804wp.jpg";
type Props = { schedule: ISchedule };
export function ScheduleCard({ schedule }: Props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.IconPath>
          <FontAwesome5
            name="route"
            size={ICON_SIZE}
            color={colors.background.green}
          />
        </S.IconPath>
        <S.Group>
          <S.Label>Via</S.Label>
          <S.IconRight>
            <AntDesign
              name="caretright"
              size={ICON_RIGHT_SIZE}
              color={colors.background.grey70}
            />
          </S.IconRight>
          <S.TextValue>{schedule.way}</S.TextValue>
        </S.Group>
      </S.Wrapper>
      <S.Wrapper>
        <S.IconPath>
          <AntDesign
            name="clockcircleo"
            size={ICON_SIZE}
            color={colors.background.green}
          />
        </S.IconPath>
        <S.Group>
          <S.Label>Horario</S.Label>
          <S.IconRight>
            <AntDesign
              name="caretright"
              size={ICON_RIGHT_SIZE}
              color={colors.background.grey70}
            />
          </S.IconRight>
          <S.TextValue>{schedule.time}</S.TextValue>
        </S.Group>
      </S.Wrapper>
      <S.Wrapper>
        <S.IconPath>
          <MaterialIcons
            name="date-range"
            size={ICON_SIZE}
            color={colors.background.green}
          />
        </S.IconPath>
        <S.Group>
          <S.Label>Dia</S.Label>
          <S.IconRight>
            <AntDesign
              name="caretright"
              size={ICON_RIGHT_SIZE}
              color={colors.background.grey70}
            />
          </S.IconRight>
          <S.TextValue>{schedule.day}</S.TextValue>
        </S.Group>
      </S.Wrapper>
    </S.Container>
  );
}
