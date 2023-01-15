import colorcard1 from '../../assets/images/cards/color1.png';
import colorcard2 from '../../assets/images/cards/color2.png';
import colorcard3 from '../../assets/images/cards/color3.png';
import colorcard4 from '../../assets/images/cards/color4.png';
import colorcard5 from '../../assets/images/cards/color5.png';
import colorcard6 from '../../assets/images/cards/color6.png';
import colorpreview1 from '../../assets/images/preview/Character1.png';
import colorpreview2 from '../../assets/images/preview/Character2.png';
import colorpreview3 from '../../assets/images/preview/Character3.png';
import colorpreview4 from '../../assets/images/preview/Character4.png';
import colorpreview5 from '../../assets/images/preview/Character5.png';
import colorpreview6 from '../../assets/images/preview/Character6.png';

import wingcard1 from '../../assets/images/cards/wing1.png';
import wingcard2 from '../../assets/images/cards/wing2.png';
import wingpreview1 from '../../assets/images/preview/Character8.png';
import wingpreview2 from '../../assets/images/preview/Character9.png';

import mask1 from '../../assets/images/cards/mask1.png';
import maskpreview1 from '../../assets/images/preview/Character10.png';

import glasscard1 from '../../assets/images/cards/glass1.png';
import glasspreview1 from '../../assets/images/preview/Character7.png';

///////////////////////////

import defaultcard from '../../assets/images/cards/none.png';

import cha1 from '../../assets/images/cards/robotman.png';
import cha2 from '../../assets/images/cards/Cyberpunk Azura Robot 1.png';
import cha3 from '../../assets/images/cards/Mecha Robot 2.png';
import cha4 from '../../assets/images/cards/dinosaur.png';
import cha5 from '../../assets/images/cards/human1.png';
import cha6 from '../../assets/images/cards/human2.png';
import cha7 from '../../assets/images/cards/hoodie_robot.png';
import Cyperpunk_zaura from '../../assets/models/templates/Humanoid_Mecha/Cyberpunk_azura';
import Expedition_mecha from '../../assets/models/templates/Humanoid_Mecha/Expedition_mecha';
import Robot_man from '../../assets/models/templates/Humanoid_Mecha/Robot_man';
import Robot_Dinosaur from '../../assets/models/templates/Humanoid_Mecha/Robot_Dinosaur';
import Human1 from '../../assets/models/templates/Humanoid_Mecha/Human1';
import Human2 from '../../assets/models/templates/Humanoid_Mecha/Human2';
import Hoodie_robot from '../../assets/models/templates/Humanoid_Mecha/Hoodie_robot';

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
import futuristic_car from '../../assets/images/cards/futuristic_car.png';
import hyper_concept_car from '../../assets/images/cards/hyper_concept_car.png';
import modern_supercar from '../../assets/images/cards/modern_supercar.png';
import selva_hypercar from '../../assets/images/cards/selva_hypercar.png';
import supercar from '../../assets/images/cards/supercar.png';
import Door4 from '../../assets/models/templates/Cars/Door4';
import Futuristic_car from '../../assets/models/templates/Cars/Futuristic_car';
import Hyper_concept_car from '../../assets/models/templates/Cars/Hyper_concept_car';
import Modern_supercar from '../../assets/models/templates/Cars/Modern_supercar';
import Selva_hypercar from '../../assets/models/templates/Cars/Selva_hypercar';
import Supercar from '../../assets/models/templates/Cars/Supercar';

const charactorList=[
    {
        team:'Reitio team',
        name:'Cyperpunk zaura',
        img:cha2,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Cyperpunk_zaura position={[0,-1,0]} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Mega robot',
        img:cha3,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Expedition_mecha scale={0.01} position={[0,-1,0]} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Robot man',
        img:cha1,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Robot_man position={[0,-1,0]} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Robot Dinosaur',
        img:cha4,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Robot_Dinosaur position={[0,-1,0]} scale={0.7} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Human 1',
        img:cha5,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Human1 position={[0,-1,0]} scale={0.07} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Human 2',
        img:cha6,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Human2 position={[0,-1,0]} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Robot',
        img:cha7,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Hoodie_robot position={[0,-1,0]} scale={0.01} {...props}/>,
    },
    
    
];

