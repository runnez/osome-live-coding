import React, { memo } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin: 0 0 30px;
`;

const ErrorWarning = styled.div`
  position: absolute;
  color: red
`

const FormField = memo(({ label, type, onChange, errors = [], testId }) => {
  const id = "FormField-" + label;

  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <input
        data-testid={testId}
        id={id}
        type={type}
        onChange={(event) => onChange(event.target.value)}
      />
      {errors.length > 0 && (
        <ErrorWarning
          data-testid="field-error"
        >
          {errors.join(", ")}
        </ErrorWarning>
      )}
    </Wrapper>
  );
});

export default FormField;
