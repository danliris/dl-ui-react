import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useHistory } from 'react-router-dom';


const LayoutSideNav = ({ component = [], onToggle }) => {
    const history = useHistory()

    function onNavigationHandler(destination) {
        history.push(destination)
    }

    return (
        <SideNav onToggle={onToggle}
            onSelect={(selected) => onNavigationHandler(selected)}>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                {component.map(item => {
                    return (
                        <NavItem eventKey={item.navigation}>
                            <NavIcon>
                                <i className={item.icon} style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                {item.label}
                            </NavText>
                        </NavItem>
                    )
                })}
            </SideNav.Nav>
        </SideNav>
    )
}

export default LayoutSideNav;