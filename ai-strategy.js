/**
 * 正式 AI 策略配置。
 * 本地回归测试确认新参数更好后，只修改这个文件并发布。
 */
window.AI_STRATEGY={
  "version": "1.6.9",
  "description": "第 2 代冠军：适应度 3919.2，平均生存 36.2 天",
  "eatMealBelow": 52,
  "eatBerryBelow": 42,
  "fishBelow": 65,
  "trapThreatDistance": 5,
  "testSpeed": 4,
  "buildShelterBeforeBase": false,
  "growthValueWeight": 1.25,
  "bedHealthBelow": 80,
  "wallLevel2Day": 2,
  "wallLevel3Day": 10,
  "weapon2Day": 4,
  "weapon3Day": 10,
  "craftPriority": [
    "kitchen",
    "trap",
    "fence",
    "door",
    "fridge",
    "shelter",
    "bed",
    "rod",
    "strongShelter"
  ]
};
