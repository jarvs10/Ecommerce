import styled from 'styled-components';
import { Theme } from '../../themes/theme';

export const TopbarWrapper = styled.div`
    width: 100%;
    height: 70px;
    top: 0;
    left: 0;
    background-color: ${Theme.primary};
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
    align-items: center;
`;

export const CartWrapper = styled.div`
    svg {
        color: white;
        font-size: 2em;
    }
`;