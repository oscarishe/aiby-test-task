import Localization  from "./modules/localization/Localization";
import { getLang } from './util/util';
import './style/style.css';
import { addSwitcher } from "./modules/switcher/switcher";

const lang = getLang();
const local = new Localization(lang);
local.setText();
addSwitcher();