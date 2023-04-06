// // 編號：CANDY-001
// // 程式語言：JavaScript
// // 題目：找出陣列裡最小的兩個值的總和
// // 例如：
// //   [15, 28, 4, 2, 43] 印出 6
// //   [23, 71, 33, 82, 1] 印出 24

// function sumOfSmallestValues(arr) {
//   const arrMinSum = arr.sort((a, b) => {
//     return a - b;
//   });
//   // 用泡泡排序法把陣列由小排到大

//   return arrMinSum[0] + arrMinSum[1];
//   // 最小的兩個值就是陣列的第0個跟第1個元素
// }

// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// console.log(sumOfSmallestValues(list1)); // 印出 7
// console.log(sumOfSmallestValues(list2)); // 印出 19

// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：

// function sumOfSmallestValues(arr) {
//   const arrFindNextMin = arr
//     .map((ar) => ar - Math.min(...arr))
//     .filter((ar) => ar > 0);
//   // 把陣列中最小的值扣掉，再篩選出大於0的元素（因為最小值減最小值會為0）

//   const arrMinSum =
//     Math.min(...arrFindNextMin) + Math.min(...arr) + Math.min(...arr);
//   // 把剛剛的陣列，加回原先參數陣列的最小值，還原去除最小值後的參數陣列，再取出最小值；最後將兩個最小值相加

//   return arrMinSum;
// }

// const list1 = [19, 5, 42, 2, 77];
// const list2 = [23, 15, 59, 4, 17];

// console.log(sumOfSmallestValues(list1)); // 印出 7
// console.log(sumOfSmallestValues(list2)); // 印出 19

// ====================================================================

// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

// const chars1 = ["a", "b", "c", "d", "f", "g"];
// const chars2 = ["O", "Q", "R", "S"];

// function missingChar(chars) {
//   const LowCaseChars = Array.from(chars.join("").toLowerCase());
//   //   先把陣列轉換型別成字串，統一變成小寫後(方便後續計算)，再轉換為陣列

//   const charsNum = LowCaseChars.map((char) => {
//     return char.charCodeAt(0);
//   });
//   //   把陣列中的每個元素用charCodeAt(0)轉成16進位碼

//   const charsResult =
//     ((charsNum[0] + charsNum[charsNum.length - 1]) *
//       (charsNum[charsNum.length - 1] - charsNum[0] + 1)) /
//       2.0 -
//     charsNum.reduce((acc, cv) => acc + cv);
//   //   以16進位碼陣列的第一個元素及最後一個元素當成連續數字進行加總，在扣掉原先16進位碼陣列

//   if (chars.join("").toLowerCase() === chars.join("")) {
//     return String.fromCharCode(charsResult);
//   } else {
//     return String.fromCharCode(
//       charsResult - "a".charCodeAt(0) + "A".charCodeAt(0)
//     );
//   }
//   //   把結果進行判斷，如果原先陣列是小寫，直接轉回英文，如果不是的話，算回大寫的16進位碼後再轉回去
// }

// console.log(missingChar(chars1)); // 印出 e
// console.log(missingChar(chars2)); // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...

// =======================================================

// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"];
const chars2 = ["O", "Q", "R", "S"];

function missingChar(chars) {
  const charsNum = chars.map((char) => {
    return char.charCodeAt(0);
  });
  //   把陣列中的每個元素用charCodeAt(0)轉成16進位碼

  for (let i = 0; i <= charsNum[charsNum.length - 1]; i++) {
    if (charsNum[i + 1] - charsNum[i] > 1) {
      return String.fromCharCode(charsNum[i] + 1);
    }
  }
}
// 把陣列中前後元素相減，把與後面元素相差大於1的元素+1後，就能找到缺漏的，最後轉回數字

console.log(missingChar(chars1)); // 印出 e
console.log(missingChar(chars2)); // 印出 P

// ===========================================================

// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"];

function moveZerosToEnd(arr) {
  const listWithoutZero = arr.filter((li) => {
    return li !== 0;
  });

  const listWithZero = arr.filter((li) => {
    return li === 0;
  });

  return listWithoutZero.concat(listWithZero);
}

