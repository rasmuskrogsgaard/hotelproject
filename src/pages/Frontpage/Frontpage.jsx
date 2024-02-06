import { useFetch } from "../../hooks/useFetch";

const Frontpage = () => {
  const { data: images, loading, error } = useFetch('http://localhost:4000/imagelist');

  if (loading) {    
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(images);

  const slicedImages = images.slice(0, 3);

  return (
    <div>
      <h1>Frontpage</h1>
      {slicedImages.map((item) => (
        <section key={item.id}>
          <img src={item.filename} alt={item.title} />
          
        </section>
        
      ))}
      
    </div>
    
  );
};

export default Frontpage;
