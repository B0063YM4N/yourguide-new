import React, { useContext, useState, useEffect } from "react";
import { CardItem } from "../card-item/card-item.component";
import "./cards-directory.styles.scss";
import { CollectionContext } from "../../context/collection/collection.context";
import { storage } from "../../utils/firebase.utils";
import { ref, uploadBytes,getDownloadURL } from 'firebase/storage';
import { v4 } from "uuid";
import { updateDocImg } from "../../utils/firebase.utils";

const CardDirectory = () => {

  const { collectionMap } = useContext(CollectionContext);

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);


  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        
        updateDocImg(url)
      });
    });
  };


  return (
    <section id="cards-directory">
      <h1 className="cards-directory-title">FIND YOUR DREAM TOURS</h1>
      <h2>4 STAR TOURS</h2>
      <h3>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </h3>
      <div className="carousel-container">
        {
          collectionMap.fourstar?.map(item => {
            return (
              <CardItem key={item.id} image={item.firstImage} image1={item.secondImage} image2={item.thirdImage} link={item.link} />
            )
          })
        }

      </div>

      <h2>5 STAR TOURS</h2>
      <h3>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"> </i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </h3>

      <div className="carousel-container">
      {
          collectionMap.fivestar?.map(item => {
            return (
              <CardItem key={item.id} image={item.firstImage} image1={item.secondImage} image2={item.thirdImage} link={item.link} />
            )
          })
        }

      </div>

      <h2>VIP TOURS</h2>
      <div className="carousel-container">
      {
        collectionMap.vip?.map(item => {
          return (
            <CardItem key={item.id} image={item.firstImage} image1={item.secondImage} image2={item.thirdImage} link={item.link} />
          )
        })
      }

      </div>

      <div className="App">
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button onClick={uploadFile}> Upload Image</button>
        
    </div>
    </section>
  );
};

export default CardDirectory;
