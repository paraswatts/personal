
import React, { useState, useEffect } from 'react';
import "./ImageGallery.css";
import { database } from '../../config'
import Spinner from "../../components/helpers/Spinner"
import "react-photo-feed/library/style.css";

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }
  componentDidMount() {
    let tempArray = [], tempArray2 = [];
    database
      .collection('my_sketches')
      .onSnapshot(snapshot => {
        tempArray2 = []
        tempArray = []
        snapshot.docs
          .forEach((doc, index) => {

            let imgUrl = doc.data().url;
            let imgObj = {
              src: imgUrl
            }
            tempArray.push(imgObj)
            console.log("tempArray", tempArray)
            if (tempArray.length > 0 && (tempArray.length === 4 || index === snapshot.docs.length - 1 || snapshot.docs.length < 4)) {
              console.log("here")
              tempArray2.push(tempArray);
              tempArray = []
            }

          });
        console.log("tempArray2", tempArray2.length)
        if (tempArray2 && tempArray2.length) {

          this.setState({ images: tempArray2 })
        }
      })
  }
  render() {
    const { images } = this.state;
    console.log("|images", images)

    return (
      <div className='main' id="imageGallery">
        {images && images.length ?
          <div class="row">
            {images.map((obj, index) => (
              <div className="column" key={index}>
                {console.log("obj.length", obj.length)}
                {obj && obj.length && obj.map((obj1, index1) => (
                  <div>
                    {console.log("image tag", index1)}
                    <img src={obj1.src} key={index1} /></div>))}</div>))}</div> : <Spinner />}
      </div>
    );
  }
}