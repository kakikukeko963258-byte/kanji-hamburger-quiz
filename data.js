const KANJI_SOURCES = [
  { id: "world", label: "世界中がハンバーガー" },
  { id: "eat", label: "食べること考えること" }
];

const KANJI_ITEMS = [
  {
    id: "wh-01",
    source: "world",
    context: "{ゲキ}的な変化",
    answerWord: "劇的",
    targetKanji: "劇",
    choices: ["舞台でエンゲキを見る", "強いシゲキを受ける", "敵をゲキタイする", "ゲキを飛ばす"],
    note: "「劇的」は、変化や効果が非常に大きいこと。"
  },
  {
    id: "wh-02",
    source: "world",
    context: "食生活の{ハイケイ}",
    answerWord: "背景",
    targetKanji: "背",
    choices: ["ハイゴから声がする", "資料をハイケンする", "試合にハイボクする", "荷物をハイタツする"],
    note: "「背景」の「背」は、うしろ・背中の意味をもつ。"
  },
  {
    id: "wh-03",
    source: "world",
    context: "肉の{ショウヒ}が増える",
    answerWord: "消費",
    targetKanji: "消",
    choices: ["火をショウす", "ショウリを収める", "計画をショウニンする", "駅前のショウテン"],
    note: "「消費」は使ってなくすこと。"
  },
  {
    id: "wh-04",
    source: "world",
    context: "大量に{ショウヒ}する",
    answerWord: "消費",
    targetKanji: "費",
    choices: ["学ヒを払う", "ヒリツを求める", "ヒミツを守る", "皮フを保護する"],
    note: "「費」は、金・時間・物を使う意味。"
  },
  {
    id: "wh-05",
    source: "world",
    context: "{コクモツ}を輸入する",
    answerWord: "穀物",
    targetKanji: "穀",
    choices: ["コクソウ地帯", "コクゴの授業", "事実をコクハクする", "石にコクインする"],
    note: "「穀物」は米・小麦・トウモロコシなど。"
  },
  {
    id: "wh-06",
    source: "world",
    context: "{カチク}のえさ",
    answerWord: "家畜",
    targetKanji: "畜",
    choices: ["チクサン業", "チクデン池", "城をチクジョウする", "タケ林を歩く"],
    note: "「家畜」は人間が飼育する動物。"
  },
  {
    id: "wh-07",
    source: "world",
    context: "牛の{シリョウ}",
    answerWord: "飼料",
    targetKanji: "飼",
    choices: ["犬をシイクする", "シリョウを配る", "シヨウ電話", "チリョウを受ける"],
    note: "「飼料」は家畜などに与えるえさ。"
  },
  {
    id: "wh-08",
    source: "world",
    context: "食料を{ユニュウ}する",
    answerWord: "輸入",
    targetKanji: "輸",
    choices: ["荷物をユソウする", "ユカイな話", "ユダンする", "大会でユウショウする"],
    note: "「輸」は運ぶこと、外国との取引に関わる字。"
  },
  {
    id: "wh-09",
    source: "world",
    context: "{ノウギョウ}と食生活",
    answerWord: "農業",
    targetKanji: "農",
    choices: ["ノウソンで暮らす", "ノウコウな味", "ノウリョクを伸ばす", "ノウゼイする"],
    note: "「農」は作物を作る仕事や土地に関わる字。"
  },
  {
    id: "wh-10",
    source: "world",
    context: "大量に{セイサン}する",
    answerWord: "生産",
    targetKanji: "産",
    choices: ["サンギョウを支える", "提案にサンセイする", "公園をサンポする", "山のサンチョウ"],
    note: "「産」は作り出すこと。"
  },
  {
    id: "wh-11",
    source: "world",
    context: "地球{カンキョウ}",
    answerWord: "環境",
    targetKanji: "環",
    choices: ["水がジュンカンする", "客をカンゲイする", "カンナイを放送する", "多くのカンキャク"],
    note: "「環」は、めぐる・まわりを取り巻く意味をもつ。"
  },
  {
    id: "wh-12",
    source: "world",
    context: "生活への{エイキョウ}",
    answerWord: "影響",
    targetKanji: "影",
    choices: ["オモカゲが残る", "エイコウをたたえる", "エイギョウ時間", "エイエンに続く"],
    note: "「影響」は、他に作用して変化を起こすこと。"
  },
  {
    id: "wh-13",
    source: "world",
    context: "{コウリツ}よく作る",
    answerWord: "効率",
    targetKanji: "効",
    choices: ["コウカがある", "コウジを進める", "コウギを聞く", "コウホ者を選ぶ"],
    note: "「効」は、ききめ・役に立つこと。"
  },
  {
    id: "wh-14",
    source: "world",
    context: "{ケンコウ}への影響",
    answerWord: "健康",
    targetKanji: "健",
    choices: ["ケンゼンな生活", "ビルをケンチクする", "ケンリを守る", "ケンサを受ける"],
    note: "「健」は、からだがすこやかなこと。"
  },
  {
    id: "wh-15",
    source: "world",
    context: "企業の{センデン}",
    answerWord: "宣伝",
    targetKanji: "宣",
    choices: ["勝利をセンゲンする", "センヨウの道具", "センシュを交代する", "センソウの記録"],
    note: "「宣」は、広く知らせること。"
  },
  {
    id: "wh-16",
    source: "world",
    context: "世界を{シハイ}する",
    answerWord: "支配",
    targetKanji: "支",
    choices: ["費用をシキュウする", "シヨウの美しい木", "シジンの作品", "シブツを持ち込む"],
    note: "「支配」は、力を及ぼして動かすこと。"
  },
  {
    id: "wh-17",
    source: "world",
    context: "輸入に{イゾン}する",
    answerWord: "依存",
    targetKanji: "依",
    choices: ["仕事をイライする", "イケンを述べる", "イフクを整える", "席をイドウする"],
    note: "「依」は、よりかかる・たよる意味。"
  },
  {
    id: "wh-18",
    source: "world",
    context: "食料{ジキュウ}率",
    answerWord: "自給",
    targetKanji: "給",
    choices: ["学校のキュウショク", "キュウギ大会", "キュウヨウを取る", "キュウユウに会う"],
    note: "「給」は、あたえる・まかなう意味。"
  },
  {
    id: "wh-19",
    source: "world",
    context: "{カイリョウ}された品種",
    answerWord: "改良",
    targetKanji: "改",
    choices: ["制度をカイゼンする", "カイギに出る", "カイガンを歩く", "試合をカイシする"],
    note: "「改」は、あらためる・よくする意味。"
  },
  {
    id: "wh-20",
    source: "world",
    context: "{シボウ}分の多い食品",
    answerWord: "脂肪",
    targetKanji: "脂",
    choices: ["シシツを控える", "シボウ校を決める", "シボンを集める", "シメイを果たす"],
    note: "「脂」は、あぶらを表す字。"
  },
  {
    id: "wh-21",
    source: "world",
    context: "砂{トウ}を使う",
    answerWord: "砂糖",
    targetKanji: "糖",
    choices: ["トウブンを控える", "トウコウする", "トウバンを決める", "トウダイの光"],
    note: "「糖」は、甘みや栄養に関わる字。"
  },
  {
    id: "wh-22",
    source: "world",
    context: "価格{キョウソウ}",
    answerWord: "競争",
    targetKanji: "競",
    choices: ["キョウギに出場する", "キョウリョクする", "キョウツウの課題", "県境を越える"],
    note: "「競」は、きそうこと。"
  },
  {
    id: "wh-23",
    source: "world",
    context: "{シホン}の力",
    answerWord: "資本",
    targetKanji: "資",
    choices: ["シリョウを集める", "シジンの言葉", "シゴを慎む", "道具をシヨウする"],
    note: "「資」は、もとで・役立つもの。"
  },
  {
    id: "wh-24",
    source: "world",
    context: "食の{カクサ}",
    answerWord: "格差",
    targetKanji: "格",
    choices: ["カクベツな味", "カクチを回る", "カクゴを決める", "カクニンを取る"],
    note: "「格差」は、程度や状態の差。"
  },
  {
    id: "eat-01",
    source: "eat",
    context: "{セイジ}空間",
    answerWord: "政治",
    targetKanji: "政",
    choices: ["セイジ家の発言", "机をセイリする", "セイシして待つ", "セイドを整える"],
    note: "「政」は、社会をおさめることに関わる字。"
  },
  {
    id: "eat-02",
    source: "eat",
    context: "{インショク}空間",
    answerWord: "飲食",
    targetKanji: "飲",
    choices: ["インリョウ水", "文章をインヨウする", "インエイが濃い", "インキョする"],
    note: "「飲」は、のむこと。"
  },
  {
    id: "eat-03",
    source: "eat",
    context: "空間の{ブンリ}",
    answerWord: "分離",
    targetKanji: "離",
    choices: ["リリクする飛行機", "リカイを深める", "リエキを得る", "サトヤマを守る"],
    note: "「離」は、はなれる・はなす意味。"
  },
  {
    id: "eat-04",
    source: "eat",
    context: "{キュウケイ}所",
    answerWord: "休憩",
    targetKanji: "憩",
    choices: ["イコいの場", "ケイコクを受ける", "ケイザイを学ぶ", "ケシキを見る"],
    note: "「憩」は、やすむこと。"
  },
  {
    id: "eat-05",
    source: "eat",
    context: "{ミンシュ}運動",
    answerWord: "民主",
    targetKanji: "民",
    choices: ["シミンの声", "スイミン時間", "ビンカンな反応", "メイブツ料理"],
    note: "「民」は、社会を構成する人々。"
  },
  {
    id: "eat-06",
    source: "eat",
    context: "{フドウサン}業者",
    answerWord: "不動産",
    targetKanji: "動",
    choices: ["ウンドウ会", "ドウイを得る", "ドウワを読む", "ドウロを渡る"],
    note: "「動」は、うごく・うごかす意味。"
  },
  {
    id: "eat-07",
    source: "eat",
    context: "{ハンエイ}した店",
    answerWord: "繁栄",
    targetKanji: "栄",
    choices: ["エイヨウを取る", "エイエンに残る", "エイギョウする", "エイガを見る"],
    note: "「栄」は、さかえる意味。"
  },
  {
    id: "eat-08",
    source: "eat",
    context: "{ケイケン}を積む",
    answerWord: "経験",
    targetKanji: "経",
    choices: ["ケイザイ活動", "ケイリョウな素材", "ケイゴを使う", "ケイビを強める"],
    note: "「経」は、経る・すじ道の意味をもつ。"
  },
  {
    id: "eat-09",
    source: "eat",
    context: "{カンドウ}する",
    answerWord: "感動",
    targetKanji: "感",
    choices: ["カンソウを書く", "カンサツする", "カンセイした作品", "カンタンな問題"],
    note: "「感」は、心が動くこと。"
  },
  {
    id: "eat-10",
    source: "eat",
    context: "{コドク}な空間",
    answerWord: "孤独",
    targetKanji: "孤",
    choices: ["コリツを防ぐ", "コジンの意見", "コテンを読む", "コショウを直す"],
    note: "「孤」は、ひとりであること。"
  },
  {
    id: "eat-11",
    source: "eat",
    context: "{グンシュウ}が集まる",
    answerWord: "群衆",
    targetKanji: "群",
    choices: ["ムれをなす", "グンタイを率いる", "クンレンを積む", "クンシュの時代"],
    note: "「群」は、むれ・集まり。"
  },
  {
    id: "eat-12",
    source: "eat",
    context: "場所を{カクホ}する",
    answerWord: "確保",
    targetKanji: "確",
    choices: ["カクジツに進める", "カクトクする", "カクチを回る", "カクサをなくす"],
    note: "「確」は、たしかであること。"
  },
  {
    id: "eat-13",
    source: "eat",
    context: "{チシキ}人",
    answerWord: "知識",
    targetKanji: "知",
    choices: ["シる権利", "チズを見る", "チリョウを受ける", "ネダンを比べる"],
    note: "「知」は、しること。"
  },
  {
    id: "eat-14",
    source: "eat",
    context: "政治{ギロン}",
    answerWord: "議論",
    targetKanji: "議",
    choices: ["カイギを開く", "ギムを果たす", "ギジュツを学ぶ", "ギセイを払う"],
    note: "「議」は、話し合うこと。"
  },
  {
    id: "eat-15",
    source: "eat",
    context: "{ボウドウ}を起こす",
    answerWord: "暴動",
    targetKanji: "暴",
    choices: ["ボウリョクを避ける", "ボウエン鏡", "ボウケンに出る", "事故をボウシする"],
    note: "「暴」は、荒々しいこと。"
  },
  {
    id: "eat-16",
    source: "eat",
    context: "時間を{セイゲン}する",
    answerWord: "制限",
    targetKanji: "制",
    choices: ["セイドを作る", "セイケツな服", "実験にセイコウする", "セイヨウの文化"],
    note: "「制」は、おさえる・決まりを作る意味。"
  },
  {
    id: "eat-17",
    source: "eat",
    context: "{フマン}を忘れる",
    answerWord: "不満",
    targetKanji: "満",
    choices: ["マンゾクする", "マンガを読む", "マンイチに備える", "マンシンを戒める"],
    note: "「満」は、みちる・足りる意味。"
  },
  {
    id: "eat-18",
    source: "eat",
    context: "{ヒツゼン}的に集まる",
    answerWord: "必然",
    targetKanji: "必",
    choices: ["カナらず守る", "ヒッキ試験", "ヒミツを守る", "ヒッテキする力"],
    note: "「必」は、かならず。"
  },
  {
    id: "eat-19",
    source: "eat",
    context: "{セイジュク}した市民社会",
    answerWord: "成熟",
    targetKanji: "熟",
    choices: ["ジュクゴを覚える", "シュクダイを出す", "シュクジツに休む", "ジュクセイの意見"],
    note: "「熟」は、十分に育つ・なれること。"
  },
  {
    id: "eat-20",
    source: "eat",
    context: "政治{エンゼツ}",
    answerWord: "演説",
    targetKanji: "演",
    choices: ["エンゲキを見る", "期限をエンチョウする", "エンガンの町", "火がエンジョウする"],
    note: "「演」は、人前で行う・述べる意味。"
  },
  {
    id: "eat-21",
    source: "eat",
    context: "店内が{コンザツ}する",
    answerWord: "混雑",
    targetKanji: "雑",
    choices: ["ザッシを読む", "サッシを配る", "サツタバを数える", "人がサットウする"],
    note: "「雑」は、入りまじる・まとまりがないこと。"
  },
  {
    id: "eat-22",
    source: "eat",
    context: "持ち込み{キンシ}",
    answerWord: "禁止",
    targetKanji: "禁",
    choices: ["キンエン席", "キンジョに住む", "キンチョウする", "キンベンな人"],
    note: "「禁」は、してはいけないと止めること。"
  },
  {
    id: "eat-23",
    source: "eat",
    context: "商品を{センタク}する",
    answerWord: "選択",
    targetKanji: "選",
    choices: ["センシュを選ぶ", "センザイで洗う", "センゾを敬う", "センヨウの入口"],
    note: "「選」は、えらぶこと。"
  },
  {
    id: "eat-24",
    source: "eat",
    context: "{スイミン}の自由",
    answerWord: "睡眠",
    targetKanji: "睡",
    choices: ["スイミン時間", "スイエイを習う", "スイリする", "スイハン器"],
    note: "「睡」は、ねむること。"
  },
  {
    id: "eat-25",
    source: "eat",
    context: "{サンコウ}書を広げる",
    answerWord: "参考",
    targetKanji: "参",
    choices: ["行事にサンカする", "サンポに出る", "サンチを訪ねる", "サンガク地帯"],
    note: "「参」は、加わる・照らし合わせる意味。"
  },
  {
    id: "eat-26",
    source: "eat",
    context: "{ショウギョウ}施設",
    answerWord: "商業",
    targetKanji: "商",
    choices: ["ショウテン街", "ショウヒンを受け取る", "ショウハイを競う", "ショウドクする"],
    note: "「商」は、売り買いに関わる字。"
  },
  {
    id: "eat-27",
    source: "eat",
    context: "{コジン}主義",
    answerWord: "個人",
    targetKanji: "個",
    choices: ["コシツを予約する", "コテンを読む", "ゴサを直す", "コセキを調べる"],
    note: "「個」は、一つ一つ・ひとりひとりを表す。"
  },
  {
    id: "eat-28",
    source: "eat",
    context: "{テンラン}会",
    answerWord: "展覧",
    targetKanji: "展",
    choices: ["ハッテンを願う", "テンスウを出す", "テンインに聞く", "テンキを調べる"],
    note: "「展」は、広げる・見せる意味。"
  },
  {
    id: "eat-29",
    source: "eat",
    context: "{ソウギョウ}者",
    answerWord: "創業",
    targetKanji: "創",
    choices: ["ソウサク活動", "ソウコに入れる", "ソウチョウに出る", "先生にソウダンする"],
    note: "「創」は、新しく作り始めること。"
  },
  {
    id: "eat-30",
    source: "eat",
    context: "{ザイフ}で投票する",
    answerWord: "財布",
    targetKanji: "財",
    choices: ["ザイサンを守る", "ザイリョウをそろえる", "ザイアク感", "サイノウを伸ばす"],
    note: "「財」は、金銭や価値あるもの。"
  },
  {
    id: "eat-31",
    source: "eat",
    context: "財布で{トウヒョウ}する",
    answerWord: "投票",
    targetKanji: "投",
    choices: ["意見をトウショする", "トウメイな水", "ズツウがする", "トウソウを続ける"],
    note: "「投」は、投げ入れる・差し出す意味。"
  },
  {
    id: "eat-32",
    source: "eat",
    context: "{コウキョウ}空間",
    answerWord: "公共",
    targetKanji: "公",
    choices: ["コウシキの記録", "コウギョウ地帯", "コウゲキを受ける", "コウギを聞く"],
    note: "「公」は、社会全体に関わること。"
  }
];
