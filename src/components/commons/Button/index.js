import styled, { css } from 'styled-components';
import get from 'lodash/get'

const ButtonGhost = css`
    background: transparent;
    color: ${function ( props ) {
        return get(props.theme, `colors.${props.variant}.color`)
    }};
`;

const ButtonDefault = css`
    background-color: ${function ( props ){
        return get(props.theme, `colors.${props.variant}.color`)
    }};
    color: ${function ( props ){
        return get(props.theme, `colors.${props.variant}.contrast`)
    }};
`;

export const Button = styled.button`
    font-family: 'Dosis', sans-serif;
    text-transform: uppercase;
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;

    ${function (props) {
    if ( props.ghost ) {
            return ButtonGhost;
        }

        return ButtonDefault
    }}

    transition: opacity ${({ theme }) => theme.transition };
    border-radius: opacity ${({ theme }) => theme.borderRadius };
    &:hover,
    &:focus {
        opacity: 0.5;
    }
`;