/**
 * Extend the basic Item
 * @extends {Item}
 */
import { SYSTEM } from "../configs/system.mjs";

export default class SystemItem extends Item {
    constructor(data, context) {
        if (data.type == "card") {
            data.img = `${SYSTEM.assets_path}/card_token.png`
        }
        super(data, context);
    }
};