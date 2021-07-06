import Clothes from '../models/Clothes.js';
import ListDataClothes from '../models/ListClothes.js';
import {DataTopClothes} from '../models/DataTopClothes.js';
import {DataBotClothes} from '../models/DataBotClothes.js';
import {DataShoes} from '../models/DataShoes.js';
import {DataHandBags} from '../models/DataHandBags.js';
import {DataNeckLaces} from '../models/DataNeckLaces.js';
import {DataHairStyles} from '../models/DataHairStyles.js';
import {DataBackGrounds} from '../models/DataBackGrounds.js';






const listClothes = new ListDataClothes();

const getEle = id => document.getElementById(id);

const navs = document.querySelectorAll('.nav .nav-item');
navs.forEach(nav => {
    nav.onclick = function () {
        document.querySelector('.nav-link.active').classList.remove('active'); 
        this.firstChild.classList.add('active')   
        let select = '';
        if (this.outerText === 'Áo') {                          
                let select = 'bikinitop'; 
                render(DataTopClothes, select); 
            } else if (this.outerText === "Quần") {
                let select = 'bikinibottom';               
                render(DataBotClothes, select); 
            } else if (this.outerText === "Giày dép") {
                let select = 'feet';               
                render(DataShoes,select); 
            } else if (this.outerText === "Túi xách") {
                let select = 'handbag';               
                render(DataHandBags, select); 
            } else if (this.outerText === "Dây chuyền") {
                let select = 'necklace';               
                render(DataNeckLaces, select); 
            } else if (this.outerText === "Kiểu tóc") {
                let select = 'hairstyle';               
                render(DataHairStyles, select); 
            } else if (this.outerText === "Nền") {
                let select = 'background';               
                render(DataBackGrounds, select); 
            }           
    }       
   
})


function wearClothes (img, select) {
    if (select !== "background") {
        getEle(select).style.background = 'none';
        getEle(select).innerHTML = `
                                <img style = "width : 100%" src="../assets/images/${img}" />
                            `
    } else {
        getEle(select).style.backgroundImage = `url(../assets/images/${img}) `;

    }
    
    
}


window.wearClothes = wearClothes;


const render = (list, select) => {   
    let content = '';
    listClothes.listDataClothes =[]; 
    list.forEach (item => {      
        let clothes = new Clothes(...Object.values(item)); 
        listClothes.addClothes(clothes)        
    })
    
    listClothes.listDataClothes.forEach ( (data) => {
        const {clothesName, img, imgShow} = data;        
        content += `
                    
                    <div class="tab-item col-3">
                        <div class="item-content" style = "width: 70%; text-align: center;padding: 20px 20px" >
                            <img src="../assets/images/${imgShow}" style="width:100%;"  alt="">
                            <p style="text-align: center"> ${clothesName}</p>
                            <button onclick = "wearClothes('${img}','${select}')" 
                            class="btn btn-success"  style="width: 100%" > Thử đồ 
                            </button>                    
                         </div>
                    </div>              
                    
                    `               
    }) 


    getEle('tab-content').innerHTML = content;
    
}

document.querySelector('.nav-link.active').click(); 



