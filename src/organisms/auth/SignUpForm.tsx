import {
  AiFillLock,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { InputForm } from "../../molecules/auth/InputForm";
import { emailValidation, passwordValidation } from "../../util/validation";

interface ValueObjectKeys {
  [key: string]: string;
}

interface ValueObject extends ValueObjectKeys {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
}

interface Props {
  value: ValueObject;
  setValue: Function;
  warning: object;
  setWarning: Function;
  setDisabled: Function;
}

export const SignUpForm = ({
  value,
  setValue,
  warning,
  setWarning,
  setDisabled,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    // warning - email 존재 확인(서버에서 확인)

    let warningValue;
    if (targetName === "email") {
      // 1) email 형식
      warningValue = targetValue === "" ? false : !emailValidation(targetValue);
    } else if (targetName === "password") {
      // 2) password 형식
      warningValue =
        targetValue === "" ? false : !passwordValidation(targetValue);
      if (targetValue === "" && value["confirmPassword"] !== "") {
        warningValue = value["confirmPassword"] !== targetValue;
      }
    } else if (targetName === "confirmPassword") {
      // 3) password 일치 여부 확인
      warningValue = value["password"] !== targetValue;
    } else {
      // 4) 이름 빈칸 체크
      warningValue = targetValue === "";
      setDisabled(true);
    }

    setWarning({
      ...warning,
      [targetName]: warningValue,
    });

    setValue({
      ...value,
      [targetName]: targetValue,
    });

    // empty validation
    if (targetValue === "") {
      setDisabled(true);
      return;
    }

    for (let key in value) {
      const empty = value[key].trim() === "";
      setDisabled(empty);
      if (empty) break;
    }
  };

  return (
    <>
      <InputForm
        onChange={handleChange}
        htmlFor="email"
        icon={<AiOutlineMail />}
        type="text"
        id="email"
        name="email"
        placeholder="이메일 주소"
      />
      <InputForm
        onChange={handleChange}
        htmlFor="name"
        icon={<AiOutlineUser />}
        type="text"
        id="name"
        name="name"
        placeholder="이름"
      />
      <InputForm
        onChange={handleChange}
        htmlFor="password"
        icon={<AiOutlineLock />}
        type="password"
        id="password"
        name="password"
        placeholder="비밀번호"
      />
      <InputForm
        onChange={handleChange}
        htmlFor="confirmPassword"
        icon={<AiFillLock />}
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="비밀번호 확인"
      />
    </>
  );
};
