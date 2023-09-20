/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lauter extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Lauter/costumes/Kostüm1.svg", {
        x: 103.5,
        y: 50.6875
      })
    ];

    this.sounds = [new Sound("Plopp", "./Lauter/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      )
    ];
  }

  *whenIReceiveMen() {
    while (true) {
      if (this.toString(this.stage.vars.men) === "Steuerung") {
        this.stage.watchers.lautstRke.visible = true;
        this.visible = true;
        if (this.touching("mouse") && this.mouse.down) {
          this.broadcast("Lauter");
          this.effects.brightness = 50;
          yield* this.wait(0.1);
          this.effects.brightness = 0;
          yield* this.wait(0.1);
        }
      } else {
        if (this.toString(this.stage.vars.men) === "Knopfauswahl") {
          this.visible = true;
        } else {
          this.visible = false;
          this.stage.watchers.lautstRke.visible = false;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.stage.watchers.lautstRke.visible = false;
  }

  *whenIReceiveSpielStart() {
    this.visible = false;
    this.stage.watchers.lautstRke.visible = false;
  }
}
