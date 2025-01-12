import type { Question } from '../types/mbti'

export const questions: Question[] = [
  // E vs I (外向-内向) 维度 - 21题
  {
    id: 1,
    text: "在社交场合中，你通常：",
    category: "EI",
    options: [
      { text: "认识新朋友让你充满能量", score: 2 },
      { text: "社交活动会消耗你的能量", score: -2 }
    ]
  },
  {
    id: 2,
    text: "你更喜欢：",
    category: "EI",
    options: [
      { text: "在团体中与多人交谈", score: 2 },
      { text: "与一个人深入交谈", score: -2 }
    ]
  },
  {
    id: 3,
    text: "当你需要解决问题时，你倾向于：",
    category: "EI",
    options: [
      { text: "与他人讨论以获得想法", score: 2 },
      { text: "独自思考以找到答案", score: -2 }
    ]
  },
  // E vs I (外向-内向) 维度继续
  {
    id: 4,
    text: "在工作场合，你通常：",
    category: "EI",
    options: [
      { text: "喜欢参与团队讨论和会议", score: 2 },
      { text: "更愿意独立完成工作", score: -2 }
    ]
  },
  {
    id: 5,
    text: "当你感到压力时，你会：",
    category: "EI",
    options: [
      { text: "寻找朋友倾诉和交流", score: 2 },
      { text: "独自一人思考和放松", score: -2 }
    ]
  },
  {
    id: 6,
    text: "在陌生的环境中，你倾向于：",
    category: "EI",
    options: [
      { text: "主动与他人交谈建立联系", score: 2 },
      { text: "观察周围环境后再行动", score: -2 }
    ]
  },
  {
    id: 7,
    text: "你更喜欢的学习方式是：",
    category: "EI",
    options: [
      { text: "小组讨论和互动学习", score: 2 },
      { text: "自主阅读和独立思考", score: -2 }
    ]
  },
  {
    id: 8,
    text: "周末休息时，你更倾向于：",
    category: "EI",
    options: [
      { text: "参加社交活动和聚会", score: 2 },
      { text: "在家休息或做自己的事", score: -2 }
    ]
  },
  {
    id: 9,
    text: "遇到困难时，你会：",
    category: "EI",
    options: [
      { text: "立即寻求他人的帮助", score: 2 },
      { text: "先尝试自己解决问题", score: -2 }
    ]
  },
  {
    id: 10,
    text: "在团队中，你更倾向于：",
    category: "EI",
    options: [
      { text: "经常发表意见和建议", score: 2 },
      { text: "仔细聆听他人观点", score: -2 }
    ]
  },
  {
    id: 11,
    text: "你认为理想的工作环境是：",
    category: "EI",
    options: [
      { text: "开放式办公，方便交流", score: 2 },
      { text: "独立办公室，保持专注", score: -2 }
    ]
  },
  {
    id: 12,
    text: "在会议中，你通常会：",
    category: "EI",
    options: [
      { text: "积极参与讨论和发言", score: 2 },
      { text: "更多地倾听和记录", score: -2 }
    ]
  },
  {
    id: 13,
    text: "面对新项目，你倾向于：",
    category: "EI",
    options: [
      { text: "与团队成员一起头脑风暴", score: 2 },
      { text: "独自思考后再分享想法", score: -2 }
    ]
  },
  {
    id: 14,
    text: "在休息时间，你会：",
    category: "EI",
    options: [
      { text: "找同事聊天放松", score: 2 },
      { text: "独自安静地休息", score: -2 }
    ]
  },
  {
    id: 15,
    text: "对于新想法，你倾向于：",
    category: "EI",
    options: [
      { text: "立即与他人分享讨论", score: 2 },
      { text: "先自己思考完善", score: -2 }
    ]
  },
  {
    id: 16,
    text: "在团队活动中，你通常：",
    category: "EI",
    options: [
      { text: "积极参与组织和策划", score: 2 },
      { text: "配合他人完成任务", score: -2 }
    ]
  },
  {
    id: 17,
    text: "当需要做决定时，你会：",
    category: "EI",
    options: [
      { text: "征询多人的意见", score: 2 },
      { text: "独立思考后决定", score: -2 }
    ]
  },
  {
    id: 18,
    text: "在工作中遇到问题，你倾向于：",
    category: "EI",
    options: [
      { text: "马上与同事讨论解决方案", score: 2 },
      { text: "先自己分析问题所在", score: -2 }
    ]
  },
  {
    id: 19,
    text: "你更喜欢的工作方式是：",
    category: "EI",
    options: [
      { text: "团队协作完成项目", score: 2 },
      { text: "独立负责某个部分", score: -2 }
    ]
  },
  {
    id: 20,
    text: "在培训课程中，你更喜欢：",
    category: "EI",
    options: [
      { text: "小组讨论和角色扮演", score: 2 },
      { text: "听讲和独立练习", score: -2 }
    ]
  },
  {
    id: 21,
    text: "面对新环境，你会：",
    category: "EI",
    options: [
      { text: "主动认识新的同事", score: 2 },
      { text: "等待他人来认识你", score: -2 }
    ]
  },
  // ... 继续添加EI维度的题目

  // S vs N (感觉-直觉) 维度 - 26题
  {
    id: 22,
    text: "你更相信：",
    category: "SN",
    options: [
      { text: "亲身经历和具体事实", score: 2 },
      { text: "直觉感受和未来可能", score: -2 }
    ]
  },
  {
    id: 23,
    text: "你更关注：",
    category: "SN",
    options: [
      { text: "当下的现实情况", score: 2 },
      { text: "未来的发展可能", score: -2 }
    ]
  },
  {
    id: 24,
    text: "在工作中，你更擅长：",
    category: "SN",
    options: [
      { text: "执行具体的任务和细节", score: 2 },
      { text: "构思创新的想法和概念", score: -2 }
    ]
  },
  // S vs N (感觉-直觉) 维度继续
  {
    id: 25,
    text: "在阅读文章时，你更注重：",
    category: "SN",
    options: [
      { text: "文字描述的具体内容", score: 2 },
      { text: "文章传达的整体含义", score: -2 }
    ]
  },
  {
    id: 26,
    text: "你更喜欢的培训方式是：",
    category: "SN",
    options: [
      { text: "循序渐进的实操演练", score: 2 },
      { text: "概念性的理论讲解", score: -2 }
    ]
  },
  {
    id: 27,
    text: "在解决问题时，你更依赖：",
    category: "SN",
    options: [
      { text: "已有的经验和方法", score: 2 },
      { text: "创新的思路和灵感", score: -2 }
    ]
  },
  {
    id: 28,
    text: "你更喜欢处理：",
    category: "SN",
    options: [
      { text: "现实中的具体问题", score: 2 },
      { text: "理论上的抽象概念", score: -2 }
    ]
  },
  {
    id: 29,
    text: "在工作汇报时，你更倾向于：",
    category: "SN",
    options: [
      { text: "提供详细的数据和事实", score: 2 },
      { text: "分享见解和未来展望", score: -2 }
    ]
  },
  {
    id: 30,
    text: "面对新项目，你更关注：",
    category: "SN",
    options: [
      { text: "具体的执行细节", score: 2 },
      { text: "创新的发展机会", score: -2 }
    ]
  },
  {
    id: 31,
    text: "你更容易理解：",
    category: "SN",
    options: [
      { text: "清晰的步骤说明", score: 2 },
      { text: "概括性的方向指导", score: -2 }
    ]
  },
  {
    id: 32,
    text: "在学习新事物时，你更喜欢：",
    category: "SN",
    options: [
      { text: "按部就班地掌握", score: 2 },
      { text: "寻找内在的联系", score: -2 }
    ]
  },
  {
    id: 33,
    text: "你更看重：",
    category: "SN",
    options: [
      { text: "实际的操作经验", score: 2 },
      { text: "创新的思维方式", score: -2 }
    ]
  },
  {
    id: 34,
    text: "在描述事物时，你更倾向于：",
    category: "SN",
    options: [
      { text: "具体详细的描述", score: 2 },
      { text: "比喻和联想的表达", score: -2 }
    ]
  },
  {
    id: 35,
    text: "解决问题时，你更倾向于：",
    category: "SN",
    options: [
      { text: "使用已证实的方法", score: 2 },
      { text: "尝试创新的解决方案", score: -2 }
    ]
  },
  {
    id: 36,
    text: "你更欣赏：",
    category: "SN",
    options: [
      { text: "实际的贡献", score: 2 },
      { text: "创新的想法", score: -2 }
    ]
  },
  {
    id: 37,
    text: "你更关注：",
    category: "SN",
    options: [
      { text: "现有的事实", score: 2 },
      { text: "潜在的机会", score: -2 }
    ]
  },
  {
    id: 38,
    text: "你更喜欢的领导是：",
    category: "SN",
    options: [
      { text: "注重实效的", score: 2 },
      { text: "富有远见的", score: -2 }
    ]
  },
  {
    id: 39,
    text: "在学习新技能时，你更喜欢：",
    category: "SN",
    options: [
      { text: "循序渐进的指导", score: 2 },
      { text: "自由探索的空间", score: -2 }
    ]
  },
  {
    id: 40,
    text: "你更看重：",
    category: "SN",
    options: [
      { text: "实际的应用", score: 2 },
      { text: "创新的思维", score: -2 }
    ]
  },
  {
    id: 41,
    text: "你更愿意：",
    category: "SN",
    options: [
      { text: "完善现有的方案", score: 2 },
      { text: "开发全新的方案", score: -2 }
    ]
  },
  {
    id: 42,
    text: "你更擅长：",
    category: "SN",
    options: [
      { text: "执行具体计划", score: 2 },
      { text: "构思发展方向", score: -2 }
    ]
  },
  {
    id: 43,
    text: "你更喜欢的工作环境是：",
    category: "SN",
    options: [
      { text: "稳定有序的", score: 2 },
      { text: "充满变化的", score: -2 }
    ]
  },
  {
    id: 44,
    text: "你更倾向于：",
    category: "SN",
    options: [
      { text: "保持传统做法", score: 2 },
      { text: "尝试新的方法", score: -2 }
    ]
  },
  {
    id: 45,
    text: "你更喜欢处理：",
    category: "SN",
    options: [
      { text: "具体的数据", score: 2 },
      { text: "抽象的概念", score: -2 }
    ]
  },
  {
    id: 46,
    text: "你更看重：",
    category: "SN",
    options: [
      { text: "实际的效果", score: 2 },
      { text: "创新的价值", score: -2 }
    ]
  },
  {
    id: 47,
    text: "你更相信：",
    category: "SN",
    options: [
      { text: "亲身体验", score: 2 },
      { text: "直觉感受", score: -2 }
    ]
  },
  // ... 继续添加更多SN维度的题目

  // T vs F (思维-情感) 维度 - 24题
  {
    id: 48,
    text: "在做决定时，你更看重：",
    category: "TF",
    options: [
      { text: "客观的事实和逻辑", score: 2 },
      { text: "对他人的影响和感受", score: -2 }
    ]
  },
  {
    id: 49,
    text: "你认为更重要的是：",
    category: "TF",
    options: [
      { text: "公平和正确的决定", score: 2 },
      { text: "和谐与关怀的态度", score: -2 }
    ]
  },
  {
    id: 50,
    text: "在处理矛盾时，你倾向于：",
    category: "TF",
    options: [
      { text: "基于原则和规则处理", score: 2 },
      { text: "考虑每个人的具体情况", score: -2 }
    ]
  },
  // T vs F (思维-情感) 维度继续
  {
    id: 51,
    text: "在评价他人工作时，你更注重：",
    category: "TF",
    options: [
      { text: "工作效率和成果", score: 2 },
      { text: "工作态度和努力", score: -2 }
    ]
  },
  {
    id: 52,
    text: "当朋友遇到问题时，你会：",
    category: "TF",
    options: [
      { text: "分析问题并提供解决方案", score: 2 },
      { text: "倾听并给予情感支持", score: -2 }
    ]
  },
  {
    id: 53,
    text: "在团队合作中，你更重视：",
    category: "TF",
    options: [
      { text: "任务的完成质量", score: 2 },
      { text: "团队的和谐氛围", score: -2 }
    ]
  },
  {
    id: 54,
    text: "你认为一个好的领导应该：",
    category: "TF",
    options: [
      { text: "公正客观，注重效率", score: 2 },
      { text: "体恤下属，关心成长", score: -2 }
    ]
  },
  {
    id: 55,
    text: "在处理反馈时，你更看重：",
    category: "TF",
    options: [
      { text: "直接指出问题所在", score: 2 },
      { text: "注意对方的感受", score: -2 }
    ]
  },
  {
    id: 56,
    text: "你更容易被人评价为：",
    category: "TF",
    options: [
      { text: "理性和客观的", score: 2 },
      { text: "善解人意的", score: -2 }
    ]
  },
  {
    id: 57,
    text: "在做选择时，你更依赖：",
    category: "TF",
    options: [
      { text: "逻辑分析", score: 2 },
      { text: "个人价值观", score: -2 }
    ]
  },
  {
    id: 58,
    text: "你更欣赏的品质是：",
    category: "TF",
    options: [
      { text: "公正和理性", score: 2 },
      { text: "同理心和善良", score: -2 }
    ]
  },
  {
    id: 59,
    text: "在解决冲突时，你更倾向于：",
    category: "TF",
    options: [
      { text: "寻找最合理的解决方案", score: 2 },
      { text: "寻求各方都能接受的方案", score: -2 }
    ]
  },
  {
    id: 60,
    text: "你更喜欢的工作环境是：",
    category: "TF",
    options: [
      { text: "注重效率和成果", score: 2 },
      { text: "重视人际关系", score: -2 }
    ]
  },
  {
    id: 61,
    text: "在给出建议时，你更倾向于：",
    category: "TF",
    options: [
      { text: "直接指出问题", score: 2 },
      { text: "委婉表达意见", score: -2 }
    ]
  },
  {
    id: 62,
    text: "你更看重：",
    category: "TF",
    options: [
      { text: "真实客观的表达", score: 2 },
      { text: "维护他人的感受", score: -2 }
    ]
  },
  {
    id: 63,
    text: "在工作评估时，你更关注：",
    category: "TF",
    options: [
      { text: "目标的达成情况", score: 2 },
      { text: "团队的协作氛围", score: -2 }
    ]
  },
  {
    id: 64,
    text: "你认为更重要的是：",
    category: "TF",
    options: [
      { text: "保持客观公正", score: 2 },
      { text: "照顾他人感受", score: -2 }
    ]
  },
  {
    id: 65,
    text: "在处理问题时，你更倾向于：",
    category: "TF",
    options: [
      { text: "采用最有效的方法", score: 2 },
      { text: "考虑对他人的影响", score: -2 }
    ]
  },
  {
    id: 66,
    text: "你更愿意被人认为是：",
    category: "TF",
    options: [
      { text: "能力出众的", score: 2 },
      { text: "富有同情心的", score: -2 }
    ]
  },
  {
    id: 67,
    text: "在团队中，你更注重：",
    category: "TF",
    options: [
      { text: "任务的完成度", score: 2 },
      { text: "成员的参与感", score: -2 }
    ]
  },
  {
    id: 68,
    text: "你更倾向于：",
    category: "TF",
    options: [
      { text: "坚持原则和标准", score: 2 },
      { text: "灵活处理人际关系", score: -2 }
    ]
  },
  {
    id: 69,
    text: "在做决策时，你更看重：",
    category: "TF",
    options: [
      { text: "成本效益分析", score: 2 },
      { text: "对人员的影响", score: -2 }
    ]
  },
  {
    id: 70,
    text: "你更喜欢的领导风格是：",
    category: "TF",
    options: [
      { text: "目标导向型的", score: 2 },
      { text: "关系导向型的", score: -2 }
    ]
  },
  {
    id: 71,
    text: "在处理分歧时，你更倾向于：",
    category: "TF",
    options: [
      { text: "据理力争", score: 2 },
      { text: "寻求共识", score: -2 }
    ]
  },

  // J vs P (判断-知觉) 维度 - 22题
  {
    id: 72,
    text: "你更喜欢：",
    category: "JP",
    options: [
      { text: "按计划行事，提前安排", score: 2 },
      { text: "随机应变，保持灵活", score: -2 }
    ]
  },
  {
    id: 73,
    text: "对于最后期限，你通常：",
    category: "JP",
    options: [
      { text: "提前完成任务", score: 2 },
      { text: "在最后期限前赶工", score: -2 }
    ]
  },
  {
    id: 74,
    text: "你的工作环境通常是：",
    category: "JP",
    options: [
      { text: "井然有序，物品摆放整齐", score: 2 },
      { text: "灵活多变，随手可及", score: -2 }
    ]
  },
  // J vs P (判断-知觉) 维度继续
  {
    id: 75,
    text: "你更倾向于：",
    category: "JP",
    options: [
      { text: "制定详细的计划", score: 2 },
      { text: "根据情况随机应变", score: -2 }
    ]
  },
  {
    id: 76,
    text: "在工作中，你更喜欢：",
    category: "JP",
    options: [
      { text: "明确的任务和期限", score: 2 },
      { text: "灵活的安排和调整", score: -2 }
    ]
  },
  {
    id: 77,
    text: "对于规则和制度，你认为：",
    category: "JP",
    options: [
      { text: "应该严格遵守", score: 2 },
      { text: "可以灵活变通", score: -2 }
    ]
  },
  {
    id: 78,
    text: "你更喜欢的生活方式是：",
    category: "JP",
    options: [
      { text: "规律有序的生活", score: 2 },
      { text: "随性自由的生活", score: -2 }
    ]
  },
  {
    id: 79,
    text: "面对新任务时，你会：",
    category: "JP",
    options: [
      { text: "先制定完整计划", score: 2 },
      { text: "边做边调整方向", score: -2 }
    ]
  },
  {
    id: 80,
    text: "你的日程安排通常是：",
    category: "JP",
    options: [
      { text: "提前计划好的", score: 2 },
      { text: "即兴决定的", score: -2 }
    ]
  },
  {
    id: 81,
    text: "你更喜欢的工作节奏是：",
    category: "JP",
    options: [
      { text: "稳定有序的进展", score: 2 },
      { text: "灵活机动的调整", score: -2 }
    ]
  },
  {
    id: 82,
    text: "对于决定，你倾向于：",
    category: "JP",
    options: [
      { text: "尽快做出决定", score: 2 },
      { text: "保持开放态度", score: -2 }
    ]
  },
  {
    id: 83,
    text: "你更看重：",
    category: "JP",
    options: [
      { text: "按时完成任务", score: 2 },
      { text: "探索更多可能", score: -2 }
    ]
  },
  {
    id: 84,
    text: "你的办公桌通常：",
    category: "JP",
    options: [
      { text: "整齐有序", score: 2 },
      { text: "创意性混乱", score: -2 }
    ]
  },
  {
    id: 85,
    text: "对于约会，你倾向于：",
    category: "JP",
    options: [
      { text: "提前确定时间地点", score: 2 },
      { text: "临时决定具体安排", score: -2 }
    ]
  },
  {
    id: 86,
    text: "你更喜欢的项目类型是：",
    category: "JP",
    options: [
      { text: "有明确目标和期限的", score: 2 },
      { text: "可以持续探索的", score: -2 }
    ]
  },
  {
    id: 87,
    text: "在旅行时，你更倾向于：",
    category: "JP",
    options: [
      { text: "按照既定行程走", score: 2 },
      { text: "随性探索新地方", score: -2 }
    ]
  },
  {
    id: 88,
    text: "对于变化，你通常：",
    category: "JP",
    options: [
      { text: "希望提前知道", score: 2 },
      { text: "享受即兴的惊喜", score: -2 }
    ]
  },
  {
    id: 89,
    text: "你更喜欢的工作方式是：",
    category: "JP",
    options: [
      { text: "按部就班完成", score: 2 },
      { text: "灵活机动处理", score: -2 }
    ]
  },
  {
    id: 90,
    text: "对于计划，你倾向于：",
    category: "JP",
    options: [
      { text: "严格执行", score: 2 },
      { text: "视情况调整", score: -2 }
    ]
  },
  {
    id: 91,
    text: "你更喜欢的环境是：",
    category: "JP",
    options: [
      { text: "有序可控的", score: 2 },
      { text: "充满变数的", score: -2 }
    ]
  },
  {
    id: 92,
    text: "完成任务时，你更注重：",
    category: "JP",
    options: [
      { text: "按时按质完成", score: 2 },
      { text: "过程中的收获", score: -2 }
    ]
  },
  {
    id: 93,
    text: "你认为更重要的是：",
    category: "JP",
    options: [
      { text: "做好充分准备", score: 2 },
      { text: "及时把握机会", score: -2 }
    ]
  }
] 