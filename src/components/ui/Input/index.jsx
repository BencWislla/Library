import {
  InputContainer,
  InputContainerWrapper,
  InputContent,
  LabelContainer,
  SpanText,
} from "./styles";

export function Input({ text, placeholder, value, onChange }) {
  return (
    <InputContainerWrapper>
      <LabelContainer>
        {text}
        <SpanText>*</SpanText>
      </LabelContainer>
      <InputContainer>
        <InputContent
          placeholder={placeholder}
          value={value}
          alt="input"
          onChange={onChange}
        />
      </InputContainer>
    </InputContainerWrapper>
  );
}
