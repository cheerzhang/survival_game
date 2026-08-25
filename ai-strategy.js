/**
 * 正式 AI 策略配置。
 * 本地回归测试确认新参数更好后，只修改这个文件并发布。
 */
window.AI_STRATEGY={
  "version": "1.7.2",
  "description": "第 3 代冠军：适应度 461.5，平均生存 3.7 天",
  "eatMealBelow": 77,
  "eatBerryBelow": 37,
  "fishBelow": 60,
  "trapThreatDistance": 4,
  "testSpeed": 4,
  "buildShelterBeforeBase": true,
  "growthValueWeight": 1,
  "bedHealthBelow": 75,
  "wallLevel2Day": 3,
  "wallLevel3Day": 10,
  "weapon2Day": 6,
  "weapon3Day": 10,
  "craftPriority": [
    "kitchen",
    "shelter",
    "fence",
    "door",
    "fridge",
    "rod",
    "trap",
    "bed",
    "strongShelter"
  ],
  "survivalWeight": 2.45,
  "hungerWeight": 1.8,
  "threatWeight": 2,
  "tideWeight": 1.45,
  "buildingWeight": 1.35,
  "resourceWeight": 1,
  "repairWeight": 1.5,
  "futureWeight": 1.2,
  "explorationWeight": 0.3,
  "farmingWeight": 1.4,
  "storageWeight": 0.85,
  "clothingWeight": 1.05
};
