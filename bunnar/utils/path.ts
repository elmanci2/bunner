import path from "path";
import fs from "fs";

const ROOT_DIR = process.cwd();

const PROJECT_DIR = ROOT_DIR;

const PACKAGE_JSON = path.join(ROOT_DIR, 'package.json');

const BUNNAR_CONFIG = path.join(ROOT_DIR, 'bunnar.config.ts');

const TEMPLATE_DIR = path.join(__dirname, '../template/res');

const SRC_DIR = path.join(ROOT_DIR, 'src');

const MAIN_FILE = path.join(SRC_DIR, 'main.ts');

const ROUTS_LIST = path.join(SRC_DIR, 'http/routes/index.ts');

const findRootDir = (startDir: string): string | null => {
    let currentDir = startDir;
    while (currentDir !== path.parse(currentDir).root) {
        if (fs.existsSync(path.join(currentDir, 'package.json'))) {
            return currentDir;
        }
        currentDir = path.dirname(currentDir);
    }
    return null;
};

export { PROJECT_DIR, ROOT_DIR, findRootDir, PACKAGE_JSON, BUNNAR_CONFIG, TEMPLATE_DIR, ROUTS_LIST, SRC_DIR, MAIN_FILE };
