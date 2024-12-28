
import { TEMPLATE_DIR, ROOT_DIR, BUNNAR_CONFIG } from "../utils/path";
import { copyTemplate, pathExist } from "../utils/directory";
/**
 * Create a new bunnar project
 *
 */
const bunnarCreate = async () => {
    if (!pathExist(BUNNAR_CONFIG)) {
        copyTemplate(TEMPLATE_DIR, ROOT_DIR);
    }
};

bunnarCreate();