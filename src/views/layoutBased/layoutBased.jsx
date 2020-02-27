import React, { Suspense, Component } from 'react';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../routes/routes';
import styled from 'styled-components';
import '../../assets/css/style.css';
import component from './_nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import LayoutSideNav from './layoutSideNav';


const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;


class LayoutBased extends Component {

    state = {
        selected: 'home',
        expanded: false
    };

    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };


    render() {

        const { expanded, selected } = this.state;

        return (
            <div>
                <nav className='nav-container'>
                    <div className='nav-info-left'>
                        <h5>DAN LIRIS MANAGEMENT SYSTEM</h5>
                    </div>
                    <div className='nav-info-right'>
                        Welcome, <span>Test1</span>
                    </div>
                </nav>
                <Container fluid className='bodyColor'>
                    <div style={{
                        marginLeft: expanded ? 100 : 44
                    }}
                    >
                        <br></br>
                        <LayoutSideNav component={component} onToggle={this.onToggle} />
                        <Main expanded={expanded}>
                            <Suspense fallback={<div className="animated fadeIn pt-1 text-center">Loading...</div>}>
                                <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                name={route.name}
                                                render={props => (
                                                    <route.component {...props} />
                                                )} />
                                        ) : (null);
                                    })}
                                    <Redirect from="/" to="/Dashboard" />
                                </Switch>
                            </Suspense>
                        </Main>
                    </div>
                </Container>
            </div>
        );
    }
}

export default LayoutBased;