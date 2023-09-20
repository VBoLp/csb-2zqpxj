/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kugel2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Erbse", "./Kugel2/costumes/Erbse.svg", {
        x: 9.125,
        y: 8.273439999999994
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./Kugel2/sounds/Plopp.wav"),
      new Sound("Pew", "./Kugel2/sounds/Pew.wav"),
      new Sound("Pew2", "./Kugel2/sounds/Pew2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hardcore!" },
        this.whenIReceiveHardcore
      )
    ];
  }

  *startAsClone() {
    this.goto(this.sprites["Pflanze2"].x, this.sprites["Pflanze2"].y);
    this.y -= 3.2;
    this.visible = true;
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
    yield* this.startSound("Pew");
    while (
      !(
        this.touching("edge") ||
        this.touching(this.sprites["Helikopter"].andClones())
      )
    ) {
      this.move(24);
      yield;
    }
    yield* this.wait(0.05);
    this.effects.ghost = 25;
    yield* this.wait(0.06);
    this.effects.ghost = 50;
    yield* this.wait(0.06);
    this.effects.ghost = 75;
    yield* this.wait(0.06);
    this.deleteThisClone();
  }

  *whenIReceiveSpielStart() {
    this.visible = false;
  }

  *startAsClone2() {
    this.size = 30;
    yield* this.wait(0.0001);
    this.size = 45;
    yield* this.wait(0.0001);
    this.size = 60;
  }

  *whenIReceiveHardcore() {
    this.visible = false;
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }
}
