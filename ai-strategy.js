/**
 * 正式 AI 策略配置。
 * 本地回归测试确认新参数更好后，只修改这个文件并发布。
 */
window.AI_STRATEGY={
  "version": "1.7.0",
  "description": "开放动作效用AI：保留上一代冠军参数并启用可进化决策权重",
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
  "survivalWeight": 2.2,
  "hungerWeight": 1.8,
  "threatWeight": 2,
  "tideWeight": 1.7,
  "buildingWeight": 1.35,
  "resourceWeight": 1,
  "repairWeight": 1.5,
  "futureWeight": 1.2,
  "explorationWeight": 0.7,
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
