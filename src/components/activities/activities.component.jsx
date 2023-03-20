import "./activities.styles.scss";

export const Activities = () => {
  return (
    <section id="activities">

        <h1>ACTIVITIES</h1>
      <div className="activities-container">
        <div className="hexagonarea fisrt">
          <div className="hexagon">
            <img className="skiing" src="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80" alt="" />
            <div className="overlay"></div>
            <h3>Skiing</h3>
            <p><i class="fa-sharp fa-solid fa-location-dot"></i> <br />Gudauri<br />bakuriani<br />Goderdzi</p>
          </div>
          <div className="hexagon">
            <img className="zipline" src="https://english.onlinekhabar.com/wp-content/uploads/2022/01/zipline-4135588_1280.jpg" alt="" />
            <div className="overlay"></div>
            <h3>Zipline</h3>
            <p className="zipline-p"> <i class="fa-sharp fa-solid fa-location-dot"></i> <br />tbilisi <br />batumi <br />sairme <br />racha</p>
          </div>
          <div className="hexagon">
            <img className="parachute" src="http://crystalcoastskydiving.com/uploads/1/3/0/2/130212249/mb609035_orig.jpg" alt="" />
            <div className="overlay"></div>
            <h3>Skydiving</h3>
            <p><i class="fa-sharp fa-solid fa-location-dot"></i><br />batumi <br /> kaxeti</p>

          </div>
          <div className="hexagon">
            <img src="https://img.etimg.com/thumb/msid-91035929,width-1200,height-900,imgsize-1020256,resizemode-8,quality-100/news/sports/surfing-is-riding-the-local-wave-thanks-to-the-ripple-effects-of-the-pandemic-and-social-media-influence.jpg" alt="" />
            <div className="overlay"></div>
            <h3>BOARD <br /> RIDING</h3>
            <p className="board-p"> <i class="fa-sharp fa-solid fa-location-dot"></i><br />tbilisi <br /> ananuri <br /> mtskheta <br />batumi</p>
          </div>
          <div className="hexagon">
            <img className="horseriding" src="https://www.drweil.com/wp-content/uploads/2016/12/health-wellness_health-centers_women_is-horseback-riding-harmful-to-women_2755x1784_75254029.jpg" alt="" />
            <div className="overlay"></div>
            <h3>Horse<br />Riding</h3>
            <p className="horseriding-p"><i class="fa-sharp fa-solid fa-location-dot"></i> <br /> tbilisi <br />batumi <br /> gudauri <br />bakuriani</p>
          </div>
        </div>
        <div className="hexagonarea second">
          <div className="hexagon">
            <img src="https://www.clkarting.com/wp-content/uploads/2020/09/ZAMP8946.jpg" alt="" />
            <div className="overlay"></div>
            <h3>Carting</h3>
            <p> <i class="fa-sharp fa-solid fa-location-dot"></i> <br /> tbilisi <br /> batumi</p>
          </div>
          <div className="hexagon">
            <img className="off-roading" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dwburnett-defendermack-dsc-4196-1610470496.jpg" alt="" />
            <div className="overlay"></div>
            <h3>OFF <br /> ROADING</h3>
            <div className="large-p">
            <p className="off-p"> <i class="fa-sharp fa-solid fa-location-dot"></i> <br />GUDAURI <br /> borjomi <br /> bakuriani </p>
            <p className="off-p"> <i class="fa-sharp fa-solid fa-location-dot"></i> <br />martvili<br /> batumi <br /> racha </p></div>
          </div>
          <div className="hexagon">
            <img src="https://tourguide.ge/wp-content/uploads/2019/07/Rafting-in-Georgia_3-800x600.jpg" alt="" />
            <div className="overlay"></div>
            <h3>Rafting</h3>
            <p> <i class="fa-sharp fa-solid fa-location-dot"></i> <br />gudauri <br /> borjomi <br /> batumi</p>
          </div>
          <div className="hexagon">
            <img className="shooting"src="https://governorsgunclub.com/wp-content/uploads/2018/06/seymour.png" alt="" />
            <div className="overlay"></div>
            <h3>SHOOTING</h3>
            <p> <i class="fa-sharp fa-solid fa-location-dot"></i> <br />tbilisi</p>
          </div>
        </div>
        <div className="hexagonarea last">
          <div className="hexagon">
            <img className="" src="https://images.unsplash.com/photo-1614003274761-28c286bbbab1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="" />
            <div className="overlay"></div>
            <h3>cable <br /> cars</h3>
            <div className="large-p">
               <p className="off-p"> <i class="fa-sharp fa-solid fa-location-dot"></i> <br />tbilisi <br /> batumi <br />  gudauri <br/></p>
               <p className="off-p"> <i class="fa-sharp fa-solid fa-location-dot"></i> <br /> borjomi <br /> bakuriani <br /> chiatura</p>
            </div>
          </div>
          <div className="hexagon">
            <img className="cycling" src="https://wander-lush.org/wp-content/uploads/2020/06/Emily-Lush-Batumi-Sarpi-Georgia-1.jpg" alt="" />
            <div className="overlay"></div>
            <h3>CYCLING</h3>
            <p> <i class="fa-sharp fa-solid fa-location-dot"></i> <br /> batumi</p>
          </div>
          <div className="hexagon">
            <img src="https://cdn.theatlantic.com/thumbor/i0IHmPDqumA3ZcI_zWvrOpg8ro0=/158x0:2786x1971/1200x900/media/img/mt/2018/07/RTXUW6X/original.jpg" alt="" />
            <div className="overlay"></div>
            <h3>AIR BALOON</h3>
            <p> <i class="fa-sharp fa-solid fa-location-dot"></i> <br /> tbilisi <br />kakheti</p>
          </div>
        </div>
      </div>
    </section>
  );
};
