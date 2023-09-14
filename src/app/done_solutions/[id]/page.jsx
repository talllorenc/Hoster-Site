async function getData(id) {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' });
  
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
  
      return res.json();
  
    } catch (error) {
      console.error("Error fetching data:", error);
  
      throw error; 
    }
  }
  
  const SolutionsId = async ({params}) => {
    const data = await getData(params.id);
    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
  
    )
  }
  
  export default SolutionsId