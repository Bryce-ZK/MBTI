import type { Question } from '../types/mbti'

export const professionalQuestions: Question[] = [
  // EI 维度 (36题) - 外向/内向
  {
    id: 1,
    text: "在社交场合中，我倾向于：",
    options: [
      { text: "主动与他人交谈，扩展社交圈", score: 2 },
      { text: "等待他人来与我交谈", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 2,
    text: "在团队项目中，我更喜欢：",
    options: [
      { text: "积极参与讨论和决策", score: 2 },
      { text: "独立思考后再提供建议", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 3,
    text: "遇到压力时，我会选择：",
    options: [
      { text: "与朋友交流寻求支持", score: 2 },
      { text: "独自思考解决方案", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 4,
    text: "在工作环境中，我更喜欢：",
    options: [
      { text: "开放式办公，方便交流", score: 2 },
      { text: "独立办公空间，保持专注", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 5,
    text: "周末休息时，我更倾向于：",
    options: [
      { text: "参加社交活动，与人互动", score: 2 },
      { text: "待在家里，享受独处时光", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 6,
    text: "在会议中，我通常：",
    options: [
      { text: "积极发言，分享想法", score: 2 },
      { text: "仔细聆听，记录要点", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 7,
    text: "面对新环境，我会：",
    options: [
      { text: "主动认识新朋友", score: 2 },
      { text: "慢慢适应环境", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 8,
    text: "在团队合作中，我倾向于：",
    options: [
      { text: "担任协调和沟通的角色", score: 2 },
      { text: "专注于自己负责的部分", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 9,
    text: "休息时间，我更愿意：",
    options: [
      { text: "和同事聊天放松", score: 2 },
      { text: "独自安静休息", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 10,
    text: "在学习过程中，我更喜欢：",
    options: [
      { text: "参与小组讨论", score: 2 },
      { text: "独立阅读和思考", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 11,
    text: "在做决策时，我倾向于：",
    options: [
      { text: "征询他人意见后决定", score: 2 },
      { text: "独立思考后做决定", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 12,
    text: "当遇到困难时，我会：",
    options: [
      { text: "寻求他人的帮助和建议", score: 2 },
      { text: "自己寻找解决方案", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 13,
    text: "在工作场合，我更倾向于：",
    options: [
      { text: "经常与同事互动交流", score: 2 },
      { text: "专注于手头的工作", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 14,
    text: "对于新想法，我通常会：",
    options: [
      { text: "立即与他人分享讨论", score: 2 },
      { text: "先自己思考完善", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 15,
    text: "在团队活动中，我倾向于：",
    options: [
      { text: "积极参与组织和策划", score: 2 },
      { text: "配合他人完成任务", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 16,
    text: "面对新项目，我更喜欢：",
    options: [
      { text: "与团队一起头脑风暴", score: 2 },
      { text: "独自思考后再分享", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 17,
    text: "在培训课程中，我更喜欢：",
    options: [
      { text: "小组讨论和角色扮演", score: 2 },
      { text: "听讲和独立练习", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 18,
    text: "处理问题时，我倾向于：",
    options: [
      { text: "与他人讨论可能的解决方案", score: 2 },
      { text: "独自分析问题并解决", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 19,
    text: "在社交网络上，我通常：",
    options: [
      { text: "经常分享和互动", score: 2 },
      { text: "较少发帖和评论", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 20,
    text: "参加派对时，我会：",
    options: [
      { text: "与许多人交谈互动", score: 2 },
      { text: "与少数熟人交谈", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 21,
    text: "在演讲或发表时，我感觉：",
    options: [
      { text: "兴奋和充满活力", score: 2 },
      { text: "紧张和不太自在", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 22,
    text: "在工作会议结束后，我倾向于：",
    options: [
      { text: "继续与同事讨论和交流", score: 2 },
      { text: "立即回到自己的工作中", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 23,
    text: "在团建活动中，我通常会：",
    options: [
      { text: "积极参与各种互动游戏", score: 2 },
      { text: "选择较为安静的活动", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 24,
    text: "完成一项任务后，我倾向于：",
    options: [
      { text: "立即分享成果和经验", score: 2 },
      { text: "默默记录和总结", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 25,
    text: "在解决冲突时，我更倾向于：",
    options: [
      { text: "直接面对面沟通", score: 2 },
      { text: "通过书面或间接方式", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 26,
    text: "在接受表扬时，我感觉：",
    options: [
      { text: "享受公开的认可", score: 2 },
      { text: "更喜欢私下的肯定", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 27,
    text: "在工作场合的午餐时间，我更喜欢：",
    options: [
      { text: "和同事一起共进午餐", score: 2 },
      { text: "独自安静地用餐", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 28,
    text: "在网络会议中，我倾向于：",
    options: [
      { text: "经常开启摄像头互动", score: 2 },
      { text: "保持语音或文字交流", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 29,
    text: "在团队庆祝活动中，我通常：",
    options: [
      { text: "参与组织和策划", score: 2 },
      { text: "低调参与即可", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 30,
    text: "面对工作压力时，我会：",
    options: [
      { text: "寻找同事倾诉和讨论", score: 2 },
      { text: "自己调整和解压", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 31,
    text: "在进行头脑风暴时，我更喜欢：",
    options: [
      { text: "在团队中即兴发挥", score: 2 },
      { text: "先独自思考后再分享", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 32,
    text: "在职业发展规划时，我倾向于：",
    options: [
      { text: "与他人讨论和交流", score: 2 },
      { text: "独立思考和规划", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 33,
    text: "在接受新任务时，我更喜欢：",
    options: [
      { text: "与团队成员共同探讨", score: 2 },
      { text: "自己先研究和思考", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 34,
    text: "在处理邮件时，我倾向于：",
    options: [
      { text: "及时回复并展开交流", score: 2 },
      { text: "仔细思考后再回应", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 35,
    text: "在工作汇报时，我更喜欢：",
    options: [
      { text: "面对面详细交流", score: 2 },
      { text: "提交书面详细报告", score: -2 }
    ],
    category: "EI"
  },
  {
    id: 36,
    text: "在获得新想法时，我会：",
    options: [
      { text: "马上与他人分享讨论", score: 2 },
      { text: "等想法成熟后再分享", score: -2 }
    ],
    category: "EI"
  },

  // SN 维度 (36题) - 感觉/直觉
  {
    id: 37,
    text: "在解决问题时，我更倾向于：",
    options: [
      { text: "关注具体细节和实际经验", score: 2 },
      { text: "探索可能性和创新方案", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 38,
    text: "在学习新知识时，我更喜欢：",
    options: [
      { text: "循序渐进，掌握具体步骤", score: 2 },
      { text: "理解整体概念和理论框架", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 39,
    text: "在工作中，我更注重：",
    options: [
      { text: "实际可行的解决方案", score: 2 },
      { text: "创新的思维方式", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 40,
    text: "在阅读时，我更关注：",
    options: [
      { text: "文字描述的具体内容", score: 2 },
      { text: "文章背后的深层含义", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 41,
    text: "在做计划时，我更看重：",
    options: [
      { text: "切实可行的具体步骤", score: 2 },
      { text: "未来发展的可能性", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 42,
    text: "在处理任务时，我更擅长：",
    options: [
      { text: "按照既定流程执行", score: 2 },
      { text: "尝试新的解决方法", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 43,
    text: "在观察事物时，我更容易注意到：",
    options: [
      { text: "当前的实际状况", score: 2 },
      { text: "未来的发展趋势", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 44,
    text: "在团队讨论中，我更关注：",
    options: [
      { text: "具体的执行细节", score: 2 },
      { text: "创新的想法和愿景", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 45,
    text: "在做决策时，我更相信：",
    options: [
      { text: "过往的经验和数据", score: 2 },
      { text: "直觉和未来预测", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 46,
    text: "在项目开始前，我更注重：",
    options: [
      { text: "详细的实施计划", score: 2 },
      { text: "整体的发展方向", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 47,
    text: "在分析报告时，我更关注：",
    options: [
      { text: "具体的数据和事实", score: 2 },
      { text: "数据反映的趋势", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 48,
    text: "在描述事物时，我倾向于：",
    options: [
      { text: "详细具体地描述现状", score: 2 },
      { text: "联想和比喻的表达", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 49,
    text: "在工作汇报中，我更重视：",
    options: [
      { text: "准确的数据和事实", score: 2 },
      { text: "创新的见解和洞察", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 50,
    text: "在制定策略时，我更看重：",
    options: [
      { text: "实际的市场数据", score: 2 },
      { text: "市场的未来趋势", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 51,
    text: "在处理问题时，我更信任：",
    options: [
      { text: "亲身实践的经验", score: 2 },
      { text: "直觉的判断", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 52,
    text: "在评估方案时，我更关注：",
    options: [
      { text: "实际的操作可行性", score: 2 },
      { text: "创新的突破可能", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 53,
    text: "在接受培训时，我更喜欢：",
    options: [
      { text: "具体的操作示范", score: 2 },
      { text: "理论的框架讲解", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 54,
    text: "在解决问题时，我更倾向于：",
    options: [
      { text: "使用已证实的方法", score: 2 },
      { text: "尝试创新的方案", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 55,
    text: "在阅读报告时，我更关注：",
    options: [
      { text: "具体的数据和事实", score: 2 },
      { text: "潜在的发展机会", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 56,
    text: "在团队合作中，我更擅长：",
    options: [
      { text: "执行具体的任务", score: 2 },
      { text: "提供创新的想法", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 57,
    text: "在工作中，我更喜欢：",
    options: [
      { text: "处理实际的问题", score: 2 },
      { text: "探索新的可能", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 58,
    text: "在做决定时，我更依赖：",
    options: [
      { text: "实际的经验教训", score: 2 },
      { text: "未来的预测判断", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 59,
    text: "在处理细节时，我更：",
    options: [
      { text: "关注准确性和完整性", score: 2 },
      { text: "注重创新性和灵活性", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 60,
    text: "在面对变化时，我更倾向于：",
    options: [
      { text: "保持现有的稳定性", score: 2 },
      { text: "寻求新的可能性", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 61,
    text: "在制定目标时，我更注重：",
    options: [
      { text: "切实可达的目标", score: 2 },
      { text: "具有挑战的愿景", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 62,
    text: "在描述项目时，我更喜欢：",
    options: [
      { text: "具体详细的说明", score: 2 },
      { text: "概括性的描述", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 63,
    text: "在解决问题时，我更看重：",
    options: [
      { text: "实际的解决方案", score: 2 },
      { text: "创新的思路", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 64,
    text: "在工作中，我更善于：",
    options: [
      { text: "优化现有流程", score: 2 },
      { text: "创造新的方法", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 65,
    text: "在学习新技能时，我更喜欢：",
    options: [
      { text: "循序渐进的练习", score: 2 },
      { text: "整体性的理解", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 66,
    text: "在处理信息时，我更注重：",
    options: [
      { text: "具体的事实依据", score: 2 },
      { text: "直觉的判断", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 67,
    text: "在规划未来时，我更倾向于：",
    options: [
      { text: "基于现实的规划", score: 2 },
      { text: "憧憬理想的可能", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 68,
    text: "在评估风险时，我更相信：",
    options: [
      { text: "历史数据分析", score: 2 },
      { text: "直觉预判", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 69,
    text: "在处理工作时，我更重视：",
    options: [
      { text: "实际的执行效果", score: 2 },
      { text: "创新的解决思路", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 70,
    text: "在面对挑战时，我更倾向于：",
    options: [
      { text: "运用已有经验", score: 2 },
      { text: "尝试新的方法", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 71,
    text: "在分析问题时，我更关注：",
    options: [
      { text: "当前的实际情况", score: 2 },
      { text: "未来的发展空间", score: -2 }
    ],
    category: "SN"
  },
  {
    id: 72,
    text: "在工作方式上，我更喜欢：",
    options: [
      { text: "按既定方式执行", score: 2 },
      { text: "尝试创新方法", score: -2 }
    ],
    category: "SN"
  },

  // TF 维度 (36题) - 思维/情感
  {
    id: 73,
    text: "在做决定时，我更看重：",
    options: [
      { text: "逻辑分析和客观事实", score: 2 },
      { text: "个人价值观和他人感受", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 74,
    text: "在处理冲突时，我倾向于：",
    options: [
      { text: "分析问题的根本原因", score: 2 },
      { text: "考虑各方的情感需求", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 75,
    text: "在评价他人工作时，我更注重：",
    options: [
      { text: "工作的效率和成果", score: 2 },
      { text: "合作的态度和过程", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 76,
    text: "在团队合作中，我更关注：",
    options: [
      { text: "任务的完成质量", score: 2 },
      { text: "团队的和谐氛围", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 77,
    text: "当同事犯错时，我倾向于：",
    options: [
      { text: "直接指出问题所在", score: 2 },
      { text: "委婉地提供建议", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 78,
    text: "在做项目决策时，我更重视：",
    options: [
      { text: "成本效益分析", score: 2 },
      { text: "对团队的影响", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 79,
    text: "在处理投诉时，我更倾向于：",
    options: [
      { text: "依据规则和流程处理", score: 2 },
      { text: "灵活处理以求双赢", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 80,
    text: "在给予反馈时，我更注重：",
    options: [
      { text: "客观事实和建议", score: 2 },
      { text: "对方的接受程度", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 81,
    text: "在解决分歧时，我倾向于：",
    options: [
      { text: "用逻辑说服对方", score: 2 },
      { text: "寻求情感共鸣", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 82,
    text: "在选择工作时，我更看重：",
    options: [
      { text: "职位的发展前景", score: 2 },
      { text: "工作环境的氛围", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 83,
    text: "在处理人际关系时，我更倾向于：",
    options: [
      { text: "保持专业和客观", score: 2 },
      { text: "建立情感联系", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 84,
    text: "在评估项目时，我更看重：",
    options: [
      { text: "数据和实际效果", score: 2 },
      { text: "团队成长和满意度", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 85,
    text: "在面对批评时，我倾向于：",
    options: [
      { text: "客观分析问题所在", score: 2 },
      { text: "关注情感和感受", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 86,
    text: "在团队决策中，我更重视：",
    options: [
      { text: "决策的合理性", score: 2 },
      { text: "团队的认同感", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 87,
    text: "在处理矛盾时，我更倾向于：",
    options: [
      { text: "基于事实和规则", score: 2 },
      { text: "考虑感受和关系", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 88,
    text: "在提供建议时，我更注重：",
    options: [
      { text: "解决问题的效率", score: 2 },
      { text: "维护关系的和谐", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 89,
    text: "在工作评估时，我更关注：",
    options: [
      { text: "目标的达成情况", score: 2 },
      { text: "过程的投入程度", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 90,
    text: "在做出选择时，我更依赖：",
    options: [
      { text: "理性的分析判断", score: 2 },
      { text: "内心的感受", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 91,
    text: "在处理问题时，我更重视：",
    options: [
      { text: "公平和规则", score: 2 },
      { text: "个人情况和感受", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 92,
    text: "在团队合作中，我更强调：",
    options: [
      { text: "任务的完成效率", score: 2 },
      { text: "成员的参与感", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 93,
    text: "在解决争议时，我更看重：",
    options: [
      { text: "事情的对错", score: 2 },
      { text: "各方的感受", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 94,
    text: "在管理项目时，我更注重：",
    options: [
      { text: "进度和质量控制", score: 2 },
      { text: "团队氛围维护", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 95,
    text: "在做决策时，我更依靠：",
    options: [
      { text: "数据和逻辑分析", score: 2 },
      { text: "价值观和直觉", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 96,
    text: "在处理反馈时，我更关注：",
    options: [
      { text: "问题的实质", score: 2 },
      { text: "表达的方式", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 97,
    text: "在工作中，我更重视：",
    options: [
      { text: "效率和结果", score: 2 },
      { text: "过程和体验", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 98,
    text: "在处理分歧时，我更看重：",
    options: [
      { text: "事实和证据", score: 2 },
      { text: "和谐与共识", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 99,
    text: "在评价表现时，我更注重：",
    options: [
      { text: "客观的业绩指标", score: 2 },
      { text: "主观的努力程度", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 100,
    text: "在团队讨论中，我更强调：",
    options: [
      { text: "逻辑性和可行性", score: 2 },
      { text: "创造性和包容性", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 101,
    text: "在处理意见时，我更倾向于：",
    options: [
      { text: "分析利弊得失", score: 2 },
      { text: "考虑他人感受", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 102,
    text: "在工作方式上，我更重视：",
    options: [
      { text: "规范和标准", score: 2 },
      { text: "灵活和适应", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 103,
    text: "在处理变化时，我更关注：",
    options: [
      { text: "对效率的影响", score: 2 },
      { text: "对人员的影响", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 104,
    text: "在做计划时，我更考虑：",
    options: [
      { text: "可行性和效率", score: 2 },
      { text: "参与度和认同感", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 105,
    text: "在处理建议时，我更看重：",
    options: [
      { text: "建议的可行性", score: 2 },
      { text: "建议的善意", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 106,
    text: "在工作方式上，我更重视：",
    options: [
      { text: "规范和标准", score: 2 },
      { text: "灵活和适应", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 107,
    text: "在处理变化时，我更关注：",
    options: [
      { text: "对效率的影响", score: 2 },
      { text: "对人员的影响", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 108,
    text: "在做计划时，我更考虑：",
    options: [
      { text: "可行性和效率", score: 2 },
      { text: "参与度和认同感", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 109,
    text: "在处理建议时，我更看重：",
    options: [
      { text: "建议的可行性", score: 2 },
      { text: "建议的善意", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 110,
    text: "在工作中遇到困难时，我更倾向于：",
    options: [
      { text: "分析问题找方法", score: 2 },
      { text: "寻求支持和理解", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 111,
    text: "在处理任务时，我更注重：",
    options: [
      { text: "完成的标准和质量", score: 2 },
      { text: "过程的体验和感受", score: -2 }
    ],
    category: "TF"
  },
  {
    id: 112,
    text: "在面对挑战时，我更看重：",
    options: [
      { text: "解决问题的效率", score: 2 },
      { text: "团队的凝聚力", score: -2 }
    ],
    category: "TF"
  },

  // JP 维度 (36题) - 判断/知觉
  {
    id: 113,
    text: "在工作中，我更喜欢：",
    options: [
      { text: "制定明确的计划和时间表", score: 2 },
      { text: "保持灵活，随机应变", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 114,
    text: "对待截止日期，我通常：",
    options: [
      { text: "提前完成任务", score: 2 },
      { text: "在最后期限前完成", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 115,
    text: "我的工作环境通常是：",
    options: [
      { text: "整齐有序，物品摆放规整", score: 2 },
      { text: "灵活多变，随手可及", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 116,
    text: "在安排日程时，我倾向于：",
    options: [
      { text: "详细规划每一天的安排", score: 2 },
      { text: "根据情况随时调整", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 117,
    text: "面对新项目时，我会：",
    options: [
      { text: "制定详细的执行计划", score: 2 },
      { text: "先开始做再逐步调整", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 118,
    text: "在处理工作时，我更喜欢：",
    options: [
      { text: "一次专注完成一项任务", score: 2 },
      { text: "同时处理多个任务", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 119,
    text: "对待规则和制度，我认为：",
    options: [
      { text: "应该严格遵守执行", score: 2 },
      { text: "可以灵活变通处理", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 120,
    text: "在做决定时，我倾向于：",
    options: [
      { text: "快速做出明确决定", score: 2 },
      { text: "保持开放继续观察", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 121,
    text: "对待生活，我更喜欢：",
    options: [
      { text: "有计划和规律的生活", score: 2 },
      { text: "随性自由的生活方式", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 122,
    text: "在准备工作时，我倾向于：",
    options: [
      { text: "提前做好充分准备", score: 2 },
      { text: "临时应对即可", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 123,
    text: "在处理文件时，我习惯：",
    options: [
      { text: "建立系统的分类存储", score: 2 },
      { text: "需要时再整理归档", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 124,
    text: "对待会议，我更倾向于：",
    options: [
      { text: "提前准备议程和材料", score: 2 },
      { text: "即兴发挥和讨论", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 125,
    text: "在工作进度上，我更喜欢：",
    options: [
      { text: "按计划稳步推进", score: 2 },
      { text: "根据情况灵活调整", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 126,
    text: "对待变化，我通常会：",
    options: [
      { text: "谨慎评估后再行动", score: 2 },
      { text: "迅速适应新情况", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 127,
    text: "在工作方法上，我倾向于：",
    options: [
      { text: "遵循既定的流程", score: 2 },
      { text: "根据需要随时调整", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 128,
    text: "完成任务时，我更注重：",
    options: [
      { text: "按时按质完成", score: 2 },
      { text: "保持灵活创新", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 129,
    text: "在时间管理上，我更倾向于：",
    options: [
      { text: "严格执行时间计划", score: 2 },
      { text: "随机应变处理事务", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 130,
    text: "对待工作目标，我更喜欢：",
    options: [
      { text: "设定明确的完成标准", score: 2 },
      { text: "保持开放和可调整", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 131,
    text: "在项目执行中，我倾向于：",
    options: [
      { text: "严格按计划推进", score: 2 },
      { text: "根据情况即时调整", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 132,
    text: "对待工作安排，我更喜欢：",
    options: [
      { text: "提前规划和确定", score: 2 },
      { text: "保持机动和灵活", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 133,
    text: "在处理问题时，我倾向于：",
    options: [
      { text: "按步骤系统解决", score: 2 },
      { text: "灵活采用多种方法", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 134,
    text: "对待工作期限，我通常：",
    options: [
      { text: "设定明确的时间节点", score: 2 },
      { text: "保持弹性和灵活性", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 135,
    text: "在日常工作中，我更喜欢：",
    options: [
      { text: "按既定计划执行", score: 2 },
      { text: "随机应对各种情况", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 136,
    text: "面对任务清单，我倾向于：",
    options: [
      { text: "按优先级依次完成", score: 2 },
      { text: "根据心情选择处理", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 137,
    text: "在工作节奏上，我更喜欢：",
    options: [
      { text: "保持稳定有序", score: 2 },
      { text: "富有变化和弹性", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 138,
    text: "对待工作计划，我通常：",
    options: [
      { text: "制定详细的执行方案", score: 2 },
      { text: "保持大致的方向即可", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 139,
    text: "在处理事务时，我倾向于：",
    options: [
      { text: "按照优先顺序处理", score: 2 },
      { text: "随机处理各种事务", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 140,
    text: "对待工作目标，我更看重：",
    options: [
      { text: "明确的完成标准", score: 2 },
      { text: "过程中的灵活性", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 141,
    text: "在安排活动时，我更喜欢：",
    options: [
      { text: "提前确定具体安排", score: 2 },
      { text: "临时决定具体内容", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 142,
    text: "对待工作环境，我倾向于：",
    options: [
      { text: "保持固定的秩序", score: 2 },
      { text: "允许适度的混乱", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 143,
    text: "在执行任务时，我更重视：",
    options: [
      { text: "按计划准时完成", score: 2 },
      { text: "保持灵活和创新", score: -2 }
    ],
    category: "JP"
  },
  {
    id: 144,
    text: "对待工作方式，我更倾向于：",
    options: [
      { text: "建立规范的流程", score: 2 },
      { text: "保持开放和适应", score: -2 }
    ],
    category: "JP"
  }
] 