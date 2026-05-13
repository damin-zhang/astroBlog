// 项目配置
export const projectsConfig = {
  images: [
    "/projects/EmailCraftAI.png",
    "/projects/ImageGenerator.png",
    "/projects/VisalInspection.png",
    "/projects/VisalInspection2.png",
  ],
  projects: [
    {
      title: "邮件模板生成器",
      description:
        "基于AI的智能邮件模板生成工具，支持拖拽式编辑、响应式模板和实时预览。可快速创建专业的营销邮件和通知模板，提升邮件制作效率。",
      technologies: ["React", "TypeScript", "Tailwind CSS", "AI"],
      liveLink: "https://tools.zhangdamin.cn/email-template",
      githubLink: "https://github.com/damin-zhang",
    },
    {
      title: "Nano Banana 图片生成器",
      description:
        "AI驱动的创意图片生成应用，支持多种风格和分辨率的图片生成。提供1K/2K/4K多档画质选择，内置配额管理和历史记录功能。",
      technologies: ["React", "Firebase", "AI", "Canvas API"],
      liveLink: "https://tools.zhangdamin.cn/image-generator",
      githubLink: "https://github.com/damin-zhang",
    },
    {
      title: "AI 视觉质检应用",
      description:
        "饮料行业通用视觉检测系统，基于通义千问Qwen3-VL-Flash多模态模型。支持拍照上传、自动识别图片有效性、产品外观缺陷检测，提供置信度评估和详细检验报告。",
      technologies: ["React", "Node.js", "Qwen3-VL", "Multer"],
      liveLink: "https://tools.zhangdamin.cn/visual-inspection",
      githubLink: "https://github.com/damin-zhang",
    },
    {
      title: "AI 视觉质检应用 - 检测详情",
      description:
        "视觉质检应用的详细检测视图，展示完整的AI分析流程。包括图片上传、模型分析动画、结论判定（合格/不合格/无效图片）、缺陷高亮标注和结构化检测报告。",
      technologies: ["React", "Node.js", "Express", "REST API"],
      liveLink: "https://tools.zhangdamin.cn/visual-inspection",
      githubLink: "https://github.com/damin-zhang",
    },
  ],
};
