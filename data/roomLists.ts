import { Room } from "@/components/Room/RoomListBox";
import { RoomAmenditiesKey } from "./roomAmendities";

export const roomLists: Array<Room> = [
  {
    id: 1,
    name: "Tiny home in Kerhonkson, New York",
    extendedName: "A Frame Cabin w/Wood Stove & Sauna in Shawangunks",
    description: `Stay in a private A Frame Cabin with wood burning stove at AOS R&R, Arts On Site Residency and Retreat Center. The cabin is located on 19 acres of pristine nature in the Shawangunk mountains, minutes from Minnewaska State Park, and hikes to waterfalls and high mountain lakes. Guests can stay in the forest and enjoy the amenities of our retreat center including the cedar barrel sauna, communal kitchen and bath house. It’s a great location to relax and immerse in nature.
The space
We converted a large garage space into a center to host holistic retreats and artist residencies. The center features two large studio spaces and a series of yurts, cabins and canvas bell tents to host up to 25 guests. Our goal is to build a space for artists to retreat from the distractions of the city and enjoy uninhibited time creating new works of art, away from NYC and close to wilderness. We have a non profit arts organization in NYC, AOS NYC, that supports our Artist R&R Residency Program. When you stay with us, you help support our dream of providing space to support the development of artists. Thank you!
Guest access
Guests have access to our cedar barrel sauna, communal kitchen, bath house, and firepit.
Other things to note
The A frame cabin is heated with a wood stove & firewood is included. There is no electricity in the space, but outlets are available in the main building. Clean linens and warm blankets are provided.`,
    preferred: false,
    dailyPrice: 139,
    host: {
      name: "Kyle",
      imageUrl:
        "https://a0.muscache.com/im/pictures/user/148bfabd-6ade-4dbb-acbc-44f585aea541.jpg?im_w=240",
      duration: "11 years",
      isSuperHost: true,
    },
    averageRating: 4.92,
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    amendities: [
      RoomAmenditiesKey.HAS_KITCHEN,
      RoomAmenditiesKey.HAS_WIFI,
      RoomAmenditiesKey.FREE_PARKING,
      RoomAmenditiesKey.PET_FRIENDLY,
    ],
    roomSize: "2 guests · 1 bedroom · 1 bed · 2 baths",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-588045223411524032/original/96a342c9-8361-4428-b374-5448274e8b05.jpeg?ml=true&im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-588045223411524032/original/d31d1ad8-fe07-4f9c-80d5-52dacdfd90a8.jpeg?ml=true&im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-588045223411524032/original/fc74c70f-1cfa-431f-9cf6-c031ec0e9b49.jpeg?ml=true&im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-588045223411524032/original/fc74c70f-1cfa-431f-9cf6-c031ec0e9b49.jpeg?ml=true%3Faki_policy%3Dlarge&im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-588045223411524032/original/3cdd0252-073d-46f5-84d9-6c7c2e81e11e.jpeg?ml=true%3Faki_policy%3Dposter&im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-25607342/original/2831fa2d-cea0-4f5e-979e-0b1b6f181ba0.jpeg?im_w=720",
    ],
    reviews: [
      {
        author: {
          name: "Judson",
          description: "Greenvile, South Carolina",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/User-464295503/original/e1c78c23-b90c-42da-88c4-b062b44a3f0b.jpeg?im_w=240",
        },
        comment: `This place is unbelievable. You are literally inside a work of art. This is another level of architecture and concept seen to reality. I chose to stay here based on the uniqueness of the property and it did not disappoint. Mesmerized by the design the entire stay. The speaker provided makes music sound ethereal and resonate through the interior like it’s alive. The grounds were also incredibly private with abundant nature surrounding. Amenities were beyond expectations. I am lucky to have stayed here and can’t thank the host enough.
Close to Rhinebeck village with incredible shops and restaurants. Was not aware of Steven Holl (architect) before this stay but I sure am now.
Eco integrated design. You are in the woods so expect some nature close up. Bullfrogs, goldfinches, and a doe with fawn visited. And some flies.
Worth the OMG status on Airbnb. Just got back home and want a sphere in my house badly. Thank you again!!!
`,
        rating: 5,
        writtenAt: new Date("2024-08-12"),
      },
      {
        author: {
          name: "Maoz",
          description: "Israel",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/34df7b56-bf92-4fc1-b924-9743efb7b2dc.jpg?im_w=240",
        },
        comment: `Indeed it was a unique experience, staying in such remarkable and uniquely designed house. We really enjoyed the property, the quiet and the view around us. The house has everything you need, to include washing machine and dryer which from some reason (?) are not listed in the "What this place offers" list.  The only thing that break the silence around us for approximately 48 hours was the groundskeeper that came to cut the grass near the house on Friday 15:30 )-:, other than that all was excellent and we really enjoyed the stay/experience.`,
        rating: 5,
        writtenAt: new Date("2024-06-13"),
      },
      {
        author: {
          name: "Daria",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/2baefe99-f7c0-4cca-9dc3-064ff310d352.jpg?im_w=240",
          description: "New York, New York",
        },
        comment:
          "The house is gorgeous -- stylish and incredibly peaceful. Sitting at the kitchen table in the mornings, watching light move into the house, was a gift for us. So were walks in the woods and listening to the frogs in the pond outside. The showers are amazing!  The house held everything we could possibly need, from a phone charger to shredded newspapers for the wood stove.",
        rating: 4,
        writtenAt: new Date("2024-06-14"),
      },
    ],
  },
  {
    id: 2,
    name: "Entire home in Shimoda, Japan",
    extendedName: "Japanese cedar wood villa as you watch the sea of Izu",
    description: `The building has a warm, warm atmosphere that uses a lot of cedar trees.
The entire house is a private rental so you don't have to worry about contact with other people.
We hope you will have a quiet and relaxing time, unlike the city, unlike the city, at this vacation home where you have a relaxing time.


· Views of the sea.
10 minutes walk to the beach.
Up to 6 guests can stay at the same price.
Free parking on premises (up to 3 cars)
Free WiFi with a fiber optic connection.
You can watch Netflix.
The interior design uses luxury furniture.
For long-term stays, you can also use the washing machine for free.
- Humidified air purifier in each bedroom.
Semi-doublebet made by Simmons.
The space
About Spring Moon Syungetsu Building.

The structure is made of cedar wood.
It's a warm space where you can feel the warmth of the trees.
We use luxury furniture in the room, and change the in-room paintings, artworks, antique accessories, etc. in the room.


1st Floor
　• 2 bedrooms
　　(Each room has a shower room and toilet)

2nd Floor
　Kitchen
　Living room
　- Dining room
　1 bathroom
　1 toilet
　Japanese-style room
　　(up to 4 futons can be provided in the Japanese-style room)
Guest access
You can basically use everything except the stock storage warehouse.
Other things to note
Please make a reservation at least 2 days before check-in.
Priority will be given to you first.If you contacted us first, we may not be able to accept your reservation at a time.Please be forewarned.
Telephone correspondence is only available in Japanese.
We have 4 beds and 4 Japanese futon beds.If you are staying with 5 people or more, we can provide futons in the Japanese-style room upstairs for 5 or more people.


[Number of guests]

As a general rule, we can accommodate up to 8 people.
· We refuse to use or stay other than those who applied at the time of reservation.Even infants, please be sure to let us know at the time of booking.


[About additional charge for number of guests]

　6 guests can stay at the basic accommodation fee for up to 6 guests.
　· From 7 people, an additional charge of 5,500 yen per person per night will be incurred.(Additional charge for people: 2 years old or older ~ Fee is uniform)
　※ If you enter the number of guests at the time of reservation, the fee will be automatically added and calculated.


About the flow on the day of your stay

On that day, the staff will be waiting for you on the spot.
If the estimated arrival time is around, please be sure to contact us.If we are unable to contact you within 1 hour of your expected arrival time, we will consider it a cancellation.
Foreign travelers are requested to present their passports on the day.



[[List of additional charges]]


＜ Early check-in ＞
　
　· Fee: 2,500 yen/h
　13 ： 00 ～ Reception available

　Normal check-in time is from 15:00 to 17:00.
　Please let us know if you would like an early check-in.
　※ We will check the reservation date and inform you whether or not early check-in is possible.Please note that we may not be able to respond to your request.


＜ Late check-out ＞

　· Fee: 3,500 yen/h
　Up to 12:00 (noon)

　Normal check-out time is until 10am.
　Please let us know if you would like a late check-out.
　※ We will check the reservation date and inform you whether late check-out is possible.Please note that we may not be able to respond to your request.
　

Intermediate cleaning during consecutive nights

　· Fee: 8,000 yen per time
　Duration: About 4 hours

　Intermediate cleaning during consecutive nights will be charged.Once your reservation is confirmed, we'll review your cleaning preferences.
　※ Even if you do not want intermediate cleaning, garbage collection will be done free of charge.



[About amenities, kitchen utensils, etc.]
The following are available:
※ Some amenities and cooking utensils are not listed.Please contact us for more information.

Amenities
Bath towel/Face towel/Hand towel/Bath mat/Shampoo/Conditioner/Body soap/Hand soap/Hand lotion/Cleansing/Facial cleanser/Lotion/Milky lotion/Shaving gel/Bath liquid/Room wear/Indoor slippers/Body towel/Toothbrush/Razor/Hair brush/Hair rubber/Laundry detergent/Dishwashing detergent
[Kitchen appliances]
Refrigerator/dishwasher/oven oven/toaster/electric kettle/rice cooker/hot plate/coffee maker
Cooking Utensils
Knife/Cutting board/Pot/Bowl/Zaru/Odori/Turner/Measuring cup/Measuring spoon/Plates/Cups/Chopsticks/Knives, Forks, Spoons/Children's plates and cutlery, etc.
* Seasonings are available only with salt and pepper.
Registration number
Hotels and Inns Business Act | 静岡県賀茂保健所 | 賀保衛第11号の35`,
    preferred: true,
    dailyPrice: 217,
    host: {
      name: "春月　令月",
      imageUrl:
        "https://a0.muscache.com/im/pictures/user/1af8ce8a-44fc-483d-80be-4ccc653fbbab.jpg?im_w=240",
      duration: "5 years",
      isSuperHost: true,
    },
    averageRating: 4.98,
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    amendities: [
      RoomAmenditiesKey.HAS_KITCHEN,
      RoomAmenditiesKey.HAS_WIFI,
      RoomAmenditiesKey.AIR_CONDITIONING,
      RoomAmenditiesKey.DRYER,
      RoomAmenditiesKey.FREE_PARKING,
    ],
    roomSize: "8 guests · 2 bedroom · 4 bed · 3 baths",
    images: [
      "https://a0.muscache.com/im/pictures/c4afed0d-a60e-46f3-807d-ee777819a8f2.jpg?im_w=1200",
      "https://a0.muscache.com/im/pictures/ce935742-8513-4946-847b-41718a5d5f63.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/c38ad413-2131-4eb5-8fd7-a4b5cc9ffd16.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/9688b7dd-338c-4a11-a1f4-f91cbc1581de.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/53f3f7e0-36a2-4f01-88fd-75123a8034cb.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/27808543-06ad-4bc7-8ba8-1f52b90466ac.jpg?im_w=720",
    ],
    reviews: [
      {
        author: {
          name: "Mutsu",
          description: "Saitama, Japan",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/User-464295503/original/e1c78c23-b90c-42da-88c4-b062b44a3f0b.jpeg?im_w=240",
        },
        comment: `The location near the sea and the room were clean and fully equipped, so it was the best memory!`,
        rating: 5,
        writtenAt: new Date("2024-09-08"),
      },
      {
        author: {
          name: "美和",
          description: "Israel",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/44f45318-a3b0-400f-9479-d29b799a89a8.jpg?im_w=240",
        },
        comment: `Great value for money, great place to stay.
It is clean, tasteful, and has great coziness.I appreciated the high quality of the amenities and appliances.
I would like to visit you again.`,
        rating: 5,
        writtenAt: new Date("2024-06-13"),
      },
      {
        author: {
          name: "森山",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/95a2401a-59f8-4685-a2d4-716ec16c3bac.jpg?im_w=240",
          description: "Chino, Japan",
        },
        comment:
          "We had a wonderful time while feeling the warmth of the wood in a great location and a very clean space.",
        rating: 2,
        writtenAt: new Date("2024-06-14"),
      },
    ],
  },
  {
    id: 3,
    name: "Entire rental unit in Paris, France",
    extendedName: "Studette under the roof of Paris Opéra",
    description: `Atypical and luminous studio, located in the center of Paris next to the Opéra Paris, Perfect place for a stay with friends, or as a couple

The accomodation
-Studette Petit, located on the 3rd floor without elevator/floor no elevator
- Quiet accommodation overlooking an interior and also historic passage
-the bedroom is on the mezzanine, access by a mobile staircase and a little steep
Registration number
7510214508954.`,
    preferred: false,
    dailyPrice: 94,
    host: {
      name: "Sauroutou",
      imageUrl:
        "https://a0.muscache.com/im/pictures/user/11eaf6a4-f037-43ea-a515-fd0911404f10.jpg?im_w=240",
      duration: "1 month",
      isSuperHost: false,
    },
    averageRating: 0.0,
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    amendities: [
      RoomAmenditiesKey.HAS_KITCHEN,
      RoomAmenditiesKey.HAS_WIFI,
      RoomAmenditiesKey.FREE_PARKING,
      RoomAmenditiesKey.PET_FRIENDLY,
    ],
    roomSize: "2 guests · 1 bedroom · 1 bed · 2 baths",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1217276500040247876/original/40680b5d-7a98-443e-a933-c96943185774.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1217276500040247876/original/494d1528-9b14-482a-adb7-181ad2c67777.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1217276500040247876/original/b24de553-59ae-4732-96aa-6a012a4e3753.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIxNzI3NjUwMDA0MDI0Nzg3Ng%3D%3D/original/6f262f27-6176-4319-8788-bdcfbec82f09.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1217276500040247876/original/4450ba9a-bc32-4d59-a559-486076b85299.jpeg?im_w=720",
    ],
    reviews: [],
  },
  {
    id: 4,
    name: "Caseta Wald by Tiny Away",
    extendedName: "Entire home in Sant Martí de Llémena, Spain",
    description: `Welcome to Caseta Wald! Located in the middle of nature, in the heart of the Llémena Valley, and one of the best tiny house rentals in Girona. The tiny house is located on a wildland formed by holm oaks, chestnut trees, oaks, and fig trees adjacent to Llémena River, providing a sanctuary for birds and animals. During hot weather, you can take a refreshing bath in the river, which is just a quick 5-minute walk from the property.
The space
Caseta Wald is located in the municipality of Sant Martí de Llémena, Girona—known for its stunning medieval architecture, city streets, and full-day tour packages for you to enjoy. It's one of the best tiny house rentals in the area, perched on higher ground with amazing panoramic views and a shaded area to relax in while admiring the surrounding view.

Located just a 45-minute drive away from Costa Brava along with other attractions such as La Garrotxa, Ermita de Sant Roc, and Banys Àrabs. A cozy 222-square-foot tiny home with easy access to water, a fully equipped kitchen, and excellent bathroom facilities including an eco-friendly cassette toilet, hand basin, and shower (gas heated for hot showers).

If you plan to spend your weekend getaways, we advise that you bring your basic necessities, such as food and water during your stay with us. Thank you!
Guest access
Guests will have access to the tiny house and its surrounding areas, except for the garden around our private house..

Guests can also pay a visit to the ceramic art studio held by the host, by attending a workshop. For reservations, please contact your host 24 hrs before arrival to make arrangements; information will be provided when booking the stay.
Other things to note
- No smoking allowed on the property
- No unregistered guests or visitors are allowed
- Recyclable and organic waste buckets are provided to dispose of rubbish
- We provide local products at an additional cost and upon prior request
- Feeding our animals is not permitted as this would interfere with their work; also, we ask guests not to leave food unattended
- We also have 2 cats and 2 dogs on the property; our dogs patrol the property for wild boars, which are common in rural areas
- Due to the property's rural location, you may encounter inconveniences such as occasional noise caused by seasonal works in the field
- The BBQ grill and outdoor fire pit are unavailable due to a comprehensive ban on fires in rural areas, prompted by the ongoing drought.
- We would like to advise guests that longer stays or later check-outs will incur an additional charge

Important Note:
- In order to maintain the cleanliness and functionality of our cassette toilets a minimum additional cleaning fee is applied for stays of 5 nights or more. We appreciate your cooperation in ensuring a hygienic experience during your stay.
Registration number
HUTG-074728`,
    preferred: true,
    dailyPrice: 144,
    host: {
      name: "Tiny Away Europe",
      imageUrl:
        "https://a0.muscache.com/im/pictures/user/fd49868a-01a8-4bb5-85b6-699cfe7239a5.jpg?im_w=240",
      duration: "2 years",
      isSuperHost: true,
    },
    averageRating: 5.0,
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    amendities: [
      RoomAmenditiesKey.HAS_KITCHEN,
      RoomAmenditiesKey.HAS_WIFI,
      RoomAmenditiesKey.FREE_PARKING,
      RoomAmenditiesKey.PET_FRIENDLY,
    ],
    roomSize: "2 guests · 1 bedroom · 1 bed · 2 baths",
    images: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061539479175162764/original/97fd3b6a-786f-40be-85cf-eaa063cada11.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061539479175162764/original/810deb5a-a04a-43e6-8128-9cc09b96a076.jpeg?ml=true&im_w=720",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061539479175162764/original/6cc82acb-dc90-4de5-b681-e9081863d246.jpeg?ml=true&im_w=720",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061539479175162764/original/3f6b2180-7026-4940-9cba-8ce516394d88.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061539479175162764/original/c65f39ff-11b5-4af9-bc49-10729c7add66.jpeg?im_w=720",
    ],
    reviews: [],
  },
  {
    id: 5,
    name: "H.R.H. Lola",
    extendedName: "Boat in Ocean City, Maryland",
    description: `One of a Kind, Vintage 1977 Hatteras fully remodeled motor yacht moored in the famous commercial harbor of Ocean City, MD! PRIVATE sunset cruises (2-4 hours) may be available during your stay. Contact host for further details if desired. This vessel has 3 staterooms and 3 bathrooms. The forward stateroom is a bunk style set up for smaller guest so please be aware when booking with its own bathroom. Guest stateroom has 2 single style beds with own bathroom across the hall. Master stateroom in the rear of the vessel features a queen size bed with it's own bathroom as well. There are 2 showers to be utilized onboard. All cabins do have a closet, however you are on a boat. Boats were not made for tons of clothing storage so pack accordingly. Our Lola sits overlooking the harbor, downtown Ocean City and many of Ocean City's famous eateries. We are in a protected location within the marina so you will not have much bumping around if any on your stay. We sit just next to Harborside Bar and Grille (home of the famous Orange Crush), Sunset Grille and Marina directly across the harbor, Crab Alley and the Shark on the Harbor. You have nightlife covered within walking distance. They have recently installed a new boardwalk that walks all the way around to the other side of the harbor for safe strolling while in town. This is a hopping little spot so you will see many other watermen, boaters, jet skiers and so on. Enjoy yourself on the front sun deck furniture while soaking in the sun and listen to live music from surrounding establishments. Friends are welcome but please see rules for that in our rules section of the listing. Front deck includes large sunbed, 2 sun sofas and a beverage bowl for all your ice/drinks. The aft deck features a dining table suited for 8 along with outside sink and freezer. Interior features a galley with microwave only, 2 additional freezers, fridge, eating utensils/beverage openers., dishwasher etc. as well as a dining table for 4. Endless amounts of fun to be had within walking distance or take a 1 mile ride across the bridge onto the Island of OC and enjoy everything OC has to offer (boardwalk, night clubs, amusement parks, golf courses, dining, shopping, etc) You can't pick a better location. We hope you enjoy your stay. We will do everything in our power to ensure we take care of you and your guest.

-H.R.H. Lola crew`,
    preferred: false,
    dailyPrice: 139,
    host: {
      name: "Zackary",
      imageUrl:
        "https://a0.muscache.com/im/pictures/user/1200f367-439a-4c0f-bf9a-e6d92c0d8f39.jpg?im_w=240",
      duration: "8 years",
      isSuperHost: true,
    },
    averageRating: 0.0,
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    amendities: [
      RoomAmenditiesKey.HAS_KITCHEN,
      RoomAmenditiesKey.HAS_WIFI,
      RoomAmenditiesKey.FREE_PARKING,
      RoomAmenditiesKey.PET_FRIENDLY,
    ],
    roomSize: "6 guests · 3 bedroom · 3 baths",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1136877887717305933/original/73a54c69-0b2c-400f-9f89-b7eb0998e67c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1136877887717305933/original/ac6a3ea8-79b1-43f9-af42-877e686211c7.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1136877887717305933/original/3263f7b1-9245-4639-8f3e-aa0813539781.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1136877887717305933/original/54eba479-349c-45fd-9864-537da5e08a0d.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1136877887717305933/original/a8397dca-d4e5-4f72-a35b-e1d486a569f9.jpeg?im_w=720",
    ],
    reviews: [],
  },
  {
    id: 6,
    name: "Luxury 8 BR Estate with Pool and Tennis court",
    extendedName: "Entire home in Mount Kisco, New York",
    description: `The house is a beautiful 10 acre home located in Bedford Corners with 8 Bedrooms. It’s perfect for gatherings. Located minutes from downtown Mount Kisco. Pick up any of our provided rackets and play a set of tennis. Take a jump into our pool and cool off on a hot summer day. Enjoy our Eero mesh integrated WiFi system throughout the house with speeds up to 300 Mbps. Featured on a few TV shows, if you are looking for a quiet, secluded place north of New York, you have found your place. NO WEDDINGS
The space
INSIDE:
- 8 Bedrooms
- 8 1/2 bathrooms
- 13000 sqft indoor living space
- 2 separate living rooms
- Study room with conference table and plenty of space to work.
- Billiards room
- Eero mesh WiFi system with speeds up to 300 Mbps throughout house
- Bottom floor has a bluetooth speaker system that you can connect your phone to and listen to music downstairs
- Note: First floor has 2 additional bathrooms (each 1/2) without shower not connected to any bedrooms

Bedrooms:

First Floor

Bedroom 1: Downstairs bedroom comes fully equipped with a walk-in closet, King bed, and a private shower.

Second Floor:

Bedroom 2: A beautiful pink landscaped room with a queen bed, walk-in closet, and a private bathroom

Master bedroom 3: A truly magnificent bedroom with a private study room, large walk-in closet, King bed and a private bathroom. The private bathroom comes fully equipped with a TOTO Japanese toilet, 2 sinks, large bath, and a steamed rain shower with optional omnidirectional jets. Also comes with an armchair massager. There is also a balcony in this bedroom.

Bedroom 4: A blue wallpaper room with a King size bed, private bathroom, and a walk-in closet.

Bedroom 5: A Japanese themed room with 2 queen size beds, large walk-in closet, and a private bathroom.

Bedroom 6: Our second largest bedroom, with a King size bed, large bathroom with a private walk-in closet, 2 sinks, large bath, and a private rain shower with jets.

Third floor:

Bedroom 7: This room comes with a walk-in closet, queen size bed, and a shared bathroom with bedroom 8.

Bedroom 8: Similarly to bedroom 7, comes with a queen size bed and a walk-in closet, and a shared bathroom.

Gathering areas:

Living Room 1: 85" sony 4k Smart TV, so you can log into Netflix and watch all of your favorite shows. Comes with an apple TV if you need it. Also a small dining table that can seat 6. There is also an olympic used table tennis table, along with 3 star butterfly table tennis balls and paddles for use.

Living room 2: A rustic style living room with 2 couches and a 100 year old Steinway piano. 2 smaller chairs face the fireplace, where you can cozy up during cold winters.

Billiards Room: A private room dedicated to billiards. A traditional billiards lamp hangs above the table. Comes with 4 adult cues and 2 child cues, as well as a bridge. Includes a full set of billiard balls and a triangle.

Dining Room: A magnificent wood finished 14-person dining room table underneath a crystal encrusted chandelier. Includes a serving table and formal silverware and plates for more formal occasions.`,
    preferred: false,
    dailyPrice: 1936,
    host: {
      name: "Kyle",
      imageUrl:
        "https://a0.muscache.com/im/pictures/user/148bfabd-6ade-4dbb-acbc-44f585aea541.jpg?im_w=240",
      duration: "11 years",
      isSuperHost: true,
    },
    averageRating: 4.38,
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    amendities: [
      RoomAmenditiesKey.HAS_KITCHEN,
      RoomAmenditiesKey.HAS_WIFI,
      RoomAmenditiesKey.FREE_PARKING,
      RoomAmenditiesKey.PET_FRIENDLY,
    ],
    roomSize: "16+ guests · 8 bedroom · 9 bed · 9 baths",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-50939368/original/72a50d17-bd3c-4fe9-93e4-3ac2a7bead28.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-50939368/original/fcdaf2b5-4a5d-42fb-b3f4-4603419c6964.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-50939368/original/7a57b197-a669-484e-ab92-07f479900814.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-50939368/original/85f041aa-b305-4848-9b89-f57e5492b7fb.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-50939368/original/0d251019-5cd7-4289-ad5f-149488952465.jpeg?im_w=720",
    ],
    reviews: [
      {
        author: {
          name: "Judson",
          description: "Greenvile, South Carolina",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/User-464295503/original/e1c78c23-b90c-42da-88c4-b062b44a3f0b.jpeg?im_w=240",
        },
        comment: `This place is unbelievable. You are literally inside a work of art. This is another level of architecture and concept seen to reality. I chose to stay here based on the uniqueness of the property and it did not disappoint. Mesmerized by the design the entire stay. The speaker provided makes music sound ethereal and resonate through the interior like it’s alive. The grounds were also incredibly private with abundant nature surrounding. Amenities were beyond expectations. I am lucky to have stayed here and can’t thank the host enough.
Close to Rhinebeck village with incredible shops and restaurants. Was not aware of Steven Holl (architect) before this stay but I sure am now.
Eco integrated design. You are in the woods so expect some nature close up. Bullfrogs, goldfinches, and a doe with fawn visited. And some flies.
Worth the OMG status on Airbnb. Just got back home and want a sphere in my house badly. Thank you again!!!
`,
        rating: 5,
        writtenAt: new Date("2024-08-12"),
      },
      {
        author: {
          name: "Maoz",
          description: "Israel",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/34df7b56-bf92-4fc1-b924-9743efb7b2dc.jpg?im_w=240",
        },
        comment: `Indeed it was a unique experience, staying in such remarkable and uniquely designed house. We really enjoyed the property, the quiet and the view around us. The house has everything you need, to include washing machine and dryer which from some reason (?) are not listed in the "What this place offers" list.  The only thing that break the silence around us for approximately 48 hours was the groundskeeper that came to cut the grass near the house on Friday 15:30 )-:, other than that all was excellent and we really enjoyed the stay/experience.`,
        rating: 5,
        writtenAt: new Date("2024-06-13"),
      },
      {
        author: {
          name: "Daria",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/2baefe99-f7c0-4cca-9dc3-064ff310d352.jpg?im_w=240",
          description: "New York, New York",
        },
        comment:
          "The house is gorgeous -- stylish and incredibly peaceful. Sitting at the kitchen table in the mornings, watching light move into the house, was a gift for us. So were walks in the woods and listening to the frogs in the pond outside. The showers are amazing!  The house held everything we could possibly need, from a phone charger to shredded newspapers for the wood stove.",
        rating: 4,
        writtenAt: new Date("2024-06-14"),
      },
    ],
  },
  {
    id: 7,
    name: "Moinho das Feteiras | The Mill",
    extendedName: "Windmill in Ponta Delgada, Portugal",
    description: `Built in the 19th century, with a 360 degrees view over the sea and surroundings on the top floor.
It features a Bedroom with a king size bed, a very well-decorated living room with kitchenette, and a WC.
Free WiFi, air conditioning, Led TV and DVD player.
Private parking inside the premises, providing extra security.
Perfect for an unforgettable honeymoon experience.
The space
It has a 4000 m garden with sub-tropical fruit trees, garden trees, and flowers.
In addition to the Mill ideal for 2 people, it has two more accommodation units: the Mó de Cima's House ideal up to 3 people and the Moleiro's House that hold up tp 4 people.
Guest access
Guests have access to all property spaces.
Registration number
Exempt`,
    preferred: false,
    dailyPrice: 154,
    host: {
      name: "Moinho",
      imageUrl:
        "https://a0.muscache.com/im/users/27251904/profile_pic/1423136116/original.jpg?im_w=240",
      duration: "9 years",
      isSuperHost: true,
    },
    averageRating: 4.93,
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    amendities: [
      RoomAmenditiesKey.HAS_KITCHEN,
      RoomAmenditiesKey.HAS_WIFI,
      RoomAmenditiesKey.FREE_PARKING,
      RoomAmenditiesKey.PET_FRIENDLY,
    ],
    roomSize: "2 guests · 1 bedroom · 1 bed · 1 baths",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/e3beaf52-13ab-44ed-bbfa-56ccf43bab98.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/858b29eb-53f3-4707-87a6-444f4375f888.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/bc9fdbba-a126-4357-946b-4d5f5581ca0f.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/d1e6500a-3b0f-451d-8f6e-a6f067930a0d.jpeg?im_w=720",
    ],
    reviews: [
      {
        author: {
          name: "Judson",
          description: "Greenvile, South Carolina",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/User-464295503/original/e1c78c23-b90c-42da-88c4-b062b44a3f0b.jpeg?im_w=240",
        },
        comment: `This place is unbelievable. You are literally inside a work of art. This is another level of architecture and concept seen to reality. I chose to stay here based on the uniqueness of the property and it did not disappoint. Mesmerized by the design the entire stay. The speaker provided makes music sound ethereal and resonate through the interior like it’s alive. The grounds were also incredibly private with abundant nature surrounding. Amenities were beyond expectations. I am lucky to have stayed here and can’t thank the host enough.
Close to Rhinebeck village with incredible shops and restaurants. Was not aware of Steven Holl (architect) before this stay but I sure am now.
Eco integrated design. You are in the woods so expect some nature close up. Bullfrogs, goldfinches, and a doe with fawn visited. And some flies.
Worth the OMG status on Airbnb. Just got back home and want a sphere in my house badly. Thank you again!!!
`,
        rating: 5,
        writtenAt: new Date("2024-08-12"),
      },
      {
        author: {
          name: "Maoz",
          description: "Israel",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/34df7b56-bf92-4fc1-b924-9743efb7b2dc.jpg?im_w=240",
        },
        comment: `Indeed it was a unique experience, staying in such remarkable and uniquely designed house. We really enjoyed the property, the quiet and the view around us. The house has everything you need, to include washing machine and dryer which from some reason (?) are not listed in the "What this place offers" list.  The only thing that break the silence around us for approximately 48 hours was the groundskeeper that came to cut the grass near the house on Friday 15:30 )-:, other than that all was excellent and we really enjoyed the stay/experience.`,
        rating: 5,
        writtenAt: new Date("2024-06-13"),
      },
      {
        author: {
          name: "Daria",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/2baefe99-f7c0-4cca-9dc3-064ff310d352.jpg?im_w=240",
          description: "New York, New York",
        },
        comment:
          "The house is gorgeous -- stylish and incredibly peaceful. Sitting at the kitchen table in the mornings, watching light move into the house, was a gift for us. So were walks in the woods and listening to the frogs in the pond outside. The showers are amazing!  The house held everything we could possibly need, from a phone charger to shredded newspapers for the wood stove.",
        rating: 4,
        writtenAt: new Date("2024-06-14"),
      },
    ],
  },
  {
    id: 8,
    name: "Tiny home in Kerhonkson, New York",
    extendedName: "A Frame Cabin w/Wood Stove & Sauna in Shawangunks",
    description: `Stay in a private A Frame Cabin with wood burning stove at AOS R&R, Arts On Site Residency and Retreat Center. The cabin is located on 19 acres of pristine nature in the Shawangunk mountains, minutes from Minnewaska State Park, and hikes to waterfalls and high mountain lakes. Guests can stay in the forest and enjoy the amenities of our retreat center including the cedar barrel sauna, communal kitchen and bath house. It’s a great location to relax and immerse in nature.
The space
We converted a large garage space into a center to host holistic retreats and artist residencies. The center features two large studio spaces and a series of yurts, cabins and canvas bell tents to host up to 25 guests. Our goal is to build a space for artists to retreat from the distractions of the city and enjoy uninhibited time creating new works of art, away from NYC and close to wilderness. We have a non profit arts organization in NYC, AOS NYC, that supports our Artist R&R Residency Program. When you stay with us, you help support our dream of providing space to support the development of artists. Thank you!
Guest access
Guests have access to our cedar barrel sauna, communal kitchen, bath house, and firepit.
Other things to note
The A frame cabin is heated with a wood stove & firewood is included. There is no electricity in the space, but outlets are available in the main building. Clean linens and warm blankets are provided.`,
    preferred: false,
    dailyPrice: 139,
    host: {
      name: "Kyle",
      imageUrl:
        "https://a0.muscache.com/im/pictures/user/148bfabd-6ade-4dbb-acbc-44f585aea541.jpg?im_w=240",
      duration: "11 years",
      isSuperHost: true,
    },
    averageRating: 4.92,
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    amendities: [
      RoomAmenditiesKey.HAS_KITCHEN,
      RoomAmenditiesKey.HAS_WIFI,
      RoomAmenditiesKey.FREE_PARKING,
      RoomAmenditiesKey.PET_FRIENDLY,
    ],
    roomSize: "2 guests · 1 bedroom · 1 bed · 2 baths",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-588045223411524032/original/96a342c9-8361-4428-b374-5448274e8b05.jpeg?ml=true&im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-588045223411524032/original/d31d1ad8-fe07-4f9c-80d5-52dacdfd90a8.jpeg?ml=true&im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-588045223411524032/original/fc74c70f-1cfa-431f-9cf6-c031ec0e9b49.jpeg?ml=true&im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-588045223411524032/original/fc74c70f-1cfa-431f-9cf6-c031ec0e9b49.jpeg?ml=true%3Faki_policy%3Dlarge&im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-588045223411524032/original/3cdd0252-073d-46f5-84d9-6c7c2e81e11e.jpeg?ml=true%3Faki_policy%3Dposter&im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-25607342/original/2831fa2d-cea0-4f5e-979e-0b1b6f181ba0.jpeg?im_w=720",
    ],
    reviews: [
      {
        author: {
          name: "Judson",
          description: "Greenvile, South Carolina",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/User-464295503/original/e1c78c23-b90c-42da-88c4-b062b44a3f0b.jpeg?im_w=240",
        },
        comment: `This place is unbelievable. You are literally inside a work of art. This is another level of architecture and concept seen to reality. I chose to stay here based on the uniqueness of the property and it did not disappoint. Mesmerized by the design the entire stay. The speaker provided makes music sound ethereal and resonate through the interior like it’s alive. The grounds were also incredibly private with abundant nature surrounding. Amenities were beyond expectations. I am lucky to have stayed here and can’t thank the host enough.
Close to Rhinebeck village with incredible shops and restaurants. Was not aware of Steven Holl (architect) before this stay but I sure am now.
Eco integrated design. You are in the woods so expect some nature close up. Bullfrogs, goldfinches, and a doe with fawn visited. And some flies.
Worth the OMG status on Airbnb. Just got back home and want a sphere in my house badly. Thank you again!!!
`,
        rating: 5,
        writtenAt: new Date("2024-08-12"),
      },
      {
        author: {
          name: "Maoz",
          description: "Israel",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/34df7b56-bf92-4fc1-b924-9743efb7b2dc.jpg?im_w=240",
        },
        comment: `Indeed it was a unique experience, staying in such remarkable and uniquely designed house. We really enjoyed the property, the quiet and the view around us. The house has everything you need, to include washing machine and dryer which from some reason (?) are not listed in the "What this place offers" list.  The only thing that break the silence around us for approximately 48 hours was the groundskeeper that came to cut the grass near the house on Friday 15:30 )-:, other than that all was excellent and we really enjoyed the stay/experience.`,
        rating: 5,
        writtenAt: new Date("2024-06-13"),
      },
      {
        author: {
          name: "Daria",
          imageUrl:
            "https://a0.muscache.com/im/pictures/user/2baefe99-f7c0-4cca-9dc3-064ff310d352.jpg?im_w=240",
          description: "New York, New York",
        },
        comment:
          "The house is gorgeous -- stylish and incredibly peaceful. Sitting at the kitchen table in the mornings, watching light move into the house, was a gift for us. So were walks in the woods and listening to the frogs in the pond outside. The showers are amazing!  The house held everything we could possibly need, from a phone charger to shredded newspapers for the wood stove.",
        rating: 4,
        writtenAt: new Date("2024-06-14"),
      },
    ],
  },
  {
    id: 9,
    name: "Entire rental unit in Paris, France",
    extendedName: "Studette under the roof of Paris Opéra",
    description: `Atypical and luminous studio, located in the center of Paris next to the Opéra Paris, Perfect place for a stay with friends, or as a couple

The accomodation
-Studette Petit, located on the 3rd floor without elevator/floor no elevator
- Quiet accommodation overlooking an interior and also historic passage
-the bedroom is on the mezzanine, access by a mobile staircase and a little steep
Registration number
7510214508954.`,
    preferred: false,
    dailyPrice: 94,
    host: {
      name: "Sauroutou",
      imageUrl:
        "https://a0.muscache.com/im/pictures/user/11eaf6a4-f037-43ea-a515-fd0911404f10.jpg?im_w=240",
      duration: "1 month",
      isSuperHost: false,
    },
    averageRating: 0.0,
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    amendities: [
      RoomAmenditiesKey.HAS_KITCHEN,
      RoomAmenditiesKey.HAS_WIFI,
      RoomAmenditiesKey.FREE_PARKING,
      RoomAmenditiesKey.PET_FRIENDLY,
    ],
    roomSize: "2 guests · 1 bedroom · 1 bed · 2 baths",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1217276500040247876/original/40680b5d-7a98-443e-a933-c96943185774.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1217276500040247876/original/494d1528-9b14-482a-adb7-181ad2c67777.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1217276500040247876/original/b24de553-59ae-4732-96aa-6a012a4e3753.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIxNzI3NjUwMDA0MDI0Nzg3Ng%3D%3D/original/6f262f27-6176-4319-8788-bdcfbec82f09.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1217276500040247876/original/4450ba9a-bc32-4d59-a559-486076b85299.jpeg?im_w=720",
    ],
    reviews: [],
  },
  {
    id: 10,
    name: "Caseta Wald by Tiny Away",
    extendedName: "Entire home in Sant Martí de Llémena, Spain",
    description: `Welcome to Caseta Wald! Located in the middle of nature, in the heart of the Llémena Valley, and one of the best tiny house rentals in Girona. The tiny house is located on a wildland formed by holm oaks, chestnut trees, oaks, and fig trees adjacent to Llémena River, providing a sanctuary for birds and animals. During hot weather, you can take a refreshing bath in the river, which is just a quick 5-minute walk from the property.
The space
Caseta Wald is located in the municipality of Sant Martí de Llémena, Girona—known for its stunning medieval architecture, city streets, and full-day tour packages for you to enjoy. It's one of the best tiny house rentals in the area, perched on higher ground with amazing panoramic views and a shaded area to relax in while admiring the surrounding view.

Located just a 45-minute drive away from Costa Brava along with other attractions such as La Garrotxa, Ermita de Sant Roc, and Banys Àrabs. A cozy 222-square-foot tiny home with easy access to water, a fully equipped kitchen, and excellent bathroom facilities including an eco-friendly cassette toilet, hand basin, and shower (gas heated for hot showers).

If you plan to spend your weekend getaways, we advise that you bring your basic necessities, such as food and water during your stay with us. Thank you!
Guest access
Guests will have access to the tiny house and its surrounding areas, except for the garden around our private house..

Guests can also pay a visit to the ceramic art studio held by the host, by attending a workshop. For reservations, please contact your host 24 hrs before arrival to make arrangements; information will be provided when booking the stay.
Other things to note
- No smoking allowed on the property
- No unregistered guests or visitors are allowed
- Recyclable and organic waste buckets are provided to dispose of rubbish
- We provide local products at an additional cost and upon prior request
- Feeding our animals is not permitted as this would interfere with their work; also, we ask guests not to leave food unattended
- We also have 2 cats and 2 dogs on the property; our dogs patrol the property for wild boars, which are common in rural areas
- Due to the property's rural location, you may encounter inconveniences such as occasional noise caused by seasonal works in the field
- The BBQ grill and outdoor fire pit are unavailable due to a comprehensive ban on fires in rural areas, prompted by the ongoing drought.
- We would like to advise guests that longer stays or later check-outs will incur an additional charge

Important Note:
- In order to maintain the cleanliness and functionality of our cassette toilets a minimum additional cleaning fee is applied for stays of 5 nights or more. We appreciate your cooperation in ensuring a hygienic experience during your stay.
Registration number
HUTG-074728`,
    preferred: true,
    dailyPrice: 144,
    host: {
      name: "Tiny Away Europe",
      imageUrl:
        "https://a0.muscache.com/im/pictures/user/fd49868a-01a8-4bb5-85b6-699cfe7239a5.jpg?im_w=240",
      duration: "2 years",
      isSuperHost: true,
    },
    averageRating: 5.0,
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    amendities: [
      RoomAmenditiesKey.HAS_KITCHEN,
      RoomAmenditiesKey.HAS_WIFI,
      RoomAmenditiesKey.FREE_PARKING,
      RoomAmenditiesKey.PET_FRIENDLY,
    ],
    roomSize: "2 guests · 1 bedroom · 1 bed · 2 baths",
    images: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061539479175162764/original/97fd3b6a-786f-40be-85cf-eaa063cada11.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061539479175162764/original/810deb5a-a04a-43e6-8128-9cc09b96a076.jpeg?ml=true&im_w=720",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061539479175162764/original/6cc82acb-dc90-4de5-b681-e9081863d246.jpeg?ml=true&im_w=720",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061539479175162764/original/3f6b2180-7026-4940-9cba-8ce516394d88.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1061539479175162764/original/c65f39ff-11b5-4af9-bc49-10729c7add66.jpeg?im_w=720",
    ],
    reviews: [],
  },
  {
    id: 11,
    name: "H.R.H. Lola",
    extendedName: "Boat in Ocean City, Maryland",
    description: `One of a Kind, Vintage 1977 Hatteras fully remodeled motor yacht moored in the famous commercial harbor of Ocean City, MD! PRIVATE sunset cruises (2-4 hours) may be available during your stay. Contact host for further details if desired. This vessel has 3 staterooms and 3 bathrooms. The forward stateroom is a bunk style set up for smaller guest so please be aware when booking with its own bathroom. Guest stateroom has 2 single style beds with own bathroom across the hall. Master stateroom in the rear of the vessel features a queen size bed with it's own bathroom as well. There are 2 showers to be utilized onboard. All cabins do have a closet, however you are on a boat. Boats were not made for tons of clothing storage so pack accordingly. Our Lola sits overlooking the harbor, downtown Ocean City and many of Ocean City's famous eateries. We are in a protected location within the marina so you will not have much bumping around if any on your stay. We sit just next to Harborside Bar and Grille (home of the famous Orange Crush), Sunset Grille and Marina directly across the harbor, Crab Alley and the Shark on the Harbor. You have nightlife covered within walking distance. They have recently installed a new boardwalk that walks all the way around to the other side of the harbor for safe strolling while in town. This is a hopping little spot so you will see many other watermen, boaters, jet skiers and so on. Enjoy yourself on the front sun deck furniture while soaking in the sun and listen to live music from surrounding establishments. Friends are welcome but please see rules for that in our rules section of the listing. Front deck includes large sunbed, 2 sun sofas and a beverage bowl for all your ice/drinks. The aft deck features a dining table suited for 8 along with outside sink and freezer. Interior features a galley with microwave only, 2 additional freezers, fridge, eating utensils/beverage openers., dishwasher etc. as well as a dining table for 4. Endless amounts of fun to be had within walking distance or take a 1 mile ride across the bridge onto the Island of OC and enjoy everything OC has to offer (boardwalk, night clubs, amusement parks, golf courses, dining, shopping, etc) You can't pick a better location. We hope you enjoy your stay. We will do everything in our power to ensure we take care of you and your guest.

-H.R.H. Lola crew`,
    preferred: false,
    dailyPrice: 139,
    host: {
      name: "Zackary",
      imageUrl:
        "https://a0.muscache.com/im/pictures/user/1200f367-439a-4c0f-bf9a-e6d92c0d8f39.jpg?im_w=240",
      duration: "8 years",
      isSuperHost: true,
    },
    averageRating: 0.0,
    startDate: new Date("2024-08-23"),
    endDate: new Date("2024-08-25"),
    amendities: [
      RoomAmenditiesKey.HAS_KITCHEN,
      RoomAmenditiesKey.HAS_WIFI,
      RoomAmenditiesKey.FREE_PARKING,
      RoomAmenditiesKey.PET_FRIENDLY,
    ],
    roomSize: "6 guests · 3 bedroom · 3 baths",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1136877887717305933/original/73a54c69-0b2c-400f-9f89-b7eb0998e67c.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1136877887717305933/original/ac6a3ea8-79b1-43f9-af42-877e686211c7.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1136877887717305933/original/3263f7b1-9245-4639-8f3e-aa0813539781.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1136877887717305933/original/54eba479-349c-45fd-9864-537da5e08a0d.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1136877887717305933/original/a8397dca-d4e5-4f72-a35b-e1d486a569f9.jpeg?im_w=720",
    ],
    reviews: [],
  },
];
