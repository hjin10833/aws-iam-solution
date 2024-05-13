import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid #000;
  box-sizing: border-box;
`;

export const Gnb = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Li = styled.li`
  font-size: 16px;
`;

export const Logo = styled.div`
  width: 100px;
`;
