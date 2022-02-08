import main from "./main";
import dark from "./dark";
import { Theme } from "../../types/themes";

const complete = (theme: Theme) => {
  return { ...main, ...theme };
};

const themes = { dark: complete(dark) };

export default themes;
