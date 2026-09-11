const secretNodes = [
  {
    id: "FS_NODE_01",
    name: "FS_NODE_01",
    status: "online",
    signal: 98,
    ip: "10.0.4.21",
    access: "ROOT",
  },
  {
    id: "ECORP_GATEWAY",
    name: "ECORP_GATEWAY",
    status: "monitored",
    signal: 74,
    ip: "172.16.9.44",
    access: "WATCH",
  },
  {
    id: "RELAY_05",
    name: "RELAY_05",
    status: "unstable",
    signal: 41,
    ip: "192.168.0.73",
    access: "LIMITED",
  },
  {
    id: "UNKNOWN_NODE",
    name: "UNKNOWN_NODE",
    status: "encrypted",
    signal: null,
    ip: "?.?.?.?",
    access: "LOCKED",
  },
];

export default secretNodes;