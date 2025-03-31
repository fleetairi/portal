const flatDataArray = dataArray.flat(2);
//=================== AIRCRAFT ARRAY START =================//
const aircraftArr = [
  { id: 7, pn: "ATR 42-320 HA-KAN", msn: 121 },
  { id: 8, pn: "ATR 42-320 HA-KAM", msn: 66 },
  { id: 9, pn: "ATR 72-202 HA-KAO", msn: 183 },
  { id: 10, pn: "ATR 72-202 HA-KAT", msn: 108 },
  { id: 11, pn: "ATR 72-201 HA-KAU", msn: 198 },
  { id: 13, pn: "ATR 72-201 HA-KAZ", msn: 195 },
  { id: 14, pn: "ATR 72-201 HA-KAX", msn: 381 },
  { id: 15, pn: "ATR 72-202 HA-KAW", msn: 313 },
  { id: 16, pn: "ATR 72-201 HA-KAY", msn: 227 },
  { id: 17, pn: "ATR 72-202 HA-KAI", msn: 265 },
];
//=================== AIRCRAFT ARRAY FINISH =================//

const apiKey = "Bearer 11131|nSLpZtK2mU1lxJZ19KnrAOMGy7uX416t1R97OvMm";

function getRoundedTime(offsetMinutes = 0) {
  const date = new Date();
  const roundedMinutes = Math.round(date.getMinutes() / 15) * 15;
  date.setMinutes(roundedMinutes + offsetMinutes, 0, 0); // Вычитаем или добавляем минуты
  return date;
}

function formatDateTime(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

const performedDate = getRoundedTime(-15); // Время на 15 минут раньше
const strPerformedDate = formatDateTime(performedDate);

const inspectedDate = getRoundedTime(); // Округлённое текущее время
const strInspectedDate = formatDateTime(inspectedDate);

const closedDate = getRoundedTime(+15); // Округлённое текущее время
const strClosedDate = formatDateTime(closedDate);

setTimeout(function () {
  let atField = document.querySelectorAll(".css-jn6ekt")[2];
  let atBtn = document.createElement("button");
  atBtn.textContent = "TASK DATA NOT FOUND";

  let autoFeel = document.querySelectorAll(".css-jn6ekt")[1];
  let autoFeelBtn = document.createElement("button");
  autoFeelBtn.textContent = "TASK DATA OK";

  let $ref, ref;
  let $zone, zone;
  let $task, task;
  let $interval, interval;
  let $access, access;
  let $taskGroup, taskGroup;
  let $pn, pn;
  let $sn, sn;
  let $actionTaken = document.querySelector(".css-c6hujp textarea");
  let bodyData;
  let body;

  let generalInputs = document
    .querySelectorAll(".css-1y9kszn")[2]
    .querySelectorAll(".css-1s50f5r input");

  for (let item of generalInputs) {
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
    } else if ("pn" == item.name) {
      $pn = item;
    } else if ("sn" == item.name) {
      $sn = item;
    }
  }

  const url = window.location.href;
  const onlyNums = url.replace(/\D/g, "");
  const urlId = parseInt(onlyNums);

  const taskRef = document.querySelector(
    "#root > div.layout-wrapper.css-v5vxs4 > main > div > div.MuiBox-root.css-349jg1 > form > div.MuiBox-root.css-md2rbn > div:nth-child(2) > a"
  ).href;
  const onlyNumsTaskRef = taskRef.replace(/\D/g, "");
  const taskRefId = parseInt(onlyNumsTaskRef);

  if (taskRefId != 0) {
    autoFeel.textContent = "DATA ABSENT";
    autoFeel.style.backgroundColor = "rgb(255, 0, 0)";
    let link = "https://portal.fleetair.eu/portal/api/work-order-task/" + urlId;

    async function linkResponse() {
      let response = await fetch(link, {
        headers: {
          accept: "application/json",
          authorization: apiKey,
          "content-type": "application/json",
        },
      });
      let content = await response.json();

      for (let item of aircraftArr) {
        if (item.id == content.aircraft_id) {
          if (content.pn == null || content.pn == "") {
            $pn.placeholder = item.pn;
            pn = item.pn;
          } else {
            $pn.placeholder = content.pn;
            pn = content.pn;
          }

          if (content.sn == null || content.sn == "") {
            $sn.placeholder = item.msn;
            sn = item.msn;
          } else {
            $sn.placeholder = content.sn;
            sn = content.sn;
          }
        }
      }

      const foundItems = flatDataArray.filter((elem) => {
        return elem.task === content.task;
      });
      if (foundItems) {
        for (let item in foundItems) {
          fillPlaceholders(item);
          bodyData = fillBodyData(item);
        }
      }

      function fillPlaceholders(item) {
        console.log(foundItems[item]);
        console.log("DATA OK");

        autoFeel.textContent = "";
        autoFeel.append(autoFeelBtn);
        autoFeel.style.backgroundColor = "rgb(24,196,15)";

        $ref.placeholder = foundItems[item]["ref"];
        $zone.placeholder = foundItems[item]["zone"];
        $access.placeholder = foundItems[item]["access"];
        $taskGroup.placeholder = foundItems[item]["task_group"];
        $actionTaken.placeholder = foundItems[item]["action_taken"];
      }

      function fillBodyData(item) {
        return {
          performed_at: strPerformedDate,
          inspection_at: strInspectedDate,
          closed_at: strClosedDate,
          // performed_by: "289",
          // inspection_by: "132",
          // closed_by: "205",
          performed_by: foundItems[item]["performed_by"],
          inspection_by: foundItems[item]["inspection_by"],
          closed_by: foundItems[item]["closed_by"],
          task: foundItems[item]["task"],
          ref: foundItems[item]["ref"],
          zone: foundItems[item]["zone"],
          access: foundItems[item]["access"],
          ata: foundItems[item]["ata"],
          task_group: foundItems[item]["task_group"],
          man_hour_real_job: foundItems[item]["man_hour_real_job"],
          action_taken: foundItems[item]["action_taken"],
        };
      }

      body = JSON.stringify(bodyData);
      if (body) console.log(body);
    }
    linkResponse();

    document.querySelectorAll(".css-jn6ekt")[1].onclick = function () {
      async function getResponse() {
        let response = await fetch(link, {
          headers: {
            accept: "application/json",
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            authorization: apiKey,
            "content-type": "application/json",
          },
          referrer: url,
          referrerPolicy: "strict-origin-when-cross-origin",
          body: null,
          method: "PATCH",
          mode: "cors",
          credentials: "include",
        });

        fetch("https://portal.fleetair.eu/portal/api/work-order-task-tools", {
          headers: {
            accept: "application/json",
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
  } else {
    atField.textContent = "";
    atField.append(atBtn);

    console.log("DATA NOT FOUND");
    atField.style.backgroundColor = "rgb(255, 0, 0)";
  }
}, 4000);
