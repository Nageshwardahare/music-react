import React from "react";
// import "./BandList.css"; // custom styles here

export default function BandList({ bands, city }) {
  if (!bands || bands.length === 0) {
    return (
      <div className="band-bg py-5 text-center">
        <p className="text-muted fs-4">🎵 No bands found for <strong>{city}</strong>. Try another city.</p>
      </div>
    );
  }

  return (
    <div className="band-bg py-4">
      <div className="container">
        <div className="row">
          {bands.map((band, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="card band-card h-100 shadow-lg border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary">{band.name}</h5>

                  <div className="mt-2 flex-grow-1">
                    {band.disambiguation && (
                      <p className="card-text"><strong>Note:</strong> {band.disambiguation}</p>
                    )}
                    {band.area?.name && (
                      <p className="card-text"><strong>Area:</strong> {band.area.name}</p>
                    )}
                    {band["begin-area"]?.name && (
                      <p className="card-text"><strong>Begin Area:</strong> {band["begin-area"].name}</p>
                    )}
                    {band.gender && (
                      <p className="card-text"><strong>Gender:</strong> {band.gender}</p>
                    )}
                    {band.country && (
                      <p className="card-text"><strong>Country:</strong> {band.country}</p>
                    )}
                    {band["life-span"]?.begin && (
                      <p className="card-text"><strong>Founded:</strong> {band["life-span"].begin}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
