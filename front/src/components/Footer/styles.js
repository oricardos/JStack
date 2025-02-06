import styled from "styled-components";

export const Container = styled.footer`
  background: ${({ theme }) => theme.footerBackgroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.large};
  border-radius: ${({ theme }) => theme.borderRadius};
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.large};

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
