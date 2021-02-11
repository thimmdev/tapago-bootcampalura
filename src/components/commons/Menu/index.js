import React from 'react';
import { Logo } from '../../../theme/Logo/logo';
import { Button } from '../Button';
import { MenuWrapper } from './styles/MenuWrapper'


export default function Menu () {
    
  return (
    <MenuWrapper>
        <MenuWrapper.LeftSide>
            <Logo />
        </MenuWrapper.LeftSide>
        <MenuWrapper.CentralSide as="ul">
        {[
        { url: '/', name: 'Home' },
        { url: '/faq', name: 'Perguntas Frequentes' },
        { url: '/sobre', name: 'Sobre' },
    ].map((link) => {
                return (
                    <li key={link.url}>
                        <a href={link.url}>
                            {link.name}
                        </a>
                    </li>
                )
            })}
        </MenuWrapper.CentralSide>
        <MenuWrapper.RightSide>
            <Button ghost variant="secondary">
                Entrar
            </Button>
            <Button variant="primary" >
                Cadastrar
            </Button>
        </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}