let result = moveZerosToEnd(list);
console.log(result); // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

// ====================================
// 編號：CANDY-004
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

function humanReadableTimer(seconds) {
  let secs = String(seconds % 60).padStart(2, "0");
  // 把seconds除以分鐘(60秒)，餘數就是秒數，最後給他預設值為2位數的0，但因為padStart只能用在字串，所以要先轉換資料型態
  let mins = String(Math.floor((seconds / 60) % 60)).padStart(2, "0");
  let hrs = String(Math.floor(seconds / 60 / 60)).padStart(2, "0");

  return `${hrs}:${mins}:${secs}`;
}

console.log(humanReadableTimer(0)); // 印出 00:00:00
console.log(humanReadableTimer(59)); // 印出 00:00:59
console.log(humanReadableTimer(60)); // 印出 00:01:00
console.log(humanReadableTimer(90)); // 印出 00:01:30
console.log(humanReadableTimer(3599)); // 印出 00:59:59
console.log(humanReadableTimer(3600)); // 印出 01:00:00
console.log(humanReadableTimer(45296)); // 印出 12:34:56
console.log(humanReadableTimer(86399)); // 印出 23:59:59
console.log(humanReadableTimer(86400)); // 印出 24:00:00
console.log(humanReadableTimer(359999)); // 印出 99:59:59

// ======================================================

// 編號：CANDY-005
// 程式語言：JavaScript
// 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

function squareDigits(num) {
  let result = "";
  let numInString = Array.from(String(num));
  // 先把參數轉為字串，再轉換成陣列，因為字串也是陣列，字串中的每個字可當作陣列的元素

  result = numInString.map((n) => Number(n) ** 2);
  // 把每個陣列中個元素轉換成數字後平方，並回傳成陣列

  return result.join("");
  // 把陣列中每個元素合起來變成字串
}

console.log(squareDigits(3212)); // 印出 9414
console.log(squareDigits(2112)); // 印出 4114
console.log(squareDigits(387)); // 印出 96449

// =======================================================

// 編號：CANDY-006
// 程式語言：JavaScript
// 題目：找出在數字陣列裡跟其它元素不一樣的值

function findDifferent(numbers) {
  const numberSort = numbers.sort((b, a) => {
    return a - b;
  });
  // 因為陣列中不一樣的數字散落在中間，故先把陣列由大排到小

  if (numberSort[0] !== numberSort[1]) {
    return numberSort[0];
  }
  return numberSort[numberSort.length - 1];
  // 因為不確定不一樣的值會在陣列最前面還是最後面，故先把第一個元素與第二個元素相比較，如果一樣就直接拿最後面的數字
}
console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])); // 印出 3
console.log(findDifferent([2, 2, 2, 4, 2, 2])); // 印出 4
console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])); // 印出 8

// ============================================

// 編號：CANDY-007
// 程式語言：JavaScript
// 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

function findSomeDifferent(numbers) {
  let EvenNumbers = numbers.filter((n) => n % 2 === 0);
  let OddNumbers = numbers.filter((n) => n % 2 !== 0);
  // 先把參數個別篩選出奇數及偶數陣列

  if (EvenNumbers.length > 1) {
    return OddNumbers[0];
  }
  return EvenNumbers[0];
  // 判斷是奇數還是偶數陣列個數只有一個元素後，直接把第一個(唯一一個)元素return
}

console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])); // 印出 11
console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])); // 印出 160

// =========================================================

// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  function charCodeInputSumSort(params) {
    return charCodeInputSum(params).sort((b, a) => a - b);
    // 先把參數以空白為基準分開成陣列，再把陣列中每個元素，再組成陣列以方便加總，最厚由大到小排序
  }
  function charCodeInputSum(params) {
    return params
      .split(" ")
      .map((i) => [...i])
      .map((i) =>
        i
          .map((i) => i.charCodeAt(0) - "a".charCodeAt(0))
          .reduce((acc, cv) => acc + cv)
      );
    // 因為排序會導致原先陣列順序混亂，所以再設定一個沒有排序的陣列
  }
  const maxInputIndex = charCodeInputSum(input).indexOf(
    charCodeInputSumSort(input)[0]
  );
  // 找出原先陣列的最大值，並找出他在陣列中的位置(用indexOf更簡單)

  return input.split(" ")[maxInputIndex];
  // split後就是陣列，可以直接把最大值的index帶進去
}

