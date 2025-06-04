// 导航栏滚动效果
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.classList.add('scroll-down');
        header.classList.remove('scroll-up');
    } else {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    
    lastScrollTop = scrollTop;
});

// 移动端菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // 关闭移动端菜单
            if (navLinks.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        }
    });
});

// 标签页切换
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 移除所有活动状态
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // 添加当前活动状态
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// 多层滑动效果
const parallaxContainer = document.querySelector('.parallax-container');
const parallaxLayers = document.querySelectorAll('.parallax-layer');
const portfolioShowcaseItems = document.querySelectorAll('.portfolio-showcase .portfolio-item');

// 为每个作品项目分配不同的层级
portfolioShowcaseItems.forEach((item, index) => {
    // 根据索引分配不同的层级类
    const layerClass = `parallax-item-${index + 1}`;
    item.classList.add(layerClass);
    
    // 设置初始位置
    const rect = item.getBoundingClientRect();
    item.dataset.initialTop = rect.top;
    item.dataset.initialRight = rect.right;
});

// 滚动效果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // 不同层的滑动速度
    parallaxLayers.forEach(layer => {
        let speed = 0;
        
        if (layer.classList.contains('parallax-layer-back')) {
            speed = 0.1; // 背景层最慢
        } else if (layer.classList.contains('parallax-layer-base')) {
            speed = 0.3; // 基础层
        } else if (layer.classList.contains('parallax-layer-front')) {
            speed = 0.5; // 前景层
        } else if (layer.classList.contains('parallax-layer-fore')) {
            speed = 0.7; // 更前景层
        } else if (layer.classList.contains('parallax-layer-extra')) {
            speed = 0.9; // 最前景层最快
        }
        
        const yPos = -(scrolled * speed);
        layer.style.transform = `translateY(${yPos}px)`;
    });
    
    // 作品展示区域的浮动效果 - 每个项目有不同的滑动速度
    portfolioShowcaseItems.forEach((item, index) => {
        // 根据项目位置分配不同的速度
        let itemSpeed = 0;
        
        // 根据项目在页面中的位置分配不同的速度
        if (index === 0) {
            itemSpeed = 0.15; // 左上角项目
        } else if (index === 1) {
            itemSpeed = 0.25; // 中上项目
        } else if (index === 2) {
            itemSpeed = 0.35; // 右上项目
        } else if (index === 3) {
            itemSpeed = 0.45; // 左下项目
        } else if (index === 4) {
            itemSpeed = 0.55; // 中下项目
        } else if (index === 5) {
            itemSpeed = 0.65; // 右下项目
        } else if (index === 6) {
            itemSpeed = 0.25; // 中上项目
        } else if (index === 7) {
            itemSpeed = 0.35; // 中上项目
        } else if (index === 8) {
            itemSpeed = 0.45; // 中上项目
        }else if (index === 9) {
            itemSpeed = 0.35; // 右下项目
        } else if (index === 10) {
            itemSpeed = 0.45; // 中上项目
        } else if (index === 11) {
            itemSpeed = 0.25; // 中上项目
        } else if (index === 12) {
            itemSpeed = 0.55; // 中上项目
        }
        
        
        // 计算垂直位置变化
        const yPos = -(scrolled * itemSpeed);
        
        // 保持原有的旋转角度
        const rotation = item.style.transform.match(/rotate\(([^)]+)\)/);
        const rotationValue = rotation ? rotation[1] : '0deg';
        
        // 应用变换
        item.style.transform = `translateY(${yPos}px) rotate(${rotationValue})`;
        
        // 添加轻微的左右移动，增强立体感
        const xOffset = Math.sin(scrolled * 0.001 + index) * 5;
        item.style.transform += ` translateX(${xOffset}px)`;
    });
    
    // 滚动指示器淡出效果
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (scrolled > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '0.7';
        }
    }
});

// 作品展示区域点击效果
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        alert(`查看 ${title} 详情`);
    });
});

// 鼠标悬停效果
const hoverLiftElements = document.querySelectorAll('.hover-lift');
hoverLiftElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-5px)';
        element.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translateY(0)';
        element.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
    });
});

// 动画效果
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .stat-item, .tab-content');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// 初始化动画状态
document.querySelectorAll('.service-card, .portfolio-item, .stat-item, .tab-content').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
});

// 监听滚动事件
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        // 这里可以添加表单验证逻辑
        
        // 模拟表单提交
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = '发送中...';
        
        // 模拟API请求延迟
        setTimeout(() => {
            // 显示成功消息
            alert('感谢您的留言！我们会尽快回复您。');
            
            // 重置表单
            contactForm.reset();
            
            // 恢复按钮状态
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }, 1500);
    });
}

// 视频占位符点击效果
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        // 这里添加视频播放逻辑
        alert('视频播放功能待实现');
    });
}

