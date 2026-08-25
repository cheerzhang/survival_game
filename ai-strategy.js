/**
 * 正式 AI 策略配置。
 * 本地回归测试确认新参数更好后，只修改这个文件并发布。
 */
window.AI_STRATEGY={
  "version": "1.6.11",
  "description": "第 4 代冠军：适应度 4124.6，平均生存 36.1 天",
  "eatMealBelow": 72,
  "eatBerryBelow": 47,
  "fishBelow": 60,
  "trapThreatDistance": 4,
  "testSpeed": 4,
  "buildShelterBeforeBase": false,
  "growthValueWeight": 1.75,
  "bedHealthBelow": 70,
  "wallLevel2Day": 3,
  "wallLevel3Day": 10,
  "weapon2Day": 5,
  "weapon3Day": 11,
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