console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there

// ==========================================
// 編號：CANDY-009
// 程式語言：JavaScript
// 題目：移除網址中的錨點（Anchor）

function removeAnchor(url) {
  return url.split("#")[0];
  // 把參數以"#"為基準拆成陣列，參數就會分成"#"之前與之後兩個元素，取第一個就可以了
}

console.log(removeAnchor("5xruby.tw")); // 印出 5xruby.tw
console.log(removeAnchor("5xruby.tw/#about")); // 印出 5xruby.tw/
console.log(removeAnchor("5xruby.tw/courses/?page=1#about")); // 印出 5xruby.tw/courses/?page=1

// ================================================
// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  let result = "";
  let numInString = String(num);
  let reverseNum = [...numInString].reverse();
  // 先把參數轉成字串跟反向的陣列，因為後續乘數跟被乘數的元素位置剛好是相反的，一正一反會比較好用
  for (let i = numInString.length - 1; i > 0; i--) {
    if (reverseNum[i] > 0) {
      result += `${10 ** i} x ${reverseNum[i]} + `;
      // 因為10的次方數由大到小，所以要跑遞減迴圈，雖然被乘數元素的位置也是由大到小，但直接取用反向排序的陣列就可以了，為了避免(10的n次方 x 0）出現，故先判斷被乘數大於0才要跑回圈
    }
  }
  return `${result}${reverseNum[0]}`.replace("+ 0", "");
  // 最後把原本陣列最後一個位置的元素加回來，如果是0就連+號一起取代成空字串
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8

// ====================================
// function sum(a, b) {
//   return a + b;
// }

// function unitsTensSum(a, b) {
//   // console.log(String(a).split(""));
//   return Math.floor(a / 10) + (a % 10) + Math.floor(b / 10) + (b % 10);
// }
// console.log(sum(7, 8));
// console.log(sum(10, 9));
// console.log(unitsTensSum(7, 8));
// console.log(unitsTensSum(10, 9));

// // 1. function sum 帶入 7、8  => 得 15
// // 2. function sum 帶入 10、9  => 得 19
// // 3. function unitsTensSum 帶入 7、8  => 得 6
// // 4. function unitsTensSum 帶入 10、9 => 得 10

// ==================================================================
// 編號：CANDY-011
// 程式語言：JavaScript
// 題目：找出一個數字陣列裡，出現奇數次數的數字
// 範例：[1, 1, 0]，`0` 只有出現 1 次
//      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次

function findOddElm(numbers) {
  const nInSort = numbers.sort((a, b) => a - b);
  // 先把參數排序方便篩選
  let elmIndex = 0;
  for (let i = 0; i < nInSort.length; i++) {
    elmIndex = nInSort.lastIndexOf(nInSort[i]);
    // 從第一個元素開始找，找出與第一個元素值相同的最後一個元素的位置
    if (elmIndex % 2 == 0) {
      return nInSort[elmIndex];
      // 先判斷如果相同值最後元素的位置是偶數，代表該相同值的陣列長度為奇數，也就是出現奇數次數的數字
    }
    nInSort.slice(elmIndex + 1, nInSort[nInSort.length - 1]);
    // 如果相同值最後元素的位置是奇數，代表該相同值的陣列長度為偶數，就把前面出現偶數次數的元素通通砍掉，再找下一個
  }
}

console.log(findOddElm([1, 1, 2])); // 印出 2
console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])); // 印出 1
console.log(findOddElm([0, 1, 0, 1, 0])); // 印出 0
console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])); // 印出 -1
console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 印出 5

// ==============================================================================
// 編號：CANDY-012
// 程式語言：JavaScript
// 題目：把數字加總，最終濃縮成個位數
// 範例：9527 => 9 + 5 + 2 + 7 => 23 => 2 + 3 => 5
//      1450 => 1 + 4 + 5 + 0 => 10 => 1 + 0 => 1

