export async function fetchHeadphonesData() {
  const res = await fetch("/data.json");
  const json = await res.json();

  const filteredData = json.filter(
    (item: { category: string }) => item.category === "headphones"
  );

  return filteredData;
}

export async function fetchEarphonesData() {
  const res = await fetch("/data.json");
  const json = await res.json();

  const filteredData = json.filter(
    (item: { category: string }) => item.category === "earphones"
  );

  return filteredData;
}

export async function fetchSpeakersData() {
  const res = await fetch("/data.json");
  const json = await res.json();

  const filteredData = json.filter(
    (item: { category: string }) => item.category === "speakers"
  );

  return filteredData;
}

export async function fetchDataBySlug(slug: string) {
  const res = await fetch("/data.json");
  const json = await res.json();

  const filteredData = json.filter(
    (item: { slug: string }) => item.slug === slug
  );

  return filteredData;
}
