# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Story.destroy_all
User.destroy_all 

body = "Big The Musical is a 1996 musical adaptation of the 1988 film starring Tom Hanks. It was directed by Mike Ockrent and featured music by David Shire and lyrics by Richard Maltby, Jr., with choreography by Susan Stroman."

demo = User.create!(username: "demouser", password: "demopw")

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
story3 = Story.create!(title: "Famously Huge, Hugely Famous", body: body, author_id: Brad.id)
story4 = Story.create!(title: "Taller than Gandalf, Shorter than Hagrid", body: body, author_id: Biggie.id)
story5 = Story.create!(title: "The Humongous Fungus", body: body, author_id: Andre.id )
story6 = Story.create!(title: "Not Tupac, but", body: body, author_id: Bear.id)
story7 = Story.create!(title: "Elephants Remember", body: body, author_id: Shaq.id)
story8 = Story.create!(title: "Sequoias, Redwoods, and Even Firs", body: body, author_id: Vince.id)
story9 = Story.create!(title: "It Wouldn't Fit in a Microwave", body: body, author_id: Nicole.id)
story10 = Story.create!(title: "A Watermelon to an Ant: It's All About Perspective", body: body, author_id: Brienne.id )
story11 = Story.create!(title: "Dreamliner: Honestly, Dream Bigger", body: body, author_id: BFG.id )
story12 = Story.create!(title: "Cruiseships, too", body: body, author_id: Shrek.id)
story13 = Story.create!(title: "Bigger, Longer, Taller, Wider", body: body, author_id: King.id)
story14 = Story.create!(title: "Medicare For All", body: body, author_id: Hanks.id)
story15 = Story.create!(title: "The History of the Empire State Building", body: body, author_id: Brad.id)
story16 = Story.create!(title: "Who's Taller?", body: body, author_id: Biggie.id)
story17 = Story.create!(title: "Sizing Up", body: body, author_id: Bear.id)
story18 = Story.create!(title: "Super Size Me", body: body, author_id: Vince.id)
story19 = Story.create!(title: "The Bigger the Better", body: body, author_id: Nicole.id)
story20 = Story.create!(title: "Not Babies", body: body, author_id: Brienne.id )
story21 = Story.create!(title: "My History with Dinosaurs", body: body, author_id: BFG.id )
story22 = Story.create!(title: "Memoirs of a Big Thinker", body: body, author_id: Shrek.id)
story23 = Story.create!(title: "Smaller?? No thank you.", body: body, author_id: BFG.id )
story24 = Story.create!(title: "Goldilocks Almost Had It", body: body, author_id: Shrek.id)
