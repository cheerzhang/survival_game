/**
 * 正式 AI 策略配置。
 * 本地回归测试确认新参数更好后，只修改这个文件并发布。
 */
window.AI_STRATEGY={
  "version": "1.7.1",
  "description": "第 4 代冠军：适应度 457.1，平均生存 3.7 天",
  "eatMealBelow": 72,
  "eatBerryBelow": 42,
  "fishBelow": 60,
  "trapThreatDistance": 3,
  "testSpeed": 4,
  "buildShelterBeforeBase": false,
  "growthValueWeight": 1.5,
  "bedHealthBelow": 70,
  "wallLevel2Day": 3,
  "wallLevel3Day": 9,
  "weapon2Day": 6,
  "weapon3Day": 11,
  "craftPriority": [
    "kitchen",
    "shelter",
    "fence",
    "door",
    "fridge",
    "bed",
    "trap",
    "rod",
    "strongShelter"
  ],
  "survivalWeight": 2.45,
  "hungerWeight": 1.8,
  "threatWeight": 2,
  "tideWeight": 1.45,
  "buildingWeight": 1.1,
  "resourceWeight": 1.25,
  "repairWeight": 1.5,
  "futureWeight": 0.95,
  "explorationWeight": 0.3,
  "farmingWeight": 1.4,
  "storageWeight": 1.1,
  "clothingWeight": 1.3
};
