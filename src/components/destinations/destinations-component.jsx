import "./destinations.styles.scss";
import { DestinationItem } from "../destination-item/destination-item.component";

export const Destinations = () => {
  return (
    <section id="destinations">
      <h1 className="des-title">DESTINATIONS</h1>
      <div className="des-container">




        <DestinationItem 
        childnumber={"child-1"} 
        imagesrc={require('../../assets/batumi3.jpg')}
        imagesrc2={require('../../assets/batumi2.jpg')}
        imagesrc3={require('../../assets/batumi.jpg')}
        desname={"TBILISI & MTSKHETA"}
        desdescription={"Mtskheta was the capital of early Georgian Kingdom of Iberia from 3rd century BC, called “Little Jerusalem”. After that Tbilisi was found in the fifth century AD by Vakhtang Gorgasali, it has been the cultural, political, and economic center of Georgia for fifteen centuries. "}
        />
        <DestinationItem 
        childnumber={"child-2"} 
        imagesrc={require('../../assets/batumi3.jpg')}
        imagesrc2={require('../../assets/batumi2.jpg')}
        imagesrc3={require('../../assets/batumi.jpg')}
        desname={"BATUMI"}
        desdescription={"Batumi is the second largest city of Georgia and the capital of the Autonomous Republic of Adjara, located on the coast of the Black Sea. It is a wonderful seaside city with glittering beaches and attractive surroundings."}
        />
        <DestinationItem 
        childnumber={"child-3"} 
        imagesrc={require('../../assets/kutaisi.jpg')}
        imagesrc2={require('../../assets/kutaisi2.jpg')}
        imagesrc3={require('../../assets/kutaisi3.jpg')}
        desname={"KUTAISI"}
        desdescription={"Archaeological evidence indicates that the city functioned as the capital of the Colchis in the sixth to fifth centuries BC. It is one of the oldest cities in the world and the third-most populous city in Georgia after Tbilisi and Batumi."}
        />
        <DestinationItem 
        childnumber={"child-4"} 
        imagesrc={require('../../assets/kaxeti.jpg')}
        imagesrc2={require('../../assets/kaxeti2.jpg')}
        imagesrc3={require('../../assets/kaxeti3.jpg')}
        desname={"KAKHETI"}
        desdescription={"Kakheti is a region that produces wines. Popular tourist attractions in Kakheti include Tusheti, Gremi, Signagi, Kvetera, Bodbe, Lagodekhi Protected Areas and Alaverdi Monastery.                                                                                "}
        />

        <DestinationItem 
        childnumber={"child-5"} 
        imagesrc={require('../../assets/borjomi.jpg')}
        imagesrc2={require('../../assets/borjomi2.jpg')}
        imagesrc3={require('../../assets/borjomi3.jpg')}
        desname={"BORJOMI & BAKURIANI"}
        desdescription={"Borjomi is noted for its mineral water industry and most extensive ecologically-themed amusement park in the Caucasus. While as Bakuriani is a ski resort in Borjomi district, that is located at an elevation of 1,700 meters (5,576 feet) above sea level."}
        />
        <DestinationItem 
        childnumber={"child-6"} 
        imagesrc={require('../../assets/gudauri.jpg')}
        imagesrc2={require('../../assets/gudauri2.jpg')}
        imagesrc3={require('../../assets/gudauri3.jpg')}
        desname={"GUDAURI & YAZBEGI"}
        desdescription={"Stepantsminda It is the center of the Kazbegi Municipality. While as the ski resort Gudauri that is located on the south-facing plateau of The Greater Caucasus Mountain, is situated in the Stepantsminda District, along the Georgian Military Highway near the Jvari Pass, at an elevation of 2,200 meters (7,200 ft.) above sea level.  "}
        />
        <DestinationItem 
        childnumber={"child-7"} 
        imagesrc={require('../../assets/svaneti.jpg')}
        imagesrc2={require('../../assets/svaneti2.jpg')}
        imagesrc3={require('../../assets/svaneti3.jpg')}
        desname={"SAMEGRELO & ZEMO SVANETI"}
        desdescription={"Samegrelo is a historical - geographical side of western Georgia This region is rich in cultural monuments of different eras and impressive nature, blue lakes and very beautiful canyons. Its central city is Zugdidi. While as Svaneti is one of the highest populated regions in the Caucasus called 'Land of a Thousand Towers'."}
        />
        <DestinationItem 
        childnumber={"child-8"} 
        imagesrc={require('../../assets/racha.jpg')}
        imagesrc2={require('../../assets/racha2.jpg')}
        imagesrc3={require('../../assets/racha3.jpg')}
        desname={"RACHA & LECHKHUMI"}
        desdescription={"Racha-Lechkhumi and Kvemo Svaneti is a region in northwestern Georgia. Racha is quite rich with cultural monuments and diverse nature. The fresh air, the waterfalls hidden in the greenery, the crystal clear alpine lakes, glaciers and lush meadows make it a real paradise and will leave adventure lovers speechless."}
        />
        <DestinationItem 
        childnumber={"child-9"} 
        imagesrc={require('../../assets/black.jpg')}
        imagesrc2={require('../../assets/black2.jpg')}
        imagesrc3={require('../../assets/black3.jpg')}
        desname={"BLACK SEA"}
        desdescription={"The Black Sea is a marginal mediterranean sea of the Atlantic Ocean lying between Europe and Asia. It plays an integral part in the connection between Asia and Europe. Also it has a positive water balance and supports an active and dynamic marine ecosystem. The name of the sea have originated with a people living between the northern (black) and southern (red) seas, pointing directions with colours."}
        />
        <DestinationItem 
        childnumber={"child-10"} 
        imagesrc={require('../../assets/resort.jpg')}
        imagesrc2={require('../../assets/resort2.jpg')}
        imagesrc3={require('../../assets/resort3.jpg')}
        desname={"RESORTS"}
        desdescription={"Georgia is a rich country for having a well-structured spa and wellness resorts. If you’re the one who looks for an incredible spa and wellness resorts in Georgia, you’ve come to the right place. You’ll have an overall image of the resorts which Georgia offers to travelers."}
        /> 
        <DestinationItem 
        childnumber={"child-10"} 
        imagesrc={require('../../assets/resort.jpg')}
        imagesrc2={require('../../assets/resort2.jpg')}
        imagesrc3={require('../../assets/resort3.jpg')}
        desname={"WATERFALLS & LAKES"}
        desdescription={"It is already a well-known fact that Georgia is rich, unique, and diverse in its nature. There are about 860 lakes in Georgia and 55 waterfalls. Here you will find tectonic, multi-glacial, river, coastal, karst, swampy, landslide, and anthropogenic lakes and waterfalls."}
        /> 
        <DestinationItem 
        childnumber={"child-10"} 
        imagesrc={require('../../assets/caves.jpg')}
        imagesrc2={require('../../assets/caves2.jpg')}
        imagesrc3={require('../../assets/caves3.jpg')}
        desname={"CANYONS & CAVES"}
        desdescription={"In Saqartvelo or Georgia are about 22 caves and 10 canyons. Choosing these places you are getting the chance to stop the time for a moment to immerse yourself in a fairy world. Everything will be needed is to get your camera ready to remember the moments forever"}
        /> 


        
      </div>
    </section>
  );
};
