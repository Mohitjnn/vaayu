async function getData() {
  const response = await fetch(`${process.env.URL}/data.json`);
  // const response = await fetch("http://localhost:3000/data.json");

  return response.json();
}

export default getData;
