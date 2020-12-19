import { HotSearchInterface } from "../interfaces/hot-search.interface";
import dayjs from "dayjs";
import path from "path";
import { ARCHIVE_FOLDER_PATH, JSON_SUFFIX } from "../Constants";
import fs from "fs";

export async function writeToArchIve(hss: HotSearchInterface[]) {
  const currDate = dayjs().format("YYYY-MM-DD--HH-mm");
  const filePath = path.resolve(ARCHIVE_FOLDER_PATH, currDate + JSON_SUFFIX);
  fs.writeFileSync(filePath, JSON.stringify(hss, null, 2));
}
