import styled from '@emotion/styled';

import DropMenuIcon from './DropMenuIcon';
import { Text } from '../../display/Text';

import { CustomThemeProps } from '../../../typings/CustomThemeProps';

type DropMenuProps = {
  theme: CustomThemeProps;
};

export const ButtonContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const ActionButton = styled.div`
  align-items: center;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
`;

export const MenuIcon = styled(DropMenuIcon)`
  path {
    fill: ${({ theme }: DropMenuProps) =>
      theme?.colors?.brand?.tertiary?.default};
  }
`;

export const Menu = styled.ul`
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 2px rgba(13, 13, 13, 0.14), 0 0 1px rgba(13, 13, 13, 0.2);
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: calc(100% + 1px);
  z-index: 20;
`;

export const MenuItem = styled(Text)`
  color: ${({ theme }: DropMenuProps) => theme?.colors?.neutral?.medium};
  font-size: 16px;
  padding: 16px;
`;

MenuItem.defaultProps = {
  component: 'li',
  variant: 'body-01',
};

export const MenuMask = styled.div`
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;
