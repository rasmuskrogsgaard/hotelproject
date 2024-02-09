import { useFetch } from "../../../hooks/useFetch";
import style from "./sverige.module.scss";
export const Sverige = () => {
  const {
    data: sverigeDetails,
    loading,
    error,
  } = useFetch("http://localhost:4000/destinations/sverige");

  if (loading) return <div>Loading...</div>;
  if (error || !sverigeDetails || !sverigeDetails.cities) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div className={style.container}>
      <p>{sverigeDetails.description}</p>
      <div className={style.cityList}>
        {sverigeDetails.cities.map((item) => (
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
