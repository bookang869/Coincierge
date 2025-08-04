import styled from "styled-components";

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div<{ pct: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    color: #a89e90;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  span:nth-child(2) {
    color: ${(props) =>
      props.pct > 0 ? "#04ff04" : props.pct < 0 ? "#ff4040" : "#aaa"};
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

interface iData {
  tickersData: {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
      USD: {
        ath_date: string;
        ath_price: number;
        market_cap: number;
        market_cap_change_24h: number;
        percent_change_1h: number;
        percent_change_1y: number;
        percent_change_6h: number;
        percent_change_7d: number;
        percent_change_12h: number;
        percent_change_15m: number;
        percent_change_24h: number;
        percent_change_30d: number;
        percent_change_30m: number;
        percent_from_price_ath: number;
        price: number;
        volume_24h: number;
        volume_24h_change_24h: number;
      };
    };
  };
}

function Price({ tickersData }: iData) {
  return (
    <>
      <Overview>
        <OverviewItem pct={tickersData.quotes.USD.percent_change_30m}>
          <span>30m</span>
          <span>{tickersData.quotes.USD.percent_change_30m}%</span>
        </OverviewItem>
        <OverviewItem pct={tickersData.quotes.USD.percent_change_1h}>
          <span>1h</span>
          <span>{tickersData.quotes.USD.percent_change_1h}%</span>
        </OverviewItem>
        <OverviewItem pct={tickersData.quotes.USD.percent_change_12h}>
          <span>12h</span>
          <span>{tickersData.quotes.USD.percent_change_12h}%</span>
        </OverviewItem>
        <OverviewItem pct={tickersData.quotes.USD.percent_change_24h}>
          <span>1d</span>
          <span>{tickersData.quotes.USD.percent_change_24h}%</span>
        </OverviewItem>
        <OverviewItem pct={tickersData.quotes.USD.percent_change_7d}>
          <span>1w</span>
          <span>{tickersData.quotes.USD.percent_change_7d}%</span>
        </OverviewItem>
      </Overview>
    </>
  );
}

export default Price;
