const followEvent = {
  type: "follow",
  message: [
    {
      created_at: "2017-08-22 00:14:35",
      id: "170884026",
      name: "Username",
      _id: "74a0b93e736f1f14762111f8ae34bf42"
    }
  ],
  for: "twitch_account"
}

const subscriptionEvent = {
  type: "subscription",
  message: [
    {
      name: "Username",
      months: 7,
      message: "sub message",
      emotes: null,
      sub_plan: "1000",
      sub_plan_name: "Sample Plan name",
      sub_type: "resub",
      _id: "a226a8c223634afdc368439c1da7aaba"
    }
  ],
  for: "twitch_account"
}

const raidEvent = {
  type: "raid", 
  message: [
    {
      name: "Username",  
      raiders: 138, 
      _id: "6f306e1fadf37130b5d5445b95b22436"
    }
  ],
  for: "twitch_account", 
  event_id: "evt_a6737f6334591943e5a04b0d792000d6"
}

export { followEvent, subscriptionEvent, raidEvent };