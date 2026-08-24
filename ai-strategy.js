/**
 * 正式 AI 策略配置。
 * 本地回归测试确认新参数更好后，只修改这个文件并发布。
 */
window.AI_STRATEGY={
  "version": "1.2.0",
  "description": "资源成长：采集时综合距离与成长产量",
  "eatMealBelow": 62,
  "eatBerryBelow": 42,
  "fishBelow": 70,
  "trapThreatDistance": 5,
  "survivalTargetDay": 4,
  "testSpeed": 4,
  "buildShelterBeforeBase": false,
  "growthValueWeight": 1.5,
  "craftPriority": [
    "kitchen",
    "trap",
    "fence",
    "door",
    "shelter",
    "rod",
    "strongShelter"
  ]
};
