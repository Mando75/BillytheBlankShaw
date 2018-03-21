const str = `Blank 
Die Harder
Matt
Bighead Burton
Fingers
Homeskillet
Big Baby Burton
Burt the Billowy Bear
Curtis
Blackstar
Chocolate Columbo
Magic Head
Spellmaster
SuperSmeller
SuperSniffer
Slicks
Gus T.T. Showbiz (The Extra T is for Extra Talent)
Ovaltine Jenkins
Schoonie “U-Turn” Singleton
Vernest Lambert Watkins
Bud (from “The Cosby Show”)
Nick Nack
Bruton Gaster
Lavender Gooms
Lemongrass Gogulope
Squirts MacIntosh
Weepy Boy Santos
Stewart Lee
Dr. Mc [Khoesan tongue clicking sounds] Took
François
Galileo Humpkins
Gus “Silly-Pants” Jackson
Fearless Guster
Shmuel Cohen
Methuselah Honeysuckle
Shutterfly Simmons
Paddy Simcox
Chesterfield McMillan (and wife)
Felicia Fancybottom
Tan
Ernesto Agapito Garces con y a de Abelar
Longbranch Pennywhistle
Professor Know-How
MC No Help
Dr DoNothing
Scrooge Jones
D’Andre Pride
Hummingbird Saltalamacchia
Anthony Wally Ali
Taye Diggs
Art Vandelay
Dequan “Smallpox” Randolph
Trapezius Milkington
Sterling Cooper
Burton “Oil Can” Guster
Hollaback Atcha
Limpking
Jazz Hands
Winston Zeddemore
Gus Brown
John Slade
Detective Miles
Greg
G-Wiz
Doughnut Holschtein
Ron Davis
Bob Adams
Harry Munroe
Rich Fingerland
Black Magic
Cheswick
Shawn
Magic Eight Ball Head
Shaggy Buddy Snap
Ghee Buttersnaps aka “The Heater”
The Vault of Secrets
Eye Fossets
Ground Control
Puffy
Clementine Woolysocks
Gustus
Joe from Lifeboat
Pinky Guscadero
Guts
Ol’ Ironside
Old Iron Stomach
Princess
Bruce Lee
Johnathan Jacob Jingley-Schmidt
Santonio Holmes
Deon Richmond
Gurton Buster
Chaz Bono
Chocolate Einstein
MC ClapYoHandz
Road Rush
Sher-Black-Lock
Mrs. Whittlebury
G-Force
Mellowrush
Crankshaft
Sammy
Usain Bolt
Damien The Python
Joey Bishop
Slick Fingers
Imhotep (or “Hecomethinpeace”)
LaWanda Page
Floyd
Control Alt Delete
Gootsy
The Jackal
Adewale Akinnuoye-Agbajnan
Yasmine Bleeth
Lodge Blackman
Frederick Douglass
Jet Blackness
Altar Boy Gus
Degenerate Gus
Mission Figs
The Black Goose
Radio Star (Video will kill him)
Gus Jay Gupta
Don Cheadle Junior
Reginald G-String, AKA Crowd Pleaser
Cinderella
Gasty
Last Night Gus
Baloney
Blacula
Count Chocula
Tap Man
Watson Williams
Benedict Arnold Jackson
Sammy the Seabird mascot
Suggs
Orderly
Bob Jones
Ingle Wuss
Leghorn
Burton Guster PI
Brother Gus
Brutal Gaster (You can call me Brutal)
Brutte
Braxton
Fellatio Del Toro
Eddie Adams from Torrance
Lorenz Tate
Huxtable
Hammering Gus
Sh'Dynasty, it is spelled S-H-comma to the top-Dynasty
CandyMan
Grn Blanstestorm
Satchel Gizmo
Immaculate Conception
Booty Tag
Domo Arigato
Quasimodo
Jonas Gustavsson
Blue Ivy Carter
Bill OfRights
Django Unchained
Smooth Storm
The Player named Gus
Burton Goutster
My Brother Darrell and my other brother Darrell
Burton Trout (No Relation)
Bad News Marvin Barnes
Lil´Wayne
Hellboy
Avon Man
King Mon Cutt (etcetera, etcetera)
Gigi Von Tran (Van Tranh, I've heard it both ways)
Inspector Jamaican Man
The Wiz,
Harry Potter Enthusiast
Busby
Recap McGee
Trending OnTwitter Hasthag What Would Gus Do?
Jeckyl
Robert Jones
Booooooob
Burtin Gustin
Darnell Guster
Soupcan Sam
Glutano
Denzel Diggs
Underwood Morris
Chestnut Washington
Myles Velour Jr.
Snappy 
Black Spencer
Blank`;

const names = str.trim().split('\n');

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function genName() {
  const name = names[randomInt(names.length - 1)];
  document.getElementById('input').innerText =  `"${name}"`;
}