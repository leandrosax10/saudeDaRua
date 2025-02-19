import { InputTextStyle } from './InputText.style';

export const InputText = ({
  register,
  registerValue,
  id,
  placeholder,
  type,
}) => {
  return (
    <InputTextStyle
      placeholder={placeholder}
      autoComplete="off"
      id={id}
      type={type}
      {...register(registerValue)}
    />
  );
};
export default InputText;
