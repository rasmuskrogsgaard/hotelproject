import { useFetch } from "../../../hooks/useFetch";
import style from "./danmark.module.scss";

export const Danmark = () => {
  const {
    data: danmarkDetails,
    loading,
    error,
  } = useFetch("http://localhost:4000/destinations/danmark");
  if (loading) return <div>Loading...</div>;
  if (error || !danmarkDetails || !danmarkDetails.cities) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div className={style.container}>
      <p>{danmarkDetails.description}</p>
      <div className={style.cityList}>
        {danmarkDetails.cities.map((item) => (
          <figure key={item.city_id}>
            <figcaption>
              <img
                src={`../../../src/assets/images/${item.CityImage.city_image_filename}`}
                alt={item.name}
              />
              <p>{item.name}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
