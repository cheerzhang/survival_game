/**
 * 正式 AI 策略配置。
 * 本地回归测试确认新参数更好后，只修改这个文件并发布。
 */
window.AI_STRATEGY={
  "version": "1.6.10",
  "description": "第 1 代冠军：适应度 5403.1，平均生存 47.6 天",
  "eatMealBelow": 57,
  "eatBerryBelow": 47,
  "fishBelow": 65,
  "trapThreatDistance": 4,
  "testSpeed": 4,
  "buildShelterBeforeBase": false,
  "growthValueWeight": 1.5,
  "bedHealthBelow": 80,
  "wallLevel2Day": 2,
  "wallLevel3Day": 11,
  "weapon2Day": 5,
  "weapon3Day": 10,
  "craftPriority": [
    "kitchen",
    "bed",
    "fence",
    "door",
    "fridge",
    "shelter",
    "trap",
    "rod",
    "strongShelter"
  ]
};
