/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Steuerung extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Steuerung/costumes/Kostüm1.svg", {
        x: 173.25,
        y: 181.76561000000004
      }),
      new Costume("Kostüm2", "./Steuerung/costumes/Kostüm2.svg", {
        x: 173.25,
        y: 181.76561500000003
      })
    ];

    this.sounds = [new Sound("Plopp", "./Steuerung/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Steuerung" },
        this.whenIReceiveSteuerung
      ),
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen)
    ];
  }

  *whenIReceiveSteuerung() {
    this.costume = "Kostüm1";
    this.visible = true;
    while (true) {
      if (this.keyPressed("up arrow")) {
        while (true) {
          if (this.keyPressed("down arrow")) {
            while (true) {
              if (this.keyPressed("up arrow")) {
                while (true) {
                  if (this.keyPressed("down arrow")) {
                    while (true) {
                      if (this.keyPressed("left arrow")) {
                        while (true) {
                          if (this.keyPressed("right arrow")) {
                            while (true) {
                              if (this.keyPressed("left arrow")) {
                                while (true) {
                                  if (this.keyPressed("right arrow")) {
                                    this.costume = "Kostüm2";
                                    this.broadcast("Geheime Musik");
                                    return;
                                  }
                                  yield;
                                }
                              }
                              yield;
                            }
                          }
                          yield;
                        }
                      }
                      yield;
                    }
                  }
                  yield;
                }
              }
              yield;
            }
          }
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveMen() {
    this.visible = false;
  }
}
