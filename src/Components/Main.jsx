import { Button } from "@mui/material";
import React from "react";
import img from "../Assets/Img/ad.jpg";

const Main = () => {
  return (
    <>
      <div className="bg-dark  text-light">
        <div className="d-flex justify-content-between mb-5">
          <div style={{ width: "40%" }}>
            <img style={{ width: "120%" }} src={img} alt="" />
          </div>
          <div
            style={{ width: "45%" }}
            className="p-3 pt-5 d-flex align-items-center "
          >
            <div>
              <h1 className="">OLIY MATEMATIKA</h1>
              <br />
              <h3 className="text-primary ">Kafedra mudiri, dots. O'.Qalandarov</h3>
              <br />
              <br />
              <p>
                "Oliy matematika" kafedrasi Universitetning birinchilar qatorida
                tashkil etilgan boʻlib, unga 1957- yilda asos solingan. Hozirda
                kafedrada katta ilmiy salohiyatga va pedagogik tajribaga ega
                bo‘lgan 25 nafar professor-o‘qituvchilar kafedra mudiri dotsent
                Qalandarov O‘tkir Namozovich rahbarligida kasbiy va ilmiy
                faoliyat olib bormoqdalar.
              </p>
              <br />
              <br />
              <div className="">
                <Button variant="contained">Batafsil</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-5 mx-5">
          <div className="p-2 m-2">
            <h3 style={{ height: "30px" }} className="text-primary ">Ilmiy Salohiyat</h3>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam dignissimos ipsum soluta, nisi, vel cum molestiae
              placeat aliquid optio nulla harum debitis excepturi velit ex
              pariatur sint eius consequuntur animi.
            </p>
          </div>
          <div className="p-2 m-2">
            <h3 style={{ height: "30px" }} className="text-primary ">
              Ayol va Erkak O`qituvchilar Nisbati
            </h3>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam dignissimos ipsum soluta, nisi, vel cum molestiae
              placeat aliquid optio nulla harum debitis excepturi velit ex
              pariatur sint eius consequuntur animi.
            </p>

          </div>
          <div className="p-2 m-2">
            <h3 style={{ height: "30px" }} className="text-primary ">Yosh Bo`yicha Statistika</h3>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam dignissimos ipsum soluta, nisi, vel cum molestiae
              placeat aliquid optio nulla harum debitis excepturi velit ex
              pariatur sint eius consequuntur animi.
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
