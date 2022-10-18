import React from "react";
import { FontAwesome5, AntDesign, MaterialIcons } from "@expo/vector-icons";
import * as S from "./styled";
import colors from "../../config/style/colors";

const ICON_SIZE = 20;
const ICON_RIGHT_SIZE = 12;
type Props = { schedule: ISchedule; action: (shedule: ISchedule) => void };
export function ScheduleCard({ schedule, action }: Props) {
  return (
    <S.Container onPress={() => action(schedule)} activeOpacity={0.7}>
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
