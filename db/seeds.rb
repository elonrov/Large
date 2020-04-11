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

body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc erat neque, vulputate sed erat et, cursus condimentum odio. Vivamus finibus rutrum metus, ac sodales nunc bibendum scelerisque. Mauris hendrerit lectus sodales imperdiet pharetra. Praesent mattis mauris ligula, pretium eleifend eros iaculis et. Maecenas ullamcorper et ex in fringilla. Duis sit amet arcu maximus sem lacinia venenatis vel gravida lacus. Sed maximus, risus vitae imperdiet volutpat, mauris dui interdum nulla, sed scelerisque justo nisl congue magna. Quisque eleifend facilisis lobortis. Phasellus leo ligula, scelerisque ut quam a, dapibus commodo augue. Praesent ante erat, commodo vitae euismod non, consequat sit amet sem. Etiam eleifend pretium leo, at consequat tellus pellentesque id. Ut et nisi ullamcorper, condimentum nisl in, iaculis erat. Curabitur accumsan sagittis purus non aliquam. Ut id iaculis nisl. In rhoncus in tortor vel pellentesque.

Donec fringilla, urna vel pharetra aliquam, odio mi pretium nisl, sit amet sagittis purus neque eget ligula. Curabitur id nibh turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sagittis, arcu et gravida interdum, purus felis faucibus libero, blandit rhoncus metus augue a augue. Mauris congue mattis augue. Curabitur ex neque, consequat ac sagittis ac, interdum sit amet justo. Aliquam suscipit aliquet felis, quis sollicitudin massa semper in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec placerat turpis et sapien finibus sollicitudin. In nec gravida odio, a ultricies ex. Pellentesque id leo vitae risus imperdiet consequat in at ante. Donec porta diam quis tempus venenatis. Duis a mi in orci malesuada convallis.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate tempus lectus vitae lacinia. Sed molestie sapien in tincidunt venenatis. Pellentesque sollicitudin ante sed tortor viverra ultrices. Aliquam fermentum quam vel purus vestibulum, sed varius velit venenatis. Praesent efficitur justo nec libero eleifend fringilla. Maecenas molestie quam ligula, at fermentum turpis faucibus non.

Integer lobortis lectus eget turpis ornare, ac luctus eros consectetur. Aenean ut est facilisis purus commodo fringilla ut at ligula. Suspendisse sit amet consequat sem. Fusce sodales iaculis dolor sit amet tincidunt. Sed et pellentesque mi, at laoreet tellus. Phasellus at urna faucibus, tempor nisi nec, condimentum lectus. Fusce elementum tincidunt tempor. Curabitur viverra scelerisque tortor, quis interdum nisi suscipit sit amet. Sed ac fermentum turpis, quis dignissim ipsum. Curabitur ultrices, massa ac egestas faucibus, erat dolor facilisis nunc, sit amet vestibulum metus libero vel sem. Ut fermentum augue turpis, at ultricies libero mollis in.

Quisque scelerisque enim eget sem aliquet pellentesque. Mauris commodo odio id sapien auctor, molestie ultricies nibh posuere. Aliquam erat volutpat. Vivamus ornare est eu nisl iaculis, in vestibulum ligula vehicula. Morbi ut malesuada massa, et scelerisque magna. Sed sollicitudin vitae turpis ac euismod. Cras ac iaculis risus, eu cursus ante. Proin neque tortor, viverra in leo quis, aliquam placerat tellus."

demo = User.create!(username: "Demo User", password: "demopw")

Andre = User.create!(username: "Andre The Giant", password: "verybig")
Shaq = User.create!(username: "Shaquille O'Neal", password: "verybig")
King = User.create!(username: "King Kong", password: "verybig")
Hanks = User.create!(username: "Tom Hanks in the movie Big", password: "verybig")
Brad = User.create!(username: "Brad Garrett", password: "verybig")
Biggie = User.create!(username: "The Notorious B.I.G", password: "verybig")
Bear = User.create!(username: "Papa Bear", password: "verybig")
Vince = User.create!(username: "Vince Vaughn", password: "verybig")
Nicole = User.create!(username: "Nicole Kidman", password: "verybig")
Brienne = User.create!(username: "Brienne of Tarth", password: "verybig")
BFG = User.create!(username: "The BFG", password: "verybig")
Shrek = User.create!(username: "The Big Lebowski", password: "verybig")

