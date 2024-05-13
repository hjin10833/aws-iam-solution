import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  border: 1px solid #000;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.8); /* 흐릿한 효과를 위한 하얀 배경 */
  backdrop-filter: blur(5px); /* 흐린 효과 */
  z-index: 1000; /* 다른 요소 위에 표시되도록 z-index 설정 */
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
