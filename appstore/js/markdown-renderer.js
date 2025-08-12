// js/markdown-renderer.js

// 引入强大的 marked.js 库用于解析 Markdown
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

// 自定义渲染规则，以匹配您的特定样式需求
const renderer = new marked.Renderer();

// --- 自定义标题渲染 ---
renderer.heading = (text, level) => {
  const sizes = { 1: 'text-3xl', 2: 'text-2xl', 3: 'text-xl' };
  return `<h${level} class="${sizes[level]} font-bold mt-8 mb-4 text-slate-800 dark:text-slate-200">${text}</h${level}>`;
};

// --- 自定义列表渲染 ---
renderer.list = (body, ordered) => {
  const tag = ordered ? 'ol' : 'ul';
  return `<${tag} class="list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300 mb-4">${body}</${tag}>`;
};

// --- 自定义引用块渲染 ---
renderer.blockquote = (quote) => {
  return `<blockquote class="border-l-4 border-current p-4 italic bg-gray-100 dark:bg-slate-800 rounded-r-lg my-4">${quote}</blockquote>`;
};

// --- 自定义代码块渲染 ---
renderer.code = (code, language) => {
  return `<pre><code class="block bg-slate-100 dark:bg-slate-800 rounded-lg p-4 text-sm overflow-x-auto">${code}</code></pre>`;
};
renderer.codespan = (code) => {
    return `<code class="bg-slate-200 dark:bg-slate-700 rounded-md px-1.5 py-1 text-sm font-mono">${code}</code>`;
}

// --- 自定义段落渲染 ---
renderer.paragraph = (text) => {
    // 检查是否是自定义的特殊组件
    if (text.startsWith('[LINKS_GRID]')) {
        return createLinksGrid(text);
    }
    if (text.startsWith('[SPONSORS]')) {
        return createSponsorsGrid(text);
    }
    return `<p class="mb-4 leading-relaxed">${text}</p>`;
};

// --- 自定义链接渲染 ---
renderer.link = (href, title, text) => {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="theme-text font-semibold hover:underline">${text}</a>`;
};


// --- 特殊组件渲染函数 ---

// 创建链接卡片网格
function createLinksGrid(text) {
    const items = text.replace('[LINKS_GRID]', '').trim().split('\n');
    let gridHtml = '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">';
    items.forEach(item => {
        const [title, url, description] = item.split('|').map(s => s.trim());
        if(title && url && description) {
            gridHtml += `
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="custom-link-card flex items-center gap-4 p-4 rounded-xl shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 bg-gray-50 dark:bg-slate-800">
                    <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg text-white theme-bg-active">
                        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.72M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.72-1.72" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                    <div>
                        <h4 class="font-semibold text-slate-700 dark:text-slate-300">${title}</h4>
                        <p class="text-xs text-slate-500 dark:text-slate-400">${description}</p>
                    </div>
                </a>
            `;
        }
    });
    gridHtml += '</div>';
    return gridHtml;
}

// 创建赞助商网格
function createSponsorsGrid(text) {
    const items = text.replace('[SPONSORS]', '').trim().split('\n');
    let gridHtml = '<div class="flex flex-wrap justify-center items-center gap-8 my-6">';
    items.forEach(item => {
        const [title, logoUrl] = item.split('|').map(s => s.trim());
        if(title && logoUrl) {
            gridHtml += `
                <div class="text-center">
                    <img src="${logoUrl}" alt="${title}" class="w-32 h-32 rounded-lg shadow-md mx-auto">
                    <p class="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">${title}</p>
                </div>
            `;
        }
    });
    gridHtml += '</div>';
    return gridHtml;
}


// --- 导出主函数 ---
export async function fetchAndRenderMarkdown(filePath, container) {
    if (!filePath) {
        container.innerHTML = '';
        return;
    }
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const markdown = await response.text();
        container.innerHTML = marked(markdown, { renderer });
    } catch (error) {
        console.error(`Failed to fetch or render markdown from ${filePath}:`, error);
        container.innerHTML = `<p class="text-red-500">无法加载内容文件: ${filePath}</p>`;
    }
}
