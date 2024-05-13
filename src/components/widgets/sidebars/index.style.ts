import styled from "@emotion/styled";

export const Container = styled.section`
  width: 200px;
  max-width: 250px;
  min-width: 200px;
  height: 100vh;
`;

export const Gnb = styled.nav`
  width: 100%;
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const Ul = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #fff;
  border-radius: 12px;
`;

export const Li = styled.li`
  width: 100%;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;
