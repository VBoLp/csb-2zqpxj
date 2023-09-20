import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Pflanze from "./Pflanze/Pflanze.js";
import Pflanze2 from "./Pflanze2/Pflanze2.js";
import Pflanze3 from "./Pflanze3/Pflanze3.js";
import Kugel from "./Kugel/Kugel.js";
import Kugel2 from "./Kugel2/Kugel2.js";
import Kugel3 from "./Kugel3/Kugel3.js";
import Helikopter from "./Helikopter/Helikopter.js";
import Linie from "./Linie/Linie.js";
import GameOver from "./GameOver/GameOver.js";
import StNgel from "./StNgel/StNgel.js";
import StNgel2 from "./StNgel2/StNgel2.js";
import StNgel3 from "./StNgel3/StNgel3.js";
import KaufenPflanze1 from "./KaufenPflanze1/KaufenPflanze1.js";
import KaufenPflanze2 from "./KaufenPflanze2/KaufenPflanze2.js";
import Zeiger from "./Zeiger/Zeiger.js";
import Zeiger2 from "./Zeiger2/Zeiger2.js";
import Neustart from "./Neustart/Neustart.js";
import KaufenItemPflanze1 from "./KaufenItemPflanze1/KaufenItemPflanze1.js";
import KaufenItemPflanze2 from "./KaufenItemPflanze2/KaufenItemPflanze2.js";
import VerbesserungPflanze1 from "./VerbesserungPflanze1/VerbesserungPflanze1.js";
import VerbesserungPflanze2 from "./VerbesserungPflanze2/VerbesserungPflanze2.js";
import VerbesserungPflanze3 from "./VerbesserungPflanze3/VerbesserungPflanze3.js";
import GeldzHler from "./GeldzHler/GeldzHler.js";
import Steuerung from "./Steuerung/Steuerung.js";
import Anleitung from "./Anleitung/Anleitung.js";
import Spielen from "./Spielen/Spielen.js";
import AnleitungKnopf from "./AnleitungKnopf/AnleitungKnopf.js";
import SteuerungKnopf from "./SteuerungKnopf/SteuerungKnopf.js";
import ZurCk from "./ZurCk/ZurCk.js";
import Titel from "./Titel/Titel.js";
import Einblendung from "./Einblendung/Einblendung.js";
import Producer from "./Producer/Producer.js";
import SpielBeenden from "./SpielBeenden/SpielBeenden.js";
import SpielStart from "./SpielStart/SpielStart.js";
import HighscoreList from "./HighscoreList/HighscoreList.js";
import HighscoreKnopf from "./HighscoreKnopf/HighscoreKnopf.js";
import Lauter from "./Lauter/Lauter.js";
import Leiser from "./Leiser/Leiser.js";
import MusikAnAus from "./MusikAnAus/MusikAnAus.js";
import ZurCkZumMen from "./ZurCkZumMen/ZurCkZumMen.js";
import Punktzahl from "./Punktzahl/Punktzahl.js";
import ItemPflanze1 from "./ItemPflanze1/ItemPflanze1.js";
import ItemPflanze1Topf from "./ItemPflanze1Topf/ItemPflanze1Topf.js";
import KugelItemPflanze1 from "./KugelItemPflanze1/KugelItemPflanze1.js";
import ItemPflanze2 from "./ItemPflanze2/ItemPflanze2.js";
import CreditKnopf from "./CreditKnopf/CreditKnopf.js";
import Credits from "./Credits/Credits.js";
import MusikWahl from "./MusikWahl/MusikWahl.js";
import Hardcore from "./Hardcore/Hardcore.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Pflanze: new Pflanze({
    x: -200,
    y: 0,
    direction: 10,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Pflanze2: new Pflanze2({
    x: -200,
    y: -140,
    direction: 93.64118525790134,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Pflanze3: new Pflanze3({
    x: -200,
    y: 150,
    direction: 127.30802880146521,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Kugel: new Kugel({
    x: 2.0000000000000284,
    y: -16,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 7
  }),
  Kugel2: new Kugel2({
    x: 31.827841374796773,
    y: 57.87685099832747,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 60,
    visible: false,
    layerOrder: 5
  }),
  Kugel3: new Kugel3({
    x: -85.95873263705411,
    y: 38.077488054178055,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 6
  }),
  Helikopter: new Helikopter({
    x: -30,
    y: -60,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 8
  }),
  Linie: new Linie({
    x: 49,
    y: 8.999999999999993,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 152,
    visible: false,
    layerOrder: 18
  }),
  GameOver: new GameOver({
    x: 0,
    y: 20,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 46
  }),
  StNgel: new StNgel({
    x: -200,
    y: -7,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  StNgel2: new StNgel2({
    x: -200,
    y: -147,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  StNgel3: new StNgel3({
    x: -199,
    y: 144,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  KaufenPflanze1: new KaufenPflanze1({
    x: -210,
    y: -150,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 15
  }),
  KaufenPflanze2: new KaufenPflanze2({
    x: -210,
    y: 140,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 10
  }),
  Zeiger: new Zeiger({
    x: 185,
    y: -164.5,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Zeiger2: new Zeiger2({
    x: 214.568,
    y: -165.908,
    direction: -52.69197119853479,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 12
  }),
  Neustart: new Neustart({
    x: 3,
    y: -148.99999999999997,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 27
  }),
  KaufenItemPflanze1: new KaufenItemPflanze1({
    x: -200,
    y: -80,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 40,
    visible: false,
    layerOrder: 17
  }),
  KaufenItemPflanze2: new KaufenItemPflanze2({
    x: -200,
    y: 75,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 16
  }),
  VerbesserungPflanze1: new VerbesserungPflanze1({
    x: -200,
    y: -50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 19
  }),
  VerbesserungPflanze2: new VerbesserungPflanze2({
    x: -200,
    y: -107,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 15,
    visible: false,
    layerOrder: 20
  }),
  VerbesserungPflanze3: new VerbesserungPflanze3({
    x: -200,
    y: 100,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 15,
    visible: false,
    layerOrder: 21
  }),
  GeldzHler: new GeldzHler({
    x: -118,
    y: 92,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 11,
    size: 100,
    visible: false,
    layerOrder: 23
  }),
  Steuerung: new Steuerung({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 24
  }),
  Anleitung: new Anleitung({
    x: 0,
    y: 9,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  Spielen: new Spielen({
    x: 0,
    y: -123,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 26
  }),
  AnleitungKnopf: new AnleitungKnopf({
    x: -140,
    y: -123,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 25
  }),
  SteuerungKnopf: new SteuerungKnopf({
    x: 140,
    y: -123,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: true,
    layerOrder: 36
  }),
  ZurCk: new ZurCk({
    x: 0,
    y: -135,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 34
  }),
  Titel: new Titel({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Einblendung: new Einblendung({
    x: 2.999999999999986,
    y: -1,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 48
  }),
  Producer: new Producer({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 12,
    size: 100,
    visible: false,
    layerOrder: 49
  }),
  SpielBeenden: new SpielBeenden({
    x: -225,
    y: -140,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 28
  }),
  SpielStart: new SpielStart({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 47
  }),
  HighscoreList: new HighscoreList({
    x: 0,
    y: 110,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 29
  }),
  HighscoreKnopf: new HighscoreKnopf({
    x: 217,
    y: -173,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 35,
    visible: true,
    layerOrder: 30
  }),
  Lauter: new Lauter({
    x: 120,
    y: 35,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 31
  }),
  Leiser: new Leiser({
    x: -120,
    y: 35,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 32
  }),
  MusikAnAus: new MusikAnAus({
    x: 0,
    y: 140,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 37
  }),
  ZurCkZumMen: new ZurCkZumMen({
    x: 100,
    y: -30,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 30,
    visible: false,
    layerOrder: 33
  }),
  Punktzahl: new Punktzahl({
    x: -155,
    y: -135,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 35
  }),
  ItemPflanze1: new ItemPflanze1({
    x: -200,
    y: -62,
    direction: 99,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 41
  }),
  ItemPflanze1Topf: new ItemPflanze1Topf({
    x: -200,
    y: -90.00000000000001,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 40
  }),
  KugelItemPflanze1: new KugelItemPflanze1({
    x: -207.99999999999997,
    y: 87,
    direction: 99,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: false,
    layerOrder: 38
  }),
  ItemPflanze2: new ItemPflanze2({
    x: -200,
    y: 70,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 30,
    visible: false,
    layerOrder: 39
  }),
  CreditKnopf: new CreditKnopf({
    x: 0,
    y: -140,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 44
  }),
  Credits: new Credits({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 42
  }),
  MusikWahl: new MusikWahl({
    x: 143,
    y: 132,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 43
  }),
  Hardcore: new Hardcore({
    x: 0,
    y: -115,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 45
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
