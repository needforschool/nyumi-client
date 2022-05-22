import "styled-components";
import { MainTheme, Theme } from "./types/themes";

declare module "styled-components" {
  export interface DefaultTheme extends Theme, MainTheme {}
}
