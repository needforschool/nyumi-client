import React, { ReactNode } from "react";

import styled from "styled-components";

interface Props {
  pattern?: RegExp;
  errors?: any;
  setErrors?: React.Dispatch<React.SetStateAction<any>>;
  error?: string;
  children?: ReactNode;
  required?: boolean;
  [key: string]: any;
}

const Field: React.FC<Props> = ({
  pattern,
  error,
  errors,
  setErrors,
  children,
  required,
  ...rest
}: Props) => {
  React.useEffect(() => {
    if (setErrors && errors && !errors[rest.name] && required && !rest.value) {
      setErrors({
        ...errors,
        [rest.name]: `Empty ${rest.name}`,
      });
    }
  }, [errors, required, rest, setErrors]);

  const handleChange = (event: any) => {
    if (errors && setErrors) {
      if (pattern) {
        const regExPattern = new RegExp(pattern);
        if (!regExPattern.test(event.target.value)) {
          setErrors({
            ...errors,
            [rest.name]: `Invalid ${rest.name}`,
          });
        } else {
          delete errors[rest.name];
          setErrors(errors);
        }
      } else {
        delete errors[rest.name];
        setErrors(errors);
      }
    }
    if (rest.onChange) rest.onChange(event);
  };

  const hasError: boolean = error === `Empty ${rest.name}` ? false : true;

  return (
    <>
      {!children ? (
        <Container
          {...rest}
          onChange={handleChange}
          error={hasError ? error : undefined}
        />
      ) : (
        children
      )}
      {hasError && <Error>{error}</Error>}
    </>
  );
};

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.layout.lighter};
  margin-top: 5px;
  font-size: ${({ theme }) => theme.size.tiny};
  color: ${({ theme }) => theme.colors.accent.red} !important;
`;

export const Container = styled.input<{ error?: string }>`
  padding: 2px 4px 4px 6px;
  background-color: ${({ theme }) => theme.colors.layout.darkest};
  color: ${({ theme }) => theme.colors.text.lightest};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.layout.darkest};
  outline: none;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.size.small};
  width: 100%;

  :focus {
    border: 1px solid ${({ theme }) => theme.colors.accent.light};
    color: ${({ theme }) => theme.colors.text.lightest};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }

  ${({ error, theme }) =>
    error &&
    `
    border: 1px solid ${theme.colors.accent.red} !important;
    color: ${theme.colors.accent.red} !important;
  `}
`;

export default Field;
