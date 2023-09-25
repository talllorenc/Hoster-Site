export async function getData() {
    const res = await fetch("http://localhost:8080/api/home", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
}