 const map = {
    CAN: {
      value: "CAN",
      left: "US",
      right: null,
    },
    USA: {
      value: "USA",
      left: "MEX",
      right: null,
    },
    MEX: {
      value: "MEX",
      left: "GTM",
      right: "BLZ",
    },
    BLZ: {
      value: "BLZ",
      left: null,
      right: null,
    },
    GTM: {
      value: "GTM",
      left: "SLV",
      right: "HND",
    },
    SLV: {
      value: "SLV",
      left: null,
      right: null,
    },
    HND: {
      value: "HND",
      right: "NIC",
      left: null,
    },
    NIC: {
      value: "NIC",
      right: "CRI",
      left: null,
    },
    CRI: {
      value: "CRI",
      right: "PAN",
      left: null,
    },
    PAN: {
      value: "PAN",
      right: null,
      left: null,
    },
  };

  module.exports = map;