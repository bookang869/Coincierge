import styled from "styled-components";
import { Link } from "react-router-dom"; // we use Link because "a href=" refreshes the page
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";

// padding => inner html ; margin => outer html
const Container = styled.div`
  padding: 0px 20px; // padding: vertically horizontally
  max-width: 480px;
  margin: 0 auto; // top & bottom margins are set to 0, left & right margins are automatically calculated by the browser
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  background-color: black;
`;

const CoinsList = styled.ul`
  padding: 0 10px;
`;

// display: block; // allows user to click anywhere on the container not just where the link is
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;
  a {
    transition: color 0.2s ease-in;
    padding: 20px;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  margin-top: 30px;
  font-size: 48px;
  font-family: "Cinzel", serif;
  color: ${(props) => props.theme.accentColor};
  margin-bottom: 5px;
`;

const HomeImg = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
  border-radius: 25px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
`;

const Slogan = styled.h3`
  font-size: 16px;
  font-family: "Cinzel", serif;
  color: ${(props) => props.theme.accentColor};
  font-weight: 300;
  margin-bottom: 20px;
`;

const Loader = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  // make API call to fetch list of coins

  // useQuery(key, function) -> call fetchCoins functions and store json response into data
  // react query keeps the data on cache, so when it goes back to the homescreen, there is no loading page
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <>
      <Header>
        <Title>COINCIERGE</Title>
        <HomeImg src="../img/home-image.png" />
        <Slogan>Your personal coin assistant.</Slogan>
      </Header>
      <Container>
        {isLoading ? (
          <Loader>Loading...</Loader>
        ) : (
          <CoinsList>
            {data?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                    state: { name: coin.name },
                  }}
                >
                  <Img
                    src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                  />
                  {coin.name}&rarr;
                </Link>
              </Coin>
            ))}
          </CoinsList>
        )}
      </Container>
    </>
  );
}

export default Coins;
