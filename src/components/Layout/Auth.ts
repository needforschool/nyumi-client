import styled from "styled-components";
import Link from "../Link";
import Button from "./Button";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

export const AuthHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AuthBrandImage = styled.img`
  height: 50px;
  width: auto;
  object-fit: contain;
`;

export const AuthTitle = styled.h1`
  margin: 15px 0;
  font-size: ${({ theme }) => theme.size.title};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

export const AuthStepHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  text-align: left;
`;

export const AuthStepTitle = styled.h2`
  font-size: ${({ theme }) => theme.size.large};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;
export const AuthStepDescription = styled.p`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.size.normal};
  color: ${({ theme }) => theme.colors.text.light};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;
  margin-top: 10px;
`;

export const FieldGroup = styled.div`
  margin-top: 2px;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-top: 0;
  }
`;

export const FieldLabel = styled.label`
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.bold};
  user-select: none;
  pointer-events: none;
`;

export const FieldContainer = styled.div`
  margin-top: 2px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const AuthLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.size.tiny};
  margin-top: 10px;
`;

export const AuthButton = styled(Button)<{
  loading?: boolean;
  valid?: boolean;
}>`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.size.normal};
  height: 40px;
  font-weight: ${({ theme }) => theme.weight.semiBold};

  ${({ valid }) =>
    !valid &&
    `
    cursor: not-allowed;
    filter: brightness(0.5);

    :hover {
      filter: brightness(0.5);
    }
  `}

  ${({ theme, loading }) =>
    loading &&
    `
    animation: stripes-move 0.75s infinite linear;
    background: repeating-linear-gradient(45deg, ${theme.colors.accent.light} 0, ${theme.colors.accent.light} 0.25em, transparent 0.25em, transparent 0.5em);
    @keyframes stripes-move {
      100% {
        background-position: 5em 0px;
      }
    }
  `}
`;
