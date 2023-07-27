class SmartPhone {
  brandName;
  model;
  operatingSystem;
  storage;
  screenSize;
  batteryCapacity;
  cameraResolution;
  processor;
  ram;
  constructor(
    brandName,
    model,
    operatingSystem,
    storage,
    screenSize,
    batteryCapacity,
    cameraResolution,
    processor,
    ram
  ) {
    this.brandName = brandName;
    this.model = model;
    this.operatingSystem;
    this.storage = storage;
    this.screenSize = screenSize;
    this.batteryCapacity = batteryCapacity;
    this.cameraResolution = cameraResolution;
    this.processor = processor;
    this.ram = ram;
  }
  getInfo() {
    console.log(`
    About this ${this.model}

Brand: ${this.brandName}
Model: ${this.model}
Operating System: ${this.operatingSystem}
Storage Capacity: ${this.storage}
Screen Size: ${this.screenSize}
Battery Capacity: ${this.batteryCapacity}
Camera Resolution: ${this.cameraResolution}
Processor: ${this.processor}
Ram: ${this.ram}
`);
  }
  isBatteryGood(batteryCapacity) {
    if (batteryCapacity > 3000) {
      return true;
    } else {
      return false;
    }
  }
}

const my = new SmartPhone(
  "Apple",
  "Apple17 Promax",
  "Android",
  "512GB",
  "8in",
  "5328mAh",
  "77MP",
  "Apple A17 Bionic",
  "8GB"
);
my.getInfo();

let takePhoto = document.getElementById("photo");

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
takePhoto.addEventListener("click", () => {
  audio.play();
  alert("You took a photo. But, it is ugly. Do you want to take more?");
});

function st() {
  let appStorage = "217GB";
  let videoAndImgStorage = "158GB";
  let others = "121GB";
  const storage = 516;
  const hhh =
    parseFloat(appStorage) +
    parseFloat(videoAndImgStorage) +
    parseFloat(others);
  let diff = storage - hhh;
  let h3 = document.querySelector("h3");
  if (diff < 32) {
    h3.innerHTML = ` You have only ${diff}GB left❗ You better clear some spaces.`;
  } else {
    h3.innerHTML = "You have " + diff + "GB available";
  }
}
let availableStorage = document.getElementById("check");
availableStorage.addEventListener("click", st);
