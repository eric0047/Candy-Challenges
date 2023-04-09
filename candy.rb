# 編號：CANDY-001
# 程式語言：Ruby
# 題目：找出陣列裡最小的兩個值的總和
# 例如：
#   [15, 28, 4, 2, 43] 印出 6
#   [23, 71, 33, 82, 1] 印出 24

def sumOfSmallestValues(arr)
   arr.sort[0..1].sum
  #  把陣列排序，並取前兩個元素變成一個新陣列後加總
end 

  list1 = [19, 5, 42, 2, 77];
  list2 = [23, 15, 59, 4, 17]
 p sumOfSmallestValues(list1);  
#  印出 7
 p sumOfSmallestValues(list2); 
#  // 印出 19

# =======================================
# 編號：CANDY-002
# 程式語言：Ruby
# 題目：請寫一小段程式，印出連續陣列裡缺少的字元
# 

def missingChar(chars)
  chr = chars.join("").bytes.sort
  # 把陣列中的英文轉成數字後排序
  chr_all = Array(chr.first..chr.last)
  # 最小值到最大值之間全部整數取出來
  (chr_all - chr).first.chr
  # 兩者相減就會得到遺漏的元素，取出來後轉回英文
end 

  chars1 = ["a", "b", "c", "d", "f", "g"];
  chars2 = ["O", "Q", "R", "S"];
puts missingChar(chars1) 
# 印出 e
puts missingChar(chars2) 
# 印出 P

# =============================================
# 編號：CANDY-003
# 程式語言：Ruby
# 題目：完成函數的內容，把陣列裡的 0 都移到最後面
# 

def moveZerosToEnd(arr)
  arr1 = arr.select {|x| x != 0}
  arr2 = arr.select {|x| x == 0}
  arr1.concat(arr2)
  # 把元素等於0跟不等於0的元素分別篩選出來成新陣列，最後合併
end 

list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]
result = moveZerosToEnd(list)
p result 
# 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

# ==============================================
# 編號：CANDY-004
# 程式語言：Ruby
# 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式
# 

def humanReadableTimer(seconds)
  "#{("%02d" % (seconds / 60 / 60))}:#{("%02d" % ((seconds / 60) % 60))}:#{("%02d" % (seconds % 60))}"
  # 預設兩位數，不足的補0
end 

puts humanReadableTimer(0) 
# 印出 00:00:00
puts humanReadableTimer(59)
# 印出 00:00:59
puts humanReadableTimer(60) 
# 印出 00:01:00
puts humanReadableTimer(90)  
# 印出 00:01:30
puts humanReadableTimer(3599)
# 印出 00:59:59
puts humanReadableTimer(3600) 
# 印出 01:00:00
puts humanReadableTimer(45296) 
# 印出 12:34:56
puts humanReadableTimer(86399) 
# 印出 23:59:59
puts humanReadableTimer(86400) 
# 印出 24:00:00
puts humanReadableTimer(359999)
# 印出 99:59:59

# =======================================
# 編號：CANDY-005
# 程式語言：Ruby
# 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起
# 

def squareDigits(num)
  num.to_s.split("").map {|x| x.to_i ** 2}.join("")
  # 先把參數轉為字串，再分割成陣列，把每個元素平方後，全部合在一起
end 

puts squareDigits(3212)
# 印出 9414
puts squareDigits(2112)
# 印出 4114
puts squareDigits(387) 
# 印出 96449

# ===================================
# 編號：CANDY-006
# 程式語言：Ruby
# 題目：找出在數字陣列裡跟其它元素不一樣的值
# 

def findDifferent(numbers)
  number_s = numbers.sort
  if number_s.first == number_s[1]
    number_s.last
    # 排序後第一個元素等於第二個的話，代表最後一個就是不一樣的元素
  else
    number_s.first
  end
end 

p findDifferent([1, 1, 1, 1, 3, 1, 1, 1]) 
# 印出 3
p findDifferent([2, 2, 2, 4, 2, 2]) 
# 印出 4
p findDifferent([8, 3, 3, 3, 3, 3, 3, 3]) 
# 印出 8

# ===============================================
# 編號：CANDY-007
# 程式語言：Ruby
# 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

def findSomeDifferent(numbers)
  num_odd = numbers.select {|x| x.odd?}
  num_even = numbers.select {|x| x.even?}
  if num_odd.length > 1
    num_even
  else
    num_odd
  end
  # 如果參數的奇數陣列長度大於1，代表參數裡只有一個偶數，反之亦然
end 

puts findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36]) 
# 印出 11
puts findSomeDifferent([160, 3, 1719, 19, 11, 13, -21]) 
# 印出 160

# ===============================================
# 編號：CANDY-008
# 程式語言：Ruby
# 題目：傳入一字串，計算得分最高的字
#      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
#      所有傳入的字都是小寫。

def highestScoreWord(input)
  input_sum = input.split(" ").map {|x| x.bytes.sum}
  # 先把參數以空白為基準分開成陣列，轉為數字後加總
  input_sum_max = input_sum.index(input_sum.max)
  # 找出最大值是在陣列中的哪個位置
  input.split(" ")[input_sum_max]
  # 最大值的位置等於，參數以空白為基準分割成陣列後的位置
end 

puts highestScoreWord("lorem ipsum dolor sit amet") 
# 印出 ipsum
puts highestScoreWord("heyn i need a rubygem up to build this")
# 印出 rubygem
puts highestScoreWord("in time machine there are some bugs")
# 印出 there

# =====================================
# 編號：CANDY-009
# 程式語言：Ruby
# 題目：移除網址中的錨點（Anchor）

def removeAnchor(url)
  url.split("#").first
  #  把參數以"#"為基準拆成陣列，取第一個
end 

puts removeAnchor("5xruby.tw")
# 印出 5xruby.tw
puts removeAnchor("5xruby.tw/#about")
# 印出 5xruby.tw/
puts removeAnchor("5xruby.tw/courses/?page=1#about")
# 印出 5xruby.tw/courses/?page=1