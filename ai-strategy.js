/**
 * 正式 AI 策略配置。
 * 本地回归测试确认新参数更好后，只修改这个文件并发布。
 */
window.AI_STRATEGY={
  "version": "1.0.1",
  "description": "降低野猪死亡：更早布置陷阱",
  "eatMealBelow": 62,
  "eatBerryBelow": 42,
  "fishBelow": 70,
  "trapThreatDistance": 4,
  "survivalTargetDay": 4,
  "testSpeed": 4,
  "craftPriority": [
    "trap",
    "kitchen",
    "shelter",
    "rod",
    "fence",
    "door",
    "strongShelter"
  ]
};
