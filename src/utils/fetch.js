
const getFetch = async (url) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const json = await res.json(); 

  if (res.ok) {
    return {
      status: res.status,
      data: json.data,  
      message: json.message || "Success",
    };
  } else {
    throw new Error(`خطا در دریافت اطلاعات: ${res.status} - ${json.message || "Unknown error"}`);
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
