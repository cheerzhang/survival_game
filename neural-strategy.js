/** 神经网络AI冠军：由本地训练写入，push后同步线上。 */
window.NEURAL_STRATEGY={
  "version": "3.0.0",
  "algorithm": "ppo-actor-critic",
  "gameRulesVersion": "critical-survival-v10",
  "architecture": {
    "input": 64,
    "hidden": 32
  },
  "trained": false,
  "requiresRetraining": true,
  "averageDays": 0,
  "actorWeights": [],
  "criticWeights": []
};
