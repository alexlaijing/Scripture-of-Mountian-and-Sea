class LanguageManager {
    constructor() {
        this.currentLang = 'en'; // 默认使用英文
        this.supportedLangs = ['zh', 'en', 'ko', 'ja'];
        this.translations = window.translations || {};
        this.init();
    }

    init() {
        // 获取用户保存的语言偏好
        const savedLang = localStorage.getItem('preferred_language');
        if (savedLang && this.supportedLangs.includes(savedLang)) {
            this.currentLang = savedLang;
        } else {
            // 获取浏览器语言
            const browserLang = navigator.language.split('-')[0];
            // 如果浏览器语言在支持的语言列表中，使用浏览器语言
            // 否则默认使用英文
            this.currentLang = this.supportedLangs.includes(browserLang) ? browserLang : 'en';
        }

        // 创建语言选择器
        this.createLanguageSelector();
        
        // 更新页面内容
        this.updateContent();
    }

    createLanguageSelector() {
        const langSelector = document.createElement('div');
        langSelector.className = 'language-selector';
        
        const currentLangBtn = document.createElement('button');
        currentLangBtn.className = 'current-lang';
        currentLangBtn.innerHTML = this.getLangDisplayName(this.currentLang);
        
        const dropdown = document.createElement('div');
        dropdown.className = 'lang-dropdown';
        
        this.supportedLangs.forEach(lang => {
            const option = document.createElement('a');
            option.href = '#';
            option.textContent = this.getLangDisplayName(lang);
            option.onclick = (e) => {
                e.preventDefault();
                this.setLanguage(lang);
            };
            dropdown.appendChild(option);
        });
        
        langSelector.appendChild(currentLangBtn);
        langSelector.appendChild(dropdown);
        
        // 添加到导航栏
        const navLinks = document.querySelector('.nav-links');
        navLinks.appendChild(langSelector);
        
        // 添加点击事件
        currentLangBtn.addEventListener('click', () => {
            dropdown.classList.toggle('show');
        });
        
        // 点击其他地方关闭下拉菜单
        document.addEventListener('click', (e) => {
            if (!langSelector.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });
    }

    getLangDisplayName(lang) {
        const displayNames = {
            'zh': '中文',
            'en': 'English',
            'ko': '한국어',
            'ja': '日本語'
        };
        return displayNames[lang] || lang;
    }

    setLanguage(lang) {
        if (this.supportedLangs.includes(lang)) {
            this.currentLang = lang;
            localStorage.setItem('preferred_language', lang);
            this.updateContent();
            document.querySelector('.current-lang').textContent = this.getLangDisplayName(lang);
        }
    }

    updateContent() {
        // 更新所有带有data-i18n属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                return null;
            }
        }
        
        return translation;
    }
}

// 初始化语言管理器
document.addEventListener('DOMContentLoaded', () => {
    window.langManager = new LanguageManager();
}); 