/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ZurCk extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./ZurCk/costumes/Kostüm1.svg", {
        x: 151.00000000000009,
        y: 81.75966617009759
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./ZurCk/sounds/Plopp.wav"),
      new Sound("Klick", "./ZurCk/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen)
    ];
  }

  *whenIReceiveMen() {
    this.effects.brightness = 0;
    while (true) {
      if (
        this.toString(this.stage.vars.men) === "Steuerung" ||
        this.toString(this.stage.vars.men) === "Anleitung" ||
        this.toString(this.stage.vars.men) === "Highscore" ||
        this.toString(this.stage.vars.men) === "Credits"
      ) {
        this.visible = true;
        if (this.touching("mouse") && this.mouse.down) {
          this.effects.brightness = 50;
          yield* this.startSound("Klick");
          yield* this.wait(0.08);
          this.effects.brightness = 0;
          this.broadcast("Übergang");
          yield* this.wait(0.24);
          this.stage.watchers.highscore.visible = false;
          this.stage.watchers.platz2.visible = false;
          this.stage.watchers.platz3.visible = false;
          this.stage.watchers.name1.visible = false;
          this.stage.watchers.name2.visible = false;
          this.stage.watchers.name3.visible = false;
          this.broadcast("Menü");
          this.broadcast("Musik In");
          yield* this.wait(0.15);
          this.visible = false;
          this.stage.vars.men = "Menü";
          return;
        }
      } else {
        if (this.toString(this.stage.vars.men) === "Knopfauswahl") {
          this.visible = true;
        } else {
          this.visible = false;
        }
      }
      yield;
    }
  }
}
