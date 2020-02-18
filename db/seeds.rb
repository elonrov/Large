# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Story.destroy_all
User.destroy_all 

body = "Big The Musical is a 1996 musical adaptation of the 1988 film starring Tom Hanks. It was directed by Mike Ockrent and featured music by David Shire and lyrics by Richard Maltby, Jr., with choreography by Susan Stroman. The pre-Broadway tryout started in Detroit in January 1996. The musical opened on Broadway at the Shubert Theatre on April 28, 1996, and closed on October 13, 1996, after 193 performances.[1] Although it was nominated for five Tony Awards (Best Actress, Supporting Actor, Book, Score, and Choreography), it was one of Broadway's costliest money-losers.[2]
The show had a US National tour, directed by Eric D. Schaeffer starring Jim Newman and Jacquelyn Piro Donovan, which began in September 1997 in Wilmington, DE. It was restaged and largely rewritten for the road.[3]
Reviews were sharply divided on the musical, but not on the 1998 US National tour, which was a hit after much rewriting from authors, John Weidman (book), Richard Maltby, Jr. (lyrics), and David Shire (music).[4] Alvin Klein, in his The New York Times review of a 2000 regional production of it, wrote, Big cannot be cavalierly dismissed as a failed musical that was no match for a blockbuster movie. It is satisfyingly good - and it was shortchanged.[2] The revised version is available through Music Theatre International.
The show made its UK and Ireland premiere prior to the West End at the Theatre Royal Plymouth from 5 to 12 November 2016 and at the Bord Gáis Energy Theatre in Dublin over the Christmas period from 7 December 2016 to 7 January 2017. Strictly Come Dancing winner and The Wanted vocalist Jay McGuiness stars as Josh. The production transferred to London's West End at the Dominion Theatre from 6 September to 2 November 2019 with McGuiness reprising the role of Josh."
"Josh Baskin, a 12-year-old New Jersey boy, finds that whenever he sees 13-year-old Cynthia Benson, he is unaccountably speechless. He doesn't understand his new feelings, but every family on the street knows what has occurred. For him, childhood has ended; adolescence has occurred, and the long complex process of growing up has begun. (Overture/Can't Wait). Then he receives amazing news from his best friend, Billy Kopecki: she thinks he is cute. All he has to do is make a move tonight at the carnival (Talk To Her/The Carnival). But doing so does not turn out as planned. Meeting her in line for a ride called Wild Thunder, he musters enough courage to talk to her, only to find that she has a date who is 16. Worse, he is too short to ride the ride. Humiliated, he skateboards away and finds himself in a secluded byway of the carnival with fun house mirrors and a mysterious fortune teller machine, Zoltar Speaks. The mysterious figure in it instructs him to Make a Wish! Impulsively, he makes the only one on his mind: I wish I was big! The machine produces a card: Your wish is granted.A clap of thunder and sudden rain send him home.
The next morning, Josh wakes up and sees the face of a 30-year-old man in his mirror (This Isnt Me). Still a 12-year-old boy, he now inhabits the body of an adult. His mother thinks he is an intruder and drives him from the house. (In the touring and rentable versions, his song is replaced by her singing about motherhood while making breakfast (Say Good Morning To Mom).) Only Billy understands. He decides they must go to New York City, find the machine, and let Josh wish himself back to his child life. Arcades there, however, dont have it, and locating carnivals will take six to eight weeks (three to four weeks in rented versions). He despairs at the prospect of remaining an adult for that long, and worries that he will have to find a job. In the touring and rented versions, Billy tries to calm him, telling him that hell be fine, because Youre A Big Boy Now. Billy returns to New Jersey, leaving him to spend his first night as an adult alone in the Port Authority Bus Terminal. (In the original version, he then wishes he could go home ("").)"

demo = User.create!(username: "Demouser", password: "demopw")

Andre = User.create!(username: "Andre The Giant", password: "verybig")
Shaq = User.create!(username: "Shaquille ONeal", password: "verybig")
King = User.create!(username: "King Kong", password: "verybig")
Hanks = User.create!(username: "Tom Hanks in Big", password: "verybig")
Brad = User.create!(username: "Brad Garrett", password: "verybig")
Biggie = User.create!(username: "Biggie", password: "verybig")
Bear = User.create!(username: "Papa Bear", password: "verybig")
Vince = User.create!(username: "Vince Vaughn", password: "verybig")
Nicole = User.create!(username: "Nicole Kidman", password: "verybig")
Brienne = User.create!(username: "Brienne of Tarth", password: "verybig")
BFG = User.create!(username: "The BFG", password: "verybig")
Shrek = User.create!(username: "Shrek", password: "verybig")