story1 = Story.create!(title: "Blue Whales and Other Sea Giants", body: body, author_id: King.id, date: Time.now)
story2 = Story.create!(title: "Russia & Canada: The Two Biggest Countries", body: body, author_id: Hanks.id, date: Time.now)
story3 = Story.create!(title: "Goldilocks Almost Had It", body: body, author_id: Bear.id, date: Time.now)
story4 = Story.create!(title: "6 Things, Besides Size, that Gandalf and Hagrid have in Common", body: body, author_id: Biggie.id, date: Time.now)
story5 = Story.create!(title: "The Humongous Fungus", body: body, author_id: Andre.id, date: Time.now)
story6 = Story.create!(title: "Not Tupac, but ______", body: body, author_id: BFG.id, date: Time.now)
story7 = Story.create!(title: "Elephants Get Elephantitus, Too", body: body, author_id: Shaq.id, date: Time.now)
story8 = Story.create!(title: "Sequoias, Firs, and Redwoods Even", body: body, author_id: Vince.id, date: Time.now)
story9 = Story.create!(title: "10 Things That Wouldn't Fit in a Microwave", body: body, author_id: Nicole.id, date: Time.now)
story10 = Story.create!(title: "A Watermelon to an Ant: It's All About Perspective", body: body, author_id: Brienne.id, date: Time.now)
story11 = Story.create!(title: "Dreamliner: Honestly, Dream Bigger", body: body, author_id: Andre.id, date: Time.now)
story12 = Story.create!(title: "Cruiseships, too", body: body, author_id: Shrek.id, date: Time.now)
story13 = Story.create!(title: "Larger, Better, Faster, Stronger", body: body, author_id: King.id, date: Time.now)
story14 = Story.create!(title: "Medicare For All", body: body, author_id: Hanks.id, date: Time.now)
story15 = Story.create!(title: "The History of the Empire State Building", body: body, author_id: Brad.id, date: Time.now)
story16 = Story.create!(title: "Too Big To Fail", body: body, author_id: King.id, date: Time.now)
story17 = Story.create!(title: "Growing, Growing, Gone", body: body, author_id: Bear.id, date: Time.now)
story18 = Story.create!(title: "Super Size Me", body: body, author_id: Vince.id, date: Time.now)
story19 = Story.create!(title: "The Bigger the Better", body: body, author_id: Nicole.id, date: Time.now)
story20 = Story.create!(title: "Not Babies", body: body, author_id: Brienne.id, date: Time.now )
story21 = Story.create!(title: "My History with Dinosaurs", body: body, author_id: BFG.id, date: Time.now)
story22 = Story.create!(title: "Memoirs of a Big Thinker", body: body, author_id: Shrek.id, date: Time.now)
story23 = Story.create!(title: "Smaller?? No thank you.", body: body, author_id: Brienne.id, date: Time.now)


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

responseA = "Wow what an amazing story. Thank you so much for sharing. Your ideas really resonate with what I've been feeling."
responseB = "You're a gifted writer and I'm glad I stumbled upon this great piece here on Large. I love this website so much. Whoever made it should be hired immediately."
responseC = "This story really opened my eyes and broadened my perspective. I've learned so much and can't wait to keep reading everything this writer posts here on Large."
responseD = "How beautiful it is to read something on the internet that speaks so directly to my soul. I'm in awe of this story and so grateful to this story-sharing community."

response1 = Response.create!(body: responseA, user_id: Andre.id, story_id: story1.id, date: Time.now)
response2 = Response.create!(body: responseA, user_id: Shaq.id, story_id: story2.id, date: Time.now)
response3 = Response.create!(body: responseA, user_id: King.id, story_id: story3.id, date: Time.now)
response4 = Response.create!(body: responseA, user_id: Hanks.id, story_id: story4.id, date: Time.now)
response5 = Response.create!(body: responseA, user_id: Brad.id, story_id: story5.id, date: Time.now)
response6 = Response.create!(body: responseA, user_id: Biggie.id, story_id: story6.id, date: Time.now)
response7 = Response.create!(body: responseA, user_id: Bear.id, story_id: story7.id, date: Time.now)
response8 = Response.create!(body: responseA, user_id: Vince.id, story_id: story8.id, date: Time.now)
response9 = Response.create!(body: responseA, user_id: Nicole.id, story_id: story9.id, date: Time.now)
response10 = Response.create!(body: responseA, user_id: Brienne.id, story_id: story10.id, date: Time.now)
response11 = Response.create!(body: responseA, user_id: BFG.id, story_id: story11.id, date: Time.now)
response12 = Response.create!(body: responseA, user_id: Shrek.id, story_id: story12.id, date: Time.now)

