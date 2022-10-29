export const BASE_URL =
  process.env.NEXT_PUBLIC_NODE_ENV === "production"
    ? "http://157.245.106.101:3001"
    : process.env.NEXT_PUBLIC_SERVER_BASE_URL;
    
export const IMAGE_BASE_URL = `${BASE_URL}/uploads`;