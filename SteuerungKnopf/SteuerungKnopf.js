/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SteuerungKnopf extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./SteuerungKnopf/costumes/Kostüm1.svg", {
        x: 120.70625000000034,
        y: 71.16561567587812
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./SteuerungKnopf/sounds/Plopp.wav"),
      new Sound("Klick", "./SteuerungKnopf/sounds/Klick.wav")
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
          this.broadcast("Steuerung");
          this.stage.vars.men = "Steuerung";
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
