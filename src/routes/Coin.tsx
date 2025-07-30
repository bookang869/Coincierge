import { useParams, useLocation } from "react-router";
import styled from 'styled-components';
import { useState } from "react";

const Container = styled.div`
  padding: 0px 20px; // padding: vertically horizontally
  max-width: 480px;
  margin: 0 auto; // top & bottom margins are set to 0, left & right margins are automatically calculated by the browser
`;

const Header = styled.header`
  height: 10vh;
  display: flex; 
  justify-content: center;
  align-itmes: center;
  margin-top: 10px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

// alternative way to instiantiate type for typescript
interface RouteParams {
    coinId: string;
};

interface RouteState {
    name: string;
}

function Coin() {
    // const { coinId } = useParams<{coinId:string}>();
    const { coinId } = useParams<RouteParams>();
    const [loading, setLoading] = useState(true);
    const { state } = useLocation<RouteState>();

    // if you come directly to localhost:3000/btc (for e.g.) Title will be shown as "Loading"
    // but if you come through the home page the Title will be displayed as "Bitcoin"
    return (
        <Container>
            <Header>
                <Title>{state?.name || "Loading"}</Title>
            </Header>
            {loading ? <Loader>Loading...</Loader> : null}
        </Container>
    );
}

export default Coin;