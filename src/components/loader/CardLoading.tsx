import React from "react";
import styled from "styled-components/native";
import { Skeleton } from "moti/skeleton";
import colors from "../../config/style/colors";

const Container = styled.View`
  background-color: ${colors.background.grey80};
  width: 100%;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  flex-direction: row;
  margin-bottom: 15px;
  border-radius: 6px;
`;
const GroupText = styled.View`
  flex: 1;
  padding-left: 10px;
`;
const Text = styled.View`
  margin: 5px;
`;
const Image = styled.View`
  margin-left: 15px;
`;

export function Loading() {
  return (
    <Container>
      <Image>
        <Skeleton height={60} width={60} radius="square" colorMode="light" />
      </Image>
      <GroupText>
        <Text>
          <Skeleton
            height={18}
            width={"100%"}
            radius="round"
            colorMode="light"
          />
        </Text>
        <Text>
          <Skeleton
            height={18}
            width={"100%"}
            radius="round"
            colorMode="light"
          />
        </Text>
      </GroupText>
    </Container>
  );
}
