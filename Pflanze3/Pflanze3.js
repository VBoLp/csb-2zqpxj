/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pflanze3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Peashooter", "./Pflanze3/costumes/Peashooter.svg", {
        x: 21.742716770338433,
        y: 21.450569396682425
      }),
      new Costume("Peashooter1", "./Pflanze3/costumes/Peashooter1.svg", {
        x: 21.742717943972224,
        y: 21.450565727174563
      }),
      new Costume("Peashooter2", "./Pflanze3/costumes/Peashooter2.svg", {
        x: 21.742711962648144,
        y: 21.45056048478304
      }),
      new Costume("Peashooter3", "./Pflanze3/costumes/Peashooter3.svg", {
        x: 23.535903512712935,
        y: 23.542929399704548
      }),
      new Costume("Peashooter4", "./Pflanze3/costumes/Peashooter4.svg", {
        x: 21.654085399696896,
        y: 21.7101166362539
      }),
      new Costume("Peashooter5", "./Pflanze3/costumes/Peashooter5.svg", {
        x: 22.466007772701033,
        y: 22.858363306196992
      }),
      new Costume("Peashooter6", "./Pflanze3/costumes/Peashooter6.svg", {
        x: 21.997479862067877,
        y: 21.370958197775735
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./Pflanze3/sounds/Plopp.wav"),
      new Sound("Feuer", "./Pflanze3/sounds/Feuer.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pflanze 3" },
        this.whenIReceivePflanze3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Schieß 2" },
        this.whenIReceiveSchie2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "3 Upgrade 1" },
        this.whenIReceive3Upgrade1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "3 Upgrade 2" },
        this.whenIReceive3Upgrade2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "3 Upgrade 0" },
        this.whenIReceive3Upgrade0
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart4
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Highscore Menü" },
        this.whenIReceiveHighscoreMen
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hardcore!" },
        this.whenIReceiveHardcore
      )
    ];
  }

  *whenIReceivePflanze3() {
    this.effects.ghost = 75;
    this.visible = true;
    yield* this.wait(0.1);
    this.effects.ghost = 50;
    yield* this.wait(0.1);
    this.effects.ghost = 25;
    yield* this.wait(0.1);
    this.effects.ghost = 0;
  }

  *whenIReceiveSchie2() {
    if (this.compare(this.stage.vars.pflanzeSchuss2, 0) > 0) {
      this.sprites["Kugel3"].createClone();
    }
  }

  *whenIReceiveStart() {
    this.stage.vars.pflanzeSchuss2 = 0;
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveStart2() {
    this.costume = "Peashooter";
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Zeiger2"].y - this.y,
          this.sprites["Zeiger2"].x - this.x
        )
      );
      if (
        this.compare(this.direction, 30) < 0 &&
        this.compare(this.direction, -90) > 0
      ) {
        this.direction = 30;
      }
      if (
        this.compare(this.direction, 130) > 0 ||
        this.compare(this.direction, -90) < 0
      ) {
        this.direction = 130;
      }
      yield;
    }
  }

  *whenIReceive3Upgrade1() {
    this.costume = "Peashooter1";
  }

  *whenIReceive3Upgrade2() {
    this.costume = "Peashooter2";
  }

  *whenIReceive3Upgrade0() {
    while (true) {
      this.costume = "Peashooter3";
      yield* this.startSound("Feuer");
      yield* this.wait(0.05);
      this.costume = "Peashooter4";
      yield* this.wait(0.05);
      this.costume = "Peashooter5";
      yield* this.wait(0.05);
      this.costume = "Peashooter6";
      yield* this.wait(0.05);
      yield;
    }
  }

  *whenIReceiveStart3() {
    this.costume = "Peashooter";
  }

  *whenIReceiveStart4() {
    this.costume = "Peashooter";
  }

  *whenIReceiveMen() {
    this.visible = false;
  }

  *whenIReceiveHighscoreMen() {
    this.visible = false;
  }

  *whenIReceiveHardcore() {
    this.visible = false;
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }
}
