const secretFiles = [
  {
    id: "FS-001",
    name: "identity_fragment.txt",
    type: "TEXT",
    size: "2.4 KB",
    status: "open",
    content:
      "Identity is not a fixed value. Every system creates its own version of you.",
  },
  {
    id: "FS-002",
    name: "node_report.log",
    type: "LOG",
    size: "6.8 KB",
    status: "open",
    content:
      "FS_NODE_01 stable. External surveillance signal detected. Source unresolved.",
  },
  {
    id: "FS-003",
    name: "red_wheelbarrow.enc",
    type: "ENCRYPTED",
    size: "14.2 KB",
    status: "mission",
    content:
      "7A 31 46 C9 0F 11 A8 42 // ENCRYPTED_PAYLOAD",
  },
  {
    id: "FS-004",
    name: "corrupted_memory.dat",
    type: "DATA",
    size: "?? KB",
    status: "corrupted",
    content:
      "███ 0x00 ███ MEMORY_FRAGMENT ███ 0xFF ███",
  },
  {
    id: "FS-005",
    name: "final_message.txt",
    type: "TEXT",
    size: "1.1 KB",
    status: "root",
    content:
      "ROOT CLEARANCE REQUIRED.",
  },
];

export default secretFiles;