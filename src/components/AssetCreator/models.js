import colorcard1 from '../../assets/images/cards/color1.png';
import colorcard2 from '../../assets/images/cards/color2.png';
import colorcard3 from '../../assets/images/cards/color3.png';
import colorcard4 from '../../assets/images/cards/color4.png';
import colorcard5 from '../../assets/images/cards/color5.png';
import colorcard6 from '../../assets/images/cards/color6.png';


import wingcard1 from '../../assets/images/cards/wing1.png';
import wingcard2 from '../../assets/images/cards/wing2.png';
import wingcard3 from '../../assets/images/cards/wing3.png';
import wingcard4 from '../../assets/images/cards/wing4.png';


import mask1 from '../../assets/images/cards/mask1.png';


import glasscard1 from '../../assets/images/cards/glass1.png';
import glasscard2 from '../../assets/images/cards/glass2.png';
import glasscard3 from '../../assets/images/cards/glass3.png';
import glasscard4 from '../../assets/images/cards/glass4.png';
import glasscard5 from '../../assets/images/cards/glass5.png';

import earcard1 from '../../assets/images/cards/ear1.png';
import earcard2 from '../../assets/images/cards/ear2.png';
import earcard3 from '../../assets/images/cards/ear3.png';
import earcard4 from '../../assets/images/cards/ear4.png';

///////////////////////////

import defaultcard from '../../assets/images/cards/none.png';

import cha1 from '../../assets/images/cards/robotman.png';
import cha2 from '../../assets/images/cards/Cyberpunk Azura Robot 1.png';
import cha3 from '../../assets/images/cards/Mecha Robot 2.png';
import cha4 from '../../assets/images/cards/dinosaur.png';
import cha5 from '../../assets/images/cards/human1.png';
import cha6 from '../../assets/images/cards/human2.png';
import cha7 from '../../assets/images/cards/hoodie_robot.png';
import Cyperpunkzaura from '../../assets/models/templates/Humanoid_Mecha/Cyberpunk_azura';
import Expeditionmecha from '../../assets/models/templates/Humanoid_Mecha/Expedition_mecha';
import Robotman from '../../assets/models/templates/Humanoid_Mecha/Robot_man';
import RobotDinosaur from '../../assets/models/templates/Humanoid_Mecha/Robot_Dinosaur';
// import Human1 from '../../assets/models/templates/Humanoid_Mecha/Human1';
// import Human2 from '../../assets/models/templates/Humanoid_Mecha/Human2';
import Human1 from '../../assets/models/customize/Human1';
import Human2 from '../../assets/models/customize/Human2';
import Hoodierobot from '../../assets/models/templates/Humanoid_Mecha/Hoodie_robot';

import cat1 from '../../assets/images/cards/cat1.png';
import dog1 from '../../assets/images/cards/dog1.png';
import horse from '../../assets/images/cards/horse.png';
import kitten from '../../assets/images/cards/kitten.png';
import rabbit from '../../assets/images/cards/rabbit.png';
import robotdog from '../../assets/images/cards/robotdog.png';
import Cat1 from '../../assets/models/templates/Animals/Cat1';
import Dog1 from '../../assets/models/templates/Animals/Dog1';
import Horse from '../../assets/models/templates/Animals/Horse';
import Kitten from '../../assets/models/templates/Animals/Kitten';
import Rabbit from '../../assets/models/templates/Animals/Rabbit';
import RobotDog from '../../assets/models/templates/Animals/Robotdog';

import door4 from '../../assets/images/cards/4doorv8.png';
import futuristiccar from '../../assets/images/cards/futuristic_car.png';
import hyperconceptcar from '../../assets/images/cards/hyper_concept_car.png';
import modernsupercar from '../../assets/images/cards/modern_supercar.png';
import selvahypercar from '../../assets/images/cards/selva_hypercar.png';
import supercar from '../../assets/images/cards/supercar.png';
// import Door4 from '../../assets/models/templates/Cars/Door4';
import Door4 from '../../assets/models/customize/Door4';
import Futuristiccar from '../../assets/models/templates/Cars/Futuristic_car';
import Hyperconceptcar from '../../assets/models/templates/Cars/Hyper_concept_car';
import Modernsupercar from '../../assets/models/templates/Cars/Modern_supercar';
import Selvahypercar from '../../assets/models/templates/Cars/Selva_hypercar';
import Supercar from '../../assets/models/templates/Cars/Supercar';

const charactorList=[
    {
        team:'Reitio team',
        name:'Cyperpunk zaura',
        img:cha2,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Cyperpunkzaura position={[0,-1,0]} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Mega robot',
        img:cha3,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Expeditionmecha scale={0.01} position={[0,-1,0]} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Robot man',
        img:cha1,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Robotman position={[0,-1,0]} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Robot Dinosaur',
        img:cha4,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><RobotDinosaur position={[0,-1,0]} scale={0.7} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Human 1',
        img:cha5,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Human1 position={[0,-1,0]} scale={0.07} {...props}/>,
        iscustomize:false,
        customizable:true
    },
    {
        team:'Reitio team',
        name:'Human 2',
        img:cha6,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Human2 position={[0,-1,0]} {...props}/>,
        iscustomize:false,
        customizable:true
    },
    // {
    //     team:'Reitio team',
    //     name:'Robot',
    //     img:cha7,
    //     badge:'',
    //     btnText:'0.44 REIGN',
    //     Preview:(props)=><Hoodierobot position={[0,-1,0]} scale={0.01} {...props}/>,
    // },
    
    
];

