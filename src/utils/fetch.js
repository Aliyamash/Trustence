const REQUEST_TIMEOUT_MS = 10000;
const PRODUCTION_MEDIA_URL = "https://api.trust-ence.com";

function getApiBaseUrl() {
  // Server-rendered requests should stay inside the VPS when an internal URL
  // is configured. Browser requests must continue to use the public API URL.
  if (typeof window === "undefined" && process.env.API_INTERNAL_BASE_URL) {
    return process.env.API_INTERNAL_BASE_URL;
  }
  return process.env.NEXT_PUBLIC_API_BASE_URL;
}

function createUrl(baseUrl, pathname) {
  if (!baseUrl) throw new Error("API base URL is not configured");
  return `${baseUrl.replace(/\/$/, "")}/${pathname.replace(/^\//, "")}`;
}

async function parseResponse(res) {
  const contentType = res.headers.get("content-type") || "";
  const payload = contentType.includes("application/json") ? await res.json() : null;
  if (!res.ok) throw new Error(payload?.message || `Request failed with status ${res.status}`);
  return payload;
}

const getFetch = async (url, options = {}) => {
  const res = await fetch(createUrl(getApiBaseUrl(), url), {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    cache: options.cache || "no-store",
    next: options.next,
    signal: AbortSignal.timeout(options.timeout || REQUEST_TIMEOUT_MS),
  });
  const json = await parseResponse(res);
  return { status: res.status, data: json?.data, message: json?.message || "Success" };
};

const postFetch = async (url, body) => {
  const res = await fetch(createUrl(getApiBaseUrl(), url), {
    cache: "no-store",
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  return parseResponse(res);
};

const getPublicMediaBase = () => {
  const configured = process.env.NEXT_PUBLIC_MEDIA_URL?.replace(/\/$/, "") || "";
  return configured || PRODUCTION_MEDIA_URL;
};

const resolveMediaUrl = (source) => {
  if (!source || typeof source !== "string" || source.startsWith("data:")) return source;
  if (source.startsWith("http")) {
    const localAbsolute = /^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?(\/.*)$/i.exec(source);
    if (localAbsolute && !/^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/i.test(getPublicMediaBase())) return createUrl(getPublicMediaBase(), localAbsolute[3]);
    return source;
  }
  return createUrl(getPublicMediaBase(), source);
};

export { getFetch, postFetch, resolveMediaUrl, getPublicMediaBase };
