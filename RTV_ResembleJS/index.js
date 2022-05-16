const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { options } = config;
let images = [];
const scenarios = [8,7,10,14,9,9,9,6,9,7]
async function executeTestEscenarios(scenario) {
  images=[];
  let resultInfo = {}
  let datetime = new Date().toISOString().replace(/:/g, ".");
  if (!fs.existsSync(`./results/scenario_${scenario}/compare`)) {
    fs.mkdirSync(`./results/scenario_${scenario}/compare`);
  }

  for (let i = 1; i <= scenarios[scenario-1]; i++) {
    console.log('escenario ',scenario, ' imagen: ', i)
    images.push(i)
    const data = await compareImages(
      fs.readFileSync(`../Kraken/reports/scenario_${scenario}/v4.35/${i}.png`),
      fs.readFileSync(`../Kraken/reports/scenario_${scenario}/v4.44/${i}.png`),
      options
    );
    resultInfo[i] = {
      isSameDimensions: data.isSameDimensions,
      dimensionDifference: data.dimensionDifference,
      rawMisMatchPercentage: data.rawMisMatchPercentage,
      misMatchPercentage: data.misMatchPercentage,
      diffBounds: data.diffBounds,
      analysisTime: data.analysisTime
    }
    fs.writeFileSync(`./results/scenario_${scenario}/compare/compare-${i}.png`, data.getBuffer());

  }
  fs.writeFileSync(`./results/scenario_${scenario}/compare/report.html`, createReport(datetime, resultInfo,scenario));
  fs.copyFileSync('./index.css', `./results/scenario_${scenario}/compare/index.css`);

  console.log('------------------------------------------------------------------------------------')
  console.log("Execution finished. Check the report under the results folder")

  return resultInfo;
}


//(async () => console.log(await executeTestEscenarios(1)))();


async function asyncCall() {
  await executeTestEscenarios(1);
  await executeTestEscenarios(2);
  await executeTestEscenarios(3);
  await executeTestEscenarios(4);
  await executeTestEscenarios(5);
  await executeTestEscenarios(6);
  await executeTestEscenarios(7);
  await executeTestEscenarios(8);
  await executeTestEscenarios(9);
  await executeTestEscenarios(10);
}
asyncCall();


function browser(i, info,scenario) {
  //console.log('Scenario: ', scenario)
  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: Chrom</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="../../../../Kraken/reports/scenario_${scenario}/v4.35/${i}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="../../../../Kraken/reports/scenario_${scenario}/v4.44/${i}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${i}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo,scenario) {
  
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${images.map(i=> browser(i, resInfo[i],scenario))}
            </div>
        </body>
    </html>`
}