// 添加页面加载动画
window.addEventListener('load', () => {
    // 检查是否已经存在预加载器
    const existingPreloader = document.querySelector('.preloader');
    if (existingPreloader) {
        setTimeout(() => {
            existingPreloader.classList.add('fade-out');
            setTimeout(() => {
                existingPreloader.remove();
                document.body.classList.add('loaded');
            }, 500);
        }, 1000);
    } else {
        // 如果不存在，则创建一个
        const preloader = document.createElement('div');
        preloader.className = 'preloader';
        document.body.appendChild(preloader);
        
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.remove();
                document.body.classList.add('loaded');
            }, 500);
        }, 1000);
    }
    
    // 初始化作品展示区域的浮动效果
    portfolioItems.forEach((item, index) => {
        // 设置初始位置和动画
        const delay = index * 0.2; // 错开动画开始时间
        item.style.animationDelay = `${delay}s`;
        
        // 添加鼠标悬停效果
        item.addEventListener('mouseenter', () => {
            item.style.transform += ' scale(1.05)';
            item.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', () => {
            // 恢复原始变换
            const rotation = item.style.transform.match(/rotate\(([^)]+)\)/);
            const rotationValue = rotation ? rotation[1] : '0deg';
            item.style.transform = `rotate(${rotationValue})`;
            item.style.zIndex = (index + 1).toString();
        });
    });
    
    // 添加滚动指示器动画
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.style.opacity = '0';
        setTimeout(() => {
            scrollIndicator.style.opacity = '0.7';
            scrollIndicator.style.transition = 'opacity 1s ease';
        }, 1000);
    }
});

// 添加视差滚动效果
const parallaxEffect = () => {
    const scrolled = window.pageYOffset;
    const portfolioShowcase = document.querySelector('.portfolio-showcase');
    
    if (portfolioShowcase) {
        // 根据滚动位置调整作品展示区域的位置
        const yPos = -(scrolled * 0.2);
        portfolioShowcase.style.transform = `translateY(${yPos}px)`;
    }
};

window.addEventListener('scroll', parallaxEffect);

// 添加平滑滚动到指定部分
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
};

// 为导航链接添加点击事件
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        scrollToSection(sectionId);
    });
});

// 为CTA按钮添加点击事件
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        scrollToSection('services');
    });
}

// 添加滚动动画
const scrollObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, scrollObserverOptions);

// 观察所有需要动画的元素
document.querySelectorAll('.service-card, .portfolio-item, .about-content').forEach(element => {
    scrollObserver.observe(element);
});

// 滚动指示器点击事件
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
            window.scrollTo({
                top: servicesSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
}

// 视差滚动效果
window.addEventListener('scroll', () => {
    const parallaxItems = document.querySelectorAll('.parallax-scroll');
    
    parallaxItems.forEach(item => {
        const speed = 0.05;
        const rect = item.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const yPos = -(scrolled * speed);
            item.style.transform = `translateY(${yPos}px)`;
        }
    });
});

// 服务卡片动画
const serviceCards = document.querySelectorAll('.service-card');
const serviceObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            serviceObserver.unobserve(entry.target);
        }
    });
}, serviceObserverOptions);

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    serviceObserver.observe(card);
});

// 作品集项目动画
const portfolioObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
            portfolioObserver.unobserve(entry.target);
        }
    });
}, portfolioObserverOptions);

portfolioItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    portfolioObserver.observe(item);
});

// 统计数字动画
const statItems = document.querySelectorAll('.stat-item h3');
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const targetNumber = parseInt(target.textContent);
            let currentNumber = 0;
            const duration = 2000; // 动画持续时间（毫秒）
            const step = targetNumber / (duration / 16); // 每16ms增加的数量
            
            const updateNumber = () => {
                currentNumber += step;
                if (currentNumber < targetNumber) {
                    target.textContent = Math.floor(currentNumber) + (target.textContent.includes('+') ? '+' : '');
                    requestAnimationFrame(updateNumber);
                } else {
                    target.textContent = targetNumber + (target.textContent.includes('+') ? '+' : '');
                }
            };
            
            updateNumber();
            statObserver.unobserve(target);
        }
    });
}, portfolioObserverOptions);

statItems.forEach(item => {
    statObserver.observe(item);
});

// 添加鼠标跟随效果
document.addEventListener('mousemove', (e) => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    document.body.appendChild(cursor);
    
    setTimeout(() => {
        cursor.remove();
    }, 1000);
});

// 添加滚动进度条和返回顶部按钮
document.addEventListener('DOMContentLoaded', () => {
    // 添加滚动进度条
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // 添加平滑滚动到顶部按钮
    const scrollTopButton = document.createElement('button');
    scrollTopButton.className = 'scroll-top-button';
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('show');
        } else {
            scrollTopButton.classList.remove('show');
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// 添加滚动进度指示器
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const progressIndicator = document.createElement('div');
    progressIndicator.className = 'scroll-progress-indicator';
    document.body.appendChild(progressIndicator);

    // 为每个部分创建指示点
    sections.forEach((section, index) => {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        dot.setAttribute('data-section', section.id);
        progressIndicator.appendChild(dot);
        
        // 点击指示点滚动到对应部分
        dot.addEventListener('click', () => {
            scrollToSection(section.id);
        });
    });

    // 更新活动指示点
    const updateActiveDot = () => {
        const dots = document.querySelectorAll('.progress-dot');
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveDot);
    window.addEventListener('load', updateActiveDot);
});

