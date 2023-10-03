/* eslint-disable react/prop-types */
export const Package = ({
  image,
  type,
  title,
  info,
  location,
  duration,
  cost,
}) => {
  return (
    <div className="package-card">
      <div className="package-img-container">
        <img className="package-img" src={image} alt={title} />
        <p className="package-type">{type}</p>
      </div>
      <article className="package-info">
        <div className="package-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="package-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {location}
          </p>
          <p>From ${cost}</p>
          <p>{duration} hours</p>
        </div>
      </article>
    </div>
  );
};
