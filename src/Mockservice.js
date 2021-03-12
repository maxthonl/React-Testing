import { v4 as uuidv4 } from "uuid";

export async function getUuids() {
  return await new Promise((resolve, rejecct) => {
    setTimeout(() => {
      // let arr = Array.apply(null, new Array(4))
      // let arr = new Array(4).fill(null);
      let arr = [...new Array(4)];
      resolve(arr.map((x) => uuidv4()));
    }, 0);
  });
}
