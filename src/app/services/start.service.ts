import { Injectable } from '@angular/core';
import { product } from '../components/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartService {
  samples:product[]=[
    //hot chips
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
    //sweets
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
    //vadiyalu
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
    //podulu
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
    //pickels
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
  ]
  getAllSamples(){
    return of (this.samples);
  }
  constructor() { }
}