const animalList=[
    {
        team:'Reitio team',
        name:'Cat',
        img:cat1,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Cat1 position={[0,-1,0]} scale={0.03} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Dog',
        img:dog1,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Dog1 position={[0,-0.7,0]} scale={0.3} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Horse',
        img:horse,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Horse position={[0,-1,0]} scale={0.01} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Kitten',
        img:kitten,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Kitten position={[0,-1,0]} scale={0.1} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Rabbit',
        img:rabbit,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Rabbit position={[0,-1,0]} scale={15} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Robot dog',
        img:robotdog,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><RobotDog position={[0,-0.7,0]} scale={0.8} {...props}/>,
        iscustomize:false,
        customizable:false
    },
];

const carList=[
    {
        team:'Reitio team',
        name:'Door 4',
        img:door4,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Door4 position={[0,-1,0]} scale={0.004} {...props}/>,
        iscustomize:false,
        customizable:true
    },
    {
        team:'Reitio team',
        name:'Futuristic car',
        img:futuristiccar,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Futuristiccar position={[0,-1,0]} scale={0.2} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Hyper concept car',
        img:hyperconceptcar,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Hyperconceptcar position={[0,-1,0]} scale={0.1} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Modern super car',
        img:modernsupercar,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Modernsupercar position={[0,-1,0]} scale={0.4} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Selva hyper car',
        img:selvahypercar,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Selvahypercar position={[0,-1,0]} scale={0.4} {...props}/>,
        iscustomize:false,
        customizable:false
    },
    {
        team:'Reitio team',
        name:'Super car',
        img:supercar,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Supercar position={[0,-1,0]} scale={0.07} {...props}/>,
        iscustomize:false,
        customizable:false
    },
];

const templates={
    charactors:charactorList,
    animals:animalList,
    cars:carList
};


/**
 * customize
 */
const colors=[
    {
        team:'Reitio team',
        name:'No color',
        img:defaultcard,
        badge:'',
        btnText:'Default',
        iscustomize:true,
        category:'color',
        val:''
    },
    {
        team:'Reitio team',
        name:'Red skin color',
        img:colorcard1,
        badge:'',
        btnText:'Default',
        iscustomize:true,
        category:'color',
        val:'#eb5757'
    },
    {
        team:'Reitio team',
        name:'Orange skin color',
        img:colorcard2,
        badge:'',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'color',
        val:'#f2994a'
    },
    {
        team:'Reitio team',
        name:'Yellow skin color',
        img:colorcard3,
        badge:'Premium',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'color',
        val:'#f2994a'
    },
    {
        team:'Reitio team',
        name:'Dark green skin...',
        img:colorcard4,
        badge:'',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'color',
        val:'#219653'
    },
    {
        team:'Reitio team',
        name:'Green skin color',
        img:colorcard5,
        badge:'',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'color',
        val:'#27ae60'
    },
    {
        team:'Reitio team',
        name:'Light green ski...',
        img:colorcard6,
        badge:'',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'color',
        val:'#6fcf97'
    },
    
];
const glasses=[
    {
        team:'Reitio team',
        name:'Without glasses',
        img:defaultcard,
        badge:'',
        btnText:'Default',
        iscustomize:true,
        category:'glass',
        val:0
    },
    {
        team:'Reitio team',
        name:'Scan glasses',
        img:glasscard2,
        badge:'',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'glass',
        val:1
    },
    {
        team:'Reitio team',
        name:'Scan glasses',
        img:glasscard3,
        badge:'',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'glass',
        val:2
    },
    {
        team:'Reitio team',
        name:'Scan glasses',
        img:glasscard4,
        badge:'',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'glass',
        val:3
    },
    {
        team:'Reitio team',
        name:'Scan glasses',
        img:glasscard5,
        badge:'',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'glass',
        val:4
    },
];
const wings=[
    {
        team:'Reitio team',
        name:'Without wings',
        img:defaultcard,
        badge:'',
        btnText:'Default',
        iscustomize:true,
        category:'wing',
        val:0
    },
    {
        team:'Reitio team',
        name:'Space wings',
        img:wingcard1,
        badge:'',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'wing',
        val:1
    },
    {
        team:'Reitio team',
        name:'Butterfly wings',
        img:wingcard2,
        badge:'Premium',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'wing',
        val:2
    },
    {
        team:'Reitio team',
        name:'Butterfly wings',
        img:wingcard3,
        badge:'Premium',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'wing',
        val:3
    },
    {
        team:'Reitio team',
        name:'Butterfly wings',
        img:wingcard4,
        badge:'Premium',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'wing',
        val:4
    },
];
const headphone=[
    {
        team:'Reitio team',
        name:'Without glasses',
        img:defaultcard,
        badge:'',
        btnText:'Default',
        iscustomize:true,
        category:'ear',
        val:0
    },
    {
        team:'Reitio team',
        name:'Butterfly wings',
        img:earcard1,
        badge:'Premium',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'ear',
        val:1
    },
    {
        team:'Reitio team',
        name:'Butterfly wings',
        img:earcard2,
        badge:'Premium',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'ear',
        val:2
    },
    {
        team:'Reitio team',
        name:'Butterfly wings',
        img:earcard3,
        badge:'Premium',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'ear',
        val:3
    },
    {
        team:'Reitio team',
        name:'Butterfly wings',
        img:earcard4,
        badge:'Premium',
        btnText:'0.44 REIGN',
        iscustomize:true,
        category:'ear',
        val:4
    },
];
const masks=[
    {
        team:'Reitio team',
        name:'Without mask',
        img:defaultcard,
        badge:'',
        btnText:'Default',
    },
    {
        team:'Reitio team',
        name:'Gas mask',
        img:mask1,
        badge:'',
        btnText:'0.44 REIGN',
    },
];
const hair=[];

const customize={
    colors:colors,
    glasses:glasses,
    wings:wings,
    headphone:headphone,
    masks:masks,
    hair:hair
};
const models={
    templates:templates,
    customize:customize
}

export default models;