story1 = Story.create!(title: "Blue Whales and Other Sea Giants", body: body, author_id: King.id)
story2 = Story.create!(title: "Russia & Canada: The Two Biggest Countries", body: body, author_id: Hanks.id)
story3 = Story.create!(title: "Goldilocks Almost Had It", body: body, author_id: Shrek.id)
story4 = Story.create!(title: "Taller than Gandalf, Shorter than Hagrid", body: body, author_id: Biggie.id)
story5 = Story.create!(title: "The Humongous Fungus", body: body, author_id: Andre.id )
story6 = Story.create!(title: "Not Tupac, but ______", body: body, author_id: Biggie.id)
story7 = Story.create!(title: "Elephants with Elephantitus", body: body, author_id: Shaq.id)
story8 = Story.create!(title: "Sequoias, Firs, and Redwoods Even", body: body, author_id: Vince.id)
story9 = Story.create!(title: "10 Things That Wouldn't Fit in a Microwave", body: body, author_id: Nicole.id)
story10 = Story.create!(title: "A Watermelon to an Ant: It's All About Perspective", body: body, author_id: Brienne.id )
story11 = Story.create!(title: "Dreamliner: Honestly, Dream Bigger", body: body, author_id: BFG.id )
story12 = Story.create!(title: "Cruiseships, too", body: body, author_id: Shrek.id)
story13 = Story.create!(title: "Larger, Better, Faster, Stronger", body: body, author_id: King.id)
story14 = Story.create!(title: "Medicare For All", body: body, author_id: Hanks.id)
story15 = Story.create!(title: "The History of the Empire State Building", body: body, author_id: Brad.id)
story16 = Story.create!(title: "Too Big To Fail", body: body, author_id: Biggie.id)
story17 = Story.create!(title: "Growing, Growing, Gone", body: body, author_id: Bear.id)
story18 = Story.create!(title: "Super Size Me", body: body, author_id: Vince.id)
story19 = Story.create!(title: "The Bigger the Better", body: body, author_id: Nicole.id)
story20 = Story.create!(title: "Not Babies", body: body, author_id: Brienne.id )
story21 = Story.create!(title: "My History with Dinosaurs", body: body, author_id: BFG.id )
story22 = Story.create!(title: "Memoirs of a Big Thinker", body: body, author_id: Shrek.id)
story23 = Story.create!(title: "Smaller?? No thank you.", body: body, author_id: BFG.id )


photo1 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-bikini.png")
story1.photo.attach(io: photo1, filename: "open-doodles-bikini.png")

photo2 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-chilling.png")
story2.photo.attach(io: photo2, filename: "open-doodles-chilling.png")

photo3 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-clumsy.png")
story3.photo.attach(io: photo3, filename: "open-doodles-clumsy.png")

photo4 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-coffee.png")
story4.photo.attach(io: photo4, filename: "open-doodles-coffee.png")

photo5 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-dancing.png")
story5.photo.attach(io: photo5, filename: "open-doodles-dancing.png")

photo6 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-dog-jumping.png")
story6.photo.attach(io: photo6, filename: "open-doodles-dog-jumping.png")

photo7 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-doggie.png")
story7.photo.attach(io: photo7, filename: "open-doodles-doggie.png")

photo8 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-float.png")
story8.photo.attach(io: photo8, filename: "open-doodles-float.png")

photo9 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-groovy.png")
story9.photo.attach(io: photo9, filename: "open-doodles-groovy.png")

photo10 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-ice-cream.png")
story10.photo.attach(io: photo10, filename: "open-doodles-ice-cream.png")

photo11 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-jumping.png")
story11.photo.attach(io: photo11, filename: "open-doodles-jumping.png")

photo12 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-laying.png")
story12.photo.attach(io: photo12, filename: "open-doodles-laying.png")

photo13 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-levitate.png")
story13.photo.attach(io: photo13, filename: "open-doodles-levitate.png")

photo14 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-loving.png")
story14.photo.attach(io: photo14, filename: "open-doodles-loving.png")

photo15 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-moshing.png")
story15.photo.attach(io: photo15, filename: "open-doodles-moshing.png")

photo16 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-petting.png")
story16.photo.attach(io: photo16, filename: "open-doodles-petting.png")

photo17 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-plant.png")
story17.photo.attach(io: photo17, filename: "open-doodles-plant.png")

photo18 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-reading-side.png")
story18.photo.attach(io: photo18, filename: "open-doodles-reading-side.png")

photo19 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-reading.png")
story19.photo.attach(io: photo19, filename: "open-doodles-reading.png")

photo20 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-roller-skating.png")
story20.photo.attach(io: photo20, filename: "open-doodles-roller-skating.png")

photo21 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-rolling.png")
story21.photo.attach(io: photo21, filename: "open-doodles-rolling.png")

photo22 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-selfie.png")
story22.photo.attach(io: photo22, filename: "open-doodles-selfie.png")

photo23 = open("https://large-aa-seeds.s3.amazonaws.com/open-doodles-sitting-and-reading.png")
story23.photo.attach(io: photo23, filename: "open-doodles-sitting-and-reading.png")