import { Injectable } from '@angular/core';
import { product } from '../components/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }
  products:product[]=[
      // Hot Chips
      { 
        productId: 1,
        productName: "Andhra Special Chekkalu", 
        productType: "hot chips", 
        productDescription: "Crispy and spicy potato chips", 
        productPrice: 50, productImage: "https://www.godavarivantillu.com/cdn/shop/files/chekkalu_305x.png?v=1709705896" 
      },
      { 
        productId: 2, 
        productName: "Atukula Mixture(poha chivda)", 
        productType: "hot chips", 
        productDescription: "Crunchy banana chips with masala", 
        productPrice: 60, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/files/peacocklife4555-Edit_a8244da5-23d8-4e38-a9ad-edb81416d3fd-removebg-preview_1_305x.png?v=1709700897" 
      },
      { 
        productId: 3, 
        productName: "Janthikalu", 
        productType: "hot chips", 
        productDescription: "Lightly salted crispy potato chips", 
        productPrice: 40, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/files/images_1_305x.jpg?v=1727350469" 
      },
      { 
        productId: 4, 
        productName: "Vamu Pusa", 
        productType: "hot chips", 
        productDescription: "Cheesy and crunchy chips", 
        productPrice: 70, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/Vampusa-removebg-preview_1_305x.png?v=1595054677" 
      },
      { 
        productId: 5, 
        productName: "Cheti Chekkalu", 
        productType: "hot chips", 
        productDescription: "Pepper flavored potato chips", 
        productPrice: 55, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/Chethi_Chekkalu-removebg-preview_305x.png?v=1609966104" 
      },
      { 
        productId: 6, 
        productName: "Andhra Mixture-Mixture Namkeen", 
        productType: "hot chips", 
        productDescription: "Tomato-flavored crispy chips", 
        productPrice: 65, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/files/AndhraMixture_305x.png?v=1709701174" 
      },
      { 
        productId: 7, 
        productName: "Karam Senagapappu", 
        productType: "hot chips", 
        productDescription: "Garlic-flavored crunchy chips", 
        productPrice: 50, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/IMG_0053_305x.png?v=1669180749" 
      },
      { 
        productId: 8, 
        productName: "Corn Flex Mixture", 
        productType: "hot chips", 
        productDescription: "Smoky BBQ flavored chips", 
        productPrice: 75, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/IMG_0102_305x.png?v=1668503661" 
      },
      { 
        productId: 9, 
        productName: "Jeedipappu pakodi", 
        productType: "hot chips", 
        productDescription: "Spicy Schezwan flavored chips", 
        productPrice: 80, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/CashewPakodiAndhraStyle_305x.jpg?v=1631466411" 
      },
      { 
        productId: 10, 
        productName: "Masala Palli", 
        productType: "hot chips", 
        productDescription: "Hot and spicy peri peri chips", 
        productPrice: 90, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/MasalaPalli_305x.jpg?v=1631466087" 
      },
      { 
        productId: 11, 
        productName: "Palli pakodi", 
        productType: "hot chips", 
        productDescription: "Hot and spicy peri peri chips", 
        productPrice: 90, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/PalliPakodiAndhraSnack_502ca1c9-194a-4844-a8af-402707d0105a_305x.jpg?v=1631104078" 
      },
      { 
        productId: 12, 
        productName: "Ribbon pakoda", 
        productType: "hot chips", 
        productDescription: "Hot and spicy peri peri chips", 
        productPrice: 90, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/files/Ribbon_pakoda-removebg-preview_1_305x.png?v=1709703819" 
      },
      { 
        productId: 13, 
        productName: "Dal Moth Mixture", 
        productType: "hot chips", 
        productDescription: "Hot and spicy peri peri chips", 
        productPrice: 90, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/Dalmodi-Godavarispecialsnack_480x_5ad338ba-ee36-4149-b336-c7e37326a580_305x.png?v=1617826211" 
      },
      { 
        productId: 14, 
        productName: "Karam gavvalu", 
        productType: "hot chips", 
        productDescription: "Hot and spicy peri peri chips", 
        productPrice: 90, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/KaramGavvalu_HotGavvalu_305x.png?v=1604850541" 
      },
      { 
        productId: 15, 
        productName: "Masala Cashew", 
        productType: "hot chips", 
        productDescription: "Hot and spicy peri peri chips", 
        productPrice: 90, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/MasalaCashew-2_305x.jpg?v=1594327338" 
      },
      { 
        productId: 16, 
        productName: "Sakinalu", 
        productType: "hot chips", 
        productDescription: "Hot and spicy peri peri chips", 
        productPrice: 90, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/IMG_0964-removebg-preview_2_305x.png?v=1680323439" 
      },
      // Sweets
      { 
        productId: 17, 
        productName: "Tapaswaram Madata Kaja", 
        productType: "sweets", 
        productDescription: "Soft and spongy milk-based sweet", 
        productPrice: 120, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/tapeswaram-madatha-kaja-125_305x.jpg?v=1637866867" 
      },
      { 
        productId: 18, 
        productName: "Dry Fruit Pootharekulu", 
        productType: "sweets", 
        productDescription: "Juicy and soft Bengali sweet", 
        productPrice: 110, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/dry-fruit-pootharekulu-839_305x.jpg?v=1638883323" 
      },
      { 
        productId: 19, 
        productName: "Nuvvala Ariselu", 
        productType: "sweets", 
        productDescription: "Cashew-based sweet delicacy", 
        productPrice: 450, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/nuvvula-arisalu-godavari-style-692_305x.png?v=1638884991" 
      },
      { 
        productId: 20, 
        productName: "Nethi Ariselu", 
        productType: "sweets", 
        productDescription: "Crispy and juicy sweet treat", 
        productPrice: 150, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/nethi-ariselu-294_720x.jpg?v=1638884969" 
      },
      { 
        productId: 21, 
        productName: "Bandar Laddu", 
        productType: "sweets", 
        productDescription: "Traditional Indian round sweet", 
        productPrice: 200, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/bandar-laddu-tokkudu-854_305x.png?v=1638885756" 
      },
      { 
        productId: 22, 
        productName: "Kakinada Gottam Kaja", 
        productType: "sweets", 
        productDescription: "Delicious milk-based sweet", 
        productPrice: 180, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/kakinada-gottam-kaja-152_305x.jpg?v=1638885869" 
      },
      { 
        productId: 23, 
        productName: "Kobbari-kova-laddu", 
        productType: "sweets", 
        productDescription: "Ghee-based traditional sweet",
        productPrice: 220, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/kobbari-kova-laddu-kajjikayalu-763_305x.jpg?v=1638885041" 
      },
      { 
        productId: 24, 
        productName: "Palli Vundalu", 
        productType: "sweets", 
        productDescription: "Flaky and soft sweet", 
        productPrice: 100, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/files/Palli_Vundalu_305x.png?v=1728376149" 
      },
      { 
        productId: 25, 
        productName: "Boondhi Achulu", 
        productType: "sweets", 
        productDescription: "Rich and delicious sweet dish", 
        productPrice: 250, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/boondhi-achu-or-mithai-karakajjam-242_305x.jpg?v=1638886107" 
      },
      { 
        productId: 26, 
        productName: "Milk Mysore Pak", 
        productType: "sweets", 
        productDescription: "Delightful and creamy sweet", 
        productPrice: 300, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/milk-mysore-pak-742_305x.png?v=1638886496" 
      },
      { 
        productId: 27, 
        productName: "Kaju Chikki", 
        productType: "sweets", 
        productDescription: "Delightful and creamy sweet", 
        productPrice: 300, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/kaju-chikki-cashew-bellam-jeedipappu-achu-199_305x.jpg?v=1638972925" 
      },
      { 
        productId: 28, 
        productName: "Pakam Kajjikayalu", 
        productType: "sweets", 
        productDescription: "Delightful and creamy sweet", 
        productPrice: 300, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/IMG_9994_abf6ad23-a491-4c4c-887a-130a7266230f_305x.png?v=1669182024" 
      },
      { 
        productId: 29, 
        productName: "Junnu Powder", 
        productType: "sweets", 
        productDescription: "Delightful and creamy sweet", 
        productPrice: 300, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/Junnu_305x.png?v=1667720024" 
      },
      { 
        productId: 30, 
        productName: "Boondi Laddu", 
        productType: "sweets", 
        productDescription: "Delightful and creamy sweet", 
        productPrice: 300, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/boondi-laddu-482_305x.jpg?v=1638886301" 
      },
      { 
        productId: 31, 
        productName: "Kobbari Undalu", 
        productType: "sweets", 
        productDescription: "Delightful and creamy sweet", 
        productPrice: 300, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/JaggeryCoconutLadoo_250x.png?v=1641637215" 
      },
      { 
        productId: 32, 
        productName: "Panasa Thonalu", 
        productType: "sweets", 
        productDescription: "Delightful and creamy sweet", 
        productPrice: 300, 
        productImage: "https://www.godavarivantillu.com/cdn/shop/products/PanasaThonaluSweet_305x.png?v=1665685589" 
      },  
      // Vadiyalu
      {
        productId:33,
        productName:"Gummadikaya Vadiyalu (or) Pumpkin Fritters",
        productPrice:'180',
        productType:"vadiyalu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/GummadikayaVadiyaluMainImage_b753b631-6966-41ab-b0a1-f7cdcb4762a4_250x.jpg?v=1614524549",
        productDescription: "Crispy and flavorful sun-dried lentil fritters for a perfect crunchy snack."
      },
      {
        productId:34,
        productName:"Challa Mirapakayalu/ oora mirapakayalu / Majjiga Mirapakayalu Premium Quality",
        productPrice:'175',
        productType:"vadiyalu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/ChallaMirchiMainImage_f78d4564-44be-43cb-88a4-eb2428711535_250x.jpg?v=1614525116",
        productDescription: "Crispy and flavorful sun-dried lentil fritters for a perfect crunchy snack."
      },
      {
        productId:35,
        productName:"Biyyam Pindi Vadiyalu (Rice Papad) 250gms - Home",
        productPrice:'170',
        productType:"vadiyalu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/biyyampindivadiyalumainimage_b024d7c3-de3a-4e82-8ba2-26233d4e59a6_250x.jpg?v=1614523664",
        productDescription: "Crispy and flavorful sun-dried lentil fritters for a perfect crunchy snack."
      },
      {
        productId:36,
        productName:"Ulavacharu 250gms",
        productPrice:'150',
        productType:"vadiyalu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/Ulavacharu_recipe-removebg-preview_250x.png?v=1657210715",
        productDescription: "Crispy and flavorful sun-dried lentil fritters for a perfect crunchy snack."
      },
      {
        productId:37 ,
        productName:"maniapa vadiyalu",
        productPrice:'160',
        productType:"vadiyalu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/20211029_130538-removebg-preview_250x.png?v=1635562534",
        productDescription: "Crispy and flavorful sun-dried lentil fritters for a perfect crunchy snack."
    
      },
      // Podulu
      {
        productId:38,
        productName:"Idli karam Podi",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/IdliKarampodi_250x.jpg?v=1627682772",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:39,
        productName:"Kandi podi",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/KandiPodi-AndhraGunpowder_52ebc1ba-4fd0-483c-abe4-01c9e6b11c74_250x.jpg?v=1627682925",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:40,
        productName:"PULIHORA PASTE/ Puliyodharai / Puliyogare 250 gms pack",
        productPrice:"175",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/Pulihora_Paste-removebg-preview_250x.png?v=1672921870",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:41,
        productName:"Vellulli Karam Podi",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/VelliliKaramCropped_250x.jpg?v=1627681564",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:42,
        productName:"Nuvvula karam podi",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/MunagakuKaram_250x.jpg?v=1627684477",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:43,
        productName:"Avisaginjala podi (Flax Seeds Powder)",
        productPrice:"160",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/PalliKaramPodi_250x.jpg?v=1627681911",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:44,
        productName:"kakarakaya Karam Podi 250gms",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/KakarakayaKaram_250x.jpg?v=1627684879",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:45,
        productName:"usirikayakaram",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/UsirikayaKaram_250x.jpg?v=1627684268",
        productDescription: "A spicy  perfect for enhancing your meals." 
      },
      {
        productId:46,
        productName:"kothimeerakarampodi",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/KothimeeraKaramPodi_250x.jpg?v=1627683566",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:47,
        productName:"nallakaram",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/files/IMG_5399_250x.jpg?v=1729962333",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:48,
        productName:"GaramMasalaPowder",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/GaramMasalaPowder_250x.jpg?v=1600614868",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:49,
        productName:"KobbarikaramPodi",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/files/KobbariKaramPodi_CoconutSpicePowder_250x.png?v=1728455445",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:50,
        productName:"challaMirapakayaPodi",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/files/ChallaMirapakayaPodi_250x.png?v=1707755701",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
      productId:51,
      productName:"PutnalaKaramPodi",
      productPrice:"150",
      productType:"podulu",
      productImage:"https://www.godavarivantillu.com/cdn/shop/files/PutnalaKaramPodi_PappulaPodi_250x.png?v=1728536665",
      productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:52,
        productName:"Munagakukaram",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/MunagakuKaram_250x.jpg?v=1627684477",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:53,
        productName:"PalliKaramPodi",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/PalliKaramPodi_250x.jpg?v=1627681911",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      {
        productId:54,
        productName:"karivepakukaram",
        productPrice:"150",
        productType:"podulu",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/KarivepakuKaramPodi_250x.jpg?v=1627683768",
        productDescription: "A spicy  perfect for enhancing your meals."
      },
      // Pickles
      {
        productId:55,
        productName:"gongurapickles",
        productPrice:"140",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/gongura-pickle-nilva-pachadi-979_250x.png?v=1638984591",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:56,
        productName:"avakaya-authentic-andhra-mango-pickles",
        productPrice:"120",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/avakaya-authentic-andhra-mango-pickle-577_250x.png?v=1638984524",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:57,
        productName:"andhra-tomato-pickles",
        productPrice:"150",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/andhra-tomato-pickle-pachadi-169_250x.jpg?v=1638984639",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:58,
        productName:"Andhra Style Spicy Prawns Pickle (Bhimavaram Special Royyala Avakaya)",
        productPrice:"425",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/PrawnsPickle_250x.jpg?v=1627597545",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:59,
        productName:"Andhra Style Boneless Chicken Pickle - Godavari Style",
        productPrice:"350",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/BonelessChickenPickle_250x.jpg?v=1627596545",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:60,
        productName:"Usirikaya Avakaya (amla pickle andhra style)",
        productPrice:"140",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/usirikaya-avakaya-amla-pickle-andhra-style-509_250x.png?v=1638984701",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:61,
        productName:"pandumrichi-pickles",
        productPrice:"140",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/pandumirchi-pickle-539_250x.jpg?v=1638984812",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:62,
        productName:"allampachadi",
        productPrice:"170",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/AllamPachadi2_250x.png?v=1672764526",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:63,
        productName:"Bellam Avakaya (Theepi/Sweet Avakaya/ Sweet mango Pickle)",
        productPrice:"150",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/bellam-avakaya-theepisweet-sweet-mango-pickle-855_250x.jpg?v=1638984737",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:64,
        productName:"andhra-chicken-pickle-with-bone",
        productPrice:"350",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/andhra-chicken-pickle-with-bone-970_250x.jpg?v=1638882548",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:65,
        productName:"lemon-pickle-nimmakaya-pachadi",
        productPrice:"140",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/lemon-pickle-nimmakaya-pachadi-andhra-style-458_250x.jpg?v=1638984854",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:66,
        productName:"andhra-style-garlic-avakaya-vellulli",
        productPrice:"150",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/andhra-style-garlic-avakaya-vellulli-769_250x.jpg?v=1638984991",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:67,
        productName:"gonuraPrawnPickles",
        productPrice:"350",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/GonguraPrawnPickle_644d8b3e-5a2a-47f8-8940-6eef67a70205_250x.jpg?v=1627597291",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:68,
        productName:"maagaya-cut-mango-pickles",
        productPrice:"170",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/maagaya-cut-mango-pickle-907_250x.jpg?v=1638985044",
         productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:69,
        productName:"cauliflower-avakaya-andhra-style",
        productPrice:"140",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/cauliflower-avakaya-andhra-style-pickle-974_250x.jpg?v=1638985398",
        productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:70,
        productName:"muttonpickles",
        productPrice:"450",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/MuttonPickle_081d7874-1d2d-479a-a9fa-8fc939b540c4_250x.jpg?v=1627598626",
        productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:71,
        productName:"GonguraChickenpickles",
        productPrice:"350",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/GonguraChickenPickle_250x.jpg?v=1627597935",
        productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:72,
        productName:"mulakkada-avakaya-drumstick-pickles",
        productPrice:"150",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/mulakkada-avakaya-drumstick-pickle-900_250x.jpg?v=1638985569",
        productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:73,
        productName:"KomermenuFish-Pickles",
        productPrice:"170",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/KoramenuPickle_b5e6d72b-7d30-4278-88e8-b4c2423657d0_250x.jpg?v=1627598217",
        productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:74,
        productName:"vanakya-avakaya-brinjal-pickles",
        productPrice:"150",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/vankaya-avakaya-brinjal-pickle-577_250x.jpg?v=1638985467",
        productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:75,
        productName:"andhra-fish-pickles",
        productPrice:"250",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/andhra-fish-pickle-867_250x.jpg?v=1631733028",
        productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:76,
        productName:"Dondakaya Pickle | Dondakaya Avakaya | Andhra Ivy Gourd Pickle",
        productPrice:"130",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/IMG_9980_9f355ae9-06a5-461f-ab10-b8f8cfd6add6_250x.png?v=1668493679",
        productDescription:"A delicious spices for a unique and flavorful pickle."
      },
      {
        productId:77,
        productName:"curryLeafpickles",
        productPrice:"120",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/CurryLeafPickle_250x.png?v=1672761739",
        productDescription:"A delicious spices for a unique and flavorful pickle."
    
      },
      
      {
        productId:78,
        productName:"GonguraMuttonpickles",
        productPrice:"550",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/GonguraMuttonPickle_250x.jpg?v=1627598884",
        productDescription:"A delicious spices for a unique and flavorful pickle."
    
      },
      {
        productId:79,
        productName:"chicken-briyani-pickle-boneless",
        productPrice:"450",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/files/Chicken_Biryani_Pickle_250x.png?v=1721467547",
        productDescription:"A delicious spices for a unique and flavorful pickle."
    
      },
      {
        productId:80,
        productName:"Natu Kodi Pickle 250gms",
        productPrice:"400",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/NewBitmapimage_250x.png?v=1654080355",
        productDescription:"A delicious spices for a unique and flavorful pickle."
    
      },
      {
        productId:81,
        productName:"muttonkeemapickles",
        productPrice:"550",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/products/MuttonKeemaPickle_250x.jpg?v=1627599517",
        productDescription:"A delicious spices for a unique and flavorful pickle."
    
      },
      {
        productId:82,
        productName:"boneless-fish-pickles",
        productPrice:"350",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/files/IMG_1002-removebg-preview_14bcd749-08a3-4545-b914-3e665a414729_250x.png?v=1686864926",
        productDescription:"A delicious spices for a unique and flavorful pickle."
    
      },
      {
        productId:83,
        productName:"mixedvegpickles",
        productPrice:"150",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/files/MixedVegPickle_c3834bdf-8069-48c9-a764-71c9e1ca0465_250x.png?v=1721892509",
        productDescription:"A delicious spices for a unique and flavorful pickle."
    
      },
      {
        productId:84,
        productName:"cashwe pickles",
        productPrice:"150",
        productType:"pickles",
        productImage:"https://www.godavarivantillu.com/cdn/shop/files/1000129895-removebg-preview_250x.png?v=1721182788",
        productDescription:"A delicious spices for a unique and flavorful pickle."
    
      },
      //famousItems
      {
        productId:85,
        productName:"Rajahmundry Rose Milk",
        productPrice:"70",
        productType:"famousitems",
        productImage:"https://vivahabhojanambu.co.in/wp-content/uploads/2020/12/Rajahmundry-Rose-Milk.png",
        productDescription:"A refreshing and aromatic drink with a rich, creamy texture and a delightful rose flavor."
    
      },
      {
        productId:86,
        productName:"tapeswaram kaja",
        productPrice:"120",
        productType:"famousitems",
        productImage:"https://www.virifarms.com/cdn/shop/files/TapeswaramKaja.png?v=1719607529",
        productDescription:" A crispy, golden-brown sweet made with flour and milk, soaked in rich sugar syrup."
    
      },
      
      {
        productId:87,
        productName:"kakinada  gotam kaja",
        productPrice:"140",
        productType:"famousitems",
        productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZKBFQZ15fvlRD0Rj8BehJeuFzI6jCrWK6w&s",
        productDescription:"Kakinada Gottam Kaja is a crispy, juicy sweet made from flour and milk, offering a delightful taste."
    
      },
      
      {
        productId:88,
        productName:"annavaram  prasadam ",
        productPrice:"100",
        productType:"famousitems",
        productImage:"https://i.pinimg.com/736x/52/58/e5/5258e5aea308dcc090315720bd4eb7c9.jpg",
        productDescription:"Annama prasadam is a sacred and delicious sweet offering from the famous Annama Temple."
    
      },
      
      {
        productId:89,
        productName:"guntur malpuri",
        productPrice:"150",
        productType:"famousitems",
        productImage:"https://estaasweets.com/cdn/shop/products/MalaiPuri.jpg?v=1667490659&width=1946",
        productDescription:"Guntur Malpuri is a crispy, golden-brown sweet delicacy with a rich and syrupy flavor."
      },
      
      {
        productId:90,
        productName:"atreyapuram putharekulu",
        productPrice:"200",
        productType:"famousitems",
        productImage:"https://m.media-amazon.com/images/I/71NlMVLUDxL._AC_UF1000,1000_QL80_.jpg",
        productDescription:"Atreyapuram Putharekulu is a traditional Andhra sweet made with thin rice sheets, sugar, and ghee, offering a delicate and rich flavor."
    
      },
      
      {
        productId:91,
        productName:"palasa cashew",
        productPrice:"800",
        productType:"famousitems",
        productImage:"https://cdn.dotpe.in/longtail/store-items/5739802/T6gciU96.jpeg",
        productDescription:"Premium quality cashews known for their rich flavor and crunchy texture."
    
      },
      
      {
        productId:92,
        productName:"batala badam milk",
        productPrice:"120",
        productType:"famousitems",
        productImage:"https://media.istockphoto.com/id/1404811015/photo/badam-milk-with-pistachios.jpg?s=612x612&w=0&k=20&c=RWMoFcDE6TFYgWGwBpZIhLWXNJruzkSMVKrmOmxjcIg=",
        productDescription:"A rich and creamy milk drink made with almonds, offering a delightful and nutritious flavor."
    
      },
      
      {
        productId:94,
        productName:"poornam boorelu",
        productPrice:"140",
        productType:"famousitems",
        productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJHIevkqs1E0CXnr5xLD2FXnDzCeK_LBdfw&s",
        productDescription:"A traditional South Indian sweet made with stuffed lentil dough, deep-fried to perfection."
    
      },
      {
        productId:95,
        productName:"Gavvalu",
        productPrice:"120",
        productType:"famousitems",
        productImage:"https://m.media-amazon.com/images/I/81L-AUzDpCL.jpg",
        productDescription:"A delicious, crispy, and savory snack made from ground lentils and spices.."
    
      },
      {
        productId:96,
        productName:"Palakova",
        productPrice:"220",
        productType:"famousitems",
        productImage:"https://5.imimg.com/data5/SELLER/Default/2022/8/GT/AU/HX/158158845/palakovalu-500x500.jpg",
        productDescription:"Palakova is a rich and creamy South Indian sweet made from condensed milk and sugar.."
    
      },
      {
        productId:97,
        productName:"mamidi thandr",
        productPrice:"210",
        productType:"famousitems",
        productImage:"https://rajupickles.com/cdn/shop/products/Mamidthandra_grande.jpg?v=1619940027",
        productDescription:"Mamidi Thandri is a tangy and sweet mango pickle made from raw mangoes and traditional spices."
    
      }
  ];
  addNewItem(newone:product){
    this.products.push(newone);
  }
  getAllItems(){
    return of (this.products);
  }
  getAllHotChips(){
    return of (this.products.filter((e)=>e.productType=='hot chips'))
  }
  getAllSweets(){
    return of (this.products.filter((e)=>e.productType=='sweets'))
  }
  getAllvadiyalu(){
    return of (this.products .filter((e)=>e.productType=="vadiyalu"));
  }
  getAllpodulu(){
    return of (this.products .filter((e)=>e.productType=="podulu"));
  }
  getAllpickles(){
    return of (this.products .filter((e)=>e.productType=="pickles"));
  }
  getAllfamousitems(){
    return of (this.products .filter((e)=>e.productType=="famousitems"));
   }
  getItemById(hid:any){
    return (this.products.find((e)=>e.productId==hid));
  }
  deleteProduct(vid:any){
    const index=this.products.findIndex((e)=>e.productId==vid);
    if(index!=-1){
      this.products.splice(index,1);
      return "deleted successfully";
    }
    else{
      return "product not found";
    }
  }
  updateProduct(vid:any){
    const index=this.products.findIndex((e)=>e.productId==vid);
    this.products.splice(index,1);
    return "updated successfully";
  }
  
}
