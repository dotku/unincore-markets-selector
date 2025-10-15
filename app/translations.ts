export type Language = 'en' | 'zh' | 'ko' | 'sg' | 'hk';

export interface Translations {
  hero: {
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    description: string;
  };
  stores: {
    china: {
      title: string;
      description: string;
      button: string;
    };
    korea: {
      title: string;
      description: string;
      button: string;
    };
    us: {
      title: string;
      description: string;
      button: string;
    };
    singapore: {
      title: string;
      description: string;
      button: string;
    };
    hongkong: {
      title: string;
      description: string;
      button: string;
    };
    international: {
      title: string;
      description: string;
      button: string;
    };
  };
  features: {
    title: string;
    quality: string;
    character: string;
    assurance: string;
    global: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      title1: 'For Health',
      title2: 'and Beauty',
      title3: 'New Beginning',
      subtitle: 'Start your journey to healthy, beautiful skin',
      description: 'Select your shopping region to get started',
    },
    stores: {
      china: {
        title: 'China',
        description: 'China Store - Taobao Mall',
        button: 'Shop Now →',
      },
      korea: {
        title: 'Korea',
        description: 'Korea Store',
        button: 'Shop Now →',
      },
      us: {
        title: 'United States',
        description: 'US Store',
        button: 'Shop Now →',
      },
      singapore: {
        title: 'Singapore',
        description: 'Singapore Store',
        button: 'Shop Now →',
      },
      hongkong: {
        title: 'Hong Kong',
        description: 'Hong Kong Store',
        button: 'Shop Now →',
      },
      international: {
        title: 'International',
        description: 'Global Store',
        button: 'Shop Now →',
      },
    },
    features: {
      title: 'Why Choose Us?',
      quality: 'Premium\nQuality',
      character: 'Exceptional\nCharacter',
      assurance: 'Quality\nAssurance',
      global: 'Leading\nGlobally',
    },
  },
  zh: {
    hero: {
      title1: '为了健康',
      title2: '和美丽',
      title3: '新的开始',
      subtitle: '开启您的健康美肤之旅',
      description: '选择您的购物地区开始',
    },
    stores: {
      china: {
        title: '中国',
        description: '中国站点 - 淘宝商城',
        button: '立即购买 →',
      },
      korea: {
        title: '韩国',
        description: '韩国商店',
        button: '立即购买 →',
      },
      us: {
        title: '美国',
        description: '美国商店',
        button: '立即购买 →',
      },
      singapore: {
        title: '新加坡',
        description: '新加坡商店',
        button: '立即购买 →',
      },
      hongkong: {
        title: '香港',
        description: '香港商店',
        button: '立即购买 →',
      },
      international: {
        title: '国际',
        description: '全球商店',
        button: '立即购买 →',
      },
    },
    features: {
      title: '为什么选择我们？',
      quality: '优质\n出品',
      character: '品格\n卓越',
      assurance: '质量\n保障',
      global: '引领\n全球',
    },
  },
  ko: {
    hero: {
      title1: '건강을 위해',
      title2: '그리고 아름다움',
      title3: '새로운 시작',
      subtitle: '건강하고 아름다운 피부를 위한 여정을 시작하세요',
      description: '쇼핑 지역을 선택하여 시작하세요',
    },
    stores: {
      china: {
        title: '중국',
        description: '중국 스토어 - 타오바오 몰',
        button: '구독 바로가기 →',
      },
      korea: {
        title: '한국',
        description: '한국 스토어',
        button: '지금 쇼핑하기 →',
      },
      us: {
        title: '미국',
        description: '미국 스토어',
        button: '지금 쇼핑하기 →',
      },
      singapore: {
        title: '싱가포르',
        description: '싱가포르 스토어',
        button: '지금 쇼핑하기 →',
      },
      hongkong: {
        title: '홍콩',
        description: '홍콩 스토어',
        button: '지금 쇼핑하기 →',
      },
      international: {
        title: '해외',
        description: '글로벌 스토어',
        button: '지금 쇼핑하기 →',
      },
    },
    features: {
      title: '왜 우리를 선택해야 할까요?',
      quality: '프리미엄\n품질',
      character: '탁월한\n성격',
      assurance: '품질\n보증',
      global: '글로벌\n리더',
    },
  },
  sg: {
    hero: {
      title1: 'For Health',
      title2: 'and Beauty',
      title3: 'New Beginning',
      subtitle: 'Start your journey to healthy, beautiful skin',
      description: 'Select your shopping region to get started',
    },
    stores: {
      china: {
        title: 'China',
        description: 'China Store - Taobao Mall',
        button: 'Shop Now →',
      },
      korea: {
        title: 'Korea',
        description: 'Korea Store',
        button: 'Shop Now →',
      },
      us: {
        title: 'United States',
        description: 'US Store',
        button: 'Shop Now →',
      },
      singapore: {
        title: 'Singapore',
        description: 'Singapore Store',
        button: 'Shop Now →',
      },
      hongkong: {
        title: 'Hong Kong',
        description: 'Hong Kong Store',
        button: 'Shop Now →',
      },
      international: {
        title: 'International',
        description: 'Global Store',
        button: 'Shop Now →',
      },
    },
    features: {
      title: 'Why Choose Us?',
      quality: 'Premium\nQuality',
      character: 'Exceptional\nCharacter',
      assurance: 'Quality\nAssurance',
      global: 'Leading\nGlobally',
    },
  },
  hk: {
    hero: {
      title1: '為了健康',
      title2: '和美麗',
      title3: '新的開始',
      subtitle: '開啟您的健康美膚之旅',
      description: '選擇您的購物地區開始',
    },
    stores: {
      china: {
        title: '中國',
        description: '中國站點 - 淘寶商城',
        button: '立即購買 →',
      },
      korea: {
        title: '韓國',
        description: '韓國商店',
        button: '立即購買 →',
      },
      us: {
        title: '美國',
        description: '美國商店',
        button: '立即購買 →',
      },
      singapore: {
        title: '新加坡',
        description: '新加坡商店',
        button: '立即購買 →',
      },
      hongkong: {
        title: '香港',
        description: '香港商店',
        button: '立即購買 →',
      },
      international: {
        title: '國際',
        description: '全球商店',
        button: '立即購買 →',
      },
    },
    features: {
      title: '為什麼選擇我們？',
      quality: '優質\n出品',
      character: '品格\n卓越',
      assurance: '質量\n保障',
      global: '引領\n全球',
    },
  },
};