const numberReducer = (num) => {
  let result = 0;
  for (let n = num; n >= 10; n = result) {
    // 因為要總合到個位數，所以要跑迴圈，以參數當初始值，並以回傳值當作遞減的值，當回傳值小於10(個位數)，就回傳結果
    result = String(n)
      .split("")
      .reduce((acc, cv) => acc + Number(cv), 0);
    // 把參數轉回字串並分割成陣列後，每個元素轉換成數字加總
  }
  return result;
};

console.log(numberReducer(9527)); // 印出 5
console.log(numberReducer(1450)); // 印出 1
console.log(numberReducer(5566108)); // 印出 4
console.log(numberReducer(1234567890)); // 印出 9

// =========================================================
// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

function isValidVatNumber(vat) {
  const multiNum = [1, 2, 1, 2, 1, 2, 4, 1];
  // 先列出成數矩陣

  function calValidVat(va, multi) {
    // 因為不管第7位數是不是7公式都一樣，所以把它整理成函數
    return va
      .split("")
      .map((v, i) => Number(v) * multi[i])
      .join("")
      .split("")
      .reduce((acc, cv) => acc + Number(cv), 0);
    // 1.先把參數分割成矩陣
    // 2.把矩陣使用map並帶入index，轉成數字後，乘上邏輯乘數在index位置相對應的值
    // 3.因為矩陣中的乘積十位數個位數要相加，所以先把陣列全部合在一起成字串再分割，最後轉換型態加總
  }
  if (vat[6] == 7) {
    const isValidSeven = calValidVat(vat, multiNum);
    return isValidSeven % 5 == 0 || (isValidSeven - 1) % 5 == 0;
    // 驗證是否能被5整除，或是否總和-1後能被5整除(因為乘積第7位原本是 +1 +0, 但條件是只要 +1 或 +0 其中一個總和符合條件就行，故總和-1就等於乘積第7位+0的總和)
  }
  const isValid = calValidVat(vat, multiNum);
  return isValid % 5 == 0;
  // 驗證是否能被5整除
}

console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false

// ==========================================================
// 編號：CANDY-014
// 程式語言：JavaScript
// 題目：把鄰近的重複值去除，但仍照原本的順序排序
// 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

function uniqueOrder(sequence) {
  const ArrSeq = [...sequence];
  // 先把參數轉為陣列
  for (let i = 0; i < ArrSeq.length; i++) {
    // 跑回圈判斷，如果該元素的值等於前一個元素的值，就把前一個元素砍掉
    // 陣列跑回圈可使用forEach，並帶入元素及index
    ArrSeq.forEach((Arr, i) => {
      if (Arr == ArrSeq[i - 1]) {
        ArrSeq.splice(i, 1);
      }
    });
  }
  // 但因為迴圈一次只能砍掉一個數字，所以在回圈外層再加一層回圈(因為參數內鄰近的重複值個數，不會大於參數本身的陣列長度，所以以參數陣列長度為最大值，就能確保鄰近的重複值都不見)
  return ArrSeq;
}

console.log(uniqueOrder("AABCC")); // [ 'A', 'B', 'C']
console.log(uniqueOrder("AAABBBCCBCC")); // [ 'A', 'B', 'C', 'B', 'C']
console.log(uniqueOrder([1, 2, 1, 2, 1])); // [ 1, 2, 1, 2, 1 ]
console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])); // [1, 2, 1]

// ================================================
// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  const arrInDbl = str
    .split("")
    .map((n, i) => str[i].concat(str[i + 1]))
    .filter((c, i) => i % 2 == 0);
  // 先把參數陣列分割，在把每一個元素後面跟前面的合在一起，再選取偶數位置的元素
  arrInDbl.pop();
  // 因為最後會多一個元素要把它拿掉
  if (str.length % 2 == 0) {
    // 如果參數長度是偶數的話，直接回傳
    return arrInDbl;
  }
  return arrInDbl.concat(str[str.length - 1].padEnd(2, "_"));
  // 如果參數長度是奇數的話，再把最後一個元素的最後一個字，加上"_"合進來
}

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []

