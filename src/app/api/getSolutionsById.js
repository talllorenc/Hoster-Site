export async function getData(id) {
    try {
      const res = await fetch(`https://server.hoster-dev.kz/api/home/${id}`, {
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