import fs from "fs";
import path from "path";

/**
 * Make a directory
 * @param dir 
 */
export function makeDirectory(dir: string) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}


/** 
 * Copy directory recursively
 * @param from - The source directory path
 * @param to - The destination directory path
 */
export function copyTemplate(from: string, to: string) {
    if (fs.existsSync(from)) {
        if (!fs.existsSync(to)) {
            fs.mkdirSync(to, { recursive: true });
        }

        const items = fs.readdirSync(from);

        items.forEach(item => {
            const fromPath = path.join(from, item);
            const toPath = path.join(to, item);

            if (fs.lstatSync(fromPath).isDirectory()) {
                copyTemplate(fromPath, toPath);
            } else {
                try {
                    fs.copyFileSync(fromPath, toPath);
                } catch (err) {
                    console.error(`Error al copiar el archivo: ${fromPath} a ${toPath}`, err);
                }
            }
        });
    } else {
        console.error('Error: El directorio origen no existe:', from);
    }
}

export const pathExist = (dir: string) => {
    return fs.existsSync(dir);
};
