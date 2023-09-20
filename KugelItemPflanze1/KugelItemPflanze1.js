/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KugelItemPflanze1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./KugelItemPflanze1/costumes/Kostüm1.svg", {
        x: 9.125,
        y: 8.273439999999994
      })
    ];

    this.sounds = [new Sound("Plopp", "./KugelItemPflanze1/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "New Score" },
        this.whenIReceiveNewScore
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Item Pflanze 1" },
        this.whenIReceiveItemPflanze1
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      )
    ];

    this.vars.treffer = 0;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveNewScore() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    this.goto(-210, -62);
    while (!this.touching("edge")) {
      this.move(20);
      yield;
    }
    this.effects.ghost = 25;
    yield* this.wait(0.06);
    this.effects.ghost = 50;
    yield* this.wait(0.06);
    this.effects.ghost = 75;
    yield* this.wait(0.06);
    this.deleteThisClone();
  }

  *whenIReceiveItemPflanze1() {
    this.direction = 60;
    yield* this.wait(0.1);
    for (let i = 0; i < 60; i++) {
      this.direction += 1;
      yield* this.wait(0.5);
      yield;
    }
    this.direction = 60;
  }

  *startAsClone2() {
    while (true) {
      if (this.touching(this.sprites["Helikopter"].andClones())) {
        this.vars.treffer++;
        yield* this.wait(0.5);
        if (this.toNumber(this.vars.treffer) === 3) {
          this.effects.ghost = 25;
          yield* this.wait(0.06);
          this.effects.ghost = 50;
          yield* this.wait(0.06);
          this.effects.ghost = 75;
          yield* this.wait(0.06);
          this.deleteThisClone();
        }
      }
      yield;
    }
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
