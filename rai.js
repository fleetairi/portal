const rev = "REV.009 JAN 01/25."; //ATR-72

let dataArray = [
  [
    [
      {
        fin1: "3RS1",
        fin2: "3RS2",
        description: "NAV CONTROL PANEL",
        ref: "ATR-A-34-55-80-00001-520A-A, ATR-A-34-55-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `NAV CONTROL PANEL WAS REPLACED IAW: ATR-A-34-55-80-00001-520A-A, ATR-A-34-55-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED. CHECK IS OK`,
      },
      {
        fin1: "1XA",
        fin2: "2XA",
        description: "STATIC INVERTER",
        ref: "ATR-A-24-21-80-03001-520A-A, ATR-A-24-21-80-03001-720A-A",
        zone: "210,214",
        access: "214BZ",
        ata: "24",
        action_taken: `STATIC INVERTER WAS REPLACED IAW: ATR-A-24-21-80-03001-520A-A, ATR-A-24-21-80-03001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK`,
      },
      {
        fin1: "9TU",
        fin2: "",
        description: "FDR",
        ref: "ATR-A-31-31-30-00001-520A-A, ATR-A-31-31-30-00001-720A-A",
        zone: "210,214,310",
        access: "835",
        ata: "31",
        action_taken: `FLIGHT DATA RECORDER WAS REPLACED IAW: ATR-A-31-31-30-00001-520A-A, ATR-A-31-31-30-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK`,
      },
      {
        fin1: "1RK",
        fin2: "",
        description: "CVR",
        ref: "ATR-A-23-71-30-00001-520A-A, ATR-A-23-71-30-00001-720A-A",
        zone: "211,212,311,851",
        access: "835",
        ata: "23",
        action_taken: `COCKPIT VOICE RECORDER WAS REPLACED IAW: ATR-A-23-71-30-00001-520A-A, ATR-A-23-71-30-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK`,
      },
      {
        fin1: "101FN1",
        fin2: "101FN2",
        description: "EADI",
        ref: "ATR-A-34-74-80-00001-520A-A, ATR-A-34-74-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `EADI WAS REPLACED IAW: ATR-A-34-74-80-00001-520A-A, ATR-A-34-74-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK`,
      },
      {
        fin1: "101FN11",
        fin2: "101FN21",
        description: "EHSI",
        ref: "ATR-A-34-74-80-00001-520A-A, ATR-A-34-74-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `EHSI WAS REPLACED IAW: ATR-A-34-74-80-00001-520A-A, ATR-A-34-74-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK`,
      },
      {
        fin1: "10FL1",
        fin2: "10FL2",
        description: "VSI",
        ref: "ATR-A-34-14-80-00001-520A-A, ATR-A-34-14-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `VERTICAL SPEED INDICATOR WAS REPLACED IAW: ATR-A-34-14-80-00001-520A-A, ATR-A-34-14-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "17FL",
        fin2: "",
        description: "TAS/TEMPERATURE INDICATOR",
        ref: "ATR-A-34-15-80-00001-520A-A, ATR-A-34-15-80-00001-520A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `TAS/TEMPERATURE INDICATOR WAS REPLACED IAW: ATR-A-34-15-80-00001-520A-A, ATR-A-34-15-80-00001-520A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "11FL1",
        fin2: "11FL2",
        description: "ASI",
        ref: "ATR-A-34-13-80-01001-520A-A, ATR-A-34-13-80-01001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `AIRSPEED INDICATOR WAS REPLACED IAW: ATR-A-34-13-80-01001-520A-A, ATR-A-34-13-80-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "4CA",
        fin2: "",
        description: "ADVISORY DISPLAY UNIT",
        ref: "ATR-A-22-15-80-00001-520A-A, ATR-A-22-15-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "22",
        action_taken: `ADVISORY DISPLAY UNIT WAS REPLACED IAW: ATR-A-22-15-80-00001-520A-A, ATR-A-22-15-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3CA",
        fin2: "",
        description: "AFCS CONTROL PANEL",
        ref: "ATR-A-22-16-80-00001-520A-A, ATR-A-22-16-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "22",
        action_taken: `AFCS CONTROL PANEL WAS REPLACED IAW: ATR-A-22-16-80-00001-520A-A, ATR-A-22-16-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "6FN1",
        fin2: "6FN2",
        description: "RMI",
        ref: "ATR-A-34-29-80-00001-520A-A, ATR-A-34-29-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `RADIO MAGNETIC INDICATOR WAS REPLACED IAW: ATR-A-34-29-80-00001-520A-A, ATR-A-34-29-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3QT",
        fin2: "",
        description: "FUEL QUANTITY INDICATOR",
        ref: "ATR-A-28-42-80-00001-520A-A, ATR-A-28-42-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "28",
        action_taken: `FUEL QUANTITY INDICATOR WAS REPLACED IAW: ATR-A-28-42-80-00001-520A-A, ATR-A-28-42-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "6QT",
        fin2: "",
        description: "FUEL QUANTITY REPEATER",
        ref: "ATR-A-28-42-80-02001-520A-A, ATR-A-28-42-80-02001-720A-A",
        zone: "192",
        access: "192JR (Door)",
        ata: "28",
        action_taken: `FUEL QUANTITY REPEATER WAS REPLACED IAW: ATR-A-28-42-80-02001-520A-A, ATR-A-28-42-80-02001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "150QT",
        fin2: "",
        description: "FUEL QUANTITY PRESELECTOR",
        ref: "ATR-A-28-42-80-01001-520A-A, ATR-A-28-42-80-01001-720A-A",
        zone: "192",
        access: "192JR (Door)",
        ata: "28",
        action_taken: `FUEL QUANTITY PRESELECTOR WAS REPLACED IAW: ATR-A-28-42-80-01001-520A-A, ATR-A-28-42-80-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3KU",
        fin2: "4KU",
        description: "NP INDICATOR",
        ref: "ATR-A-61-42-80-00001-520A-A, ATR-A-61-42-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "61",
        action_taken: `NP INDICATOR WAS REPLACED IAW: ATR-A-61-42-80-00001-520A-A, ATR-A-61-42-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3EY",
        fin2: "4EY",
        description: "ITT INDICATOR",
        ref: "ATR-A-77-21-80-00001-520A-A,ATR-A-77-21-80-00001-720A-A",
        zone: "212",
        access: "N/A",
        ata: "77",
        action_taken: `ITT INDICATOR WAS REPLACED IAW: ATR-A-77-21-80-00001-520A-A,ATR-A-77-21-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3EJ",
        fin2: "4EJ",
        description: "NH/NL INDICATOR",
        ref: "ATR-A-77-11-80-00001-520A-A, ATR-A-77-11-80-00001-720A-A",
        zone: "210,214",
        access: "N/A",
        ata: "77",
        action_taken: `NH/NL INDICATOR WAS REPLACED IAW: ATR-A-77-11-80-00001-520A-A, ATR-A-77-11-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3ES",
        fin2: "4ES",
        description: "OIL TEMPERATURE/PRESSURE INDICATOR",
        ref: "ATR-A-79-33-80-00001-520A-A, ATR-A-79-33-80-00001-720A-A",
        zone: "210,214",
        access: "N/A",
        ata: "79",
        action_taken: `OIL TEMPERATURE/PRESSURE INDICATOR WAS REPLACED IAW: ATR-A-79-33-80-00001-520A-A, ATR-A-79-33-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1SN",
        fin2: "",
        description: "MCDU",
        ref: "ATR-A-34-58-80-00001-520A-A, ATR-A-34-58-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `MCDU WAS REPLACED IAW: ATR-A-34-58-80-00001-520A-A, ATR-A-34-58-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3EP",
        fin2: "4EP",
        description: "TORQUE INDICATOR",
        ref: "ATR-A-77-13-80-00001-520A-A, ATR-A-77-13-80-00001-720A-A",
        zone: "210,211,212,214",
        access: "N/A",
        ata: "77",
        action_taken: `TORQUE INDICATOR WAS REPLACED IAW: ATR-A-77-13-80-00001-520A-A, ATR-A-77-13-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1FP1",
        fin2: "1FP2",
        description: "AHRU",
        ref: "ATR-A-34-25-80-01001-520A-A, ATR-A-34-25-80-01001-720A-A",
        zone: "210,220",
        access: "221GF (Panel)",
        ata: "34",
        action_taken: `AHRU WAS REPLACED IAW: ATR-A-34-25-80-01001-520A-A, ATR-A-34-25-80-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "7HR",
        fin2: "",
        description: "AIR EXTRACTION FAN",
        ref: "ATR-A-21-23-20-00001-520A-A,ATR-A-21-23-20-00001-720A-A",
        zone: "121,214",
        access: "221BF (Panel) 221FF (Panel)",
        ata: "21",
        action_taken: `AIR EXTRACTION FAN WAS REPLACED IAW: ATR-A-21-23-20-00001-520A-A,ATR-A-21-23-20-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "6FL1",
        fin2: "6FL2",
        description: "ALTIMETER",
        ref: "ATR-A-34-12-80-00001-520A-A, ATR-A-34-12-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `ALTIMETER WAS REPLACED IAW: ATR-A-34-12-80-00001-520A-A, ATR-A-34-12-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "19FL",
        fin2: "",
        description: "STBY ALTIMETER",
        ref: "ATR-A-34-12-80-01001-520A-A, ATR-A-34-12-80-01001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `STBY ALTIMETER WAS REPLACED IAW: ATR-A-34-12-80-01001-520A-A, ATR-A-34-12-80-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "13FL",
        fin2: "",
        description: "STBY AIRSPEED INDICATOR",
        ref: "ATR-A-34-13-80-00001-520A-A, ATR-A-34-13-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `STBY AIRSPEED INDICATOR WAS REPLACED IAW: ATR-A-34-13-80-00001-520A-A, ATR-A-34-13-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "9SQ",
        fin2: "",
        description: "WEATHER RADAR CONTROL BOX",
        ref: "ATR-A-34-41-80-00001-520A-A, ATR-A-34-41-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `WEATHER RADAR CONTROL BOX WAS REPLACED IAW: ATR-A-34-41-80-00001-520A-A, ATR-A-34-41-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "5SQ",
        fin2: "",
        description: "WEATHER RADAR RECEIVER-TRANSMITTER",
        ref: "ATR-A-34-41-10-03001-520A-A, ATR-A-34-41-10-03001-720A-A",
        zone: "115,116,210,211,213,713,714",
        access: "713 (Door) 714 (Door) 811(Door)",
        ata: "34",
        action_taken: `WEATHER RADAR RECEIVER-TRANSMITTER WAS REPLACED IAW: ATR-A-34-41-10-03001-520A-A, ATR-A-34-41-10-03001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3QD",
        fin2: "4QD",
        description: "FF INDICATOR",
        ref: "ATR-A-73-31-80-00001-520A-A, ATR-A-73-31-80-00001-720A-A",
        zone: "212",
        access: "N/A",
        ata: "73",
        action_taken: `FUEL FLOW / FUEL USED INDICATOR WAS REPLACED IAW: ATR-A-73-31-80-00001-520A-A, ATR-A-73-31-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "8HM",
        fin2: "",
        description: "PRESSURE CONTROLLER",
        ref: "ATR-A-21-31-80-03001-520A-A, ATR-A-21-31-80-03001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "21",
        action_taken: `PRESSURE CONTROLLER WAS REPLACED IAW: ATR-A-21-31-80-03001-520A-A, ATR-A-21-31-80-03001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3RN1",
        fin2: "3RN2",
        description: "AUDIO CONTROL PANEL",
        ref: "ATR-A-23-51-80-03001-520A-A, ATR-A-23-51-80-03001-720A-A",
        zone: "211,212",
        access: "N/A",
        ata: "23",
        action_taken: `AUDIO CONTROL PANEL WAS REPLACED IAW: ATR-A-23-51-80-03001-520A-A, ATR-A-23-51-80-03001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "8SG",
        fin2: "",
        description: "TCAS CONTROL BOX",
        ref: "ATR-A-34-43-80-02001-520A-A, ATR-A-34-43-80-02001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `TCAS CONTROL BOX WAS REPLACED IAW: ATR-A-34-43-80-02001-520A-A, ATR-A-34-43-80-02001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "2CN",
        fin2: "",
        description: "FLAPS POSITION INDICATOR",
        ref: "ATR-A-27-55-80-00001-520A-A, ATR-A-27-55-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "27",
        action_taken: `FLAPS POSITION INDICATOR WAS REPLACED IAW: ATR-A-27-55-80-00001-520A-A, ATR-A-27-55-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "103FN1",
        fin2: "103FN2",
        description: "EFIS CONTROL PANEL",
        ref: "ATR-A-34-71-80-00001-520A-A, ATR-A-34-71-80-00001-520A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `EFIS CONTROL PANEL WAS REPLACED IAW: ATR-A-34-71-80-00001-520A-A, ATR-A-34-71-80-00001-520A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1FN",
        fin2: "",
        description: "STBY HORIZON",
        ref: "ATR-A-34-27-80-00001-520A-A, ATR-A-34-27-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `STBY HORIZON INDICATOR WAS REPLACED IAW: ATR-A-34-27-80-00001-520A-A, ATR-A-34-27-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "8GN",
        fin2: "",
        description: "PRESSURE TRIPLE INDICATOR",
        ref: "ATR-A-29-32-80-00001-520A-A, ATR-A-29-32-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "29",
        action_taken: `PRESSURE TRIPLE INDICATOR WAS REPLACED IAW: ATR-A-29-32-80-00001-520A-A, ATR-A-29-32-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "9PG",
        fin2: "",
        description: "BPCU DC",
        ref: "ATR-A-24-46-80-00001-520A-A, ATR-A-24-46-80-00001-720A-A",
        zone: "210, 214",
        access: "214BZ (Panel)",
        ata: "24",
        action_taken: `BPCU DC WAS REPLACED IAW: ATR-A-24-46-80-00001-520A-A, ATR-A-24-46-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK`,
      },
      {
        fin1: "9XG",
        fin2: "",
        description: "BPCU AC",
        ref: "ATR-A-24-41-80-00001-520A-A, ATR-A-24-41-80-00001-720A-A",
        zone: "210, 214",
        access: "214BZ (Panel)",
        ata: "24",
        action_taken: `BPCU AC WAS REPLACED IAW: ATR-A-24-41-80-00001-520A-A, ATR-A-24-41-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK`,
      },
      {
        fin1: "1SG",
        fin2: "",
        description: "TCAS COMPUTER",
        ref: "ATR-A-34-43-80-01001-520A-A, ATR-A-34-43-80-01001-720A-A",
        zone: "210, 213",
        access: "213BZ (Panel)",
        ata: "34",
        action_taken: `TCAS COMPUTER WAS REPLACED IAW MP: ATR-A-34-43-80-01001-520A-A AND ATR-A-34-43-80-01001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK`,
      },
      {
        fin1: "1RC1",
        fin2: "1RC2",
        description: "VHF COMM TRANSCEIVER",
        ref: "ATR-A-23-12-80-00001-520A-A; ATR-A-23-12-80-00001-720A-A",
        zone: "210,220",
        access: "213CZ (Panel)",
        ata: "23",
        action_taken: `TRANSCEIVER VHF COMM WAS REPLACED IAW MP: ATR-A-23-12-80-00001-520A-A; ATR-A-23-12-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3RC1",
        fin2: "3RC2",
        description: "VHF CONTROL UNIT",
        ref: "ATR-A-23-12-80-01001-520A-A; ATR-A-23-12-80-01001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "23",
        action_taken: `VHF CONTROL UNIT WAS REPLACED IAW MP: ATR-A-23-12-80-01001-520A-A; ATR-A-23-12-80-01001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1CA",
        fin2: "",
        description: "AFCS COMPUTER",
        ref: " ATR-A-22-18-80-00001-520A-A, ATR-A-22-18-80-00001-720A-A",
        zone: "210,213",
        access: "213CZ (Panel)",
        ata: "22",
        action_taken: `AFCS COMPUTER WAS REPLACED IAW MP: ATR-A-22-18-80-00001-520A-A,  ATR-A-22-18-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1RS1",
        fin2: "1RS2",
        description: "VOR/ILS RECEIVER",
        ref: "ATR-A-34-55-80-01001-520A-A, ATR-A-34-55-80-01001-720A-A",
        zone: "210,213",
        access: "213CZ (Panel)",
        ata: "34",
        action_taken: `VOR/ILS/MKR RECEIVER WAS REPLACED IAW MP: ATR-A-34-55-80-01001-520A-A, ATR-A-34-55-80-01001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3RS1",
        fin2: "3RS2",
        description: "VOR/ILS CONTROL PANEL",
        ref: "ATR-A-34-55-80-00001-520A-A, ATR-A-34-55-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `VOR/ILS/DME CONTROL UNIT WAS REPLACED IAW: ATR-A-34-55-80-00001-520A-A, ATR-A-34-55-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1SD1",
        fin2: "1SD2",
        description: "DME INTERROGATOR",
        ref: "ATR-A-34-51-80-00001-520A-A, ATR-A-34-51-80-00001-720A-A",
        zone: "210,211",
        access: "213BZ (213CZ)",
        ata: "34",
        action_taken: `DME INTERROFATOR WAS REPLACED IAW MP: ATR-A-34-51-80-00001-520A-A, ATR-A-34-51-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1RP1",
        fin2: "1RP2",
        description: "ADF RECEIVER",
        ref: "ATR-A-34-53-80-00001-520A-A, ATR-A-34-53-80-00001-720A-A",
        zone: "213",
        access: "N/A",
        ata: "34",
        action_taken: `ADF RECEIVER WAS REPLACED IAW MP: ATR-A-34-53-80-00001-520A-A, ATR-A-34-53-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3RP1",
        fin2: "3RP2",
        description: "ADF CONTROL PANEL",
        ref: "ATR-A-34-53-80-01001-520A-A, ATR-A-34-53-80-01001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `ADF CONTROL UNIT WAS REPLACED IAW: ATR-A-34-53-80-01001-520A-A, ATR-A-34-53-80-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "155SN",
        fin2: "",
        description: "GNSS",
        ref: "ATR-A-34-58-80-03001-520A-A, ATR-A-34-58-80-03001-720A-A",
        zone: "210,213",
        access: "N/A",
        ata: "34",
        action_taken: `(GNSS) Navigation Processor Unit WAS REPLACED IAW MP: ATR-A-34-58-80-03001-520A-A, ATR-A-34-58-80-03001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1TU",
        fin2: "",
        description: "FDAU",
        ref: "ATR-A-31-31-80-01001-520A-A, ATR-A-31-31-80-01001-720A-A",
        zone: "210,213",
        access: "213CZ(Panel)",
        ata: "31",
        action_taken: `FDAU WAS REPLACED IAW MP: ATR-A-31-31-80-01001-520A-A, ATR-A-31-31-80-01001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "191TU",
        fin2: "",
        description: "MPC",
        ref: "ATR-A-31-31-80-05001-520A-A ,ATR-A-31-31-80-05001-720A-A",
        zone: "210,213,214",
        access: "213BZ (Panel)",
        ata: "31",
        action_taken: `MPC WAS REPLACED IAW MP: ATR-A-31-31-80-05001-520A-A ,ATR-A-31-31-80-05001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1SH1",
        fin2: "1SH2",
        description: "ATC TRANSPOTDER",
        ref: "ATR-A-34-52-80-00001-520A-A, ATR-A-34-52-80-00001-720A-A",
        zone: "210 213,221",
        access: "213BZ (Panel) 221CZ (Panel)",
        ata: "34",
        action_taken: `ATC TRANSPONDER WAS REPLACED IAW MP: ATR-A-34-52-80-00001-520A-A, ATR-A-34-52-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "15GG",
        fin2: "",
        description: "ANTISKID CONTROL UNIT",
        ref: "ATR-A-32-42-80-00001-520A-A, ATR-A-32-42-80-00001-720A-A",
        zone: "210",
        access: "214AZ",
        ata: "32",
        action_taken: `ANTISKID CONTROL UNIT TRANSPONDER WAS REPLACED IAW MP: ATR-A-32-42-80-00001-520A-A, ATR-A-32-42-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1UA1",
        fin2: "1UA2",
        description: "MFC",
        ref: "ATR-A-31-48-80-00001-520A-A, ATR-A-31-48-80-00001-720A-A",
        zone: "210",
        access: "214CZ (Panel)",
        ata: "31",
        action_taken: `MFC WAS REPLACED IAW MP: ATR-A-31-48-80-00001-520A-A, ATR-A-31-48-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1FL1",
        fin2: "1FL2",
        description: "ADC",
        ref: "ATR-A-34-11-80-00001-520A-A, ATR-A-34-11-80-00001-720A-A",
        zone: "210,211,213",
        access: "211WZ (Panel)",
        ata: "34",
        action_taken: `ADC WAS REPLACED IAW MP: ATR-A-34-11-80-00001-520A-A, ATR-A-34-11-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "105FN1",
        fin2: "105FN2",
        description: "SYMBOL GENERATOR",
        ref: "ATR-A-34-71-80-01001-520A-A, ATR-A-34-71-80-01001-720A-A",
        zone: "210",
        access: "211WZ ",
        ata: "34",
        action_taken: `SYMBOL GENERATOR UNIT WAS REPLACED IAW MP: ATR-A-34-71-80-01001-520A-A, ATR-A-34-71-80-01001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1WZ",
        fin2: "",
        description: "EGPWS COMPUTER",
        ref: "ATR-A-34-48-80-00001-520A-A, ATR-A-34-48-80-00001-520A-A",
        zone: "210,213",
        access: "211WZ ",
        ata: "34",
        action_taken: `EGPWS COMPUTER WAS REPLACED IAW MP: ATR-A-34-71-80-01001-520A-A, ATR-A-34-71-80-01001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1SA",
        fin2: "5001SA",
        description: "RADIO ALTIMETER TRANSCEIVER",
        ref: "ATR-A-34-42-80-00001-520A-A, ATR-A-34-42-80-00001-520A-A",
        zone: "210,213",
        access: "211WZ ",
        ata: "34",
        action_taken: `RADIO ALTIMETER TRANSCEIVER WAS REPLACED IAW MP: ATR-A-34-42-80-00001-520A-A, ATR-A-34-42-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "5PU",
        fin2: "6PU",
        description: "GCU DC",
        ref: "ATR-A-24-32-80-00001-520A-A, ATR-A-24-32-80-00001-720A-A",
        zone: "210,214",
        access: "214BZ",
        ata: "24",
        action_taken: `GCU DC WAS REPLACED IAW MP: ATR-A-24-32-80-00001-520A-A, ATR-A-24-32-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "9XU",
        fin2: "10XU",
        description: "GCU AC",
        ref: "ATR-A-24-22-80-00001-520A-A, ATR-A-24-22-80-00001-720A-A",
        zone: "212,214",
        access: "214BZ ",
        ata: "24",
        action_taken: `GCU AC WAS REPLACED IAW MP:ATR-A-24-22-80-00001-520A-A, ATR-A-24-22-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "5FN",
        fin2: "10FN",
        description: "INSTRUMENT REMOTE CONTROLLERS",
        ref: "ATR-A-34-28-80-00001-520A-A, ATR-A-34-28-80-00001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "34",
        action_taken: `INSTRUMENT REMOTE CONTROLLERS WAS REPLACED IAW ATR-A-34-28-80-00001-520A-A, ATR-A-34-28-80-00001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1MX",
        fin2: "",
        description: "ELT",
        ref: "ATR-A-25-65-20-05001-520A-A, ATR-A-25-65-20-05001-720A-A",
        zone: "210,250,255",
        access: "255BC (Panel)",
        ata: "25",
        action_taken: `ELT WAS REPLACED IAW ATR-A-25-65-20-05001-520A-A, ATR-A-25-65-20-05001-720A-A ${rev} ZONE CLEAR, PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "11PG",
        fin2: "",
        description: "EXTERNAL POWER CONTACTOR",
        ref: "ATR-A-24-46-80-01001-520A-A, ATR-A-24-46-80-01001-720A-A",
        zone: "212,214,220,222",
        access: "114BR (Door) 114CR (Door) 212VZ (Panel)",
        ata: "24",
        action_taken: `EXTERNAL POWER CONTACTOR WAS REPLACED IAW: ATR-A-24-46-80-01001-520A-A, ATR-A-24-46-80-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "11PU",
        fin2: "12PU",
        description: "DC STARTER GENERATOR CONTACTOR",
        ref: "ATR-A-24-32-80-01001-520A-A, ATR-A-24-32-80-01001-720A-A",
        zone: "110,114,210,212,214",
        access: "114BR (Door) 114CR (Door) 212VZ (Panel)",
        ata: "24",
        action_taken: `DC STARTER GENERATOR CONTACTOR WAS REPLACED IAW: ATR-A-24-32-80-01001-520A-A, ATR-A-24-32-80-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "16PU",
        fin2: "",
        description: "DC BUS TIE CONTACTOR",
        ref: "ATR-A-24-32-80-07001-520A-A, ATR-A-24-32-80-07001-720A-A",
        zone: "110,114,210,212,214",
        access: "114BR (Door) 114CR (Door) 212VZ (Panel)",
        ata: "24",
        action_taken: `DC BUS TIE CONTACTOR WAS REPLACED IAW: ATR-A-24-32-80-07001-520A-A, ATR-A-24-32-80-07001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "23PA",
        fin2: "42PA",
        description: "BATTERY CHARGE CONTACTOR",
        ref: "ATR-A-24-31-80-09001-520A-A, ATR-A-24-31-80-09001-720A-A",
        zone: "110,114,210,212,214",
        access: "114BR (Door) 114CR (Door) 212VZ (Panel)",
        ata: "24",
        action_taken: `BATTERY CHARGE CONTACTOR WAS REPLACED IAW: ATR-A-24-31-80-09001-520A-A, ATR-A-24-31-80-09001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "29PU",
        fin2: "30PU",
        description: "UTILITY BUS CONTACTOR",
        ref: "ATR-A-24-32-80-05001-520A-A, ATR-A-24-32-80-05001-720A-A",
        zone: "114,210,214",
        access: "114BR (Door) 114CR (Door)",
        ata: "24",
        action_taken: `UTILITY BUS CONTACTOR WAS REPLACED IAW: ATR-A-24-32-80-05001-520A-A, ATR-A-24-32-80-05001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1PA",
        fin2: "2PA",
        description: "BATTERY DC CONTACTOR",
        ref: "ATR-A-24-31-80-06001-520A-A, ATR-A-24-31-80-06001-720A-A",
        zone: "210,212,214",
        access: "114BR (Door) 114CR (Door)",
        ata: "24",
        action_taken: `BATTERY DC CONTACTOR WAS REPLACED IAW: ATR-A-24-31-80-06001-520A-A, ATR-A-24-31-80-06001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3PA",
        fin2: "58PA",
        description: "BATTERY DC CONTACTOR",
        ref: "ATR-A-24-31-80-06001-520A-A, ATR-A-24-31-80-06001-720A-A",
        zone: "210,212,214",
        access: "114BR (Door) 114CR (Door)",
        ata: "24",
        action_taken: `BATTERY DC CONTACTOR WAS REPLACED IAW: ATR-A-24-31-80-06001-520A-A, ATR-A-24-31-80-06001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "4PD",
        fin2: "13PD",
        description: "AC CONSTANT CONTACTOR",
        ref: "ATR-A-24-65-80-00001-520A-A, ATR-A-24-65-80-00001-720A-A",
        zone: "212",
        access: "114BR (Door) 114CR (Door)",
        ata: "24",
        action_taken: `AC CONSTANT CONTACTOR WAS REPLACED IAW: ATR-A-24-65-80-00001-520A-A, ATR-A-24-65-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1KG",
        fin2: "2KG",
        description: "ENGINE STARTING CONTACTOR",
        ref: "ATR-A-80-11-80-00001-520A-A, ATR-A-80-11-80-00001-720A-A",
        zone: "114 210,212,213,214",
        access: "114BR (Door) 114CR (Door) 212VZ (Panel)",
        ata: "80",
        action_taken: `ENGINE STARTING CONTACTOR WAS REPLACED IAW: ATR-A-80-11-80-00001-520A-A, ATR-A-80-11-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3KG",
        fin2: "",
        description: "ENGINE STARTING CONTACTOR",
        ref: "ATR-A-80-11-80-00001-520A-A, ATR-A-80-11-80-00001-720A-A",
        zone: "114 210,212,213,214",
        access: "114BR (Door) 114CR (Door) 212VZ (Panel)",
        ata: "80",
        action_taken: `ENGINE STARTING CONTACTOR WAS REPLACED IAW: ATR-A-80-11-80-00001-520A-A, ATR-A-80-11-80-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "33XA",
        fin2: "",
        description: "AC STBY BUS TRANSFER RELAY",
        ref: "ATR-A-24-21-80-01001-520A-A, ATR-A-24-21-80-01001-720A-A",
        zone: "212,214,220,222",
        access:
          "114BR (Door) 114CR (Door) 212TZ (Panel) 212VZ (Panel) 214AZ (Panel) 214BZ ( Panel)214CZ (Panel)222PZ (Panel)222QZ ( Panel) 222RZ (Panel)",
        ata: "24",
        action_taken: `AC STBY BUS TRANSFER RELAY WAS REPLACED IAW: ATR-A-24-21-80-01001-520A-A, ATR-A-24-21-80-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3LY",
        fin2: "4LY",
        description: "LOGO LIGHT",
        ref: "ATR-A-33-47-40-00001-520A-A, ATR-A-33-47-40-00001-720A-A",
        zone: "212,331.341",
        access: "N/A",
        ata: "33",
        action_taken: `LOGO LIGHT WAS REPLACED IAW: ATR-A-33-47-40-00001-520A-A, ATR-A-33-47-40-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "14HR",
        fin2: "",
        description: "OVERBOARD VENTILATION VALVE",
        ref: " ATR-A-21-23-20-01001-520A-A,  ATR-A-21-23-20-01001-720A-A",
        zone: "122,214",
        access: "N/A",
        ata: "21",
        action_taken: `OVERBOARD VENTILATION VALVE WAS REPLACED IAW: ATR-A-21-23-20-01001-520A-A, ATR-A-21-23-20-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "5LV",
        fin2: "",
        description: "TOP ANTICOLLISION LIGHT",
        ref: "ATR-A-33-48-40-01001-520A-A, ATR-A-33-48-40-01001-720A-A",
        zone: "210,327",
        access: "N/A",
        ata: "33",
        action_taken: `TOP ANTICOLLISION LIGHT WAS REPLACED IAW: ATR-A-33-48-40-01001-720A-A, ATR-A-33-48-40-01001-520A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "9LV",
        fin2: "",
        description: "BOTTOM ANTICOLLISION LIGHT",
        ref: "ATR-A-33-48-50-00001-520A-A, ATR-A-33-48-50-00001-720A-A",
        zone: "193,194,210",
        access: "N/A",
        ata: "33",
        action_taken: `BOTTOM ANTICOLLISION LIGHT WAS REPLACED IAW: ATR-A-33-48-50-00001-520A-A, ATR-A-33-48-50-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3LV",
        fin2: "",
        description: "TOP ANTICOLLISION POWER SUPPLY UNIT",
        ref: "ATR-A-33-48-40-00001-520A-A, ATR-A-33-48-40-00001-720A-A",
        zone: "210,325,327",
        access: "327UL",
        ata: "33",
        action_taken: `TOP ANTICOLLISION POWER SUPPLY UNIT WAS REPLACED IAW: ATR-A-33-48-40-00001-520A-A, ATR-A-33-48-40-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "7LV",
        fin2: "",
        description: "BOTTOM ANTICOLLISION POWER SUPPLY UNIT",
        ref: "ATR-A-33-48-50-01001-520A-A, ATR-A-33-48-50-01001-720A-A",
        zone: "190,193,212",
        access: "N/A",
        ata: "33",
        action_taken: `BOTTOM ANTICOLLISION PSU WAS REPLACED IAW: ATR-A-33-48-50-01001-520A-A, ATR-A-33-48-50-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "5LC",
        fin2: "8LC",
        description: "WING STROBE LIGHT",
        ref: "ATR-A-33-43-70-01001-520A-A, ATR-A-33-43-70-01001-720A-A",
        zone: "516,517,616,617",
        access: "517AL,617AR",
        ata: "33",
        action_taken: `WING STROBE LIGHT WAS REPLACED IAW: ATR-A-33-43-70-01001-520A-A, ATR-A-33-43-70-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "3LC",
        fin2: "6LC",
        description: "WING STROB LIGHT PSU",
        ref: "ATR-A-33-43-70-00001-520A-A, ATR-A-33-43-70-00001-720A-A",
        zone: "WING STROB LIGHT POWER SUPPLY UNIT",
        access: "210,516,517,616,617",
        ata: "517AT,617AT",
        action_taken: `WING STROB LIGHT PSU WAS REPLACED IAW: ATR-A-33-43-70-00001-520A-A, ATR-A-33-43-70-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "12LC",
        fin2: "",
        description: "REAR STROBE LIGHT",
        ref: "ATR-A-33-43-30-01001-520A-A, ATR-A-33-43-30-01001-720A-A",
        zone: "212,213",
        access: "313BL",
        ata: "33",
        action_taken: `REAR STROBE LIGHT WAS REPLACED IAW: ATR-A-33-43-30-01001-520A-A, ATR-A-33-43-30-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "10LC",
        fin2: "",
        description: "REAR STROBE LIGHT PSU",
        ref: "ATR-A-33-43-30-00001-520A-A, ATR-A-33-43-30-00001-720A-A",
        zone: "210,313",
        access: "313BL",
        ata: "33",
        action_taken: `REAR STROBE LIGHT PSU WAS REPLACED IAW: ATR-A-33-43-30-00001-520A-A, ATR-A-33-43-30-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "19FU",
        fin2: "20FU",
        description: "AOA SENSOR",
        ref: "ATR-A-27-36-10-01001-520A-A, ATR-A-27-36-10-01001-720A-A",
        zone: "210",
        access: "N/A",
        ata: "27",
        action_taken: `AOA SENSOR WAS REPLACED IAW: ATR-A-27-36-10-01001-520A-A, ATR-A-27-36-10-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "9WE",
        fin2: "10WE",
        description: "ENGINE FIRE EXTINGUISHER BOTTLE",
        ref: "ATR-A-26-21-70-00001-520A-A, ATR-A-26-21-70-00001-720A-A",
        zone: "210,211,214,295,296",
        access: "295GL, 296GR",
        ata: "26",
        action_taken: `ENGINE FIRE EXTINGUISHER BOTTLE WAS REPLACED IAW: ATR-A-26-21-70-00001-520A-A, ATR-A-26-21-70-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "11WE",
        fin2: "13WE",
        description: "PERCUSSION CARTRIDGE",
        ref: "ATR-A-26-21-70-01001-520A-A, ATR-A-26-21-70-01001-720A-A",
        zone: "210,211,214,295,296",
        access: "295GL, 296GR",
        ata: "26",
        action_taken: `PERCUSSION CARTRIDGE WAS REPLACED IAW: ATR-A-26-21-70-01001-520A-A, ATR-A-26-21-70-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "12WE",
        fin2: "14WE",
        description: "PERCUSSION CARTRIDGE",
        ref: "ATR-A-26-21-70-01001-520A-A, ATR-A-26-21-70-01001-720A-A",
        zone: "210,211,214,295,296",
        access: "295GL, 296GR",
        ata: "26",
        action_taken: `PERCUSSION CARTRIDGE WAS REPLACED IAW: ATR-A-26-21-70-01001-520A-A, ATR-A-26-21-70-01001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "1FU",
        fin2: "",
        description: "STICK PUSHER",
        ref: "ATR-A-27-36-30-00001-520A-A, ATR-A-27-36-30-00001-720A-A",
        zone: "210,310",
        access: "835(Door)",
        ata: "27",
        action_taken: `STICK PUSHER WAS REPLACED IAW: ATR-A-27-36-30-00001-520A-A, ATR-A-27-36-30-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "2LZ",
        fin2: "",
        description: "REFUELING PANEL LIGHT",
        ref: "ATR-A-33-36-50-00001-520A-A, ATR-A-33-36-50-00001-720A-A",
        zone: "192,212",
        access: "192JR",
        ata: "33",
        action_taken: `REFUELING PANEL LIGHT (2LZ) WAS REPLACED IAW: ATR-A-33-36-50-00001-520A-A, ATR-A-33-36-50-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "18CA",
        fin2: "",
        description: "PITCH ACTUATOR",
        ref: "ATR-A-22-13-30-00001-520A-A, ATR-A-22-13-30-00001-720A-A",
        zone: "210,310",
        access: "851 Panel",
        ata: "22",
        action_taken: `AUTOPILOT PITCH ACTUATOR (18CA) WAS REPLACED IAW: ATR-A-22-13-30-00001-520A-A, ATR-A-22-13-30-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK. PN:98S27008001001 FLIGHT CONTROL ENGINE PINS WAS USED`,
      },
      {
        fin1: "19CA",
        fin2: "",
        description: "YAW ACTUATOR",
        ref: "ATR-A-22-13-30-03001-520A-A, ATR-A-22-13-30-03001-720A-A",
        zone: "210,310",
        access: "851 Panel",
        ata: "22",
        action_taken: `AUTOPILOT YAW ACTUATOR (19CA) WAS REPLACED IAW: ATR-A-22-13-30-03001-520A-A, ATR-A-22-13-30-03001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK. PN:98S27008001001 FLIGHT CONTROL ENGINE PINS WAS USED`,
      },
      {
        fin1: "7CA",
        fin2: "",
        description: "ROLL ACTUATOR",
        ref: "ATR-A-22-13-70-00001-520A-A, ATR-A-22-13-70-00001-720A-A",
        zone: "210,241,291,295",
        access: "241BC,295BL,295BZ",
        ata: "22",
        action_taken: `AUTOPILOT ROLL ACTUATOR (7CA) WAS REPLACED IAW: ATR-A-22-13-70-00001-520A-A, ATR-A-22-13-70-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK. PN:98S27008001001 FLIGHT CONTROL ENGINE PINS WAS USED`,
      },
      {
        fin1: "",
        fin2: "",
        description: "THERMOCOUPLE",
        ref: "ATR-A-77-21-60-A0001-520A-A, ATR-A-77-21-60-A0001-720A-A",
        zone: "212, 400,471,472, 481,482",
        access: "473AL,474AR, 475AT, 483AL, 484AR,485AT",
        ata: "77",
        action_taken: `THERMOCOUPLE WAS REPLACED IAW: DMC PW127-0A-77-21-01-00A-520A-A (00198) / Ref. EMM-PWC 720160. ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "34GG",
        fin2: "35GG",
        description: "TEMPERATURE COMPENSATOR",
        ref: "ATR-A-32-42-50-06001-520A-A,ATR-A-32-42-50-06001-720A-A",
        zone: "210,731,741",
        access: "N/A",
        ata: "32",
        action_taken: `TEMPERATURE TRANSMITTER WAS REPLACED IAW: ATR-A-32-42-50-06001-520A-A, ATR-A-32-42-50-06001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "36GG",
        fin2: "37GG",
        description: "TEMPERATURE COMPENSATOR",
        ref: "ATR-A-32-42-50-06001-520A-A, ATR-A-32-42-50-06001-720A-A",
        zone: "210,731,741",
        access: "N/A",
        ata: "32",
        action_taken: `TEMPERATURE TRANSMITTER WAS REPLACED IAW: ATR-A-32-42-50-06001-520A-A, ATR-A-32-42-50-06001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "15HA",
        fin2: "16HA",
        description: "ENGINE BLEED S/O VALVE",
        ref: "ATR-A-36-11-60-00001-520A-A, ATR-A-36-11-60-00001-720A-A",
        zone: "475,485",
        access: "475AT,485AT",
        ata: "36",
        action_taken: `ENGINE BLEED SHUTOFF VALVE WAS REPLACED IAW: ATR-A-36-11-60-00001-520A-A, ATR-A-36-11-60-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "7HK",
        fin2: "",
        description: "CABIN TEMPERATURE INDICATING SENSOR",
        ref: "ATR-A-21-63-20-00001-520A-A, ATR-A-21-63-20-00001-720A-A",
        zone: "210,242",
        access: "242EW",
        ata: "21",
        action_taken: `CABIN TEMPERATURE INDICATING SENSOR WAS REPLACED IAW: ATR-A-21-63-20-00001-520A-A, ATR-A-21-63-20-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "11HH",
        fin2: "",
        description: "FLIGHT COMPARTMENT TEMPERATURE SENSOR",
        ref: "ATR-A-21-61-10-00001-520A-A, ATR-A-21-61-10-00001-720A-A",
        zone: "213",
        access: "211DC ( Panel )",
        ata: "21",
        action_taken: `FLIGHT COMPARTMENT TEMPERATURE SENSOR WAS REPLACED IAW: ATR-A-21-61-10-00001-520A-A, ATR-A-21-61-10-00001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "12HH",
        fin2: "",
        description: "CABIN TEMPERATURE SENSOR",
        ref: "ATR-A-21-61-20-02001-520A-A, ATR-A-21-61-20-02001-720A-A",
        zone: "210,242",
        access: "242EW",
        ata: "21",
        action_taken: `CABIN TEMPERATURE SENSOR WAS REPLACED IAW: ATR-A-21-61-20-02001-520A-A, ATR-A-21-61-20-02001-720A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
      {
        fin1: "8RN1",
        fin2: "8RN2",
        description: "HANDMICE",
        ref: "AFI ATR-A-23-51-XX-09001-421A-A",
        zone: "210",
        access: "N/A",
        ata: "23",
        action_taken: `MICROPHONE-HAND WAS REPLACED IAW: AFI ATR-A-23-51-XX-09001-421A-A ${rev} ZONE CLEAR. PANELS CLOSED.CHECK IS OK.`,
      },
    ],
  ],
];
// let strDataArray = JSON.stringify(dataArray);
// console.log(strDataArray);
//DATABASE FROM 2024-09-21

const apiKey = "Bearer 11131|nSLpZtK2mU1lxJZ19KnrAOMGy7uX416t1R97OvMm";

const currentDate = new Date();
const roundMinutes = Math.round(currentDate.getMinutes() / 15) * 15;
currentDate.setMinutes(roundMinutes);

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
const day = String(currentDate.getDate()).padStart(2, "0");
const hours = String(currentDate.getHours()).padStart(2, "0");
const minutes = String(currentDate.getMinutes()).padStart(2, "0");

const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;

setTimeout(function () {
  let $searchFeel = document.querySelectorAll(".css-jn6ekt")[1];
  let $inputSearch = document.createElement("input");
  $searchFeel.textContent = "";
  $inputSearch.setAttribute("type", "text");
  $inputSearch.setAttribute("id", "inputfield");
  $inputSearch.setAttribute("placeholder", "Enter FIN number");
  $searchFeel.append($inputSearch);

  $inputSearch.addEventListener("input", function (event) {
    let $searchField = event.target.value;

    let $name, name;
    let $title, title;
    let $ref, ref;
    let $zone, zone;
    let $ata, ata;
    let $pn, pn;
    let $description, description;
    let $task, task;
    let $interval, interval;
    let $access, access;
    let $taskGroup, taskGroup;
    let $sn, sn;
    let $partName, partName;
    let $actionTaken = document.querySelector(".css-c6hujp textArea");
    let actionTaken;

    let generalFields = document
      .querySelectorAll(".css-1y9kszn")[2]
      .querySelectorAll(".css-1s50f5r input");
    for (let item of generalFields) {
      if ("ref" == item.name) {
        $ref = item;
      } else if ("zone" == item.name) {
        $zone = item;
      } else if ("task" == item.name) {
        $task = item;
      } else if ("interval" == item.name) {
        $interval = item;
      } else if ("access" == item.name) {
        $access = item;
      } else if ("task_group" == item.name) {
        $taskGroup = item;
      }
    }

    const url = window.location.href;
    const onlyNums = url.replace(/\D/g, "");
    const urlId = parseInt(onlyNums);

    let link = "https://portal.fleetair.eu/portal/api/work-order-task/" + urlId;

    for (let item in dataArray) {
      if (
        dataArray[item]["fin1"] == $searchField ||
        dataArray[item]["fin2"] == $searchField ||
        dataArray[item]["description"] == $searchField
      ) {
        let dataFound = dataArray[item]["description"];
        let autoFeel = document.querySelectorAll(".css-jn6ekt")[2];
        let autoFeelBtn = document.createElement("button");
        autoFeel.textContent = "";
        autoFeelBtn.textContent = dataFound; //"DATA FOUND" replaced to dataFound
        autoFeel.append(autoFeelBtn);
        autoFeel.style.backgroundColor = "rgb(24,196,15)";

        console.log(dataArray[item]);
        console.log("DATA OK");
        $zone.placeholder = dataArray[item]["zone"];
        $access.placeholder = dataArray[item]["access"];
        $taskGroup.placeholder = "N/A";
        $ref.placeholder = dataArray[item]["ref"];
        $task.placeholder = dataArray[item]["ref"];
        $interval.placeholder = "OneTime";
        $actionTaken.placeholder = dataArray[item]["action_taken"];
        ref = dataArray[item]["ref"];
        zone = dataArray[item]["zone"];
        access = dataArray[item]["access"];
        ata = dataArray[item]["ata"];
        actionTaken = dataArray[item]["action_taken"];
      }
    }

    document.querySelectorAll(".css-jn6ekt")[2].onclick = function () {
      async function getResponse() {
        fetch(link, {
          headers: {
            accept: "application/json",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            authorization: apiKey,
            "content-type": "application/json",
          },
          referrer: url,
          referrerPolicy: "strict-origin-when-cross-origin",
          body: `{"performed_at":"${formattedDate}","inspection_at":"${formattedDate}","closed_at":"${formattedDate}","performed_by":"289","inspection_by":"132","closed_by":"205","action_taken":"${actionTaken}","ref":"${ref}","task":"${ref}","interval":"OneTime","zone":"${zone}","access":"${access}","task_group":"N/A","ata":"${ata}", "man_hour_real_job": "02:00"}`,
          method: "PATCH",
          mode: "cors",
          credentials: "include",
        });
        fetch("https://portal.fleetair.eu/portal/api/work-order-task-tools", {
          headers: {
            accept: "application/json",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            authorization: apiKey,
            "content-type": "application/json",
          },
          referrer:
            "https://portal.fleetair.eu/maintenance/work-order-task/update/" +
            urlId,
          referrerPolicy: "strict-origin-when-cross-origin",
          body: `{"wo_item_text":"N/A","quantity":"0","wo_task_id":"${urlId}"}`,
          method: "POST",
          mode: "cors",
          credentials: "include",
        });

        fetch(
          "https://portal.fleetair.eu/portal/api/work-order-task-consumable",
          {
            headers: {
              accept: "application/json",
              "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
              authorization: apiKey,
              "content-type": "application/json",
            },
            referrer:
              "https://portal.fleetair.eu/maintenance/work-order-task/update/" +
              urlId,
            referrerPolicy: "strict-origin-when-cross-origin",
            body: `{"wo_item_text":"N/A","quantity":"0","wo_task_id":"${urlId}"}`,
            method: "POST",
            mode: "cors",
            credentials: "include",
          }
        );
      }
      getResponse();
    };
  });
}, 8000);
