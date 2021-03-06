import { getLogger } from "./utils/logger.util";
import { getHotSearches } from "./services/getHotSearches";
import { writeToCurrent } from "./services/writeToCurrent";
import "dayjs/locale/zh-cn";
import dayjs from "dayjs";
import { writeToArchIve } from "./services/writeToArchive";
import { init } from "./services/init";

async function main() {
  await init();
  dayjs.locale("zh-cn");
  const hss = await getHotSearches();
  writeToArchIve(hss);
  writeToCurrent(hss);
}

export const LOGGER = getLogger("fetch-weibo-resou");
main().catch((e) => {
  LOGGER.error(e);
});
