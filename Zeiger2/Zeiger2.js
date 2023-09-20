/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Zeiger2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Zeiger2/costumes/Kostüm1.svg", {
        x: 284.0000000000018,
        y: 8.637500000000273
      })
    ];

    this.sounds = [new Sound("Plopp", "./Zeiger2/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start!" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game Over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Hardcore!" },
        this.whenIReceiveHardcore
      )
    ];
  }

  *whenIReceiveStart() {
    this.stage.vars.autoaimDauer2 = 0.6;
    while (true) {
      yield* this.glide(
        this.toNumber(this.stage.vars.autoaimDauer2),
        this.sprites["Zeiger"].x,
        this.sprites["Zeiger"].y
      );
      this.broadcast("Schieß 2");
      yield* this.wait(this.toNumber(this.stage.vars.wartezeitPflanze3));
      yield;
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Pflanze3"].y - this.y,
          this.sprites["Pflanze3"].x - this.x
        )
      );
      yield;
    }
  }

  *whenIReceiveGameOver() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveHardcore() {
    this.visible = false;
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }
}
