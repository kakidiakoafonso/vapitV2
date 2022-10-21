import React from "react";
import * as S from "./styled";
import { FontAwesome5, AntDesign, MaterialIcons } from "@expo/vector-icons";

import colors from "../../config/style/colors";

const ICON_SIZE = 20;
const ICON_RIGHT_SIZE = 12;

type Props = {
  modalStatus: boolean;
  schedule: ISchedule;
  closeModal: () => void;
};
export function ScheduleDetail({ modalStatus, closeModal, schedule }: Props) {
  function formateHour(time: String): String {
    return time.slice(0, 10);
  }

  return (
    <S.Container transparent animationType="slide" visible={modalStatus}>
      <S.DarkContainer activeOpacity={1} onPress={closeModal}>
        <S.Center>
          <S.ContentContainer>
            <S.Title>Detalhes</S.Title>
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
            <S.Wrapper>
              <S.IconPath>
                <FontAwesome5
                  name="wheelchair"
                  size={ICON_SIZE}
                  color={colors.background.green}
                />
              </S.IconPath>
              <S.Group>
                <S.Label>Adaptado</S.Label>
                <S.IconRight>
                  <AntDesign
                    name="caretright"
                    size={ICON_RIGHT_SIZE}
                    color={colors.background.grey70}
                  />
                </S.IconRight>
                <S.TextValue>{schedule.adapted ? "SIM" : "NAO"}</S.TextValue>
              </S.Group>
            </S.Wrapper>
            <S.Wrapper>
              <S.IconPath>
                <MaterialIcons
                  name="corporate-fare"
                  size={ICON_SIZE}
                  color={colors.background.green}
                />
              </S.IconPath>
              <S.Group>
                <S.Label>Empresa</S.Label>
                <S.IconRight>
                  <AntDesign
                    name="caretright"
                    size={ICON_RIGHT_SIZE}
                    color={colors.background.grey70}
                  />
                </S.IconRight>
                <S.TextValue>{schedule.company}</S.TextValue>
              </S.Group>
            </S.Wrapper>
            <S.Wrapper>
              <S.IconPath>
                <MaterialIcons
                  name="payment"
                  size={ICON_SIZE}
                  color={colors.background.green}
                />
              </S.IconPath>
              <S.GroupColumn>
                <S.Label>Método de pagamento</S.Label>
                <S.TextValue>{schedule.payment_method}</S.TextValue>
              </S.GroupColumn>
            </S.Wrapper>
            <S.Wrapper>
              <S.IconPath>
                <AntDesign
                  name="clockcircleo"
                  size={ICON_SIZE}
                  color={colors.background.green}
                />
              </S.IconPath>
              <S.GroupColumn>
                <S.Label>Data da atualização</S.Label>
                <S.TextValue>{formateHour(schedule.updated_at)}</S.TextValue>
                {/* <S.TextValue>{schedule.updated_at.slice(0, 10)}</S.TextValue> */}
              </S.GroupColumn>
            </S.Wrapper>
          </S.ContentContainer>
        </S.Center>
      </S.DarkContainer>
    </S.Container>
  );
}
