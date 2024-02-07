import { useFetch } from "../../../hooks/useFetch";
import style from "./danmark.module.scss";
export const Danmark = () => {
  const {
    data: denmarkDetails,
    loading,
    error,
  } = useFetch("http://localhost:4000/destinations/danmark");
  console.log(denmarkDetails);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* {denmarkDetails.map((item) => (
        <section className={style.danmarkSection}>
          <p>{item.cities}</p>
          <img
            src={`../../../src/assets/images/${denmarkDetails.CountryImage.country_image_filename}`}
            alt={item.name}
          />
        </section>
      ))} */}
    </div>
  );
};
