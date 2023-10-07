export async function getData() {
    const res = await fetch("https://server.hoster-dev.kz/api/home", {
      cache: "no-store",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
}