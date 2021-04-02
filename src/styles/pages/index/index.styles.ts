import styled from 'styled-components';

export const SectionTitle = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.light};

  margin: 56px 0px 36px 0px;
`;

export const MatchesWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;

  padding: 0px 0px 0px 0px;
`;
