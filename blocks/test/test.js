import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
    const cfg = readBlockConfig(block);
    block.textContent = '';
    const testPath = cfg.footer || '/test';
    const resp = await fetch(`${testPath}.plain.html`);
    const html = await resp.text();
    const test = document.createElement('div');
    test.innerHTML = html;
    await decorateIcons(test);
    block.append(test);
}
