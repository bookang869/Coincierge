import styled from 'styled-components';
import { Link } from "react-router-dom"; // we use Link because "a href=" refreshes the page

// padding => inner html ; margin => outer html
const Container = styled.div`
  padding: 0px 20px // padding: vertically horizontally
`;

const Header = styled.header`
  height: 10vh;
  display: flex; 
  justify-content: center;
  align-itmes: center;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${props => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    transition: color 0.2s ease-in;
    display: block; // allows user to click anywhere on the container not just where the link is
      padding: 20px;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`;

const coins = [
  {
    id: "btc-bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    rank: 1,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "eth-ethereum",
    name: "Ethereum",
    symbol: "ETH",
    rank: 2,
    is_new: false,
    is_active: true,
    type: "coin",
  },
  {
    id: "hex-hex",
    name: "HEX",
    symbol: "HEX",
    rank: 3,
    is_new: false,
    is_active: true,
    type: "token",
  },
];

function Coins() {
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {coins.map(coin =>
          <Coin key={coin.id}>
            <Link to={`/${coin.id}`}>
              {coin.name}&rarr;
            </Link>
          </Coin>)}
      </CoinsList>
    </Container>
  );
}

export default Coins;