response13 = Response.create!(body: responseB, user_id: Andre.id, story_id: story13.id, date: Time.now)
response14 = Response.create!(body: responseB, user_id: Shaq.id, story_id: story14.id, date: Time.now)
response15 = Response.create!(body: responseB, user_id: King.id, story_id: story15.id, date: Time.now)
response16 = Response.create!(body: responseB, user_id: Hanks.id, story_id: story16.id, date: Time.now)
response17 = Response.create!(body: responseB, user_id: Brad.id, story_id: story17.id, date: Time.now)
response18 = Response.create!(body: responseB, user_id: Biggie.id, story_id: story18.id, date: Time.now)
response19 = Response.create!(body: responseB, user_id: Bear.id, story_id: story19.id, date: Time.now)
response20 = Response.create!(body: responseB, user_id: Vince.id, story_id: story20.id, date: Time.now)
response21 = Response.create!(body: responseB, user_id: Nicole.id, story_id: story21.id, date: Time.now)
response22 = Response.create!(body: responseB, user_id: Brienne.id, story_id: story22.id, date: Time.now)
response23 = Response.create!(body: responseB, user_id: BFG.id, story_id: story23.id, date: Time.now)
response24 = Response.create!(body: responseB, user_id: Shrek.id, story_id: story1.id, date: Time.now)

response25 = Response.create!(body: responseC, user_id: Andre.id, story_id: story2.id, date: Time.now)
response26 = Response.create!(body: responseC, user_id: Shaq.id, story_id: story3.id, date: Time.now)
response27 = Response.create!(body: responseC, user_id: King.id, story_id: story4.id, date: Time.now)
response28 = Response.create!(body: responseC, user_id: Hanks.id, story_id: story5.id, date: Time.now)
response29 = Response.create!(body: responseC, user_id: Brad.id, story_id: story6.id, date: Time.now)
response30 = Response.create!(body: responseC, user_id: Biggie.id, story_id: story7.id, date: Time.now)
response31 = Response.create!(body: responseC, user_id: Bear.id, story_id: story8.id, date: Time.now)
response32 = Response.create!(body: responseC, user_id: Vince.id, story_id: story9.id, date: Time.now)
response33 = Response.create!(body: responseC, user_id: Nicole.id, story_id: story10.id, date: Time.now)
response34 = Response.create!(body: responseC, user_id: Brienne.id, story_id: story11.id, date: Time.now)
response35 = Response.create!(body: responseC, user_id: BFG.id, story_id: story12.id, date: Time.now)
response36 = Response.create!(body: responseC, user_id: Shrek.id, story_id: story13.id, date: Time.now)

response37 = Response.create!(body: responseD, user_id: King.id, story_id: story14.id, date: Time.now)
response38 = Response.create!(body: responseD, user_id: Hanks.id, story_id: story15.id, date: Time.now)
response39 = Response.create!(body: responseD, user_id: Brad.id, story_id: story16.id, date: Time.now)
response40 = Response.create!(body: responseD, user_id: Biggie.id, story_id: story17.id, date: Time.now)
response41 = Response.create!(body: responseD, user_id: Bear.id, story_id: story18.id, date: Time.now)
response42 = Response.create!(body: responseD, user_id: Vince.id, story_id: story19.id, date: Time.now)
response43 = Response.create!(body: responseD, user_id: Nicole.id, story_id: story20.id, date: Time.now)
response44 = Response.create!(body: responseD, user_id: Brienne.id, story_id: story21.id, date: Time.now)
response45 = Response.create!(body: responseD, user_id: BFG.id, story_id: story22.id, date: Time.now)
response46 = Response.create!(body: responseD, user_id: Shrek.id, story_id: story23.id, date: Time.now)