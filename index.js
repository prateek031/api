const express = require("express");
const app =express();
app.use(express.json());
app.use(
    express.urlencoded({
        extended:true
    })
)
const locationData=[
    {
        "id": 1,
        "location": "Burj Khalifa",
        "country": "UAE",
        "imgurl": "https://images.unsplash.com/photo-1569104204151-5f6acfafadce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
        "rating": 4,
        "price": 10,
        "discription": "Burj Khalifa, Khalifa also spelled Khalīfah, mixed-use skyscraper in Dubai, United Arab Emirates, that is the world's tallest building, according to all three of the main criteria by which such buildings are judged (see Researcher's Note: Heights of Buildings). Burj Khalifa (“Khalifa Tower”), known during construction as Burj Dubai, was officially named to honour the leader of the neighbouring emirate of Abu Dhabi, Sheikh Khalifa ibn Zayed Al Nahyan. Although the tower was formally opened on January 4, 2010, the entirety of the interior was not complete at that time. Built to house a variety of commercial, residential, and hospitality ventures, the tower—whose intended height remained a closely guarded secret throughout its construction—reached completion at 163 floors and a height of 2,717 feet (828 metres). It was designed by the Chicago-based architectural firm of Skidmore, Owings & Merrill. Adrian Smith served as architect, and William F. Baker served as structural engineer."
      },
      {
        "id": 2,
        "location": "Effiel Tower",
        "country": "France",
        "imgurl": "https://images.unsplash.com/photo-1501649642741-b90ae46fc747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 3,
        "price": 15,
        "discription": "Eiffel Tower, French Tour Eiffel, Parisian landmark that is also a technological masterpiece in building-construction history. When the French government was organizing the International Exposition of 1889 to celebrate the centenary of the French Revolution, a competition was held for designs for a suitable monument. More than 100 plans were submitted, and the Centennial Committee accepted that of the noted bridge engineer Gustave Eiffel. Eiffel;s concept of a 300-metre (984-foot) tower built almost entirely of open-lattice wrought iron aroused amazement, skepticism, and no little opposition on aesthetic grounds. When completed, the tower served as the entrance gateway to the exposition."
      },
      {
        "id": 3,
        "location": "Burj-Al Arab",
        "country": "UAE",
        "imgurl": "https://images.unsplash.com/photo-1609853101913-d29a5ab265aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1408&q=80",
        "rating": 5,
        "price": 50,
        "discription": "The Burj al-ʿArab is as much a symbol of Dubai as the Eiffel Tower is of Paris and the Opera House of Sydney. It represents Dubai's economic boom and orientation toward the future. It was built to resemble the billowing sail of a dhow, a type of boat, and it is located on an artificial island. Two “wings” arranged in a V-shape form a vast “mast,” and the space between them houses a massive atrium, 590 feet (180 m) tall. This allows for a small, albeit tall, lobby space around a cascading water feature flanked by high-end boutiques and restaurants."
      },
      {
        "id": 4,
        "location": "Great wall",
        "country": "China",
        "imgurl": "https://images.unsplash.com/photo-1558981017-9c65fb6f2530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
        "rating": 2,
        "price": 5,
        "discription": "Great Wall of China, Chinese (Pinyin) Wanli Changcheng or (Wade-Giles romanization) Wan-li Chang-cheng (“10,000-Li Long Wall”), extensive bulwark erected in ancient China, one of the largest building-construction projects ever undertaken. The Great Wall actually consists of numerous walls—many of them parallel to each other—built over some two millennia across northern China and southern Mongolia. The most extensive and best-preserved version of the wall dates from the Ming dynasty (1368-1644) and runs for some 5,500 miles (8,850 km) east to west from Mount Hu near Dandong, southeastern Liaoning province, to Jiayu Pass west of Jiuquan, northwestern Gansu province. This wall often traces the crestlines of hills and mountains as it snakes across the Chinese countryside, and about one-fourth of its length consists solely of natural barriers such as rivers and mountain ridges. Nearly all of the rest (about 70 percent of the total length) is actual constructed wall, with the small remaining stretches constituting ditches or moats. Although lengthy sections of the wall are now in ruins or have disappeared completely, it is still one of the more remarkable structures on Earth. The Great Wall was designated a UNESCO World Heritage site in 1987."
      },
      {
        "id": 5,
        "location": "Qutub Minar",
        "country": "India",
        "imgurl": "https://images.unsplash.com/photo-1584283092096-4a48b7d822a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "rating": 5,
        "price": 10,
        "discription": "There are several reasons why the 72.5-metre-high Qutub Minar has come to be known as Delhi's enduring symbol. It is the world's tallest brick tower and one of the finest specimens of Islamic craftsmanship as well. Situated in a lush green complex of monuments and ruins in the Mehrauli Archaeological Park, formerly called Qila Rai Pithora, this UNESCO World Heritage Site attracts around three million visitors annually. Indeed, very much like the city it symbolises, the Qutub Minar has not only stood the test of time for over 800 years but also weathered several design changes, repairs and reconstructions, lightning and earthquakes — even preservation efforts.The Qutub Minar is a five-storeyed red sandstone tower built by Muslim conquerors in the thirteenth century to commemorate their final triumph over the Rajput rulers of Delhi (Qutub means victory), while also serving as a tower from where muezzins (criers) call for prayer at the Quwwatu'l-Islam mosque nearby. The minar (tower) is engraved with fine arabesque decorations on its surface"
      },
      
     
];
app.listen(3000,()=>{
    console.log("connected ")
});
app.get('/',(req,res)=>{
res.status(200).json(locationData);
// res.json(locationData);
})
