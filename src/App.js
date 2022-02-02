import { Greetings } from "./Components/Greetings";
import { IdCard } from "./Components/idCard";
import { Random } from "./Components/Random";
import { BoxColor } from "./Components/BoxColor";
import { CreditCard } from "./Components/CreditCard";
import { ClickablePicture } from "./Components/ClickablePicture";
import { Rating } from "./Components/Rating";
import { LikeButton } from "./Components/LikeButton";
import maxence from "./assets/images/maxence.png";
import maxenceGlasses from "./assets/images/maxence-glasses.png";

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

    <h1 className="id">ClickablePicture</h1>

    <ClickablePicture
      img={maxence}
      imgClicked={maxenceGlasses}
    />

    <h1 className="id">Rating</h1>

    <Rating>0</Rating><br/>
    <Rating>1.49</Rating><br/>
    <Rating>1.5</Rating><br/>
    <Rating>3</Rating><br/>
    <Rating>4</Rating><br/>
    <Rating>5</Rating><br/>

    <h1 className="id">LikeButton</h1>

    <LikeButton />
    
    </div>
  );
}

export default App;
