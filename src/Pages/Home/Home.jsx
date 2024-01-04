import { Helmet } from "react-helmet";
import Bannar from "../../Components/Bannar/Bannar";
import WinnerSection from "./WinnerSection/WinnerSection";

const Home = () => {
    return (
        
        <div>
    <Helmet>
        <meta charSet="utf-8" />
        <title>DIU|CP Community|Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
            <Bannar></Bannar>
            <WinnerSection></WinnerSection>
        </div>
    );
};

export default Home;