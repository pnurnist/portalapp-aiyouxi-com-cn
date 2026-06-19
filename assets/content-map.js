// assets/content-map.js
// 站点内容分区与搜索过滤模块

const contentMap = {
  sections: [
    {
      id: "home",
      title: "首页",
      tags: ["爱游戏", "热门", "推荐"],
      url: "https://portalapp-aiyouxi.com.cn/home",
      description: "平台首页，展示精选内容"
    },
    {
      id: "news",
      title: "新闻资讯",
      tags: ["爱游戏", "新闻", "更新"],
      url: "https://portalapp-aiyouxi.com.cn/news",
      description: "游戏行业最新动态与公告"
    },
    {
      id: "games",
      title: "游戏库",
      tags: ["爱游戏", "游戏", "分类"],
      url: "https://portalapp-aiyouxi.com.cn/games",
      description: "全部游戏列表与检索"
    },
    {
      id: "community",
      title: "社区",
      tags: ["爱游戏", "社区", "讨论"],
      url: "https://portalapp-aiyouxi.com.cn/community",
      description: "玩家交流与分享"
    },
    {
      id: "support",
      title: "客服支持",
      tags: ["爱游戏", "帮助", "FAQ"],
      url: "https://portalapp-aiyouxi.com.cn/support",
      description: "常见问题与联系客服"
    }
  ],

  keywords: ["爱游戏", "portalapp-aiyouxi", "热门游戏", "新游推荐", "社区互动"],

  // 根据关键词搜索匹配的分区
  searchSections(keyword) {
    if (!keyword || typeof keyword !== "string") {
      return [];
    }
    const lowerKeyword = keyword.toLowerCase().trim();
    if (lowerKeyword === "") {
      return [];
    }
    return this.sections.filter(section => {
      const titleMatch = section.title.toLowerCase().includes(lowerKeyword);
      const tagMatch = section.tags.some(tag => tag.toLowerCase().includes(lowerKeyword));
      const descMatch = section.description.toLowerCase().includes(lowerKeyword);
      return titleMatch || tagMatch || descMatch;
    });
  },

  // 根据标签过滤分区
  filterByTag(tag) {
    if (!tag || typeof tag !== "string") {
      return [];
    }
    const lowerTag = tag.toLowerCase().trim();
    return this.sections.filter(section =>
      section.tags.some(t => t.toLowerCase() === lowerTag)
    );
  },

  // 获取所有唯一标签
  getAllTags() {
    const tagSet = new Set();
    this.sections.forEach(section => {
      section.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet);
  },

  // 获取分区总数
  getSectionCount() {
    return this.sections.length;
  }
};

// 示例用法（非必须，但保留供测试）
if (typeof module !== "undefined" && module.exports) {
  module.exports = contentMap;
}