export async function getData(id) {
    try {
      const res = await fetch(`http://138.197.112.193:3000/api/home/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
  
      return res.json();
    } catch (error) {
      console.error("Error fetching data:", error);
  
      throw error;
    }
  }