async function getData() {
  const response = await fetch(`${process.env.URL}/data.json`,{ cache: "no-store" });
  // const response = await fetch("http://localhost:3000/data.json", { cache: "no-store" });

  return response.json();
}

export default getData;
