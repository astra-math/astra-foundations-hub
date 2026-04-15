const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Remove all font-weight utilities
            let newContent = content.replace(/\b(font-thin|font-extralight|font-light|font-normal|font-medium|font-semibold|font-bold|font-extrabold|font-black|font-serif|font-mono|font-sans|font-heading)\b/g, '');
            
            // Clean up classNames
            newContent = newContent.replace(/className="([^"]+)"/g, (match, p1) => {
                let cleaned = p1.replace(/\s+/g, ' ').trim();
                return cleaned ? `className="${cleaned}"` : '';
            });

            // Re-apply headings: h1, h2, h3, h4, h5, h6 need font-heading font-semibold
            newContent = newContent.replace(/<(h[1-6])(.*?)>/g, (match, tag, rest) => {
                if (rest.includes('className="')) {
                    // Inject font-heading font-semibold
                    let replaced = rest.replace(/className="([^"]*)"/, (m, cls) => {
                        let classes = new Set(cls.split(' ').filter(Boolean));
                        classes.add('font-heading');
                        classes.add('font-semibold');
                        return `className="${Array.from(classes).join(' ')}"`;
                    });
                    return `<${tag}${replaced}>`;
                } else if (!rest.includes('className=')) {
                    return `<${tag}${rest} className="font-heading font-semibold">`;
                }
                return match;
            });

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

processDir(path.join(__dirname, 'src'));
