#!/usr/bin/env node

var fs = require("fs");
var { prompt } = require("prompts");
var seriesList = require("./series");

const makeNewLine = (list) => list.join("\n");
const makeContentLayerList = (list) => list.map((_) => `- ${_}`).join("\n  ");

const generatePost = async () => {
  let title = process.argv[2];

  const isDoNotEnterTitle = !title;

  if (isDoNotEnterTitle) {
    const res = await prompt({
      type: "text",
      name: "title",
      message: "포스트 이름을 입력해주세요.",
    });
    title = res.title;
  }

  const { series } = await prompt({
    type: "select",
    name: "series",
    message: "시리즈를 선택해주세요.",
    choices: seriesList.map((_) => {
      return { title: _, value: _ };
    }),
  });

  let seriesIndex = 0;

  if (series !== "none") {
    seriesIndex = await prompt({
      type: "number",
      name: "seriesIndex",
      message: "몇 번째 시리즈인가요??",
    });
  }

  const titleFileName = title
    .toLocaleLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\?/g, "");
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const fileName = `content/${titleFileName}.mdx`;

  if (fs.existsSync(fileName)) {
    console.log("같은 이름의 포스트가 존재합니다.");
    return;
  }

  fs.writeFile(
    fileName,
    makeNewLine([
      "---",
      `title: ${title}`,
      `date: ${year}-${month}-${day}`,
      `series: ${series}`,
      `seriesIndex: ${seriesIndex}`,
      "---",
    ])
  );

  fs.mkdirSync(`public/post/${titleFileName}`);

  console.log(
    "정상적으로 작성되었습니다. 작성된 포스트 이름 ==> ",
    titleFileName
  );
};

generatePost();
