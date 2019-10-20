function setup() {
  createCanvas(1024,768);
  background(24,17,0);
}

function draw() {
fill(208,145,94);
ellipse(11,349,70,70);  
  
/*rectangulos abajo de forma rara*/
beginShape(QUAD_STRIP);
fill(99,154,123);//green
vertex(267,309);
vertex(319,307);
vertex(266,328);
vertex(318,325);
fill(115,172,163);//celeste
vertex(262,346);
vertex(318,344);
fill(84,169,148);//celeste turquesa
vertex(263,361);
vertex(318,358);
fill(108,140,125);//gris celeste
vertex(262,367);
vertex(319,366);
fill(83,103,75);//gris verde
vertex(259,382);
vertex(320,381);
endShape();

beginShape(QUAD_STRIP);
fill(77,99,76);
vertex(318,273);
vertex(348,271);
vertex(320,286);
vertex(348,284);
fill(72,91,71);
vertex(320,293);
vertex(346,293);
fill(96,114,102);
vertex(320,304);
vertex(346,304);
endShape();

fill(150,188,189);
triangle(236,351,263,351,258,389);

/**conexion de jardin-avellana*/
/*arriba del arco*/
//formas irregulares varias*/
fill(79,117,96);
beginShape();
vertex(319,361);
vertex(335,362);
vertex(333,387);
vertex(325,401);
vertex(316,403);
endShape();

fill(103,115,93);
beginShape();
vertex(321,348);
vertex(365,350);
vertex(365,362);
vertex(335,362);
vertex(318,361);
endShape();

fill(105,129,113);
beginShape();
vertex(334,362);
vertex(345,354);
vertex(344,363);
vertex(343,402);
vertex(325,402);
vertex(333,388);
endShape();


/**Triangulos */
fill(82,94,72);triangle(375,346,408,286,430,343);
fill(63,110,90);triangle(389,344,418,285,447,335);
fill(103,127,129);triangle(403,341,437,283,468,326);
fill(69,160,151);triangle(422,336,445,292,468,326);



//rectangulos izq techo casita
//right
fill(138,187,184); //light blue
beginShape();
vertex(413,443);
vertex(407,510);
vertex(410,562);
vertex(375,563);
vertex(371,445);
endShape();

fill(158,161,154); //gray pink
beginShape();
vertex(349,446);
vertex(371,445);
vertex(375,563);
vertex(375,569);
vertex(347,568);
endShape();  

fill(94,141,123); //talo
beginShape();
vertex(334,447);
vertex(349,446);
vertex(347,568);
vertex(337,566);
endShape();  
fill(116,122,110); //gray
beginShape();
vertex(323,448);
vertex(334,447);
vertex(337,566);
vertex(325,549);
endShape();  
fill(97,120,104); //dark greenblue
beginShape();
vertex(301,447);
vertex(323,448);
vertex(325,553);
vertex(302,516);
endShape();
//left
fill(90,93,72); //dark brown
beginShape();
vertex(286,450);
vertex(301,447);
vertex(302,515);
vertex(285,531);
endShape();  
/**/


//3/3
fill(132,136,135); //gray violet
triangle(248,572,301,514,327,569);
//2/3
fill(130,170,159); //gray lightblue
triangle(262,574,307,524,331,568);
//1/3
fill(149,175,172);
triangle(281,573,314,536,342,568);

fill(150,170,158);//light gray 
triangle(262,504,278,572,166,555);

fill(118,168,143);//turquesa gray 
triangle(219,570,247,516,270,571);


/*techo de edificio*/  
fill(140,143,132); //gris
beginShape();
vertex(657,0);
vertex(736,1);
vertex(722,21);
vertex(703,39);
vertex(693,51);
vertex(682,57);
endShape();

/*al lado izquierdo del techo*/
fill(102,95,79); //brown
beginShape();
vertex(569,0);
vertex(577,0);
vertex(577,129);
vertex(565,121);
endShape();

fill(68,87,67); //dark green
beginShape();
vertex(557,0);
vertex(570,0);
vertex(565,121);
vertex(548,120);
endShape();

/* arriba del arco, entre el edificio y la forma rara */
//1/4 de derecha a izq
fill(120,157,149); //dark lightblue
beginShape();
vertex(490,1); //comparte con 2/4
vertex(526,1);
vertex(522,80);
vertex(489,80); //comparte con 2/4
endShape();
//2/4 de derecha a izq
fill(124,153,122); //gray green
beginShape();
vertex(470,1); //comparte con 3/4
vertex(490,1); //comparte con 1/4
vertex(489,80); //comparte con 1/4
vertex(465,93); //comparte con 3/4
endShape();
//3/4 de derecha a izq
fill(63,152,124); //turquesa
beginShape();
vertex(457,0); //comparte con 4/4
vertex(470,1); //comparte con 2/4
vertex(465,93); //comparte con 2/4
vertex(456,105); //comparte con 4/4
endShape();
//4/4 de derecha a izq
fill(87,91,76); //dark gray
beginShape();
vertex(443,0);
vertex(457,0); //comparte con 3/4
vertex(456,105); //comparte con 3/4
vertex(442,129);
endShape();
/*triangulos flotando de arriba a la derecha*/
//triangulo 1/6 3er
fill(56,79,61); //verde oscuro
beginShape();
vertex(800,45);
vertex(817,29);
vertex(819,35);
vertex(821,33);
vertex(824,41);
vertex(800,82);
endShape();

//triangulo 1/6 2do
fill(84,135,120); //turquesa oscura
beginShape();
vertex(799,77);
vertex(824,40);
vertex(859,121);
vertex(801,123);
endShape();

//triangulo 1/6
fill(87,168,149); //turquesa
beginShape();
vertex(800,108);
vertex(829,44);
vertex(852,95);//comparte con 2/6
vertex(826,168);
vertex(800,169);
endShape();

//triangulo 2/6 4to
fill(61,96,72); //verde oscuro
beginShape();
vertex(824,44);
vertex(845,1);
vertex(867,1);
vertex(837,64);
endShape();

//triangulo 2/6 3ero
fill(81,124,104); //gris verdoso
beginShape();
vertex(836,58);
vertex(862,0);
vertex(874,0);
vertex(844,79);
endShape();

//triangulo 2/6 2do
fill(59,169,140); //turquesa
beginShape();
vertex(814,168);
vertex(871,1);
vertex(888,1);
vertex(973,168);
endShape();

//triangulo 2/6
fill(125,138,128); //violeta oscuro
triangle(826,168,875,13,934,166);

//triangulo 3/6 4to
fill(61,96,72); //verde oscuro
beginShape();
vertex(891,4);
vertex(896,1);
vertex(917,1);
vertex(900,24);
endShape();

//triangulo 2/6 3ero
fill(81,124,104); //gris verdoso
beginShape();
vertex(899,23);
vertex(913,1);
vertex(925,1);
vertex(908,46);
endShape();

//triangulo 3/6 4too
fill(100,119,100); //gris oscuro verdoso
beginShape();
vertex(934,11);
vertex(943,0);
vertex(960,0);
vertex(941,34);
endShape();
//triangulo 3/6 3ero
fill(81,124,104); //gris verdoso
beginShape();
vertex(941,34);
vertex(958,1);
vertex(966,1);
vertex(946,53);
endShape();
//triangulo 3/6 2do
fill(109,142,133); //celeste oscuro
beginShape();
vertex(866,168);
vertex(923,0);
vertex(931,1);
vertex(981,168);
endShape();
//triangulo 3/6
fill(118,175,160); //celeste
triangle(866,168,917,13,967,166);

//triangulo 4/6 2do
fill(109,142,133); //celeste oscuro
beginShape();
vertex(966,8);
vertex(973,1);
vertex(991,1);
vertex(973,48);
endShape();

//triangulo 4/6 2do
fill(134,176,163); //celeste
triangle(905,167,965,1,991,169);

//triangulo 4/6
fill(159,163,148); //gris rosa
triangle(905,167,953,33,995,169);

//triangulo 5/6 2ndo
fill(132,141,146); //oscuro
beginShape();
vertex(987,10);
vertex(989,1);
vertex(999,1);
vertex(1022,108);
vertex(1023,172);
vertex(1011,168);
endShape();

//triangulo 5/6
fill(231,220,200); //white
triangle(933,167,987,10,1015,169);

//triangulo 6/6 2ndo
fill(90,108,84); //verde re oscuro
beginShape();
vertex(1002,18);
vertex(1015,0);
vertex(1023,1);
vertex(1024,17)
vertex(1007,41);
endShape();

//triangulo 6/6
fill(93,154,123); //verde oscuro
beginShape();
vertex(1006,37);
vertex(1023,15);
vertex(1023,108);
endShape();

//rectangulo
fill(132,173,165); //celeste
beginShape();
vertex(983,129);
vertex(1007,127);
vertex(1016,168);
vertex(986,169);
vertex(980,149);
endShape();



/*terminan triangulos flotando de arriba a la derecha*/

/*empiezan edificios entre casita y forma rara*/
//techos entre rectangulos de arriba y de abajo


//rectangulos verticales abajo de izq a der

//1/7 
fill(79,99,74); //gris verdoso
beginShape();
vertex(263,572);
vertex(273,572);//comparte con 2/7
vertex(270,707);//comparte con 2/7
vertex(259,681);
endShape();

//2/7 
fill(83,147,110); //verde fuerte
beginShape();
vertex(273,572);//comparte con 1/7 y triangulo verde
vertex(286,573);//comparte con 3/7 y triangulo chico
vertex(297,768);//comparte con 3/7
vertex(270,707);//comparte con 1/7
endShape();

//3/7 arriba
fill(91,139,117); //verde azulado
beginShape();
vertex(286,573);//comparte con 3/7 y triangulo chico
vertex(300,571);//comparte con 4/7 
vertex(304,654);//comparte con 4/7 y abajo
vertex(287,659);//comparte con 3/7 y abajo
endShape();
    
//3/7 abajo
fill(84,162,149); //verde celeste
beginShape();
vertex(287,659);//comparte con 3/7 y arriba
vertex(304,654);//comparte con 4/7 y arriba
vertex(310,768);//comparte con 4/7
vertex(297,768);//comparte con 3/7
endShape();
    
//4/7
fill(114,176,165); //verde celeste claro
beginShape();
vertex(300,571);//comparte con 3/7
vertex(318,570);//comparte con 5/7 arriba
vertex(321,624);//comparte con 5/7 arriba y abajo
vertex(330,767);//comparte con 5/7 abajo
vertex(310,768);//comparte con 3/7
vertex(304,654);//comparte con 3/7
endShape();
    
//5/7 arriba
fill(69,63,51); //marron oscuro
beginShape();
vertex(318,570);//comparte con 4/7
vertex(342,568);//comparte con 6/7 y triangulos
vertex(346,623); // 6/7 y 5/7 abajo
vertex(321,624);//comparte con 4/7
endShape();
    
//5/7 abajo
fill(161,175,162); //gris celeste rosa
beginShape();
vertex(321,624);//comparte con 5/7 arriba y abajo
vertex(346,623); // 6/7 y 5/7 abajo
vertex(353,767);//comparte con 6/7
vertex(330,767);//comparte con 4/7
endShape();
//4/4
fill(70,107,90);

//6/7
fill(129,189,181); //turquesa rosa
beginShape();
vertex(342,568);//comparte con 5/7 y triangulos
vertex(374,568);//comparte con 7/7 y rectangulos arriba
vertex(377,626);//comparte con 7/7 y turquesa
vertex(378,695);//comparte con triang rosa y turquesa
vertex(378,729);//comparte con al lado de camino
vertex(366,767);//comparte con al lado de camino
vertex(353,767);//comparte con 5/7
vertex(351,708);//punta de triangulo
vertex(346,623); //comparte 5/7
endShape();
      
//al lado de camino
//abajo del triangulo y camino
fill(201,209,188);//gray
beginShape();
vertex(378,725);//comparte con al lado de camino
vertex(398,739);
vertex(388,768);
vertex(366,768);//comparte con al lado de camino
endShape();
//verde oscuro
fill(126,176,147); //verde
beginShape();
vertex(391,627);//turquesa 
vertex(414,628); //7/7
vertex(404,683);
vertex(390,688);//turquesa
vertex(388,667);//turquesa
endShape();
//triangulo rosa
fill(220,205,205); //rosa
triangle(351,708,403,683,398,739);

//termina al lado del camino sigue rectangulos

//7/7
fill(216,213,196); //rosa palido
beginShape();
vertex(374,563); //rectangulo de arriba
vertex(411,562); // casita
vertex(414,628); //verde oscuro
vertex(377,626); //turquesa y 6/7
vertex(374,568);//comparte con 6/7 y rectangulos arriba
endShape();

//turquesa
fill(100,180,171); //turquesa
beginShape();
vertex(377,626);//comparte con 7/7 y turquesa
vertex(391,627);//turquesa 
vertex(388,667);//turquesa
vertex(390,688);//turquesa
vertex(378,695);//comparte con triang rosa y turquesa
endShape();

/*terminan edificios entre casita y forma rara*/
  
  
/*fondoTriangulos*/
noStroke();

/*arcos*/




//los tres al lado de la casita
fill(122,157,153); //bluish
arc(337, 452, 161, 100, PI, TWO_PI, CHORD);

fill(141,177,167); //light bluish
arc(357, 452, 115, 84, PI, TWO_PI, CHORD);

fill(224,207,189); //white pink
arc(378, 452, 102, 71, PI, TWO_PI, CHORD);

//solo de arriba
fill(169,132,114); //dark pink
arc(505,130,120, 128, PI, TWO_PI, CHORD);

/*PAlmera*/

//turquesas de la derecha ///
/**4/4 bis*/
fill(59,67,46); //turquesa oscuro
beginShape();
curveVertex(972,184);
curveVertex(990,230);
curveVertex(1006,348);
curveVertex(953,395);
vertex(953,395);
curveVertex(927,307);
curveVertex(972,184);
vertex(972,184);
endShape();
/**3/4 bis*/
fill(99,137,114); //turquesa oscuro
beginShape();
curveVertex(989,230);
curveVertex(997,277);
curveVertex(981,321);
vertex(981,321);
curveVertex(970,275);
curveVertex(989,230);
vertex(989,230);
endShape();
/**2/4 bis*/
fill(117,140,114); //verde amarillento y gris
beginShape();
curveVertex(994,257);
curveVertex(1002,327);
curveVertex(974,378);
vertex(974,378);
curveVertex(974,378);
curveVertex(958,325);
curveVertex(994,257);
vertex(994,257);
endShape();
/**1/4 bis*/
fill(48,168,139); //turquesa fuerte
beginShape();
curveVertex(998,274);
curveVertex(1011,347);
curveVertex(1003,418);
curveVertex(998,444);
curveVertex(962,507);
curveVertex(941,526);
vertex(941,526);
curveVertex(934,392);
curveVertex(984,299);
curveVertex(998,274);
vertex(998,274);
endShape();
/**4/4*/
fill(95,123,108); //turquesa oscurisimo
beginShape();
curveVertex(967,194);
curveVertex(969,249);
curveVertex(940,284);
vertex(940,284);
curveVertex(928,246);
curveVertex(967,194);
vertex(967,194);
endShape();
/**3/4*/
fill(96,179,153); //turquesa
beginShape();
curveVertex(968,209);
curveVertex(980,269);
curveVertex(944,365);
vertex(944,365);
curveVertex(928,277);
curveVertex(968,209);
vertex(968,209);
endShape();
/**2/4*/
fill(149,177,163); //turquesa agrisado
beginShape();
curveVertex(981,270);
curveVertex(985,303);
curveVertex(985,357);
curveVertex(940,428);
vertex(940,428);
curveVertex(950,319);
curveVertex(981,270);
vertex(981,270);
endShape();
/**1/4*/
fill(128,183,160); //turquesa
beginShape();
curveVertex(984,302);
curveVertex(989,372);
curveVertex(981,442);
curveVertex(964,481);
curveVertex(947,507);
vertex(947,507);
curveVertex(938,477);
curveVertex(934,394);
curveVertex(952,345);
curveVertex(985,302);
vertex(985,302);
endShape();

//turquesas del medio 
/**4/4*/
fill(101,111,103); //turquesa
beginShape();
curveVertex(922,182); //comparte con verde;
curveVertex(937,207);
curveVertex(941,232);
curveVertex(948,316);
curveVertex(918,380);
vertex(887,349);
curveVertex(887,349); //comparte con verde;
curveVertex(878,246);
curveVertex(922,182);
vertex(922,182);
endShape();
/**3/4*/
fill(78,177,149); //turquesa
beginShape();
curveVertex(927,176); //comparte con verde;
curveVertex(937,207);
curveVertex(941,232);
curveVertex(948,316);
curveVertex(918,380);
vertex(918,380);
curveVertex(886,368); //comparte con verde;
curveVertex(885,264);
curveVertex(927,175);
vertex(927,175);
endShape();
/**2/4*/
fill(118,166,154); //turquesa oscuro
beginShape();
curveVertex(932,188); 
curveVertex(939,232);
curveVertex(946,316);
curveVertex(918,380);
vertex(918,380);
curveVertex(896,370); //comparte con verde;
curveVertex(902,257);
curveVertex(932,188);
vertex(932,188);
endShape();
/**1/4*/
fill(121,183,170); //turquesa
beginShape();
curveVertex(939,232); //comparte con verde;
curveVertex(945,268);
curveVertex(945,317);
curveVertex(927,429);
vertex(927,429);
curveVertex(909,382); //comparte con verde;
curveVertex(910,293);
curveVertex(924,258);
curveVertex(939,232);
vertex(939,232);
endShape();

//turquesas a la izquierda
/**4/4*/
fill(44,77,56); //verde oscuro
beginShape();
curveVertex(857,190);
curveVertex(867,218);
curveVertex(881,278);
curveVertex(850,372);
vertex(850,372);
curveVertex(822,358); 
curveVertex(808,322);
vertex(808,322); //comparte con Verde oscuro del fondo
vertex(808,269);
curveVertex(834,232);
curveVertex(857,189);
vertex(857,189);
endShape();
/**3/4 1ero */
fill(66,89,71); //turquesa verdoso
beginShape();
curveVertex(864,210); 
curveVertex(882,275);
curveVertex(876,352);
curveVertex(866,380);
vertex(866,380);
curveVertex(845,326);
curveVertex(837,295);
curveVertex(840,281);
curveVertex(864,210);
vertex(864,210);
endShape();
/**3/4 bis */
fill(85,149,132); //turquesa verdoso bis
beginShape();
curveVertex(833,244); 
curveVertex(841,281);
curveVertex(850,311);
curveVertex(880,462);
curveVertex(864,531);
vertex(864,531);
curveVertex(845,519);
curveVertex(836,509);
curveVertex(809,509);
vertex(809,509);
vertex(808,322); //comparte con Verde oscuro del fondo
curveVertex(819,312);
curveVertex(834,245);
vertex(834,245);
endShape();
/**2/4*/
fill(98,153,134); //celeste
beginShape();
curveVertex(870,222); //comparte con verde;
curveVertex(885,264);
curveVertex(887,413);
vertex(887,413);
curveVertex(857,370);
curveVertex(848,297);
curveVertex(862,245);
curveVertex(870,222);
vertex(870,222);
endShape();
/**1/4 bis izquierda*/
fill(118,164,140); //turquesa celeste
beginShape();
curveVertex(848,297); //comparte con verde;
curveVertex(857,324);
curveVertex(874,427);
curveVertex(863,434);
curveVertex(857,461);
curveVertex(837,507);
vertex(837,507);
curveVertex(820,437); //comparte con verde;
curveVertex(823,406);
curveVertex(834,345);
curveVertex(848,297);
vertex(848,297);
endShape();
/**1/4 1ero*/
fill(128,175,167); //turquesa
beginShape();
curveVertex(868,221); //comparte con verde;
curveVertex(893,283);
curveVertex(909,339);
curveVertex(910,384);
curveVertex(899,400);
vertex(899,400);
curveVertex(882,375); //comparte con verde;
curveVertex(872,326);
curveVertex(869,273);
curveVertex(873,237);
vertex(873,237);
endShape();

/**pinks!*/
//pink at left
fill(198,187,165); //gray-pink
beginShape();
curveVertex(870,271); //comparte con verde;
curveVertex(886,310);
curveVertex(888,465);
curveVertex(867,535);
vertex(867,535);
curveVertex(863,531); //comparte con verde;
curveVertex(849,425);
curveVertex(848,365);
curveVertex(870,273);
vertex(870,271);
endShape();
//pink at right
fill(205,199,177); //gray-pink
beginShape();
  curveVertex(946,267); //comparte con verde;
  curveVertex(950,307);
  curveVertex(953,345);
  curveVertex(952,395);
  curveVertex(938,476);
  vertex(924,518);
  curveVertex(913,462); //comparte con verde;
  curveVertex(907,419);
  curveVertex(915,341);
  curveVertex(944,267);
  vertex(924,267);
endShape();
//center
fill(233,220,201); //white-pink
beginShape();
vertex(902,257);
curveVertex(915,342);
curveVertex(918,379);
curveVertex(912,463);
curveVertex(900,511);
vertex(900,511);
curveVertex(889,465);
curveVertex(880,378);
curveVertex(883,326);
curveVertex(902,257);
vertex(902,257);
endShape();
/**Terminan hojas*/

/*Terminan arcos**/

/**empiezan alrededores de Almendra*/
/*almendra*/
//cuadraditos de arriba

//izq rosa5 (darkGreen)
fill(92,119,88);
//cent
beginShape();
vertex(96,360);
vertex(98,415);
vertex(82,421);
vertex(76,361);
endShape();
//izq rectangulo superior
beginShape();
vertex(29,394);
vertex(36,393);
vertex(49,392);
vertex(76,361);
vertex(58,455);
vertex(37,463);
endShape();
//der rectangulo
rect(169,389,15,60);
//der rectangulo arriba
beginShape();
vertex(197,397);
vertex(196,332);
vertex(214,313);
vertex(230,341);
vertex(222,404);
vertex(257,404);
vertex(246,458);
vertex(193,439);
endShape();
//cuadrado elevado derecha
rect(228,392,17,12);
//izq lateral borde almendra
beginShape();
vertex(35,467);
vertex(55,571);
vertex(72,552);
vertex(51,462);
endShape();

//izq rosa4 (bluegreen)
fill(95,152,133);
//cent
beginShape();
vertex(105,358);
vertex(102,353);
vertex(96,360);
vertex(98,415);
vertex(106,438);
endShape();
//cuadrado elevado der
rect(245,392,13,14);
//izq lateral borde almendra
beginShape();
vertex(60,457);
vertex(80,546);
vertex(72,552);
vertex(51,462);
endShape();

//izq rosa3 (verde)
fill(95,156,140);
//cent
beginShape();
vertex(105,358);
vertex(113,353);
vertex(114,437);
vertex(106,438);
endShape();
//izq
beginShape();
vertex(72,424);
vertex(74,453);
vertex(60,457);
vertex(57,429);
endShape();
//der
rect(180,388,21,60);

//izq rosa2 (celeste verdoso)
fill(146,177,169);
//cent
rect(113,353,32,90);
//izq
beginShape();
vertex(72,424);
vertex(82,412);
vertex(87,446);
vertex(74,453);
endShape();
//izq superior lateral
beginShape();
vertex(36,393);
vertex(49,392);
vertex(44,363);
vertex(31,365);
endShape();
beginShape();
vertex(28,363);
vertex(24,348);
vertex(0,354);
vertex(1,396); //arriba lateral
vertex(11,389); //arriba lateral
vertex(11,369);
endShape();
//der
rect(191,387,21,52);

//izq rosa (lila)
fill(158,163,166);
//cent
rect(120,350,32,85);
//izq
rect(82,412,13,35);
//der
rect(198,387,21,52);
//izq lateral borde almendra
beginShape();
vertex(60,457);
vertex(80,546);
vertex(99,523);
vertex(74,455);
endShape();

//rosa
fill(205,189,164);
//cent
rect(131,349,32,82);
//izq
rect(91,412,13,30);
//der
rect(205,385,21,52);

/**terminan alrededores de Almendra*/

/**costado izq de edificio arriba*/
fill(207,194,175); //gris
beginShape();
vertex(587,123);
vertex(591,154);
vertex(591,178);
vertex(608,436);
vertex(619,676);
vertex(551,767);
vertex(551,737);
vertex(550,630);
vertex(552,365);
vertex(545,195);
endShape();

/**cuadrado de techo casita*/
/**derecha arriba*/
fill(153,176,168); //celeste platinado
beginShape();
vertex(552,365);
vertex(538,445);
vertex(608,436);
endShape();
/**izquierda arriba*/
fill(92,156,140); //verde azulado
beginShape();
vertex(552,365);
vertex(538,445);
vertex(497,446);
vertex(496,432);
endShape();
/*izq abajo*/
fill(147,170,152); //celeste platinado 2
beginShape();
vertex(538,445);
vertex(497,446);
vertex(496,432);
vertex(479,448);
vertex(489,464);
vertex(500,475);
vertex(515,489);
vertex(524,499);
vertex(535,510);
vertex(547,524);
endShape();
/*der abajo*/
fill(112,174,163); //turquesa oscuro
beginShape();
vertex(538,445);
vertex(608,436);
vertex(547,524);
endShape();

/**casita*/
/**techo*/
fill(234,206,182); //rosa viejo
beginShape();
vertex(479,448);
vertex(489,464);
vertex(500,475);
vertex(515,489);
vertex(524,499);
vertex(535,510);
vertex(547,524);
vertex(407,522);
vertex(406,509);
vertex(414,504);
vertex(429,490);
vertex(439,482);
vertex(450,471);
vertex(460,464);
endShape();

/*franjas en el techo casita*/
fill(219,151,130); //rosa pastel
//1/3
beginShape();
vertex(489,464);
vertex(500,475);
vertex(450,471);
vertex(460,464);
endShape();
//2/3
beginShape();
vertex(515,489);
vertex(524,499);
vertex(429,490);
vertex(439,482);
endShape();
//3/3
beginShape();
vertex(535,510);
vertex(547,524);
vertex(407,522);
vertex(406,509);
vertex(414,504);
endShape();
/**pared*/
fill(242,216,199); // rosa nena
beginShape();
vertex(407,522);
vertex(547,524);
vertex(550,630);
vertex(415,627);
endShape();

/*ventana izquierda casita*/
fill(227,187,162); //rosa apagado
beginShape();
vertex(407,522);
vertex(441,522);
vertex(443,555);
vertex(437,562);
vertex(426,566);
vertex(413,561);
endShape();
/**puertaFondo casita*/
fill(228,210,188); //rosa tiza
beginShape();
vertex(442,562);
vertex(471,560);
vertex(485,561);
vertex(517,564);
vertex(514,629);
vertex(482,630);
vertex(438,628);
endShape();
/**puertaDerecha casita*/
fill(191,184,165); //gris
beginShape();
vertex(485,561);
vertex(517,564);
vertex(514,629);
vertex(482,630);
endShape();

/**forma rara a la derecha de casita*/
fill(232,220,194);//rosaDesaturada
beginShape();
vertex(547,524);
vertex(607,435);
vertex(614,520);
vertex(617,577);
vertex(619,676);
vertex(622,766);
vertex(601,766);
vertex(591,767);
vertex(551,767);
endShape();

/*trianguloClaro de la forma rara*/
fill(201,196,174); //gris
beginShape();
vertex(550,630);
vertex(602,730);
vertex(567,767);
vertex(551,767);
endShape();
/*marron Oscuro de forma rara*/
fill(156,108,88); //marron chocolate
beginShape();
vertex(619,676);
vertex(622,766);
vertex(601,766);
vertex(602,675);endShape();
/*marronClaro de forma rara*/
fill(195,158,140); //marron agrisado
beginShape();
vertex(602,675);
vertex(601,766);
vertex(591,767);
vertex(589,676);endShape();

/*jardin casa*/
/*derecha claro*/
fill(125,191,179); //turquesa
beginShape();
vertex(514,629);
vertex(550,630);
vertex(550,737);
vertex(552,767);
vertex(510,768);
vertex(510,743);
endShape();
/*derecha oscuro*/
fill(68,170,146); // verde azulado
beginShape();
vertex(514,629);
vertex(550,630);
vertex(550,737);
vertex(537,747);
vertex(510,743);
vertex(511,685);
endShape();
/*izquierda!*/
fill(221,223,212); //silver
beginShape();
vertex(415,627);
vertex(514,629);
vertex(511,685);
vertex(510,743);
vertex(510,768);
vertex(389,767);
vertex(395,733);
vertex(404,678);
endShape();
/*celeste medio izquierda*/
fill(140,192,179); //celeste
beginShape();
vertex(404,678);
vertex(476,685);
vertex(511,685);
vertex(510,743);
vertex(478,737);
vertex(395,733);
endShape();
/*celeste ultimo*/
fill(225,222,205); //gris rosa
beginShape();
vertex(395,733);
vertex(478,737);
vertex(510,743);
vertex(509,767);
vertex(389,767);
endShape();
//termina jardin


/**avellana*/

fill(75,83,59); //LessDarkGreenTriangle
beginShape();
vertex(80,527);
vertex(240,525);
vertex(245,572);
vertex(95,581);
endShape();

fill(80,105,76); //LessDark2GreenTriangle
triangle(83,515,137,519,103,574);
triangle(123,518,176,519,145,579);
triangle(161,519,206,516,189,576);
triangle(186,519,246,505,221,571);

fill(85,100,86); //LessDark3GreenTriangle
triangle(95,515,137,518,118,574);
triangle(167,519,175,519,151,570);
triangle(169,518,205,517,192,569);
triangle(195,518,247,507,229,565);

//*triangulos debajo la Almendra*/

//left to right
fill(74,133,105); //BelowGreenTriangle 
triangle(105,517,137,518,118,567);
triangle(140,519,174,518,156,556);
triangle(178,519,205,516,194,557);
triangle(213,517,246,507,231,553);
/**Terminan triangulos*/  
  
  
//*almendra*/
//plato
fill(143,167,144);//WhiteGreenPlate
beginShape();
vertex(83,475);
vertex(248,457);
vertex(248,505);
vertex(241,516);
vertex(111,524);
vertex(93,518);
vertex(86,510);
vertex(86,492);
endShape();

//abajo
fill(181,161,137); //belowGrandPink
beginShape();
vertex(72,451);
vertex(248,451);
vertex(244,473);
vertex(239,482);
vertex(224,491);
vertex(209,505);
vertex(174,509);
vertex(92,489);
vertex(83,479);
vertex(73,457);
endShape();

//shape arriba
fill(208,183,158); //grandPinkPastel
beginShape();
vertex(72,451);
vertex(150,422);
vertex(212,433);
vertex(249,448);
vertex(249,454);
vertex(224,465);
vertex(214,467);
vertex(206,482);
vertex(190,474);
vertex(160,473);
vertex(154,479);
vertex(143,478);
vertex(78,457);
endShape();
//*Termina la almendra*/
  
  
//*triangulos de la base 3/3 derecha*/
noStroke();
//escondido shape
fill(70,96,74); //AzulVerdosoOscuro
beginShape();
vertex(198,610);
vertex(230,637);
vertex(182,757);
vertex(155,733);
endShape();
//5triangulos
fill(87,143,124); //AzulVerdoso
triangle(232,581,295,767,161,767);
fill(109,166,147); //VerdeAzulado
triangle(237,597,295,767,180,767);
fill(129,153,139); //VerdeTurquesa
triangle(249,638,295,767,200,767);
fill(124,159,137); //Celeste
triangle(266,684,295,767,229,767);
fill(194,165,146); //Rosa
triangle(282,726,295,767,260,767);


//*triangulos de la base 2/3 medio*/
//escondido
fill(50,46,34); //BelowDarkTriangles
triangle(86,606,107,683,33,676);
//triangulos
fill(70,96,74); //AzulVerdosoOscuro
triangle(124,574,199,766,0,767);
fill(87,143,124); //AzulVerdoso
triangle(130,583,199,766,15,767);
fill(109,166,147); //VerdeAzulado 
triangle(134,596,199,766,51,767);
fill(129,153,139); //VerdeTurquesa
triangle(144,624,199,766,74,767);
fill(124,159,137); //Celeste
triangle(164,670,199,766,122,767);
fill(194,165,146); //Rosa
triangle(182,719,199,766,161,767);
//forma arriba de los triangulos de la izquierda
noStroke();

fill(137,154,144);//celeste
beginShape();
vertex(0,407);
vertex(11,405);
vertex(14,411);
vertex(30,439);
vertex(36,463);
vertex(0,468);
endShape();
fill(184,162,141); //old pink 
triangle(0,440,30,439,14,411);

//*triangulos de la base 1/3 izquierda*/
noStroke();
fill(115,158,111);
beginShape();
vertex(35,461);
vertex(0,519);
vertex(0,496);
vertex(18,466);
endShape();


fill(88,133,109);
beginShape();
vertex(35,461);
vertex(42,499);
vertex(0,577);
vertex(0,519);
endShape();

fill(125,142,132); //axul verdoso 
beginShape();
vertex(42,499);
vertex(48,534);
vertex(0,702);
vertex(0,577);
endShape()

fill(144,172,166); //verde azulado 
beginShape();
vertex(48,534);
vertex(92,766);
vertex(0,766);
vertex(31,588);
endShape()

fill(184,178,159);//rosa
triangle(10,665,31,588,48,639);

fill(188,165,152);
beginShape();
vertex(10,665);
vertex(48,639);
vertex(77,744); 
endShape();

fill(217,176,156);

beginShape();
vertex(0,685);
vertex(10,665);//limite triangulo grande
vertex(76,742);
vertex(81,767);
vertex(0,767);
endShape();

fill(167,97,90);//rosa oscuro de abajo
beginShape();
vertex(3,767);
vertex(54,733);
vertex(116,748);
vertex(131,767);
endShape();
//** terminan triangulos de la izquierda*/



  noStroke();
////////////////edificio
fill(216,200,167);///fondo rosa
beginShape();
vertex(590,178);
vertex(804,173);
vertex(809,526);
vertex(807,624);
vertex(805,727);
vertex(805,767);
vertex(622,766);
vertex(619,678);
vertex(617,576);
vertex(613,520);
vertex(607,436);
endShape();

//triangulo verde superior izq
fill(131,191,183);
beginShape();
vertex(617,576);
vertex(613,520);
vertex(619,517);
vertex(660,560);
vertex(656,567);
endShape();
//cuadrado verde izquierdo
fill(145,202,196);
beginShape();
vertex(622,766);
vertex(619,678);
vertex(648,674);
vertex(653,719);
vertex(663,720); //puerta
vertex(659,767);
endShape();

//*****************DOOR
//doors left to right
//1/6 verde puerta
//darkturquaise
fill(104,153,138);
beginShape();
vertex(663,720);
vertex(667,570);
vertex(675,570);
vertex(669,767);
vertex(659,767);
endShape();
//2/6 verde puerta
//watergreen
fill(100,173,167);
beginShape();
vertex(675,570);
vertex(669,767);
vertex(678,767);
vertex(685,568);
endShape();
//3/6 verde puerta
//watergreen2
fill(101,166,157);
beginShape();
vertex(678,767);
vertex(685,568);
vertex(696,567);
vertex(686,767);
endShape();
//4/6 verde puerta
//mudwatergreen
fill(95,142,122);
beginShape();
vertex(696,567);
vertex(686,767);
vertex(695,767);
vertex(707,566);
endShape();
//5/6 verde puerta
//mudwatergreen2
fill(93,125,113);
beginShape();
vertex(695,767);
vertex(707,566);
vertex(715,566);
vertex(709,767);
endShape();
//6/6 negra puerta
//black
fill(65,67,51);
beginShape();
vertex(715,566);
vertex(709,767);
vertex(722,767);
vertex(732,566);
endShape();
//*******************
//cuadrado verde turquesa derecho
fill(122,200,200);
beginShape();
vertex(743,527);
vertex(809,526);
vertex(807,624);
vertex(748,629);
vertex(742,622);
endShape();

/**techo drawn!
triangulos techos
primer plano*/
fill(196,178,166);
beginShape();
vertex(587,124);
vertex(593,0);
vertex(657,0);
vertex(681,55);
vertex(696,96);
vertex(711,125);
vertex(709,131);
vertex(659,122);
endShape();
beginShape();
vertex(764,0);
vertex(798,0);
vertex(801,135);
vertex(741,136);
vertex(709,131);
vertex(711,125);
endShape();
//verde de atras izq y der
fill(98,160,147); //turquesa oscuro
beginShape();
vertex(593,0);
vertex(576,0);
vertex(576,115);
vertex(589,122);
endShape();
beginShape();
vertex(681,55);
vertex(696,96);
vertex(746,0);
vertex(737,0);
endShape();
//turquesa claro
fill(163,185,181); 
beginShape();
vertex(696,96);
vertex(746,0);
vertex(764,0);
vertex(711,125);
endShape();
//techo superior
fill(101,167,165); //turquesa oscuro
beginShape();
vertex(802,144);
vertex(590,153);
vertex(587,124);
vertex(658,121);
vertex(745,135);
vertex(800,134);
endShape();
//techo inferior
fill(118,178,176); //turquesa claro
beginShape();
vertex(590,178);
vertex(804,173);
vertex(802,144);
vertex(590,153);
endShape();

//arboles
noStroke();
//1er arbol

//crema
fill(243,220,206);
rect (637,230,24,41);
//turquaise 
fill(79,146,133);
triangle(645,188,676,231,613,231);


//2er arbol
//bluishgreen 
fill(77,147,120);
triangle(698,183,731,230,685,232);
//whitepink
fill(247,223,197);
rect(697,232,18,42);

//3er arbol
//whitepink
fill(247,223,197);
rect(754,230,13,39);
//bluishgreen 
fill(87,157,137);
triangle(759,192,790,231,744,233);

//4to arbol
//bluishgreen 
fill(91,154,143);
triangle(644,292,684,335,621,334);
//whitepink
fill(236,221,200);
rect(635,335,24,47);


//5to arbol
//whitepink
fill(239,223,203);
rect(702,322,14,60);
//bluishgreenDark 
fill(82,137,101);
triangle(715,289,737,325,683,324);


//6to arbol
//whitepink
fill(232,230,217);
rect(755,326,15,61);
//bluishgreenDark 
fill(78,144,105);
triangle(752,284,791,329,741,325);


//7to arbol
//whitepink
fill(290,222,212);
rect(637,438,33,35);
//bluishgreenDark 
fill(79,124,109);
triangle(658,393,626,437,679,440);

//8mo arbol
//whitepink
fill(290,222,212);
rect(700,430,18,39);
//bluishgreenDark 
fill(79,124,109);
triangle(705,387,685,430,733,433);

//9no arbol
//whitepink
fill(239,226,202);
rect(756,429,13,39);
//bluishgreenDark 
fill(106,160,138);
triangle(738,430,754,392,787,431);

//10 arbol
//whitepink
fill(290,222,212);
rect(638,505,20,31);
//bluishgreenDark 
fill(79,124,109);
triangle(650,472,674,506,625,506);

//11mo arbol
//whitepink
fill(290,222,212);
rect(701,501,13,25);
//bluishgreenDark 
fill(79,124,109);
triangle(716,472,732,504,685,499);

//12no arbol
//whitepink
fill(239,226,202);
rect(758,502,12,22);
//bluishgreenDark 
fill(106,160,138);
triangle(741,505,764,470,787,501);

//Frontis
//beige
fill(179,183,164);
triangle(700,517,750,569,647,573);

//empiezan rectangulos al lado del edificio de izq a derecha

//5to rectangulo de arriba
fill(51,63,51);//dark superb
beginShape();
vertex(451,136);
vertex(464,135);//comp con el 4to de arriba 
vertex(453,304); //comp con triang y 4to de arriba
vertex(441,283); //comp con triang
endShape();

//4to rectangulo de arriba
fill(52,77,73);//dark blue
beginShape();
vertex(464,135);//comp con el 5to de arriba 
vertex(479,135);//comp con el 4to de arriba 
vertex(467,316);
vertex(462,317); //comp con triang y claro de abajo
vertex(453,304); //comp con triang y 5to de arriba
endShape();

//3er rectangulo de arriba
fill(98,121,118); //purple blue gray
beginShape();
vertex(479,135);//comp con el 4to de arriba 
vertex(491,133);//comp con el 2ndo de arriba 
vertex(479,318); //comp con el 2ndo de abajo y 3ero de arriba
vertex(467,316);
endShape();

//2ndo rectangulo de arriba
fill(85,149,132);//turquesa
beginShape();
vertex(491,133);//comp con el 3ero de arriba 
vertex(503,131); //comp con 1er arriba
vertex(494,320); //comp con el 2ndo de abajo
vertex(479,318); //comp con el 2ndo de abajo y 3ero de arriba
endShape();

//1er rectangulo de arriba
fill(121,163,149); //aguamarina
beginShape();
vertex(503,131); //comp con 2do arriba
vertex(534,130); 
vertex(529,324);
vertex(494,320); //comp con chico
endShape();

//oscuro raro al lado de los cuadrados abajo
fill(84,101,82); //dark green
beginShape();
vertex(320,348);
vertex(346,349);
vertex(343,362);
vertex(343,362);
vertex(454,420);
endShape();

//10mo rect de abajo de los triangulos
fill(81,138,115); //green
beginShape();
vertex(345,348);
vertex(354,349);
vertex(365,361);
vertex(364,404);//comp con  10mo de abajo
vertex(342,399);
vertex(343,362);
endShape();


//9no rect de abajo de los triangulos
fill(59,71,51); //dark green 
beginShape();
vertex(364,350);//comp con 10mo verde de abajo
vertex(378,346); //comp con triang y 8vo de abajo
vertex(375,406);//comp con 8vo de abajo
vertex(364,404);//comp con  10mo de abajo
endShape();

//8vo rect de abajo de los triangulos
fill(75,93,71); //dark green 2 
beginShape();
vertex(378,346); //comp con triang y 9no de abajo
vertex(391,342);//comp con triang y 7mo de abajo
vertex(386,414);//comp con  7mo de abajo
vertex(375,406);//comp con 9no de abajo
endShape();

//7mo rect de abajo de los triangulos
fill(68,106,85); //deep green 
beginShape();
vertex(391,342);//comp con triang y 8vo de abajo
vertex(402,340); //comp con triang y 6to de abajo
vertex(398,421);//comp con 6to de abajo
vertex(386,414);//comp con arco y 8vo de abajo
endShape();


//6to rect de abajo de los triangulos
fill(88,150,130);//bright green 
beginShape();
vertex(402,340); //comp con triang y 7to de abajo
vertex(420,333);//comp con triang y 5to de abajo
vertex(415,437);//comp con arco y 5to de abajo
vertex(398,421);//comp con 7mo de abajo
endShape();

//5to rect de abajo de los triangulos
fill(88,140,120); //bluegreen 
beginShape();
vertex(420,333);//comp con triang y 6to de abajo
vertex(442,324);//comp con triang y 4to de abajo
vertex(436,483); //comp con 4to de abajo
vertex(407,509);//comp con rect abajo de arco
endShape();

//4to rect de abajo de los triangulos
fill(133,153,142); //gray 
beginShape();
vertex(442,324);//comp con triang y 5to de abajo
vertex(461,317); //comp con triang y 4to de abajo
vertex(457,433); //comp con cuadradito verde y 4to de abajo
vertex(454,467); //comp con casita y cuadradito verde
vertex(436,483); //comp con 5to de abajo
endShape();


//3er rect de abajo
fill(212,203,192); // clarito clarito
beginShape();
vertex(461,317); //comp con triang y 4to de abajo
vertex(468,316);
vertex(479,319);
vertex(476,442);//comp con claro de abajo y cuadradito verde
vertex(457,444); //comp con cuadradito verde y 4to de abajo
endShape();


//2ndo rect de abajo
fill(132,171,170);
beginShape();
vertex(479,318); //comp con el 2ndo de arriba y 3ero de arriba
vertex(494,320); //comp con el 2ndo de abajo
vertex(496,431);//comparte con rectangulo 2do chico
vertex(476,451);//comp con claro de abajo y cuadradito verde
vertex(476,442); //comp con casita y cuadradito verde
endShape();

///*/*cuadradito verde***//
fill(97,169,166);
beginShape();
vertex(457,444); //comp con cuadradito verde y 4to de abajo
vertex(476,442);//comp con claro de abajo y cuadradito verde
vertex(476,451); //comp con casita y cuadradito verde
vertex(454,467); //comp con casita y cuadradito verde
endShape();

//1er rect de abajo
fill(132,146,135); //darker gray 
beginShape();
vertex(494,320); //comp con arriba
vertex(520,324); //comp con arriba
vertex(520,403); //comp con chico
vertex(496,431);//comparte con rectangulo 2do chico
endShape();

//abajo de cola de pez
fill(110,156,141); //blue green marine
beginShape();
vertex(527,199);
vertex(545,199);//comparte con costado edificio
vertex(552,366);//comparte cuadrado arriba de casita
vertex(520,403);//comparte con rectangulo chico
vertex(520,323);//comparte con rectangulo chico
endShape();

//cola de pez
fill(112,112,102); //violeta
triangle(503,125,588,120,539,215);

//terminan rectangulos al lado del edificio de izq a derecha


//------------FormaRara
//rectangulos de la izquierda de la forma rara
fill(100,87,85); //violeta
beginShape();
vertex(0,230); //comparte
vertex(37,284);//comparte
vertex(24,298);//comparte
vertex(0,246);//comparte
endShape();

//segundo
fill(76,74,61);
beginShape();
vertex(0,188);
vertex(51,259);
vertex(62,250);
vertex(58,264);
vertex(37,284);//comparte
vertex(0,230); //comparte
endShape();
//primero

//fill(225,0,0); //red prueba  
fill(100,87,85); //violetea
beginShape();
vertex(1,160);
vertex(62,249);
vertex(51,259);
vertex(0,188);
endShape();

//Triangulos de abajo!
noStroke();
//--left triangles
//-forth
 
fill(106,116,105);//azul
triangle(85,291,117,361,184,279);
//third
fill(90,150,127);//azulverdoso
triangle(85,291,113,354,173,280);
//second
fill(101,152,139);//green
triangle(85,291,108,343,158,280);
//first
fill(128,155,130);//green2
triangle(85,291,98,320,128,283);
//Right triangles
//-forth
fill(106,116,105);//azul
triangle(128,283,194,350,270,270);
//-third
fill(90,150,127);//azulverdoso
triangle(128,283,183,340,247,272);
//-second
fill(101,152,139);//green
triangle(128,283,174,330,224,276);
//first=green
fill(128,155,130);//green2
triangle(128,283,192,278,157,311);

  noStroke();
//--RECTS! abajo delaformaRara
//1ero arriba der
fill(109,149,140); //BlueGreenPastel 

beginShape();
vertex(319,187); //comparte con forma rara verde
vertex(415,177); //comparte con forma rara verde derecha
vertex(414,212); // comparte con verde turquesa
vertex(318,218); //comparte con forma rara verde y turquesa
endShape();

//2ndo der
//fill(109,166,147); //verde Oscuro
fill(87,143,124); //azulVerdoso
beginShape();
vertex(318,218); //comparte con forma rara verde y turquesa
vertex(414,212); // comparte con verde turquesa
vertex(412,238); //comparte con verde brillante
vertex(321,242); //comparte con forma rara verde y brillante
endShape();

//3ero medio der
fill(117,181,164);//verde brillante
beginShape();
vertex(321,242); //comparte con forma rara verde y brillante
vertex(412,238); //comparte con verde brillante
vertex(412,250); //comparte con verde oscuro
vertex(321,257); // comparte con forma verde rara y verde oscuro
endShape();

//4to abajo der
fill(70,96,74); //darkGreen
beginShape();
vertex(321,257); // comparte con forma verde rara y verde oscuro
vertex(412,250); //comparte con verde oscuro
vertex(408,269); // comparte con forma verde rara y verde oscuro
vertex(322,272); //comparte con triangulo forma rara
endShape();
//terminan rectangulos de la derecha de la forma rara

//rectangulos de arriba
beginShape(); //  DarkDarkGreen-rects 
fill(70,96,74);
vertex(302,0);
vertex(319,0);//comparte rect turquesa
vertex(317,63);//comparte rect turquesa
vertex(299,61);
endShape();

beginShape(); //  turquesa-rects 
fill(117,181,164);
vertex(319,0);//comparte rect turquesa
vertex(317,63);//comparte rect turquesa
vertex(358,62);
vertex(362,0);
endShape();
//terminan los rectangulos de arriba
  
noStroke();
 beginShape(); //Abajo de formaRara triangulo deforme de la derecha
fill(106,135,115); // DarkGreen
 vertex(321,263);
 vertex(322,308);
 vertex(266,309);
 vertex(230,350);
 vertex(193,279);//con triangulo chiquito
 endShape();
 
  
  beginShape(); //formaRara 
 fill(117,171,158); //Green
  vertex(0,2);
  vertex(274,0);
  vertex(296,60);// comparte con rosa y turquesa
  vertex(358,62);// comparte con rosa y turquesa
  vertex(361,0);//comparte con turquesa
  vertex(418,0);
  vertex(420,59);//borde de rosa
  vertex(441,59);
  vertex(443,129); //arco
  vertex(419,130);//comparte borde con rosa
  vertex(415,177);//comparte lateral derecho con verde oscuro
  vertex(319,187);
  vertex(321,263);//comparte con triangulo deforme
  vertex(193,279); //triangulo deforme empieza
  vertex(128,284); //triangulos chicos medio
  vertex(85,291); //triangulos chicos izquierda comienzo
  vertex(55,230); //comparte borde izq abajo rosa
  vertex(55,239); //pestania
  vertex(0,164);
  vertex(0,69);
  vertex(8,57);//comparte rosa
  vertex(0,49);//comparte rosa
  endShape();

  stroke(56,73,64,50);
 
  beginShape();//formaRara
  fill(216,200,167); //Pink
  vertex(110,44);//comparte con white
  vertex(147,0);
  vertex(217,1); //termina white
  vertex(236,59);//termina white
  vertex(296,60);//comparte con verde
  vertex(358,62);//comparte con verde
  vertex(420,59);
  vertex(419,130);
  vertex(389,139); //comparte borde con white
  vertex(283,150); //comparte borde con white
  vertex(277,210);
  vertex(55,230);
  vertex(17,161);
  vertex(0,121);
  vertex(31,86);
  endShape();

  noStroke()
//  fill(255,0,0); //red prueba
 
  beginShape();//formaRara
  fill(217,214,195); //nearWhite
  vertex(0,18);
  vertex(26,2);
  vertex(97,1);
  vertex(110,44);
  vertex(132,108);
  vertex(205,0);
  vertex(217,1);
  vertex(236,59);
  vertex(252,101);
  vertex(391,99);
  vertex(389,139);
  vertex(283,150);
  vertex(104,184);
  vertex(31,86);
  vertex(8,57);
  vertex(0,49);
  endShape();
 
 /*triangulos de la base de la derecha!*/
 //de izq a derecha 

//fondo izquierda abajo con nodo

fill(105,109,94);//dark gray
beginShape();
vertex(809,594);
vertex(868,554);
vertex(872,567);
vertex(831,645);
vertex(825,632);
vertex(805,661);
endShape();

//fondo izquierda arriba con nodo 

fill(100,120,105);//dark gray
beginShape();
vertex(809,544);
vertex(808,470);
vertex(827,499);
vertex(845,518);
vertex(862,530);
vertex(866,535);
vertex(850,537);
vertex(846,534);
vertex(844,534);
vertex(840,537);
vertex(831,541);
vertex(825,538);
vertex(820,537);
endShape();

//fondo derecha arriba con nodo

fill(94,138,113);//dark gray
beginShape();
vertex(924,531);
vertex(936,528);
vertex(941,525);
vertex(962,509);
vertex(976,481);
vertex(996,442);
vertex(998,435);
vertex(1002,418);
vertex(1000,545);
vertex(960,539);
vertex(922,536);
endShape();

 
//derecha 2do al lado
fill(98,145,111);//dark green
beginShape();
vertex(1002,418);
vertex(1024,417);
vertex(1024,548);
vertex(1000,545);
endShape();


//triangulos fondo
fill(77,94,78);//DarkGreen
triangle(807,655,968,556,1016,649);

//2ndo hilera fondo izquierda
fill(86,107,90);//darkGreen 2 
triangle(807,656,948,570,1006,722);


//1ero hilera fondo derecha
fill(86,107,90);//darkGreen 2 
triangle(937,632,978,576,1016,650);
//--


//adelante del edificio
 fill(121,184,165);//green
 triangle(725,767,779,666,823,767);
 
 //cuadrado adelante del triangulo
fill(95,142,123);//dark bluegreen
beginShape();
vertex(775,730);
vertex(805,728);
vertex(816,767);
vertex(775,767);
endShape();
 // triangulo atras de edificio
fill(95,167,136);//bluegreen
beginShape();
vertex(806,656);
vertex(825,627);
vertex(830,639);
vertex(839,666);
vertex(804,766);
endShape();

//forma verde detras del triangulo
fill(87,160,135);//bluegreen2
beginShape();
vertex(830,639);
vertex(871,566); //comparte con nodo
vertex(875,571); //comparte con nodo
vertex(839,668);
endShape();



//ultima 3era hilera de rosas
fill(88,117,95);//dark green
triangle(945,652,986,589,1017,650);

//ultima 2da hilera de verde
fill(98,143,136);//green 
beginShape();
vertex(909,732);
vertex(996,611);
vertex(1024,664);
vertex(1024,697);
endShape();

//ultima hilera de rosas
fill(182,162,153);// white pink
beginShape();
vertex(947,767);
vertex(1017,651);
vertex(1024,665);
vertex(1024,768);
endShape();
//***

//3era hilera de rosas
fill(105,162,135);//green
triangle(804,766,864,602,923,766);

//2ndo hilera de rosas
fill(131,169,154);//green 
triangle(804,766,852,637,901,767);

//1ero hilera de rosas
fill(180,185,171);//gray pinkish
triangle(804,766,839,666,880,766);
//***

//3era hilera de rosas2
fill(97,158,142);//bluegreen darker
triangle(842,768,920,599,981,768);

//2ndo hilera de rosas2
fill(113,162,137);//green 
triangle(842,768,903,635,980,768);

//1ero hilera de rosas2
fill(203,188,173);//gray pinkish
triangle(842,768,886,667,921,768);
//***

//3era hilera de rosas
fill(95,173,160);//green darker
triangle(861,768,957,599,1024,767);

//2ndo hilera de rosas3
fill(142,142,134);//lila 
triangle(901,765,965,619,1024,767);

//2ndo hilera de rosas33
fill(137,172,166);//celeste
triangle(901,765,945,653,981,767);

//1ero hilera de rosas3
fill(223,165,153);//pinkish
triangle(941,766,984,667,1024,767);

//nodo!!
fill(92,176,164);
beginShape();
vertex(865,535);
vertex(877,511);
vertex(888,464);
vertex(901,511);
vertex(912,462);
vertex(925,519);
vertex(875,571);
vertex(938,475);
vertex(946,506);
vertex(940,525);
vertex(935,528);
vertex(924,531);
vertex(911,573);
vertex(920,600);
vertex(904,635);
vertex(887,668);
vertex(864,603);
vertex(875,571);
vertex(871,566); //comparte con nodo
endShape();

/*terminan los triangulos de la base de la derecha*/


  
}
