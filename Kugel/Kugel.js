/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kugel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Erbse", "./Kugel/costumes/Erbse.svg", {
        x: 9.125,
        y: 8.273439999999994
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./Kugel/sounds/Plopp.wav"),
      new Sound("Pew", "./Kugel/sounds/Pew.wav"),
      new Sound("Pew2", "./Kugel/sounds/Pew2.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2)
    ];
  }

  *startAsClone() {
    this.goto(this.sprites["Pflanze"].x, this.sprites["Pflanze"].y);
    this.y -= 3.2;
    this.direction = this.radToScratch(
      Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
    );
    if (
      this.compare(this.direction, 10) < 0 &&
      this.compare(this.direction, -90) > 0
    ) {
      this.direction = 10;
    }
    if (
      this.compare(this.direction, 170) > 0 ||
      this.compare(this.direction, -90) < 0
    ) {
      this.direction = 170;
    }
    this.visible = true;
    yield* this.startSound("Pew");
    while (
      !(
        this.touching("edge") ||
        this.touching(this.sprites["Helikopter"].andClones())
      )
    ) {
      this.move(21);
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
    this.size = 50;
    yield* this.wait(0.0001);
    this.size = 70;
  }
}
