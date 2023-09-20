/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spielen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Spielen/costumes/Kostüm1.svg", {
        x: 157.3250000000001,
        y: 92.6685780830976
      })
    ];

    this.sounds = [
      new Sound("Plopp", "./Spielen/sounds/Plopp.wav"),
      new Sound("Klick", "./Spielen/sounds/Klick.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen)
    ];
  }

  *whenIReceiveMen() {
    this.stage.vars.men = "Menü";
    this.effects.brightness = 0;
    while (true) {
      if (this.toString(this.stage.vars.men) === "Menü") {
        yield* this.wait(0.02);
        this.visible = true;
        if (this.touching("mouse") && this.mouse.down) {
          this.stopAllSounds();
          this.stage.vars.men = "Im Spiel!";
          yield* this.startSound("Klick");
          this.broadcast("Musik In");
          if (this.toString(this.stage.vars.musik) === "An") {
            this.stage.vars.musik = "Aus";
            this.broadcast("Übergang");
            yield* this.wait(0.3);
            this.stage.vars.musik = "An";
          } else {
            this.stage.vars.musik = "Aus";
            this.broadcast("Übergang");
            yield* this.wait(0.3);
          }
          this.broadcast("Start!");
          this.effects.brightness = 50;
          this.visible = false;
          this.deleteThisClone();
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
