import React, { useState } from "react";
import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";
import BusIcon from "../../assets/icons/bus.svg";
import { useRoute } from "@react-navigation/native";
import colors from "../../config/style/colors";
import * as Styled from "./styled";

import { Header } from "../../components/header";
import { ScheduleCard } from "../../components/schedule-card";
import { DayFilterModal } from "../../components/day-filter-modal";
// import Parada from "../../components/Parada/Parada";
// import TimeLine from "../../components/Time/TimeLine";
// import BusImage from "../../components/InfoImage/BusImage";
// import ScrollGrade from "../../components/ScrollGrade/ScrollGrade";
// import CompleteGrade from "../../components/CompleteGrade/CompleteGrade";
// import ModalToggle from "../../components/Modal/ModalToggle";
// import TerminalComponent from "../../components/TerminalComponent/TerminalComponent";
// import BusDescription from "../../components/BusDescription/BusDescription";
// import Details from "./Components/Detais/Details";
// import CustomAds from "../../components/InfoImage/BusImage";
import { FullBannner } from "../../components/full-banner";

export function Schedule() {
  const { params } = useRoute();
  const { schedules }: { schedules: ISchedule[] } = params;

  const [modalOpen, setmodalOpen] = useState<boolean>(false);
  const [newSchedules, setnewSchedules] = useState<ISchedule[]>(schedules);
  const localHour = new Date().getHours();

  function handleMais(selectedDay: IDay) {
    const filteredSchedule = schedules.filter(
      (item) => item.day === selectedDay
    );
    setnewSchedules(filteredSchedule);
    setmodalOpen(false);
  }
  function cleanFilter() {
    setnewSchedules(schedules);
  }
  function setFirstItinerarie() {
    const day = new Date().getDay();
  }
  return (
    <Styled.Container>
      <Header title={"Horários"} />
      <Styled.FilterContainer>
        <Styled.Button onPress={() => setmodalOpen(true)}>
          <AntDesign name="filter" size={24} color={colors.background.green} />
          <Styled.FilterText>Filtrar por dia</Styled.FilterText>
        </Styled.Button>
        <Styled.Button onPress={cleanFilter}>
          <MaterialIcons
            name="cleaning-services"
            size={24}
            color={colors.background.green}
          />
          <Styled.FilterText>Limpar o filtro</Styled.FilterText>
        </Styled.Button>
      </Styled.FilterContainer>
      <Styled.ScrollView showsVerticalScrollIndicator={false}>
        {newSchedules.map((schedule) => (
          <ScheduleCard schedule={schedule} />
        ))}
      </Styled.ScrollView>
      {/* {ads && <CustomAds ads={ads}/>} */}

      <DayFilterModal
        modalStatus={modalOpen}
        closeModal={() => setmodalOpen(false)}
        callback={handleMais}
      />
      <FullBannner />
    </Styled.Container>
  );
}
