/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Zeiger extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Zeiger/costumes/Kostüm1.svg", {
        x: 25.814043460347648,
        y: -1.8939778097958708
      })
    ];

    this.sounds = [new Sound("Plopp", "./Zeiger/sounds/Plopp.wav")];

    this.triggers = [
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
        { name: "Hardcore!" },
        this.whenIReceiveHardcore
      )
    ];
  }

  *whenIReceiveStart() {
    this.stage.vars.autoaimDauer1 = 1;
    while (true) {
      yield* this.glide(
        this.toNumber(this.stage.vars.autoaimDauer1),
        this.toNumber(this.stage.vars.richtungErbseX),
        this.toNumber(this.stage.vars.richtungErbseY)
      );
      this.broadcast("Schieß!");
      yield* this.wait(this.toNumber(this.stage.vars.wartezeitPflanze2));
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
