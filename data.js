const VOCAB_DATA = [
  
  
  { char: '爸爸', py: 'bà ba', ms: 'ayah / bapa', en: 'father', topic: 'Topic 3', emoji: '👨', strokes: [['父','爸'], ['爸爸']], tip: '爸 = 8 strokes: father radical 父 on top, 巴 below.', count: '8 + 8 = 16' },
  { char: '回来', py: 'huí lái', ms: 'balik / kembali', en: 'come back / return', topic: 'Topic 3', emoji: '🔙', strokes: [['囗','回'], ['木','来']], tip: '回 = 6 strokes: two nested squares. 来 = 7 strokes.', count: '6 + 7 = 13' },
  { char: '姐姐', py: 'jiě jie', ms: 'kakak perempuan', en: 'older sister', topic: 'Topic 3', emoji: '👧', strokes: [['女','姐'], ['姐姐']], tip: '姐 = 8 strokes: woman radical 女 on left.', count: '8 + 8 = 16' },
  { char: '笑声', py: 'xiào shēng', ms: 'bunyi ketawa', en: 'laughter', topic: 'Topic 3', emoji: '😂', strokes: [['⺮','笑'], ['士','声']], tip: '笑 = 10 strokes: bamboo radical on top.', count: '10 + 7 = 17' },
  { char: '星星', py: 'xīng xing', ms: 'bintang', en: 'stars', topic: 'Topic 3', emoji: '⭐', strokes: [['日','星'], ['星星']], tip: '星 = 9 strokes: sun radical 日 on top.', count: '9 + 9 = 18' },
  { char: '吃饭', py: 'chī fàn', ms: 'makan', en: 'to eat a meal', topic: 'Topic 4', emoji: '🍚', strokes: [['口','吃'], ['饣','饭']], tip: '吃 = 6 strokes. 饭 = 7 strokes.', count: '6 + 7 = 13' },
  { char: '饭菜', py: 'fàn cài', ms: 'lauk-pauk', en: 'food and dishes', topic: 'Topic 4', emoji: '🍱', strokes: [['饣','饭'], ['艹','菜']], tip: '饭 = 7 strokes. 菜 = 11 strokes.', count: '7 + 11 = 18' },
  { char: '瓜', py: 'guā', ms: 'tembikai', en: 'melon', topic: 'Topic 4', emoji: '🍉', strokes: [['瓜']], tip: '瓜 = 5 strokes.', count: '5' },
  { char: '喜欢', py: 'xǐ huān', ms: 'suka', en: 'to like', topic: 'Topic 4', emoji: '❤️', strokes: [['壴','喜'], ['欠','欢']], tip: '喜 = 12 strokes. 欢 = 6 strokes.', count: '12 + 6 = 18' },
  { char: '妹妹', py: 'mèi mei', ms: 'adik perempuan', en: 'younger sister', topic: 'Topic 4', emoji: '👧🏻', strokes: [['女','妹'], ['妹妹']], tip: '妹 = 8 strokes.', count: '8 + 8 = 16' },
  { char: '积木', py: 'jī mù', ms: 'blok mainan', en: 'building blocks', topic: 'Topic 4', emoji: '🧱', strokes: [['禾','积'], ['木']], tip: '积 = 10 strokes.', count: '10 + 4 = 14' },
  { char: '房子', py: 'fáng zi', ms: 'rumah', en: 'house', topic: 'Topic 4', emoji: '🏠', strokes: [['宀','房'], ['子']], tip: '房 = 8 strokes. 子 = 3 strokes.', count: '8 + 3 = 11' },
  { char: '我', py: 'wǒ', ms: 'saya', en: 'I / me', topic: 'Topic 4', emoji: '🧒', strokes: [['我']], tip: '我 = 7 strokes.', count: '7' },
  { char: '游乐场', py: 'yóu lè chǎng', ms: 'taman permainan', en: 'playground', topic: 'Topic 4', emoji: '🛝', strokes: [['氵','游'], ['乐'], ['土','场']], tip: '游 = 12 strokes. 乐 = 5 strokes. 场 = 6 strokes.', count: '12 + 5 + 6 = 23' },
  { char: '露珠', py: 'lù zhū', ms: 'titisan embun', en: 'dewdrop', topic: 'Topic 5', emoji: '💧', strokes: [['雨','露'], ['王','珠']], tip: '露 = 21 strokes (rain radical 雨). 珠 = 10 strokes.', count: '21 + 10 = 31' },
  { char: '照相', py: 'zhào xiàng', ms: 'tangkap gambar', en: 'take a photo', topic: 'Topic 5', emoji: '📷', strokes: [['灬','照'], ['木','相']], tip: '照 = 13 strokes (fire radical 灬). 相 = 9 strokes.', count: '13 + 9 = 22' },
  { char: '月亮', py: 'yuè liang', ms: 'bulan', en: 'moon', topic: 'Topic 5', emoji: '🌙', strokes: [['月'], ['亠','亮']], tip: '月 = 4 strokes. 亮 = 9 strokes.', count: '4 + 9 = 13' },
  { char: '红花', py: 'hóng huā', ms: 'bunga merah', en: 'red flower', topic: 'Topic 5', emoji: '🌺', strokes: [['纟','红'], ['艹','花']], tip: '红 = 6 strokes (silk radical 纟). 花 = 7 strokes (grass radical 艹).', count: '6 + 7 = 13' },
  { char: '雨停了', py: 'yǔ tíng le', ms: 'hujan berhenti', en: 'rain stopped', topic: 'Topic 5', emoji: '🌦️', strokes: [['雨'], ['亻','停'], ['了']], tip: '雨 = 8 strokes. 停 = 11 strokes. 了 = 2 strokes.', count: '8 + 11 + 2 = 21' },
  { char: '青山', py: 'qīng shān', ms: 'gunung hijau', en: 'green mountain', topic: 'Topic 5', emoji: '⛰️', strokes: [['青'], ['山']], tip: '青 = 8 strokes. 山 = 3 strokes.', count: '8 + 3 = 11' },
  { char: '弯曲', py: 'wān qū', ms: 'bengkang-bengkok', en: 'curved / winding', topic: 'Topic 5', emoji: '〰️', strokes: [['弓','弯'], ['曲']], tip: '弯 = 9 strokes. 曲 = 6 strokes.', count: '9 + 6 = 15' },
  { char: '小河', py: 'xiǎo hé', ms: 'sungai kecil', en: 'small river', topic: 'Topic 5', emoji: '🏞️', strokes: [['小'], ['氵','河']], tip: '小 = 3 strokes. 河 = 8 strokes (water radical 氵).', count: '3 + 8 = 11' },
  { char: '只', py: 'zhī', ms: 'penjodoh bilangan (ekor)', en: 'measure word (animals)', topic: 'Topic 5', emoji: '🔢', strokes: [['口','只']], tip: '只 = 5 strokes. Used as a measure word for animals like birds or cats.', count: '5' }
];
