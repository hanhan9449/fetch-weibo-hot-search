import { HotSearchInterface } from "../interfaces/hot-search.interface";
import dayjs from "dayjs";
import * as fs from "fs";
import {
  CURRENT_FILE_PATH,
} from "../Constants";

export async function writeToCurrent(hss: HotSearchInterface[]) {
  let ws = fs.createWriteStream(CURRENT_FILE_PATH);
  ws.write(`## 下面是今天${dayjs().format("HH:mm")}的热搜\n\n`);
  let md = hss
    .map((hs) => {
      return `- [${hs.title}](${hs.url})`;
    })
    .join("\n");
  ws.write(md);
}
