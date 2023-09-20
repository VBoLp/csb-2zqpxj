/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MusikWahl extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Normal", "./MusikWahl/costumes/Normal.svg", {
        x: 83.24647887323948,
        y: 3.860548346865471
      }),
      new Costume("Splat", "./MusikWahl/costumes/Splat.svg", {
        x: 83.24647887323948,
        y: 5.398896221865527
      })
    ];

    this.sounds = [new Sound("Plopp", "./MusikWahl/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Spiel Start!" },
        this.whenIReceiveSpielStart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Geheime Musik" },
        this.whenIReceiveGeheimeMusik
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Steuerung" },
        this.whenIReceiveSteuerung
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveSpielStart() {
    this.visible = false;
  }

  *whenIReceiveGeheimeMusik() {
    while (true) {
      if (this.toString(this.stage.vars.men) === "Steuerung") {
        this.visible = true;
        if (this.touching("mouse") && this.mouse.down) {
          this.effects.brightness = 50;
          if (this.toString(this.stage.vars.musikart) === "Normal") {
            this.stage.vars.musikart = "Splat";
            this.broadcast("Musik In");
            yield* this.wait(0.2);
          } else {
            if (this.toString(this.stage.vars.musikart) === "Splat") {
              this.stage.vars.musikart = "Normal";
              this.broadcast("Musik In");
              yield* this.wait(0.2);
            }
          }
          this.effects.brightness = 0;
        }
      } else {
        if (this.toString(this.stage.vars.men) === "Knopfauswahl") {
          this.visible = true;
        } else {
          this.visible = false;
          return;
        }
      }
      yield;
    }
  }

  *whenIReceiveMen() {
    this.visible = false;
    while (true) {
      if (this.toString(this.stage.vars.musikart) === "Normal") {
        this.costume = "Normal";
      }
      if (this.toString(this.stage.vars.musikart) === "Splat") {
        this.costume = "Splat";
      }
      yield;
    }
  }

  *whenIReceiveSteuerung() {
    this.visible = false;
  }
}
