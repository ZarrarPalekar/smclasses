import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <section id="portfolio" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Memories of SM Classes with their students.
          </p>
        </div>
        <div className="gallery-grid">
          {props.data ? (
            props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="gallery-card">
                <Image
                  title={d.title}
                  largeImage={d.largeImage}
                  smallImage={d.smallImage}
                />
              </div>
            ))
          ) : (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Loading gallery...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
