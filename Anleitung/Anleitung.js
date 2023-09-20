/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Anleitung extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Kostüm1", "./Anleitung/costumes/Kostüm1.svg", {
        x: 231.57812262247813,
        y: 174.76562000000013
      })
    ];

    this.sounds = [new Sound("Plopp", "./Anleitung/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Menü" }, this.whenIReceiveMen),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Anleitung" },
        this.whenIReceiveAnleitung
      )
    ];
  }

  *whenIReceiveMen() {
    this.visible = false;
  }

  *whenIReceiveAnleitung() {
    this.visible = true;
  }
}
