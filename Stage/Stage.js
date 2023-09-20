/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Bühnenbild1", "./Stage/costumes/Bühnenbild1.svg", {
        x: 250,
        y: 180.1875
      })
    ];

    this.sounds = [new Sound("Plopp", "./Stage/sounds/Plopp.wav")];

    this.triggers = [];

    this.vars.spawngeschwindigkeitHelilopter = 3.33;
    this.vars.punkte = 0;
    this.vars.highscore = 300;
    this.vars.euro = 0;
    this.vars.richtungErbseX = 152;
    this.vars.richtungErbseY = -164.5;
    this.vars.planzeSchuss = 0;
    this.vars.pflanzeSchuss2 = 0;
    this.vars.wartezeitPflanze1 = 1;
    this.vars.wartezeitPflanze2 = 0.3;
    this.vars.wartezeitPflanze3 = 0.35;
    this.vars.autoaimDauer1 = 1;
    this.vars.autoaimDauer2 = 0.6;
    this.vars.verdienst = 3;
    this.vars.todespunktGegnerX = 166;
    this.vars.todespunktGegnerY = -162.5;
    this.vars.men = "Menü";
    this.vars.platz2 = 200;
    this.vars.platz3 = 100;
    this.vars.name1 = "Jakob";
    this.vars.name2 = "Tim";
    this.vars.name3 = "Philipp";
    this.vars.nameSave = "d";
    this.vars.heliOnscreen = 0;
    this.vars.lautstRke = 50;
    this.vars.musik = "An";
    this.vars.zurCkZumHauptmen = "g";
    this.vars.deinePunktzahl = 795;
    this.vars.alleUpgrades = 0;
    this.vars.ausschalten = "Nicht Bereit";
    this.vars.musikart = "Normal";
    this.vars.hardcore = "Nein";

    this.watchers.punkte = new Watcher({
      label: "Punkte",
      style: "normal",
      visible: false,
      value: () => this.vars.punkte,
      x: 468,
      y: 180
    });
    this.watchers.highscore = new Watcher({
      label: "Highscore",
      style: "normal",
      visible: false,
      value: () => this.vars.highscore,
      x: 508,
      y: 81
    });
    this.watchers.euro = new Watcher({
      label: "Euro",
      style: "normal",
      visible: false,
      value: () => this.vars.euro,
      x: 334,
      y: 180
    });
    this.watchers.platz2 = new Watcher({
      label: "Platz 2:",
      style: "normal",
      visible: false,
      value: () => this.vars.platz2,
      x: 508,
      y: 9
    });
    this.watchers.platz3 = new Watcher({
      label: "Platz 3:",
      style: "normal",
      visible: false,
      value: () => this.vars.platz3,
      x: 508,
      y: -64
    });
    this.watchers.name1 = new Watcher({
      label: "Name 1",
      style: "large",
      visible: false,
      value: () => this.vars.name1,
      x: 334,
      y: 81
    });
    this.watchers.name2 = new Watcher({
      label: "Name 2",
      style: "large",
      visible: false,
      value: () => this.vars.name2,
      x: 334,
      y: 7
    });
    this.watchers.name3 = new Watcher({
      label: "Name 3",
      style: "large",
      visible: false,
      value: () => this.vars.name3,
      x: 334,
      y: -68
    });
    this.watchers.lautstRke = new Watcher({
      label: "Lautstärke",
      style: "large",
      visible: false,
      value: () => this.vars.lautstRke,
      x: 457,
      y: 43
    });
    this.watchers.zurCkZumHauptmen = new Watcher({
      label: "Zurück zum Hauptmenü",
      style: "large",
      visible: false,
      value: () => this.vars.zurCkZumHauptmen,
      x: 616,
      y: -21
    });
    this.watchers.deinePunktzahl = new Watcher({
      label: "Deine Punktzahl",
      style: "large",
      visible: false,
      value: () => this.vars.deinePunktzahl,
      x: 298,
      y: -148
    });
  }
}
