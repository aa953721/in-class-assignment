// Question bank: Each genre -> array of {question, choices:[...], answer:index}
// Updated to match wheel genres: "Tv shows","Movies","Holidays","Celebrities","Religion","History","Politics","Music","Technology","Adventure"
const QUESTION_BANK={
 "Tv shows":[
  {question:"Which TV show features characters working at Dunder Mifflin?",choices:["Friends","The Office","Brooklyn 99","Parks and Rec"],answer:1},
  {question:"Who is the main character in \"Stranger Things\"?",choices:["Eleven","Katniss","Hermione","Rey"],answer:0},
  {question:"Which show is animated?",choices:["Breaking Bad","The Simpsons","Lost","The Crown"],answer:1},
  {question:"What show is known for the phrase \"Winter is coming\"?",choices:["The Witcher","Game of Thrones","Loki","Manifest"],answer:1},
  {question:"Which show is about a chemistry teacher turned criminal?",choices:["The Boys","Breaking Bad","Suits","The Flash"],answer:1},
  {question:"Which show features a group of scientists and their neighbor Penny?",choices:["Community","The Big Bang Theory","Friends","Lost"],answer:1},
  {question:"Which show is about a teenage girl who hunts vampires?",choices:["Supernatural","Buffy the Vampire Slayer","Charmed","Teen Wolf"],answer:1},
  {question:"Which TV show has characters named Ross, Rachel, Chandler, Monica, Joey, and Phoebe?",choices:["Friends","The Office","New Girl","Seinfeld"],answer:0},
  {question:"What show features contestants surviving on an island?",choices:["Survivor","Big Brother","The Voice","Idol"],answer:0},
  {question:"Which show features a bounty hunter named Din Djarin?",choices:["Loki","The Mandalorian","Andor","The Witcher"],answer:1}
 ],
 "Movies":[
  {question:"Which movie features a talking snowman named Olaf?",choices:["Shrek","Frozen","Moana","Tangled"],answer:1},
  {question:"Who is the main villain in \"The Lion King\"?",choices:["Scar","Jafar","Hades","Thanos"],answer:0},
  {question:"Which movie includes superheroes teaming up?",choices:["The Avengers","Toy Story","Jaws","The Notebook"],answer:0},
  {question:"What color pill does Neo take in \"The Matrix\"?",choices:["Green","Blue","Red","Yellow"],answer:2},
  {question:"Which movie is about a sinking ship?",choices:["Titanic","Cars","Up","Inception"],answer:0},
  {question:"Which movie features a clown named Pennywise?",choices:["It","Saw","Us","Scream"],answer:0},
  {question:"Which movie has the line \"To infinity... and beyond!\"?",choices:["Frozen","Toy Story","Cars","Inside Out"],answer:1},
  {question:"What movie stars a giant gorilla on Skull Island?",choices:["Jurassic Park","King Kong","Godzilla","Tarzan"],answer:1},
  {question:"Who is the main blue character in Avatar?",choices:["Neytiri","Moana","Mulan","Merida"],answer:0},
  {question:"Which movie is about time loops?",choices:["Groundhog Day","Titanic","Black Panther","John Wick"],answer:0}
 ],
 "Holidays":[
  {question:"Which holiday involves decorating a tree?",choices:["Thanksgiving","Christmas","Easter","Halloween"],answer:1},
  {question:"Which holiday uses carved pumpkins?",choices:["Christmas","Halloween","New Year's","Valentine's Day"],answer:1},
  {question:"Which holiday celebrates the New Year?",choices:["July 4th","January 1st","March 17th","April 1st"],answer:1},
  {question:"Which day is known for fireworks in the U.S.?",choices:["Valentine's Day","Easter","Fourth of July","Veterans Day"],answer:2},
  {question:"Which holiday involves egg hunts?",choices:["Easter","Christmas","Thanksgiving","Memorial Day"],answer:0}
 ],
 "Celebrities":[
  {question:"Who played Iron Man in the Marvel movies?",choices:["Brad Pitt","Robert Downey Jr.","Tom Cruise","Chris Evans"],answer:1},
  {question:"Who is known as the \"King of Pop\"?",choices:["Justin Bieber","Michael Jackson","Elvis Presley","Bruno Mars"],answer:1},
  {question:"Which singer released the song \"Shake It Off\"?",choices:["Ariana Grande","Taylor Swift","Beyonce","Selena Gomez"],answer:1},
  {question:"Which actor voiced Woody in Toy Story?",choices:["Tom Hanks","Ryan Gosling","Chris Pratt","Adam Sandler"],answer:0},
  {question:"Who is famous for the \"Rock eyebrow raise\"?",choices:["Chris Hemsworth","The Rock (Dwayne Johnson)","Will Smith","Vin Diesel"],answer:1}
 ],
 "Religion":[
  {question:"Christianity's holy book is the:",choices:["Quran","Torah","Bible","Vedas"],answer:2},
  {question:"Which religion celebrates Ramadan?",choices:["Islam","Judaism","Buddhism","Christianity"],answer:0},
  {question:"Where do Jews worship?",choices:["Mosque","Synagogue","Church","Temple"],answer:1},
  {question:"Who is the central figure of Christianity?",choices:["Moses","Jesus","Muhammad","Buddha"],answer:1},
  {question:"Hinduism is mainly practiced in which country?",choices:["China","Japan","India","Brazil"],answer:2}
 ],
 "History":[
  {question:"Who was the first U.S. President?",choices:["Abraham Lincoln","Thomas Jefferson","George Washington","John Adams"],answer:2},
  {question:"Which ship famously sank in 1912?",choices:["Mayflower","Titanic","Santa Maria","Victory"],answer:1},
  {question:"Which ancient civilization built the pyramids?",choices:["Romans","Vikings","Egyptians","Greeks"],answer:2},
  {question:"What year did World War II end?",choices:["1945","1980","1776","2001"],answer:0},
  {question:"Who discovered electricity using a kite experiment?",choices:["Edison","Newton","Franklin","Einstein"],answer:2}
 ],
 "Politics":[
  {question:"What is the leader of a city called?",choices:["President","Mayor","Judge","Captain"],answer:1},
  {question:"How many branches of government does the U.S. have?",choices:["2","3","4","5"],answer:1},
  {question:"Which political symbol is associated with the Republican Party?",choices:["Elephant","Donkey","Eagle","Lion"],answer:0},
  {question:"Which document begins with \"We the People\"?",choices:["The Bible","The Constitution","The Dictionary","The Newspaper"],answer:1},
  {question:"Where does the U.S. Congress meet?",choices:["White House","Capitol Building","Pentagon","Empire State Building"],answer:1}
 ],
 "Music":[
  {question:"Scale starting at C with no sharps/flats?",choices:["Chromatic","Minor","Pentatonic","Major"],answer:3},
  {question:"Beethoven is associated with which eras?",choices:["Renaissance","Classical/Romantic","Baroque","Modern"],answer:1},
  {question:"Tempo marking meaning fast?",choices:["Adagio","Largo","Allegro","Grave"],answer:2},
  {question:"The treble clef is also called?",choices:["G clef","F clef","C clef","Z clef"],answer:0},
  {question:"Intervals combine to form?",choices:["Rhythm","Harmony","Dynamics","Timbre"],answer:1}
 ],
 "Technology":[
  {question:"HTML stands for?",choices:["HyperText Markup Language","HighText Machine Language","HyperTool Multi Language","HybridText Markdown Layout"],answer:0},
  {question:"CPU stands for?",choices:["Central Processing Unit","Computer Power Utility","Core Process Usage","Control Program Unit"],answer:0},
  {question:"Binary digits are called?",choices:["Bytes","Bits","Nodes","Hexes"],answer:1},
  {question:"JavaScript primarily runs in the?",choices:["Web browser","Graphics card","Printer","Smartwatch only"],answer:0},
  {question:"Term for malicious software?",choices:["Firmware","Malware","Shareware","Freeware"],answer:1}
 ],
 "Adventure":[
  {question:"Key element of adventure stories?",choices:["Static setting","Quest/journey","Pure dialogue","No conflict"],answer:1},
  {question:"Indiana Jones' profession?",choices:["Pilot","Archaeologist","Detective","Chemist"],answer:1},
  {question:"Author of 'Treasure Island'?",choices:["Robert Louis Stevenson","Jules Verne","Mark Twain","H.G. Wells"],answer:0},
  {question:"Adventure tales often include maps and?",choices:["Exploration","Silent meditation","Judicial trials","Medical charts"],answer:0},
  {question:"Adventure protagonists usually face?",choices:["Challenges and dangers","Easy tasks","Guaranteed success","Instant wisdom"],answer:0}
 ]
};
