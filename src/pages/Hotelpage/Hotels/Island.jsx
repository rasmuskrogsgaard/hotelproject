import { useFetch } from "../../../hooks/useFetch";
import style from "./island.module.scss";
export const Island = () => {
  const {
    data: islandDetails,
    loading,
    error,
  } = useFetch("http://localhost:4000/destinations/island");

  if (loading) return <div>Loading...</div>;
  if (error || !islandDetails || !islandDetails.cities) {
    return <div>Error: Unable to fetch data</div>;
  }

  return (
    <div className={style.container}>
      <p>{islandDetails.description}</p>
      <div className={style.cityList}>
        {islandDetails.cities.map((item) => (
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
