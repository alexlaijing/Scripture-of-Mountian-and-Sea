// 确保 translations 对象存在
if (typeof window.translations === 'undefined') {
    window.translations = {};
}

const translations = {
    'zh': {
        'nav': {
            'home': '首页',
            'services': '服务',
            'portfolio': '作品集',
            'about': '关于我们',
            'contact': '联系我们'
        },
        'hero': {
            'title': '国际化视频制作服务',
            'subtitle': '为全球客户提供高效、优质的一站式视频解决方案',
            'cta': '了解更多',
            'scrollDown': '向下滚动'
        },
        'services': {
            'title': '我们的服务',
            'custom': {
                'title': '定制化\n模版设计',
                'desc': '短视频、广告、宣传片等多场景'
            },
            'editing': {
                'title': '专业\n视频剪辑',
                'desc': '从粗剪到精修，融合特效、调色、音效等全流程服务'
            },
            'tvc': {
                'title': 'TVC\n广告制作',
                'desc': '专注于高品质电视广告、品牌宣传片及商业视频制作'
            },
            'creative': {
                'title': '国际化\n创意支持',
                'desc': '深耕海外本土B端市场需求，输出符合全球审美的优质内容'
            }
        },
        'portfolio': {
            'title': '精选作品',
            'clickToPlay': '点击播放视频',
            'items': {
                'fashion': '时尚短视频展示',
                '3c': '3C产品剪辑后期',
                'product': '产品宣传片',
                'lookbook': 'LOOKBOOK拍摄制作',
                'fresh': '清新短视频展示',
                'honor': '荣耀耳机',
                'trend': '潮流预告短视频',
                'digital': '数字人商品简介',
                'live': '潮流直播预告',
                'company': '公司品宣',
                'intro': '片头片尾设计'
            }
        },
        'partners': {
            'title': '合作伙伴'
        },
        'about': {
            'title': '关于我们',
            'content': '1、专业团队：资深剪辑师、动画设计师、导演与策划团队协同作业，精准把控创意与质量\n2、全球视野：洞悉海内外市场趋势，融合本土化元素与国际化标准\n3、高效交付：严格的项目管理流程，确保高性价比与时效性',
            'stats': {
                'projects': '完成项目',
                'clients': '国际化客户',
                'experience': '行业经验'
            }
        },
        'footer': {
            'contact': '联系方式',
            'email': '邮箱',
            'phone': '电话',
            'rights': '© 2024 ZKMEDIA. All rights reserved.'
        }
    },
    'en': {
        'nav': {
            'home': 'Home',
            'services': 'Services',
            'portfolio': 'Portfolio',
            'about': 'About',
            'contact': 'Contact'
        },
        'hero': {
            'title': 'International Video Production Services',
            'subtitle': 'Providing efficient, high-quality one-stop video solutions for global clients',
            'cta': 'Learn More',
            'scrollDown': 'Scroll Down'
        },
        'services': {
            'title': 'Our Services',
            'custom': {
                'title': 'Custom\nTemplate Design',
                'desc': 'Short videos, ads, promotional videos and more'
            },
            'editing': {
                'title': 'Professional\nVideo Editing',
                'desc': 'From rough cut to final polish, including effects, color grading, and sound design'
            },
            'tvc': {
                'title': 'TVC\nProduction',
                'desc': 'Specializing in high-quality TV commercials, brand videos and commercial production'
            },
            'creative': {
                'title': 'International\nCreative Support',
                'desc': 'Deep understanding of global B2B market needs, delivering content that meets international standards'
            }
        },
        'portfolio': {
            'title': 'Featured Works',
            'clickToPlay': 'Click to play video',
            'items': {
                'fashion': 'Fashion Short Video',
                '3c': '3C Product Post-production',
                'product': 'Product Promo',
                'lookbook': 'LOOKBOOK Production',
                'fresh': 'Fresh Short Video',
                'honor': 'Honor Earphones',
                'trend': 'Trend Preview Video',
                'digital': 'Digital Human Product Intro',
                'live': 'Trendy Live Preview',
                'company': 'Company Promotion',
                'intro': 'Intro & Outro Design'
            }
        },
        'partners': {
            'title': 'Our Partners'
        },
        'about': {
            'title': 'About Us',
            'content': '1. Professional Team: Senior editors, animation designers, directors and planning team working together\n2. Global Vision: Understanding of domestic and international market trends\n3. Efficient Delivery: Strict project management process ensuring cost-effectiveness and timeliness',
            'stats': {
                'projects': 'Completed Projects',
                'clients': 'International Clients',
                'experience': 'Years of Experience'
            }
        },
        'footer': {
            'contact': 'Contact',
            'email': 'Email',
            'phone': 'Phone',
            'rights': '© 2024 ZKMEDIA. All rights reserved.'
        }
    },
    'ko': {
        'nav': {
            'home': '홈',
            'services': '서비스',
            'portfolio': '포트폴리오',
            'about': '소개',
            'contact': '연락처'
        },
        'hero': {
            'title': '국제 비디오 제작 서비스',
            'subtitle': '글로벌 고객을 위한 효율적이고 고품질의 원스톱 비디오 솔루션',
            'cta': '더 알아보기',
            'scrollDown': '아래로 스크롤'
        },
        'services': {
            'title': '서비스',
            'custom': {
                'title': '맞춤형\n템플릿 디자인',
                'desc': '숏 비디오, 광고, 홍보 영상 등'
            },
            'editing': {
                'title': '전문\n비디오 편집',
                'desc': '러프 컷부터 최종 편집까지, 효과, 컬러 그레이딩, 사운드 디자인 포함'
            },
            'tvc': {
                'title': 'TVC\n제작',
                'desc': '고품질 TV 광고, 브랜드 비디오 및 상업용 영상 제작 전문'
            },
            'creative': {
                'title': '국제\n크리에이티브 지원',
                'desc': '글로벌 B2B 시장 요구에 대한 깊은 이해, 국제적 기준에 맞는 콘텐츠 제공'
            }
        },
        'portfolio': {
            'title': '주요 작품',
            'clickToPlay': '비디오 재생하기',
            'items': {
                'fashion': '패션 숏 비디오',
                '3c': '3C 제품 후반 작업',
                'product': '제품 홍보',
                'lookbook': '룩북 촬영 제작',
                'fresh': '신선한 숏 비디오',
                'honor': '아너 이어폰',
                'trend': '트렌드 프리뷰 비디오',
                'digital': '디지털 휴먼 제품 소개',
                'live': '트렌디한 라이브 프리뷰',
                'company': '회사 홍보',
                'intro': '인트로 & 아웃트로 디자인'
            }
        },
        'partners': {
            'title': '파트너사'
        },
        'about': {
            'title': '회사 소개',
            'content': '1. 전문 팀: 시니어 편집자, 애니메이션 디자이너, 감독 및 기획팀 협업\n2. 글로벌 비전: 국내외 시장 트렌드 이해\n3. 효율적인 납품: 엄격한 프로젝트 관리 프로세스로 비용 효율성과 적시성 보장',
            'stats': {
                'projects': '완료된 프로젝트',
                'clients': '국제 고객',
                'experience': '경력 연수'
            }
        },
        'footer': {
            'contact': '연락처',
            'email': '이메일',
            'phone': '전화',
            'rights': '© 2024 ZKMEDIA. All rights reserved.'
        }
    },
    'ja': {
        'nav': {
            'home': 'ホーム',
            'services': 'サービス',
            'portfolio': 'ポートフォリオ',
            'about': '会社概要',
            'contact': 'お問い合わせ'
        },
        'hero': {
            'title': '国際ビデオ制作サービス',
            'subtitle': 'グローバルクライアントのための効率的で高品質なワンストップビデオソリューション',
            'cta': '詳細を見る',
            'scrollDown': '下にスクロール'
        },
        'services': {
            'title': 'サービス内容',
            'custom': {
                'title': 'カスタム\nテンプレートデザイン',
                'desc': 'ショートビデオ、広告、プロモーションビデオなど'
            },
            'editing': {
                'title': 'プロフェッショナル\nビデオ編集',
                'desc': 'ラフカットから最終編集まで、エフェクト、カラーグレーディング、サウンドデザインを含む'
            },
            'tvc': {
                'title': 'TVC\n制作',
                'desc': '高品質なTVCM、ブランドビデオ、商業ビデオ制作の専門'
            },
            'creative': {
                'title': '国際\nクリエイティブサポート',
                'desc': 'グローバルB2B市場のニーズを深く理解し、国際基準に適合したコンテンツを提供'
            }
        },
        'portfolio': {
            'title': '作品ギャラリー',
            'clickToPlay': '動画を再生する',
            'items': {
                'fashion': 'ファッションショートビデオ',
                '3c': '3C製品ポストプロダクション',
                'product': '製品プロモーション',
                'lookbook': 'ルックブック撮影制作',
                'fresh': 'フレッシュショートビデオ',
                'honor': 'Honorイヤホン',
                'trend': 'トレンドプレビュービデオ',
                'digital': 'デジタルヒューマン商品紹介',
                'live': 'トレンディーライブ予告',
                'company': '会社プロモーション',
                'intro': 'イントロ＆アウトロデザイン'
            }
        },
        'partners': {
            'title': 'パートナー企業'
        },
        'about': {
            'title': '会社概要',
            'content': '1. 専門チーム：シニアエディター、アニメーションデザイナー、ディレクター、企画チームが協力\n2. グローバルビジョン：国内外の市場トレンドを理解\n3. 効率的な納品：厳格なプロジェクト管理プロセスにより、コスト効率と適時性を確保',
            'stats': {
                'projects': '完了プロジェクト',
                'clients': '国際クライアント',
                'experience': '業界経験年数'
            }
        },
        'footer': {
            'contact': 'お問い合わせ',
            'email': 'メール',
            'phone': '電話',
            'rights': '© 2024 ZKMEDIA. All rights reserved.'
        }
    }
};

// 将翻译数据合并到全局对象中
Object.assign(window.translations, translations); 