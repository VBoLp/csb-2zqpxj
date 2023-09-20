/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pflanze2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Peashooter", "./Pflanze2/costumes/Peashooter.svg", {
        x: 21.491084483353234,
        y: 21.963561678519056
      }),
      new Costume("Peashooter1", "./Pflanze2/costumes/Peashooter1.svg", {
        x: 21.49108196264811,
        y: 21.96355548478303
      }),
      new Costume("Peashooter2", "./Pflanze2/costumes/Peashooter2.svg", {
        x: 21.491085981324062,
        y: 21.96356024239151
      }),
      new Costume("Peashooter3", "./Pflanze2/costumes/Peashooter3.svg", {
        x: 21.491085981324062,
        y: 21.963550242391506
      })
    ];

    this.sounds = [new Sound("Plopp", "./Pflanze2/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Pflanze 2" },
        this.whenIReceivePflanze2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Schieß!" },
        this.whenIReceiveSchie
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
        { name: "Start!" },
        this.whenIReceiveStart3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "2 Upgrade 1" },
        this.whenIReceive2Upgrade1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "2 Upgrade 0" },
        this.whenIReceive2Upgrade0
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "2 Upgrade 2" },
        this.whenIReceive2Upgrade2
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

  *whenIReceivePflanze2() {
    this.effects.ghost = 75;
    this.visible = true;
    yield* this.wait(0.1);
    this.effects.ghost = 50;
    yield* this.wait(0.1);
    this.effects.ghost = 25;
    yield* this.wait(0.1);
    this.effects.ghost = 0;
  }

  *whenIReceiveSchie() {
    if (this.compare(this.stage.vars.planzeSchuss, 0) > 0) {
      this.sprites["Kugel2"].createClone();
    }
  }

  *whenIReceiveStart() {
    this.stage.vars.planzeSchuss = 0;
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveStart2() {
    this.costume = "Peashooter";
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Zeiger"].y - this.y,
          this.sprites["Zeiger"].x - this.x
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

  *whenIReceiveStart3() {
    this.costume = "Peashooter";
  }

  *whenIReceive2Upgrade1() {
    this.costume = "Peashooter1";
  }

  *whenIReceive2Upgrade0() {
    this.costume = "Peashooter3";
  }

  *whenIReceive2Upgrade2() {
    this.costume = "Peashooter2";
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
