/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AnleitungKnopf extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./AnleitungKnopf/costumes/Kostüm1.svg", {
        x: 154.24999999999983,
        y: 73.52545158867945
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./AnleitungKnopf/sounds/Plopp.wav"),
      new Sound("Klick", "./AnleitungKnopf/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen)
    ];
  }

  *whenIReceiveMen() {
    this.effects.brightness = 0;
    while (true) {
      if (this.toString(this.stage.vars.men) === "Menü") {
        this.visible = true;
        if (this.touching("mouse") && this.mouse.down) {
          this.effects.brightness = 50;
          yield* this.startSound("Klick");
          yield* this.wait(0.08);
          this.effects.brightness = 0;
          this.broadcast("Übergang");
          yield* this.wait(0.24);
          this.broadcast("Musik In");
          this.broadcast("Anleitung");
          this.stage.vars.men = "Anleitung";
        }
      } else {
        if (this.toString(this.stage.vars.men) === "Beenden?") {
          this.visible = true;
        } else {
          this.visible = false;
        }
      }
      yield;
    }
  }
}