// =====================================================
// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  const strInArr = str.split("_");
  // 先把字串以底線分割為陣列
  let blankStg = "";
  for (let i = 1; i < strInArr.length; i++) {
    const strIdx = String(strInArr[i])[0];
    // 選出第二個元素後之中第一個元素
    blankStg += `${String(strInArr[i]).replace(strIdx, strIdx.toUpperCase())}`;
    // 取代成大寫並帶入空字串!
  }
  return `${strInArr[0]}${blankStg}`;
  // 把第一個元素，與迴圈內每個變數blankStg合起來
}

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore

// // =========================================================
// // 編號：CANDY-017
// // 程式語言：JavaScript
// // 題目：計算數字的 2 進位裡有幾個 1
// // 範例：5 -> 101 -> 2 個 1

// function countBits(num) {
//   const numInArr = String(num).split("");
//   // 先把參數分割成陣列
//   let result = numInArr;

//   for (let i = 1; i < 4; i++) {
//     result = result
//       .map((i) => {
//         if (i > 1) {
//           return `${Math.floor(Number(i) / 2)}${Number(i) % 2}`;
//         }
//         return i;
//         // 先判斷陣列中每個元素，大於1的話，將元素取除以2取商(無條件捨去)及餘數，進行一次二進位;
//       })
//       .join("")
//       .split("");
//     // 因為陣列中可能很多元素位數變成2個，所以先集合成字串在分割成陣列
//     // 因分割後的陣列，元素最大值為9，9小於2的4次方，上述只把元素進行一次二進位，所以最多執行三次二進位，就能確保所有元素顯示皆為1跟0的組合
//   }
//   return result.filter((i) => i == 1).length;
//   // 把陣列中元素等於1的篩選出來，在取陣列的長度就是1的個數了
// }

// console.log(countBits(1234)); // 5
// console.log(countBits(1450)); // 6
// console.log(countBits(9527)); // 8
// =========================================================
// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

function countBits(num) {
  return num.toString(2).replaceAll("0", "").length;
  // 直接把參數toString(2)轉為二進位後，去掉所有的0合併在取參數長度(1的個數)
}

console.log(countBits(1234)); // 5
console.log(countBits(1450)); // 6
console.log(countBits(9527)); // 8

// ===========================================
// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數

function randomNumber(min, max = min) {
  // 如果只有一個參數就預設最大值等於最小值
  if (max == min) {
    return Math.floor(Math.random() * max);
    // Math.random()是隨機0 -1的浮點數，如果最大值等於最小值，就random後乘以最小值，並無條件捨去，確保不會超過最小值
  }
  return Math.floor(Math.random() * (max - min) + min);
  // max - min 就是隨機0 - 1之間乘以最大值到最小值之間的數字，但有可能隨機的數字太小，會隨機到小於最小值的數字，所以要再加上最小值
}

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字

// ===========================================
// 編號：CANDY-019
// 程式語言：JavaScript
// 題目：檢查是否為某個數字的平方數

function isSquare(num) {
  const sqrtNum = Math.floor(Math.sqrt(num));
  // 把參數開根號後，無條件捨去，如果參數開根號是整數也不會變化
  return num == sqrtNum * sqrtNum;
  // 判斷參數是不是等於，參數開根號並無條件捨去後的平方；如果不等於，代表參數不是某個數字的平方數(因為參數開根號後是浮點數)
}

console.log(isSquare(0)); // true
console.log(isSquare(4)); // true
console.log(isSquare(5)); // false
console.log(isSquare(100)); // true
console.log(isSquare(-4)); // false
console.log(isSquare(-1)); // false

console.log(11111111);

// ========================================================
// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  const splitStr = str.split("");
  // 先把參數分割成陣列
  function isEqualOrNot(elm) {
    return splitStr.filter((i) => i.toLowerCase() == elm).length;
    // 在把元素統一小寫後，篩選出等於指定參數的元素，最後算出陣列長度
  }
  return isEqualOrNot("x") == isEqualOrNot("o");
  // 看陣列中符合'x'跟符合'o'的陣列長度有沒有一樣，就能知道個數一不一樣了
  // 因為兩個參數其中一個參數都是分割後的陣列，改成只帶一個參數"x"或"o"
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true
