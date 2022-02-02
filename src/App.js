import { Greetings } from "./Components/Greetings";
import { IdCard } from "./Components/idCard";
import { Random } from "./Components/Random";
import { BoxColor } from "./Components/BoxColor";
import { CreditCard } from "./Components/CreditCard";
import visa from "./assets/images/visa.png"
import master from "./assets/images/master-card.svg"

import "./index.css"

function App() {
  return (
    <div>

    <h1 className="id">IdCard</h1>

    <IdCard
      lastName= 'Doe'
      firstName= 'John'
      gender= 'male'
      height= '1.78m'
      birth= '1992-07-14'
      picture= 'https://randomuser.me/api/portraits/men/44.jpg'
    />

    <IdCard
      lastName= 'Delores '
      firstName= 'Obrien'
      gender= 'female'
      height= '1.72m'
      birth= '1988-05-11'
      picture= 'https://randomuser.me/api/portraits/women/44.jpg'
    />

    <h1 className="id">Greetings</h1>

    <Greetings lang="de"> Ludwig </Greetings>

    <Greetings lang="fr"> François </Greetings>

    <h1 className="id">Random</h1>

    <Random min={1} max={6}/>

    <Random min={1} max={100}/>

    <h1 className="id">BoxColor</h1>

    <BoxColor r={255} g={0} b={0} />

    <BoxColor r={128} g={255} b={0} />

    <h1 className="id">CreditCard</h1>

    <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" 
    />
    
    <CreditCard
      type="Master Card"
      number="0123456789010995"
      expirationMonth={3}
      expirationYear={2021}
      bank="N26"
      owner="Maxence Bouret"
      bgColor="#eeeeee"
      color="#222222"
    />
    
    <CreditCard
      type="Visa"
      number="0123456789016984"
      expirationMonth={12}
      expirationYear={2019}
      bank="Name of the Bank"
      owner="Firstname Lastname"
      bgColor="#ddbb55"
      color="white" 
    />

    </div>
  );
}

export default App;
