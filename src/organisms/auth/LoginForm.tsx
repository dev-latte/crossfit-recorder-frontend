import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { InputForm } from "../../molecules/auth/InputForm";
import { emailValidation } from "../../util/validation";

interface Props {
  value: object;
  setValue: Function;
  setWarning: Function;
  setDisabled: Function;
}

export const LoginForm = ({
  value,
  setValue,
  setWarning,
  setDisabled,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;

    // email validation
    if (targetName === "email") {
      setWarning(!emailValidation(targetValue) || targetValue !== "");
    }

    // empty validation
    setDisabled(targetValue === "");
    setValue({
      ...value,
      [targetName]: targetValue,
    });
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
        htmlFor="password"
        icon={<AiOutlineLock />}
        type="password"
        id="password"
        name="password"
        placeholder="비밀번호"
        onChange={handleChange}
      />
    </>
  );
};
