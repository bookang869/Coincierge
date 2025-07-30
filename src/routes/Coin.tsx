import { useParams } from "react-router";

// alternative way to instiantiate type for typescript
interface Params {
    coinId: string;
};

function Coin() {
    // const { coinId } = useParams<{coinId:string}>();
    const { coinId } = useParams<Params>();
    return (
        <h1>Coin: {coinId}</h1>
    );
}

export default Coin;