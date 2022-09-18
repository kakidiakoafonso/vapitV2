import * as S from "./styled";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  closeModal: () => void;
  message: string;
  isOpen: boolean;
  error?: boolean;
};
export function Alert({ closeModal, message, isOpen, error = false }: Props) {
  return (
    <S.Modal transparent visible={isOpen} animationType="slide">
      <S.Container activeOpacity={1} onPress={closeModal}>
        <S.Card error={error}>
          <MaterialIcons
            name={error ? "error-outline" : "warning"}
            size={64}
            color="#fff"
          />
          <S.Title>{error ? "Erro" : "Atenção"}</S.Title>
          <S.Message>{message}</S.Message>
        </S.Card>
      </S.Container>
    </S.Modal>
  );
}
