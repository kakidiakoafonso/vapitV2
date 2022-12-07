import React, { useState } from "react";
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import colors from "../../config/style/colors";
import * as Styled from "./styled";

import { Header } from "../../components/header";
import { ScheduleCard } from "../../components/schedule-card";
import { DayFilterModal } from "../../components/day-filter-modal";
import { FullBannner } from "../../components/full-banner";
import { FlatList } from "react-native";
import { getLocalTime } from "../../util";
import { WayFilterModal } from "../../components/way-filter-modal";
import { ScheduleDetail } from "../../components/schedule-detail";
import { EmptyAnimation } from "../../components/empty";
import { MobileSquare } from "../../components/mobile-square";

export function Schedule() {
  const { params } = useRoute();
  const { schedules , lineId }: { schedules: ISchedule[], lineId:Number } = params;
  const time = getLocalTime();
  const finalSchedule = schedules;
  // const finalSchedule = schedules.filter((item) => item.time > time);
  const [daymodalOpen, setdaymodalOpen] = useState<boolean>(false);
  const [waymodalOpen, setwaymodalOpen] = useState<boolean>(false);
  const [showScheduleDetail, setShowScheduleDetail] = useState<boolean>(false);
  const [day, setday] = useState<String>("");
  const [way, setway] = useState<String>("");
  const [newSchedules, setnewSchedules] = useState<ISchedule[]>(finalSchedule);
  const [selectedSchedules, setselected] = useState<ISchedule>({} as ISchedule);
  const uniqueWays = [...new Set(finalSchedule.map((item) => item.way))];

  function filter() {
    if (day != "") {
      const filteredSchedule = finalSchedule.filter((item) => item.day === day);
      setnewSchedules(filteredSchedule);
    }
    if (way != "") {
      const filteredSchedule = finalSchedule.filter((item) => item.way === way);
      setnewSchedules(filteredSchedule);
    }
    if (day != "" && way != "") {
      const filteredSchedule = finalSchedule.filter(
        (item) => item.way === way && item.day === day
      );
      setnewSchedules(filteredSchedule);
    }
    setdaymodalOpen(false);
    setwaymodalOpen(false);
  }

  function cleanFilter() {
    setday("");
    setway("");
    setnewSchedules(finalSchedule);
  }
  function handleSelectedSchedule(schedule: ISchedule) {
    setShowScheduleDetail(true);
    setselected(schedule);
  }
  React.useEffect(() => filter(), [day, way]);
  return (
    <Styled.Container>
      <Header title={"Horários"} />
      <Styled.FilterContainer>
        <Styled.FilterButtonsContainer>

        <Styled.FilterButtons>
          <Styled.Button onPress={() => setdaymodalOpen(true)}>
            <AntDesign
              name="calendar"
              size={24}
              color={colors.background.green}
            />
          </Styled.Button>
          <Styled.Button onPress={() => setwaymodalOpen(true)}>
            <FontAwesome name="bus" size={24} color={colors.background.green} />
          </Styled.Button>
        </Styled.FilterButtons>
        <Styled.FilterText>Filtros</Styled.FilterText>
        </Styled.FilterButtonsContainer>
        <Styled.ButtonClear onPress={cleanFilter}>
          <MaterialIcons
            name="cleaning-services"
            size={24}
            color={colors.background.green}
          />
          <Styled.FilterText>Limpar filtros</Styled.FilterText>
        </Styled.ButtonClear>
      </Styled.FilterContainer>
      <Styled.AdvertsContainer>
        <MobileSquare />
      </Styled.AdvertsContainer>

      {newSchedules.length === 0 ? (
        <EmptyAnimation
          message={
            day || way
              ? "Vazio para esse filtro"
              : "Não existe itinerários para essa via"
          }
        />
      ) : (
        <FlatList
          data={newSchedules}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }: { item: ISchedule }) => (
            <ScheduleCard schedule={item} action={handleSelectedSchedule} />
          )}
        />
      )}

      <DayFilterModal
        modalStatus={daymodalOpen}
        closeModal={() => setdaymodalOpen(false)}
        callback={(selectedDay) => setday(selectedDay)}
      />
      <WayFilterModal
        modalStatus={waymodalOpen}
        closeModal={() => setwaymodalOpen(false)}
        callback={(selectedWay) => setway(selectedWay)}
        way={uniqueWays}
      />

      <ScheduleDetail
        modalStatus={showScheduleDetail}
        closeModal={() => setShowScheduleDetail(false)}
        schedule={selectedSchedules}
      />
      <FullBannner lineId={lineId} />
    </Styled.Container>
  );
}
