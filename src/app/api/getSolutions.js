export async function getData() {
    const res = await fetch("http://138.197.112.193:3000/api/home", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
}