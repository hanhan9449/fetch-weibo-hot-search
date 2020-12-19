import * as fs from "fs";
import { ARCHIVE_FOLDER_PATH } from "../Constants";

export async function init() {
  if (!fs.existsSync(ARCHIVE_FOLDER_PATH)) {
    fs.mkdirSync(ARCHIVE_FOLDER_PATH);
  }
}
