/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ItemPflanze2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./ItemPflanze2/costumes/Kostüm1.svg", {
        x: 58.726583695110264,
        y: 56.05811129628398
      }),
      new Costume("Kostüm2", "./ItemPflanze2/costumes/Kostüm2.svg", {
        x: 58.72659160079607,
        y: 50.41390978222529
      }),
      new Costume("Kostüm3", "./ItemPflanze2/costumes/Kostüm3.svg", {
        x: 60.15841271620263,
        y: 46.03535918225538
      }),
      new Costume("Kostüm4", "./ItemPflanze2/costumes/Kostüm4.svg", {
        x: 60.15841197015996,
        y: 46.03535754676611
      }),
      new Costume("Kostüm5", "./ItemPflanze2/costumes/Kostüm5.svg", {
        x: 58.72659319374918,
        y: 50.41390179460166
      }),
      new Costume("Kostüm6", "./ItemPflanze2/costumes/Kostüm6.svg", {
        x: 58.72658294906765,
        y: 56.05811253037791
      })
    ];

    this.sounds = [new Sound("Plopp", "./ItemPflanze2/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Score" },
        this.whenIReceiveNewScore
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Item Pflanze 2" },
        this.whenIReceiveItemPflanze2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Item Pflanze 2" },
        this.whenIReceiveItemPflanze3
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen)
    ];
  }

  *whenIReceiveNewScore() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenIReceiveItemPflanze2() {
    this.visible = true;
    while (true) {
      yield* this.wait(10);
      this.stage.vars.todespunktGegnerX = this.x - 8;
      this.stage.vars.todespunktGegnerY = this.y + 5;
      this.stage.vars.verdienst = this.random(4, 10);
      this.sprites["GeldzHler"].createClone();
      this.stage.vars.euro += this.toNumber(this.stage.vars.verdienst);
      yield;
    }
  }

  *whenIReceiveGameOver() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveItemPflanze3() {
    this.visible = true;
    while (true) {
      this.costumeNumber++;
      yield* this.wait(0.06);
      yield;
    }
  }

  *whenIReceiveMen() {
    this.visible = false;
  }
}
