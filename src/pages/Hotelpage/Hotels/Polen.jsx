import { useFetch } from "../../../hooks/useFetch";
import style from "./polen.module.scss";
export const Polen = () => {
  const {
    data: polenDetails,
    loading,
    error,
  } = useFetch("http://localhost:4000/destinations/polen");

  if (loading) return <div>Loading...</div>;
  if (error || !polenDetails || !polenDetails.cities) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div className={style.container}>
      <p>{polenDetails.description}</p>
      <div className={style.cityList}>
        {polenDetails.cities.map((item) => (
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
