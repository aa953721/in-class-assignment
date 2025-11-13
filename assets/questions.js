// Question bank: Each genre -> array of {question, choices:[...], answer:index}
// Updated to match wheel genres: "Tv shows","Movies","Holidays","Celebrities","Religion","History","Politics","Music","Technology","Adventure"
const QUESTION_BANK={
 "Tv shows":[
  {question:"Which series features the character Walter White?",choices:["Breaking Bad","The Wire","Lost","Friends"],answer:0},
  {question:"What is the name of the coffee shop in Friends?",choices:["Central Perk","Monk's Cafe","JJ's Diner","Luke's Diner"],answer:0},
  {question:"Which streaming service released 'Stranger Things'?",choices:["Netflix","Hulu","Amazon Prime Video","Disney+"],answer:0},
  {question:"The Doctor in 'Doctor Who' is a?",choices:["Time Lord","Jedi","Wizard","Detective"],answer:0},
  {question:"Which show popularized the phrase 'Winter is coming'?",choices:["Game of Thrones","Vikings","The Last Kingdom","The Witcher"],answer:0}
 ],
 "Movies":[
  {question:"Who directed 'Jurassic Park'?",choices:["Steven Spielberg","James Cameron","Ridley Scott","Peter Jackson"],answer:0},
  {question:"Which film won Best Picture at the 2020 Oscars?",choices:["Parasite","1917","Joker","Once Upon a Time in Hollywood"],answer:0},
  {question:"'The Force' is from which franchise?",choices:["Star Wars","Star Trek","Dune","The Matrix"],answer:0},
  {question:"Which movie features the character Tony Stark?",choices:["Iron Man","Batman Begins","Superman Returns","Deadpool"],answer:0},
  {question:"Which studio created the Marvel Cinematic Universe (MCU)?",choices:["Marvel Studios","DC Films","Lucasfilm","Pixar"],answer:0}
 ],
 "Holidays":[
  {question:"Which date is New Year's Day in the Gregorian calendar?",choices:["January 1","December 31","July 4","October 31"],answer:0},
  {question:"Diwali is a festival of?",choices:["Lights","Harvest","Snow","Music"],answer:0},
  {question:"Which holiday is celebrated on December 25 by many Christians?",choices:["Christmas","Easter","Hanukkah","Ramadan"],answer:0},
  {question:"Decorated eggs are commonly associated with which holiday?",choices:["Easter","Thanksgiving","Holi","Eid al-Adha"],answer:0},
  {question:"Which US holiday honors military veterans each November?",choices:["Veterans Day","Memorial Day","Labor Day","Presidents Day"],answer:0}
 ],
 "Celebrities":[
  {question:"Who is known as the 'King of Pop'?",choices:["Michael Jackson","Elvis Presley","Prince","Justin Bieber"],answer:0},
  {question:"Which actor plays Captain Jack Sparrow?",choices:["Johnny Depp","Tom Hanks","Leonardo DiCaprio","Brad Pitt"],answer:0},
  {question:"Who sings the 2015 hit 'Hello'?",choices:["Adele","Taylor Swift","Ariana Grande","Rihanna"],answer:0},
  {question:"Which entrepreneur founded SpaceX?",choices:["Elon Musk","Jeff Bezos","Richard Branson","Bill Gates"],answer:0},
  {question:"Who portrayed Hermione Granger in the Harry Potter films?",choices:["Emma Watson","Emma Stone","Keira Knightley","Natalie Portman"],answer:0}
 ],
 "Religion":[
  {question:"Which text is central to Islam?",choices:["Quran","Torah","Bhagavad Gita","Tripitaka"],answer:0},
  {question:"Buddhism was founded by Siddhartha Gautama, also known as?",choices:["Buddha","Confucius","Laozi","Mahavira"],answer:0},
  {question:"Which religion observes the Sabbath Friday evening to Saturday evening?",choices:["Judaism","Christianity","Islam","Sikhism"],answer:0},
  {question:"The Holy Bible is primarily associated with which religion?",choices:["Christianity","Hinduism","Shinto","Jainism"],answer:0},
  {question:"A gurdwara is a place of worship for?",choices:["Sikhism","Islam","Judaism","Buddhism"],answer:0}
 ],
 "History":[
  {question:"Year World War II ended?",choices:["1945","1939","1918","1963"],answer:0},
  {question:"Egyptian writing system?",choices:["Cuneiform","Hieroglyphics","Runes","Kanji"],answer:1},
  {question:"Roman leader assassinated in 44 BC?",choices:["Augustus","Julius Caesar","Nero","Hadrian"],answer:1},
  {question:"The Great Wall is primarily in which country?",choices:["Japan","China","Mongolia","India"],answer:1},
  {question:"The Renaissance emphasized?",choices:["Mysticism","Humanism","Nomadism","Capitalism"],answer:1}
 ],
 "Politics":[
  {question:"How many branches in the U.S. federal government?",choices:["Three","Two","Four","Five"],answer:0},
  {question:"Which document begins with 'We the People'?",choices:["U.S. Constitution","Declaration of Independence","Bill of Rights","Federalist Papers"],answer:0},
  {question:"Head of government in many parliamentary systems?",choices:["Prime Minister","President","Speaker","Chief Justice"],answer:0},
  {question:"What term describes the right to vote?",choices:["Suffrage","Habeas Corpus","Filibuster","Gerrymander"],answer:0},
  {question:"Organization of 190+ member states for international peace?",choices:["United Nations","NATO","European Union","OAS"],answer:0}
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