const animalList=[
    {
        team:'Reitio team',
        name:'Cat',
        img:cat1,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Cat1 position={[0,-1,0]} scale={0.03} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Dog',
        img:dog1,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Dog1 position={[0,-0.7,0]} scale={0.3} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Horse',
        img:horse,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Horse position={[0,-1,0]} scale={0.01} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Kitten',
        img:kitten,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Kitten position={[0,-1,0]} scale={0.1} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Rabbit',
        img:rabbit,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Rabbit position={[0,-1,0]} scale={15} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Robot dog',
        img:robotdog,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><RobotDog position={[0,-0.7,0]} scale={0.8} {...props}/>,
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
    },
    {
        team:'Reitio team',
        name:'Futuristic car',
        img:futuristic_car,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Futuristic_car position={[0,-1,0]} scale={0.2} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Hyper concept car',
        img:hyper_concept_car,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Hyper_concept_car position={[0,-1,0]} scale={0.1} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Modern super car',
        img:modern_supercar,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Modern_supercar position={[0,-1,0]} scale={0.4} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Selva hyper car',
        img:selva_hypercar,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Selva_hypercar position={[0,-1,0]} scale={0.4} {...props}/>,
    },
    {
        team:'Reitio team',
        name:'Super car',
        img:supercar,
        badge:'',
        btnText:'0.44 REIGN',
        Preview:(props)=><Supercar position={[0,-1,0]} scale={0.07} {...props}/>,
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
        name:'Red skin color',
        img:colorcard1,
        badge:'',
        btnText:'Default',
        preview:colorpreview1
    },
    {
        team:'Reitio team',
        name:'Orange skin color',
        img:colorcard2,
        badge:'',
        btnText:'0.44 REIGN',
        preview:colorpreview2
    },
    {
        team:'Reitio team',
        name:'Yellow skin color',
        img:colorcard3,
        badge:'Premium',
        btnText:'0.44 REIGN',
        preview:colorpreview3
    },
    {
        team:'Reitio team',
        name:'Dark green skin...',
        img:colorcard4,
        badge:'',
        btnText:'0.44 REIGN',
        preview:colorpreview4
    },
    {
        team:'Reitio team',
        name:'Green skin color',
        img:colorcard5,
        badge:'',
        btnText:'0.44 REIGN',
        preview:colorpreview5
    },
    {
        team:'Reitio team',
        name:'Light green ski...',
        img:colorcard6,
        badge:'',
        btnText:'0.44 REIGN',
        preview:colorpreview6
    },
    
];
const glasses=[
    {
        team:'Reitio team',
        name:'Without glasses',
        img:defaultcard,
        badge:'',
        btnText:'Default',
        preview:colorpreview1
    },
    {
        team:'Reitio team',
        name:'Scan glasses',
        img:glasscard1,
        badge:'',
        btnText:'0.44 REIGN',
        preview:glasspreview1
    },
];
const wings=[
    {
        team:'Reitio team',
        name:'Without wings',
        img:defaultcard,
        badge:'',
        btnText:'Default',
        preview:glasspreview1
    },
    {
        team:'Reitio team',
        name:'Space wings',
        img:wingcard1,
        badge:'',
        btnText:'0.44 REIGN',
        preview:wingpreview2
    },
    {
        team:'Reitio team',
        name:'Butterfly wings',
        img:wingcard2,
        badge:'Premium',
        btnText:'0.44 REIGN',
        preview:wingpreview1
    },
];
const masks=[
    {
        team:'Reitio team',
        name:'Without mask',
        img:defaultcard,
        badge:'',
        btnText:'Default',
        preview:wingpreview1
    },
    {
        team:'Reitio team',
        name:'Gas mask',
        img:mask1,
        badge:'',
        btnText:'0.44 REIGN',
        preview:maskpreview1
    },
];
const hair=[];

const customize={
    colors:colors,
    glasses:glasses,
    wings:wings,
    masks:masks,
    hair:hair
};
const models={
    templates:templates,
    customize:customize
}

export default models;