// 添加全屏滚动效果
const fullscreenSections = document.querySelectorAll('.fullscreen-section');
fullscreenSections.forEach(section => {
    const bg = section.querySelector('.parallax-bg');
    if (bg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const speed = 0.5;
            bg.style.transform = `scale(1.1) translateY(${scrolled * speed}px)`;
        });
    }
});

// 添加滚动触发动画
const scrollTriggerElements = document.querySelectorAll('.scroll-trigger');
const scrollTriggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            scrollTriggerObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

scrollTriggerElements.forEach(element => {
    scrollTriggerObserver.observe(element);
});

// 添加3D卡片效果
const cards3D = document.querySelectorAll('.card-3d');
cards3D.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// 添加全屏背景视频效果
const fullscreenVideo = document.querySelector('.fullscreen-video');
if (fullscreenVideo) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const speed = 0.5;
        fullscreenVideo.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// 添加分割布局效果
const splitLayouts = document.querySelectorAll('.split-layout');
splitLayouts.forEach(layout => {
    const leftHalf = layout.querySelector('.split-half.left');
    const rightHalf = layout.querySelector('.split-half.right');
    
    if (leftHalf && rightHalf) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    window.addEventListener('scroll', () => {
                        const scrolled = window.pageYOffset;
                        const rect = layout.getBoundingClientRect();
                        const viewportHeight = window.innerHeight;
                        
                        // 只有当元素在视口中且距离顶部小于视口高度的30%时才触发动画
                        if (rect.top < viewportHeight * 0.3 && rect.bottom > 0) {
                            const speed = 0.2;
                            const progress = Math.min(1, (viewportHeight * 0.3 - rect.top) / (viewportHeight * 0.3));
                            leftHalf.style.transform = `translateX(-${scrolled * speed * progress}px)`;
                            rightHalf.style.transform = `translateX(${scrolled * speed * progress}px)`;
                        }
                    });
                }
            });
        }, { 
            threshold: 0.9, // 增加阈值到0.9，确保元素几乎完全进入视口才触发
            rootMargin: '0px 0px -200px 0px' // 增加底部边距，进一步延迟触发
        });
        
        observer.observe(layout);
    }
});

// 移除随机显示作品集项目的功能
document.addEventListener('DOMContentLoaded', () => {
    // 初始化作品集项目
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });
});

// 视频播放功能
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const videoModal = document.querySelector('.video-modal');
    const portfolioVideo = document.getElementById('portfolio-video');
    const closeVideo = document.querySelector('.close-video');

    if (portfolioItems && videoModal && portfolioVideo && closeVideo) {
        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                const videoPath = item.getAttribute('data-video');
                if (videoPath) {
                    portfolioVideo.src = videoPath;
                    videoModal.classList.add('active');
                    portfolioVideo.play();
                }
            });
        });

        // 关闭视频
        closeVideo.addEventListener('click', () => {
            videoModal.classList.remove('active');
            portfolioVideo.pause();
            portfolioVideo.src = '';
        });

        // 点击模态框背景关闭视频
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoModal.classList.remove('active');
                portfolioVideo.pause();
                portfolioVideo.src = '';
            }
        });

        // ESC键关闭视频
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                videoModal.classList.remove('active');
                portfolioVideo.pause();
                portfolioVideo.src = '';
            }
        });
    }
});

// 图片展示功能
const imageModal = document.querySelector('.image-modal');
const portfolioImage = document.getElementById('portfolio-image');
const closeImage = document.querySelector('.close-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const galleryCounter = document.querySelector('.gallery-counter');

let currentImageIndex = 0;
let imageSequence = [];

function updateGalleryCounter() {
    galleryCounter.textContent = `${currentImageIndex + 1} / ${imageSequence.length}`;
}

function showImage(index) {
    if (index >= 0 && index < imageSequence.length) {
        currentImageIndex = index;
        portfolioImage.src = imageSequence[index];
        updateGalleryCounter();
    }
}

document.querySelectorAll('.portfolio-item[data-type="image"]').forEach(item => {
    item.addEventListener('click', () => {
        const fullImageSrc = item.getAttribute('data-full-image');
        const fileType = fullImageSrc.split('.').pop().toLowerCase();
        
        if (fileType === 'pdf') {
            // 如果是PDF文件，直接在新窗口打开
            window.open(fullImageSrc, '_blank');
        } else {
            imageSequence = [fullImageSrc];
            currentImageIndex = 0;
            showImage(0);
            imageModal.style.display = 'flex';
        }
    });
});

prevBtn.addEventListener('click', () => {
    showImage(currentImageIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showImage(currentImageIndex + 1);
});

closeImage.addEventListener('click', () => {
    imageModal.style.display = 'none';
    imageSequence = [];
    currentImageIndex = 0;
});

// 点击模态框外部关闭
window.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
        imageSequence = [];
        currentImageIndex = 0;
    }
}); 