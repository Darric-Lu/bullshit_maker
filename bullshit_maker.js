function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
function bullShitMaker(option) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let bullShit = "生為一個"
  if (option.target === "engineer") {
    bullShit += '工程師，' + sample(task.engineer) + "，" + sample(phrase)
  } else if (option.target === "designer") {
    bullShit += '設計師，' + sample(task.designer) + "，" + sample(phrase)
  } else if (option.target === "entrepreneur") {
    bullShit += '創業家，' + sample(task.entrepreneur) + "，" + sample(phrase)
  } else {
    bullShit = "講不出幹話嗎? "
  }
  return bullShit
}
module.exports = bullShitMaker