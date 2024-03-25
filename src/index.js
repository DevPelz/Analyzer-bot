import analyzer from "./analyzer.js";
import reporter from "./reporter.js";
import inspector from "./util/inspector.js";
console.log("----SolidityAnalysisResult----");

let fileNames = ["./sample-contract/sample-contract.sol"];
// This is used for generating links in the report.
// https://github.com/code-423n4/
const baseURL = "https://github.com/code-423n4/";

const data = await reporter.generateReports("Code name", baseURL, fileNames);
// console.log('nc_issues');
// console.log(data['nc_issues']);
// console.log(data['gas_issues']);
reporter.createMarkdown(data);
