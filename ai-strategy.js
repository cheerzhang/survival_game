/**
 * 正式 AI 策略配置。
 * 本地回归测试确认新参数更好后，只修改这个文件并发布。
 */
window.AI_STRATEGY={
  "version": "1.6.1",
  "description": "降低野猪死亡：扩大路径陷阱警戒范围",
  "eatMealBelow": 62,
  "eatBerryBelow": 42,
  "fishBelow": 70,
  "trapThreatDistance": 6,
  "testSpeed": 4,
  "buildShelterBeforeBase": false,
  "growthValueWeight": 1.5,
  "bedHealthBelow": 75,
  "wallLevel2Day": 5,
  "wallLevel3Day": 10,
  "weapon2Day": 5,
  "weapon3Day": 10,
  "craftPriority": [
    "kitchen",
    "trap",
    "fence",
    "door",
    "fridge",
    "bed",
    "shelter",
    "rod",
    "strongShelter"
  ]
};
