const getFetch = async (url) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (res.ok) {
    const data = await res.json();
    return data.data;
  } else {
    throw new Error(`Difficulty receiving information : ${res.status}`);
  }
};

const postFetch = async (url, body) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body)
  });

  return await res.json();
};
export { getFetch , postFetch };
