var personList = [];
var MAX_NUMBER_OF_PERSON = 10;

function Person(age) {
  // 인자로 받은 age를 저장
}

for (var index = 0; index < MAX_NUMBER_OF_PERSON; index++) {
  var randVal = Math.random();
  var randAge = Math.floor(randVal * 100);
  personList.push(new Person(randAge));
}

document.write(`<h1>추가하신 사람은 ${MAX_NUMBER_OF_PERSON}명 입니다.</h1>`);
document.write(
  `<h1>${MAX_NUMBER_OF_PERSON}명 각각의 나이는 다음과 같습니다.</h1>`
);

personList.forEach((p) => document.write(`${p.age || "알 수 없음"}<br/>`));

function quickSort(list) {
  // 구현
}

quickSort(personList);

document.write(`<h1>오름차순 정렬 후 나이는 다음과 같습니다.</h1>`);

personList.forEach((p) => document.write(`${p.age || "알 수 없음"}<br/>`));
